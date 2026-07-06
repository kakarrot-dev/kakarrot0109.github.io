// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kakarrot.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
