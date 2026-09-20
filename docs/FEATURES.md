# Platform features

What the Wiki Platform does across its eight language sites
([README](./README.md)).

- **One monorepo, one edge worker, eight websites** — a single change ships
  to every language site at once.
- **Runtime locale resolution** — subdomain-to-dictionary mapping with
  English fallback, so no page ever renders blank.
- **Article text-to-speech** — per-locale voices with resume playback and
  speed control (FOSS toolchain, no vendor lock-in).
- **Command palette + bilingual language switcher** — navigation and
  language switching one keystroke away.
- **Theme system** — 22 themes in light and dark modes with a readable
  article prose spec.
- **FOSS media pipeline** — self-encoded video loops and per-article audio,
  served as static assets.
- **Bot protection** — only major search engines are allowed; AI crawlers
  and scrapers are blocked on all eight websites (see [Security](./SECURITY.md)).
