'use client';

import { motion } from 'framer-motion';
import { MessageSquareQuote, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              We want to use <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Conversational Commerce</span> technologies to assist businesses increase sales.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We think that talks have great power. Building connections with customers requires having conversations, particularly when trying to close a deal.
              </p>
              
              <p className="text-slate-500 text-sm sm:text-base">
                The lifeblood of businesses is sales. Small and medium-sized businesses lack the resources and experience of corporations, which may design specific solutions to engage and do business with their clients.
              </p>

               <p className="text-slate-500 text-sm sm:text-base">
               These companies can easily automate their consumer interactions using Chattrbox, converting chats into sales.
              </p>            
            </div>
          </motion.div>

          {/* Right Column: Custom Asset Image with object-contain fix */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/10 bg-slate-900/5 p-4 flex items-center justify-center group">
              <Image 
                src="/Assest/contact-trans.png" 
                alt="Conversational Commerce with Chattrbox" 
                fill 
                className="object-contain p-2 sm:p-4"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}