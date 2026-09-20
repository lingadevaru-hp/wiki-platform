# Repository structure

What lives where in this proxy repository
([README](./README.md)).

| Path | What lives here |
|------|-----------------|
| `src/worker.ts` | Edge request router (locale resolve → static serve → headers) |
| `lib/` | Shared utilities (locale resolution, content loading, SEO helpers) |
| `article-tts/` | Article text-to-speech pipeline notes |
| `scripts/` | Ops scripts (usage documented per script) |
| `docs/` | Architecture, localization, features, and structure notes |
| `artifacts/thoshan-wiki/` | Web app component inventory |
| `releases/` | Per-release notes, one file per shipment |
| `releases/CHANGELOG.md` | Chronological record of every shipment |
| `.github/COLLABORATORS.md` | How to collaborate, translate, or sponsor |
| `.github/SECURITY.md` | Bot protection and reporting rules |

Implementation bodies live in the private core; this repo tracks the
public interface surface and the shipping history.
