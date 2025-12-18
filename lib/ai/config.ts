import { GoogleGenerativeAI } from "@google/generative-ai";

// API Key မရှိရင် Error တက်မယ်
if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY in .env.local");
}

// Gemini AI ကို စတင်ခြင်း
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Model ရွေးချယ်ခြင်း (အမြန်ဆုံးနဲ့ စျေးအသက်သာဆုံး Flash Model ကိုသုံးမယ်)
export const aiModel = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  generationConfig: {
    maxOutputTokens: 500, // စာအရမ်းရှည်ကြီးတွေ မရေးအောင် ထိန်းမယ်
    temperature: 0.7, // ဖန်တီးနိုင်စွမ်း (0 to 1)
  }
});