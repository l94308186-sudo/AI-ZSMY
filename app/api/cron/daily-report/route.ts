import { NextResponse } from 'next/server'
import { generateDailyReport } from '../../../../lib/utils/report-generator'

export async function POST() {
  // placeholder: gather data, generate report
  const report = generateDailyReport({})
  return NextResponse.json({ ok: true, report })
}
