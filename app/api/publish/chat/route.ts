import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { message, platform } = await req.json();

    // ရိုးရှင်းတဲ့ AI Logic (နောက်ပိုင်းမှာ Gemini API နဲ့ ချိတ်မယ်)
    let reply = "";
    if (message.includes("ဈေး")) {
        reply = "ဟုတ်ကဲ့ခင်ဗျာ၊ ဒီပစ္စည်းလေးကတော့ ၁၅,၀၀၀ ကျပ်ပါခင်ဗျာ။";
    } else if (message.includes("ဟလို")) {
        reply = "မင်္ဂလာပါခင်ဗျာ၊ SocialHub MM မှ ကြိုဆိုပါတယ်။ ဘာများကူညီပေးရမလဲခင်ဗျာ။";
    } else {
        reply = "ကျေးဇူးတင်ပါတယ်ခင်ဗျာ၊ ခဏနေရင် လူကိုယ်တိုင် ပြန်ဖြေပေးပါမယ်။";
    }

    return NextResponse.json({ reply, status: "sent", time: new Date().toLocaleTimeString() });
}
