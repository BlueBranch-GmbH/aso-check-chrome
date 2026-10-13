# Chrome Web Store – Eingaben für „ASO-Check: App Store Optimierung testen by BlueBranch“

## Paket
`dist/bluebranch-aso-check-1.0.1.zip`

Name und Kurzbeschreibung kommen aus dem Paket (`_locales/de` und `_locales/en`) und lassen sich im
Dashboard nicht überschreiben. Der Name ist in beiden Sprachen gleich, damit die Marke einheitlich bleibt.

## Store-Eintrag Deutsch (Hauptsprache)

**Name** (53 Zeichen): `ASO-Check: App Store Optimierung testen by BlueBranch`

**Kurzbeschreibung** (132 Zeichen, aus dem Paket):
```
App Store Optimierung testen: kostenloser ASO-Check für App Store und Google Play, mit Score für App-Name, Untertitel, Beschreibung.
```

**Ausführliche Beschreibung**

```
Der ASO-Check testet die App Store Optimierung einer App mit einem Klick. Er zeigt, wie gut ihr Eintrag im Apple App Store oder im Google Play Store aufgestellt ist, und bewertet App-Name, Untertitel und Beschreibung mit einem Score von 0 bis 30 Punkten.

So funktioniert der ASO-Check:
• Öffne die App im App Store oder bei Google Play und klicke auf das Symbol der Erweiterung. Die Analyse startet automatisch.
• Alternativ fügst du den Link zu einer beliebigen App ein, auch zu Apps der Konkurrenz.

Was der ASO-Check prüft:
• App-Name (bis 8 Punkte): ob der Name das Zeichenlimit von 30 Zeichen für Marke und wichtigste Suchbegriffe nutzt.
• Untertitel bzw. Kurzbeschreibung (bis 8 Punkte): ob die 30 Zeichen im App Store oder die 80 Zeichen bei Google Play ausgeschöpft sind.
• Wort-Doppelungen (bis 6 Punkte): ob Wörter aus dem App-Namen im Untertitel wiederholt werden und dort Platz für weitere Keywords verschenken.
• Beschreibung (bis 8 Punkte): ob die Beschreibung die Länge hat, die Store-Suche und Nutzer erwarten (bis 4.000 Zeichen).

Auf Wunsch schicken wir dir kostenlos einen ausführlichen ASO-Bericht mit konkreten Tipps per E-Mail.

Für wen: App-Entwickler, Product Owner, Marketing-Teams und Agenturen, die App Store SEO für iOS- und Android-Apps regelmäßig prüfen wollen.

Datenschutz: Die Erweiterung liest nur die Adresse des geöffneten Tabs und schickt sie nur dann an unseren Analyseserver, wenn es eine Seite des App Store oder von Google Play ist. Name und E-Mail-Adresse verarbeiten wir nur, wenn du den Bericht anforderst. Mehr in unserer Datenschutzerklärung: https://www.bluebranch.de/datenschutzerklaerung

Der ASO-Check bewertet Länge und Aufbau der Texte, nicht Suchvolumen oder Rankings einzelner Keywords. Für eine vollständige App Store Optimierung mit Keyword-Recherche gibt es die ASO-Betreuung von BlueBranch: https://www.bluebranch.de/app-store-optimierung-aso

Entwickelt von der BlueBranch GmbH, App- und Softwareagentur aus Fürth bei Nürnberg.
```

**Kategorie:** Tools (Alternative: Entwicklertools)
**Sprache:** Deutsch

**Grafiken**
- Store-Symbol 128×128: `store/store-icon-128x128.png`
- Screenshot 1280×800: `store/screenshot-1280x800.png` (Bildunterschrift „App Store Optimierung testen mit einem Klick“)
- Kleine Werbekachel 440×280: `store/promo-440x280.png` („ASO-Check / App Store Optimierung testen“)

**Startseite:** https://www.bluebranch.de/app-store-optimierung-aso
**Support-URL:** https://www.bluebranch.de/kontakt

## Store-Eintrag Englisch (zweite Sprache)

Im Dashboard unter „Store-Eintrag“ die Sprache „Englisch“ hinzufügen. Name wie oben, Kurzbeschreibung
kommt aus `_locales/en` (131 Zeichen):
```
Test your app store optimization in one click: free ASO tool for App Store and Google Play that scores name, subtitle, description.
```

**Detailed description**

```
ASO-Check tests the app store optimization of any app with one click. It shows how well a listing on the Apple App Store or Google Play is set up and scores the app name, subtitle and description from 0 to 30 points.

How it works:
• Open an app on the App Store or Google Play and click the extension icon. The check starts automatically.
• Or paste the link to any app, including your competitors' apps.

What ASO-Check scores:
• App name (up to 8 points): whether the name uses the 30-character limit for brand and main keywords.
• Subtitle or short description (up to 8 points): whether the 30 characters on the App Store or 80 characters on Google Play are used.
• Duplicate words (up to 6 points): whether words from the app name are repeated in the subtitle, wasting room for more keywords.
• Description (up to 8 points): whether the description has the length that store search and users expect (up to 4,000 characters).

The interface is in German. On request we email you a free, detailed ASO report with concrete recommendations.

Who it is for: app developers, product owners, marketing teams and agencies who check App Store SEO for iOS and Android apps regularly.

Privacy: the extension only reads the address of the open tab and only sends it to our analysis server if it is an App Store or Google Play page. Name and email address are only processed if you request the report. Privacy policy (German): https://www.bluebranch.de/datenschutzerklaerung

ASO-Check rates the length and structure of your texts, not search volume or keyword rankings. For full app store optimization including keyword research, BlueBranch offers ASO support: https://www.bluebranch.de/app-store-optimierung-aso

Built by BlueBranch GmbH, an app and software agency from Fürth near Nuremberg, Germany.
```

