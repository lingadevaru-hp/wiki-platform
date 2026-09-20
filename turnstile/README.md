# Turnstile

Cloudflare Turnstile bot gate for the Wiki Platform
([README](../README.md)).

- **Check:** interactive challenge, expires after 30 seconds.
- **Session:** `turnstile-verified` cookie in the visitor's browser
  (HttpOnly, Secure, SameSite=Lax), valid 24 hours. No tracking, no account.
- **Scope:** enforced identically on all eight language sites, alongside
  edge user-agent gating (see [Security](../.github/SECURITY.md)).
