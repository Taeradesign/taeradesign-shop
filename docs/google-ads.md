# Google Ads für den Shop — Grundlagen und Kampagnenplanung

Angelegt am 08.08.2026, nach der Startaufnahme in
[`ist-zustand.md`](ist-zustand.md). **Status: Grundlagen-Aufnahme läuft —
es ist keine Kampagne entworfen und nichts in einem Konto angelegt.**

---

## 1. Ausgangslage — und der Unterschied zur keiltronic-Linie

Taeradesign ist E-Commerce: Erfolg heißt Käufe im Warenkorb, nicht
Anfragen per E-Mail. Damit gilt hier das Gegenteil der keiltronic-Linie
(dort bewusst cookiefrei, kein Google-Tag): **Ohne funktionierende
Kauf-Conversion-Messung ist eine Shop-Kampagne blind** — Gebotsstrategien,
Skalierungsentscheidungen und die Frage „lohnt sich das Budget" hängen
daran. Der Shop bringt die Voraussetzungen bereits mit (siehe Befund),
aber der Zustand ist unverifiziert.

Ein Google-Ads-Tag existiert bereits im Shop — es gab also schon einmal
Ads-Aktivität oder zumindest eine Einrichtung. **Historie unbekannt,
offene Frage an das Konto.**

## 2. Technischer Befund vom 08.08.2026

Sichtung von außen (Browser, ohne Logins). Verifiziert ist nur, was
dabeisteht:

| Punkt | Befund |
|---|---|
| GA4 | Property `G-5J2W20R04R` im Shop konfiguriert |
| Google Ads | Conversion-Tag `AW-11371975038` im Shop konfiguriert |
| Einbauweg | Kein gtag.js im Seitendokument; genau **ein Shopify-Web-Pixel** installiert (`web-pixel-962888005`). Naheliegend: die Konfiguration stammt aus der „Google & YouTube"-App und feuert im Pixel-Sandbox-Kanal — **welche App der Pixel ist, steht nur im Shopify-Admin** |
| Consent | Shopify-eigener Consent-Banner (Customer Privacy API), Modus GDPR, Buttons Akzeptieren/Ablehnen/Präferenzen, erscheint mit leichter Verzögerung. Vor der Einwilligung sind `analytics` und `marketing` gesperrt |
| Verhalten vor Einwilligung | **Keinerlei Anfragen an Google-Tracking-Domains** (einzige Google-Anfrage: jQuery 1.12 von ajax.googleapis.com — Bibliothek, kein Tracking). Datenschutzseitig sauber; heißt zugleich: Gemessen wird nur, wer einwilligt |
| Verhalten nach Einwilligung | **Unverifiziert.** Prüfung braucht einen Akzeptieren-Klick im Prüf-Browser (Freigabe Betreiber) — dann: Laden gtag/Collect-Hits für `G-…` und `AW-…`? Und beim Testkauf ein `purchase`-Event? |
| Shopify-Eigenanalytik | Läuft (Trekkie/Monorail, First-Party) — die Shopify-Admin-Berichte (Bestseller, Umsätze) sind also unabhängig vom Google-Consent belastbar |
| Nebenbefunde | jQuery 1.12 (Stand 2016) im Theme/Konfigurator-Umfeld; Geodienst get.geojs.io (vermutlich Liefercountdown); Shop-Pay-Einbindung aktiv |

Einordnung: Ohne gtag vor der Einwilligung gibt es auch keinen
Consent-Mode-Ping im „denied"-Zustand — d. h. keine modellierten
Conversions; die Messung erfasst ausschließlich Einwilligende. Wie hoch
die Einwilligungsquote ist, weiß niemand ohne Blick in die Daten.

## 3. Prüfliste vor jeder neuen Kampagne

Reihenfolge ist Arbeitsreihenfolge; nichts davon ist erledigt:

1. **Konto `AW-11371975038`:** Wem gehört es (vermutlich unter
   tk@taeradesign.de — Annahme), Zustand, Kampagnenhistorie,
   Zahlungsprofil. Da das Konto offenbar Bestand ist, **kein
   Neukunden-Startangebot einplanen** (Annahme, im Konto prüfen).
2. **Kauf-Conversion:** Wo definiert (Google-&-YouTube-App, GA4-Import,
   manuell)? Status „aktiv/inaktiv", letzte erfasste Conversions, Wert-
   übergabe (Bestellwert), Zählweise.
