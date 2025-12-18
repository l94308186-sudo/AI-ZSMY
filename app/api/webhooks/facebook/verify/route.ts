import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  // Minimal verify endpoint for Facebook webhook (hub.challenge flow)
  const url = new URL(req.url)
  return NextResponse.json({ ok: true, url: url.searchParams.toString() })
}
