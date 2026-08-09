# ÜBERGABE 09.08.2026 (Nachtstand) — Shop-Update LIVE, Feed-Pflege erledigt, Ads-Launch ab 19.08.

**Zweck:** Nahtloser Einstieg für ein neues Kontextfenster. Führend
bleiben [`CLAUDE.md`](CLAUDE.md) und `docs/`; diese Datei sagt, wo wir
**genau** stehen und was als Nächstes dran ist. Sie ersetzt alle
früheren Stände dieses Tages.

---

## Wo wir stehen (ein Absatz)

Taeradesign (Einzelunternehmen, Thomas + Daniela Keilbach) verkauft
handgefertigte bestickte Filzprodukte über den eigenen Shopify-Shop
(taeradesign.com), Amazon Handmade und Etsy. Ziel dieses Repos:
Shop-Update + bessere Google-Ads-Vermarktung (Betreiber-Messlatte:
Richtung ROAS 10 wie auf den Marktplätzen; Google stand bei ~2,5). Am
08.08.2026 wurde die Grundlage erhoben und der Kampagnenentwurf §8
beschlossen. Am 09.08. wurden **A, C, D, G** umgesetzt (drei Kampagnen
pausiert angelegt), spätabends veröffentlichte der Betreiber das
**Theme-Update auf Be Yours 9.2.0** — daraufhin lief der **komplette
Text-Durchgang** durch alle Theme-Texte und ging **live**. In der
Nachtsitzung folgte **E (Feed-Pflege)** und der erste Teil des
Admin-Blocks. **Vier Kampagnen warten pausiert; der Launch ist auf
nach dem Betriebsurlaub verschoben — Aktivierung ab 19.08.2026.**

---

## Umsetzungsstand A–G (Details: `docs/google-ads.md` §8)

