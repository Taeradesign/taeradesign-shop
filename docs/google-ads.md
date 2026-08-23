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
| **erste Tage** | Suchbegriffe von C prüfen — läuft sie wirklich nur auf Markensuchen? |
| **danach, offen** | **Asset-Optimierung bei Filzprodukte** entscheiden (Abschnitt 9.6) — erst nach der Rampe, sonst überlagern sich zwei Änderungen |
| **~Mitte Sept.** | Zeugnismappen pausieren (Saisonende) |

