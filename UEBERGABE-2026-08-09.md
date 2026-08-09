# ÜBERGABE 09.08.2026 (abends) — A–D + G erledigt, Theme-Backup gezogen; als Nächstes E + Shop-Update

**Zweck:** Nahtloser Einstieg für ein neues Kontextfenster. Führend
bleiben [`CLAUDE.md`](CLAUDE.md) und `docs/`; diese Datei sagt, wo wir
**genau** stehen und was als Nächstes dran ist.

---

## Wo wir stehen (ein Absatz)

Taeradesign (Einzelunternehmen, Thomas + Daniela Keilbach) verkauft
handgefertigte bestickte Filzprodukte über den eigenen Shopify-Shop
(taeradesign.com), Amazon Handmade und Etsy. Ziel dieses Repos:
Shop-Update + bessere Google-Ads-Vermarktung (Betreiber-Messlatte:
Richtung ROAS 10 wie auf den Marktplätzen; Google stand bei ~2,5). Am
08.08.2026 wurde die Grundlage erhoben und der Kampagnenentwurf §8
beschlossen; in der Nacht 08./09.08. begann die Umsetzung (A–C). Am
09.08. tagsüber kamen dazu: **D (Wichtelwelt-PMax) und G
(Zeugnismappen-Suchkampagne, neu aufgenommen und gleich umgesetzt)
pausiert angelegt, Live-Theme als Backup ins Repo gezogen.** Vier
Kampagnen warten jetzt pausiert auf das Shop-Update und die
Aktivierung durch den Betreiber.

## Umsetzungsstand A–G (Details: `docs/google-ads.md` §8, Umsetzungsprotokoll)

