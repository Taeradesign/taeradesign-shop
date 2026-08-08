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

### Entscheidungsliste für den Betreiber

1. **Ziel-ROAS-Umstellung** der „Filzprodukte"-PMax: ja/nein; Startwert
   (Vorschlag 350 %)
2. **Stundensatz-Ansatz** für die Margenrechnung (die Tabelle oben
   rechnet die Folgen vor — welcher Lohn soll der Werbung als
   Untergrenze dienen?)
3. **Brand-Trennung:** Markenausschluss in der PMax + eigene
   Brand-Kampagne: ja/nein
4. **Wichtelwelt-Kampagne:** ja/nein; Start Mitte September oder
   1. Oktober; Tagesbudget (Vorschlag 5 €)
5. **Kommunion-Struktur:** Suchkampagne wie skizziert ja/nein;
   Shopping-Test ja/nein; Kapazitätsgrenze der Fertigung in der
   Spitze (Hüllen/Woche)
6. **Umsetzungsweg:** Betreiber selbst mit Anleitung / Claude per
   Chrome mit Einzelfreigaben (Anlage pausiert, Aktivierung Betreiber)

