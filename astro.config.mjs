// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import react from '@astrojs/react';

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
  site: 'https://landing.pages.dev',
  integrations: [icon(), react()],
});