| Schritt | Stand |
|---|---|
| **A** Ziel-ROAS-Umstellung | ✅ PMax „Filzprodukte" (ID 20676090469, aktiv, 10 €/Tag): von Ziel-CPA 29,57 € auf **Ziel-ROAS 400 %**. Rampe: nach zwei stabilen Wochen (~22.08. prüfen) → 450 %, dann → 500 %. Lernphase läuft — 1–2 Wochen Schwankung normal |
| **B** Markenausschluss | ⏳ Marke „Taeradesign" war nicht in Googles Markenbibliothek; **Anfrage gesendet** (Unternehmen, taeradesign.com, Zweitname „Taera Design"), Prüfung 4–6 Wochen. **Wiedervorlage ~20.09.:** Markenliste „Eigene Marke Taeradesign" fertigstellen und in der PMax als Markenausschluss setzen |
| **C** Brand-Suchkampagne | ✅ **„Brand Taeradesign" (ID 24118761062) PAUSIERT angelegt** — 1,50 €/Tag (benutzerdefiniert), Klicks maximieren mit CPC-Deckel 0,50 €, nur Google-Suche, DE/Deutsch, 5 Brand-Keywords, 1 RSA (6 freigegebene Titel + 2 Textzeilen), URL taeradesign.com. **Vor Aktivierung: Asset-Optimierung in den Einstellungen kontrollieren** (Befund siehe G) |
| **D** Wichtelwelt-PMax | ✅ **„Wichtelwelt" (ID 24118847240) PAUSIERT angelegt 09.08.** — 5 €/Tag (benutzerdefiniert), Ziel-ROAS 450 %, Eintragsgruppen-Filter Produkttyp „wichtelzubehör" (183 Produkte, einziger Wichtel-Typ im Feed), finale URL `/collections/wichtelturen-und-zubehor`, 6 Titel + 2 lange Titel + 3 Textzeilen (ohne Filz-/Konfigurator-Claims — Wichtelware ist Holz/Metall/Wolle; ohne Lieferzeit-Zusage), 20 Merchant-Center-Produktbilder + 5 Konto-Logos, **Asset-Optimierung nachweislich deaktiviert** (Zusammenfassung: „Deaktiviert"). **Vor Aktivierung: Sichtfreigabe der 20 Bilder durch Betreiber.** Ziel-ROAS auf 400 senken, falls < 10 Käufe nach zwei aktiven Wochen |
| **E** Feed-Pflege | ⬜ **NÄCHSTER SCHRITT.** Schultüten-Anhänger-Attribute (Farbe, Altersgruppe, Geschlecht) in der Shopify-App „Google & YouTube" nachtragen (Produkte stehen auf „aktiv (eingeschränkt)"). Braucht die Shopify-Admin-Sitzung des Betreibers |
| **F** Kommunion | 📅 **Anlage im September, live ~1. Oktober** (vorgezogen — Betreiber: Gotteslob-Weihnachtsgeschäft beginnt im Oktober; deckt sich mit Q4-Daten, Gotteslobhülle-Landingpage +252 %). Struktur: Suchkampagne (WEGEN Richtlinie „Religiöse Überzeugungen in personalisierten Anzeigen" NICHT als PMax!) + Standard-Shopping-Test, Texte in §8 Stufe 2, Text-Lesung vor Anlage |
| **G** Zeugnismappen | ✅ **„Zeugnismappen" (ID 24113382444) PAUSIERT angelegt 09.08.** (Betreiber-Idee vom selben Tag: stark gesucht bis zur Einschulung) — Suchkampagne, 3 €/Tag (benutzerdefiniert), Klicks maximieren mit CPC-Deckel 0,40 €, nur Google-Suche, DE/Deutsch, 7 Keywords ("zeugnismappe", [zeugnismappe personalisiert], "zeugnismappe mit namen/filz/bestickt/einschulung", "zeugnisordner") + 9 Ausschlüsse (schnittmuster, selber nähen/machen, anleitung, kostenlos, gebraucht, amazon, ebay, etsy), RSA auf `/collections/schule` (15 Produkte — `/collections/zeugnismappe` hat nur 1), 7 Titel + 3 Textzeilen (Konfigurator-Claims vom Betreiber bestätigt), AI Max aus. **Restfenster Einschulung bis ~Mitte September → Shop-Update ist zeitkritisch.** Wiederverwendbar zu jedem Zeugnistermin (Halbjahr ~Ende Januar, Schuljahresende Juni/Juli) |

## Shop-Backup (erledigt 09.08.2026)

- **Live-Theme „Be Yours v9.1.0" (Shopify-Theme-ID 200817836357)**
  liegt komplett unter [`backup/2026-08-09/theme-live/`](backup/2026-08-09/README.md)
  — 375 Dateien inkl. `settings_data.json` und JSON-Templates,
  gezogen per `shopify theme pull --live`, committet und gepusht.
  Wiederherstellung per `theme push` (README im Ordner)
- Damit kann das Shop-Update, soweit es Theme-Texte betrifft, als
  **Git-Diff** laufen (pull → edit → push). **Achtung:** Produkt- und
  Kollektionsbeschreibungen, Seiten, Navigation und Rechtstexte
  liegen NICHT im Theme, sondern in Shopifys Datenbank (Admin/CSV)
- **Noch offen (Betreiber, ein Klick):** Live-Theme im Shopify-Admin
  **duplizieren** (Onlineshop → Themes → ⋯ → Duplizieren) als
  Sofort-Rollback in Shopify selbst
- Werkzeuge auf dem Arbeitsrechner installiert: Node.js LTS +
  Shopify CLI (global via npm)

## Reihenfolge ab hier

1. **E** (Feed-Pflege in der Shopify-App — Betreiber-Login nötig)
2. **Shop-Update** — Betreiber-Ansage: VOR jeder Aktivierung.
   Kompletter Text-Durchgang aller Seiten (Tippfehler-Fundliste
   `docs/ist-zustand.md` §6; beim Homepage-Besuch am 09.08. fielen im
   Vorbeigehen weitere Fehler in Slider-/About-Texten auf — „Filzprodukt",
   „von unser", „Materialen", „steck", „Produktkategorieren",
   „abgestimmtest", „aus den schönen Neckartal-Odenwald" — mit §6
   abgleichen), SEO (Meta-Titel/-Beschreibungen je Themenwelt),
   Shop-Idee Wichtel-Sets/Bundles (hebt kleine Warenkörbe).
   **Zeitkritisch wegen G** (Einschulungsfenster bis ~Mitte September)
3. **Aktivierung C + D + G durch den Betreiber** — vorher je Kampagne:
   bei **C und G** Asset-Optimierungs-Check in den
   Kampagneneinstellungen (Befund trat bei beiden auf, siehe
   Arbeitsregeln), bei **D** Sichtfreigabe der 20 Bilder
4. **Messplan** (§8): wöchentlich ROAS je Kampagne, Brand getrennt
   lesen; Shopify-Zahlen sind die Wahrheit
5. Wiedervorlagen: tROAS-Rampe Filzprodukte ~22.08. · Marke ~20.09. ·
   F-Anlage September · Wichtelwelt-tROAS-Check nach zwei aktiven
   Wochen · Zeugnismappen pausieren ~Mitte September (Saisonende),
   reaktivieren ~Ende Januar (Halbjahreszeugnisse)
6. **Backlog** (neu 09.08. abends, [`docs/backlog.md`](docs/backlog.md)):
   Google Shopping (freie Einträge, Standard-Shopping vs. PMax,
   Feed-Qualität) · Bewertungen (Etsy-Import auf die Website,
   Sterne zu Google via Judge.me/Kundenrezensionen/Unternehmensprofil)

## Arbeitsregeln (gelten unverändert) + Praxisbefunde vom 09.08.

- **Einzelfreigabe je Kontoänderung; alles wird pausiert angelegt;
  AKTIVIEREN tut ausschließlich der Betreiber.** Bewährtes Muster:
  Freigabepaket mit konkreten Werten im Chat → Anlage → sofort
  pausieren (D und G: jeweils 0 Impressionen zwischen Veröffentlichen
  und Pausieren)
- **Google-Identitätsprüfungen bestätigt immer der Betreiber selbst**
  (kam bei D einmal — beim Speichern der Kampagneneinstellungen;
  bei G keine)
- **Claude-Code-Berechtigungsklassifikator:** blockierte am 09.08.
  die Eingabe des Ziel-ROAS-**Gebotswerts** (Betreiber tippte die 450
  selbst); Budgetwerte (5/3 €) und CPC-Deckel (0,40 €) gingen durch.
  Einplanen: Gebotswert-Eingaben ggf. wieder an den Betreiber geben
- **UI-Tücke der Ads-Textfelder:** Beim schnellen Feldwechsel im
  Batch landen Texte im vorherigen Feld (passierte bei D-Titeln und
  G-Textzeilen). Gegenmittel: Feld einzeln anklicken, tippen, per
  Screenshot verifizieren, erst dann weiter
- **AI-Max-Zusammenfassungs-Widerspruch (Befund C, erneut bei G):**
  Bei SUCHkampagnen zeigt die Überprüfen-Zusammenfassung
  „Asset-Optimierung: Textanpassung und Erweiterung der finalen URL
  aktiviert", obwohl alle Schalter im Assistenten aus sind. Bei der
  PMax (D) stand korrekt „Deaktiviert". **Vor Aktivierung von C und G
  in den Kampagneneinstellungen kontrollieren, ggf. deaktivieren**
- **Googles Empfehlungen/Upsells abwehren** (rote Linie §7): am 09.08.
  verworfen u. a. Budgetvorschläge (13,51–20,27 € bei D, 4,10–6,16 €
  bei G), „Budget erhöhen"-Warnung, „Conversions maximieren +
  Ziel-CPA", URL-Erweiterung „+2,7 %", Keyword-Vorschläge „+4,4 %",
  Auto-generierte Titel/Textzeilen (bei D komplett gelöscht,
  KI-Generator bei G übersprungen), „English hinzufügen"
- **Shopify CLI:** In frischen Shells fehlt Node im PATH — mit vollen
  Pfaden arbeiten (`C:\Program Files\nodejs` + `%APPDATA%\npm`,
  `shopify.cmd`). Der Device-Auth-Code läuft nach wenigen Minuten ab
  — Betreiber muss die Browser-Bestätigung zeitnah machen (erster
  Versuch scheiterte mit „Token expired", zweiter klappte)
- **Chrome:** Claude-in-Chrome-Instanz kann als „Browser 1" statt
  „Taeradesign" erscheinen — vor Kontoarbeit verifizieren, dass
  tk@taeradesign.de angemeldet ist (myaccount.google.com). Das
  keiltronic-Profil sieht das Taeradesign-Konto nicht
- Rote Linien: `docs/google-ads.md` §7 (keine erfundenen Zahlen, keine
  Kundendaten, erweiterte Conversions bleiben aus, Budget entscheidet
  Betreiber)
- **Vault parallel nachziehen UND pushen** (Standing-Regel):
  `C:\development\keilbach-vault`, Taeradesign-Notizen unter
  `taeradesign/`, Remote `github.com/keilbach-thomas/vault` (privat)
  — Push aus der Claude-Sitzung funktioniert
- Betreiber entscheidet per **nummerierten Optionen im Fließtext**
  („1", „A mit Rampe", …) — keine Auswahlmenüs

## Schlüsseldaten

- **Ads-Konto 932-417-3105** unter tk@taeradesign.de · Merchant Center
  **5293575741** (691 Produkte, 99 % freigegeben) · GA4 `G-5J2W20R04R`
  · Tags `AW-11371975038`, `GT-5TQF8HZ` (+ Alias GT-PJRT43VC) —
  Einbau via Shopify-App „Google & YouTube", Consent Mode aktiv,
  Kauf-Conversion „Google Shopping App Purchase" primär
- Kampagnen: **Filzprodukte 20676090469** (aktiv, 10 €/Tag,
  tROAS 400 %) · **Brand Taeradesign 24118761062** (pausiert,
  1,50 €/Tag) · **Wichtelwelt 24118847240** (pausiert, 5 €/Tag,
  tROAS 450 %) · **Zeugnismappen 24113382444** (pausiert, 3 €/Tag,
  CPC-Deckel 0,40 €) · Gotteslob-Max-Performance 22187193352
  (pausiert, Religions-Richtlinie) · 6 weitere pausierte
  Alt-Kampagnen als Vorlage
- Shopify: Admin `admin.shopify.com/store/1a8137` — **Login macht der
  Betreiber** (Claude gibt nie Zugangsdaten ein). Live-Theme
  **„Be Yours v9.1.0", Theme-ID 200817836357**; Backup unter
  `backup/2026-08-09/theme-live/` (Stand 09.08.2026)
- Shop-Kollektionen für Ads: Wichtel →
  `/collections/wichtelturen-und-zubehor` (192 Produkte) · Schule →
  `/collections/schule` (12 Zeugnismappen à 31,99 € + 3 Schultüten)
- Wirtschaftlichkeit: Gotteslobhülle 3 € Material + 25 min Arbeit;
  Kapazität 420 Hüllen/Woche (kein Engpass); Saisonzahlen
  `ist-zustand.md` §7 (Kommunion-Halbzeit ≈ 2/3 des
  ~33-T€-Shop-Jahres); Zeugnismappen-Rechnung: bei 32-€-Warenkorb und
  CR 3–5 % liefert der 0,40-€-Deckel rechnerisch ROAS ~240–400 %
  (Annahmen — Suchvolumen nicht erhoben; Betreiber hat das
  Restfenster bewusst priorisiert)
- GitHub `Taeradesign/taeradesign-shop` (privat): Push aus der
  Claude-Sitzung funktioniert
