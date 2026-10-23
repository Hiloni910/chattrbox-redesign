'use client';

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { 
  Link2, 
  Send, 
  Clock, 
  MessageSquare, 
  UserCheck, 
  ShoppingBag, 
  Share2, 
  Users,
  Sparkles
} from 'lucide-react';

type Card = {
  title: string;
  description: string;
  step: string;
  icon: React.ElementType;
  className: string;
  glow: string;
  config: {
    y: number;
    x: number;
    rotate: number;
    zIndex: number;
  };
};

type SpringConfig = {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

const defaultSpring: SpringConfig = {
  type: "spring",
  visualDuration: 0.6,
  bounce: 0.25,
};

export default function HowToGetStartedSection() {
  const stepsData = [
    {
      step: "01",
      title: "Connect to Chattrbox",
      description: "Create a Telegram Chatbot @BotFather or create a WhatsApp business account, and connect it in a few easy steps.",
      icon: Link2,
      // Updated Card 01: Sleek deep indigo-to-teal gradient
       className: "bg-gradient-to-br from-[#818cf8] via-[#3b82f6] to-[#1e1b4b] text-white shadow-2xl shadow-indigo-950/25 border border-indigo-400/40",
      glow: "bg-orange-400/15",
      config: { y: -20, x: -180, rotate: -8, zIndex: 2 }
    },
    {
      step: "02",
      title: "Broadcast Message",
      description: "Send promotional messages, notifications, and updates anytime. Enjoy over 80% open rates with zero restrictions.",
      icon: Send,
      className: "bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#38bdf8] text-white shadow-2xl shadow-orange-500/25 border border-orange-400/50",
      glow: "bg-white/15",
      config: { y: 20, x: -90, rotate: 5, zIndex: 3 }
    },
    {
      step: "03",
      title: "Automated Drip",
      description: "Set up automated sequence messages after specified time intervals like minutes, hours, or days effortlessly.",
      icon: Clock,
      className: "bg-gradient-to-br from-[#fbbf24] via-[#818cf8] to-[#6366f1] text-white shadow-2xl shadow-indigo-500/25 border border-indigo-400/50",
      glow: "bg-amber-400/15",
      config: { y: -40, x: 0, rotate: -3, zIndex: 4 }
    },
    {
      step: "04",
      title: "Live-Chat Support",
      description: "Centralized live-chat features for both Telegram and WhatsApp for quick, top-notch customer management.",
      icon: MessageSquare,
      className: "bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#1e3a8a] text-slate-900 shadow-2xl shadow-blue-950/15 border border-slate-200",
      glow: "bg-blue-600/10",
      config: { y: 15, x: 90, rotate: 6, zIndex: 5 }
    },
    {
      step: "05",
      title: "User Input & Fields",
      description: "Ask users questions and store answers as variables in custom fields to segment subscribers automatically.",
      icon: UserCheck,
      className: "bg-gradient-to-br from-[#111827] via-[#1e40af] to-[#f43f5e] text-white shadow-2xl shadow-slate-950/25 border border-slate-700/60",
      glow: "bg-rose-500/15",
      config: { y: -10, x: 180, rotate: -6, zIndex: 6 }
    },
    {
      step: "06",
      title: "WhatsApp Catalog",
      description: "Boost your sales potential with WhatsApp Catalogs, creating stunning product showcases with rich media.",
      icon: ShoppingBag,
      className: "bg-gradient-to-br from-[#ea580c] via-[#0284c7] to-[#4338ca] text-white shadow-2xl shadow-blue-950/25 border border-sky-400/40",
      glow: "bg-sky-400/15",
      config: { y: 25, x: 270, rotate: 8, zIndex: 7 }
    },
    {
      step: "07",
      title: "Chatbot Links",
      description: "Include chatbot links on your website, social pages, and email newsletters with custom tracking tags.",
      icon: Share2,
      className: "bg-gradient-to-br from-[#818cf8] via-[#3b82f6] to-[#1e1b4b] text-white shadow-2xl shadow-indigo-950/25 border border-indigo-400/40",
      glow: "bg-orange-400/15",
      config: { y: -30, x: 360, rotate: -5, zIndex: 8 }
    },
    {
      step: "08",
      title: "Team Management",
      description: "Manage your account with multiple team members. Design roles to control access across specific modules.",
      icon: Users,
      // Updated Card 08: Striking warm amber-to-rose/ruby gradient
      className: "bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#38bdf8] text-white shadow-2xl shadow-orange-500/25 border border-orange-400/50",
      glow: "bg-white/15",
      config: { y: 10, x: 450, rotate: 4, zIndex: 9 }
    }
  ];

  const [active, setActive] = useState<Card | null>(null);
  const [spacing, setSpacing] = useState(115);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setSpacing(mq.matches ? 115 : 50);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const middle = (stepsData.length - 1) / 2;

  const isAnyCardActive = () => active?.title;
  const isCurrentActive = (card: Card) => active?.title === card.title;

  return (
    <section className="relative overflow-hidden py-28 lg:py-40 bg-gradient-to-b from-white via-slate-50/80 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/10 to-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Interactive Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            How to get <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Started?</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Click on any module card below to explore our core onboarding steps interactively.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative flex h-[500px] lg:h-[580px] w-full items-center justify-center overflow-hidden py-10">
          <motion.div
            ref={ref}
            onClick={() => setActive(null)}
            className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center [--height:340px] [--width:230px] lg:[--height:410px] lg:[--width:275px]"
          >
            {stepsData.map((card, index) => {
              const offsetX = (index - middle) * spacing;
              const IconComp = card.icon;
              const isLightCard = card.className.includes("from-[#f8fafc]");

              return (
                <motion.div key={card.title}>
                  <motion.button
                    initial={{ x: 0, scale: 0 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(card);
                    }}
                    animate={{
                      y: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                        ? 260
                        : card.config.y,
                      x: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                        ? offsetX * 0.3
                        : offsetX,
                      rotate: isCurrentActive(card)
                        ? 0
                        : isAnyCardActive()
                        ? 0.1 * card.config.rotate
                        : card.config.rotate,
                      scale: isCurrentActive(card)
                        ? 1.25
                        : isAnyCardActive()
                        ? 0.65
                        : 1,
                    }}
                    whileHover={{
                      scale: isCurrentActive(card) ? 1.25 : isAnyCardActive() ? 0.65 : 1.06,
                    }}
                    transition={defaultSpring}
                    style={{
                      width: `var(--width)`,
                      height: `var(--height)`,
                      marginLeft: `calc(var(--width) / -2)`,
                      marginTop: `calc(var(--height) / -2)`,
                      zIndex: isCurrentActive(card) ? 50 : card.config.zIndex,
                    }}
                    className={cn(
                      "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between overflow-hidden rounded-3xl p-6 md:p-7 transition-all shadow-2xl backdrop-blur-xl group text-left",
                      card.className
                    )}
                  >
                    {/* Internal Radial Glow */}
                    <div className={`absolute -right-10 -top-10 w-36 h-36 rounded-full blur-2xl pointer-events-none ${card.glow}`} />

                    <div className="w-full flex items-center justify-between pt-1 relative z-10">
                      <div className={cn(
                        "h-11 w-11 rounded-2xl flex items-center justify-center shadow-md transition-colors",
                        isLightCard 
                          ? "bg-slate-900 text-white group-hover:bg-orange-500" 
                          : "bg-white/15 border border-white/25 text-white backdrop-blur-md group-hover:bg-orange-500"
                      )}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "text-xs font-black tracking-widest px-3 py-1 rounded-full shadow-sm",
                        isLightCard ? "bg-slate-200 text-slate-800" : "bg-black/30 text-white border border-white/20"
                      )}>
                        {card.step}
                      </span>
                    </div>

                    <div className="mt-4 w-full space-y-2 relative z-10">
                      <motion.h3
                        layoutId={card.title + "title"}
                        className={cn(
                          "font-black text-lg md:text-xl tracking-tight leading-snug",
                          isLightCard ? "text-slate-900" : "text-white"
                        )}
                      >
                        {card.title}
                      </motion.h3>

                      <AnimatePresence mode="popLayout">
                        {active?.title === card.title && (
                          <motion.p
                            layoutId={card.title + "description"}
                            initial={{ opacity: 0, x: 10, y: 10, height: 0 }}
                            animate={{ opacity: 1, x: 0, y: 0, height: "auto" }}
                            exit={{ opacity: 0, x: 15, y: 15 }}
                            transition={defaultSpring}
                            className={cn(
                              "text-xs sm:text-sm leading-relaxed font-medium pt-1",
                              isLightCard ? "text-slate-600" : "text-white/90"
                            )}
                          >
                            {card.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={cn(
                      "text-[11px] font-bold uppercase tracking-wider pt-3 border-t w-full flex items-center justify-between relative z-10",
                      isLightCard ? "border-slate-200 text-slate-500" : "border-white/20 text-white/70"
                    )}>
                      <span>{active?.title === card.title ? "Close View" : "Explore Step"}</span>
                      <span className="text-orange-400 font-extrabold">{active?.title === card.title ? "✕" : "→"}</span>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}