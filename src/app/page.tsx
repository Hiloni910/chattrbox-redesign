import Navbar from "./components/layout/Navbar";
import BusinessStatsSection from "./components/section/BusinessStats";
import ConversationsSection from "./components/section/ConversationsSection";
import EssentialValuesSection from "./components/section/EssentialValuesSection";
import FaqSection from "./components/section/FaqSection";
import HeroSection from "./components/section/HeroSection";
import HowToGetStartedSection from "./components/section/HowToGetStarted";
import IntegrationsSection from "./components/section/IntegrationsSection";
import LifetimePlanSection from "./components/section/LifetimePlan";
import MissionSection from "./components/section/MissionSection";
import PricingSection from "./components/section/PricingSection";
import Footer from "./components/section/Footer";
import PatternSection from './components/section/Pattern';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <HeroSection />
      <LifetimePlanSection/>
      <BusinessStatsSection/>
      <PricingSection/>
      <HowToGetStartedSection/>
      <MissionSection/>
      <EssentialValuesSection/>
      <IntegrationsSection/>
      <FaqSection/>
      <PatternSection/>
      <ConversationsSection/>
      <Footer/>
    </main>
  );
}