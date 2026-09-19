# Wiki Platform

Multilingual knowledge hub serving `lingadevaru.in` — English plus
Kannada, Hindi, Japanese, Malayalam, Tamil, Telugu and Gujarati on
dedicated subdomains, from a single codebase and edge worker.

- **Live:** https://lingadevaru.in
- **Status:** actively developed — see [CHANGELOG.md](./CHANGELOG.md) and
  [`releases/`](./releases/) for what shipped recently.

## Layout

| Path | What lives here |
|------|-----------------|
| `src/worker.ts` | Edge request router (locale resolve → static serve → headers) |
| `lib/` | Shared utilities (locale resolution, content loading, SEO helpers) |
| `article-tts/` | Article text-to-speech pipeline notes |
| `scripts/` | Ops scripts (usage documented per script) |
| `docs/` | Architecture and localization notes |
| `artifacts/thoshan-wiki/` | Web app component inventory |
| `releases/` | Per-release notes, one file per shipment |
| `CHANGELOG.md` | Chronological record of every shipment |

Implementation bodies live in the private core; this repo tracks the
public interface surface and the shipping history.
