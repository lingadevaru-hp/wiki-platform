# Architecture

Single codebase, single edge worker, many locale subdomains.

- `lingadevaru.in` (en) + `kn.` / `hi.` / `ja.` / `ml.` / `ta.` / `te.` / `gu.`
  subdomains serve the same build; only the locale dictionary differs.
- Locale dictionaries: one JSON per language, English fallback for missing keys.
- Bot/crawler policy: only major search engines allowed; AI scrapers blocked.
- Media: FOSS-encoded video loops + per-article audio, served as static assets.

See `releases/` for how this evolved shipment by shipment.
