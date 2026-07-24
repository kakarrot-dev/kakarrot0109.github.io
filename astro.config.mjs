// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kakarrot.com',
  trailingSlash: 'always',
  outDir: 'docs',
  integrations: [sitemap()],
  redirects: {
    '/projects': '/vibe-coding/',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Mermaid 仅在文章包含图表时异步加载，按其实际懒加载边界设置告警阈值。
      chunkSizeWarningLimit: 700,
    },
  },
});
