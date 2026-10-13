# Offene Punkte

Stand 13.10.2026. Version 1.0.1 ist im Chrome Web Store eingereicht, nur mit deutschem Store-Eintrag.

## Englische Lokalisierung

Das Paket enthält bisher nur Name und Kurzbeschreibung auf Englisch (`_locales/en`). Store-Eintrag, Grafiken
und Oberfläche gibt es nur auf Deutsch. Für einen vollwertigen englischen Eintrag muss alles übersetzt werden:

**Erweiterung (neue Version nötig)**
- [ ] Popup-Texte in `_locales/de` und `_locales/en` auslagern und über `chrome.i18n.getMessage` setzen (`popup.html`, `popup.js`: Überschriften, Hinweise, Formular, Fehlermeldungen, Fazit-Sätze, Kategorien wie „Untertitel“/„Kurzbeschreibung“)
- [ ] Einwilligungstext und Links im Ergebnis auf Englisch (Datenschutzerklärung bleibt deutsch, Hinweis „in German“)
- [ ] Bericht per E-Mail: Das Backend verschickt nur deutsche Mails. Entweder englische Vorlage (`emails/bluebranch/`, Sprache als Parameter in `/evaluation`) oder im Popup darauf hinweisen, dass der Bericht deutsch ist
- [ ] `tools/popup-test.cjs` mit englischer Browsersprache laufen lassen, Screenshot prüfen
- [ ] Version anheben (1.0.2), Paket bauen, hochladen

**Store-Grafiken auf Englisch**
- [ ] `store/popup-result.png` aus dem englischen Popup neu erzeugen
- [ ] Screenshot 1280×800: Überschrift „Test your app store optimization in one click“, Stichpunkte übersetzen (`store/screenshot.html` als englische Variante)
- [ ] Werbekachel 440×280: „ASO-Check / Test your app store optimization“ (`store/promo.html`)
- [ ] Mit `tools/render.cjs` rendern, als `store/en/…` ablegen

**Dashboard**
- [ ] Store-Eintrag → Sprache „Englisch“ hinzufügen
- [ ] Ausführliche Beschreibung aus [`store/LISTING.md`](store/LISTING.md#store-eintrag-englisch-zweite-sprache) einsetzen; den Satz „The interface is in German“ entfernen, sobald das Popup übersetzt ist
- [ ] Englische Grafiken dem englischen Eintrag zuordnen

## Nach der Freigabe

- [ ] Angaben an taismo: Web-Store-Adresse, Erweiterungs-ID, Version 1.0.1, Repo https://github.com/BlueBranch-GmbH/aso-check-chrome
- [ ] Bei Microsoft Edge Add-ons einreichen (gleiches Paket)

## bluebranch.de

- [ ] Datenschutzerklärung: Überschrift des Abschnitts zur Erweiterung auf den neuen Namen „ASO-Check: App Store Optimierung testen by BlueBranch“ ändern
- [ ] Eigene noindex-Hilfsseiten für Installation und Deinstallation (z. B. /aso-check/willkommen, /aso-check/feedback), danach Links in `background.js` tauschen und neue Version hochladen

## Später

- [ ] Altes privates Repo `bluebranch-aso-extension` archivieren oder löschen (enthält noch die Gilroy-Schrift)
- [ ] Backend: `BLUEBRANCH_ADMIN_EMAIL` in Portainer setzen, damit Leads bei BlueBranch statt beim App Marketing Hub landen
- [ ] Backend: Beschreibung mit genau 3.500 Zeichen bekommt 0 Punkte (Lücke zwischen LOWER_EQUALS 3499 und GREATER 3500 in `evaluation.config.ts`)
