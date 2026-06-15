# GitHub Austausch Dateien

## Welche Dateien geaendert wurden

- `src/app/layout.tsx`
  - Bereinigter Layout-Stand ohne fehlerhaften Import `@/components/SiteScripts`.
  - Alle Imports zeigen auf vorhandene Dateien unter `src/components/...`.
- `src/components/sections/ServicesSection.tsx`
  - Text beim Kinderhaarschnitt von `bis 12 Jahre` auf `bis 9 Jahre` geaendert.
- `tsconfig.json`
  - Alias geprueft: `@/*` zeigt auf `./src/*`, `@data/*` zeigt auf `./data/*`.

## Welche Dateien neu erstellt wurden

- Keine neuen technischen Projektdateien wurden erstellt.
- Dieser Ordner `GITHUB_AUSTAUSCH_DATEIEN` ist nur ein lokales Upload-Paket.

## Welche Dateien ich bei GitHub ersetzen muss

Bitte den Inhalt dieses Ordners bei GitHub an den gleichen Stellen ersetzen:

- `src/`
- `data/`
- `public/`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `next-env.d.ts`

Wichtig: Nicht `node_modules`, nicht `.next` und nicht `GITHUB_AUSTAUSCH_DATEIEN` selbst hochladen.

## Welche Dateien ich bei GitHub neu hinzufuegen muss

Falls sie in GitHub fehlen, neu hinzufuegen:

- alle Dateien aus `src/components/consent/`
- alle Dateien aus `src/components/layout/`
- alle Dateien aus `src/components/sections/`
- alle Dateien aus `src/components/ui/`
- alle Dateien aus `src/lib/`
- alle Dateien aus `data/theBarber/`

## Build-Status

- `npm run build` war erfolgreich.
- Zusaetzlich wurden alle lokalen Alias-Imports auf Existenz und exakte Gross-/Kleinschreibung geprueft.
