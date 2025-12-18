import { NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
    try {
        // ၁။ URL ကနေ Token ဆွဲထုတ်မယ် (SaaS Logic)
        const { searchParams } = new URL(request.url);
        const botToken = searchParams.get('bot_token');

        if (!botToken) return NextResponse.json({ error: "No Token" }, { status: 400 });

        const body = await request.json();
        if (!body.message || !body.message.text) return NextResponse.json({ ok: true });

        const chatId = body.message.chat.id;
        const text = body.message.text;

        // ၂။ User Token နဲ့ Bot ကို မောင်းမယ်
        const bot = new Telegraf(botToken);

        // ၃။ AI ဖြေခိုင်းမယ်
        let replyText = "";
        try {
            if (process.env.GEMINI_API_KEY) {
                const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const result = await model.generateContent(`
                    You are a helpful assistant for ZSMY Platform.
                    User Said: "${text}"
                    Reply in Myanmar politely.
                `);
                replyText = result.response.text();
            } else {
                replyText = "System Error: AI Key Missing";
            }
        } catch (e) {
            replyText = "ဝန်ဆောင်မှု ခေတ္တမအားလပ်နေပါသည်။";
        }

        // ၄။ ပြန်ပို့မယ်
        await bot.telegram.sendMessage(chatId, replyText);
        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: true });
    }
}