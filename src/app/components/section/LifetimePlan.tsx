'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Infinity } from 'lucide-react';
import Link from 'next/link';
import { CometCard } from "../ui/comet-card";

export default function LifetimePlanSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Life Time Plan
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 max-w-xl mx-auto px-2">
            Boost your insights that help you to grow and scale better. One payment, endless possibilities.
          </p>
        </div>

        {/* Unique Asymmetric Bento Pricing Container wrapped with CometCard */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto flex"
        >
          <CometCard className="w-full h-full">
            <div className="w-full h-full rounded-3xl bg-white border border-slate-200 shadow-xl sm:shadow-2xl shadow-slate-200/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
              
              {/* Left Column: Value Proposition & Perks */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50/50 to-white text-slate-900">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-lg sm:text-2xl font-bold text-orange-600 shadow-sm w-fit">
                    <Infinity className="w-6 h-6 sm:w-8 sm:h-8" /> Paratpar
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                    Scale your WhatsApp ecosystem without recurring monthly overhead.
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    Unlock unrestricted access to Chattrbox automation tools designed to convert leads into loyal customers automatically.
                  </p>
                </div>
              </div>

              {/* Right Column: High-Conversion Pricing Pod */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Background Accent Lines */}
                <div className="absolute -right-16 -top-16 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-slate-400">
                    Lifetime Investment
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">$97</span>
                    <span className="text-slate-400 text-xs sm:text-sm font-medium">/ one-time</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Get instant access today. No hidden fees, no subscriptions, lifetime updates included.
                  </p>
                </div>

                <div className="space-y-4 pt-6 sm:pt-8 relative z-10">
                  <Link 
                    href="/checkout?plan=lifetime" 
                    className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] text-center"
                  >
                    <span>Claim Lifetime Access</span> <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

            </div>
          </CometCard>
        </motion.div>

      </div>
    </section>
  );
}