import React, { useState } from 'react';
import { GEAR_CATALOG } from '../data/gearData';
import { GearTypeInfo, GearCategory } from '../types';
import { ArrowRight, Cog, Check, Info, FileSpreadsheet, Eye, ZoomIn } from 'lucide-react';

interface GearCatalogSectionProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

export const GearCatalogSection: React.FC<GearCatalogSectionProps> = ({ onOpenRfq }) => {
  const [selectedCategory, setSelectedCategory] = useState<GearCategory | 'all'>('all');
  const [activeGearModal, setActiveGearModal] = useState<GearTypeInfo | null>(null);

  const filteredGears = selectedCategory === 'all'
    ? GEAR_CATALOG
    : GEAR_CATALOG.filter((g) => g.id === selectedCategory);

  return (
    <section id="gears" className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Manufacturing Capabilities & Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Gear Wheels for Engines, Industrial Machinery & Equipment
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Precision hobbed, slotted, and ground to your exact specifications. Every gear is manufactured from tested carbon and alloy steels with controlled heat treatment to ensure long operational life.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onOpenRfq()}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shadow-md flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Request Gear Quote</span>
            </button>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-thin">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Gear Types ({GEAR_CATALOG.length})
          </button>

          {GEAR_CATALOG.map((gear) => (
            <button
              key={gear.id}
              onClick={() => setSelectedCategory(gear.id)}
              className={`px-3.5 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedCategory === gear.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {gear.name.split(' ')[0]} Gears
            </button>
          ))}
        </div>

        {/* Gear Cards Grid with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGears.map((gear) => (
            <div
              key={gear.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group hover:shadow-xl"
            >
              {/* Photo Thumbnail */}
              {gear.imageUrl && (
                <div
                  className="relative h-44 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveGearModal(gear)}
                >
                  <img
                    src={gear.imageUrl}
                    alt={gear.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-amber-400 border border-slate-800">
                    {gear.name.split(' ')[0]}
                  </div>

                  <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-[11px] text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    <ZoomIn className="w-3 h-3 text-amber-400" />
                    <span>Inspect</span>
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {gear.name}
                    </h3>
                    <div className="text-right text-[11px] font-mono text-slate-400 shrink-0">
                      Drawing / Sample
                    </div>
                  </div>

                  <div className="text-xs text-amber-500/90 font-mono mb-2.5">
                    {gear.machineryType}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {gear.description}
                  </p>

                  {/* Sourcing badges & Materials */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-800/80 text-xs">
                    <div>
                      <span className="text-slate-400 font-mono text-[11px] uppercase block mb-1">
                        Common Applications:
                      </span>
                      <ul className="space-y-1">
                        {gear.commonApplications.slice(0, 2).map((app, i) => (
                          <li key={i} className="text-slate-300 flex items-center gap-1.5 text-xs truncate">
                            <Check className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-slate-400 font-mono text-[11px] uppercase block mb-1">
                        Machining Range:
                      </span>
                      <div className="text-slate-300 text-xs truncate font-mono">
                        {gear.keySpecifications[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveGearModal(gear)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Specifications</span>
                  </button>

                  <button
                    onClick={() => onOpenRfq(gear.id)}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all flex items-center gap-1"
                  >
                    <span>Quote Gear</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Gear Machining Notice */}
        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Need a Non-Standard Gear Wheel or Missing Blueprint?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Vijay Engineering Works manufactures custom gears from customer drawings, physically worn samples, or exact machine shaft dimensions at our workshop in Kakinada, Andhra Pradesh.
            </p>
          </div>
          <button
            onClick={() => onOpenRfq(undefined, false)}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded transition-all shrink-0"
          >
            Submit Drawing / Sample
          </button>
        </div>

      </div>

      {/* Technical Spec & Image Modal */}
      {activeGearModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-amber-400">Engineering Profile</div>
                <h3 className="text-lg font-bold text-white">{activeGearModal.name}</h3>
                <div className="text-xs text-slate-400">{activeGearModal.machineryType}</div>
              </div>
              <button
                onClick={() => setActiveGearModal(null)}
                className="text-slate-400 hover:text-white text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* High-Resolution Modal Image */}
            {activeGearModal.imageUrl && (
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={activeGearModal.imageUrl}
                  alt={activeGearModal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover object-center"
                />
                {activeGearModal.imageCaption && (
                  <div className="p-2 bg-slate-950/90 text-[11px] text-slate-400 font-mono border-t border-slate-800">
                    {activeGearModal.imageCaption}
                  </div>
                )}
              </div>
            )}

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeGearModal.description}
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Supported Materials & Heat Treatments:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeGearModal.materialsSupported.map((m, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs border border-slate-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Key Machining Capabilities:
                </span>
                <ul className="space-y-1 text-slate-300">
                  {activeGearModal.keySpecifications.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-amber-500">·</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-red-950/20 border border-red-900/30 rounded">
                <span className="font-bold text-red-400 uppercase tracking-wider block mb-0.5 text-[11px]">
                  Typical Failure Mode We Eliminate:
                </span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {activeGearModal.typicalFailureMode}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setActiveGearModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const gearId = activeGearModal.id;
                  setActiveGearModal(null);
                  onOpenRfq(gearId);
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded"
              >
                Request Quote for this Gear
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
