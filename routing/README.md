# Routing

Subdomain routing map for the Wiki Platform
([README](../README.md)).

One deploy serves eight independent websites. The edge worker resolves
the locale from the hostname; only the dictionary swaps:

| Host | Locale |
|------|--------|
| `lingadevaru.in` | English (default) |
| `kn.lingadevaru.in` | Kannada · ಕನ್ನಡ |
| `hi.lingadevaru.in` | Hindi · हिन्दी |
| `ja.lingadevaru.in` | Japanese · 日本語 |
| `ml.lingadevaru.in` | Malayalam · മലയാളം |
| `ta.lingadevaru.in` | Tamil · தமிழ் |
| `te.lingadevaru.in` | Telugu · తెలుగు |
| `gu.lingadevaru.in` | Gujarati · ગુજરાતી |

Locale switches open in a new tab; machine translation is opted out so
human-reviewed wording stays intact.
