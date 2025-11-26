import { createMDX } from 'fumadocs-mdx/next';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: (defaultPlugins) => [rehypeKatex, ...defaultPlugins],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withMDX(nextConfig);
