# fritzelborges

Personal site — [fritzelborges.vercel.app](https://fritzelborges.vercel.app)

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

## Requirements

Node.js 20+ (recommended: version in `.nvmrc` — Node 22).

## Local development

```bash
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app redirects to a locale prefix (`/pt` or `/en`).

## Internationalization (i18n)

The site supports **English** (`en`) and **Portuguese** (`pt`).

| URL | Locale |
|-----|--------|
| `/` | Redirects using `Accept-Language`, then `NEXT_LOCALE` cookie, else `pt` |
| `/en` | English |
| `/pt` | Portuguese |

- **Dictionaries:** `src/i18n/dictionaries/en.ts` and `src/i18n/dictionaries/pt.ts` (typed via `src/i18n/types.ts`).
- **Loader:** `getDictionary(locale)` in `src/i18n/get-dictionary.ts`.
- **Routing:** `src/proxy.ts` adds the locale segment; pages live under `src/app/[locale]/`.
- **Language switcher:** header (`EN` / `PT` links preserve the current path).

To add or change copy, update both dictionary files and keep keys in sync with `Dictionary` in `src/i18n/types.ts`. Pass new sections from `src/app/[locale]/page.tsx` into components as props.

## Scripts

| Command | Description |
|--------|------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Server after build |
| `npm run lint` | ESLint |
| `npm run test` | Unit tests, then E2E (Playwright) |
| `npm run test:unit` | Vitest unit/component tests (single run) |
| `npm run test:unit:watch` | Vitest in watch mode |
| `npm run test:e2e` | Playwright E2E (headless; starts production server) |
| `npm run test:e2e:ui` | Playwright UI mode for debugging E2E |

## Testing

**Unit tests** use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react). Tests live next to source files (`*.test.ts`, `*.test.tsx`) and under `src/test/` for shared setup.

**E2E tests** use [Playwright](https://playwright.dev/) in `e2e/`. The config builds the app and serves it on `http://127.0.0.1:3000` before running specs. In local development, an existing server on that URL is reused unless `CI` is set.

```bash
npm run test:unit          # fast feedback
npm run test:e2e           # full browser flows (requires build)
npm run test               # both suites
npx playwright install     # first-time browser download (Chromium is enough for CI)
```

Locales are **`/pt`** (default) and **`/en`**, with the App Router proxy redirecting `/` to a locale. E2E covers home load, anchor navigation, the language switcher, mobile menu, 404, and locale-specific `lang` on `<html>`.

## Deployment

**Target:** [Vercel](https://vercel.com) (recommended for Next.js App Router).

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URL without trailing slash (e.g. `https://fritzelborges.vercel.app`) |

```bash
npm run build && npm run start   # self-hosted smoke test
```

**Checklist before go-live**

- Set `NEXT_PUBLIC_SITE_URL` in the hosting dashboard
- Confirm `/`, `/pt`, `/en`, `/sitemap.xml`, and `/robots.txt` on the production domain
- Run `npm run test` locally or rely on GitHub Actions CI (`.github/workflows/ci.yml`)

## Documentation

- Routes and anchors: [docs/ia.md](docs/ia.md)

<!-- fworks-readme-footer v1 -->

## Links

- Repository: https://github.com/fworks-tech/fritzelborges
- Portfolio: https://fworks.tech
<!-- /fworks-readme-footer v1 -->
