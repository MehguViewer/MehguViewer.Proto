import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { i18n } from './lib/i18n';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkMermaid } from './lib/remark-mermaid';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
