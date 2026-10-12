# ASO App-Analyse von BlueBranch (Chrome-Extension)

Popup-Extension (Manifest V3), die einen App-Store- oder Google-Play-Link an den
`app-store-analyzer-api` schickt und den ASO-Score (0–30) mit Aufschlüsselung zeigt.
Auf Wunsch wird der detaillierte Bericht per Mail angefordert.

- Store-Texte, Datenschutzangaben und Grafiken: `store/`
- Branding nach BlueBranch-Design-Handbuch (Gilroy/Titillium, Navy/Brand Blue, Original-Logo und Avatar)

## Paket bauen

```bash
zip -qr dist/bluebranch-aso-app-analyse-<version>.zip manifest.json popup.html popup.css popup.js icons fonts brand/logo-white.svg
```

## Testen

`chrome://extensions` → Entwicklermodus → „Entpackte Erweiterung laden“ → diesen Ordner wählen.
`tools/popup-test.cjs` rendert das Popup mit simulierten chrome-APIs gegen die Live-API (Puppeteer, arm64-Node).
