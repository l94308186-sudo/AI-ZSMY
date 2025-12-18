import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { content } = await req.json();

        // Bot configs
        const bots = [
            { token: process.env.TELEGRAM_BOT_TOKEN_1, chat_id: process.env.TELEGRAM_CHAT_ID_1 },
            { token: process.env.TELEGRAM_BOT_TOKEN_2, chat_id: process.env.TELEGRAM_CHAT_ID_2 },
            { token: process.env.TELEGRAM_BOT_TOKEN_3, chat_id: process.env.TELEGRAM_CHAT_ID_3 },
            { token: process.env.TELEGRAM_BOT_TOKEN_4, chat_id: process.env.TELEGRAM_CHAT_ID_4 }
        ];

        console.log("--- Sending Broadcast via VPN ---");

        const results = await Promise.all(bots.map(async (bot, index) => {
            if (!bot.token || !bot.chat_id) return { ok: false, error: "Missing config" };
            
            try {
                const res = await fetch(`https://api.telegram.org/bot${bot.token}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ chat_id: bot.chat_id, text: content }),
                });
                const data = await res.json();
                console.log(`Bot ${index + 1} Status:`, data.ok ? "✅ Success" : "❌ Failed");
                return data;
            } catch (err) {
                console.error(`Bot ${index + 1} Connection Error`);
                return { ok: false };
            }
        }));

        const isAnySuccess = results.some(r => r.ok);

        if (isAnySuccess) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: "Could not reach Telegram" });
        }
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
