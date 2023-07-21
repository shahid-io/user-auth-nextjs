import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL('/home', request.url))
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup' || path === '/' || path === '/verifyEmail'
    /** test console */
    // console.log(path);
    // console.log(isPublicPath);
    // console.log(request);
    /** test console */

    const token = request.cookies.get('token')?.value || ''
    /** public path and token is available */
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/", request.nextUrl))
    } if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/profile", request.nextUrl))
    }

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile/:path*',
        '/login',
        '/signup',
        '/verifyEmail'
    ],
}