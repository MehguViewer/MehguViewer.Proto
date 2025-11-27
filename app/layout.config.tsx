import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
        <div className="flex items-center gap-2">
            <Image 
                src="/logo-light.png" 
                alt="MehguViewer" 
                width={30} 
                height={30} 
            />
            <span className="font-semibold">MehguViewer.Proto</span>
        </div>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  i18n: true,
  githubUrl: 'https://github.com/MehguViewer',
  themeSwitch: {
    enabled: false,
  },
};
