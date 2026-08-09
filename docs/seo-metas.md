# SEO-Metas: Befund und Textvorschläge

Erhoben am 09./10.08.2026 durch Abruf der Live-Seiten (Titel und
`meta[name=description]` aus dem gelieferten HTML).

## Status

**Betreiber-Freigabe erteilt („setzen") + Grundsatzentscheidung:
Bei den Wichteln ist die KOLLEKTION die Hauptseite für die Suche, die
Landingpage `/pages/wichtel` ist nur Beiwerk.** Der Vorschlag für die
Landingpage unten ist entsprechend zurückgenommen — sie soll der
Kollektion keine Suchbegriffe streitig machen.

| Seite | Stand |
|---|---|
| `/collections/schule` | ✅ **gesetzt und gespeichert** |
| `/collections/wichtelturen-und-zubehor` | ✅ **gesetzt und gespeichert** |
| `/collections/gotteslobhullen` | ⬜ offen |
| `/collections/material` | ⬜ offen |
| `/collections/deko-und-wohnen` | ⬜ offen |
| `/collections/stickdateien` | ⬜ offen |
| `/pages/wichtel` | ⬜ offen — **nur zurückhaltend**, siehe Entscheidung |
| `/pages/gotteslobhulle` | ⬜ offen (nur Fehler reparieren + kürzen) |
| `/pages/schlusselanhanger` | ⬜ offen (nur Fehler reparieren) |

**So geht es im Admin:** Kollektion öffnen → ganz nach unten →
„Suchmaschineneintrag" → Stift rechts → Felder „Seitentitel" und
„Meta-Beschreibung" → oben speichern.

**Zwei Fallstricke aus der Praxis (09./10.08.):**

1. **Das Layout verschiebt sich beim Nachladen um ~45 px.** Klickt man
   zu früh, geht der Klick ins Leere, der Fokus landet auf `body` —
   und die folgenden Tastenanschläge lösen **Shopify-Tastenkürzel**
   aus (es öffneten sich nacheinander „Seite hinzufügen" und „Neuer
   Kunde"; beide leer geschlossen, nichts angelegt). Gegenmittel: nach
   dem Aufklappen erst Screenshot, Position prüfen, dann klicken, und
   **den Fokusrahmen im Feld verifizieren, bevor getippt wird**.
2. `form_input` funktioniert hier **nicht** — Shopifys neue Felder sind
   Web Components (`S-INTERNAL-TEXT-FIELD`).

---

## 1. Befund

**Alle sechs geprüften Kollektionsseiten haben überhaupt keine
Meta-Beschreibung** und tragen den generischen Automatiktitel
„<Kollektionsname> – Taeradesign". Google baut sich den Vorschautext
dann selbst aus dem Seiteninhalt zusammen — bei Kollektionsseiten
meist eine Aneinanderreihung von Produktnamen.

| Seite | Titel heute | Meta-Beschreibung |
|---|---|---|
| `/collections/schule` | „Schule – Taeradesign" | **keine** |
| `/collections/wichtelturen-und-zubehor` | „Wichteltüren und Zubehör – Taeradesign" | **keine** |
| `/collections/gotteslobhullen` | „Gotteslobhüllen – Taeradesign" | **keine** |
| `/collections/material` | „Material – Taeradesign" | **keine** |
| `/collections/deko-und-wohnen` | „Deko und Wohnen – Taeradesign" | **keine** |
| `/collections/stickdateien` | „Stickdateien – Taeradesign" | **keine** |
| `/pages/gotteslobhulle` | gut | vorhanden, **aber ~300 Zeichen** (Google schneidet bei ~155) + zwei Fehler |
| `/pages/schlusselanhanger` | gut | vorhanden, ein Grammatikfehler |
| `/pages/wichtel` | „Wichtel – Taeradesign" | „… hast du es auch gehört? Da raschelt es in der Wand!" — stimmungsvoll, aber ohne jeden Suchbegriff |

**Warum das jetzt zählt:** `/collections/schule` ist die Zielseite der
pausierten **Zeugnismappen-Kampagne (G)**, `/collections/wichtelturen-und-zubehor`
die der **Wichtelwelt-PMax (D)**. Beide sollen ab 19.08. scharf gehen
und landen derzeit auf Seiten ohne jede Beschreibung. Für bezahlte
Klicks ist das kein Rankingfaktor, aber für die organische Sichtbarkeit
derselben Seiten — und für die Qualitätswahrnehmung — ist es einer.

**Zwei Textfehler in den bestehenden Beschreibungen:**

- „Entdecke die Vielfalt und große Auswahl **unterschiedlichen
  Varianten**" → muss „**der unterschiedlichen Varianten**" heißen
  (steht wortgleich auf `/pages/gotteslobhulle` **und**
  `/pages/schlusselanhanger`)
- „**Ausserdem**" → „**Außerdem**" (`/pages/gotteslobhulle`)

---

## 2. Vorschläge

Maßgabe: Meta-Titel ≤ ~50 Zeichen (Shopify hängt teils „– Taeradesign"
an), Beschreibung 130–155 Zeichen. Keine Zahlen außer belegten
(Produktzahlen aus der Shopify-Kollektionsübersicht vom 09.08.2026).

### `/collections/schule` — Zielseite Kampagne G

- **Titel:** Zeugnismappen & Schule aus Filz – personalisiert
- **Beschreibung:** Zeugnismappen, Urkundenmappen und
  Schultüten-Anhänger aus Filz – mit Namen bestickt und in Handarbeit
  gefertigt. Made in Germany, Lieferung in 2–3 Tagen.

### `/collections/wichtelturen-und-zubehor` — Zielseite Kampagne D

- **Titel:** Wichteltüren & Wichtelzubehör aus eigener Fertigung
- **Beschreibung:** Wichteltüren, Miniaturmöbel und Zubehör für die
  Wichtelwelt: über 200 liebevoll gefertigte Teile. Handarbeit aus
  Deutschland, schnell geliefert. *(203 Produkte laut Admin)*

### `/collections/gotteslobhullen`

- **Titel:** Gotteslobhüllen aus Filz – individuell bestickt
- **Beschreibung:** Gotteslobhüllen aus Filz, mit Namen und Motiv
  bestickt. Im Konfigurator mit Live-Vorschau selbst gestalten –
  handgefertigt in Deutschland.

### `/collections/material`

- **Titel:** Filzplatten, Filzbänder & Bastelzubehör
- **Beschreibung:** Filzplatten und Filzbänder in großer Farbauswahl,
  3 mm stark, 100 % Polyester und vegan. Dazu Klemmschließen und
  Zubehör – direkt vom Hersteller.

### `/collections/deko-und-wohnen`

- **Titel:** Filz-Deko für Zuhause – handgefertigt
- **Beschreibung:** Dekoration und Wohnaccessoires aus Filz, in
  eigener Produktion gefertigt. Made in Germany, mit Liebe zum Detail.

### `/collections/stickdateien`

- **Titel:** Stickdateien zum Sofort-Download
- **Beschreibung:** Stickdateien von Taeradesign als Download.
  Erprobte Motive aus der eigenen Produktion – direkt für deine
  Stickmaschine.

### `/pages/wichtel` — Landingpage Wichtelwelt

**Zurückgenommen.** Betreiber-Entscheidung vom 09./10.08.2026: Die
**Kollektion** `/collections/wichtelturen-und-zubehor` ist die
Hauptseite für die Suche, die Landingpage ist Beiwerk. Sie soll der
Kollektion daher keine Suchbegriffe abziehen.

- **Titel:** Die Wichtelwelt von Taeradesign
- **Beschreibung:** Wie bei uns die Wichtel einzogen – und was sie zum
  Wohnen brauchen. Die Geschichte hinter unserer Wichtelwelt.
- *Bewusst ohne „kaufen"-Begriffe. Der bisherige Satz („… hast du es
  auch gehört?") bleibt als Seitentext erhalten.*

### `/pages/gotteslobhulle` und `/pages/schlusselanhanger`

Nur reparieren, nicht neu schreiben:

- beide: „Vielfalt und große Auswahl **der** unterschiedlichen
  Varianten"
- Gotteslob: „Ausserdem" → „Außerdem", und die Beschreibung nach dem
  Satz „… und suche dir eine Verschlussart aus." enden lassen (danach
  schneidet Google ohnehin ab)

---

## 3. Offene Entscheidung

Sollen die **Themenwelt-Landingpages** (`/pages/…`) oder die
**Kollektionen** (`/collections/…`) das Hauptziel in der Suche sein?
Heute konkurrieren sie teils um dieselben Begriffe (Wichtel:
`/pages/wichtel` **und** `/collections/wichtelturen-und-zubehor`).
Sauber wäre: Landingpage = Einstieg mit Geschichte, Kollektion =
Sortimentsliste, und in den Metas jeweils unterschiedliche Schwerpunkte
setzen. Die Vorschläge oben sind bereits so gebaut, brauchen aber die
Bestätigung des Betreibers.
