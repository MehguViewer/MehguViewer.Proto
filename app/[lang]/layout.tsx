import '../globals.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { i18n } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider
            i18n={{
                locale: lang,
                locales: [
                    { name: 'English', locale: 'en' },
                    { name: '简体中文', locale: 'zh-CN' }
                ]
            }}
        >
            {children}
        </RootProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
