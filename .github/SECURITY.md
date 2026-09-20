# Security

Protection rules for the Wiki Platform's eight language sites
([README](./README.md)).

## Protected sites

All eight websites are bot-protected, identically:

- https://lingadevaru.in (English)
- https://kn.lingadevaru.in (Kannada · ಕನ್ನಡ)
- https://hi.lingadevaru.in (Hindi · हिन्दी)
- https://ja.lingadevaru.in (Japanese · 日本語)
- https://ml.lingadevaru.in (Malayalam · മലയാളം)
- https://ta.lingadevaru.in (Tamil · தமிழ்)
- https://te.lingadevaru.in (Telugu · తెలుగు)
- https://gu.lingadevaru.in (Gujarati · ગુજરાતી)

## Cloudflare edge protection

Every site sits behind Cloudflare edge protection combining an
interactive Turnstile challenge with user-agent gating on every request:

- **Allowed indexers only** — Google, Bing, DuckDuckGo, and Brave (plus
  Yahoo Slurp and Applebot). These may index the sites; nothing else may.
- **AI crawlers blocked** — GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot, ByteDance/BytesSpider, Applebot-Extended, Meta,
  Amazonbot, Baidu, Sogou, and SEO-scraper bots are refused at the edge on
  all eight sites. No AI — ChatGPT, Gemini, Claude, Perplexity, or any
  other — can crawl, harvest, or train on these websites.
- **Challenge expiry** — the Turnstile check expires after 30 seconds.
- **Local session cookie** — a successful check stores a
  `turnstile-verified` cookie in the visitor's own browser (HttpOnly,
  Secure, SameSite=Lax) valid for 24 hours; no tracking, no account.

## Reporting issues

- **Email:** [dev@lingadevaru.in](mailto:dev@lingadevaru.in) with the
  subject `Wiki Platform: security`.
- Describe what you found, where, and how to reproduce it.
- **Never include credentials, tokens, or private data** in a report —
  describe the class of issue instead.

## Scope

- The 8 public websites and this proxy repository.
- The private core repository is out of scope for external reports —
  only its public behavior (what the sites do) can be reported.
