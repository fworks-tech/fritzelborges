# Information architecture and routes

This document describes public routes, locale prefixes, and home-page anchors.

## Locales

| Prefix | Language | HTML `lang` |
|--------|----------|-------------|
| `/pt` | Portuguese (default) | `pt-BR` |
| `/en` | English | `en` |

| URL | Behavior |
|-----|----------|
| `/` | Redirects via `src/proxy.ts`: `Accept-Language`, then `NEXT_LOCALE` cookie, else `pt` |
| `/pt`, `/en` | Localized landing pages |
| `/pt/...`, `/en/...` | Same locale segment; unknown paths show the localized 404 |

## System routes

| URL | Description |
|-----|-------------|
| `/sitemap.xml` | Sitemap (`/en` and `/pt` entries) |
| `/robots.txt` | Crawling rules and sitemap link |

## Home page anchors

Anchor IDs are shared across locales (Portuguese slugs for stable deep links).

| ID | Section |
|----|--------|
| `#inicio` | Hero / introduction |
| `#sobre` | About / bio |
| `#habilidades` | Skills |
| `#experiencia` | Experience |
| `#projetos` | Projects |
| `#contato` | Contact / CTAs |

## Future (out of immediate scope)

- `/blog` or `/artigos` — editorial content (optional in related issues)
- Dedicated pages per project, if detailed public case studies are added

## Navigation

- **Desktop:** top bar links to each anchor.
- **Mobile:** expandable menu (hamburger) with the same destinations.
- **Language switcher:** `EN` / `PT` in the header; preserves path and hash.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` — Canonical site URL (e.g. `https://fritzelborges.com.br`). Used in metadata, sitemap, and `robots`. May be omitted in development; the fallback is the production domain in `src/lib/site.ts`.
