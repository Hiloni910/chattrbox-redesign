'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from "../ui/moving-border";

export default function BusinessStatsSection() {
  // List of your actual brand logo filenames in public/logos/
  const brandLogos = [
    { name: "Brand 1", src: "/logos/brand1.png" },
    { name: "Brand 2", src: "/logos/brand2.png" },
    { name: "Brand 3", src: "/logos/brand3.png" },
    { name: "Brand 4", src: "/logos/brand4.png" },
    { name: "Brand 5", src: "/logos/brand5.png" },
    { name: "Brand 6", src: "/logos/brand6.png" },
     { name: "Brand 1", src: "/logos/brand7.png" },
    { name: "Brand 2", src: "/logos/brand8.png" },
    { name: "Brand 3", src: "/logos/brand9.png" },
    { name: "Brand 4", src: "/logos/brand10.png" },
    { name: "Brand 5", src: "/logos/brand11.png" },
    { name: "Brand 6", src: "/logos/brand12.png" },
     { name: "Brand 1", src: "/logos/brand13.png" },
    { name: "Brand 2", src: "/logos/brand14.png" },
    { name: "Brand 3", src: "/logos/brand15.png" },
    { name: "Brand 4", src: "/logos/brand16.png" },
    { name: "Brand 5", src: "/logos/brand17.png" },
    { name: "Brand 6", src: "/logos/brand18.png" },
     { name: "Brand 1", src: "/logos/brand19.png" },
    { name: "Brand 2", src: "/logos/brand20.png" },
    { name: "Brand 3", src: "/logos/brand21.png" },
    { name: "Brand 4", src: "/logos/brand22.png" },
    { name: "Brand 5", src: "/logos/brand23.png" },
    { name: "Brand 6", src: "/logos/brand24.png" },
     { name: "Brand 1", src: "/logos/brand25.png" },
    { name: "Brand 2", src: "/logos/brand26.png" },
    { name: "Brand 3", src: "/logos/brand27.png" },
    { name: "Brand 4", src: "/logos/brand28.png" },
    { name: "Brand 5", src: "/logos/brand29.png" },
    { name: "Brand 6", src: "/logos/brand30.png" },
     { name: "Brand 1", src: "/logos/brand31.png" },
    { name: "Brand 2", src: "/logos/brand32.png" },
    { name: "Brand 3", src: "/logos/brand33.png" },
    { name: "Brand 4", src: "/logos/brand34.png" },
    { name: "Brand 5", src: "/logos/brand35.png" },
    { name: "Brand 6", src: "/logos/brand36.png" },
     { name: "Brand 1", src: "/logos/brand37.png" },
    { name: "Brand 2", src: "/logos/brand38.png" },
    { name: "Brand 3", src: "/logos/brand39.png" },
    { name: "Brand 4", src: "/logos/brand40.png" },
    { name: "Brand 5", src: "/logos/brand41.png" },
    { name: "Brand 6", src: "/logos/brand42.png" },
     { name: "Brand 1", src: "/logos/brand43.png" },
    { name: "Brand 2", src: "/logos/brand44.png" },
    { name: "Brand 3", src: "/logos/brand45.png" },

  ];

  return (
    <section className="relative overflow-hidden py-20 bg-white border-y border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1 & 2: Stat Header & Infinite Animated Marquee of Real Logos */}
        <div className="space-y-8 text-center">
          
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Over <span className="text-blue-600">1500+ businesses</span> utilize us to scale every day.
          </h3>

          {/* Animated Marquee Container using public/logos/ images */}
          <div className="relative w-full overflow-hidden py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex items-center gap-16 whitespace-nowrap min-w-max"
            >
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm h-16 w-36 relative transition-all"
                >
                  <Image 
                    src={brand.src} 
                    alt={brand.name} 
                    fill 
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Part 3: Scale Banner with Moving Border */}
        <div className="w-full">
          <Button
            borderRadius="1.5rem"
            duration={5000}
            className="w-full"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-14 w-full text-center"
            >
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  3000+ businesses are already using{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
                    Chattrbox
                  </span>{" "}
                  to scale their business
                </h2>
                
                <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
                  Boost your insights that help you to grow and scale better.
                </p>
              </div>
            </motion.div>
          </Button>
        </div>

        {/* Part 4: Verified Platform Ratings (AppSumo & G2) - Placed side-by-side using grid-cols-2 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto pt-4">
          
          {/* AppSumo Rating Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Verified Platform</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">AppSumo</h4>
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 pt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500" />
                ))}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">4.89</span>
              <span className="block text-[10px] sm:text-xs text-slate-500 font-medium">Out of 5.0</span>
            </div>
          </div>

          {/* G2 Rating Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Verified Platform</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">G2 Review</h4>
              <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 pt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500" />
                ))}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">4.55</span>
              <span className="block text-[10px] sm:text-xs text-slate-500 font-medium">Out of 5.0</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}