'use client';

import { motion } from 'framer-motion';
import { 
  Bot, 
  ShoppingBag, 
  Workflow, 
  Store, 
  Mail, 
  FileText, 
  Code2, 
  Package, 
  Sparkles 
} from 'lucide-react';
import { GlareCard } from "../ui/glare-card";

export default function IntegrationsSection() {
  const integrations = [
    {
      title: "AI Bot Reply",
      description: "Integrated OpenAI's advanced language processing technology to understand and respond to user inputs conversationally, providing hyper-personalized interactions at scale.",
      icon: Bot,
      badge: "OpenAI Powered",
      span: "lg:col-span-2", // Wide Bento Card
      darkTheme: true,
      accent: "from-blue-500 via-indigo-500 to-cyan-400"
    },
    {
      title: "WhatsApp Catalogs",
      description: "Effortlessly showcase and sell products directly within WhatsApp, delivering a seamless shopping journey.",
      icon: ShoppingBag,
      badge: "E-Commerce",
      span: "lg:col-span-1",
      darkTheme: false,
      accent: "from-orange-500 to-amber-400"
    },
    {
      title: "WhatsApp Webhook Workflow",
      description: "Connect third-party webhooks like Typeform, Google Forms, WooCommerce, and Shopify instantly to trigger live message flows.",
      icon: Workflow,
      badge: "Automation",
      span: "lg:col-span-1",
      darkTheme: false,
      accent: "from-blue-600 to-indigo-600"
    },
    {
      title: "WooCommerce",
      description: "Seamlessly integrate order notifications to WhatsApp, COD to Prepaid conversions, and automated customer follow-ups.",
      icon: Store,
      badge: "Sync",
      span: "lg:col-span-1",
      darkTheme: false,
      accent: "from-purple-600 to-pink-500"
    },
    {
      title: "SMS, Email & Auto-responder",
      description: "Set up SMS and email sender APIs with MailChimp, Sendinblue, and ActiveCampaign to synchronize collected leads.",
      icon: Mail,
      badge: "Omnichannel",
      span: "lg:col-span-1",
      darkTheme: false,
      accent: "from-teal-500 to-emerald-400"
    },
    {
      title: "Webform & Elementor",
      description: "Capture leads from Google Forms and WP Elementor webhooks directly into your Chattrbox automation pipeline.",
      icon: FileText,
      badge: "Lead Gen",
      span: "lg:col-span-1",
      darkTheme: false,
      accent: "from-orange-600 to-red-500"
    },
    {
      title: "Shopify Integration",
      description: "Advanced Shopify webhooks for instant order updates, payment confirmations, and automated recovery notifications.",
      icon: Package,
      badge: "Retail",
      span: "lg:col-span-2", // Wide Bento Card
      darkTheme: true,
      accent: "from-amber-500 via-orange-500 to-red-500"
    },
    {
      title: "API End-points",
      description: "Robust developer endpoints for custom text messaging, template broadcasting, and subscriber syncing.",
      icon: Code2,
      badge: "Developer",
      span: "lg:col-span-3", // Full-width bottom banner card
      darkTheme: false,
      accent: "from-blue-600 to-cyan-500"
    }
  ];

  return (
    <section id="integrations" className="relative overflow-hidden py-24 lg:py-36 bg-gradient-to-b from-white via-slate-50/80 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/5 to-orange-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Robust Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Chattrbox has <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Smart Integrations</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            The more you are connected to the world, the smarter you become. Chattrbox consists of robust external connection integrations.
          </p>
        </div>

        {/* Asymmetric Bento Grid maintaining exact spans and sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {integrations.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`${item.span} flex`}
              >
                <GlareCard className={`w-full h-full p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden group ${
                  item.darkTheme 
                    ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border border-blue-900/50 shadow-2xl' 
                    : 'bg-white text-slate-900 border border-slate-200/80 shadow-xl'
                }`}>
                  {/* Top Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />

                  <div className="space-y-6 w-full relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all shadow-md ${
                        item.darkTheme 
                          ? 'bg-white/10 text-orange-400 border border-white/10 backdrop-blur-md group-hover:bg-orange-500 group-hover:text-white' 
                          : 'bg-slate-50 text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white'
                      }`}>
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <span className={`text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full ${
                        item.darkTheme 
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${item.darkTheme ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>

                      <p className={`text-sm sm:text-base leading-relaxed font-normal ${item.darkTheme ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlareCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}