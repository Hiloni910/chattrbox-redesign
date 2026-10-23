'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'6months' | 'yearly'>('6months');
  const [prarabdhToggled, setPrarabdhToggled] = useState(false);

  // Scroll references for carousels
  const coreCarouselRef = useRef<HTMLDivElement>(null);
  const topupCarouselRef = useRef<HTMLDivElement>(null);

  const [activeCoreIndex, setActiveCoreIndex] = useState(0);
  const [activeTopupIndex, setActiveTopupIndex] = useState(0);

  // Core Plans Data based on Billing Cycle
  const corePlans = billingCycle === '6months' ? [
    {
      name: "PRARAMBH",
      price: "₹3,499",
      originalPrice: "₹3,848",
      period: "Per month (+taxes)",
      badge: "Starter",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 2K",
        "Subscribers : 1K",
        "Broadcast : 5K/Month",
        "Sequence Campaign : 4",
        "WhatsApp - Webhook Workflow : 5",
        "WhatsApp - Flows : 1",
        "API Integration : Limited"
      ],
      highlight: false
    },
    {
      name: "PRAYAS",
      price: "₹7,699",
      originalPrice: "₹8,469",
      period: "Per month (+taxes)",
      badge: "Popular",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 5K",
        "Subscribers : 3K",
        "Bot AI Reply : 200K/Month",
        "Sequence Campaign : 10",
        "WhatsApp - Webhook Workflow : 3",
        "WhatsApp - eCom Catalog",
        "WordPress/Shopify Integration : 3",
        "Team Member : 2",
        "Chat Widget : No Brand"
      ],
      highlight: true
    },
    {
      name: "PRAYATNA",
      price: "₹10,499",
      originalPrice: "₹11,549",
      period: "Per month (+taxes)",
      badge: "Enterprise",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 10K",
        "Subscribers : 5K",
        "Sequence Campaign : 25",
        "Telegram - Group Management",
        "API Integration : Advanced",
        "Team Member : 8",
        "Chat Widget : Own Brand"
      ],
      highlight: false
    }
  ] : [
    {
      name: "PRARAMBH",
      price: "₹1,999",
      originalPrice: "₹2,198",
      period: "Per month billed yearly",
      badge: "Starter",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 5K",
        "Subscribers : 2K",
        "Broadcast : 5K/Month",
        "Sequence Campaign : 4",
        "WhatsApp - Webhook Workflow : 5",
        "WhatsApp - Flows : 1",
        "API Integration : Limited"
      ],
      highlight: false
    },
    {
      name: "PRAYAS",
      price: "₹6,199",
      originalPrice: "₹6,819",
      period: "Per month billed yearly",
      badge: "Popular",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 10K",
        "Subscribers : 5K",
        "Bot AI Reply : 200K/Month",
        "Sequence Campaign : 10",
        "WhatsApp - Webhook Workflow : 3",
        "WhatsApp - eCom Catalog",
        "WordPress/Shopify Integration : 3",
        "Team Member : 2",
        "Chat Widget : No Brand"
      ],
      highlight: true
    },
    {
      name: "PRAYATNA",
      price: "₹8,999",
      originalPrice: "₹9,899",
      period: "Per month billed yearly",
      badge: "Enterprise",
      features: [
        "Add website page",
        "User Account : 1",
        "Connect Account : 1",
        "Number of Message : 25K",
        "Subscribers : 15K",
        "Sequence Campaign : 25",
        "Telegram - Group Management",
        "API Integration : Advanced",
        "Team Member : 8",
        "Chat Widget : Own Brand"
      ],
      highlight: false
    }
  ];

  // Topup Add-on Cards Data
  const topupCards = [
    { name: "VENUS", price: "₹2,499", subs: "2K", msg: "5K/Month", accent: "from-blue-500 to-cyan-400" },
    { name: "MARS", price: "₹2,999", subs: "25K", msg: "25K/Month", accent: "from-orange-500 to-amber-400" },
    { name: "SATURN", price: "₹6,999", subs: "1 Lakh", msg: "5 Lakh", accent: "from-blue-600 to-indigo-600" },
    { name: "JUPITER", price: "₹9,999", subs: "5 Lakh", msg: "Unlimited", accent: "from-purple-600 to-pink-500" },
  ];

  // Enterprise Topup Cards Data
  const enterpriseTopups = [
    { name: "UNIMARITO", price: "₹4,999", subs: "25 Lakh", msg: "50 Lakh", freeMsg: "5,000" },
    { name: "ZATOZA", price: "₹9,999", subs: "Unlimited", msg: "Unlimited", freeMsg: "11,000" },
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, setActiveIndex: (index: number) => void) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const cardWidth = ref.current.children[0]?.clientWidth || 300;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToCard = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    if (ref.current) {
      const cardWidth = ref.current.children[0]?.clientWidth || 300;
      ref.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-28 lg:py-40 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100">
      
      {/* Interactive Background Boxes Container with Gradient Gray Theme */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <Boxes />
        {/* Radial fade mask blending into the gradient gray background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-100/80 via-slate-50/50 to-slate-100/80 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-20">
        
        {/* Section Header & Billing Toggle */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Investment plans built for <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">growth</span>
          </h2>

          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
            <button
              onClick={() => setBillingCycle('6months')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                billingCycle === '6months' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              6 Months Plan
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly Plan <span className="ml-1.5 text-xs px-2.5 py-0.5 rounded-full bg-orange-500 text-white shadow-sm">Save More</span>
            </button>
          </div>
        </div>

        {/* Core Plans Carousel on Mobile/Tablet & Grid on Desktop */}
        <div className="space-y-4">
          <div 
            ref={coreCarouselRef}
            onScroll={() => handleScroll(coreCarouselRef, setActiveCoreIndex)}
            className="flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            
            {corePlans.map((plan, idx) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center relative rounded-3xl p-6 sm:p-8 pt-10 flex flex-col justify-between transition-all backdrop-blur-md ${
                  plan.highlight 
                    ? 'bg-slate-900 text-white ring-2 ring-orange-500 shadow-2xl scale-[1.02]' 
                    : 'bg-white/90 text-slate-900 border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:border-blue-300'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-20">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight">{plan.price}</span>
                      <span className={`text-sm font-semibold line-through ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                        {plan.originalPrice}
                      </span>
                    </div>
                    <span className={`text-xs font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                    <div className="text-xs font-bold text-orange-500 pt-1">
                      10% Discount Applied
                    </div>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-slate-200/20">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs font-medium">
                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-orange-400' : 'text-blue-600'}`} />
                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link 
                    href={`/checkout?plan=${plan.name.toLowerCase()}`}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                      plan.highlight 
                        ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/30' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
                    }`}
                  >
                    Choose Plan <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* PRARABDH Plan Card with Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center relative rounded-3xl p-6 sm:p-8 pt-10 flex flex-col justify-between bg-white/90 backdrop-blur-md border-2 border-blue-500/30 shadow-xl shadow-blue-900/10 hover:border-blue-400 transition-all"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-20">
                Special One-Time
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">PRARABDH</h3>
                  <p className="text-xs text-slate-500 mt-1">Valid for only onetime use</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                      {prarabdhToggled ? "₹1,598 /-" : "₹599 /-"}
                    </span>
                  </div>
                  
                  {/* Interactive Toggle for Prarabdh */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-700">Toggle Plan Mode</span>
                    <button 
                      onClick={() => setPrarabdhToggled(!prarabdhToggled)}
                      className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${prarabdhToggled ? 'bg-orange-500' : 'bg-slate-300'}`}
                      aria-label="Toggle plan mode"
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${prarabdhToggled ? 'translate-x-4' : 'translate-x-0'}`} />
                    </button>
                  </div>
                  <div className="text-xs font-bold text-orange-500 pt-1">
                    10% Discount Applied
                  </div>
                </div>

                <ul className="space-y-3 pt-4 border-t border-slate-200">
                  <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> Add website page
                  </li>
                  <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> User Account : 1 | Connect Account : 1
                  </li>
                  <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> Number of Message : 2K | Subs : 1K
                  </li>
                  <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> Broadcast : 5K/Month | Seq : 4
                  </li>
                  <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> API Integration : Limited
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link 
                  href="/checkout?plan=prarabdh"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm transition-all shadow-md shadow-orange-500/30"
                >
                  Choose Plan <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Pagination Dots for Core Plans (Visible only on mobile/tablet) */}
          <div className="flex lg:hidden justify-center items-center gap-2 pt-2">
            {[0, 1, 2, 3].map((dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToCard(coreCarouselRef, dotIdx)}
                className={`h-2.5 rounded-full transition-all ${
                  activeCoreIndex === dotIdx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

       {/* Four Small Topup Cards */}
        <div className="space-y-4 pt-10">
          <div 
            ref={topupCarouselRef}
            onScroll={() => handleScroll(topupCarouselRef, setActiveTopupIndex)}
            className="flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {topupCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4 }}
                className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-center p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/40 flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.accent}`} />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-extrabold uppercase tracking-widest text-blue-600">{card.name}</span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">1 Yr Valid</span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900">{card.price}</h4>
                </div>

                <div className="space-y-2 text-xs text-slate-600 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="flex justify-between"><span>Subscribers:</span> <strong className="text-slate-900">{card.subs}</strong></p>
                  <p className="flex justify-between"><span>Messages:</span> <strong className="text-slate-900">{card.msg}</strong></p>
                </div>

                <button className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-md">
                  Topup Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots for Topup Cards (Visible only on mobile/tablet) */}
          <div className="flex lg:hidden justify-center items-center gap-2 pt-2">
            {[0, 1, 2, 3].map((dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToCard(topupCarouselRef, dotIdx)}
                className={`h-2.5 rounded-full transition-all ${
                  activeTopupIndex === dotIdx ? 'w-8 bg-orange-500' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sarvasva Lifetime Plan Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-8 sm:p-14 shadow-2xl overflow-hidden border border-blue-900/50 backdrop-blur-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 px-3.5 py-1.5 rounded-full border border-orange-500/30">
                Sarvasva Lifetime Plan
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Boost your insights that help you to grow and scale better.
              </h3>
              <p className="text-slate-300 text-sm">
                Get lifetime access to all core features with zero recurring monthly fees.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
              <div className="text-center lg:text-right">
                <span className="text-xs uppercase text-slate-400 font-bold block">Only At</span>
                <span className="text-4xl sm:text-5xl font-black text-orange-400">$197</span>
              </div>
              <Link 
                href="/checkout?plan=sarvasva-lifetime"
                className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm transition-all shadow-lg shadow-orange-500/30"
              >
                Claim Lifetime Deal
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Topup Cards (UNIMARITO & ZATOZA) */}
        <div className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {enterpriseTopups.map((ent, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold uppercase tracking-wider text-orange-600 px-3.5 py-1 rounded-full bg-orange-50">
                      {ent.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">Valid for 1 Year</span>
                  </div>
                  <h4 className="text-4xl font-black text-slate-900">{ent.price}</h4>
                </div>

                <div className="space-y-2 text-sm text-slate-700 font-medium border-y border-slate-100 py-4">
                  <p className="flex justify-between"><span>Subscribers:</span> <strong>{ent.subs}</strong></p>
                  <p className="flex justify-between"><span>Messages:</span> <strong>{ent.msg}</strong></p>
                  <p className="flex justify-between text-blue-600"><span>Free Message Bonus:</span> <strong>{ent.freeMsg}</strong></p>
                </div>

                <button className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/20">
                  Topup Now
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}