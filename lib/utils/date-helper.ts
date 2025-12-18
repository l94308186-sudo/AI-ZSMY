export function getMyanmarTime(): Date {
  const now = new Date();
  // UTC အချိန်ကို ယူပြီး 6 နာရီ 30 မိနစ် ပေါင်းမယ်
  const myanmarOffset = 6.5 * 60 * 60 * 1000; 
  return new Date(now.getTime() + myanmarOffset);
}

export function formatTime(date: Date): string {
  return date.toISOString().replace('T', ' ').substring(0, 19);
}