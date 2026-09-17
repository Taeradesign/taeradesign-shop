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

### Warnhinweise im Konto — aufgeklärt am 08.08.2026 abends (nichts verändert)

1. Google-Tag „Maßnahme(n) erforderlich" = **Tag-Abdeckungs-Diagnose,
   kosmetisch:** 268 Seiten getaggt, nur 3 ungetaggt (eine
   Stripe/Klarna-Durchgangsseite + zwei vom Konfigurator erzeugte
   versteckte Produktklone), 156 „keine neuen Daten"
   (Kundenkonto-Seiten). Zweiter Punkt: Vorschlag, weitere Domains für
   domainübergreifende Messung zu konfigurieren (u. a.
   `account.taeradesign.com`) — Konfigurationsentscheidung des
   Betreibers, kein Defekt.
2. Gotteslob-Max-Performance: Richtlinie **„Religiöse Überzeugungen in
   personalisierten Anzeigen"** — Google stuft Gotteslob-Inhalte als
   religiös ein; die Asset-Gruppe wird nur eingeschränkt ausgeliefert
   (bestimmte Länder/Geräte). **Strukturelle Folge für die
   Kommunion-Saison:** Personalisierungslastige Kampagnen (PMax) sind
   für Gotteslob-Produkte gedeckelt; keyword-basierte Suchanzeigen auf
   explizite Suchanfragen („gotteslobhülle personalisiert") sind der
   naheliegende Weg (Einschätzung, im Entwurf zu verifizieren).
   „Einspruch einlegen" wäre möglich — Betreiber-Entscheidung.
   Beachtenswert: In der laufenden „Filzprodukte"-Kampagne ist
   „Gotteslobhülle" trotzdem ein wachsendes Suchthema — der
   Feed-Verkauf läuft also nicht auf null.
3. Add To Cart „Überprüfung erforderlich" = die Aktion erfasst
   nachweislich (letzte Conversion am 08.08.2026); der Hinweis ist
   Googles Aufforderung, **erweiterte Conversions** zu aktivieren
   (gehashte Kundendaten) — kollidiert mit roter Linie 3, **bleibt
   bewusst aus**, Hinweis wird dauerhaft ignoriert. Positiv-Befund im
   selben Dialog: **„Einwilligungsmodus ist aktiviert"** ✓.
4. **Passkey-Pflicht** für sensible Kontoaktionen angekündigt —
   Betreiber-Schritt. (Beim Sichten öffnete Google von sich aus einen
   Passkey-Einrichtungs-Tab; Claude hat ihn nicht angefasst.)

### Detail-Sichtung „Filzprodukte" (08.08.2026 abends, lesend)

**Einstellungen:** Optimiert auf Käufe, **Gebotsstrategie Ziel-CPA
29,57 €**, Budget 10 €/Tag (limitiert), Standort Deutschland, Sprache
Deutsch, Merchant Center **5293575741**, Feed „Alle Produkte aus allen
Feeds", Kundenakquisition ohne Sondergebote, keine Wertregeln. **Eine**
Asset-Gruppe „Filzprodukte" (19 Bilder, 1 Video, Anzeigeneffektivität
„Durchschnittlich", Zielgruppensignal 25–34 u. a.) für das gesamte
Sortiment.

**⚠ Die wichtigste Zahl: Ziel-CPA 29,57 € ≈ Ø-Bestellwert 30,55 €.**
Real zahlte die Kampagne letzte Woche nur ~12 € je Kauf, weil das
Budget deckelt. Würde das Budget erhöht, dürfte Google bis ~30 € je
Kauf bieten — bei ~24 € Nettoerlös je Durchschnittsbestellung sicher
defizitär. **Vor jeder Budget-Erhöhung muss das Ziel-CPA runter oder
die Strategie auf Ziel-ROAS umgestellt werden** (Betreiber-Entscheidung
im Kampagnenentwurf).

**Suchthemen** (Google-Insights, steigend): Geschenke ↗,
Schlüsselanhänger ↗, Gotteslobhülle ↗, Equidenpass. Smart-Bidding-
Signale: Brand-Suche „taeradesign", Rheinland-Pfalz, Smartphone,
werktags 11–19 Uhr.

**Produktebene (Woche 01.–07.08.):** Conversions kamen u. a. von
Filzplatten (1 Kauf, Wert 22,50), Wichtel-Miniatur „Wohnzimmer" (1
Kauf, 10,98 — **Wichtel verkauft schon im August**), Schlüsselanhänger
(1 Kauf, 16,74). Feed-Pflegebedarf: Schultüten-Anhänger mit Warnungen
„fehlende Farbe/Altersgruppe/Geschlecht" und Status „aktiv
(eingeschränkt)".

## 4. Wirtschaftlichkeit — erste Rechnung am Leitprodukt (08.08.2026)

Betreiber-Angabe: **Gotteslobhülle ≈ 3 € Material, ≈ 25 Minuten
Arbeit.** Rechnung (Annahmen: 19 % USt.; Gebühren für
Zahlungsabwicklung/Shopify und Verpackung noch nicht abgezogen;
Versand als kostendeckend angenommen):

| Position | je Gotteslobhülle (28,99 €) |
|---|---|
| Nettoerlös (÷ 1,19) | 24,36 € |
| − Material | −3,00 € |
| = Deckungsbeitrag vor Arbeit und Werbung | **21,36 €** |
| Stundenlohn-Äquivalent ohne Werbekosten (25 min) | ≈ 51 €/h |
| − Werbekosten je Kauf, real letzte Woche (72,27 € / 6) | −12,05 € → **≈ 22 €/h** |
| − Werbekosten je Kauf bei ausgeschöpftem Ziel-CPA | −29,57 € → **−8,21 € Verlust vor Arbeitslohn** |

Lesart: Beim realen Wochenwert arbeitet die Werbung auskömmlich (der
Klickpreis-Deckel durch das kleine Budget schützt); das eingestellte
Ziel-CPA wäre, wenn Google es ausschöpft, defizitär. Und: Ein Teil der
Ads-Käufe sind günstigere Artikel (10–22 € Bestellwert), dort ist die
Rechnung entsprechend knapper. Margen weiterer Produktgruppen
(Wichtel, Schlüsselanhänger, Mappen, Filzplatten) nach Bedarf beim
Kampagnenentwurf erfragen.

## 5. Prüfliste (Stand 08.08.2026 abends)

1. ~~Kontozustand~~ **erledigt** — aktiv, Abrechnung läuft, Historie
   vorhanden (Abschnitt 3)
2. ~~Kauf-Conversion~~ **erledigt** — Shopify-App-Purchase aktiv/primär
   mit Wertübergabe
3. ~~GA4 ↔ Ads~~ **erledigt** — verknüpft, GA4-Aktionen importiert
4. ~~Consent-Verifikation~~ **erledigt** — Accept-Pfad feuert, Consent
   Mode aktiv (Abschnitt 2 und 3)
5. ~~Merchant Center~~ **erledigt** — verknüpft (5293575741),
   Shopify-Feed-Anbindung aktiv
6. ~~Detail-Sichtung der laufenden PMax + Warnhinweise~~ **erledigt**
   (Abschnitt 3)
7. **Teilweise: Margen** — Gotteslobhülle liegt vor (Abschnitt 4);
   weitere Produktgruppen beim Entwurf
8. ~~Shopify-Bestsellerdaten je Saison~~ **erledigt** (nach
   Betreiber-Login am Abend) — Quartalszahlen in
   [`ist-zustand.md`](ist-zustand.md) §7: Kommunion-Halbzeit trägt ~2/3
   des Shop-Umsatzes, CR steigt saisonal auf ~5 %, Ø-Bestellwert
   Q1 ≈ 46 €
9. ~~Shopify-Admin-Sichtung~~ **erledigt** — Apps und Versandkosten in
   `ist-zustand.md` §2 (Google & YouTube-Kanal installiert ✓;
   Versand 2,90/5,50 €, nur Deutschland)

**Damit ist die Prüfliste bis auf Rest-Margen abgearbeitet — der
Kampagnenentwurf kann auf Daten stehen.**

## 5a. Messlatte des Betreibers (08.08.2026)

Auf Amazon und Etsy erwirtschaftet Werbung **im Mittel etwa das
Zehnfache des Einsatzes** (Betreiber-Angabe: „für 10 € Werbung 100 €
Umsatz" — ein ROAS ≈ 10; die dortige Plattform-Conversion-Rate liegt
bei ~10 %). Google liegt aktuell bei ROAS ≈ 2,5. **Ziel: Google in
Richtung des Marktplatz-Niveaus entwickeln.**

