# Workers

Cloudflare Workers edge surface for the Wiki Platform
([README](../README.md)).

- **Role:** single worker fronts all eight language sites — locale
  resolution, static serving, and security headers at the edge.
- **Routing:** hostname → locale dictionary → response, with English
  fallback for missing keys.
- **Surfaces:** request router (`src/worker.ts`), verification endpoint
  notes, header policy. Implementation lives in the private core.

See [routing](../routing/README.md) for the subdomain map and
[turnstile](../turnstile/README.md) for the bot gate.
