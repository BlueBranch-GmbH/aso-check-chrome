# ASO-Check: App Store Optimierung testen by BlueBranch

Chrome-Erweiterung (Manifest V3), die die App Store Optimierung (ASO) einer App mit einem Klick testet.
Sie schickt den Link eines Eintrags im Apple App Store oder bei Google Play an den Analyseserver und zeigt
einen ASO-Score von 0 bis 30 Punkten für App-Name, Untertitel bzw. Kurzbeschreibung, Wort-Doppelungen und
Beschreibung. Auf Wunsch kommt ein ausführlicher ASO-Bericht per E-Mail.

- Website: https://www.bluebranch.de/app-store-optimierung-aso
- Store-Texte, Datenschutzangaben und Grafiken: [`store/`](store/)

[English version below](#english)

## Aufbau

| Datei | Zweck |
|---|---|
| `popup.html`, `popup.css`, `popup.js` | Oberfläche: erkennt die Store-Seite im aktiven Tab, zeigt Score und Berichtsformular |
| `background.js` | Öffnet nach der Installation die ASO-Seite auf bluebranch.de, setzt die Seite nach der Deinstallation |
| `_locales/` | Name und Kurzbeschreibung auf Deutsch und Englisch |
| `tools/` | Puppeteer-Skripte zum Testen des Popups und Rendern der Store-Grafiken |

Berechtigungen: `activeTab` (Adresse des Tabs beim Klick aufs Symbol), `storage` (letztes Ergebnis für die
laufende Sitzung), Host-Zugriff nur auf den Analyseserver.

## Paket bauen

Die Überschriftenschrift Gilroy ExtraBold ist kommerziell lizenziert und deshalb nicht im Repo. Für das
Store-Paket `fonts/Gilroy-ExtraBold.woff2` aus dem BlueBranch-Design-Handbuch lokal ablegen. Ohne die Datei
fällt die Oberfläche auf Titillium Web zurück.

```bash
zip -qr dist/bluebranch-aso-check-<version>.zip manifest.json background.js popup.html popup.css popup.js _locales icons fonts brand/logo-white.svg
```

## Testen

`chrome://extensions` → Entwicklermodus → „Entpackte Erweiterung laden“ → diesen Ordner wählen.
`tools/popup-test.cjs` rendert das Popup mit simulierten chrome-APIs gegen die Live-API.

## Lizenz

Code unter [MIT-Lizenz](LICENSE). Logo, Schriften und Name „BlueBranch“ sind davon ausgenommen.

---

## English

ASO-Check is a Chrome extension (Manifest V3) that tests the app store optimization of any app in one click.
It sends the link of an Apple App Store or Google Play listing to the analysis server and shows an ASO score
from 0 to 30 for app name, subtitle or short description, duplicate words and description. A detailed ASO
report can be requested by email. The interface is in German.

- Website: https://www.bluebranch.de/app-store-optimierung-aso
- Build: see the `zip` command above. Test: load the folder as an unpacked extension in `chrome://extensions`.
- License: code under [MIT](LICENSE); the BlueBranch logo, fonts and name are excluded.

Built by [BlueBranch GmbH](https://www.bluebranch.de), an app and software agency from Fürth near Nuremberg, Germany.
