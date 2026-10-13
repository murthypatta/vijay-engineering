import React, { useState } from 'react';
import { Calculator, AlertTriangle, ArrowRight, IndianRupee, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

interface DowntimeCalculatorProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

interface PresetTemplate {
  name: string;
  hourlyLoss: number;
  avgHoursPerBreakdown: number;
  annualFailuresWithCheapGears: number;
  gearCostEstimate: number;
  notes: string;
}

const PRESETS: PresetTemplate[] = [
  {
    name: 'Godavari Rice Mill (De-husking & Polishing)',
    hourlyLoss: 12000,
    avgHoursPerBreakdown: 18,
    annualFailuresWithCheapGears: 3,
    gearCostEstimate: 16000,
    notes: 'Seasonal 24/7 milling. Every hour stopped delays paddy trucks and causes un-milled stock backlog.'
  },
  {
    name: 'Marine Engine / Trawler Winch (Kakinada Port)',
    hourlyLoss: 25000,
    avgHoursPerBreakdown: 36,
    annualFailuresWithCheapGears: 2,
    gearCostEstimate: 28000,
    notes: 'Vessel stuck at jetty. Missed tidal departure windows and spoiled catch refrigeration risks.'
  },
  {
    name: 'Sugar Mill Crusher Drive (Samalkot Belt)',
    hourlyLoss: 45000,
    avgHoursPerBreakdown: 24,
    annualFailuresWithCheapGears: 2,
    gearCostEstimate: 45000,
    notes: 'Cane crushing season downtime causes sugar inversion losses in harvested cane.'
  },
  {
    name: 'Paper Mill Continuous Drive (Rajahmundry Belt)',
    hourlyLoss: 60000,
    avgHoursPerBreakdown: 12,
    annualFailuresWithCheapGears: 2,
    gearCostEstimate: 35000,
    notes: 'Web breaks and dryer line stoppage spoil pulp stock and demand extensive re-threading labor.'
  }
];

export const DowntimeCalculator: React.FC<DowntimeCalculatorProps> = ({ onOpenRfq }) => {
  const [hourlyLoss, setHourlyLoss] = useState<number>(15000);
  const [breakdownHours, setBreakdownHours] = useState<number>(20);
  const [annualBreakdowns, setAnnualBreakdowns] = useState<number>(2);
  const [activePreset, setActivePreset] = useState<string>('Custom');

  // Math
  const singleIncidentLoss = hourlyLoss * breakdownHours;
  const annualTotalLoss = singleIncidentLoss * annualBreakdowns;

  const handleApplyPreset = (preset: PresetTemplate) => {
    setActivePreset(preset.name);
    setHourlyLoss(preset.hourlyLoss);
    setBreakdownHours(preset.avgHoursPerBreakdown);
    setAnnualBreakdowns(preset.annualFailuresWithCheapGears);
  };

  return (
    <section id="downtime-calculator" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Operational Cost Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Calculate the Real Cost of Unplanned Machinery Downtime
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            A poorly machined or sub-spec gear might save a few thousand rupees on the initial invoice, but it costs multiples of that amount when teeth shear and your production line sits idle. Use this calculator to compare line stoppage costs against precision engineering.
          </p>
        </div>

        {/* Industry Presets */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
            Load Regional Industrial Scenario:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => handleApplyPreset(preset)}
                className={`p-3 text-left rounded-lg border text-xs transition-all ${
                  activePreset === preset.name
                    ? 'bg-amber-500/10 border-amber-500/60 text-white shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-slate-200">{preset.name}</div>
                <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                  ₹{preset.hourlyLoss.toLocaleString('en-IN')}/hr line cost
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-6">
            
            {/* Control 1: Hourly Downtime Cost */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase text-slate-300">
                  Estimated Hourly Cost of Stoppage
                </label>
                <span className="font-mono text-sm font-bold text-amber-400">
                  ₹{hourlyLoss.toLocaleString('en-IN')} / hour
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="100000"
                step="1000"
                value={hourlyLoss}
                onChange={(e) => {
                  setHourlyLoss(Number(e.target.value));
                  setActivePreset('Custom');
                }}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Small Machine (₹3,000/hr)</span>
                <span>Heavy Plant (₹1,00,000/hr)</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Includes idle operator wages, lost production throughput, power overhead, and late delivery penalties.
              </p>
            </div>

            {/* Control 2: Breakdown Duration */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase text-slate-300">
                  Average Stoppage Duration per Failure
                </label>
                <span className="font-mono text-sm font-bold text-amber-400">
                  {breakdownHours} Hours
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="96"
                step="2"
                value={breakdownHours}
                onChange={(e) => {
                  setBreakdownHours(Number(e.target.value));
                  setActivePreset('Custom');
                }}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>4 Hours (Minor fix)</span>
                <span>96 Hours (Waiting for parts)</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Time required to disassemble gearbox, source/modify replacement gear, align shafts, and restart production.
              </p>
            </div>

            {/* Control 3: Failures per year */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase text-slate-300">
                  Unplanned Breakdowns with Inferior Gears
                </label>
                <span className="font-mono text-sm font-bold text-amber-400">
                  {annualBreakdowns} {annualBreakdowns === 1 ? 'time / year' : 'times / year'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={annualBreakdowns}
                onChange={(e) => {
                  setAnnualBreakdowns(Number(e.target.value));
                  setActivePreset('Custom');
                }}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1 incident</span>
                <span>6 incidents (Chronic failure)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase text-slate-400">Financial Impact Model</span>
              <span className="text-xs text-amber-400 font-mono">Downtime vs. Precision</span>
            </div>

            {/* Big Impact Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">
                  Cost per Breakdown Event
                </div>
                <div className="text-2xl font-black text-red-400 font-mono">
                  ₹{singleIncidentLoss.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400">
                  For {breakdownHours} hours of stopped production
                </div>
              </div>

              <div className="p-4 bg-slate-950 border border-red-900/40 rounded-lg space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">
                  Annual Downtime Waste
                </div>
                <div className="text-2xl font-black text-red-400 font-mono">
                  ₹{annualTotalLoss.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400">
                  At {annualBreakdowns} failures per year
                </div>
              </div>
            </div>

            {/* Strategic Takeaway */}
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                The Engineering Reality:
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                The single breakdown loss alone (<strong>₹{singleIncidentLoss.toLocaleString('en-IN')}</strong>) is typically 
                <strong className="text-amber-400"> 5x to 20x higher</strong> than the cost of a precision, properly heat-treated gear wheel from Vijay Engineering Works.
              </p>
              <div className="pt-1 text-[11px] text-slate-400">
                Fit-for-application metallurgy and exact involute tooth profiling ensure that replacement gears mesh smoothly and hold their hardness through peak operational seasons.
              </div>
            </div>

            {/* Next Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Avoid the next breakdown before it occurs.
              </div>
              <button
                onClick={() => onOpenRfq()}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Gear Quote & Feasibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
