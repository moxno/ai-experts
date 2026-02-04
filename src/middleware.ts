import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NextAuth from "next-auth"
import authConfig from "@/auth.config"

const { auth } = NextAuth(authConfig)

let locales = ['he', 'en'];
let defaultLocale = 'he';

export default auth((request) => {
    const { pathname } = request.nextUrl;
    const session = request.auth;

    // 1. Handle Locale Redirection
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
        request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }

    // 2. Handle Protection
    // Extract lang and subpath: /he/dashboard -> ["", "he", "dashboard"]
    const segments = pathname.split('/');
    const lang = segments[1];
    const subPath = segments[2];

    if ((subPath === 'dashboard' || subPath === 'admin') && !session) {
        const loginUrl = new URL(`/${lang}/login`, request.url);
        return NextResponse.redirect(loginUrl);
    }
});

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.db|.*\\.sqlite).*)',
    ],
};
