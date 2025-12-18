"use client";

import React, { useState } from 'react';
import { 
  LayoutGrid, ShoppingBag, BarChart3, Settings, 
  Zap, CheckCircle2, AlertCircle, Clock, ShieldCheck 
} from "lucide-react";

export default function ServicePlatform() {
  const [activeTab, setActiveTab] = useState('store'); // Default က အရောင်းဆိုင်ကို ပြမယ်

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">SocialHub<span className="text-blue-500">.Platform</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-2">
          <NavItem 
            icon={<ShoppingBag />} 
            label="Service Store" 
            active={activeTab === 'store'} 
            onClick={() => setActiveTab('store')} 
            badge="New"
          />
          <NavItem 
            icon={<LayoutGrid />} 
            label="My Active Apps" 
            active={activeTab === 'apps'} 
            onClick={() => setActiveTab('apps')} 
          />
          <NavItem 
            icon={<BarChart3 />} 
            label="Usage Reports" 
            active={activeTab === 'reports'} 
            onClick={() => setActiveTab('reports')} 
          />
          <NavItem 
            icon={<Settings />} 
            label="Settings" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
          />
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-4 border border-blue-500/20">
            <div className="text-xs text-blue-400 mb-1 font-bold">WALLET BALANCE</div>
            <div className="text-xl font-bold text-white">50,000 Ks</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-black/50 backdrop-blur-xl sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold">
              {activeTab === 'store' && 'Explore Services'}
              {activeTab === 'apps' && 'My Active Services'}
            </h1>
            <p className="text-xs text-slate-500">Select and manage your AI tools</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> System Operational
            </div>
            <div className="w-9 h-9 bg-slate-800 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold">U</div>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'store' && <ServiceStore />}
          {activeTab === 'apps' && <ActiveServices />}
        </div>
      </main>
    </div>
  );
}

// --- 1. The Service Store (ဝန်ဆောင်မှု အရောင်းဆိုင်) ---
function ServiceStore() {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 p-8 shadow-2xl shadow-blue-900/20">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Upgrade Your Business with AI</h2>
          <p className="text-blue-100 mb-6">Choose from our premium AI modules. Pay daily, cancel anytime.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
            Top Up Wallet
          </button>
        </div>
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard 
          title="AI Smart Replier" 
          desc="Customer မေးသမျှကို 24/7 အလိုအလျောက် ဖြေကြားပေးမည့် စနစ်။"
          price="5,000 Ks / Day"
          icon={<Zap className="text-yellow-400" />}
          color="border-yellow-500/20 bg-yellow-500/5"
          tags={['Auto-Reply', 'Sales']}
        />
        <ServiceCard 
          title="Daily Intelligence Report" 
          desc="နေ့စဉ် အရောင်းစာရင်းနှင့် Customer အချက်အလက်များကို ည ၁၂ မထိုးခင် ပို့ပေးမည့် စနစ်။"
          price="2,000 Ks / Day"
          icon={<BarChart3 className="text-blue-400" />}
          color="border-blue-500/20 bg-blue-500/5"
          tags={['Analytics', 'Admin']}
        />
        <ServiceCard 
          title="Slip Verifier Pro" 
          desc="ငွေလွဲ Slip အတု/အစစ် ခွဲခြားပေးပြီး Transaction ID စစ်ဆေးပေးမည့် စနစ်။"
          price="3,000 Ks / Day"
          icon={<ShieldCheck className="text-green-400" />}
          color="border-green-500/20 bg-green-500/5"
          tags={['Security', 'Finance']}
        />
      </div>
    </div>
  )
}

// --- 2. Active Apps View (ဝယ်ထားပြီးသားများ) ---
function ActiveServices() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-[#0A0A0A] border border-green-500/30 rounded-2xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4"><span className="bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded">ACTIVE</span></div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/20">
            <Zap className="text-yellow-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Smart Replier</h3>
            <p className="text-slate-500 text-sm mb-4">Facebook Page: <span className="text-white">Beauty Shop MM</span></p>
            
            <div className="flex items-center gap-6 text-xs text-slate-400 bg-white/5 p-3 rounded-lg border border-white/5">
              <div className="flex items-center gap-2"><Clock size={14} /> Expire in: <span className="text-white font-bold">4h 12m</span></div>
              <div className="flex items-center gap-2"><BarChart3 size={14} /> Today Replies: <span className="text-white font-bold">142</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Components ---
function NavItem({ icon, label, active, onClick, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${active ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
      <div className="flex items-center gap-3">{icon} <span className="text-sm font-medium">{label}</span></div>
      {badge && <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold">{badge}</span>}
    </button>
  )
}

function ServiceCard({ title, desc, price, icon, color, tags }: any) {
  return (
    <div className={`bg-[#0A0A0A] border ${color} rounded-2xl p-6 hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden`}>
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">{icon}</div>
        <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
            <span className="text-white font-bold text-xs">{price}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm mb-4 leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 text-slate-400 px-2 py-1 rounded border border-white/5">{tag}</span>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
        Purchase Service
      </button>
    </div>
  )
}