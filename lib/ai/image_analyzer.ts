import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzeImage(imageBase64: string, mimeType: string = "image/jpeg") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    ဒီပုံကို သေချာကြည့်ပါ။ ဒါက ငွေလွဲထားတဲ့ Slip (Kpay, Wave, CB, AYA) ဟုတ်ပါသလား?
    
    အကယ်၍ ဟုတ်ခဲ့ရင် အောက်ပါအချက်တွေကို JSON Format နဲ့ ထုတ်ပေးပါ:
    {
      "is_slip": true,
      "amount": "ငွေပမာဏ (နံပါတ်သီးသန့်)",
      "provider": "Kpay သို့မဟုတ် Wave",
      "transaction_id": "နောက်ဆုံးဂဏန်းများ",
      "receiver_name": "လက်ခံသူနာမည် (ပါရင်)"
    }

    Slip မဟုတ်ရင် (သို့) မထင်ရှားရင်: { "is_slip": false } လို့ပဲ ပြန်ပေးပါ။
    `;

    const imageParts = [{
      inlineData: {
        data: imageBase64,
        mimeType: mimeType,
      },
    }];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    // AI က တစ်ခါတလေ Markdown တွေ ထည့်ရေးတတ်လို့ သန့်ရှင်းရေးလုပ်မယ်
    const cleanJson = text.replace(/```json|```/g, "").trim();
    
    return JSON.parse(cleanJson);

  } catch (error) {
    console.error("Image Analysis Error:", error);
    return { is_slip: false, error: "AI could not read image" };
  }
}
