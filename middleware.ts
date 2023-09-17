import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(req: NextRequest) {
    console.log('masuk');
    console.log(req.url);
    console.log('nextUrl', req.nextUrl);
    const authCookies = req.cookies.get('auth-login');
    if (!req.nextUrl.pathname.startsWith('/detail') && !authCookies) {
        return NextResponse.rewrite(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/']
};
