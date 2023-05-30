# Reproduction for Vitest issue

If a module's exports are a in a `dist` folder, Vitest is unable to mock those
exports.

In the package `bar`, both the `main.js` and `dist/main.js` are exported as
`writer` and `writer-dist` respectively.

In `foo`, both exports are consumed. The mock for `node:fs/promises` works as
expected for the `bar/writer` import, but not the `bar/writer-dist` import.

Test can be run with:

```sh
# All packages
pnpm test

# Single packages
pnpm --filter bar test
pnpm --filter foo test
```
