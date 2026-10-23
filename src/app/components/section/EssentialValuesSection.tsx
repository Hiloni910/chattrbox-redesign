'use client';

import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import Image from 'next/image';
import { GlowingEffect } from "../../components/ui/glowing-effect";

export default function EssentialValuesSection() {
  const values = [
    {
      title: "Client-first",
      description: "Our purpose is to expand our clients' businesses.",
      icon: HeartHandshake,
      accent: "from-blue-500 to-cyan-400"
    },
    {
      title: "Simple beauty",
      description: "Strive to create things that are easy to use and enjoyable.",
      icon: Sparkles,
      accent: "from-orange-500 to-amber-400"
    },
    {
      title: "Work quickly to finish",
      description: "Quick thinking, quick execution, quality work, and maintaining concentration through completion.",
      icon: Zap,
      accent: "from-blue-600 to-indigo-600"
    },
    {
      title: "Increase benchmarks",
      description: "Always eager to learn more and improve upon our finest efforts.",
      icon: TrendingUp,
      accent: "from-purple-600 to-pink-500"
    },
    {
      title: "Enhance talent",
      description: "Respect and depend on one another while embracing the diversity of individuals and opinions.",
      icon: Users,
      accent: "from-teal-500 to-emerald-400"
    },
    {
      title: "True disclosure",
      description: "Own the cause and accept accountability for your choices and deeds.",
      icon: ShieldCheck,
      accent: "from-orange-600 to-red-500"
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Our Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Essential <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Values</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Our identity and methods of operation.
          </p>
        </div>

        {/* Optional Section Image Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-200/80 bg-slate-900/5 p-4 flex items-center justify-center">
            <Image 
              src="/Assest/chattrbox-silder.png" 
              alt="Essential Values at Chattrbox" 
              fill 
              className="object-contain p-2 sm:p-4"
            />
          </div>
        </div>

        {/* 6 Essential Values Grid with Glowing Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                // Outer card wrapper acts as the positioning anchor for the glowing effect border
                className="relative h-full rounded-3xl p-0.5 group bg-transparent"
              >
                {/* Glowing Mouse-following Effect */}
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={150}
                  inactiveZone={0.01}
                  borderWidth={3}
                  blur={6}
                />

                {/* Inner White Card Content resting above the glowing border */}
                <div className="relative z-10 h-full p-8 bg-white rounded-[23px] border border-slate-200/80 shadow-xl shadow-slate-950/5 flex flex-col justify-between space-y-6 overflow-hidden">
                  {/* Top Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${val.accent}`} />

                  <div className="space-y-4 pt-2">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {val.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}