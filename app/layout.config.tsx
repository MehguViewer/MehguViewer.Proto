import { type HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import { i18n } from '@/lib/i18n';

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'MehguViewer.Proto',
  },
  i18n: true,
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Core API',
      url: '/api-reference/core',
      active: 'nested-url',
    },
    {
      text: 'Auth API',
      url: '/api-reference/auth',
      active: 'nested-url',
    },
  ],
};
