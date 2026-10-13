import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPointsSection } from './components/PainPointsSection';
import { GearCatalogSection } from './components/GearCatalogSection';
import { VisualGearGallery } from './components/VisualGearGallery';
import { SampleReverseEngineeringGuide } from './components/SampleReverseEngineeringGuide';
import { DowntimeCalculator } from './components/DowntimeCalculator';
import { KakinadaFacilitySection } from './components/KakinadaFacilitySection';
import { Footer } from './components/Footer';
import { RfqModal } from './components/RfqModal';
import { MarketingAssetsHub } from './components/MarketingAssetsHub';
import { GearCategory } from './types';
import { MessageSquare, Phone, Wrench, FileText } from 'lucide-react';

export default function App() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isMarketingHubOpen, setIsMarketingHubOpen] = useState(false);
  const [selectedGear, setSelectedGear] = useState<GearCategory>('spur');
  const [isUrgent, setIsUrgent] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenRfq = (gearId?: string, urgent: boolean = false) => {
    if (gearId) {
      setSelectedGear(gearId as GearCategory);
    }
    setIsUrgent(urgent);
    setIsRfqOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header */}
      <Header
        onOpenRfq={handleOpenRfq}
        onOpenMarketingHub={() => setIsMarketingHubOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Recommended Hero Section */}
        <Hero
          onOpenRfq={handleOpenRfq}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Target Customer Pain Points (Breakdowns, Sourcing, Repairs, Supplier Uncertainty) */}
        <PainPointsSection
          onOpenRfq={handleOpenRfq}
        />

        {/* 3. Comprehensive Gear Wheel Catalog & Technical Capabilities */}
        <GearCatalogSection
          onOpenRfq={handleOpenRfq}
        />

        {/* 4. Visual Anatomy & Gear Types Photo Showcase */}
        <VisualGearGallery
          onOpenRfq={handleOpenRfq}
        />

        {/* 5. Custom Manufacturing & Reverse Engineering Workflow (Drawings & Worn Samples) */}
        <SampleReverseEngineeringGuide
          onOpenRfq={handleOpenRfq}
        />

        {/* 5. Unplanned Downtime Cost Calculator */}
        <DowntimeCalculator
          onOpenRfq={handleOpenRfq}
        />

        {/* 6. Kakinada Workshop Facility & Regional Industrial Coverage */}
        <KakinadaFacilitySection
          onOpenRfq={handleOpenRfq}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenRfq={handleOpenRfq}
        onOpenMarketingHub={() => setIsMarketingHubOpen(true)}
      />

      {/* Interactive Quotation & Feasibility Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialGear={selectedGear}
        initialUrgent={isUrgent}
      />

      {/* Marketing Strategy & Advertising Hub Modal */}
      <MarketingAssetsHub
        isOpen={isMarketingHubOpen}
        onClose={() => setIsMarketingHubOpen(false)}
      />

      {/* Quick Floating Action Bar for Industrial Buyers (Mobile & Desktop) */}
      <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2 no-print">
        <a
          href="https://wa.me/919848028234?text=Hello%20Vijay%20Engineering%20Works,%20I%20have%20an%20inquiry%20regarding%20gear%20manufacturing%20in%20Kakinada."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/40 hover:scale-105 transition-all flex items-center justify-center"
          title="Direct WhatsApp to Kakinada Workshop"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenRfq(undefined, true)}
          className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-full shadow-lg shadow-red-900/40 hover:scale-105 transition-all flex items-center gap-1.5"
          title="Emergency Breakdown Priority"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>Breakdown Hotline</span>
        </button>
      </div>

    </div>
  );
}
