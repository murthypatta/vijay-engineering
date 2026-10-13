import React from 'react';
import { MapPin, Navigation, Truck, Phone, Mail, Clock, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { REGIONAL_INDUSTRIES } from '../data/gearData';

interface FacilityProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

export const KakinadaFacilitySection: React.FC<FacilityProps> = ({ onOpenRfq }) => {
  return (
    <section id="facility" className="py-16 md:py-24 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Workshop & Regional Presence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Vijay Engineering Works · Kakinada, Andhra Pradesh
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Strategically located in Kakinada to support regional agricultural processing plants, maritime vessels, sugar mills, paper factories, and manufacturing facilities across Andhra Pradesh and India.
          </p>
        </div>

        {/* 2-Column Facility & Logistics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Workshop Details & Logistics Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Workshop & Dispatch Hub</h3>
                <div className="text-xs text-slate-400 font-mono">Kakinada, Andhra Pradesh</div>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Physical Workshop Address:</div>
                  <div className="text-slate-300 mt-0.5">
                    Vijay Engineering Works<br />
                    Industrial Area / Main Workshop<br />
                    Kakinada - 533001, East Godavari District, Andhra Pradesh, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Sample Receiving & Pan-India Dispatch:</div>
                  <div className="text-slate-300 mt-0.5">
                    We accept couriered broken/worn gear samples via DTDC, Professional, VRL, and APSRTC cargo. Finished gears dispatched nationwide.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Workshop Operating Hours:</div>
                  <div className="text-slate-300 mt-0.5">
                    Monday – Saturday: 8:30 AM – 7:30 PM IST<br />
                    <span className="text-amber-400">Emergency breakdown machining available on request.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Technical Consultation & Sourcing Hotline:</div>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5 font-mono font-bold">
                    <a href="tel:+919848028234" className="text-amber-400 hover:underline">
                      +91 9848028234
                    </a>
                    <span className="text-slate-600">/</span>
                    <a href="tel:+919701266624" className="text-amber-400 hover:underline">
                      +91 9701266624
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onOpenRfq()}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all text-center"
              >
                Request Quotation / Send Sample
              </button>
            </div>
          </div>

          {/* Regional Industrial Coverage Map & Sectors */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white">
                  Key Industrial Belts Served Across South India
                </h3>
                <span className="text-xs font-mono text-slate-400">AP & National Corridors</span>
              </div>

              <div className="space-y-4">
                {REGIONAL_INDUSTRIES.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-900/80 border border-slate-800/80 rounded-lg hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="font-bold text-sm text-slate-200">
                        {ind.name}
                      </div>
                      <div className="text-xs font-mono text-amber-400">
                        {ind.belt}
                      </div>
                    </div>
                    <div className="text-xs text-slate-300">
                      <span className="text-slate-400">Gear types:</span> {ind.gearUsage}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 italic">
                      {ind.solutionNote}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 flex items-center justify-between">
                <span>Also serving OEMs and machine builders across Visakhapatnam, Vijayawada, Chennai, Bangalore & Hyderabad.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
