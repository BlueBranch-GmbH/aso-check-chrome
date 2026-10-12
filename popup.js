const API_BASE = 'https://app-store-analyzer.appmarketinghub.de/api/v1';
const MAX_SCORE = 30;
const REQUEST_TIMEOUT_MS = 60000;
const STORE_HOSTS = ['apps.apple.com', 'play.google.com'];

// Maximalpunkte je Kategorie, siehe EvaluationConfig im app-store-analyzer-api
const CATEGORIES = [
  { key: 'titleScore', label: 'App-Name', max: 8 },
  { key: 'subtitleScore', label: { apple: 'Untertitel', google: 'Kurzbeschreibung' }, max: 8 },
  { key: 'titleMatchScore', label: 'Keine Wort-Doppelungen', max: 6 },
  { key: 'descriptionScore', label: 'Beschreibung', max: 8 },
];

const $ = (id) => document.getElementById(id);
const steps = ['step-input', 'step-loading', 'step-result', 'step-sent'];

let currentResult = null;

function showStep(id) {
  steps.forEach((step) => { $(step).hidden = step !== id; });
}

function isStoreUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && STORE_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}

// Apple liefert das App-Icon als breites 1200×630-Vorschaubild; mzstatic skaliert über den Dateinamen
function squareLogoUrl(url) {
  return url.replace(/\/\d+x\d+[a-z]*\.(png|jpe?g|webp)$/i, '/176x176bb.png');
}

function scoreColor(points, max) {
  const ratio = points / max;
  if (ratio >= 25 / 30) return 'var(--score-high)';
  if (ratio >= 15 / 30) return 'var(--score-mid)';
  return 'var(--score-low)';
}

/**
 * Kurzes Fazit unter dem Score-Kreis.
 * Gibt einen Satz für den Gesamtscore (0–30) zurück, oder '' für „kein Fazit anzeigen“.
 */
function getScoreVerdict(sumScore) {
  // Gleiche Schwellen wie die Farben des Score-Kreises im Web-Tool (15 / 25 Punkte)
  if (sumScore >= 25) return 'Starker Store-Eintrag – jetzt geht es um den Feinschliff.';
  if (sumScore >= 15) return 'Solide Basis – hier steckt noch Ranking-Potenzial.';
  return 'Dein Store-Eintrag verschenkt viel Sichtbarkeit.';
}

async function postJson(path, body) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

function renderResult(result) {
  currentResult = result;
  const platform = result.platform === 'apple' ? 'apple' : 'google';

  $('app-name').textContent = result.appName;
  $('app-platform').textContent = platform === 'apple' ? 'Apple App Store' : 'Google Play Store';
  if (result.logoUrl) {
    $('app-logo').src = squareLogoUrl(result.logoUrl);
    $('app-logo').hidden = false;
  } else {
    $('app-logo').hidden = true;
  }

  const circumference = 2 * Math.PI * 42;
  const progress = $('score-progress');
  progress.style.stroke = scoreColor(result.sumScore, MAX_SCORE);
  progress.style.strokeDasharray = `0 ${circumference}`;
  requestAnimationFrame(() => {
    progress.style.strokeDasharray = `${(result.sumScore / MAX_SCORE) * circumference} ${circumference}`;
  });
  $('score-sum').textContent = result.sumScore;

  const verdict = getScoreVerdict(result.sumScore);
  $('score-verdict').textContent = verdict;
  $('score-verdict').hidden = !verdict;

  const list = $('score-breakdown');
  list.replaceChildren(
    ...CATEGORIES.map(({ key, label, max }) => {
      const points = Number(result[key]) || 0;
      const item = document.createElement('li');
      const name = document.createElement('span');
      name.textContent = typeof label === 'string' ? label : label[platform];
      const value = document.createElement('span');
      value.className = 'breakdown__points';
      value.textContent = `${points}/${max}`;
      const bar = document.createElement('div');
      bar.className = 'breakdown__bar';
      const fill = document.createElement('div');
      fill.className = 'breakdown__fill';
      fill.style.width = `${(points / max) * 100}%`;
      fill.style.background = scoreColor(points, max);
      bar.append(fill);
      item.append(name, value, bar);
      return item;
    }),
  );

  showStep('step-result');
}

async function analyze(url) {
  $('analyze-error').textContent = '';
  $('app-url').value = url;
  showStep('step-loading');

  try {
    const result = await postJson('/analyze', { url });
    await chrome.storage.session.set({ lastAnalysis: { url, result } });
    renderResult(result);
  } catch (error) {
    $('analyze-error').textContent = error.name === 'AbortError'
      ? 'Die Analyse hat zu lange gedauert. Bitte versuche es noch einmal.'
      : 'Diese App konnte leider nicht analysiert werden. Bitte prüfe den Link oder versuche es mit einer anderen App.';
    showStep('step-input');
  }
}

async function sendReport(event) {
  event.preventDefault();
  const name = $('user-name').value.trim();
  const email = $('user-email').value.trim();
  const errorEl = $('report-error');
  errorEl.textContent = '';

  if (!name || !$('user-email').checkValidity() || !email) {
    errorEl.textContent = 'Bitte gib deinen Namen und eine gültige E-Mail-Adresse ein.';
    return;
  }

  const button = $('report-submit');
  button.disabled = true;
  button.textContent = 'Wird gesendet …';

  try {
    const { appName, appId, titleScore, subtitleScore, titleMatchScore, descriptionScore, sumScore, url, platform } = currentResult;
    await postJson('/evaluation', {
      name, email, appName, appId, titleScore, subtitleScore, titleMatchScore, descriptionScore, sumScore, url, platform,
      // Server verschickt damit den BlueBranch-Bericht statt der App-Marketing-Hub-Mail, ohne Newsletter
      brand: 'bluebranch',
    });
    showStep('step-sent');
  } catch {
    errorEl.textContent = 'Der Bericht konnte nicht verschickt werden. Bitte versuche es später erneut.';
  } finally {
    button.disabled = !$('consent').checked;
    button.textContent = 'Bericht anfordern';
  }
}

async function restart() {
  currentResult = null;
  await chrome.storage.session.remove('lastAnalysis');
  $('app-url').value = '';
  $('report-form').reset();
  $('report-submit').disabled = true;
  showStep('step-input');
  $('app-url').focus();
}

async function init() {
  $('analyze-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const url = $('app-url').value.trim();
    if (!isStoreUrl(url)) {
      $('analyze-error').textContent = 'Bitte füge einen Link aus dem Apple App Store oder Google Play Store ein.';
      return;
    }
    analyze(url);
  });
  $('consent').addEventListener('change', (event) => {
    $('report-submit').disabled = !event.target.checked;
  });
  $('report-form').addEventListener('submit', sendReport);
  $('restart').addEventListener('click', restart);
  $('restart-sent').addEventListener('click', restart);

  // activeTab: Die URL des aktiven Tabs ist nur lesbar, weil der Nutzer das Popup geöffnet hat
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabUrl = tab?.url ?? '';

  // Das Popup schließt sich bei jedem Klick daneben – letzte Analyse für denselben Tab wiederherstellen
  const { lastAnalysis } = await chrome.storage.session.get('lastAnalysis');
  if (lastAnalysis && (!isStoreUrl(tabUrl) || lastAnalysis.url === tabUrl)) {
    $('app-url').value = lastAnalysis.url;
    renderResult(lastAnalysis.result);
    return;
  }

  if (isStoreUrl(tabUrl)) {
    analyze(tabUrl);
  } else {
    $('app-url').focus();
  }
}

init();
