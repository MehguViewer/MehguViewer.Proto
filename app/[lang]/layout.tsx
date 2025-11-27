import '../globals.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { i18n } from '@/lib/i18n';
import { Metadata } from 'next';
import { dictionary } from '@/lib/dictionary';

const inter = Inter({
  subsets: ['latin'],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionary[lang as keyof typeof dictionary] || dictionary.en;

  return {
    metadataBase: new URL('https://proto.mehguviewer.kazeo.xyz'),
    title: {
      template: `%s | ${dict.metadata.title}`,
      default: dict.metadata.title,
    },
    description: dict.metadata.description,
    keywords: ['MehguViewer', 'Protocol', 'Federated Media', 'Documentation', 'API', 'Specs'],
    authors: [{ name: 'MehguViewer Team' }],
    creator: 'MehguViewer',
    publisher: 'MehguViewer',
    icons: {
      icon: '/logo-light.png',
      shortcut: '/logo-light.png',
      apple: '/logo-light.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `/${lang}`,
      siteName: 'MehguViewer.Proto',
      locale: lang === 'zh-CN' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/thumbnail.png',
          width: 1200,
          height: 630,
          alt: dict.landing.altThumbnail,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/thumbnail.png'],
      creator: '@MehguViewer',
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'zh-CN': '/zh-CN',
      },
    },
  };
}

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
            search={{
                enabled: true,
            }}
            theme={{
                enabled: true,
                defaultTheme: 'dark',
                forcedTheme: 'dark',
                attribute: 'class',
            }}
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
