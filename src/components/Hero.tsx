import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

interface HeroProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq, onScrollToSection }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-grid-pattern border-b border-slate-800">
      {/* Background ambient industrial lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Left Hero Column */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Clean Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>VIJAY ENGINEERING WORKS</span>
              <span className="text-slate-600">·</span>
              <span>GEAR MANUFACTURING</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">KAKINADA, ANDHRA PRADESH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Reliable Gear Wheels for Engines and Industrial Machinery
            </h1>

            {/* Core Message & Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Looking for a dependable solution for your gear manufacturing or replacement requirements? 
              Vijay Engineering Works specializes in gear wheels for engines and machinery, with a focus on understanding your technical requirements and manufacturing needs.
            </p>

            {/* Supporting Positioning Statement */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 border-l-4 border-l-amber-500">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Engineering Commitment
              </div>
              <p className="text-sm text-slate-200 font-medium">
                “Precision Gear Wheels. Reliable Engineering. Less Unplanned Downtime.”
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Custom manufactured from your engineering drawings or physical worn/broken samples at our Kakinada facility.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => onOpenRfq()}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-md transition-all shadow-lg shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Request a Gear Manufacturing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollToSection('reverse-engineering')}
                className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm rounded-md border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Discuss Your Gear Requirements</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Micro-Trust Signals */}
            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Custom gears from drawings or physical samples</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Fit-for-application metallurgy & heat treatment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Rapid turnaround for stopped machinery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Real Machined Gears & Customer Outcomes */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Industrial Gear Photograph */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
              <img
                src="/assets/images/gear_hero_assembly_1791891644858.jpg"
                alt="Precision machined steel gear wheels and blueprints on engineering workbench at Vijay Engineering Works"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <div className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700 text-slate-200 font-mono text-[11px]">
                  Precision Gear Hobbing & Profile Inspection
                </div>
                <div className="bg-amber-500/90 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase font-mono">
                  Kakinada Workshop
                </div>
              </div>
            </div>

            {/* Strategic 3 Outcomes Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl relative space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Three Direct Customer Outcomes</div>
                <div className="text-xs text-amber-400 font-mono">Reliability Focus</div>
              </div>

              {/* The 3 Outcomes */}
              <div className="divide-y divide-slate-800/80 text-xs">
                <div className="py-2.5 flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <h3 className="font-bold text-slate-100">Find the Gear You Need</h3>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      Custom manufacturing for discontinued OEM gears or imported machinery.
                    </p>
                  </div>
                </div>

                <div className="py-2.5 flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <h3 className="font-bold text-slate-100">Get the Specifications Right</h3>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      Exact tooth profile, module, pressure angle, and fit-for-application metallurgy.
                    </p>
                  </div>
                </div>

                <div className="py-2.5 flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <h3 className="font-bold text-slate-100">Keep Your Machinery Running</h3>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      Avoid repeated tooth shears and cut costly unplanned line stoppages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Breakdown Callout Box */}
              <div className="pt-2">
                <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/30 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Production Line Currently Stopped?
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Emergency breakdown priority machining available.
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenRfq(undefined, true)}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded transition-colors shrink-0"
                  >
                    Urgent RFQ
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
