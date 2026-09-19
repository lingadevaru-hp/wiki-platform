// wiki-platform — public interface surface. Implementation is private.
// Module: edge request router (locale subdomains + static assets + headers).
//
// Request flow:
//   1. Resolve locale from subdomain (en/kn/hi/ja/ml/ta/te/gu, default en)
//   2. Serve static asset or render locale shell
//   3. Attach security + hreflang headers
//
// Bodies live in the private core; signatures below are the stable surface.

export {}; // request handler + locale map live in the private core
