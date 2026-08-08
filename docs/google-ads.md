# Google Ads für den Shop — Grundlagen und Kampagnenplanung

Angelegt am 08.08.2026, nach der Startaufnahme in
[`ist-zustand.md`](ist-zustand.md). **Status: Grundlagen-Aufnahme
weitgehend erledigt (Konto-Sichtung 08.08.2026, lesend, mit
Betreiber-Freigabe). Es wurde nichts im Konto verändert.**

---

## 1. Ausgangslage — und der Unterschied zur keiltronic-Linie

Taeradesign ist E-Commerce: Erfolg heißt Käufe im Warenkorb, nicht
Anfragen per E-Mail. Damit gilt hier das Gegenteil der keiltronic-Linie
(dort bewusst cookiefrei, kein Google-Tag): **Ohne funktionierende
Kauf-Conversion-Messung ist eine Shop-Kampagne blind.** Der Befund vom
08.08.2026: Die Messung **funktioniert** — und es läuft bereits eine
Kampagne (Abschnitt 3).

## 2. Technischer Befund Shop-Seite (08.08.2026)

| Punkt | Befund |
|---|---|
| Konfiguration | GA4 `G-5J2W20R04R`, Ads-Tag `AW-11371975038`, Container `GT-5TQF8HZ`; Auslieferung über die Shopify-„Google & YouTube"-App (im Ads-Datamanager als verknüpfter Shopify-Store „Taeradesign" sichtbar) |
| Consent | Shopify-eigener Banner (GDPR-Modus). **Vor** Einwilligung: keinerlei Google-Anfragen — sauber. **Nach** „Akzeptieren" (verifiziert am 08.08.2026 im Prüf-Browser): gtag lädt für alle drei IDs, `page_view` und `view_item` feuern, Einwilligung bleibt über Seiten erhalten |
| Konsequenz | Gemessen wird nur, wer einwilligt; kein Consent-Mode-Ping vor der Einwilligung → keine modellierten Conversions. Die Einwilligungsquote ist unbekannt und von außen nicht messbar |
| Nebenbefunde | jQuery 1.12 (2016) im Theme-Umfeld; Geodienst get.geojs.io; Shop Pay aktiv; Shopify-Eigenanalytik (Trekkie/Monorail) läuft unabhängig vom Google-Consent |

## 3. Ist-Stand im Konto 932-417-3105 (Sichtung 08.08.2026, nur lesend)

Konto „Taeradesign" unter tk@taeradesign.de. Abrechnung eingerichtet:
automatische Zahlungen per Bankkonto (…86 74), Kontostand 82,31 € am
08.08.2026, nächste automatische Zahlung 01.09.2026. **Bestandskonto mit
Historie — kein Neukunden-Startangebot.**

### Kampagnen (8 angelegt, 1 aktiv, dazu 1 Entwurf)

| Kampagne | Typ | Budget | Status |
|---|---|---|---|
| **Filzprodukte** | Performance Max | 10,00 €/Tag | **Aktiv — „Durch das Budget eingeschränkt"** |
| Online-Store für Filzunikate | Smart | 1,55 €/Tag | Pausiert |
| Manuelle Kampagne | Suchnetzwerk | 2,00 €/Tag | Pausiert |
| Shopping - Alle Produkte | Shopping | 7,00 €/Tag | Pausiert |
| Wichtel | Performance Max | 2,00 €/Tag | Pausiert |
| Schlüsselanhänger-Kampagne | Suchnetzwerk | 10,00 €/Tag | Pausiert |
| Gotteslobhülle-Shopping-Kampagne | Suchnetzwerk | 2,00 €/Tag | Pausiert |
| Gotteslob-Max-Performance | Performance Max | 8,00 €/Tag | Pausiert — **„Alle Asset-Gruppen durch Richtlinien eingeschränkt"** (Detail offen) |
| Kampagne-Urkundenmappe | Performance Max | — | Entwurf (letzte Änderung 05.05.2025) |

Die pausierten Kampagnen sind die frühere Saison-/Themenstruktur
(Wichtel, Gotteslob, Schlüsselanhänger) — nützliche Vorlage und
Datenquelle für den Neuentwurf.

### Leistung der aktiven Kampagne „Filzprodukte" (Woche 01.–07.08.2026)