Ehrliche Einordnung dazu: Marktplatz-Anzeigen treffen Menschen, die
bereits im Laden stehen und suchen — der Shop bei ~3–5 %
Website-Conversion kann das strukturell nicht eins zu eins erreichen.
Aber zwischen 2,5 und 10 liegt erheblicher Spielraum, und die Hebel
sind benannt: Saisonfokus auf die konversionsstärksten Fenster
(Kommunion: CR ~5 %, Ø-Bestellwert 46 €), Gebotsstrategie von
Ziel-CPA 29,57 € auf Ziel-ROAS umstellen, Brand-Nachfrage ausbauen
(„taeradesign" macht bereits 1.320 €/Quartal), Feed-Pflege, und
Budget nur dort, wo die Marge es trägt.

## 6. Kampagnen-Grobgedanke (Skizze vom Nachmittag — ausgearbeitet in Abschnitt 8)

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

## 7. Rote Linien (Startfassung — Betreiber ergänzt oder streicht)

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

---

## 8. Kampagnenentwurf (08.08.2026 — Entscheidungsvorlage)

**Status: Entwurf. Nichts davon ist im Konto umgesetzt.** Jede Stufe
braucht eine Betreiber-Entscheidung (Liste am Ende); Umsetzung dann wie
beim keiltronic-Muster: Anlage gern durch Claude nach Einzelfreigabe,
grundsätzlich **pausiert** — die Aktivierung bleibt Betreiber-Sache.
Alle Budget- und Zielwerte sind **Vorschläge**, keine Fakten.

### Leitidee

Nicht „mehr Budget in die bestehende Kampagne", sondern **erst die
Steuerung reparieren, dann saisonal ausbauen**: Die laufende PMax
bekommt ein Wertziel statt des gefährlichen Ziel-CPA; die Saisonfenster
(Wichtel ab Herbst, Kommunion ab Januar) bekommen eigene Kampagnen mit
eigener Ökonomie; die Brand-Nachfrage wird herausgelöst, damit die
Zahlen ehrlich werden. Werbebotschaft überall: **Konfigurator mit
Live-Vorschau, bestickt statt bedruckt, Handarbeit aus Deutschland.**

### Stufe 0 — Fundament reparieren (sofort, unabhängig von der Saison)

1. **Gebotsstrategie der „Filzprodukte"-PMax: Ziel-CPA 29,57 € →
   Ziel-ROAS.** Rechnung am Leitprodukt (Abschnitt 4, Annahme
   19 % USt., vor Gebühren):

   | Ziel-ROAS | Werbekosten je 29-€-Kauf | bleibt für 25 min Arbeit | ≈ Stundenlohn |
   |---|---|---|---|
   | 250 % (heute real) | ~11,60 € | 9,76 € | ~23 €/h |
   | **350 % (Vorschlag Start)** | ~8,30 € | 13,06 € | ~31 €/h |
   | **400 % (Vorschlag Ziel)** | ~7,25 € | 14,11 € | ~34 €/h |
   | 500 % (ambitioniert) | ~5,80 € | 15,56 € | ~37 €/h |

   Vorschlag: **Start bei 350 %, nach vier stabilen Wochen auf 400 %
   heben.** Höher lohnt erst, wenn das Volumen nicht einbricht — ein zu
   scharfes Ziel würgt die Auslieferung ab. Hinweis zur Mechanik: Der
   Strategiewechsel setzt die Lernphase zurück; 1–2 Wochen Schwankung
   sind normal und kein Grund zum Zurückdrehen.
2. **Budget der PMax vorerst bei 10 €/Tag belassen.** Erhöhung erst,
   wenn das ROAS-Ziel vier Wochen gehalten wird (Messplan unten) —
   nicht auf Googles Budget-Empfehlung hin.
3. **Brand herauslösen:** In der PMax die **Markenausschlüsse** auf
   „Taeradesign" setzen und parallel eine kleine
   **Brand-Suchkampagne** anlegen ("taeradesign", [taeradesign shop]
   u. ä., 1–2 €/Tag, Ziel: Platz 1 unter der eigenen Marke halten).
   Warum: Die Brand-Käufe (1.320 €/Quartal) laufen heute durch die
   PMax und **schönen deren ROAS** — nach der Trennung zeigt die PMax
   ihre echte Neukunden-Leistung, und erst dann ist die
   Budget-Steuerung ehrlich. Achtung: Der ausgewiesene PMax-ROAS wird
   dadurch optisch **sinken** — das ist Aufklärung, kein Rückschritt.
4. **Feed-Pflege im Merchant Center / in der Google-&-YouTube-App:**
   fehlende Attribute der Schultüten-Anhänger (Farbe, Altersgruppe,
   Geschlecht) nachtragen; die zwei ungetaggten Konfigurator-Klone
   bleiben ignoriert.
5. **Alt-Kampagnen aufräumen (nur Hygiene, keine Reaktivierung):** Die
   sieben pausierten Kampagnen bleiben pausiert; der PMax-Entwurf
   „Kampagne-Urkundenmappe" (05/2025) kann gelöscht werden, wenn der
   Betreiber ihn nicht mehr braucht.

### Stufe 1 — Wichtel-Saison (Anlage im September, live ~1. Oktober)

**Eigene PMax „Wichtelwelt"** mit Feed-Filter auf die
Wichtel-Kategorien (Eintragsgruppen), eigener Asset-Gruppe mit
Wichtel-Bildern und **Ziel-ROAS höher als beim Fundament — Vorschlag
450–500 %**, weil die Warenkörbe klein sind (gesehene
Wichtel-Bestellwerte ~11 €; bei 5 € Werbekosten je 11-€-Kauf wäre die
Marge weg). Budget-Vorschlag: **5 €/Tag ab Oktober, Dezember-Hälfte
prüfen, Ende Dezember pausieren.** Die Ads-Produktdaten zeigen
Wichtel-Käufe schon im August — ein Vorziehen auf Mitte September ist
vertretbar, wenn die Fertigung die Weihnachtslast früh annehmen will.
Flankierende Shop-Idee (fürs Shop-Update): **Wichtel-Sets/Bundles**
heben den kleinen Warenkorb — das verbessert jede Werbe-Ökonomie mehr
als jede Gebotsoptimierung.

### Stufe 2 — Kommunion (Anlage im Dezember, live 1. Januar bis ~30. April)

Das ist das wichtigste Fenster (≈ 2/3 des Shop-Jahres, Conversion-Rate
~5 %, Ø-Bestellwert 46 €) — und wegen der Richtlinie „Religiöse
Überzeugungen in personalisierten Anzeigen" der Ort für
**keyword-basierte Suchanzeigen statt PMax-Personalisierung**:

- **Suchkampagne „Kommunion"**, Deutschland, Deutsch, Ziel-ROAS oder
  (bei dünner Datenlage zum Start) manuell begrenzte CPCs. Zwei
  Anzeigengruppen zum Start:
  - **A Gotteslobhülle:** "gotteslobhülle", "gotteslob hülle",
    "gotteslobhülle mit namen", "gotteslobhülle personalisiert",
    "gotteslobhülle filz", "gotteslobhülle kommunion", "gotteslob
    einband", [gotteslobhülle bestickt] → Zielseite
    Gotteslobhüllen-Konfigurator
  - **B Kommunion-Geschenk personalisiert:** "kommunion geschenk
    personalisiert", "geschenk kommunion mädchen personalisiert",
    "geschenk kommunion junge personalisiert" — Testgruppe mit kleinem
    Anteil; breiter, teurer, dafür großes Publikum → Zielseite
    Themenwelt Kommunion & Firmung
  - Ausschlüsse (Start): schnittmuster, selber nähen, selber machen,
    anleitung, kostenlos, gebraucht, amazon, ebay, etsy
- **Anzeigen-Bausteine (Entwurf — Lesung durch Betreiber vor
  Verwendung, Zeichenlimits beim Anlegen final prüfen):** Titel:
  „Gotteslobhülle mit Namen" · „Im Konfigurator gestalten" ·
  „Live-Vorschau beim Gestalten" · „Bestickt statt bedruckt" ·
  „Handarbeit aus Deutschland" · „Zur Kommunion & Firmung" · „3-mm-Filz,
  Markenstickgarn". Textzeilen: „Aus Filz, bestickt statt bedruckt —
  gestalte sie im Konfigurator mit Live-Vorschau." · „Filzfarbe, Motiv,
  Garnfarben und Text frei wählbar — gefertigt in Deutschland." Die
  Lieferzusage („2–3 Tage") nur verwenden, wenn sie auch in der
  Hochsaison hält — Betreiber-Bestätigung nötig.
- **Optionaler Test parallel:** Standard-Shopping-Kampagne nur für
  Gotteslob-Produkte (suchanfragengetrieben, weniger
  personalisierungsabhängig als PMax). Erwartung unklar — die
  Richtlinien-Behandlung von Shopping-Anzeigen für religiöse Artikel
  zeigt erst der Versuch; als kleiner Test (2–3 €/Tag) einplanbar.
- **Budget-Vorschlag Hochsaison:** Suche 8–12 €/Tag (+ ggf.
  Shopping-Test), Fundament-PMax läuft mit 10 €/Tag weiter →
  Gesamtrahmen ~20 €/Tag Januar–April. Nur ausschöpfen, wenn die
  ROAS-Ziele halten; die Rechnung „mehr Budget = mehr Gewinn" gilt bei
  Handarbeit nur bis zur Fertigungsgrenze — **die Kapazität in der
  Kommunion-Spitze setzt das echte Limit** (Betreiber-Einschätzung
  nötig: wie viele Hüllen pro Woche sind lieferbar?).

### Stufe 3 — Sommer (Mai–Juli)

Zurück aufs Fundament: nur die PMax mit 10 €/Tag (oder abgesenkt),
Einschulungs-Nachfrage (Zeugnismappen, Schultüten-Anhänger) läuft über
den Feed mit. Eine eigene Einschulungs-Kampagne ist Kür für 2027 —
erst, wenn Wichtel und Kommunion bewiesen haben, dass die
Saisonstruktur trägt.

**Nachtrag 09.08.2026 (Betreiber):** Eine eigene
**Zeugnismappen-Kampagne noch für die Einschulungssaison 2026** wird
geprüft — Zeugnismappen werden bis zur Einschulung im September stark
gesucht (Betreiber-Beobachtung, kein gemessenes Suchvolumen). Das
relativiert die „Kür für 2027"-Einordnung oben. Randbedingungen: Das
Restfenster ist kurz (Einschulung je nach Bundesland zwischen Mitte
August und Mitte September), eine PMax braucht 1–2 Wochen Lernphase,
und vor jeder Aktivierung soll das Shop-Update durch sein
(Betreiber-Regel vom 08.08.2026). Als **Schritt G** im Umsetzungsplan
geführt; Entscheidung offen.

### Jahres-Budgetrahmen (Vorschlag, alles Betreiber-Entscheidung)

| Zeitraum | Kampagnen | Rahmen/Tag | ≈ Monat |
|---|---|---|---|
| Aug–Sep | Fundament (nach tROAS-Umbau) + Brand | 11–12 € | ~350 € |
| Okt–Dez | + Wichtelwelt | 16–17 € | ~500 € |
| Jan–Apr | + Kommunion-Suche (Wichtel aus) | ~20 € | ~600 € |
| Mai–Jul | Fundament + Brand | 8–12 € | ~300 € |

Zum Vergleich: Heute laufen ~300 €/Monat. Der Rahmen skaliert also
maßvoll und **nur bei gehaltenem ROAS-Ziel** — nicht als Vorschuss.

### Messplan und Erfolgskriterien

- **Wöchentlich** (erste vier Wochen nach jedem Umbau): ROAS je
  Kampagne (Conv.-Wert ÷ Kosten), Käufe, Ø-Bestellwert; bei der PMax
  zusätzlich die Suchthemen-Insights. Brand und Nicht-Brand getrennt
  lesen.
- **Monatlich:** Shopify-Umsatz gegen Ads-Umsatz stellen (die
  Shopify-Zahlen sind die Wahrheit, Ads attribuiert großzügig);
  Saisonkurve in `ist-zustand.md` §7 fortschreiben.
- **Erfolgskriterium Stufe 0 (Vorschlag):** ROAS ≥ 350 % über vier
  Wochen bei mindestens gehaltenem Kaufvolumen → dann erste
  Budgeterhöhung testen (10 → 13 €/Tag).
- **Messlatte (Abschnitt 5a):** Richtung ROAS 10 wie auf den
  Marktplätzen; realistisch erreichbar ist zunächst die Spanne 4–6 —
  jede Stufe wird gegen die Vormonate belegt, nicht behauptet.

### Entscheidungsliste — entschieden am 08.08.2026 (abends)

1. **Ziel-ROAS-Umstellung: ja.**
2. **Stundenlohn-Untergrenze: 37 €/h** — am Leitprodukt entspricht das
   **Ziel-ROAS 500 %** als Zielzustand (Tabelle oben).
3. **Brand-Trennung: ja.**
4. **Wichtelwelt-Kampagne: ja** (Startdatum offen gelassen — Anlage
   pausiert, das Aktivierungsdatum entscheidet sich beim Aktivieren;
   Vorschlag bleibt ~1. Oktober, Vorziehen auf Mitte September
   möglich).
5. **Kommunion: ja, Shopping-Test: ja.** Kapazität laut Betreiber:
   **60 Hüllen/Tag in der Spitze ≈ 420/Woche.** Damit ist die
   Fertigung im geplanten Budgetrahmen **kein Engpass** — die Werbung
   liefert derzeit 6 Käufe pro *Woche*; selbst eine Verzwanzigfachung
   bliebe weit unter der Kapazität.
6. **Umsetzung: Claude per Chrome mit Einzelfreigaben.** Jede
   Kontoänderung wird vorher mit konkreten Werten vorgelegt; angelegt
   wird pausiert, **aktiviert wird ausschließlich vom Betreiber.**

### Umsetzungsprotokoll 08.08.2026 (Claude per Chrome, mit Einzelfreigabe)

- **A erledigt und im Konto verifiziert:** PMax „Filzprodukte"
  Gebotsstrategie auf **Ziel-ROAS 400 %** umgestellt (Budget
  unverändert 10 €/Tag, Kampagne bleibt aktiv). Lernphase-Reset ist
  normal — 1–2 Wochen Schwankung nicht überinterpretieren.
- **B blockiert (neuer Befund):** Der PMax-Markenausschluss verlangt
  eine **in Googles Markenbibliothek verifizierte Marke**. „Taeradesign"
  war nicht enthalten; Markenanfrage (Kategorie Unternehmen, URL
  taeradesign.com, Zweitname „Taera Design") wurde gesendet, Prüfung
  **4–6 Wochen**. → Wiedervorlage ~20.09.2026.
- **C ✅ ERLEDIGT (veröffentlicht 09.08.2026 kurz nach Mitternacht,
  sofort pausiert):** Brand-Suchkampagne **„Brand Taeradesign",
  Kampagnen-ID 24118761062, Status PAUSIERT** (im Konto verifiziert,
  0 Impressionen — zwischen Veröffentlichen und Pausieren lagen unter
  zwei Minuten, mitten in der Nacht). Werte: Suchkampagne; **Klicks
  maximieren mit CPC-Limit 0,50 €**; Tagesbudget **benutzerdefiniert
  1,50 €** (Googles Vorschläge 2,15–3,23 € verworfen); nur
  Google-Suchnetzwerk (Partner + Display abgewählt); Deutschland,
  Deutsch; politische Werbung „Nein"; AI Max samt Textanpassung und
  URL-Erweiterung im Assistenten deaktiviert; Keywords [taeradesign],
  "taeradesign", [taera design], "taeradesign shop", "taeradesign
  gotteslobhülle"; eine RSA mit den sechs freigegebenen Titeln + zwei
  Textzeilen, finale URL taeradesign.com. Google-Tag-Einrichtungsseite
  nach dem Veröffentlichen übersprungen (Tag läuft über die
  Shopify-App). **Der Speichervorgang verlangte zweimal die
  Google-Identitätsbestätigung — beide Male vom Betreiber selbst
  durchgeführt** (Claude authentifiziert grundsätzlich nicht).
  **Vor Aktivierung prüfen (Merker):** In der
  Überprüfen-Zusammenfassung stand unter „AI Max:
  Asset-Optimierung — Textanpassung und Erweiterung der finalen URL
  aktiviert", obwohl die Schalter im Assistenten aus waren — in den
  Kampagneneinstellungen kontrollieren und ggf. deaktivieren, bevor
  der Betreiber aktiviert. Aktivierung: Betreiber, empfohlen nach dem
  Shop-Update.

- **D ✅ ERLEDIGT (veröffentlicht 09.08.2026 nachmittags, sofort
  pausiert):** PMax **„Wichtelwelt", Kampagnen-ID 24118847240, Status
  PAUSIERT** (im Konto verifiziert, 0 Impressionen — zwischen
  Veröffentlichen und Pausieren lagen rund drei Minuten). Werte wie
  freigegeben: **Ziel-ROAS 450 %**; Tagesbudget **benutzerdefiniert
  5,00 €** (Googles Vorschläge 13,51–20,27 € verworfen); Deutschland,
  Deutsch; politische Werbung „Nein"; **Eintragsgruppen-Filter
  Produkttyp „wichtelzubehör"** (183 Produkte, einziger Wichtel-Typ im
  Feed — auch die Türen laufen darunter); finale URL
  `taeradesign.com/collections/wichtelturen-und-zubehor` (192-Produkte-
  Kollektion). Asset-Gruppe „Wichtelwelt": 6 Anzeigentitel, 2 lange
  Titel, 3 Textzeilen (Lesung 09.08. — bewusst OHNE
  „Filz/bestickt/Konfigurator/Handarbeit", das Wichtel-Sortiment ist
  überwiegend Holz-/Metall-/Woll-Miniaturen; ohne Lieferzeit-Zusage),
  **20 Bilder** (Merchant-Center-Produktfotos, gewählt aus 386
  Wichtel-Bildern, inkl. Auto-Zuschnitten) + 5 Konto-Logos.
  **Asset-Optimierung komplett deaktiviert** (Textanpassung,
  URL-Erweiterung, Bild-/Landingpage-Bilder, Video-Optimierung) — in
  der Überprüfen-Zusammenfassung ausdrücklich als „Deaktiviert"
  bestätigt; der C-Befund trat nicht auf. Kein Zielgruppensignal,
  keine Suchthemen. Googles automatisch generierte Titel/Textzeilen
  („Deko und Wohnen" u. ä.) vor der Texteingabe komplett gelöscht;
  Tag-Einrichtungsseite nach dem Veröffentlichen übersprungen.
  Identitätsprüfung kam einmal (beim Speichern der
  Kampagneneinstellungen) — **vom Betreiber durchgeführt**; Ziel-ROAS-
  Wert ebenfalls vom Betreiber getippt (der
  Claude-Code-Berechtigungsklassifikator blockierte die Eingabe des
  Gebotswerts; der Budgetwert ging durch). **Vor Aktivierung:
  Sichtfreigabe der 20 Bilder durch den Betreiber** (Merker).
- **G ✅ ERLEDIGT (veröffentlicht 09.08.2026 nachmittags, sofort
  pausiert):** Suchkampagne **„Zeugnismappen", Kampagnen-ID
  24113382444, Status PAUSIERT** (im Konto verifiziert, 0
  Impressionen). Werte wie freigegeben (Betreiber-Wahl „1"):
  **Klicks maximieren mit CPC-Deckel 0,40 €**; Tagesbudget
  **benutzerdefiniert 3,00 €** (Googles Vorschläge 4,10–6,16 €
  verworfen; Googles „mindestens 5,13 €"-Warnung bewusst ignoriert);
  nur Google-Suchnetzwerk (Partner + Display abgewählt); Deutschland,
  Deutsch; politische Werbung „Nein"; alle AI-Max-Schalter im
  Assistenten deaktiviert (Haupt-Toggle, Textanpassung,
  URL-Erweiterung); KI-Generator („Keywords und Assets erstellen")
  übersprungen. **Keywords (7):** "zeugnismappe" · [zeugnismappe
  personalisiert] · "zeugnismappe mit namen" · "zeugnismappe filz" ·
  "zeugnismappe bestickt" · "zeugnismappe einschulung" ·
  "zeugnisordner". **Auszuschließend (9, Kampagnenebene, nach der
  Anlage nachgetragen):** schnittmuster, selber nähen, selber machen,
  anleitung, kostenlos, gebraucht, amazon, ebay, etsy. **RSA:** finale
  URL `taeradesign.com/collections/schule` (15 Produkte: 12
  Zeugnismappen à 31,99 € + 3 Schultüten; die Kollektion
  `/zeugnismappe` hat nur 1 Produkt — deshalb „Schule"), Pfad
  `/zeugnismappe`, 7 freigegebene Titel (inkl. Konfigurator-Claims —
  Betreiber bestätigte: Zeugnismappe läuft über den Konfigurator),
  3 Textzeilen, Unternehmensname Taeradesign, Sitelinks von
  Kontoebene. **Der C-Befund trat wieder auf:** Die
  Überprüfen-Zusammenfassung zeigte „AI Max: Asset-Optimierung —
  Textanpassung und Erweiterung der finalen URL aktiviert", obwohl
  alle Schalter im Assistenten aus waren. **Merker: vor Aktivierung in
  den Kampagneneinstellungen kontrollieren** (wie bei C). Keine
  Identitätsprüfung diesmal. Wirtschaftlichkeits-Annahme aus der
  Freigabe: bei 32-€-Warenkorb und CR 3–5 % liefert der 0,40-€-Deckel
  rechnerisch ROAS ~240–400 % — unter der 500er-Messlatte; Betreiber
  hat das Restfenster bewusst priorisiert. Wiederverwendbar zu jedem
  Zeugnistermin (Halbjahr ~Ende Januar, Schuljahresende Juni/Juli).

### Auflösung des Zielkonflikts 350 % ↔ 37 €/h (= 500 %)

Der Ist-ROAS liegt bei ~250 %. Ein Sprung direkt auf 500 % halbiert
das erlaubte Gebotsniveau schlagartig — erfahrungsgemäß drosselt
Google dann die Auslieferung gegen null, und die Lernphase bekommt
keine Kaufdaten. **Empfehlung: Rampe.** Start **400 %**, nach zwei
stabilen Wochen **450 %**, nach zwei weiteren **500 %** (die
Untergrenze). Preis der Rampe: rund vier Wochen leicht unterhalb der
37-€-Linie (≈ 34 €/h), dafür bleibt das Volumen als Datenbasis
erhalten. Alternative auf Wunsch: direkt 500 % mit bewusst
akzeptiertem Volumeneinbruch — Betreiber wählt in Freigabe A.

### Umsetzungsplan (Einzelfreigabe je Schritt)

| Schritt | Änderung | Konkrete Werte | Status |
|---|---|---|---|
| **A** | PMax „Filzprodukte": Gebotsstrategie Ziel-CPA 29,57 € → **Ziel-ROAS** | **400 %** gesetzt (Rampe → 450 → 500 %). Budget bleibt 10 €/Tag | **✅ ERLEDIGT 08.08.2026** (im Konto verifiziert: „Ziel-ROAS – 400 %"). **Zweiter Rampenschritt am 23.08.2026: 450 %** — Begründung und Datenlage in Abschnitt 9.5 |
| **B** | **Markenliste „Taeradesign"** anlegen und in der PMax als Markenausschluss setzen | Marke: Taeradesign (+ Schreibvariante „Taera Design"), URL taeradesign.com | **⚠ BLOCKIERT:** „Taeradesign" ist **nicht in Googles Markenbibliothek**. Markenanfrage am 08.08.2026 gesendet — **Prüfung 4–6 Wochen**. Ausschluss kann erst nach Freigabe (ca. Mitte/Ende September) gesetzt werden. Bis dahin übernimmt Schritt C die Brand-Abschöpfung teilweise |
| **C** | **Brand-Suchkampagne** anlegen (pausiert) | Wie freigegeben umgesetzt; Details im Umsetzungsprotokoll | **✅ ERLEDIGT 09.08.2026** — ID 24118761062. **AKTIV seit 23.08.2026**, nach Rücknahme des Auto-Apply-Eingriffs (Abschnitt 9): nur Suchnetzwerk, Klicks maximieren, CPC-Deckel 0,50 € |
| **D** | **PMax „Wichtelwelt"** anlegen (pausiert) | Feed-Filter (Eintragsgruppen) auf die Wichtel-Kategorien; eigene Asset-Gruppe aus vorhandenen Wichtel-Bildern (Alt-Kampagne „Wichtel" + Shop); Ziel-ROAS 450 % (Senkung auf 400 % falls < 10 Käufe nach zwei aktiven Wochen); 5 €/Tag; DE/Deutsch. Sichtfreigabe der Assets vor Aktivierung | **✅ ERLEDIGT 09.08.2026** — ID 24118847240. **AKTIV seit 23.08.2026**; Sichtfreigabe der 20 Bilder durch den Betreiber am 23.08. erfolgt (Abschnitt 9.4). Eintragsgruppen-Filter geprüft, Ziel-ROAS 450 % unverändert |
| **E** | **Feed-Pflege:** fehlende Attribute Schultüten-Anhänger (Farbe, Altersgruppe, Geschlecht) in der Google-&-YouTube-App nachtragen | betrifft die „aktiv (eingeschränkt)"-Produkte aus §3 | freigegeben — unkritisch, jederzeit |
| **F** | **Kommunion-Suchkampagne + Standard-Shopping-Test** anlegen (pausiert) | Struktur und Texte aus Stufe 2 | **vorgezogen auf ~1. Oktober** (Betreiber 08.08.2026: Gotteslobhüllen-Weihnachtsgeschäft beginnt im Oktober — belegt durch Q4-Sichtung „Gotteslobhülle +252 %"). Anlage im September mit Text-Lesung |
| **G** | **Zeugnismappen/Einschulung** — eigene Kampagne noch für die Saison 2026 (Betreiber-Idee 09.08.2026, siehe Nachtrag Stufe 3) | Suchkampagne nach Brand-Muster: Klicks maximieren + CPC-Deckel 0,40 €, 3 €/Tag, 7 Keywords + 9 Ausschlüsse, Zielseite `/collections/schule` | **✅ ERLEDIGT 09.08.2026** — ID 24113382444. Asset-Optimierungs-Check am 23.08. durchgeführt: deaktiviert, AI Max aus — in Ordnung. **AKTIV seit 23.08.2026**, nach Rücknahme des Auto-Apply-Eingriffs (Abschnitt 9): nur Suchnetzwerk, Klicks maximieren, CPC-Deckel 0,40 €. **Restfenster bis ~Mitte September** |

Nach A–D: vier Wochen Messplan (wöchentlich ROAS je Kampagne, Brand
getrennt), dann Budgetentscheidung. **Vor Aktivierung von C, D und F
soll das Shop-Update durch sein** (Tippfehler, SEO —
Betreiber-Reihenfolge vom 08.08.2026), damit die Anzeigen auf
fehlerfreie Seiten führen.

**Merker Markenausschluss (B):** Wiedervorlage ~20.09.2026 — prüfen, ob
die Marke „Taeradesign" in der Bibliothek verifiziert ist, dann in der
PMax „Filzprodukte" als Markenausschluss setzen. Erst dann zeigt die
PMax ihre echte Nicht-Brand-Leistung.

---

## 9. Der Auto-Apply-Vorfall und der Livegang von C, D und G (23.08.2026)

Am 23.08.2026 sollten C, D und G nach dem Betriebsurlaub aktiviert werden.
Die Vorprüfung förderte einen Befund zutage, der wichtiger ist als der
Livegang selbst.

### 9.1 Was passiert war

Beide Suchkampagnen wichen vom freigegebenen Stand ab:

| | freigegeben am 09.08. | vorgefunden am 23.08. |
|---|---|---|
| **C** Brand Taeradesign | Klicks maximieren, CPC-Deckel 0,50 €, nur Google-Suche | **Ziel-CPA 36,14 €**, Such- **und Displaynetzwerk** |
| **G** Zeugnismappen | Klicks maximieren, CPC-Deckel 0,40 €, nur Google-Suche | **Ziel-CPA 36,14 €**, Such- **und Displaynetzwerk** |

Der Änderungsverlauf nennt Ursache und Zeitpunkt eindeutig:

> **Nutzer „Recommendations Auto-Apply", 10.08.2026, 04:52:18 Uhr** ·
> Tool: *Automatisch angewendete Empfehlungen* · Änderung:
> *„Angewendete Empfehlung: Ziel-CPA"* · betroffen: **Zeugnismappen**
> und **Brand Taeradesign** · Vermerk: *„Änderungen können nicht
> rückgängig gemacht werden"*

Google hat also nachts um 4:52 Uhr, mitten im Betriebsurlaub, in beide
Kampagnen eingegriffen. In den Auto-Apply-Einstellungen standen
**21 von 21 Empfehlungstypen auf „automatisch anwenden"** — darunter
„Ziel-CPA festlegen" und **„Displaynetzwerk-Aktivierung verwenden"**
(Beschreibung: *nicht aufgebrauchte Budgetbeträge ins Displaynetzwerk
geben*). Beide Abweichungen haben damit dieselbe Quelle.

### 9.2 Warum das nicht bloß Kosmetik ist

- **Ziel-CPA 36,14 € bei 1,50 €/Tag (C) bzw. 3,00 €/Tag (G).** Google
  soll Käufe für 36 € einkaufen und hat 45 € bzw. 90 € im Monat. Smart
  Bidding braucht Conversion-Volumen, das hier strukturell nicht
  entstehen kann. Google zeigt den Widerspruch inzwischen selbst an:
  *„Ihr Budget und Ihre Gebotsstrategie sind nicht kompatibel — Ihr
  Ziel-CPA liegt über Ihrem durchschnittlichen Tagesbudget."*
- **Der CPC-Deckel war weg.** Genau das Instrument, das bei diesen
  Kleinbudgets den Einzelklick begrenzen sollte.
- **Displaynetzwerk bei einer Brand-Suchkampagne.** Das Budget wandert
  in billige Banner-Impressionen statt in die Markensuche — bei 1,50 €
  am Tag reicht das, um die Kampagne wirkungslos zu machen.

**Verallgemeinerung:** Auto-Apply optimiert auf Googles Zielgröße
(Conversion-Volumen), nicht auf die hiesige (Deckungsbeitrag bei
37 €/h Untergrenze, siehe Abschnitt 5a). Bei Kleinbudgets fallen beide
Ziele auseinander. Das ist kein Fehler von Google, sondern eine andere
Zielfunktion — und deshalb gehört die Funktion aus.

### 9.3 Was am 23.08.2026 geändert wurde

1. **Auto-Apply kontoweit abgeschaltet.** „Anzeigen besser verwalten"
   von 7 von 7 auf **0 von 7**, „Umsatz steigern" von 14 von 14 auf
   **0 von 14**. Nach frischem Seitenaufbau gegengeprüft.
2. **Displaynetzwerk** aus C und G entfernt; beide stehen jetzt auf
   „Google Suchnetzwerk". Suchnetzwerk-Partner waren und bleiben aus.
3. **Gebotsstrategie** bei beiden zurück auf **Klicks maximieren** mit
   CPC-Deckel: **0,40 € (G)**, **0,50 € (C)** — Gebotswerte vom
   Betreiber selbst eingetragen.
4. **C, D und G aktiviert.**

**Fallstrick, gilt für die Zukunft:** Die Auto-Apply-Einstellungen
werden **nicht automatisch gespeichert**. Das Abwählen der Haken
erzeugt erst beim Verlassen der Seite den Dialog „Änderungen … wurden
noch nicht gespeichert". Wer einfach weiterklickt, verliert alles.

### 9.4 Stand nach dem Livegang

| Kampagne | Typ | Budget | Gebote | Netzwerk | Status |
|---|---|---|---:|---|---|
| Filzprodukte | PMax | 10,00 € | **Ziel-ROAS 450 %** (Rampe, siehe 9.5) | — | lief durchgehend |
| **G** Zeugnismappen | Suche | 3,00 € | Klicks max., CPC 0,40 € | nur Suche | **aktiv seit 23.08.** |
| **C** Brand Taeradesign | Suche | 1,50 € | Klicks max., CPC 0,50 € | nur Suche | **aktiv seit 23.08.** |
| **D** Wichtelwelt | PMax | 5,00 € | Ziel-ROAS 450 % | — | **aktiv seit 23.08.** |

**Kontobudget 19,50 €/Tag** (vorher 10,00 €) — bei voller Ausschöpfung
rund 585 € im Monat statt 300 €. Das ist die Stelle zum Nachjustieren,
falls D und G nichts liefern.

C und G zeigen anfangs den Status „Gebotsstrategie lernt"; das ist der
normale Anlauf nach einem Strategiewechsel.

**Weitere Befunde der Vorprüfung** (alle unverändert gelassen):

- **AI Max** ist bei C und G **aus**, **Asset-Optimierung** bei allen
  dreien deaktiviert, automatisch erstellte Assets aus, weitgehend
  passende Keywords aus. Der Befund vom 09.08. („AI-Max-Zusammenfassung
  zeigt bei Suchkampagnen fälschlich aktiviert") hat sich damit
  erledigt — die Werte stimmen.
- **D Wichtelwelt:** Eintragsgruppen-Filter korrekt — `wichtelzubehör`
  einbezogen, „Alles andere in Alle Produkte" ausgeschlossen. Die
  Kampagneneinstellung „Feeds: Alle Produkte aus allen Feeds" ist davon
  unberührt, sie benennt nur die Quelle.
- **Bilder D:** 20 von 20 Slots belegt, Sichtprüfung durch den Betreiber
  am 23.08.2026 erfolgt. Eigene Produktfotos (Wichteltüren, Leitern,
  „Home"- und „POST"-Schilder, Miniaturmöbel). **Ein vertikales Bild
  (1559 × 2780) stand noch auf „Wird überprüft"** — blockiert den Start
  nicht. **Kein Video hinterlegt (0):** Google erzeugt dann in der Regel
  selbst eines aus den Bildern; abschalten lässt sich das nicht, nur
  durch ein eigenes Video ersetzen. Als einziger Weg, auf dem
  ungeprüftes Material nach außen ginge, hier festgehalten.
- Anzeigeneffektivität von D steht auf „Schlecht". Das ist ein
  Materialzähler, kein Leistungsmaß — dieselbe Einordnung wie im
  keiltronic-Konto (`keiltronic-website/docs/google-ads.md`).

### 9.5 tROAS-Rampe Filzprodukte: 400 → 450 % (23.08.2026)

Der zweite Schritt der Rampe aus Abschnitt „Auflösung des Zielkonflikts"
ist gesetzt: **Ziel-ROAS 450 %**, Budget unverändert 10,00 €/Tag.

**Zur Datenlage — Vorsicht mit Googles eigener Zahl.** Im Gebotsdialog
weist Google aus: *„Aktuelle Leistung (Stand 8. August 2026):
123,89 %"*. Diese Zahl ist **auf den Umstellungstag datiert** und misst
im Wesentlichen die vorangegangene Ziel-CPA-Phase. Sie taugt nicht als
Entscheidungsgrundlage. Aus den Kontozahlen vom 23.08.2026:

| Zeitraum | Umsatz | Kosten | ROAS |
|---|---:|---:|---:|
| 24.07.–22.08. (30 Tage) | 459,27 € | 206,81 € | **222 %** |
| 16.–22.08. (letzte 7 Tage) | 88,48 € | 19,28 € | **459 %** |

Die 30-Tage-Zahl enthält noch die alte Ziel-CPA-Phase; die letzte Woche
liegt bei 459 %. Damit ist die Bedingung „zwei stabile Wochen" erfüllt
und 450 % der folgerichtige Schritt.

**Einschränkung, ehrlich:** Die 459 % stehen auf 19,28 € Kosten und
einer Handvoll Käufen. Das ist eine schmale Basis. Bricht das Volumen
nach der Anhebung ein, ist das das erwartete Verhalten und kein Fehler
— dann zurück auf 400 %.

### 9.6 Offener Befund: Asset-Optimierung bei „Filzprodukte" ist an

Beim Setzen der Rampe aufgefallen und **bewusst nicht verändert**: In
der PMax „Filzprodukte" (läuft seit 17.10.2023) sind **alle fünf**
Asset-Optimierungen aktiv — Google meldet *„Alle empfohlenen
Einstellungen zur Asset-Optimierung sind aktiviert"*:

| Bereich | Einstellung | Was sie tut |
|---|---|---|
| Text | **Textanpassung** | erstellt Anzeigentext, der zu Suchanfragen passt |
| Text | **Erweiterung der finalen URL** | stimmt **Landingpages** auf Suchanfragen ab |
| Bild | **Bildoptimierung** | passt Bilder für bessere Darstellung an |
| Bild | **Landingpage-Bilder** | verwendet Bilder von der Website |
| Video | **Video-Optimierung** | passt Videos für bessere Darstellung an |

**Das ist der Gegensatz zu C, D und G**, wo die Asset-Optimierung
überall deaktiviert ist. Die Einstellung stammt vermutlich aus der
Anlage 2023, nicht von Auto-Apply — im Änderungsverlauf der letzten
30 Tage steht dazu nichts.

**Warum es der Aufmerksamkeit wert ist:** „Erweiterung der finalen URL"
schickt Nutzer auf **andere Seiten als die hinterlegte**; „Textanpassung"
erzeugt Anzeigentexte, die niemand freigegeben hat. Beides läuft der
Linie zuwider, die für alle neuen Kampagnen gilt (Einzelfreigabe je
Text, keine ungeprüften Google-Vorschläge — siehe Rote Linien,
Abschnitt 7). Andererseits läuft die Kampagne seit drei Jahren damit
und ist die einzige, die Umsatz bringt; ein Abschalten ist ein Eingriff
in ein laufendes System und würde die Leistung verändern.

**Nicht entschieden, Betreiber-Sache.** Vorschlag: erst nach der
tROAS-Rampe angehen, damit sich nicht zwei Änderungen überlagern und
man am Ende nicht weiß, welche gewirkt hat. Wenn, dann zuerst nur
**„Erweiterung der finalen URL"** abschalten — das ist die Einstellung
mit der größten Wirkung auf das, was der Kunde tatsächlich zu sehen
bekommt.

### 9.7 Neue Wiedervorlagen aus diesem Vorgang

| Wann | Was |
|---|---|
| **laufend, monatlich** | **Auto-Apply-Status prüfen** (Empfehlungen → Einstellungen für die automatische Anwendung). Muss auf 0 von 7 und 0 von 14 stehen. Google bewirbt die Funktion weiter; ein versehentliches Reaktivieren fällt sonst erst an den Zahlen auf |
| **~06.09.2026** | Wichtelwelt-tROAS-Check: unter 10 Käufen in zwei aktiven Wochen auf 400 % senken |
| **~06.09.2026** | **Filzprodukte nach der Rampe:** Hält der ROAS die 450 %? Wenn ja, dritter Schritt auf 500 % (die 37-€/h-Untergrenze). Wenn das Volumen einbricht, zurück auf 400 % |
| ~~**erste Tage**~~ | ~~Suchbegriffe von C prüfen~~ — **erledigt am 26.08.2026, Abschnitt 10. Ergebnis: ja, ausschließlich Markensuchen, kein Ausschluss nötig** |
| **danach, offen** | **Asset-Optimierung bei Filzprodukte** entscheiden (Abschnitt 9.6) — erst nach der Rampe, sonst überlagern sich zwei Änderungen |
| **~Mitte Sept.** | Zeugnismappen pausieren (Saisonende) |

---

## 10. Kontrolle am 26.08.2026 — Suchbegriffe, Merchant Center, Budgetausschöpfung

Nur gelesen, nichts geändert. Zeitraum durchgehend **23.–26.08.2026**
(vier Tage seit der Aktivierung von C, D und G).

### 10.1 Suchbegriffe von C und G — sauber

Der vollständige Suchbegriffe-Bericht für beide Suchkampagnen umfasst
**vier Zeilen**, zusammen 5 Impressionen, **0 Klicks, 0,00 €**:

| Suchbegriff | Kampagne | Keyword-Option | Impr. |
|---|---|---|---|
| **taeradesign** | Brand Taeradesign | Genau passend, hinzugefügt | 2 |
| zeugnismappe filz | Zeugnismappen | Genau passend, hinzugefügt | 1 |
| zeugnismappe aus filz | Zeugnismappen | Genau passend, ähnliche Variante | 1 |
| zeugnismappe personalisiert mit folien | Zeugnismappen | Wortgruppe, ähnliche Variante | 1 |

**Die Frage ist damit beantwortet: C läuft ausschließlich auf
Markensuchen.** Kein Fremdbegriff, keine Streuung, kein
Ausschlussbedarf. Auch G läuft thematisch sauber.

**Der wichtigere Befund ist die Nicht-Auslieferung.** Auf
Keyword-Ebene:

- **C, fünf Keywords:** `[taeradesign]` aktiv (2 Impr.),
  `"taeradesign"` aktiv (0), `[taera design]` aktiv (0) — und
  **`"taeradesign shop"` sowie `"taeradesign gotteslobhülle"` hat
  Google auf „Nicht aktiv: Geringes Suchvolumen" gesetzt.**
- **G, sieben Keywords:** alle aktiv, kein Suchvolumen-Problem,
  zusammen 4 Impressionen (nur `"zeugnismappe filz"` mit 3 und
  `"zeugnisordner"` mit 1).

Das ist kein Einrichtungsfehler, sondern fehlende Nachfrage: Nach
„Taeradesign" sucht in vier Tagen praktisch niemand. C bleibt damit
für 1,50 €/Tag eine günstige Versicherung gegen Marken-Gebote der
Konkurrenz — mehr wird sie nicht. Bei G kommt das Saisonende dazu.

**Nebenbefund Filzprodukte (PMax):** Die Kampagne streut in
französischsprachige Suchen („botte de foin miniature", „comment
fabriquer une piste de ski miniature") und auf den Miniaturmöbel-
Hersteller „bodo hennig". Je 1 Impression, 0 Klicks, 0,00 € — kostet
nichts, zeigt aber die Reichweite der PMax-Streuung.

### 10.2 Keine Kampagne ist budgetbegrenzt — das ist die zentrale Zahl

| Kampagne | Budget/Tag | Kosten 23.–26.08. (4 Tage) | Ø/Tag | Ausschöpfung |
|---|---|---|---|---|
| Filzprodukte (PMax) | 10,00 € | 3,43 € | 0,86 € | **8,6 %** |
| Wichtelwelt (PMax) | 5,00 € | 3,07 € | 0,77 € | **15,4 %** |
| Zeugnismappen (Suche) | 3,00 € | 0,00 € | 0,00 € | **0 %** |
| Brand Taeradesign (Suche) | 1,50 € | 0,00 € | 0,00 € | **0 %** |
| **Konto** | **19,50 €** | **6,50 €** | **1,63 €** | **8,3 %** |

*(Filzprodukte errechnet als Konto minus Wichtelwelt; die übrigen
Kampagnen sind pausiert und haben 0,00 €.)*

**Keine einzige Kampagne trägt den Status „Durch Budget begrenzt".**
Damit ist jede Budgetumschichtung gegenstandslos — siehe 10.4.

Leistung im selben Zeitraum: 2.345 Impressionen, 45,73 €
Conversion-Wert, 2 Käufe, 6,50 € Kosten. Der gesamte Umsatz kommt von
Filzprodukte; Wichtelwelt hat nach vier Tagen **0 Käufe** bei 3,07 €.

**Zur tROAS-Rampe, als Zwischenstand ohne Entscheidung:**

| | Umsatz/Tag | Kosten/Tag | ROAS |
|---|---|---|---|
| 7 Tage vor der Rampe (bis 22.08., tROAS 400 %) | 12,64 € | 2,75 € | 459 % |
| 4 Tage nach der Rampe (23.–26.08., tROAS 450 %) | 11,43 € | 0,86 € | 1.333 % |

Gleicher Umsatz bei einem Drittel der Kosten — dem Anschein nach hat
die Rampe genützt. **Vier Tage und zwei Käufe sind aber keine
Entscheidungsgrundlage.** Der Termin ~06.09. bleibt stehen.

### 10.3 Merchant Center — die Schultüten-Warnungen stehen noch

Konto 5293575741, Datenstand 26.08.2026, 00:07 Uhr. Sechs Meldungen:

| Meldung | Typ | Produkte | Klickpotenzial laut Google |
|---|---|---|---|
| Fehlende Daten für lokales Inventar | Fehler | 684 (96,9 %) | Hoch, +59 Klicks |
| Anzeigen-Overlay auf Bild | Fehler | 4 (< 1 %) | Niedrig, < 5 Klicks |
| **Fehlende Altersgruppe** | Warnung | **68 (9,6 %)** | Nicht unterstützt |
| **Fehlende Farbe** | Warnung | **15 (2,1 %)** | Nicht unterstützt |
| **Fehlendes Geschlecht** | Warnung | **7 (< 1 %)** | Nicht unterstützt |
| Fehlende Größe | Warnung | 3 (< 1 %) | Nicht unterstützt |

**Die Antwort auf die Wiedervorlage vom ~12.08. lautet: nein, die
Warnungen sind nicht weg.** Die Produktliste hinter „Fehlende
Altersgruppe" wurde geöffnet — es sind **genau die
Schultüten-Anhänger** („Personalisierter Anhänger für Schultüte …
Einschulung 2025 Schulranzen Tornister Mit/Ohne Perlen"), also
dieselbe Familie wie in der Nachtsitzung vom 09./10.08.

**Naheliegende Erklärung, nicht belegt:** In der Nachtsitzung wurden
28 Produkte mit Farbe/Altersgruppe/Geschlecht befüllt und bei 13
weiteren nur die fehlende **Produktkategorie** nachgetragen, damit die
Metafelder überhaupt existieren. Die **Werte** in diesen 13 dürften nie
gesetzt worden sein. Das erklärt allerdings nicht die vollen 68 — es
sind mehr Produkte betroffen, als damals angefasst wurden. Die Doku
vom 09.08. nennt keine Einzelprodukte, deshalb ist eine genaue
Zuordnung nicht möglich.

**Zwei Einordnungen gegen die Dringlichkeit:**

1. Altersgruppe, Farbe, Geschlecht und Größe sind **Warnungen, keine
   Fehler**. Google beziffert das Klickpotenzial ausdrücklich mit
   „Nicht unterstützt" — die Produkte werden ausgeliefert, sie sind
   nur schlechter filterbar. Für die Einschulung 2026 ist die Saison
   ohnehin vorbei.
2. Der einzige Posten mit bezifferter Wirkung — „Fehlende Daten für
   lokales Inventar", 684 Produkte, +59 Klicks — ist **gegenstandslos
   und bleibt es dauerhaft.** Das ist Googles Aufforderung,
   Ladenbestände zu melden. **Vom Betreiber am 26.08.2026 bestätigt:
   Taeradesign hat kein Ladengeschäft, es ist reiner Onlineverkauf.**
   Der rote Fehler steht damit als Dauerposten in der Diagnose und ist
   kein Handlungsbedarf — wer ihn künftig sieht, muss ihn nicht erneut
   prüfen.

**Der Punkt wandert damit von „überfällig" auf „bei Gelegenheit, vor
Juni 2027"** — als Feed-Hygiene für die nächste Einschulungssaison,
nicht als Umsatzmaßnahme.

### 10.4 Budget von einer Suchkampagne auf die PMax umschichten?

**Nein — der Gedanke geht ins Leere.** Drei Gründe:

1. **Tagesbudgets sind Obergrenzen, keine Zuteilungen.** C und G geben
   0,00 € aus. Wer ihr Budget streicht, macht bei Filzprodukte keinen
   Cent frei, weil dort nie einer gebunden war.
2. **Es gibt kein hartes Kontobudget.** Die „19,50 €/Tag" in der
   Gesamtzeile ist die *Summe der Kampagnenbudgets*, kein Deckel, der
   irgendwo bremst.
3. **Die Zielkampagne ist selbst nicht budgetbegrenzt.** Filzprodukte
   ruft 8,6 % seines Budgets ab. Ein höheres Budget würde dort
   schlicht nicht abgerufen.

**Die wirksame Stellschraube ist nicht das Budget, sondern das
tROAS-Ziel** — es entscheidet, wie viel Google überhaupt ausliefert.
Und die gehört nach der bestehenden Regel erst am **~06.09.**
angefasst, mit zwei Wochen Datenbasis. Bis dahin nichts ändern.

Was aus dieser Rechnung **wirklich folgt:** Die 19,50 € Kontobudget
sind seit dem 23.08. eine Zahl ohne Wirkung. Die reale Ausgabe liegt
bei 1,63 €/Tag. Wer mehr Umsatz will, muss am tROAS drehen oder an
Zielgruppen und Assets arbeiten — nicht am Budget.


### 10.5 Nachmessung am 28.08.2026 — die Zahlen vom 26.08. waren unreif

Abgelesen am 28.08.2026 aus der Kampagnentabelle des Kontos
932-417-3105, Zeitraum **23.–28.08.2026** (Aktivierung bis heute).
Der 28.08. ist noch nicht abgeschlossen, seine Werte reifen weiter
nach.

| Kampagne | Budget/Tag | Status | Impr. | Umsatz | Kosten | Käufe | ROAS |
|---|---|---|---|---|---|---|---|
| **Filzprodukte** (PMax) | 10,00 € | Aktiv | 2.803 | 45,73 € | 14,61 € | 2 | 313 % |
| **D Wichtelwelt** (PMax) | 5,00 € | Gebotsstrategie lernt | 1.241 | 0,00 € | 12,77 € | 0 | 0 % |
| **G Zeugnismappen** (Suche) | 3,00 € | Gebotsstrategie lernt | 6 | 0,00 € | 0,00 € | 0 | — |
| **C Brand** (Suche) | 1,50 € | Gebotsstrategie lernt | 3 | 0,00 € | 0,00 € | 0 | — |
| **Konto gesamt** | 19,50 € | | 4.053 | 45,73 € | 27,38 € | 2 | 167 % |

Die übrigen sieben Kampagnen sind pausiert, 0 Impressionen. ROAS
jeweils selbst gerechnet (Umsatz ÷ Kosten), nicht aus Googles Anzeige
übernommen.

*Hinweis zur Spaltenwahl:* Die Übersichtskacheln zeigten für denselben
Zeitraum einen Conv.-Wert von 67,14 € — das ist der Wert
**einschließlich prognostizierter** Conversions. Oben steht die harte
Zahl aus der Umsatzspalte, 45,73 €.

#### Korrektur zu Abschnitt 10.2 und 10.4

**Die Messung vom 26.08.2026 (00:07 Uhr) traf zwei noch nicht
ausgereifte Tage.** Derselbe Zeitraum 23.–26.08. zeigt heute **20,13 €**
Kosten statt der dort notierten **6,50 €** — gut das Dreifache.
Entsprechend bei Filzprodukte: dort „11,43 € Umsatz / 0,86 € Kosten =
1.333 %", über 23.–28. dagegen 45,73 € / 14,61 € = **313 %**.

Was daraus folgt:

- **Hinfällig ist die Zahl** „1,63 €/Tag, 8,3 % Budgetabruf". Richtig
  sind für 23.–28.08. **4,56 €/Tag, also 23 % Abruf** bei 19,50 €
  Kontobudget.
- **Gültig bleibt die Aussage** in 10.4: Keine Kampagne trägt den
  Status „Durch Budget begrenzt", die wirksame Stellschraube ist das
  tROAS-Ziel, nicht das Budget. Der Befund war richtig, die Zahl
  darunter zu klein.
- **Lehre für künftige Kontrollen:** Nicht kurz nach Mitternacht
  messen und die letzten beiden Tage nicht als belastbar behandeln.
  Google weist selbst darauf hin, dass die Berichterstattung nicht in
  Echtzeit erfolgt.

#### Was für den ~06.09. daraus folgt

1. **Der Blick gehört auf D Wichtelwelt, nicht auf Filzprodukte.** D
   verbraucht mit 12,77 € fast die Hälfte der Kontokosten und liefert
   **null Umsatz bei null Käufen** aus 1.241 Impressionen. Die
   bestehende Regel (auf 400 % senken, falls nach zwei aktiven Wochen
   < 10 Käufe) greift damit voraussichtlich. **Nicht vorziehen:** Die
   Gebotsstrategie ist nach sechs Tagen noch in der Lernphase, und
   Wichtelzubehör ist Ende August saisonal am toten Punkt.
2. **Filzprodukte liegt mit 313 % unter dem Ziel von 450 %.** Sechs
   Tage und zwei Käufe sind keine Entscheidungsgrundlage; der Termin
   bleibt stehen. Der dritte Rampenschritt auf 500 % ist nach dieser
   Zahl aber nicht angezeigt.

#### Offener Punkt: G Zeugnismappen läuft nicht — die Saison verstreicht

**6 Impressionen in sechs Tagen, 0,00 € Kosten.** Die Kampagne wurde
für das Fenster „19.08. bis Mitte September" gebaut; die Hälfte davon
ist um, ohne dass sie nennenswert ausgeliefert hätte.

Damit läuft die Wiedervorlage „~Mitte September pausieren
(Saisonende)" ins Leere — pausiert würde etwas, das nie lief. **Die
Frage ist jetzt zu stellen, nicht Mitte September:** Ist der
CPC-Deckel von 0,40 € zu niedrig, sind die 7 Keywords zu eng, oder
gibt es für „Zeugnismappe" schlicht zu wenig Suchvolumen? Das ist vor
dem nächsten Zeugnistermin (Halbjahr ~Ende Januar) zu klären, sonst
wiederholt sich der Leerlauf.

> **Nachtrag 02.09.2026:** In den drei Tagen 29.–31.08. kamen 68
> weitere Impressionen dazu — die Kampagne kam also zuletzt doch in
> die Auktion, gewann aber nichts (0,15 € Kosten, kein Klick). Der
> CPC-Deckel wurde auf 0,80 € angehoben, die Kampagne anschließend
> auf Wunsch des Betreibers **pausiert** (Saisonende). Die Frage nach
> dem Suchvolumen bleibt für Januar offen. Siehe Abschnitt 12.3.

Bei **C Brand** ist der gleiche Befund (3 Impressionen) dagegen
erklärt und unbedenklich — siehe 10.1: reine Markensuche, geringes
Volumen, zwei Keywords von Google wegen geringen Suchvolumens
stillgelegt.

---

## 11. Prüfrhythmus statt Ferntermine (entschieden 28.08.2026)

**Betreiber am 28.08.2026:** „eher jede Woche oder sogar alle 5 Tage,
macht mehr Sinn."

Anlass war G Zeugnismappen (10.5): Eine Kampagne mit 6 Impressionen in
sechs Tagen wäre bis zur nächsten Wiedervorlage „~Mitte September
pausieren" unbemerkt durch ihre halbe Saison gelaufen. Einzelne, weit
entfernte Termine bemerken nur, was am Termin noch da ist — nicht, was
zwischendurch gar nicht erst passiert.

### Die Regel

**Alle 5 bis 7 Tage ein kurzer Kontrollblick.** Nicht als Ersatz für
die datierten Entscheidungstermine (tROAS-Schritte, Saisonwechsel),
sondern darunter: Die Termine entscheiden, der Rhythmus bemerkt.

Je Durchgang, für die aktiven Kampagnen:

1. **Liefert sie überhaupt aus?** Impressionen und Kosten. Eine
   Kampagne mit einstelligen Impressionen ist kein Leerlauf, den man
   aussitzt — sie ist ein Befund. Ursachen: CPC-Deckel zu niedrig,
   Keywords zu eng, Suchvolumen nicht vorhanden
2. **Was kostet sie, was bringt sie?** Kosten, Umsatz, Käufe; ROAS
   selbst rechnen (Umsatz ÷ Kosten)
3. **Steht ein Statuswechsel an?** „Gebotsstrategie lernt" → aktiv,
   „Durch Budget begrenzt", Ablehnungen, Richtlinienhinweise
4. **Auffälligkeiten notieren, nicht sofort drehen.** Geändert wird an
   den datierten Terminen, außer es liegt ein Fehler vor (Kampagne
   liefert nicht aus, Anzeige abgelehnt, Budget läuft ins Leere)

### Zwei Fallstricke, die dabei zu beachten sind

- **Die letzten zwei Tage sind nicht belastbar.** Bei einem
  5-Tage-Rhythmus bleiben also rund drei bewertbare Tage je Durchgang.
  Wer den jüngsten Tag mitrechnet, misst zu niedrig — das war der
  Fehler vom 26.08. (siehe 10.5). Nicht kurz nach Mitternacht messen
- **Kurze Fenster verführen zu Übersteuerung.** Der Rhythmus dient dem
  *Bemerken*, nicht dem Nachjustieren. Eine Gebotsstrategie, an der
  alle fünf Tage gedreht wird, kommt aus der Lernphase nie heraus

### Was damit entfällt

Die bisherigen Einzeltermine bleiben als **Entscheidungstermine**
bestehen (~06.09. D und Filzprodukte, ~20.09. Markenausschluss,
September Kommunion). Weg fällt die Vorstellung, dass zwischen ihnen
nichts zu sehen ist.

---

## 12. Kontrollblick am 02.09.2026 — der erste nach der neuen Regel

Fünf Tage nach der Nachmessung vom 28.08. (Abschnitt 10.5), damit
turnusgemäß fällig. Abgelesen aus der Kampagnentabelle des Kontos
932-417-3105.

### 12.1 Die Zahlen

**Belastbares Fenster 23.–31.08.2026** — der 01. und 02.09. bewusst
ausgeschlossen, siehe Fallstrick in Abschnitt 11. ROAS durchweg selbst
gerechnet (Umsatz ÷ Kosten), nicht aus Googles Anzeige übernommen.

| Kampagne | Budget/Tag | Status | Impr. | Umsatz | Kosten | Käufe | ROAS |
|---|---|---|---:|---:|---:|---:|---:|
| **Filzprodukte** (PMax) | 10,00 € | Aktiv | 4.149 | 77,72 € | 21,15 € | 3 | **367 %** |
| **D Wichtelwelt** (PMax) | 5,00 € | **Aktiv (eingeschränkt)** | 3.045 | 0,00 € | 25,68 € | 0 | 0 % |
| **G Zeugnismappen** (Suche) | 3,00 € | Aktiv | 75 | 0,00 € | 0,15 € | 0 | — |
| **C Brand** (Suche) | 1,50 € | Aktiv | 6 | 0,00 € | 0,00 € | 0 | — |
| **Konto gesamt** | 19,50 € | | 7.275 | 77,72 € | 46,98 € | 3 | 165 % |

Kontoabruf **5,22 €/Tag = 27 %** von 19,50 €. Keine Kampagne trägt
„Durch Budget begrenzt" — der Befund aus 10.4 gilt unverändert.

**Nur die drei neuen Tage 29.–31.08.**, also das, was seit der letzten
Messung dazugekommen ist:

| Kampagne | Impr. | Umsatz | Kosten | Käufe | ROAS |
|---|---:|---:|---:|---:|---:|
| Filzprodukte | 999 | 31,99 € | 5,17 € | 1 | **619 %** |
| D Wichtelwelt | 1.279 | 0,00 € | 8,47 € | 0 | 0 % |
| G Zeugnismappen | 68 | 0,00 € | 0,15 € | 0 | — |
| C Brand | 3 | 0,00 € | 0,00 € | 0 | — |

**Die Nachreifung ist zum zweiten Mal belegt.** Derselbe Zeitraum
23.–28.08. zeigte am 02.09. **33,19 €** Kosten; am 28.08. abgelesen
waren es **27,38 €**. Gut ein Fünftel mehr, nachträglich. Die Regel
„letzte zwei Tage nicht bewerten" ist damit keine Vorsichtsmaßnahme
mehr, sondern gemessen.

### 12.2 Der Befund: D Wichtelwelt optimierte auf das falsche Zielvorhaben

Der Status war von „Gebotsstrategie lernt" auf **„Aktiv
(eingeschränkt)"** gewechselt, mit der Warnung *„Für das gewünschte
Zielvorhaben fehlt eine primäre Conversion-Aktion"*. Die
Kampagnendiagnose nannte die betroffenen Kategorien: **Sonstige** und
**Seitenaufruf**, beide Quelle Website.

Der Vergleich mit der funktionierenden Schwesterkampagne war
eindeutig:

| | Conversion-Zielvorhaben | Gebote | Ergebnis |
|---|---|---|---|
| **Filzprodukte** | **Kampagnenspezifisch: Käufe** | Ziel-ROAS 450 % | 3 Käufe |
| **D Wichtelwelt** | **Kontostandard:** Käufe, In den Einkaufswagen, Bezahlvorgang starten, Anruf-Leads, Kontakte | Ziel-ROAS 450 % | 0 Käufe |

D jagte mit einem 450-%-Umsatzziel ein Bündel, das zur Hälfte aus
Signalen ohne Umsatzwert besteht — Anruf-Leads und Kontakte tragen in
einem Filzshop keinen Warenkorbwert. Das erklärt 25,68 € für 3.045
Impressionen und null Käufe besser als Saisonalität.

**Damit war die Wiedervorlage „~06.09. tROAS auf 400 % senken"
gegenstandslos.** Sie hätte an einer Zahl gedreht, deren Bezugsgröße
nicht stimmt — die Kampagne wäre billiger falsch gelaufen.

### 12.3 Was am 02.09.2026 geändert wurde

Drei Eingriffe, alle nach Einzelfreigabe des Betreibers, alle nach dem
Speichern durch Neuladen der Seite geprüft.

**1. D Wichtelwelt: Conversion-Zielvorhaben auf „Kampagnenspezifisch:
Käufe"** — nur dieses eine Häkchen, identisch zu Filzprodukte. Der
Kopftext der Einstellungen liest seither „optimiert im Hinblick auf
eine Steigerung bei Käufe". Ziel-ROAS 450 % und Budget 5,00 €/Tag
unverändert.

> **Falle im Dialog, für künftige Änderungen festgehalten:** Googles
> Zielvorhaben-Auswahl hat **zwei** Speichern-Knöpfe. Der innere
> (im Auswahlfenster) übernimmt nur die Häkchenliste, der äußere
> (im Abschnitt „Conversion-Zielvorhaben") schreibt sie in die
> Kampagne. Der erste Versuch am 02.09. drückte nur den inneren — nach
> dem Neuladen stand wieder „Kontostandard" da, **ohne jede
> Fehlermeldung**. Der Dialog quittiert lautlos falsch. Nach jeder
> Änderung neu laden und nachsehen.

**2. G Zeugnismappen: CPC-Deckel von 0,40 € auf 0,80 €** angehoben.
Gebotsstrategie „Klicks maximieren", Budget 3,00 €/Tag und AI Max
(aus) unverändert. Begründung: 68 Impressionen in drei Tagen bei
0,15 € Kosten und keinem einzigen Klick heißt, dass die Kampagne in
die Auktion kommt, aber nichts gewinnt.

**3. G Zeugnismappen anschließend pausiert** (Betreiber, 02.09.2026):
„Zeugnismappen sind für diese Saison erstmal vorbei, erst wieder im
Januar interessant." **Pausiert, nicht entfernt** — Keywords, Anzeigen
und Historie bleiben liegen.

Damit ist der unter 2. gesetzte Deckel **nie erprobt worden**; zwischen
Anhebung und Pausierung lag keine Auktion. Er bleibt trotzdem auf
0,80 € stehen, statt auf 0,40 € zurückgesetzt zu werden: Der Befund
„0,40 € war zu niedrig" ist die einzige Erkenntnis, die diese Saison
hervorgebracht hat, und sie gehört in die nächste hinein. **Wer im
Januar reaktiviert, muss wissen, dass 0,80 € eine begründete Annahme
ist und keine Messung.**

### 12.4 Was daraus für die Termine folgt

- **~06.09. D Wichtelwelt entfällt.** Mit der Zielvorhaben-Umstellung
  beginnt die Lernphase neu; die zwei Bewertungswochen laufen ab dem
  02.09. **Neuer Termin ~16.09.2026.** Nicht vorziehen
- **~06.09. Filzprodukte bleibt.** 367 % über das ganze Fenster, 619 %
  über die letzten drei Tage bei *einem* Kauf — die Richtung stimmt,
  die Basis trägt keine Entscheidung. Am Termin mit dann rund zwei
  Wochen Daten entscheiden
- **G Zeugnismappen:** Vor einer Reaktivierung Ende Januar ist die
  offene Frage aus 10.5 zu klären — gibt es für „Zeugnismappe"
  überhaupt Suchvolumen? Sonst wiederholt sich der Leerlauf mit einem
  anderen Gebot
- **C Brand** bleibt unangetastet. 6 Impressionen sind bei reiner
  Markensuche erwartbar und erklärt (10.1)

### 12.5 Nebenbefund ohne Handlungsbedarf

Die Kampagnentabelle zeigte bei **Wichtelwelt** auch nach der
Umstellung und mehrfachem Neuladen weiterhin „Aktiv (eingeschränkt) —
Für das gewünschte Zielvorhaben fehlt eine primäre Conversion-Aktion".
Die Einstellung selbst ist nachweislich geändert; Googles
Diagnosestatus wird verzögert nachgezogen. **Steht die Warnung Mitte
September noch, ist das ein eigener Befund** — dann steckt mehr
dahinter als das Zielvorhaben.

**Gotteslob-Max-Performance** trägt „Pausiert — alle Asset-Gruppen sind
durch Richtlinien eingeschränkt". Sie ist pausiert und kostet nichts,
wäre aber vor einer Reaktivierung zu klären.

## 13. Kontrollblick am 12.09.2026 — zehn Tage statt fünf bis sieben

Der Takt aus Abschnitt 11 sieht 5 bis 7 Tage vor. Der letzte
Kontrollblick war am 02.09. (Abschnitt 12), dieser ist am **12.09.**,
also **zehn Tage** später — überfällig. Grund war kein Versäumnis am
Konto, sondern der Ausfall der geplanten Aufgaben zwischen dem 03. und
dem 11.09.: Weder Morgenblick noch Marktbeobachtung sind in diesen
Tagen gestartet, damit fiel auch die Fälligkeitsmeldung aus. **Das ist
der erste belegte Fall, in dem der Takt nicht am Takt scheitert,
sondern an dem, was ihn meldet.**

Abgelesen aus der Kampagnentabelle des Kontos 932-417-3105, angemeldet
als `tk@taeradesign.de`. Nur gelesen, keine Änderung.

### 13.1 Die Zahlen

**Belastbares Fenster 01.–10.09.2026** — der 11. und 12.09.
ausgeschlossen (Fallstrick Abschnitt 11, zweifach belegt in 12.1).
ROAS durchweg selbst gerechnet (Umsatz ÷ Kosten).

| Kampagne | Budget/Tag | Status | Impr. | Umsatz | Kosten | Käufe | ROAS |
|---|---|---|---:|---:|---:|---:|---:|
| **Filzprodukte** (PMax) | 10,00 € | Aktiv | 2.308 | 145,00 € | 20,59 € | 2 | **704 %** |
| **D Wichtelwelt** (PMax) | 5,00 € | **Aktiv** | 556 | 0,00 € | 1,94 € | 0 | 0 % |
| **C Brand** (Suche) | 1,50 € | Aktiv | 11 | 0,00 € | 0,52 € | 0 | — |
| **G Zeugnismappen** (Suche) | 3,00 € | Pausiert | 55 | 0,00 € | 0,80 € | 0 | — |
| **Gesamt** | 16,50 € | | 2.930 | 145,00 € | 23,85 € | 2 | 608 % |

Kontoabruf **2,39 €/Tag = 14 %** der Budgetsumme von 16,50 €. Keine
Kampagne trägt „Durch Budget begrenzt". Der Abruf ist damit noch
einmal gefallen (27 % am 02.09., 23 % am 28.08.) — der Befund aus 10.4
verschärft sich weiter.

**Nur 03.–10.09.**, also ausschließlich nach den Eingriffen vom 02.09.:

| Kampagne | Impr. | Umsatz | Kosten | Käufe | ROAS |
|---|---:|---:|---:|---:|---:|
| Filzprodukte *(abgeleitet)* | 1.748 | 89,00 € | 17,14 € | 1 | **519 %** |
| D Wichtelwelt | 282 | 0,00 € | 0,90 € | 0 | 0 % |
| C Brand | 8 | 0,00 € | 0,50 € | 0 | — |
| G Zeugnismappen | 0 | 0,00 € | 0,00 € | 0 | — |
| **Gesamt** | 2.038 | 89,00 € | 18,54 € | 1 | 480 % |

> **Zur Filzprodukte-Zeile:** Sie ist **gerechnet, nicht abgelesen** —
> Gesamtsumme minus die drei anderen Kampagnen. Die abgelesenen Werte
> sind die Gesamtzeile und die drei kleinen Kampagnen.

### 13.2 Befund 1: D Wichtelwelt liefert nach der Umstellung fast nicht mehr aus

| Zeitraum | Impr./Tag | Kosten/Tag | Budgetabruf |
|---|---:|---:|---:|
| 23.–31.08. (vor der Umstellung) | 338 | 2,85 € | 57 % |
| 03.–10.09. (nach der Umstellung) | **35** | **0,11 €** | **2 %** |

Die Umstellung des Conversion-Zielvorhabens auf „Kampagnenspezifisch:
Käufe" am 02.09. hat das Problem „Geld ohne Käufe" beseitigt — aber
**nicht, indem sie Käufe erzeugt hat, sondern indem die Kampagne
aufgehört hat auszuliefern.** Seit Aktivierung am 23.08. steht sie bei
rund 27,60 € Kosten und **null Käufen**.

**Positiv und erledigt:** Die Warnung „Aktiv (eingeschränkt) — Für das
gewünschte Zielvorhaben fehlt eine primäre Conversion-Aktion" ist
verschwunden; der Status lautet schlicht „Aktiv". Der unter 12.5
formulierte Vorbehalt („steht die Warnung Mitte September noch, steckt
mehr dahinter") ist damit **negativ beantwortet** — es steckte nichts
weiter dahinter, Googles Diagnose war nur träge.

**Der Termin ~16.09. bleibt und wird nicht vorgezogen.** Die zwei
Bewertungswochen laufen ab dem 02.09.

### 13.3 Befund 2: Der Volumenrückgang trifft auch die unveränderte Kampagne

| Kampagne | Impr./Tag 23.–31.08. | Impr./Tag 03.–10.09. | Veränderung |
|---|---:|---:|---:|
| Filzprodukte (**nicht angefasst**) | 461 | 219 | −52 % |
| D Wichtelwelt (umgestellt) | 338 | 35 | −90 % |

**Das ist der wichtigere Befund von beiden, weil er die Deutung von
13.2 begrenzt.** Filzprodukte wurde am 02.09. nicht verändert und hat
trotzdem die Hälfte des Volumens verloren. Es wirkt also etwas, das
nicht an den Einstellungen liegt — naheliegend Saison oder
Auktionsdruck, **belegt ist es nicht**. Wer den Wichtelwelt-Einbruch
vollständig der Umstellung zuschreibt, rechnet diesen Anteil doppelt.

Der zusätzliche Einbruch bei D (−90 % gegenüber −52 %) bleibt
erklärungsbedürftig und gehört an den Termin ~16.09.

### 13.4 Befund 3: Korrektur an Abschnitt 12.3 — 0,40 € hat sehr wohl gewonnen

In 12.3 steht zu G Zeugnismappen, die Kampagne komme in die Auktion,
gewinne aber nichts. Die Septemberzahlen widersprechen dem: Im Fenster
01.–10.09. trägt sie **0,80 € Kosten bei einem durchschnittlichen
Klickpreis von 0,40 €**, also **zwei gewonnene Klicks** — und im
Fenster 03.–10.09. null, weil sie da bereits pausiert war. Die Klicks
fielen demnach am 01./02.09. an, **noch zum alten Deckel von 0,40 €**.

Was stehen bleibt: Der am 02.09. gesetzte Deckel von **0,80 € ist
weiterhin unerprobt** — zwischen Anhebung und Pausierung lag keine
Auktion. Was zu berichtigen ist: Der Satz „0,40 € gewinnt nichts" ist
falsch. Er hat zweimal gewonnen. **Für die Reaktivierung im Januar
heißt das, dass die Begründung für 0,80 € schwächer ist als in 12.3
angenommen** — sie stützt sich jetzt auf zwei Klicks in zwei Tagen
gegen null Klicks in sechs.

### 13.5 Kleinbefunde

- **C Brand liefert erstmals Klicks.** 11 Impressionen, 0,52 € Kosten
  bei Ø 0,10 € — also rund fünf Klicks, gegenüber null im
  Augustfenster. Kein Kauf. Kein Handlungsbedarf, aber die Kampagne
  ist nicht mehr tot
- **Auto-Apply geprüft: 0 von 7 und 0 von 14.** Sollzustand, keine
  Abweichung. Damit ist die monatliche Prüfung aus Abschnitt 9
  **vorgezogen erledigt**; nächster Termin ~12.10.2026 statt ~23.09.
- **Googles eigene Empfehlung lautet, die ROAS-Ziele zu senken**
  („ROAS-Ziele anpassen", +2,6 %; prognostiziert +36 € Conversion-Wert
  pro Woche bei +8,99 € Mehrkosten). **Nicht übernommen** — die Rote
  Linie „Einzelfreigabe" gilt auch für Googles Vorschläge. Notiert,
  weil sie in dieselbe Richtung zeigt wie die Überlegung in 13.6
- **Neuer Hinweisbanner von Google:** Ab dem 17.08.2026 werde die
  Leistung budgetbegrenzter Kampagnen mit Gebotszielen „beständiger",
  auch nach Budgetanpassungen; Ziele würden nicht automatisch
  aktualisiert. **Für dieses Konto ohne Belang** — bei 14 % Abruf ist
  keine Kampagne budgetbegrenzt

### 13.6 Die Entscheidung zu Filzprodukte (Termin war ~06.09.)

Der überfällige Termin aus 12.4 ist damit abgearbeitet. Die Lage:

- ROAS **704 %** über 01.–10.09., **519 %** über 03.–10.09. — beides
  deutlich über dem Ziel von 450 %
- **zwei Käufe in zehn Tagen**, Ø-Bestellwert 72,50 €
- Volumen gegenüber August **halbiert**

Nach der hinterlegten Regel („hält er 450 %, dann dritter Schritt auf
500 %") wäre eine Erhöhung fällig. **Sie wird nicht vorgenommen.**

**Entschieden am 12.09.2026 (Betreiber): Ziel-ROAS bleibt bei 450 %,
keine Änderung.** Begründung:

1. Der Volumenrückgang tritt **auch bei unveränderten Kampagnen** auf
   (13.3). Die Ursache liegt damit nicht erkennbar am Ziel. An einer
   Stellschraube zu drehen, deren Wirkung sich vom Störsignal nicht
   trennen lässt, verdirbt die nächste Messung
2. **Zwei Käufe tragen keine Entscheidung** — weder nach oben noch
   nach unten. Ein einzelner Auftrag bestimmt den ROAS
3. Der Takt dient dem Bemerken, nicht dem Nachjustieren (Abschnitt 11)

**Die Gegenthese ist festzuhalten, weil sie nicht widerlegt ist:** Ein
ROAS weit über Ziel bei fallendem Volumen ist das übliche Bild eines
*zu hoch* gesetzten Ziels — Google liefert dann nur noch die sichersten
Auktionen aus. Googles Simulation (13.5) zeigt in dieselbe Richtung,
und bei 14 % Budgetabruf ist Drosseln nicht das Problem dieses Kontos.
**Wäre der Volumenrückgang bei Filzprodukte allein aufgetreten, wäre
eine Senkung auf 400 % die richtige Antwort gewesen.** Er ist es
nicht — deshalb erst messen.

### 13.7 Was daraus für die Termine folgt

- **~16.09.2026 — D Wichtelwelt beurteilen.** Unverändert. Dann
  zusätzlich zu klären: Warum liefert sie bei 2 % Budgetabruf
  praktisch nicht mehr aus, über den marktweiten Rückgang hinaus?
- **~16.09.2026 — Filzprodukte mitbeurteilen.** Zusammengelegt mit dem
  Wichtelwelt-Termin, statt eines eigenen Termins. Dann liegen rund
  zwei Wochen Daten vor. Entscheidungsfrage: Hat sich das Volumen
  erholt (dann war es Saison) oder nicht (dann ist die Senkung auf
  400 % angezeigt)?
- **~12.10.2026 — Auto-Apply.** Vorgezogen erledigt am 12.09., nächster
  Turnus einen Monat später
- **~20.09.2026 — Markenprüfung „Taeradesign"**, danach Markenausschluss
  in der PMax. Unverändert
- **September, ohne Tag — F Kommunion anlegen**, live ~01.10. **Dieser
  Punkt hat bis heute kein Datum und ist der einzige mit einem harten
  Außentermin.** Suchkampagne, nicht PMax; Text-Lesung vor der Anlage
- **Nächster Kontrollblick: ~17.–19.09.2026** (5 bis 7 Tage)

## 14. Saisonvorbereitung am 12.09.2026 — Gotteslob reaktiviert, erstmals mit Deckungsbeitragsrechnung

Anlass: Der Betreiber wollte die Saison für Wichtelprodukte und
Gotteslobhüllen vorbereiten. Aus der Bestandsaufnahme wurde mehr — zum
ersten Mal liegt eine **Handelsspanne** vor, und damit lässt sich sagen,
was die Kampagnen tatsächlich verdient haben statt nur, was sie
umgesetzt haben.

### 14.1 Die Zahl, die bisher fehlte: 65 % Spanne

**Betreiberangabe vom 12.09.2026: die Handelsspanne liegt bei etwa
65 %.** Daraus folgt unmittelbar:

> **Break-even-ROAS = 1 ÷ 0,65 = 154 %.**
> Darunter ist jeder Werbe-Euro ein Verlust, darüber verdient er.

Diese Zahl hat im ganzen Konto gefehlt — die Spalte „Bruttogewinn" ist
leer, es ist keine Marge hinterlegt. Alle bisherigen ROAS-Ziele
(400 %, 450 %, 321 %) waren damit **gesetzt, ohne dass jemand sagen
konnte, wo die Nulllinie liegt.** Dass sie deutlich über 154 % lagen,
war Glück, keine Rechnung.

### 14.2 Die Vorjahressaison, nachgerechnet

**Q4 2025 (01.10.–31.12.2025)**, Deckungsbeitrag = 0,65 × Umsatz:

| Kampagne | Impr. | Umsatz | Kosten | Käufe | ROAS | DB | **Ergebnis** |
|---|---:|---:|---:|---:|---:|---:|---:|
| Gotteslob-Max-Performance | 78.506 | 893,58 € | 489,61 € | 26 | 182 % | 580,83 € | **+91,22 €** |
| Filzprodukte | 203.869 | 1.095,36 € | 1.081,68 € | 43 | 101 % | 711,98 € | **−369,70 €** |
| Wichtel | 18.736 | 30,93 € | 142,56 € | 2 | 22 % | 20,10 € | **−122,46 €** |
| **Gesamt** | **301.111** | **2.019,87 €** | **1.713,85 €** | **71** | 118 % | 1.312,92 € | **−400,93 €** |

**Die Weihnachtssaison 2025 hat rund 401 € Verlust gemacht.** Nur
Gotteslob war positiv. Bisher stand im Protokoll nur „ROAS 118 %", und
das klang nach Gewinn — es war keiner.

**Zur Einordnung das Gesamtjahr 2025 (01.01.–31.12.2025):**

| Kampagne | Umsatz | Kosten | Käufe | ROAS | **Ergebnis** |
|---|---:|---:|---:|---:|---:|
| Gotteslob-Max-Performance | 7.384,78 € | 3.300,54 € | 203 | 224 % | **+1.499,57 €** |
| Filzprodukte | 5.455,15 € | 3.040,74 € | 164 | 179 % | **+505,11 €** |
| Wichtel | 87,82 € | 232,92 € | 6 | 38 % | **−175,84 €** |
| Shopping – Alle Produkte | 36,50 € | 3,86 € | 1 | 946 % | +19,86 € |
| **Gesamt** | **12.964,25 €** | **6.579,48 €** | **374** | 197 % | **+1.847,28 €** |

**Das Jahr war gut, das vierte Quartal nicht.** Und die tragende Säule
des Jahres war **Gotteslob mit rund 1.500 € Ergebnis** — mehr als
Filzprodukte und alles andere zusammen. Genau diese Kampagne stand seit
Anfang 2026 still.

**Wichtel ist über beide Betrachtungen hinweg ein Verlustgeschäft:**
2025 gesamt −176 €, davon −122 € im Q4; dazu 2026 bisher rund −28 €
über die Nachfolgerin „Wichtelwelt" (0 Käufe bei ~27,60 € Kosten).
**Rund 200 € Verlust über zwei Saisons, kein einziger profitabler
Monat.** Der Betreiber wollte die Wichtelseite ausbauen; das wurde am
12.09. bewusst **nicht** getan (siehe 14.5).

### 14.3 Auto-Apply hat 2025 schon einmal zugegriffen

Im Änderungsverlauf steht:

> **23.11.2025, 04:47:34 — „Recommendations Auto-Apply"**, Tool
> „Automatisch angewendete Empfehlungen", Kampagne
> Gotteslob-Max-Performance:
> *„Der Wert von gebotsstrategietyp in Kampagne hat sich von
> ‚Conversions maximieren' in ‚Conversion-Wert maximieren' geändert"*

**Der Vorfall vom 10.08.2026 (Abschnitt 9) war nicht der erste.** Neun
Monate zuvor hat derselbe Mechanismus nachts um 4:47 Uhr die
Gebotsstrategie der damals profitabelsten Kampagne umgestellt — mitten
in der Hochsaison. Die Abschaltung von Auto-Apply am 23.08.2026 war
damit noch besser begründet als angenommen: **Es handelt sich um ein
Muster, nicht um einen Ausrutscher.**

**Folge für die Bewertung:** Die 182 % ROAS aus Q4 2025 wurden **nicht**
unter einem Ziel-ROAS von 321 % erzielt. Die Kampagne lief bis zum
23.11.2025 auf „Conversions maximieren", danach auf „Conversion-Wert
maximieren" — beides ohne ROAS-Ziel. Das heutige Ziel von **321,155 %**
ist ein Artefakt dieser Geschichte (der krumme Wert spricht für sich)
und wurde **nie erprobt**; die Kampagne wurde pausiert, bevor sie
darunter lief.

### 14.4 Die Richtlinienbeschränkung — geprüft und für tragbar befunden

Die Kampagnenliste trug „Alle Asset-Gruppen sind durch Richtlinien
eingeschränkt". In der Asset-Gruppe „Gotteslobhüllen" steht der Grund
wörtlich:

> **Aktiv (eingeschränkt)** — 1 Richtlinienverstoß:
> *Religiöse Überzeugungen in personalisierten Anzeigen*

Also dieselbe Richtlinie, wegen der die Kommunion-Kampagne (F)
ausdrücklich **nicht** als PMax geplant ist. Entscheidend ist das Wort
**„Aktiv"**: Es beschränkt die personalisierte Ausrichtung, es sperrt
die Auslieferung nicht.

**Belege dafür, dass die Beschränkung tragbar ist:**

- Die Kampagne hat Q4 2025 **78.506 Impressionen** und 26 Käufe
  geliefert, im Gesamtjahr 375.418 Impressionen und 203 Käufe
- Die hinterlegte Zielgruppen-Persona ist auf den **31.01.2025**
  datiert, die Konfiguration also seit Anfang 2025 unverändert
- Der Änderungsverlauf 2026 enthält **keinen einzigen
  Gotteslob-Eintrag** — seit der Pausierung wurde nichts angefasst

**Als Schluss gekennzeichnet, nicht als Beleg:** Dass der Verstoß schon
während der Saison 2025 anlag, ist daraus erschlossen, nicht direkt
nachgewiesen. Ein Richtlinienereignis mit Datum habe ich nicht
gefunden.

### 14.5 Was am 12.09.2026 geändert wurde

Fünf Eingriffe an **Gotteslob-Max-Performance** (ID 22187193352), alle
nach Freigabe des Betreibers, alle einzeln gesetzt und **nach dem
Speichern durch Neuladen der Seite geprüft**.

| # | Einstellung | Von | Auf |
|---|---|---|---|
| 1 | Ziel-ROAS | 321,155 % | **180 %** |
| 2 | Asset-Optimierung „Textanpassung" | aktiviert | **deaktiviert** |
| 3 | Asset-Optimierung „Erweiterung der finalen URL" | aktiviert | **deaktiviert** |
| 4 | Geräte | inkl. TV-Bildschirme | **Computer, Mobiltelefone, Tablets** |
| 5 | Kampagnenstatus | Pausiert | **Aktiviert** |

Unverändert: Budget 8,00 €/Tag, Conversion-Zielvorhaben
„Kampagnenspezifisch: Käufe" (war bereits richtig gesetzt — **nicht**
das Problem, an dem D Wichtelwelt krankte), Standort Deutschland,
Sprache Deutsch, Merchant Center 5293575741 mit allen Produkten aus
allen Feeds. Die drei übrigen Asset-Optimierungen (Bildoptimierung,
Landingpage-Bilder, Video-Optimierung) bleiben aktiviert — sie
erzeugen keinen Text.

**Begründung für 180 % statt 321 %:** Der belegte Ist-Wert liegt bei
182 % (Q4) bzw. 224 % (Gesamtjahr). Ein Ziel oberhalb des je
Erreichten drosselt die Auslieferung — das ist exakt das Muster, das
D Wichtelwelt seit dem 02.09. auf 2 % Budgetabruf gedrückt hat
(Abschnitt 13.2). 180 % liegt 26 Punkte über Break-even und lässt
Volumen zu. **Die Rampe geht danach nach oben**, wie bei Filzprodukte
(400 → 450, heute 519–704 %); der Fehler wäre, zu hoch zu starten.

**Begründung für 2 und 3:** Beide verstoßen gegen die Rote Linie
„Einzelfreigabe je Text". Bei einem Produkt, das ohnehin an einer
Richtlinie zu religiösen Überzeugungen hängt, ist von Google selbst
erzeugter Anzeigentext ein doppeltes Risiko. **Nebenbefund:** Das
Abschalten der Textanpassung hat die Erweiterung der finalen URL
**automatisch mit deaktiviert** — Google weist im Dialog darauf hin,
dass letztere erstere voraussetzt. Ein Klick, zwei Einstellungen.

**Zum Startzeitpunkt:** Vorgeschlagen war der 20.–25.09., damit die
Lernphase vor der Nachfrage liegt. **Der Betreiber hat sich am
12.09.2026 für den sofortigen Start entschieden** („starte die
Gotteslobhüllenkampagne sofort"). Das ist vertretbar und
möglicherweise besser: Die Lernphase liegt damit vollständig vor dem
Oktober-Anstieg.

**Zur Wichtelseite wurde bewusst nichts getan** (Betreiber,
12.09.2026, nach Vorlage der Verlustzahlen aus 14.2): kein neues
Budget, keine neue Kampagne, die pausierte „Wichtel" bleibt pausiert.
D Wichtelwelt wird am **~16.09.** wie geplant beurteilt.

**Kontrolle nach dem Speichern:** Alle fünf Änderungen wurden nach
vollständigem Neuladen der Seite gegengeprüft und standen. Die Falle
mit den zwei Speichern-Knöpfen (Abschnitt 12.3) trat auch hier auf —
der Abschnitt „Asset-Optimierung" hat einen inneren *Save* im Dialog
„Optimierungseinstellungen verwalten" **und** einen äußeren
*Speichern* in der Einstellungszeile. **Beide sind nötig.**

### 14.6 Was jetzt zu erwarten ist

Die Kampagne trägt seit der Aktivierung den Status **„Aktiv
(eingeschränkt)"** — erwartungsgemäß, siehe 14.4. Die Summe der
Kampagnenbudgets steigt damit von 16,50 € auf **24,50 €/Tag**; bei
zuletzt 14 % Abruf ist das keine reale Ausgabenerhöhung in dieser
Höhe, aber die Ausgaben werden steigen.

**Zwei Dinge, die schiefgehen können und beim nächsten Kontrollblick
zu prüfen sind:**

1. **Die Kampagne liefert trotz 180 % nicht aus.** Dann ist die
   Richtlinienbeschränkung doch wirksamer als angenommen, und die
   Schlussfolgerung aus 14.4 war falsch
2. **Sie liefert aus, bleibt aber unter 154 %.** Dann kostet sie Geld,
   und das Ziel muss hoch statt runter — der umgekehrte Fall zu dem,
   was heute angenommen wurde

### 14.7 Termine

- **~17.–19.09.2026 — nächster Kontrollblick** (Takt 5–7 Tage). Dann
  zusätzlich: Liefert Gotteslob überhaupt aus? Die ersten Tage sind
  Lernphase, Zahlen also nur auf Auslieferung prüfen, nicht auf ROAS
- **~16.09.2026 — D Wichtelwelt beurteilen** und **Filzprodukte
  mitbeurteilen** (zusammengelegt, siehe 13.7)
- **~26.09.2026 — Gotteslob erstmals bewerten.** Zwei Wochen nach der
  Aktivierung, dann ist die Lernphase durch. Entscheidungsfrage:
  ROAS über oder unter 154 %? Bei deutlich darüber der erste
  Rampenschritt Richtung 220 %
- **~20.09.2026** — Markenprüfung „Taeradesign", danach
  Markenausschluss in der PMax. **Betrifft jetzt auch Gotteslob** —
  dort sind ebenfalls keine Markenlisten ausgeschlossen
- **September, ohne Tag — F Kommunion anlegen**, live ~01.10. Weiterhin
  ohne Datum und weiterhin der einzige Punkt mit hartem Außentermin
- **~12.10.2026** — Auto-Apply-Status (vorgezogen erledigt am 12.09.)

### 14.8 Offen und nicht erledigt

- **Die Marge ist nur für „etwa 65 %" pauschal bekannt.** Ob sie bei
  Gotteslobhüllen, Filzprodukten und Wichtelzubehör gleich ist, wurde
  nicht gefragt. Bei unterschiedlichen Spannen braucht jede Kampagne
  ihren eigenen Break-even. **Das ist die nächste Zahl, die fehlt**
- **Die Asset-Optimierung bei Filzprodukte steht weiterhin auf allen
  fünf.** Was heute bei Gotteslob getan wurde, ist dort seit Wochen
  eine Wiedervorlage ohne Auslöser (13.7). Nach dem Gotteslob-Start
  ist der Vergleich möglich: Läuft Gotteslob ohne Textanpassung
  sauber, entfällt das Hauptargument fürs Anlassen
- **„Gotteslobhülle-Shopping-Kampagne" (Suchnetzwerk, pausiert,
  2 €/Tag)** wurde nicht angefasst. Sie hat 2025 bei 75 Impressionen
  1,34 € gekostet und nichts verkauft. Vor einer Reaktivierung wäre zu
  klären, was sie neben der PMax überhaupt beitragen soll

## 15. Kontrollblick am 17.09.2026 — zwei Kampagnen auf demselben Sortiment

Fünf Tage nach dem letzten Kontrollblick (Abschnitt 13), also im Takt.
Konto 932-417-3105, angemeldet als `tk@taeradesign.de`. Zuerst nur
gelesen; die Änderungen in 15.5 erst nach Freigabe des Betreibers.

### 15.1 Die Zahlen

**Fenster 03.–15.09.2026**, abgelesen. Der 16. und 17.09. sind
ausgeschlossen (Fallstrick Abschnitt 11). ROAS selbst gerechnet,
Break-even 154 % (Abschnitt 14.1).

| Kampagne | Impr. | Umsatz | Kosten | Käufe | ROAS | gegen 154 % |
|---|---:|---:|---:|---:|---:|---|
| Gotteslob (aktiv erst ab 12.09.) | 5.390 | 98,46 € | 33,38 € | 2 | 295 % | darüber |
| Filzprodukte | 2.857 | 89,00 € | 21,38 € | 1 | 416 % | darüber, unter Ziel 450 % |
| D Wichtelwelt | 468 | 0,00 € | 0,93 € | 0 | 0 % | — |
| C Brand | 14 | 0,00 € | 0,93 € | 0 | — | — |
| **Konto** | 8.729 | 187,46 € | 56,61 € | 3 | 331 % | darüber |

**Gotteslob je Tag** (abgelesen, 16./17. unreif):

| | 12.09. | 13.09. | 14.09. | 15.09. | 16.09. | 17.09. |
|---|---:|---:|---:|---:|---:|---:|
| Impr. | 668 | 1.838 | 1.737 | 1.147 | 2.238 | 1.050 |
| Kosten | 3,80 € | 14,03 € | 7,53 € | 8,02 € | 8,16 € | 5,28 € |

**Filzprodukte, Volumen je Tag:** August 461 → 03.–10.09. 219 →
11.–15.09. **~222** *(gerechnet: Summe 03.–15. minus die abgeleitete
Zeile 03.–10. aus 13.1)*. Kein Kauf nach dem 06.09.

**D Wichtelwelt 11.–17.09.:** 231 Impressionen, 0,03 € Kosten.

### 15.2 Befund 1: Gotteslob liefert aus — und schöpft das Budget voll aus

Die Sorge aus 14.6 („liefert trotz 180 % nicht aus") ist erledigt. Die
Kampagne trägt seit dem Start den Status **„Durch das Budget
eingeschränkt"**. Der Satz „das Budget ist keine wirksame Stellschraube"
(Morgenblick, „Zahlen, die nicht mehr stimmen") gilt damit für Gotteslob
nicht mehr.

### 15.3 Befund 2: Gotteslob war eine zweite Filzplatten-Kampagne

Produkttypen in Gotteslob, 11.–17.09.2026:

| Produkttyp | Impr. | Kosten | Anteil | Käufe | Umsatz |
|---|---:|---:|---:|---:|---:|
| Kunst- & Bastelmaterialien (Filzplatten) | 3.173 | 25,09 € | **53 %** | 0 | 0,00 € |
| `cpb_product` | 984 | 9,80 € | 21 % | 1 | 82,98 € |
| Wichtelzubehör | 1.491 | 4,89 € | 10 % | 1 | 15,48 € |
| Kein Produkttyp | 2.431 | 2,35 € | 5 % | 0 | 0,00 € |
| übrige | | ~4,9 € | 11 % | 0 | 0,00 € |
| **Gesamt** | 10.085 | 47,08 € | | 2 | 98,46 € |

- **Die Gotteslobhülle selbst bekam 8,42 € von 46,82 € — 18 %.** Ein Kauf,
  82,98 €
- **Der zweite Kauf (15,48 €) war Wichtelzubehör** (Türkranz). Die 295 %
  aus 15.1 beschreiben also nicht die Gotteslobhülle
- Die Ursache stand in den Produktgruppen: **Gotteslob und Filzprodukte
  bewarben beide „Alle Produkte", ungeteilt** — 692 Artikel, zwei
  PMax-Kampagnen, Ziel 180 % gegen 450 %. In jeder Auktion um dieselben
  Artikel stand Taeradesign gegen sich selbst. Nur Wichtelwelt und die
  pausierte „Wichtel" waren auf `wichtelzubehör` eingeschränkt
- **Die Feststellung in 14.5 „Merchant Center mit allen Produkten aus
  allen Feeds" war richtig abgelesen, aber nicht als Problem erkannt.**
  Das ist der Fehler vom 12.09.

**Nicht belegt, als Vermutung festgehalten:** Filzprodukte umfasst auch
`wichtelzubehör` und konkurriert damit ebenso mit D Wichtelwelt. Das
könnte einen Teil des Einbruchs um 90 % erklären (13.2). Nicht geändert,
siehe 15.5.

### 15.4 Befund 3: Das Personalisierungs-Plugin im Feed

Das Plugin („cpb", vermutlich Custom Product Builder) hinterlässt zwei
Spuren im Merchant-Center-Feed:

1. **`cpb_product` — die Parents.** 10 Artikel, alle „aus Filz, frei
   personalisierbares Unikat": Gotteslobhülle, Urkundenmappe, Zeugnismappe,
   Schlüsselanhänger, Rosenkranztasche, Heimtierausweishülle, Pillenetui,
   Equidenpasshülle, Brillenetui, Türanhänger. **Die Produkttypen
   „gotteslobhülle", „heimtierausweishülle", „urkundenmappe",
   „rosenkranzkette" existieren noch, enthalten aber 0 Produkte** — das
   Plugin hat den Produkttyp offenbar überschrieben. **Folge: Ein Filter
   auf Produkttyp „gotteslobhülle" ergibt eine leere Kampagne**
2. **`cpb_ordered` — Kopien aus Kundenbestellungen.** 8 Artikel mit
   Titelzusatz „– Personalisiertes Produkt", teils abweichendem Preis
   (Gotteslobhülle 36,99 € statt 28,99 €), drei davon „Nicht berechtigt"
   (einfarbiges Bild). Sie liefen **in Filzprodukte und Gotteslob**; in
   Wichtelwelt, Wichtel und „Shopping – Alle Produkte" nicht berechtigt.
   Kosten 11.–17.09.: 0,83 € (ein Klick)

> **Regel, Betreiber 17.09.2026: Produkte mit Produkttyp `cpb_ordered`
> werden nicht beworben — nur das Parent-Produkt.** Gilt für jede
> Produktgruppe jeder PMax- und Shopping-Kampagne, auch künftige.

**Im Feed gibt es genau eine Gotteslobhülle als Parent**
(`shopify_de_8665393430853_47098396213573`, 28,99 €). Die Kampagne mit
rund 1.500 € Ergebnis 2025 (14.2) hängt an einem einzigen Artikel.

### 15.5 Was am 17.09.2026 geändert wurde

Zwei Eingriffe, beide nur an den Produktgruppen (Eintragsgruppen), beide
nach Freigabe, **nach Neuladen gegengeprüft**.

**1. Gotteslob-Max-Performance**, Asset-Gruppe „Gotteslobhüllen":

| Produktgruppe | Vorher | Nachher |
|---|---|---|
| Alle Produkte | aktiv, ungeteilt | unterteilt nach Artikel-ID |
| → `shopify_de_8665393430853_47098396213573` (Gotteslobhülle) | — | **aktiv** |
| → Alles andere | — | **ausgeschlossen** |

Die Bestellkopie der Gotteslobhülle ist damit ebenfalls draußen.

**2. Filzprodukte**, Asset-Gruppe „Filzprodukte":

| Produktgruppe | Vorher | Nachher |
|---|---|---|
| Alle Produkte | aktiv, ungeteilt | unterteilt nach Produkttyp |
| → `cpb_ordered` | — | **ausgeschlossen** |
| → `cpb_product` | — | unterteilt nach Artikel-ID |
| → → Gotteslobhülle `…8665393430853…` | — | **ausgeschlossen** |
| → → Alles andere in `cpb_product` | — | aktiv |
| → Alles andere in „Alle Produkte" | — | aktiv |

**Falle, die jeder Unterteilung droht:** Beim Unterteilen setzt Google
die gewählten Werte auf *aktiv* und **„Alles andere" auf
*ausgeschlossen***. Für Gotteslob war das gewollt. Bei Filzprodukte
musste es zweimal umgedreht werden — dort standen jeweils für etwa eine
Minute alle übrigen Produkte auf ausgeschlossen. Wirkung vernachlässigbar,
aber der Änderungsverlauf trägt deshalb mehr Einträge als zwei.
**Nach jeder Unterteilung die Ausschluss-Symbole aller Zeilen prüfen.**

**Bewusst nicht geändert:**

- **Filzprodukte-Ziel bleibt 450 %.** Nach 13.7 wäre bei ausbleibender
  Erholung die Senkung auf 400 % angezeigt. Solange zwei Kampagnen auf
  dieselben Artikel boten, war die Wirkung nicht messbar; mit der heutigen
  Trennung wäre jede zusätzliche Änderung doppelt vermengt
- **`wichtelzubehör` bleibt in Filzprodukte.** Das ändert, was die
  Kampagne ist — eigene Entscheidung
- **Budget Gotteslob bleibt 8 €/Tag.** Mit nur einem Artikel ist offen,
  ob die Einschränkung durch das Budget bleibt

### 15.6 Was jetzt zu erwarten ist

1. **Gotteslob mit einem Artikel kann deutlich weniger ausliefern.** Das
   ist dann die ehrliche Zahl dessen, was die Gotteslobhülle allein trägt
2. **Filzprodukte sollte Volumen zurückgewinnen**, falls die
   Selbstkonkurrenz ein Teil des Rückgangs seit dem 12.09. war. Der
   Rückgang **davor** (13.3) erklärt sich dadurch nicht
3. **Die Artikel-ID ist brüchig.** Legt das Plugin die Gotteslobhülle neu
   an, ist Gotteslob still leer. Robuster wäre ein eigenes Label im Feed
   (15.7)

### 15.7 Termine und offene Punkte

- **~22.–24.09.2026 — nächster Kontrollblick.** Zusätzlich: Liefert
  Gotteslob mit einem Artikel aus? Hat Filzprodukte wieder Volumen?
- **~01.10.2026 (statt ~26.09.) — Gotteslob erstmals bewerten.**
  Seit dem 17.09. ist es faktisch eine neue Kampagne; eine Woche mit einem
  Kauf trägt keine Entscheidung. **Entschieden am 17.09.2026 (Betreiber)**
- **~20.09.2026 — Markenprüfung „Taeradesign"**, danach Markenausschluss
  bei Filzprodukte und Gotteslob. Unverändert
- **September, ohne Tag — F Kommunion anlegen**, live ~01.10.
  Unverändert ohne Datum
- **D Wichtelwelt (Termin ~16.09., heute abgearbeitet):** kostet
  praktisch nichts mehr (0,03 € in sieben Tagen), liefert aber auch nicht
  aus. Ursache nicht geklärt; Kandidaten sind die fehlende Kaufhistorie
  für „kampagnenspezifisch Käufe" und die Konkurrenz durch Filzprodukte
  (15.3). **Entschieden am 17.09.2026 (Betreiber): so lassen, Anfang
  November vor der Wichtelsaison neu entscheiden**
- **Shop, ohne Termin — Feed aufräumen:** (a) eigenes Label für die
  Gotteslobhülle (z. B. `custom_label_0 = gotteslob`) statt Artikel-ID;
  (b) klären, ob `cpb_ordered`-Kopien überhaupt in den Feed gehören;
  (c) ob das Plugin die Produkttypen überschreibt und ob sich das
  abstellen lässt
- **~12.10.2026 — Auto-Apply.** Unverändert