3. **GA4 ↔ Ads verknüpft?** Und: Sammelt `G-5J2W20R04R` überhaupt Daten
   (Echtzeitbericht bei eigener Einwilligung)?
4. **Consent-Verifikation:** Accept-Pfad einmal durchmessen (Abschnitt 2,
   „unverifiziert").
5. **Merchant Center:** Existiert ein Konto? Produktfeed aus Shopify
   aktiv? Ohne Feed keine Shopping-Anzeigen — **für einen Produktshop
   üblicherweise der wichtigste Anzeigentyp** (Bild + Preis direkt im
   Suchergebnis).
6. **Shopify-Bestsellerdaten je Saison** aus dem Admin — sie ersetzen die
   Saison-Annahmen in `ist-zustand.md` §7 durch echte Kurven und steuern,
   welche Produktgruppen beworben werden.

## 4. Kampagnen-Grobgedanke (Skizze — alles Vorschlag, Entscheidung folgt nach Prüfliste)

- **Saisonfenster:** Einschulung läuft noch (Einschulungstermine je nach
  Bundesland August bis Mitte September; Amazon-Kaufsignal belegt aktive
  Nachfrage). Ab Oktober Wichtel-/Weihnachtsgeschäft; ab Januar
  Kommunion/Firmung mit dem Leitprodukt Gotteslobhülle. Eine neue
  Kampagne sollte auf das jeweils **kommende** Fenster zielen, nicht auf
  das auslaufende.
- **Werbebotschaft:** Die belegbare Differenzierung ist der
  **Konfigurator mit Live-Vorschau** („selbst gestalten, Ergebnis sofort
  sehen") plus Handarbeit/Made in Germany plus Bewertungssubstanz
  (Zahlen mit Stand angeben, nicht runden).
- **Wahrscheinliche Struktur** (nach Datenlage zu entscheiden):
  (a) **Shopping/Performance Max** auf den Produktfeed für generische
  Produktsuchen („gotteslobhülle", „wichteltür", „zeugnismappe filz"),
  (b) **Suchkampagne** für spitze Personalisierungs-Begriffe je
  Themenwelt („gotteslobhülle mit namen", „schultütenanhänger
  personalisiert", …), (c) **Brand-Schutz** auf „taeradesign" (günstig;
  fängt Suchende, die sonst über Amazon einsteigen und dort 5,50 €
  Versand zahlen).
- **Wirtschaftlichkeit:** Sichtbare Produktpreise reichen von 9,99 €
  (Schlüsselanhänger) bis ~30 € (Hüllen/Mappen). Ohne Margen-,
  Warenkorb- und Conversion-Daten gibt es hier **keine Budget- oder
  CPC-Empfehlung** — die Zahlen kommen aus Shopify und dem Ads-Konto
  (Prüfliste 1–6), nicht aus Schätzungen.

## 5. Rote Linien (Startfassung — Betreiber ergänzt oder streicht)

1. **Budget, Aktivierung und jede Zahlungsfrage entscheidet der
   Betreiber.** Claude legt nichts scharf.
2. **Keine erfundenen Zahlen** — nicht in dieser Doku, nicht in Anzeigen.
   Bewertungszahlen nur mit Stand („4,8 aus 584, Stand 08/2026").
3. **Keine Kundendaten in Repo oder Werkzeugen.** Erweiterte Conversions
   (Übermittlung gehashter Kundendaten an Google) nur nach ausdrücklicher
   eigener Entscheidung — Standard: aus.
4. **Browser-Zugriffe durch Claude nur lesend nach Freigabe** (Muster
   keiltronic): Datenabfrage ja; Signups, Zahlungsdaten,
   Einstellungsänderungen macht der Betreiber.

## 6. Offene Startentscheidungen

1. **Zugangsweg Ads-Konto und Shopify-Admin** für die Prüfliste —
   Chrome-Profil tk@taeradesign.de per Claude-in-Chrome (nur
   Datenabfrage) oder gemeinsame Sichtung.
2. **Freigabe Accept-Klick** im Prüf-Browser für die
   Consent-Verifikation (Prüfliste 4).
3. **Saisonziel der ersten Kampagne** (Restfenster Einschulung vs.
   Wichtel-Vorlauf vs. beides klein) — sinnvoll erst nach Prüfliste 6
   entscheidbar.
