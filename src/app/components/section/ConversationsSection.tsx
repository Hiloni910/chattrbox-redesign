'use client';

import React from 'react';
import { 
  Megaphone, 
  Receipt, 
  ShieldCheck, 
  Headphones, 
  Sparkles 
} from 'lucide-react';
import Image from 'next/image';
import { Tabs } from "../ui/tabs";

export default function ConversationsSection() {
  const conversationTypes = [
    {
      title: "Marketing",
      value: "marketing",
      icon: Megaphone,
      subtitle: "Marketing",
      description: "Primarily used to send customers promotional messages. Ideal for driving repeat sales and re-engaging cold audiences.",
      themeColor: "from-orange-500 to-amber-500",
      image: "/Assest/chattrbox_marketing.png"
    },
    {
      title: "Utility",
      value: "utility",
      icon: Receipt,
      subtitle: "Utility",
      description: "Used to provide post-purchase assistance or to inform customers about ongoing transactions and order progress.",
      themeColor: "from-blue-600 to-cyan-500",
      image: "/Assest/chattrbox_Utility.png"
    },
    {
      title: "Authentication",
      value: "authentication",
      icon: ShieldCheck,
      subtitle: "Authentication",
      description: "Sends secure one-time passcodes (OTPs) or instant notifications for seamless account setup and secure login verification.",
      themeColor: "from-indigo-600 to-blue-600",
      image: "/Assest/chattrbox_Authentication.png"
    },
    {
      title: "Service",
      value: "service",
      icon: Headphones,
      subtitle: "Service",
      description: "Conversations started directly by users around support questions. Completely free-form text with no template pre-approval needed.",
      themeColor: "from-purple-600 to-pink-500",
      image: "/Assest/chattrbox_Service.png"
    }
  ];

  const formattedTabs = conversationTypes.map((item, idx) => ({
    title: item.title,
    value: item.value,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl shadow-slate-900/10 relative overflow-hidden w-full h-full">
        {/* Top Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.themeColor}`} />

        {/* Left Column: Details */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-widest shadow-sm bg-slate-50 text-slate-800 border-slate-200">
            <item.icon className="w-4 h-4 text-orange-500" />
            <span>Category 0{idx + 1}: {item.title}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
              {item.subtitle}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>

        {/* Right Column: Asset Preview Image */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-4 flex items-center justify-center shadow-inner group">
            <Image 
              src={item.image} 
              alt={`${item.title} preview`} 
              fill 
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/80 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/5 to-orange-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>WhatsApp Message Categories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Various types of <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Conversations</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the four primary WhatsApp conversation categories. Click below to switch between categories and discover their specific use-cases.
          </p>
        </div>

        {/* Aceternity UI 3D Stacked Hover-Fanned Tabs Component */}
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
          <Tabs tabs={formattedTabs} />
        </div>

      </div>
    </section>
  );
}