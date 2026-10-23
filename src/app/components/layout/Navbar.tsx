'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Actual Logo from public/assets/ */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-32">
            <Image 
              src="/Assest/chattrbox-logo.png" 
              alt="Chattrbox Logo" 
              fill 
              className="object-contain object-left group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </Link>

        {/* Action Buttons using Blue & Orange Theme */}
        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
          >
            Login
          </Link>
          {/* <Link 
            href="/demo" 
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
          >
            Book a Demo
          </Link> */}
        </div>

      </div>
    </header>
  );
}