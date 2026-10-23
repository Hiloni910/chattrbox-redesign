'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-b from-slate-50 to-white">
      {/* Background Soft Blue & Orange Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5">
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Scale your business on <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Chattrbox</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Personalize communication and sell more with the WhatsApp Business API platform that automates marketing, sales, service and support.
            </p>
            
            {/* Side-by-side buttons on mobile and up */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 pt-2">
              {/* Orange CTA button for high conversion trial */}
              <Link 
                href="/trial" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 text-xs sm:text-base text-center"
              >
                <span>Start 3 Days Trial</span> <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] flex-shrink-0" />
              </Link>
              <Link 
                href="/demo" 
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-orange-400 font-semibold transition-all shadow-sm text-xs sm:text-base text-center"
              >
                Book a Demo
              </Link>
            </div>

          </motion.div>

          {/* Right Column: Crisscross (V-Shape) Phone Chat Images - Hidden on Mobile, Visible on LG+ screens */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:col-span-5 lg:flex relative h-[480px] items-center justify-center"
          >
            {/* First Phone Chat Image (Left tilt in V-shape) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-4 top-8 w-60 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white bg-white rotate-[-8deg] z-10"
            >
              <div className="relative h-[420px] w-full">
                <Image 
                  src="/Assest/phone.png" 
                  alt="WhatsApp Chat Automation Preview 1" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Second Phone Chat Image (Right tilt, crossing in V-shape) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-4 top-16 w-60 rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/20 border-4 border-white bg-white rotate-[10deg] z-20"
            >
              <div className="relative h-[420px] w-full">
                <Image 
                  src="/Assest/chat-screen.png" 
                  alt="WhatsApp Chat Automation Preview 2" 
                  fill 
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}