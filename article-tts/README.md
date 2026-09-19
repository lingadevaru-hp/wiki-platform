# Article TTS

Pipeline notes for article text-to-speech (FOSS toolchain, no vendor lock-in).

- **Input:** article slug + locale
- **Output:** audio asset served alongside the article (`/assets/*.mp3`-style path)
- **Voices:** per-locale open voice models; exact model pins live in the private core.

Player behavior (resume progress, speed control, locale voice pick) is
documented in the shipping notes under `releases/`.
