// Feste Einstiege auf bluebranch.de, damit Installationen und Deinstallationen in Plausible
// über die UTM-Parameter zuzuordnen sind. Eigene noindex-Seiten folgen später; bis dahin
// zeigen beide Links auf bestehende Seiten.
const SITE = 'https://www.bluebranch.de';

function trackedUrl(path, campaign) {
  const url = new URL(path, SITE);
  url.searchParams.set('utm_source', 'chrome-extension');
  url.searchParams.set('utm_medium', 'aso-check');
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}

chrome.runtime.onInstalled.addListener(({ reason }) => {
  // Nur bei der Erstinstallation, nicht bei Updates oder Chrome-Updates
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: trackedUrl('/app-store-optimierung-aso', 'willkommen') });
  }
});

chrome.runtime.setUninstallURL(trackedUrl('/termin', 'feedback'));
