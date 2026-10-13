# Offene Punkte

Stand 13.10.2026. Version 1.0.1 ist im Chrome Web Store eingereicht, nur mit deutschem Store-Eintrag.

## Englischer Store-Eintrag

Das Paket enthält die englische Kurzbeschreibung schon (`_locales/en`), im Dashboard fehlt aber der englische Eintrag.

- [ ] Dashboard → Store-Eintrag → Sprache „Englisch“ hinzufügen
- [ ] Ausführliche Beschreibung aus [`store/LISTING.md`](store/LISTING.md#store-eintrag-englisch-zweite-sprache) einsetzen
- [ ] Screenshot und Werbekachel zuordnen (vorerst die deutschen Grafiken; die Oberfläche ist deutsch)
- [ ] Optional: englische Grafiken mit „Test your app store optimization in one click“ rendern (`store/screenshot.html`, `tools/render.cjs`)

Der Eintrag lässt sich nachträglich ergänzen, ohne ein neues Paket hochzuladen.

## Nach der Freigabe

- [ ] Angaben an taismo: Web-Store-Adresse, Erweiterungs-ID, Version 1.0.1, Repo https://github.com/BlueBranch-GmbH/aso-check-chrome
- [ ] Bei Microsoft Edge Add-ons einreichen (gleiches Paket)

## bluebranch.de

- [ ] Datenschutzerklärung: Überschrift des Abschnitts zur Erweiterung auf den neuen Namen „ASO-Check: App Store Optimierung testen by BlueBranch“ ändern
- [ ] Eigene noindex-Hilfsseiten für Installation und Deinstallation (z. B. /aso-check/willkommen, /aso-check/feedback), danach Links in `background.js` tauschen und neue Version hochladen

## Später

- [ ] Popup-Oberfläche auf Englisch übersetzen (`_locales/en`, `chrome.i18n`), falls der englische Eintrag Installationen bringt
- [ ] Altes privates Repo `bluebranch-aso-extension` archivieren oder löschen (enthält noch die Gilroy-Schrift)
- [ ] Backend: `BLUEBRANCH_ADMIN_EMAIL` in Portainer setzen, damit Leads bei BlueBranch statt beim App Marketing Hub landen
- [ ] Backend: Beschreibung mit genau 3.500 Zeichen bekommt 0 Punkte (Lücke zwischen LOWER_EQUALS 3499 und GREATER 3500 in `evaluation.config.ts`)
