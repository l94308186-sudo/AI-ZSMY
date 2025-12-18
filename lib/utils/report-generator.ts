export function generateDailyReport(data: any) {
  return { generatedAt: new Date().toISOString(), summary: data }
}
