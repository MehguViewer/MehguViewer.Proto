import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/docs/v1',
        permanent: false,
      },
      {
        source: '/docs',
        destination: '/en/docs/v1',
        permanent: false,
      },
      {
        source: '/:lang/docs',
        destination: '/:lang/docs/v1',
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
