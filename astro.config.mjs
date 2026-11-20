// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const syntaxScopes = {
  punctuation: ['punctuation'],
  tag: ['entity.name.tag'],
  attribute: ['entity.other.attribute-name'],
  operator: ['keyword.operator'],
  brace: ['punctuation.section.block', 'punctuation.definition.block', 'punctuation.definition.template-expression'],
  key: ['support.type.property-name', 'meta.object-literal.key', 'meta.mapping.key'],
  number: ['constant.numeric'],
  string: ['string'],
  callable: ['entity.name.function', 'support.function', 'variable.function'],
  comment: ['comment', 'comment punctuation.definition.comment'],
};

/** @param {'light' | 'dark'} type */
function syntaxTheme(type) {
  return {
    name: `quiet-${type}`,
    type,
    colors: {
      'editor.foreground': `var(--syntax-${type}-default)`,
      'editor.background': 'var(--color-preview-bg)',
    },
    tokenColors: Object.entries(syntaxScopes).map(([role, scope]) => ({
      scope,
      settings: { foreground: `var(--syntax-${type}-${role})` },
    })),
  };
}

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
        light: syntaxTheme('light'),
        dark: syntaxTheme('dark'),
      },
      defaultColor: false,
      transformers: [{
        pre(node) {
          const filename = this.options.meta?.__raw?.match(/(?:^|\s)title="([^"]+)"/)?.[1];
          if (filename) node.properties.dataFilename = filename;
        },
      }],
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
