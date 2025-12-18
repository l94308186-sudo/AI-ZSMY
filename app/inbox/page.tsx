"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Facebook, MessageCircle } from "lucide-react"; // TelegramIcon replaced with MessageCircle

export default function InboxPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Unified Inbox</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-hidden pb-10">
        
        {/* Chat List - ဘယ်ဘက်ခြမ်း */}
        <Card className="col-span-1 overflow-y-auto p-2 space-y-2 bg-white">
          <ChatItem name="Aung Aung" message="ဈေးဘယ်လောက်လဲဗျ?" platform="fb" time="2m ago" active />
          <ChatItem name="Su Su" message="Telegram ကနေ ဝယ်ချင်လို့" platform="tg" time="10m ago" />
          <ChatItem name="Kyaw Kyaw" message="ရောက်ပြီလားခင်ဗျ" platform="fb" time="1h ago" />
        </Card>

        {/* Chat Window - ညာဘက်ခြမ်း */}
        <Card className="col-span-2 flex flex-col p-0 overflow-hidden bg-white">
          {/* Header */}
          <div className="p-4 border-b border-slate-100 bg-slate-50 font-bold">
            Chatting with Aung Aung
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50">
            <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[70%] text-sm">
                    ဈေးဘယ်လောက်လဲဗျ? ဒီပစ္စည်းလေး စိတ်ဝင်စားလို့ပါ။
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[70%] text-sm shadow-md">
                    ဟုတ်ကဲ့ ၁သောင်းခွဲပါခင်ဗျာ။ အခုမှာရင် မနက်ဖြန် ပို့ပေးလို့ရပါတယ်။
                </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-100 flex gap-2 bg-white">
            <Input placeholder="Reply here..." className="focus:ring-blue-500" />
            <Button className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" /> Send
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
}

// Sub-component
function ChatItem({ name, message, platform, time, active = false }: any) {
  return (
    <div className={`p-4 rounded-xl cursor-pointer transition-all ${
      active ? 'bg-blue-50 border-l-4 border-l-blue-600 shadow-sm' : 'hover:bg-slate-50 border-l-4 border-l-transparent'
    }`}>
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold text-sm text-slate-800">{name}</span>
        {platform === 'fb' ? 
          <Facebook className="w-4 h-4 text-blue-600" /> : 
          <MessageCircle className="w-4 h-4 text-sky-500" />
        }
      </div>
      <p className="text-xs text-slate-500 truncate">{message}</p>
      <div className="text-[10px] text-slate-400 mt-2 text-right">{time}</div>
    </div>
  );
}
