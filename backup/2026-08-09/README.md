# Shop-Backup 09.08.2026

**Zweck:** Sicherung des Live-Stands VOR dem Shop-Update (Tippfehler,
SEO, Wichtel-Sets) — Beschluss vom 09.08.2026, CLI-Weg.

## theme-live/

Live-Theme **„Be Yours v9.1.0" (Shopify-Theme-ID 200817836357)**,
gezogen am 09.08.2026 per `shopify theme pull --live` (Shopify CLI,
Store `1a8137.myshopify.com`). 375 Dateien: `assets/`, `config/`
(inkl. `settings_data.json` mit den Theme-Einstellungen und
Sektionstexten), `layout/`, `locales/`, `sections/`, `snippets/`,
`templates/` (JSON-Templates mit Seiteninhalten).

**Wiederherstellen:**

```
shopify theme push --store 1a8137.myshopify.com --path backup/2026-08-09/theme-live
```

(`--live` fürs Live-Theme; ohne Flag fragt die CLI nach dem Ziel.
Anmeldung im Browser durch den Betreiber.)

## Nicht in diesem Backup

- **Produkte/Kollektionen** (Beschreibungen, Preise): liegen in
  Shopifys Datenbank, nicht im Theme. Export bei Bedarf über
  Admin → Produkte → Exportieren (CSV).
- **Seiten, Blogs, Navigation, Rechtstexte**: kein nativer Export;
  werden beim Text-Durchgang des Shop-Updates als Markdown erfasst.
- **App-Daten** (z. B. die 1.103 Bewertungen im Widget) und
  Shop-/App-Einstellungen.
- **Bestell- und Kundendaten — bleiben per Repo-Regel bewusst
  draußen.**

Zusätzlich empfohlen (Betreiber, im Admin): Live-Theme **duplizieren**
als Sofort-Rollback in Shopify selbst (Onlineshop → Themes → ⋯ →
Duplizieren).
