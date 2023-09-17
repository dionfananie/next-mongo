import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(req: NextRequest) {
    const authCookies = req.cookies.get('auth-login');
    if (!authCookies) {
        return NextResponse.rewrite(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/blog', '/detail']
};
