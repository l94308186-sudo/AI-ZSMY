import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // placeholder middleware
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
