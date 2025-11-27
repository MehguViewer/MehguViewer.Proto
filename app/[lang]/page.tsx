import Link from 'next/link';
import Image from 'next/image';
import { dictionary } from '@/lib/dictionary';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
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
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <Image
          src="/thumbnail.png"
          alt={dict.landing.altThumbnail}
          width={300}
          height={300}
          className="mb-8 rounded-2xl"
          priority
        />
        <h1 className="text-4xl font-bold mb-6">{dict.landing.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {dict.landing.subtitle}
        </p>
        <Link 
          href={`/${lang}/docs`} 
          className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
        >
          {dict.landing.getStarted}
        </Link>
      </div>
    </HomeLayout>
  );
}
