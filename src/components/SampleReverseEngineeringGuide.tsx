import React from 'react';
import { Camera, FileText, PackageCheck, Wrench, Shield, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

interface SampleGuideProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

export const SampleReverseEngineeringGuide: React.FC<SampleGuideProps> = ({ onOpenRfq }) => {
  return (
    <section id="reverse-engineering" className="py-16 md:py-24 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Custom Manufacturing & Reverse Engineering
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How We Manufacture Custom Gears From Your Drawings or Samples
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Can't find a replacement gear from the original OEM? Don't have the original machine blueprints? Vijay Engineering Works in Kakinada specializes in manufacturing custom gears whether you have a 2D/3D CAD drawing, a hand sketch, or a broken physical sample.
          </p>
        </div>

        {/* 3 Sourcing Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pathway 1 */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs uppercase text-slate-400">Pathway 01</div>
              <h3 className="text-base font-bold text-white">From Technical Drawings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send your PDF, CAD (DWG/DXF/STEP), or clear dimensional blueprint. We verify feasibility, recommend steel grade & heat treatment, and machine directly to your tolerances.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Module or DP tooth profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Bore, keyway & tolerance verification</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenRfq(undefined, false)}
              className="mt-6 w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded border border-slate-700 transition-colors"
            >
              Submit Drawing File
            </button>
          </div>

          {/* Pathway 2 */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-xl p-6 relative flex flex-col justify-between shadow-lg shadow-amber-500/5">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <PackageCheck className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs uppercase text-amber-400 font-semibold">Pathway 02 · Recommended</div>
              <h3 className="text-base font-bold text-white">From Physical Worn Sample</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Courier or hand-deliver your damaged or worn gear wheel to our Kakinada workshop. Our engineers measure tooth root, pitch, and shaft bore even if teeth are chipped or broken.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tooth geometry reconstruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Hardness & metallurgical matching</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenRfq(undefined, false)}
              className="mt-6 w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded transition-colors"
            >
              Send Physical Sample
            </button>
          </div>

          {/* Pathway 3 */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs uppercase text-slate-400">Pathway 03 · Quick Review</div>
              <h3 className="text-base font-bold text-white">Photos & Critical Dimensions</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Take 3 clear photos of your gear wheel (side view, tooth profile, and bore/keyway) along with outer diameter and teeth count. We can provide an initial feasibility check immediately.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Count number of teeth (Z)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Measure outer diameter with vernier</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenRfq(undefined, false)}
              className="mt-6 w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded border border-slate-700 transition-colors"
            >
              Share Photos & Dimensions
            </button>
          </div>

        </div>

        {/* Step-by-Step Technical Reverse Engineering Workflow */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 font-semibold">
                Workshop Protocol
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                Our 4-Stage Precision Sourcing Process
              </h3>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Vijay Engineering Works, Kakinada, AP
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-bold">
                <span>01</span>
                <span className="h-px bg-slate-800 flex-1" />
              </div>
              <h4 className="text-sm font-bold text-white">Intake & Measurement</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sample or drawing received at our Kakinada workshop. We measure PCD, module, root diameter, and shaft fit.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-bold">
                <span>02</span>
                <span className="h-px bg-slate-800 flex-1" />
              </div>
              <h4 className="text-sm font-bold text-white">Metallurgical Verification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Determine appropriate core steel (EN8/EN19/EN24/20MnCr5/Phosphor Bronze) and required heat treatment (case-hardening or induction).
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-bold">
                <span>03</span>
                <span className="h-px bg-slate-800 flex-1" />
              </div>
              <h4 className="text-sm font-bold text-white">Precision Hobbing & Machining</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blank turning, precision tooth hobbing/shaping, accurate keyway broaching, and deburring.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-500 font-bold">
                <span>04</span>
                <span className="h-px bg-slate-800 flex-1" />
              </div>
              <h4 className="text-sm font-bold text-white">Dimensional QC & Dispatch</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Final runout, backlash, and dimensional inspection. Expedited dispatch across Andhra Pradesh and PAN India.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Courier receiving address: Industrial Area, Kakinada - 533001, Andhra Pradesh
            </div>
            <button
              onClick={() => onOpenRfq()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Start Feasibility Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
