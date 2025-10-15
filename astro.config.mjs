// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: import.meta.env.PROD ? {
      alias: {
        "react-dom/server": "react-dom/server.edge",
      },
    } : undefined,
    plugins: [
      tailwindcss(),
    ]
  },
  output: 'static',
  adapter: cloudflare(),
  site: 'https://landing.pages.dev',
  integrations: [icon(), react()],
});