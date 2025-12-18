export type ChatMessage = {
    role: 'user' | 'model';
    parts: string;
};

export function manageMemory(history: any[], newMessage: string) {
    // ၁။ History အရမ်းရှည်နေရင် ရှေ့ကဟာတွေ ဖြတ်ထုတ်မယ် (Token သက်သာအောင်)
    const MAX_HISTORY = 10; 
    let recentHistory = history;

    if (history.length > MAX_HISTORY) {
        recentHistory = history.slice(history.length - MAX_HISTORY);
    }

    // ၂။ Gemini လက်ခံမယ့် Format ပြောင်းပေးခြင်း
    // (မှတ်ချက် - တကယ်တမ်း Database ကနေ ဆွဲထုတ်တဲ့ Logic ကို API Route မှာ ရေးမယ်၊ 
    // ဒီမှာက Format ချပေးတာလောက်ပဲ လုပ်ထားမယ်)
    
    return recentHistory.map(msg => ({
        role: msg.role === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.message }]
    }));
}