Screenshot und Werbekachel bleiben auf Deutsch (die Oberfläche ist deutsch).

## Links aus der Erweiterung (UTM)

Alle Links tragen `utm_source=chrome-extension&utm_medium=aso-check&utm_campaign=<stelle>`.

| Stelle | Ziel | `utm_campaign` |
|---|---|---|
| `homepage_url` (Link „Website“ im Store) | /app-store-optimierung-aso | keine |
| Nach der Installation (`onInstalled`, nur `install`) | /app-store-optimierung-aso | `willkommen` |
| Nach der Deinstallation (`setUninstallURL`) | /termin | `feedback` |
| Im Ergebnis, ASO-Leistung | /app-store-optimierung-aso | `bericht` |
| Im Ergebnis, Praxisbeispiel | /projekte/luuki-vorschule-aso | `referenz` |
| Im Ergebnis und nach dem Bericht, Kontakt | /termin | `termin` |
| Footer | / | `footer` |

Installation und Deinstallation zeigen vorerst auf bestehende Seiten. Sobald es eigene noindex-Hilfsseiten
gibt (z. B. /aso-check/willkommen und /aso-check/feedback), in `background.js` tauschen und eine neue
Version hochladen.

## Datenschutz (Tab „Datenschutzpraktiken“)

**Alleiniger Zweck (Single purpose)**
```
Die Erweiterung analysiert den Store-Eintrag einer App im Apple App Store oder Google Play Store und zeigt einen ASO-Score (App Store Optimization) für App-Name, Untertitel und Beschreibung an.
```

**Begründung „activeTab“**
```
Wenn der Nutzer auf das Erweiterungs-Icon klickt, wird die URL des aktiven Tabs gelesen. Ist es eine Seite aus dem Apple App Store oder Google Play Store, startet die Analyse dieser App automatisch. Andere Inhalte des Tabs werden nicht gelesen.
```

**Begründung „storage“**
```
Das letzte Analyseergebnis wird für die laufende Browsersitzung zwischengespeichert (chrome.storage.session), damit es beim erneuten Öffnen des Popups nicht neu berechnet werden muss.
```

**Begründung Host-Berechtigung (app-store-analyzer.appmarketinghub.de)**
```
Die Store-URL wird an den Analyse-Server der BlueBranch GmbH geschickt, der den Store-Eintrag auswertet und den Score zurückgibt. Auf Wunsch des Nutzers wird darüber auch der ASO-Bericht per E-Mail angefordert.
```

**Remote-Code:** Nein, ich verwende keinen Remote-Code.

**Datennutzung – welche Daten werden erhoben**
- ☑ Personenbezogene Daten (Name, E-Mail-Adresse): nur wenn der Nutzer den Bericht anfordert
- ☑ Websiteinhalte? → Nein. Es wird nur die vom Nutzer gewählte Store-URL übermittelt.
- ☐ alles andere nicht

**Die drei Bestätigungen ankreuzen:**
- Daten werden nicht an Dritte verkauft oder übertragen (außer für die genannten Zwecke)
- Daten werden nicht für Zwecke verwendet, die nichts mit dem alleinigen Zweck zu tun haben
- Daten werden nicht zur Bestimmung der Kreditwürdigkeit oder für Kreditzwecke verwendet

**Datenschutzerklärung-URL:** https://www.bluebranch.de/datenschutzerklaerung
→ Dort muss vor dem Einreichen ein Abschnitt zur Chrome-Erweiterung stehen (siehe unten).

## Textvorschlag für die Datenschutzerklärung

```
Chrome-Erweiterung „ASO-Check: App Store Optimierung testen by BlueBranch“

Wenn du unsere Browser-Erweiterung nutzt, übermitteln wir die Adresse (URL) des von dir gewählten App-Store- oder Google-Play-Eintrags an unseren Analyse-Server (app-store-analyzer.appmarketinghub.de), um den ASO-Score zu berechnen. Weitere Inhalte deiner Tabs oder deinen Browserverlauf lesen wir nicht.

Forderst du den detaillierten ASO-Bericht an, verarbeiten wir zusätzlich deinen Namen und deine E-Mail-Adresse, um dir den Bericht zu schicken und dich bei Bedarf dazu zu kontaktieren (Art. 6 Abs. 1 lit. a DSGVO). Eine Anmeldung zu einem Newsletter erfolgt nicht. Du kannst deine Einwilligung jederzeit per E-Mail an uns widerrufen.

Das letzte Analyseergebnis wird nur lokal in deinem Browser für die laufende Sitzung gespeichert und beim Schließen des Browsers gelöscht.
```

## Vertrieb
- Sichtbarkeit: Öffentlich
- Regionen: Alle (oder nur DACH)
- Händlerstatus (EWR): Händlerkonto – Kontaktdaten der BlueBranch GmbH
