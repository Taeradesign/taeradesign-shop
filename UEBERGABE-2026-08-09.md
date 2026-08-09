# ÜBERGABE 09.08.2026 — Ads-Umsetzung A–C erledigt, D/E offen

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

## Umsetzungsstand A–F (Details: `docs/google-ads.md` §8, Umsetzungsprotokoll)

| Schritt | Stand |
|---|---|
| **A** Ziel-ROAS-Umstellung | ✅ PMax „Filzprodukte" (ID 20676090469, aktiv, 10 €/Tag): von Ziel-CPA 29,57 € auf **Ziel-ROAS 400 %**. Rampe: nach zwei stabilen Wochen (~22.08. prüfen) → 450 %, dann → 500 %. Lernphase läuft — 1–2 Wochen Schwankung normal |
| **B** Markenausschluss | ⏳ Marke „Taeradesign" war nicht in Googles Markenbibliothek; **Anfrage gesendet** (Unternehmen, taeradesign.com, Zweitname „Taera Design"), Prüfung 4–6 Wochen. **Wiedervorlage ~20.09.:** Markenliste „Eigene Marke Taeradesign" fertigstellen und in der PMax als Markenausschluss setzen |
| **C** Brand-Suchkampagne | ✅ **„Brand Taeradesign" (ID 24118761062) PAUSIERT angelegt** — 1,50 €/Tag (benutzerdefiniert), Klicks maximieren mit CPC-Deckel 0,50 €, nur Google-Suche, DE/Deutsch, 5 Brand-Keywords, 1 RSA (6 freigegebene Titel + 2 Textzeilen), URL taeradesign.com. **Vor Aktivierung: Asset-Optimierung (Textanpassung/URL-Erweiterung) in den Einstellungen kontrollieren** — Zusammenfassung zeigte sie widersprüchlich „aktiviert", obwohl die AI-Max-Schalter im Assistenten aus waren |
| **D** Wichtelwelt-PMax | ⬜ **NÄCHSTER SCHRITT.** Pausiert anlegen: PMax „Wichtelwelt", Feed-Filter (Eintragsgruppen) auf die Wichtel-Kategorien, eigene Asset-Gruppe aus vorhandenen Wichtel-Bildern (Alt-Kampagne „Wichtel" + Shop; **Sichtfreigabe der Assets vor Aktivierung**), Ziel-ROAS 450 % (auf 400 senken, falls < 10 Käufe nach zwei aktiven Wochen), 5 €/Tag, DE/Deutsch, alle AI-Max-/Upsell-Haken aus |
| **E** Feed-Pflege | ⬜ Offen: Schultüten-Anhänger-Attribute (Farbe, Altersgruppe, Geschlecht) in der Shopify-App „Google & YouTube" nachtragen (Produkte stehen auf „aktiv (eingeschränkt)") |
| **F** Kommunion | 📅 **Anlage im September, live ~1. Oktober** (vorgezogen — Betreiber: Gotteslob-Weihnachtsgeschäft beginnt im Oktober; deckt sich mit Q4-Daten, Gotteslobhülle-Landingpage +252 %). Struktur: Suchkampagne (WEGEN Richtlinie „Religiöse Überzeugungen in personalisierten Anzeigen" NICHT als PMax!) + Standard-Shopping-Test, Texte in §8 Stufe 2, Text-Lesung vor Anlage |

## Reihenfolge ab hier

1. **D anlegen** (pausiert), dann **E**
2. **Shop-Update** — Betreiber-Ansage: VOR jeder Aktivierung.
   Tippfehler-Fundliste `docs/ist-zustand.md` §6 (vorher kompletter
   Text-Durchgang aller Seiten), SEO (Meta-Titel/-Beschreibungen je
   Themenwelt), Shop-Idee Wichtel-Sets/Bundles (hebt kleine Warenkörbe)
3. **Aktivierung C + D durch den Betreiber** (Sichtfreigabe; bei C
   vorher Asset-Optimierungs-Check)
4. **Messplan** (§8): wöchentlich ROAS je Kampagne, Brand getrennt
   lesen; Shopify-Zahlen sind die Wahrheit
5. Wiedervorlagen: tROAS-Rampe ~22.08. · Marke ~20.09. · F-Anlage
   September

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
  Taeradesign 24118761062** (pausiert) · Gotteslob-Max-Performance
  22187193352 (pausiert, Religions-Richtlinie) · 6 weitere pausierte
  Alt-Kampagnen als Vorlage
- Shopify-Admin: `admin.shopify.com/store/1a8137` — **Login macht der
  Betreiber** (Claude gibt nie Zugangsdaten ein; Sitzung kann
  abgelaufen sein)
- Wirtschaftlichkeit: Gotteslobhülle 3 € Material + 25 min Arbeit;
  Kapazität 420 Hüllen/Woche (kein Engpass); Saisonzahlen
  `ist-zustand.md` §7 (Kommunion-Halbzeit ≈ 2/3 des ~33-T€-Shop-Jahres)
- GitHub `Taeradesign/taeradesign-shop` (privat): Push aus der
  Claude-Sitzung funktioniert
- **OFFEN: `keilbach-vault` hat kein Remote** (nur lokale
  Git-Historie) — Betreiber entscheidet, unter welchem GitHub-Konto es
  gesichert wird; danach Remote setzen und pushen
