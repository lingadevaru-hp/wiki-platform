# Deploys

Deploy notes for the Wiki Platform ([README](../README.md)).

- **Single deploy, eight sites** — one build fans out to every language
  subdomain; a change ships everywhere at once.
- **Static-first** — articles, media, and dictionaries served as static
  assets from the edge with security and hreflang headers.
- **History** — each deploy is recorded in
  [releases](../releases/) with its changelog entry.

Runnable deploy scripts live in the private core; usage is documented in
[scripts](../scripts/README.md).
