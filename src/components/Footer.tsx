import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { VijayLogo } from './VijayLogo';

interface FooterProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
  onOpenMarketingHub: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq, onOpenMarketingHub }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <VijayLogo size="xl" className="hover:scale-101 transition-transform" />

            <p className="text-slate-300 leading-relaxed text-xs">
              Specialist gear wheel manufacturing partner helping industrial customers source precision gear components for engines and machinery to keep equipment operating reliably and reduce unplanned downtime.
            </p>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-[11px] text-slate-400">
              <strong className="text-slate-200">Workshop Location:</strong> Industrial Area, Kakinada - 533001, East Godavari, Andhra Pradesh, India. Custom gears manufactured from drawings or physical samples.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-bold text-xs tracking-wider">
              Gear Wheel Types
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Spur Gear Wheels</a></li>
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Helical & Herringbone</a></li>
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Spiral & Straight Bevel</a></li>
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Worm & Worm Wheels</a></li>
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Internal Planetary Rings</a></li>
              <li><a href="#gears" className="hover:text-amber-400 transition-colors">Engine Timing & Cam Gears</a></li>
            </ul>
          </div>

          {/* Solutions & Sourcing */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-bold text-xs tracking-wider">
              Custom Sourcing
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#reverse-engineering" className="hover:text-amber-400 transition-colors">From Physical Sample</a></li>
              <li><a href="#reverse-engineering" className="hover:text-amber-400 transition-colors">From Technical Drawing</a></li>
              <li><a href="#pain-points" className="hover:text-amber-400 transition-colors">Machinery Downtime Solutions</a></li>
              <li><a href="#downtime-calculator" className="hover:text-amber-400 transition-colors">Downtime Cost Calculator</a></li>
              <li><a href="#facility" className="hover:text-amber-400 transition-colors">Kakinada & AP Logistics</a></li>
              <li>
                <button
                  onClick={onOpenMarketingHub}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>Marketing Strategy Hub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Urgent Line */}
          <div className="space-y-3">
            <div className="font-mono uppercase text-white font-bold text-xs tracking-wider">
              Direct Workshop Desk
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Kakinada, Andhra Pradesh, India</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <a href="tel:+919848028234" className="text-white hover:text-amber-400 font-mono">
                    +91 9848028234
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-5.5">
                  <a href="tel:+919701266624" className="text-white hover:text-amber-400 font-mono">
                    +91 9701266624
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Mon - Sat: 8:30 AM - 7:30 PM</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenRfq(undefined, true)}
                  className="w-full py-2 bg-red-950/60 hover:bg-red-900/60 border border-red-800 text-red-300 font-bold rounded text-xs transition-colors text-center"
                >
                  Emergency Breakdown Help
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} Vijay Engineering Works. All rights reserved. Precision gear manufacturing in Kakinada, Andhra Pradesh.
          </div>
          <div className="text-slate-400 text-center md:text-right max-w-lg">
            Engineering feasibility, material grade, and delivery timelines are verified upon review of technical drawings or physical samples.
          </div>
        </div>

      </div>
    </footer>
  );
};
