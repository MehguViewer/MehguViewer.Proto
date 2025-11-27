import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';
import { type NextRequest, type NextFetchEvent, NextResponse } from 'next/server';

const i18nMiddleware = createI18nMiddleware(i18n);

export function proxy(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/en', request.url));
  }
  return i18nMiddleware(request, event);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|thumbnail.png|logo-light.png|logo-dark.png).*)'],
};