13.061 Impressionen, 169 Klicks (CTR 1,29 %), Ø-CPC 0,43 €, Kosten
72,27 €, **6 Käufe, Conversion-Wert 183,30 €, Ø-Bestellwert 30,55 €**.
Das ist ein **ROAS von ≈ 2,5** auf Umsatzbasis (Anzeige „Prognosen
werden berechnet" — Zahlen können nachlaufen). Google meldet die
Kampagne als budgetlimitiert (Empfehlung +6,9…8,4 % Zugriffe bei mehr
Budget — Googles Empfehlungen sind Verkaufsargumente, keine neutrale
Beratung). Kostenverteilung: ~81 % Smartphones. Beispielsignale des
Smart Bidding: Suchanfrage „taeradesign", Rheinland-Pfalz, Smartphone,
werktags 11–19 Uhr.

**Einordnung, ehrlich:** Ob ROAS 2,5 gut ist, entscheidet die **Marge**
— bei Handarbeit stecken die Fertigungsstunden in jedem Stück. 183 €
Umsatz für 72 € Werbekosten kann profitabel oder ein Verlustgeschäft
sein. Diese Zahl fehlt und kommt nur vom Betreiber (Prüfliste 7).

### Conversion-Erfassung (15 Aktionen, Kern funktioniert)

- **„Google Shopping App Purchase"** (Quelle Website/Shopify-App):
  **aktiv, primär**, Zählweise „Alle", 90-Tage-Fenster — 6 Conversions
  / 183,30 € in der Sichtwoche. **Die Kauf-Messung steht.**
- GA4-Import: „Einkaufswagen" (aktiv, primär), „Kontaktdaten" (ohne
  kürzliche Conversions)
- Sekundär (Shopify-App): Add To Cart (**„Überprüfung erforderlich"**,
  Detail offen), Begin Checkout, Add Payment Info
- Anruf-Aktionen (Click-to-Call u. a.): ohne kürzliche Conversions

### Verknüpfungen (Data Manager)

Google Analytics (GA4) ✓ · Google Merchant Center ✓ · Google Business
Profile ✓ · Business Manager ✓ · Shopify-Store „Taeradesign" ✓.
**Damit sind Shopping-/PMax-Kampagnen technisch vollständig
unterfüttert** — die laufende PMax beweist es.

### Warnhinweise im Konto (nichts davon behoben, nur notiert)

1. Google-Tag „Taeradesign": **„Maßnahme(n) erforderlich"** (Data
   Manager; Detail noch nicht gesichtet)
2. Gotteslob-Max-Performance: alle Asset-Gruppen durch **Richtlinien**
   eingeschränkt (Grund noch nicht gesichtet)
3. Conversion „Google Shopping App Add To Cart": „Überprüfung
   erforderlich"
4. Google kündigt **Passkey-Pflicht** für sensible Kontoaktionen an
   (Betreiber-Schritt)

## 4. Prüfliste (Stand 08.08.2026)

1. ~~Kontozustand~~ **erledigt** — aktiv, Abrechnung läuft, Historie
   vorhanden (Abschnitt 3)
2. ~~Kauf-Conversion~~ **erledigt** — Shopify-App-Purchase aktiv/primär
   mit Wertübergabe
3. ~~GA4 ↔ Ads~~ **erledigt** — verknüpft, GA4-Aktionen importiert
4. ~~Consent-Verifikation~~ **erledigt** — Accept-Pfad feuert
   (Abschnitt 2)
5. ~~Merchant Center~~ **erledigt** — verknüpft, Shopify-Feed-Anbindung
   aktiv
6. **Offen: Shopify-Bestsellerdaten je Saison** (Shopify-Admin) — sie
   ersetzen die Saison-Annahmen und steuern die Produktauswahl der
   Kampagnen
7. **Offen: Margen je Produktgruppe** (Betreiber) — ohne sie keine
   seriöse Budget-/ROAS-Bewertung
8. **Offen: Detail-Sichtung der laufenden PMax** — Suchbegriffe,
   Asset-Gruppen, beworbene Produkte, sowie die drei Warnhinweise aus
   Abschnitt 3
9. **Offen: Shopify-Admin-Sichtung** — installierte Apps (Konfigurator,
   Bewertungs-App, Google & YouTube), Versandkosten

## 5. Kampagnen-Grobgedanke (Skizze — nach neuem Befund geschärft)

Die Frage ist nicht mehr „Ads aufbauen", sondern: **Was tun mit einer
laufenden, budgetlimitierten PMax mit ROAS ≈ 2,5 — und wie die neue
Saisonstruktur daneben aussieht.** Optionen (Entscheidung Betreiber,
nach Prüfliste 6–8):

- (a) Bestehende „Filzprodukte"-PMax als Fundament behalten und erst
  nach der Detail-Sichtung über Budget entscheiden
- (b) Saisonkampagnen reaktivieren/neu bauen (Vorlage: die pausierten
  Wichtel-/Gotteslob-Kampagnen) — nächstes Fenster: Wichtel ab
  Oktober, Gotteslob ab Januar
- (c) Suchkampagne für spitze Personalisierungs-Begriffe plus
  Brand-Schutz „taeradesign" (das Smart-Bidding-Signal zeigt: die
  Brand-Suche existiert)
- Werbebotschaft in allem: **Konfigurator mit Live-Vorschau**,
  Handarbeit/Made in Germany, Bewertungszahlen mit Stand

## 6. Rote Linien (Startfassung — Betreiber ergänzt oder streicht)

1. **Budget, Aktivierung und jede Zahlungsfrage entscheidet der
   Betreiber.** Claude legt nichts scharf, pausiert nichts, ändert
   keine Gebote.
2. **Keine erfundenen Zahlen** — nicht in dieser Doku, nicht in
   Anzeigen. Bewertungszahlen nur mit Stand.
3. **Keine Kundendaten in Repo oder Werkzeugen.** Erweiterte
   Conversions nur nach ausdrücklicher eigener Entscheidung.
4. **Browser-Zugriffe durch Claude nur lesend** (Freigabe erteilt
   08.08.2026 für Ads-Konto und Shopify-Admin; Muster keiltronic):
   Datenabfrage ja; Signups, Zahlungsdaten, Einstellungsänderungen
   macht der Betreiber.
