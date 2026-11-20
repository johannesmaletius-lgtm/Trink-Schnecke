# Trink-Schnecke

Trinkspiel-Brett als Schnecke: würfeln, im Uhrzeigersinn laufen und Runde für Runde nach innen bis ins Ziel.
Läuft als Web-App (PWA) im Browser, auch offline.

## Funktionen

- 35 Felder als Spirale (7×5 quer, 5×7 im Hochformat auf dem Handy)
- Bis zu 8 Spieler mit eigenen Figuren, Namen antippen zum Ändern
- Würfel, automatisches Laufen, Aufgabenkarte beim Landen
- Sonderfelder wirken automatisch: 5 Felder zurück, Leiter (28 → 13), Aussetzen, Nochmal würfeln, Ziel
- Spielstand bleibt im Browser gespeichert
- Felder mit „Vorschlag“ sind Platzhalter und können ersetzt werden (Liste `FIELDS` in `index.html`)

## Auf dem iPhone installieren

1. Die App über HTTPS bereitstellen, z. B. per **GitHub Pages**: Im Repository unter
   *Settings → Pages* als Quelle den Branch `main` und den Ordner `/ (root)` wählen. Die App liegt dann unter
   `https://johannesmaletius-lgtm.github.io/trink-schnecke/`.
2. Die Adresse in Safari öffnen.
3. Auf **Teilen** tippen → **Zum Home-Bildschirm** → **Hinzufügen**.

Nach Änderungen an den Dateien in `sw.js` die `VERSION` erhöhen, damit installierte Apps aktualisieren.
