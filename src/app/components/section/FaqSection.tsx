'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "Why telegram chatbot is important?",
      answer: "It is now the most popular messaging platform next to Facebook Messenger, Instagram DM, and WhatsApp. However, all these Facebook platforms have limitations to broadcasting messages, such as a 24-hour rule that prohibits bulk sending. Telegram does not have that limitation. That is why Telegram is better suited for broadcasting. Let's not limit our responses to email marketing; we should also build alternative lists to broadcast using Telegram. The open rate in Telegram is more than 80%."
    },
    {
      question: "Is there any limit to how many bulk messages you send to telegram users?",
      answer: "No, there aren't any restrictions. You can send as many messages as you want at any moment. Unlike WhatsApp, there is no 24-hour rule. That is the power of Telegram Bots. Subscribers can, of course, unsubscribe or block your bot at any moment."
    },
    {
      question: "Is it possible to import subscribers from another provider into telegram bot?",
      answer: "Yes, you may use Chattrbox to import your current bot subscriber list from other chat platforms. All you have to do is get your existing subscribers' Chat ID, then import it into Chattrbox as a CSV file."
    },
    {
      question: "Is a new phone number required for the WhatsApp Business platform?",
      answer: "You must completely transfer an existing number to the business platform if you wish to use it in the WhatsApp customer or business app. You won't be able to access the WhatsApp customer or business app after the number is moved. For further information, you can migrate your app phone number to the Business Platform."
    },
    {
      question: "Does WhatsApp charge for sending messages?",
      answer: "Facebook does indeed have a messaging fee structure. Businesses using the WhatsApp Business Platform are charged per conversation. Each WhatsApp Business account will receive 1,000 free conversations per month. The detailed pricing plans are available directly on WhatsApp Pricing."
    },
    {
      question: "Who is going to oversee WhatsApp Business Platform?",
      answer: "You must control your business accounts, WhatsApp business account, phone number, and payment mechanism in order to use WhatsApp. Nothing is under our control—you'll be in complete charge of everything."
    },
    {
      question: "Do I need business verification and approval from WhatsApp?",
      answer: "No, the business and the app's approval are not strictly required initially. Business verification is necessary, however, if you wish to officially display your phone number and the name of your company. Otherwise, no verification is required to start, and app approval is not necessary."
    }
  ];

  // Distinct theme badge styles rotating by index
  const badgeStyles = [
    "bg-blue-50 text-blue-600 border border-blue-200/60",
    "bg-orange-50 text-orange-600 border border-orange-200/60",
    "bg-indigo-50 text-indigo-600 border border-indigo-200/60",
    "bg-purple-50 text-purple-600 border border-purple-200/60",
    "bg-cyan-50 text-cyan-600 border border-cyan-200/60",
    "bg-amber-50 text-amber-600 border border-amber-200/60",
    "bg-rose-50 text-rose-600 border border-rose-200/60"
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/80 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/5 to-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-left">
            
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Everything you need to know about Telegram & WhatsApp automation, billing, and platform rules answered clearly.
            </p>

            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Still have questions?</h4>
                  <span className="text-xs text-slate-400">Our support team is online 24/7</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="w-full flex items-center justify-center py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs transition-all shadow-lg shadow-orange-500/30"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right Accordion List Column */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-blue-400 shadow-2xl shadow-blue-950/5 ring-2 ring-blue-500/10' 
                      : 'bg-white/90 border-slate-200/80 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
                      {/* Dynamically styled badge per item */}
                      <span className={`text-xs font-black px-3 py-1.5 rounded-xl transition-colors ${
                        isOpen ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 border-orange-500' : badgeStyles[idx % badgeStyles.length]
                      }`}>
                        0{idx + 1}
                      </span>
                      {faq.question}
                    </span>
                    
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-slate-900 text-white rotate-180 shadow-md' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}