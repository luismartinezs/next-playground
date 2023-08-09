import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export const config = {
  matcher: '/about/:path*',
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
}