import { NextResponse } from 'next/server';
import { updateSubscription } from '@/lib/supabase/queries';

export async function POST(req: Request) {
  try {
    const { email, plan } = await req.json();

    // Plan ပေါ်မူတည်ပြီး ရက်ပေါင်းမယ်
    let days = 0;
    if (plan === 'free_trial') days = 7;
    if (plan === 'daily') days = 1;
    if (plan === 'monthly') days = 30;

    const { data, error } = await updateSubscription(email, plan, days);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
