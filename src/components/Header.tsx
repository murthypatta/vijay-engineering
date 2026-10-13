import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, FileText } from 'lucide-react';
import { VijayLogo } from './VijayLogo';

interface HeaderProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
  onOpenMarketingHub: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRfq, onOpenMarketingHub, activeSection }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      {/* Industrial Priority Strip */}
      <div className="bg-slate-900 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Kakinada Workshop, Andhra Pradesh
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">
              Manufacturing from Customer Drawings & Physical Samples
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3 h-3 text-amber-500" />
              <span className="hidden md:inline">Emergency Breakdown Turnaround Available</span>
              <span className="md:hidden">Emergency Support</span>
            </span>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <a
                href="tel:+919848028234"
                className="text-amber-400 hover:text-amber-300 font-mono font-medium flex items-center gap-1 transition-colors"
              >
                <Phone className="w-3 h-3" />
                +91 9848028234
              </a>
              <span className="text-slate-600 hidden md:inline">/</span>
              <a
                href="tel:+919701266624"
                className="text-amber-400 hover:text-amber-300 font-mono font-medium hidden md:inline transition-colors"
              >
                +91 9701266624
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand with Official VIJAY Engineering Gear Logo - Prominently Sized */}
        <a href="#hero" className="flex items-center gap-3.5 group py-1">
          <VijayLogo size="lg" className="hover:scale-102 transition-transform" />
          <div className="hidden xl:block border-l border-slate-800 pl-3.5 py-1">
            <div className="text-[11px] font-mono tracking-wider uppercase text-amber-400 font-bold">
              Kakinada Workshop
            </div>
            <div className="text-xs text-slate-300 font-medium">
              Industrial Gear Manufacturing
            </div>
          </div>
        </a>

        {/* Navigation Links - Clean Typography, No Pills */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#pain-points"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Machinery Downtime
          </a>
          <a
            href="#gears"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Gear Catalog
          </a>
          <a
            href="#gear-types-visual"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Types of Gears (Photos)
          </a>
          <a
            href="#reverse-engineering"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Custom Sourcing & Samples
          </a>
          <a
            href="#downtime-calculator"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Downtime Calculator
          </a>
          <a
            href="#facility"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Kakinada Facility
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenMarketingHub}
            title="Access B2B copy, Google Ads, LinkedIn & WhatsApp templates"
            className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Marketing Strategy Kit</span>
            <span className="sm:hidden">Assets</span>
          </button>

          <button
            onClick={() => onOpenRfq()}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-1.5"
          >
            <span>Request Quote</span>
          </button>
        </div>
      </div>
    </header>
  );
};
