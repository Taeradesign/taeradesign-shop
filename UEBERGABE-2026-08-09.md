# ÜBERGABE 09.08.2026 — Ads-Umsetzung A–D erledigt, G entschieden, E offen

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
08.08.2026 wurde die komplette Grundlage erhoben
(`docs/ist-zustand.md`, `docs/google-ads.md` §1–7) und der
Kampagnenentwurf §8 beschlossen — **alle sechs
Betreiber-Entscheidungen sind gefallen** (u. a. Stundenlohn-Untergrenze
37 €/h ⇒ Ziel-ROAS 500 %, Umsetzung durch Claude per Chrome mit
Einzelfreigaben). In der Nacht 08./09.08. wurde mit der Umsetzung
begonnen.

## Umsetzungsstand A–G (Details: `docs/google-ads.md` §8, Umsetzungsprotokoll)

| Schritt | Stand |
|---|---|
| **A** Ziel-ROAS-Umstellung | ✅ PMax „Filzprodukte" (ID 20676090469, aktiv, 10 €/Tag): von Ziel-CPA 29,57 € auf **Ziel-ROAS 400 %**. Rampe: nach zwei stabilen Wochen (~22.08. prüfen) → 450 %, dann → 500 %. Lernphase läuft — 1–2 Wochen Schwankung normal |
| **B** Markenausschluss | ⏳ Marke „Taeradesign" war nicht in Googles Markenbibliothek; **Anfrage gesendet** (Unternehmen, taeradesign.com, Zweitname „Taera Design"), Prüfung 4–6 Wochen. **Wiedervorlage ~20.09.:** Markenliste „Eigene Marke Taeradesign" fertigstellen und in der PMax als Markenausschluss setzen |
| **C** Brand-Suchkampagne | ✅ **„Brand Taeradesign" (ID 24118761062) PAUSIERT angelegt** — 1,50 €/Tag (benutzerdefiniert), Klicks maximieren mit CPC-Deckel 0,50 €, nur Google-Suche, DE/Deutsch, 5 Brand-Keywords, 1 RSA (6 freigegebene Titel + 2 Textzeilen), URL taeradesign.com. **Vor Aktivierung: Asset-Optimierung (Textanpassung/URL-Erweiterung) in den Einstellungen kontrollieren** — Zusammenfassung zeigte sie widersprüchlich „aktiviert", obwohl die AI-Max-Schalter im Assistenten aus waren |
| **D** Wichtelwelt-PMax | ✅ **„Wichtelwelt" (ID 24118847240) PAUSIERT angelegt 09.08.** — 5 €/Tag (benutzerdefiniert), Ziel-ROAS 450 %, Eintragsgruppen-Filter Produkttyp „wichtelzubehör" (183 Produkte), finale URL `/collections/wichtelturen-und-zubehor`, 6 Titel + 2 lange Titel + 3 Textzeilen (ohne Filz-/Konfigurator-Claims — Wichtelware ist Holz/Metall/Wolle), 20 MC-Produktbilder + 5 Logos, **Asset-Optimierung nachweislich deaktiviert** (C-Befund trat nicht auf). **Vor Aktivierung: Sichtfreigabe der 20 Bilder durch Betreiber.** Ziel-ROAS auf 400 senken, falls < 10 Käufe nach zwei aktiven Wochen |
| **E** Feed-Pflege | ⬜ Offen: Schultüten-Anhänger-Attribute (Farbe, Altersgruppe, Geschlecht) in der Shopify-App „Google & YouTube" nachtragen (Produkte stehen auf „aktiv (eingeschränkt)") |
| **F** Kommunion | 📅 **Anlage im September, live ~1. Oktober** (vorgezogen — Betreiber: Gotteslob-Weihnachtsgeschäft beginnt im Oktober; deckt sich mit Q4-Daten, Gotteslobhülle-Landingpage +252 %). Struktur: Suchkampagne (WEGEN Richtlinie „Religiöse Überzeugungen in personalisierten Anzeigen" NICHT als PMax!) + Standard-Shopping-Test, Texte in §8 Stufe 2, Text-Lesung vor Anlage |
| **G** Zeugnismappen | 🟡 **Entschieden 09.08. (Option A): Suchkampagne** „Zeugnismappen" nach Brand-Muster (Klicks maximieren + CPC-Deckel, nur Google-Suche, DE/Deutsch, pausiert) — wirkt ohne Lernphase, Restfenster Einschulung bis ~Mitte September, **macht das Shop-Update zeitkritisch**. Anlage nach Text-Lesung (Keywords + RSA); wiederverwendbar zu jedem Zeugnistermin (Halbjahr ~Ende Januar, Schuljahresende Juni/Juli). Details `docs/google-ads.md` §8 Plan-Zeile G |

## Reihenfolge ab hier

1. **G anlegen** (pausiert, nach Text-Lesung im Chat), dann **E**
2. **Shop-Backup** (entschieden 09.08.: CLI-Weg — Node.js + Shopify
   CLI sind installiert; es fehlen Betreiber-Login und `theme pull`
   ins Repo; zusätzlich Theme-Duplikat im Shopify-Admin), danach
   **Shop-Update** — Betreiber-Ansage: VOR jeder Aktivierung.
   Tippfehler-Fundliste `docs/ist-zustand.md` §6 (vorher kompletter
   Text-Durchgang aller Seiten), SEO (Meta-Titel/-Beschreibungen je
   Themenwelt), Shop-Idee Wichtel-Sets/Bundles (hebt kleine
   Warenkörbe). **Zeitkritisch wegen G** (Einschulungsfenster)
3. **Aktivierung C + D + G durch den Betreiber** (bei C vorher
   Asset-Optimierungs-Check in den Einstellungen; bei D Sichtfreigabe
   der 20 Bilder)
4. **Messplan** (§8): wöchentlich ROAS je Kampagne, Brand getrennt
   lesen; Shopify-Zahlen sind die Wahrheit
5. Wiedervorlagen: tROAS-Rampe ~22.08. · Marke ~20.09. · F-Anlage
   September · Wichtelwelt-tROAS-Check nach zwei aktiven Wochen

## Arbeitsregeln (gelten unverändert)

- **Einzelfreigabe je Kontoänderung; alles wird pausiert angelegt;
  AKTIVIEREN tut ausschließlich der Betreiber**
- **Google-Identitätsprüfungen („Identität bestätigen") bestätigt immer
  der Betreiber selbst** — Claude authentifiziert nie (kam beim
  C-Anlegen zweimal vor, genau so gelöst; wird bei D wieder kommen)
- **Chrome:** zwei Claude-in-Chrome-Instanzen verbunden; die richtige
  heißt **„Taeradesign"** (Browser-Auswahl nötig). Das andere Profil
  ist bei Google als tk@keiltronic.com angemeldet und **sieht das
  Taeradesign-Konto nicht**
- Rote Linien: `docs/google-ads.md` §7 (keine erfundenen Zahlen, keine
  Kundendaten, erweiterte Conversions bleiben aus, Googles
  Empfehlungen/Upsells abwehren, Budget entscheidet Betreiber)
- **Vault parallel nachziehen** (Standing-Regel):
  `C:\development\keilbach-vault`, Taeradesign-Notizen unter
  `taeradesign/`
- Betreiber entscheidet per **nummerierten Optionen im Fließtext**
  („1", „A mit Rampe", …) — keine Auswahlmenüs

## Schlüsseldaten

- **Ads-Konto 932-417-3105** unter tk@taeradesign.de · Merchant Center
  **5293575741** · GA4 `G-5J2W20R04R` · Tags `AW-11371975038`,
  `GT-5TQF8HZ` (+ Alias GT-PJRT43VC) — Einbau via Shopify-App
  „Google & YouTube", Consent Mode aktiv, Kauf-Conversion „Google
  Shopping App Purchase" primär
- Kampagnen: **Filzprodukte 20676090469** (aktiv) · **Brand
  Taeradesign 24118761062** (pausiert) · **Wichtelwelt 24118847240**
  (pausiert) · Gotteslob-Max-Performance 22187193352 (pausiert,
  Religions-Richtlinie) · 6 weitere pausierte Alt-Kampagnen als
  Vorlage
- Shopify-Admin: `admin.shopify.com/store/1a8137` — **Login macht der
  Betreiber** (Claude gibt nie Zugangsdaten ein; Sitzung kann
  abgelaufen sein)
- Wirtschaftlichkeit: Gotteslobhülle 3 € Material + 25 min Arbeit;
  Kapazität 420 Hüllen/Woche (kein Engpass); Saisonzahlen
  `ist-zustand.md` §7 (Kommunion-Halbzeit ≈ 2/3 des ~33-T€-Shop-Jahres)
- GitHub `Taeradesign/taeradesign-shop` (privat): Push aus der
  Claude-Sitzung funktioniert
- Vault-Remote **entschieden 09.08.2026:** privates Repo
  `github.com/keilbach-thomas/vault` unter dem neuen persönlichen
  GitHub-Konto (drittes Konto neben keiltronic und Taeradesign — passt
  zum übergreifenden Zuschnitt). Remote ist gesetzt; der **erste Push
  läuft mit Betreiber-Anmeldung** (`git -C /c/development/keilbach-vault
  push -u origin main`), danach pushen Claude-Sitzungen selbst.
  Standing-Regel ergänzt: Vault-Commits künftig auch **pushen**
