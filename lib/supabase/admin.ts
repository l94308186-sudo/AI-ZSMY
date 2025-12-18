import { createClient } from '@supabase/supabase-js'

// ဒီ Key က အရမ်းအရေးကြီးတယ်။ ဘယ်သူ့ကိုမှ မပေးရဘူး။
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Admin အနေနဲ့ Database ကို ဝင်မယ့်ကောင်
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
})
