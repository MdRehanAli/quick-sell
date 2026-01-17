import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const isLoggedIn = request.cookies.get("auth")?.value == "true";

    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.redirect(new URL('/login', request.url))
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: '/dashboard/:path*',
}