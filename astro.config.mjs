// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipecerinzasick.github.io',
  base: '/felipesick',
  trailingSlash: 'never',
  build: { format: 'file' },
});
