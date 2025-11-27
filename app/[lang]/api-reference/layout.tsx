import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../../layout.config';
import { dictionary } from '@/lib/dictionary';
import type { ReactNode } from 'react';

export default async function ApiReferenceLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionary[lang as keyof typeof dictionary] || dictionary.en;

  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: dict.nav.documentation,
          url: `/${lang}/docs`,
          active: 'nested-url',
        },
        {
          text: dict.nav.coreApi,
          url: `/${lang}/api-reference/core`,
          active: 'nested-url',
        },
        {
          text: dict.nav.authApi,
          url: `/${lang}/api-reference/auth`,
          active: 'nested-url',
        }
      ]}
      searchToggle={{
        enabled: false
      }}
    >
      {children}
    </HomeLayout>
  );
}
