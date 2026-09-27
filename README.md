# Felipe Sick

Personal website built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

Use Node.js 22.12.0 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The production build is written to `dist/`.

## Deployment

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

The Astro site URL is configured in `astro.config.mjs`:

```js
site: 'https://felipesick.de'
```
