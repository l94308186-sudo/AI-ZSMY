import { supabaseAdmin } from './admin'

// ၁။ ဆိုင်ရှင်ရဲ့ Subscription ကို စစ်ခြင်း
export async function checkSubscription(email: string) {
  const { data, error } = await supabaseAdmin
    .from('saas_owners')
    .select('*')
    .eq('email', email)
    .single()
  
  if (error) return null
  return data
}

// ၂။ Chat Log အသစ် မှတ်သားခြင်း
export async function logChatMessage(pageId: string, customerId: string, message: string, aiAnalysis: string) {
  const { error } = await supabaseAdmin
    .from('chat_logs')
    .insert({
      page_id: pageId,
      customer_id: customerId,
      message: message,
      ai_analysis: aiAnalysis,
      direction: 'inbound' // Customer ဆီက ဝင်လာတဲ့စာ
    })
    
  if (error) console.error("Error logging chat:", error)
}

// ၃။ ဝန်ဆောင်မှု သက်တမ်းတိုးခြင်း (Free Trial / Paid)
export async function updateSubscription(email: string, plan: string, days: number) {
  const expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + days)

  const { data, error } = await supabaseAdmin
    .from('saas_owners')
    .upsert({ 
        email: email, 
        subscription_plan: plan,
        subscription_expires_at: expiryDate.toISOString(),
        is_active: true
    })
    .select()

  return { data, error }
}
