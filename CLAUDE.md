# Projektkontext für Claude Code

Diese Datei wird beim Start automatisch gelesen. Sie sagt, wozu dieses
Repository da ist — und wozu ausdrücklich nicht.

---

## 1. Wozu

**Der eigene Online-Shop von Taeradesign** — seine Aktualisierung und seine
Vermarktung über Google Ads.

Taeradesign ist das Zweitgeschäft neben der keiltronic GmbH: ein
Einzelunternehmen, als Familienbetrieb von Thomas und Daniela Keilbach
geführt, Label seit 2012, Sitz Osterburken. Handgefertigte, individuell
bestickte Filzprodukte, verkauft über drei Kanäle: den eigenen Shop
(Shopify, www.taeradesign.de → taeradesign.com), Amazon Handmade und Etsy.
Dieses Repo kümmert sich um den **eigenen Shop** — die beiden Marktplätze
kommen nur vor, soweit sie Shop- oder Werbeentscheidungen beeinflussen.

Angelegt am 08.08.2026. Anlass: Der Shop soll aktualisiert und eine neue
Google-Ads-Kampagne aufgesetzt werden.

**Einstieg:** [`docs/ist-zustand.md`](docs/ist-zustand.md) →
[`docs/google-ads.md`](docs/google-ads.md).

---

## 2. Was hier hingehört — und was nicht

**Gehört hierher**

- Der Ist-Zustand des Shops und seine Fortschreibung
- Shop-Änderungen: Texte, Struktur, Sortimentsdarstellung — samt Begründung
- Google-Ads-Planung und -Stände für den Shop
- Beobachtungen von Amazon und Etsy, soweit sie Shop- oder
  Ads-Entscheidungen tragen

**Gehört nicht hierher**

- Alles keiltronic — dafür gibt es die keiltronic-Repos
- Produktion, Material, Einkauf, Preiskalkulation der Fertigung
- Buchhaltung, Steuern, Verträge
- **Käufer- und Bestelldaten — niemals ins Repo, auch nicht in Beispielen**

---

## 3. Vertraulichkeit

Privat. Hier landen Umsatz- und Werbezahlen des Familienbetriebs.
Kundendaten (Namen, Adressen, Bestellinhalte) bleiben draußen; Zugangsdaten
(Shopify, Google, Amazon) bleiben in den jeweiligen Systemen und werden nie
im Repo oder im Chat abgelegt.

---

## 4. Wer hier arbeitet

Thomas Keilbach (Technik, Shop, Werbung) und Daniela Keilbach (Fertigung,
Produkte). Arbeitsweise wie in den keiltronic-Repos: direkte, sachliche
Rückmeldung erwünscht; Zahlen belegen oder als Annahme kennzeichnen;
Widerspruch ist Teil der Aufgabe.

---

## 5. Aufbau

| Ablage | Inhalt |
|---|---|
| [`docs/ist-zustand.md`](docs/ist-zustand.md) | Aufnahme des Shops und der Kanäle, Stand 08.08.2026 — Technik, Sortiment, Bewertungslage, Befunde. Wird bei Änderungen fortgeschrieben |
| [`docs/google-ads.md`](docs/google-ads.md) | Grundlagen und Kampagnenplanung für den Shop: Tracking-Befund, offene Kontofragen, Struktur-Entwurf |

---

## 6. Konventionen

- **Sprache Deutsch**, auch Commit-Nachrichten. Dort **ohne Umlaute**, mit
  Präfix `docs:`, `chore:`, `fix:`. Erste Zeile knapp, danach Leerzeile und
  Begründung
- **Textdateien in UTF-8 ohne BOM, Zeilenenden LF**
- **Keine erfundenen Zahlen.** Annahmen als Annahmen kennzeichnen —
  besonders bei Suchvolumina, Klickpreisen und Margen
- **Eine Frage, eine Datei.** Verworfenes bleibt mit Begründung stehen

---

## 7. Nachbarrepos

| Repo | Verhältnis |
|---|---|
| `keiltronic-kerngeschaeft`, `keiltronic-website`, `keiltronic-vorlagen` | Das Erstgeschäft. Strikt getrennt halten — die Ablageregel gilt in beide Richtungen. Die dortige Google-Ads-Erfahrung (Kampagne „keiltronic DE", seit 08.08.2026) ist als Arbeitsmuster nützlich, aber: anderes Konto, andere Zielgruppe, andere Tracking-Linie |