| Schritt | Stand |
|---|---|
| **A** Ziel-ROAS-Umstellung | ✅ PMax „Filzprodukte" (ID 20676090469, **aktiv**, 10 €/Tag): von Ziel-CPA 29,57 € auf **Ziel-ROAS 400 %**. Rampe: nach zwei stabilen Wochen (~22.08. prüfen) → 450 %, dann → 500 %. Lief über den Betriebsurlaub bewusst weiter (Betreiber-Linie) |
| **B** Markenausschluss | ⏳ Marke „Taeradesign" war nicht in Googles Markenbibliothek; **Anfrage gesendet**, Prüfung 4–6 Wochen. **Wiedervorlage ~20.09.:** Markenliste fertigstellen und in der PMax als Markenausschluss setzen |
| **C** Brand-Suchkampagne | ✅ **„Brand Taeradesign" (ID 24118761062) PAUSIERT** — 1,50 €/Tag, Klicks maximieren mit CPC-Deckel 0,50 €, nur Google-Suche, DE/Deutsch, 5 Brand-Keywords, 1 RSA. **Vor Aktivierung: Asset-Optimierung in den Einstellungen kontrollieren** (Befund siehe Arbeitsregeln) |
| **D** Wichtelwelt-PMax | ✅ **„Wichtelwelt" (ID 24118847240) PAUSIERT** — 5 €/Tag, Ziel-ROAS 450 %, Eintragsgruppen-Filter Produkttyp „wichtelzubehör" (183 Produkte), finale URL `/collections/wichtelturen-und-zubehor`, 6 Titel + 2 lange Titel + 3 Textzeilen, 20 Merchant-Center-Produktbilder + 5 Konto-Logos, **Asset-Optimierung nachweislich deaktiviert**. **Vor Aktivierung: Sichtfreigabe der 20 Bilder durch Betreiber.** Ziel-ROAS auf 400 senken, falls < 10 Käufe nach zwei aktiven Wochen |
| **E** Feed-Pflege | ✅ **erledigt in der Nachtsitzung 09./10.08.** — siehe eigener Abschnitt unten |
| **F** Kommunion | 📅 **Anlage im September, live ~1. Oktober** (Betreiber: Gotteslob-Weihnachtsgeschäft beginnt im Oktober; deckt sich mit Q4-Daten, Gotteslobhülle-Landingpage +252 %). Struktur: Suchkampagne (WEGEN Richtlinie „Religiöse Überzeugungen in personalisierten Anzeigen" **NICHT** als PMax!) + Standard-Shopping-Test, Texte in §8 Stufe 2, Text-Lesung vor Anlage |
| **G** Zeugnismappen | ✅ **„Zeugnismappen" (ID 24113382444) PAUSIERT** — Suchkampagne, 3 €/Tag, Klicks maximieren mit CPC-Deckel 0,40 €, nur Google-Suche, DE/Deutsch, 7 Keywords + 9 Ausschlüsse, RSA auf `/collections/schule` (15 Produkte), AI Max aus. **Restfenster nach dem Urlaub: ~19.08. bis Mitte September.** Wiederverwendbar zu jedem Zeugnistermin (Halbjahr ~Ende Januar, Schuljahresende Juni/Juli) |

---

## Was in dieser Sitzung passierte

### 1. Theme-Update 9.2.0 + kompletter Text-Durchgang → LIVE

Der Betreiber veröffentlichte **Be Yours v9.2.0** (neue Live-Theme-ID
**204051939653**). Claude zog es per Shopify CLI ins Repo, arbeitete
den vollständigen Text-Durchgang ein und pushte nach Freigabe live —
danach im Browser verifiziert. Commits `4d21da8`, `825ec2d`, `5f182af`.

- Alle §6-Fundstellen der Startseite (Kacheln, Vorteilsleiste,
  Über-uns-Block) korrigiert
- **~40 weitere Funde** im Durchgang, darunter **zwei funktional
  kaputte mailto-Links** (`mailto:://…`), 3× „Setzte dich",
  „Europweit", „lieder", „echts Unikat", „Du sucht sein Geschenk?",
  „Vielfälltige", **4× englischer Platzhalter „Welcome to our store"**
  (Schlüsselanhänger-Landingpage), „Bestelleingangmit", veralteter
  Minijob-Betrag 520 €, Sie/Du-Mix, englisches Mobile-Dock
- Auf Betreiber-Ansage inhaltlich geändert: **Betriebsurlaub
  10.–18.08.2026** in der Announcement-Bar (Desktop und Mobil
  identisch; vorher falsche/verdrehte Daten), **FAQ-Auslandsversand
  gestrichen** („Nein, wir liefern ausschließlich innerhalb
  Deutschlands"), **FAQ-Versandart präzisiert** (Kleinteile Deutsche
  Post als Großbrief, größere Waren DHL-Paket mit Sendungsverfolgung),
  „europaweit" auf der Über-uns-Seite entfernt
- Entscheidungen über Tippfehler hinaus: „Kapo der Mitarbeiter"
  gestrichen (Begriff historisch belastet), Sie→Du vereinheitlicht,
  Minijob-Betrag ersatzlos raus statt geraten

**Backup-Lage:** `backup/2026-08-09/theme-live/` = 9.1.0 (Vorzustand),
**`backup/2026-08-09-v920/theme-live/` = 9.2.0 = exakter Live-Stand**
(nach dem Push von Shopify zurückgelesen). Das alte 9.1.0 existiert in
Shopify als unpublished Theme → **Sofort-Rollback vorhanden**, der
frühere „Theme duplizieren"-Punkt ist damit hinfällig.

### 2. E — Feed-Pflege (Nachtsitzung, Betreiber eingeloggt)

**28 aktive Produkte** der Schultüten-Anhänger-Familie tragen jetzt die
drei von Google bemängelten Attribute in den Kategorie-Metafeldern:
**Farbe** (je Titelbild bzw. Shopify-Vorschlag), **Altersgruppe
„Kinder"**, **Zielgeschlecht „Unisex"**. Jede Änderung einzeln
gespeichert und per Screenshot verifiziert.

**Kernbefund:** Bei **13 aktiven Produkten** (komplette „Einschulung
2025"-Serie, „Du bist 1. Klasse", eine Applikation) fehlte die
**Produktkategorie komplett** — ohne Kategorie existieren die
Kategorie-Metafelder gar nicht, diese Produkte konnten also nie
Attribute an Google melden. Überall **„Aufnäher & Patches in
Bekleidungsaccessoires"** gesetzt (wie die Geschwister-Produkte).
Nebenbei: CPB-Entwurfsprodukt „Runder Schultütenanhänger"
(unveröffentlicht) ebenfalls kategorisiert; ein Fehlklick auf einen
Kategorie-Vorschlag beim Muschel-Anhänger wurde sofort repariert.

**Nachprüfen in 2–3 Tagen:** Die App-Übersicht zeigte vor der Pflege
1.378 Produkte / 683 genehmigt / 695 „nicht genehmigt" — **andere
Zählung als die 691 / 99 % vom 08.08.**, vermutlich zählt die App den
Gesamtkatalog inkl. nicht gesendeter Artikel. Ob die
Schultüten-Warnungen nach dem Sync verschwinden, ist dort sichtbar.
Die 30×18-cm-Schultüten (Produkttyp „Schultüte") waren nicht Teil der
Warnung und blieben unangetastet.

### 3. Admin-Block, erster Teil

- **C-EDD-Liefercountdown ✅ an den Betriebsurlaub angepasst.** In
  „Settings → Holidays" fehlte der **10.08.**; die Liste enthielt nur
  11.–18.08. Ergänzt und gespeichert („Save successfully"). Live
  verifiziert: Die Produktseite verspricht jetzt Lieferung
  **21.–24. Aug.** statt vorher 20.–22. Aug. — der Urlaub ist also
  vollständig eingerechnet
- **Hauptmenü ✅ korrigiert und live:** „Zeugnis**s**mappen und Schule"
  → **„Zeugnismappen und Schule"**, englischer Menüpunkt **„Get in
  Touch" → „Kontakt"**. Beides im Frontend bestätigt. Der Menüpunkt
  **„About" wurde bewusst nicht angefasst** (stand nicht auf der
  Liste) — falls er auch eingedeutscht werden soll, ist das ein
  Einzeiler
- **Produkttext Gotteslobhülle ✅ erledigt und live** (Produkt-ID
  **8665393430853**): „Entwerfe **deine selbst gestaltete**
  Gotteslobhülle und erschaffe **ein echtes** Unikat!" — damit ist die
  **§6-Fundliste vollständig abgearbeitet**. Zwei weitere Fehler im
  selben Text mitkorrigiert: „Schritt**e**-für-Schritt-Konfigurator" →
  „Schritt-für-Schritt-…", „Und das **b**este daran" → „Und das
  **B**este daran". **Fallstrick fürs nächste Mal:** Die Admin-Suche
  nach „Gotteslobhülle" liefert ~50 CPB-Bestellkopien (Typ
  `cpb_ordered`, Entwurf/Archiviert) — das echte aktive Produkt am
  schnellsten über die Produkt-ID aus dem Frontend aufrufen

---

## Reihenfolge ab hier

1. **SEO-Metas — freigegeben, 2 von 9 gesetzt.** Befund, Texte und
   Praxis-Fallstricke in [`docs/seo-metas.md`](docs/seo-metas.md).
   **Erledigt:** die beiden Kampagnen-Zielseiten `/collections/schule`
   und `/collections/wichtelturen-und-zubehor`. **Offen:** vier
   weitere Kollektionen (Gotteslobhüllen, Material, Deko und Wohnen,
   Stickdateien) und drei Seiten (`/pages/wichtel` zurückhaltend,
   `/pages/gotteslobhulle` und `/pages/schlusselanhanger` nur
   Fehlerreparatur). **Betreiber-Entscheidung:** Bei den Wichteln ist
   die **Kollektion** die Suchhauptseite, die Landingpage nur Beiwerk
2. **Admin-Block, Rest** (Betreiber-Login nötig):
   - **Shop-Idee Wichtel-Sets/Bundles** (hebt kleine Warenkörbe)
   - Optional: Menüpunkt „About" eindeutschen (bewusst offen gelassen)
2. **Aktivierung C + D + G durch den Betreiber ab 19.08.** — vorher je
   Kampagne: bei **C und G** Asset-Optimierungs-Check in den
   Kampagneneinstellungen, bei **D** Sichtfreigabe der 20 Bilder
3. **Messplan** (§8): wöchentlich ROAS je Kampagne, Brand getrennt
   lesen; Shopify-Zahlen sind die Wahrheit
4. **Backlog** ([`docs/backlog.md`](docs/backlog.md)): Google Shopping
   (freie Einträge, Standard-Shopping vs. PMax, Feed-Qualität) ·
   Bewertungen (Etsy-Import auf die Website, Sterne zu Google via
   Judge.me / Kundenrezensionen / Unternehmensprofil)

## Wiedervorlagen

| Wann | Was |
|---|---|
| **19.08.2026** | **Urlaubs-Announcement deaktivieren** (Block `announcement_w9EWTe` in `backup/2026-08-09-v920/theme-live/sections/header-group.json` — Repo-Edit + `theme push`, oder im Theme-Editor) · **C-EDD-Holidays 10.–18.08. entfernen** · **Kampagnen C/D/G aktivieren** |
| ~22.08.2026 | tROAS-Rampe Filzprodukte 400 → 450 % (nach zwei stabilen Wochen) |
| ~12.08.2026 | Merchant-Center-Status prüfen: sind die Schultüten-Warnungen nach dem Feed-Sync weg? |
| ~20.09.2026 | Marke „Taeradesign": Googles Markenprüfung, dann Markenausschluss in der PMax (B) |
| September | F Kommunion anlegen, live ~1. Oktober |
| ~Mitte Sept. | Zeugnismappen pausieren (Saisonende), reaktivieren ~Ende Januar |
| nach 2 aktiven Wochen D | Wichtelwelt-tROAS-Check (auf 400 senken, falls < 10 Käufe) |

---

## Arbeitsregeln (gelten unverändert) + Praxisbefunde

- **Einzelfreigabe je Kontoänderung; alles wird pausiert angelegt;
  AKTIVIEREN tut ausschließlich der Betreiber.** Bewährtes Muster:
  Freigabepaket mit konkreten Werten im Chat → Anlage → sofort
  pausieren
- **Google-Identitätsprüfungen bestätigt immer der Betreiber selbst**
- **Claude-Code-Berechtigungsklassifikator:** blockierte die Eingabe
  des Ziel-ROAS-**Gebotswerts** (Betreiber tippte die 450 selbst);
  Budgetwerte und CPC-Deckel gingen durch
- **UI-Tücke der Ads-Textfelder:** Beim schnellen Feldwechsel landen
  Texte im vorherigen Feld. Gegenmittel: Feld einzeln anklicken,
  tippen, per Screenshot verifizieren, erst dann weiter
- **AI-Max-Zusammenfassungs-Widerspruch (C und G):** Bei SUCHkampagnen
  zeigt die Überprüfen-Zusammenfassung „Asset-Optimierung … aktiviert",
  obwohl alle Schalter aus sind. Bei der PMax (D) stand korrekt
  „Deaktiviert". **Vor Aktivierung von C und G kontrollieren**
- **Googles Empfehlungen/Upsells abwehren** (rote Linie §7):
  Budgetvorschläge, „Conversions maximieren + Ziel-CPA",
  URL-Erweiterung, Keyword-Vorschläge, auto-generierte Assets,
  „English hinzufügen"
- **Shopify CLI:** In frischen Shells fehlt Node im PATH — mit vollen
  Pfaden arbeiten (`C:\Program Files\nodejs` + `%APPDATA%\npm`,
  `shopify.cmd`). Arbeitsweise **pull → edit → push** hat sich
  bewährt; Theme-JSONs vor dem Push mit `JSON.parse` prüfen
  (Shopify-Header-Kommentar vorher wegschneiden)
- **Shopify-Admin per Chrome, Praxisbefunde der Nachtsitzung:**
  Produkt-Metafelder erscheinen erst, wenn eine **Produktkategorie**
  gesetzt ist · Der Pfeil „nächstes Produkt" (oben rechts) ist der
  schnellste Weg durch eine Produktliste · Nach „Speichern" springt
  die Seite gelegentlich in eine **Kanal-Kontextansicht**
  (`?contextualState=VIEWING&channelId=…`) — dort sind die Felder
  ausgegraut; mit dem X neben der Kanalleiste schließen · Farbfelder
  sind Metaobjekt-Listen ohne Tippfilter: Liste scrollen, **nie**
  „Neuen Eintrag hinzufügen" (erzeugt Dubletten)
- **Chrome:** Claude-in-Chrome-Instanz kann als „Browser 1" statt
  „Taeradesign" erscheinen — vor Kontoarbeit verifizieren, dass
  tk@taeradesign.de angemeldet ist. Das keiltronic-Profil sieht das
  Taeradesign-Konto nicht
- Rote Linien: `docs/google-ads.md` §7 (keine erfundenen Zahlen, keine
  Kundendaten, erweiterte Conversions bleiben aus, Budget entscheidet
  Betreiber)
- **Vault parallel nachziehen UND pushen** (Standing-Regel):
  `C:\development\keilbach-vault`, Taeradesign-Notizen unter
  `taeradesign/`, Remote `github.com/keilbach-thomas/vault` (privat)
- Betreiber entscheidet per **nummerierten Optionen im Fließtext**
  („1", „A mit Rampe", …) — keine Auswahlmenüs

---

## Schlüsseldaten

- **Ads-Konto 932-417-3105** unter tk@taeradesign.de · Merchant Center
  **5293575741** · GA4 `G-5J2W20R04R` · Tags `AW-11371975038`,
  `GT-5TQF8HZ` — Einbau via Shopify-App „Google & YouTube", Consent
  Mode aktiv, Kauf-Conversion „Google Shopping App Purchase" primär
- Kampagnen: **Filzprodukte 20676090469** (aktiv, 10 €/Tag,
  tROAS 400 %) · **Brand Taeradesign 24118761062** (pausiert,
  1,50 €/Tag) · **Wichtelwelt 24118847240** (pausiert, 5 €/Tag,
  tROAS 450 %) · **Zeugnismappen 24113382444** (pausiert, 3 €/Tag,
  CPC-Deckel 0,40 €) · Gotteslob-Max-Performance 22187193352
  (pausiert, Religions-Richtlinie) · 6 weitere pausierte
  Alt-Kampagnen als Vorlage
- Shopify: Admin `admin.shopify.com/store/1a8137` — **Login macht der
  Betreiber** (Claude gibt nie Zugangsdaten ein). Live-Theme
  **„Be Yours v9.2.0", ID 204051939653**; 9.1.0 (200817836357)
  unpublished als Rollback
- **Kuriosum Seiten-Handles** (nur bei Gelegenheit aufräumen, bricht
  Links → Redirects nötig): `/pages/faq` = „Zahlen und Fakten",
  `/pages/uber-uns` = FAQ, `/pages/uber-uns-1` = Über uns
- Shop-Kollektionen für Ads: Wichtel →
  `/collections/wichtelturen-und-zubehor` (192 Produkte) · Schule →
  `/collections/schule` (12 Zeugnismappen à 31,99 € + 3 Schultüten)
- Versand: nur Deutschland. Deutsche Post Großbrief 2,90 €
  (Kleinprodukte) · DHL Standardversand 5,50 € (größere Waren)
- Wirtschaftlichkeit: Gotteslobhülle 3 € Material + 25 min Arbeit;
  Kapazität 420 Hüllen/Woche (kein Engpass); Saisonzahlen
  `ist-zustand.md` §7 (Kommunion-Halbzeit ≈ 2/3 des ~33-T€-Shop-Jahres)
- GitHub `Taeradesign/taeradesign-shop` (privat): Push aus der
  Claude-Sitzung funktioniert
