Localized routes

This app uses next-intlayer with an `[locale]` segment to localize pages.

What changed
- Moved pages under `src/app/[locale]/`: `artists/`, `artists/alexis`, `artists/manu`, `contact/`, `gallery/`, `studio/`.
- Updated `Header` and in-app navigation to prefix links with the current locale.

How to link
- Inside client components, use `useParams()` to get `{ locale }` and build links like `/${locale}/gallery`.
- The helper `withLocale(path)` inside `Header` shows a safe pattern for `home` and subpaths.

Dev notes
- Middleware `src/middleware.ts` uses `next-intlayer` to route non-localized URLs to the default locale.
- Available locales are configured in `intlayer.config.ts`.