'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { Boxes } from "../../components/ui/background-boxes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121b32] text-slate-300 overflow-hidden border-t border-slate-800/80">
      
      {/* Background Boxes Grid Component */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <Boxes />
      </div>

      {/* Subtle Ambient Glow Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[350px] bg-gradient-to-b from-blue-600/10 via-orange-500/10 to-transparent pointer-events-none blur-3xl z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12 space-y-16">
        
        {/* Main Balanced 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14">
          
          {/* Column 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Decent dark frosted card for the logo */}
            <div className="relative h-12 w-40 bg-slate-400/60 backdrop-blur-md rounded-xl p-2 flex items-center justify-start border border-slate-700/60 shadow-sm">
              <Image 
                src="/Assest/chattrbox-logo.png" 
                alt="Chattrbox Logo" 
                width={130} 
                height={34} 
                className="object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Empowering businesses with Conversational Commerce technologies to automate interactions and convert chats into sales seamlessly.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>Enterprise-grade security & GDPR compliant</span>
            </div>
          </div>

          {/* Column 2: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="#pricing" className="hover:text-orange-400 transition-colors">Pricing Plans</Link></li>
              <li><Link href="#integrations" className="hover:text-orange-400 transition-colors">Integrations</Link></li>
              <li><Link href="#faq" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Legal & Compliance
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-orange-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/gdpr-policy" className="hover:text-orange-400 transition-colors">GDPR Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-orange-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-medium">
              <li>
                <a href="tel:+918799092504" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-200">+91 87990 92504</span>
                </a>
              </li>
              <li>
                <a href="mailto:social@chattrbox.ai" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="font-semibold text-slate-200">social@chattrbox.ai</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs text-slate-400">
                  Indiranagar, Main A road, HAL Stage, Bangalore, India, 560008
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Clean Credits Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Chattrbox. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Designed & developed by Grafizen LLC with</span> 
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> 
            <span>for <strong className="text-slate-300">CHATTRBOX</strong> by metaconnectr</span>
          </p>
        </div>

      </div>
    </footer>
  );
}