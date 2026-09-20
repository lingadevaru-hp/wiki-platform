# Wiki Platform

### 📖 Proxy repository — public build journal & developer catalog

This is the **proxy repository** of the Wiki Platform — the project behind
[lingadevaru.in](https://lingadevaru.in). The complete implementation lives in
its **private core repository**; this proxy exists so the work can still be
followed openly:

- **Interface catalog** — every module listed with its responsibility, so the
  architecture stays reviewable without exposing implementation.
- **Shipping log** — each merge in the core lands here as a release note
  (`releases/`) and changelog entry, synced automatically.
- **Design notes** — architecture, localization, and component decisions
  in `docs/`.

## Eight separate websites, one monorepo

The platform is available in multiple languages on multiple websites. These
are **eight separate websites** — not one site with a language toggle. Each
subdomain is its own full website, built in its own language from the first
byte, and all eight are controlled by **one single repository, one source,
one deploy**: change once and it reflects everywhere.

| Language | Native | Website |
|----------|--------|---------|
| English | English | https://lingadevaru.in |
| Kannada | ಕನ್ನಡ | https://kn.lingadevaru.in |
| Hindi | हिन्दी | https://hi.lingadevaru.in |
| Japanese | 日本語 | https://ja.lingadevaru.in |
| Malayalam | മലയാളം | https://ml.lingadevaru.in |
| Tamil | தமிழ் | https://ta.lingadevaru.in |
| Telugu | తెలుగు | https://te.lingadevaru.in |
| Gujarati | ગુજરાતી | https://gu.lingadevaru.in |

## How the proxy stays in sync

All development happens in the private core repository. Every change pushed
there is deployed to all eight subdomains at once — and every commit message
is reflected here in this public proxy as a release note, for security and
openness without exposing source. What you see in
[releases](./releases/) and [CHANGELOG.md](./CHANGELOG.md) is the complete
public record: **commits, not code**.

## 🤝 Collaborate

Like this project or have a feature in mind? We'd love to hear from you —
write to [dev@lingadevaru.in](mailto:dev@lingadevaru.in). Tell us which of
the 8 language sites it's for and what you'd like to see: corrections,
translations, new languages, or new features. Useful, well-described
proposals may be granted access to the relevant source — just ask, and
include what you'd contribute and why.

Full rules, sponsorships, and response times live in
[COLLABORATORS.md](./COLLABORATORS.md).

## More

- [Platform features](./docs/FEATURES.md) — what the platform does
- [Collaborators](./COLLABORATORS.md) — collaborate, translate, sponsor
- [Security](./SECURITY.md) — bot protection and reporting rules
- [Layout](./docs/STRUCTURE.md) — what lives where in this repo
