// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nsdlphotoresize.com',
  integrations: [
    sitemap({
      filter: (page) => !/^\/(?:404|500)(?:\.html)?\/?$/.test(new URL(page).pathname),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});