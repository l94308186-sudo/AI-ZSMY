import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  // TODO: parse Facebook messages
  return NextResponse.json({ ok: true, received: body })
}
