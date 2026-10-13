import React, { useState } from 'react';
import { PAIN_POINTS_DATA } from '../data/gearData';
import { AlertTriangle, Search, RefreshCw, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PainPointsSectionProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<string>('pain-1');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    }
  };

  const selectedItem = PAIN_POINTS_DATA.find((p) => p.id === activeTab) || PAIN_POINTS_DATA[0];

  return (
    <section id="pain-points" className="py-16 md:py-24 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Target Industrial Challenges
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            The Real Cost of Unreliable Gears & Production Interruptions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            In manufacturing, gear wheels are rarely judged by purchase price alone. A broken tooth or misaligned pitch halts valuable production lines, leaves operators idle, and disrupts promised deliveries. Here is how our engineering approach addresses the 4 critical failure points.
          </p>
        </div>

        {/* 4 Pain Points Grid / Tabbed Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Pain Point Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {PAIN_POINTS_DATA.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-slate-800/95 border-amber-500/80 shadow-lg shadow-amber-500/5'
                      : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-slate-400 pt-0.5">
                      {item.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-sm font-bold ${isActive ? 'text-amber-400' : 'text-slate-200'}`}>
                          {item.title}
                        </h3>
                        <div className="shrink-0">{getIcon(item.iconName)}</div>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 italic line-clamp-1">
                        {item.customerConcern}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quick Sourcing Prompt */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Have a worn or sheared gear right now?
              </div>
              <p className="text-slate-400">
                You can bring or courier your physical sample directly to our Kakinada workshop for tooth profile measurement and reverse-engineering.
              </p>
              <button
                onClick={() => onOpenRfq()}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 pt-1"
              >
                <span>Submit Gear Details for Feasibility Check</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Deep-Dive Technical Solution Card with Failure/Inspection Imagery */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-amber-500">
                    PROBLEM #{selectedItem.number}
                  </span>
                  <span className="text-slate-600">/</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Analysis & Remedy
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Vijay Engineering Works
                </div>
              </div>

              {/* Customer Voice */}
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800/80">
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                  The Maintenance Engineer's Concern:
                </div>
                <div className="text-lg md:text-xl font-bold text-white italic">
                  {selectedItem.customerConcern}
                </div>
              </div>

              {/* Real Industrial Gear Image for this Problem */}
              {selectedItem.imageUrl && (
                <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                  <img
                    src={selectedItem.imageUrl}
                    alt={`${selectedItem.title} - Gear failure analysis`}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 sm:h-56 object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-slate-300 font-mono flex items-center justify-between border border-slate-800">
                    <span>
                      {selectedItem.id === 'pain-1'
                        ? 'Inspection of sheared gear teeth and micro-fissure wear'
                        : selectedItem.id === 'pain-2'
                        ? 'Reverse-engineering sample measurements at workstation'
                        : selectedItem.id === 'pain-3'
                        ? 'Fit-for-application tooth profile verification'
                        : 'Precision gear hobbing and quality assurance in workshop'}
                    </span>
                    <span className="text-amber-400 shrink-0 ml-2">Workshop Verification</span>
                  </div>
                </div>
              )}

              {/* Technical Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30 space-y-1.5">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    Root Engineering Cause
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedItem.rootCause}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/30 space-y-1.5">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Our Engineering Remedy
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedItem.engineeringRemedy}
                  </p>
                </div>
              </div>

              {/* Impact on Plant Downtime */}
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Direct Operational Impact
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedItem.impactOnDowntime}
                </p>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Located in Kakinada, AP · Shipping across India
                </div>
                <button
                  onClick={() => onOpenRfq()}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Request Feasibility & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
