import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// React Component တွေထဲမှာ သုံးဖို့အတွက်
export const createClient = () => createClientComponentClient()

// ရိုးရိုး Javascript ဖိုင်တွေမှာ သုံးချင်ရင် (Browser ဘက်မှာ)
export const supabaseClient = createClientComponentClient()
