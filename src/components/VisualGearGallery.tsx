import React, { useState } from 'react';
import bevelHelicalImage from '../assets/images/types_bevel_helical_1791891645639.jpg';
import helicalGearsImage from '../assets/images/helical_double_gears_1791894777150.jpg';
import spiralBevelImage from '../assets/images/spiral_bevel_gears_1791895892612.jpg';
import bronzeWormImage from '../assets/images/bronze_worm_gear_1791891645632.jpg';
import planetaryGearImage from '../assets/images/internal_planetary_gear_1791896438723.jpg';
import brokenGearImage from '../assets/images/broken_gear_inspection_1791891645384.jpg';
import { Cog, CheckCircle2, ArrowRight, Layers, Cpu, Maximize2 } from 'lucide-react';

interface GearVisualItem {
  id: string;
  name: string;
  category: string;
  shaftOrientation: string;
  toothGeometry: string;
  imageUrl: string;
  caption: string;
  primaryAdvantage: string;
  manufacturingHighlight: string;
  commonIn: string;
}

const VISUAL_GEAR_TYPES: GearVisualItem[] = [
  {
    id: 'spur',
    name: 'Spur Gear Wheels & Pinions',
    category: 'Cylindrical Gears',
    shaftOrientation: 'Parallel Shafts',
    toothGeometry: 'Straight teeth parallel to axis of rotation (Standard 20° involute profile)',
    imageUrl: bevelHelicalImage,
    caption: 'Precision hobbed spur gear blanks with cut teeth and central keyway bore',
    primaryAdvantage: 'High 98-99% mechanical efficiency with zero axial thrust forces.',
    manufacturingHighlight: 'Hobbed from EN8, EN19, or 20MnCr5 with induction hardened tooth flanks.',
    commonIn: 'Rice mills, factory conveyors, tractor gearboxes, and industrial pumps.'
  },
  {
    id: 'helical',
    name: 'Helical & Double Helical Gears',
    category: 'Continuous Meshing Gears',
    shaftOrientation: 'Parallel Shafts',
    toothGeometry: 'Teeth inclined at helix angle (8° to 45°) to axis of rotation',
    imageUrl: helicalGearsImage,
    caption: 'Precision alloy steel helical and double helical (herringbone) gear wheels',
    primaryAdvantage: 'Gradual tooth engagement dramatically lowers noise and shock in continuous 24/7 service.',
    manufacturingHighlight: 'Manufactured as left-hand or right-hand pairs; crowning to prevent edge loading.',
    commonIn: 'Paper mill dryers, sugar mill reduction boxes, marine propulsion auxiliaries.'
  },
  {
    id: 'bevel',
    name: 'Spiral & Straight Bevel Gears',
    category: 'Conical Gears',
    shaftOrientation: 'Intersecting Shafts (Typically 90°)',
    toothGeometry: 'Conical pitch surface with straight or curved spiral teeth',
    imageUrl: spiralBevelImage,
    caption: 'Precision-machined spiral bevel gear and pinion drive assembly',
    primaryAdvantage: 'Transmits smooth, high torque around corners without extra idler shafts.',
    manufacturingHighlight: 'Lapped and matched as paired sets for proper mounting distance.',
    commonIn: 'Marine rudder drives, cooling towers, rotary tillers, and overhead cranes.'
  },
  {
    id: 'worm',
    name: 'Phosphor Bronze Worm Wheel & Steel Worm',
    category: 'Screw & Wheel Reduction',
    shaftOrientation: 'Non-intersecting Perpendicular Shafts (90°)',
    toothGeometry: 'Concave globoidal or helical teeth enveloping a hardened steel single or multi-start thread screw',
    imageUrl: bronzeWormImage,
    caption: 'Machined phosphor bronze wheel meshed with case-carburized alloy steel worm shaft',
    primaryAdvantage: 'Massive single-stage speed reduction (up to 70:1) with inherent anti-backdrive safety.',
    manufacturingHighlight: 'Phosphor bronze (PB2) wheel prevents galling against hardened steel worm threads.',
    commonIn: 'Kakinada port winches, boat hoists, industrial agitators, and sluice gates.'
  },
  {
    id: 'internal',
    name: 'Internal Ring & Planetary Gears',
    category: 'Compact Epicyclic Gears',
    shaftOrientation: 'Co-Axial Shafts',
    toothGeometry: 'Involute teeth shaped on inside diameter of an alloy ring blank',
    imageUrl: planetaryGearImage,
    caption: 'Precision-machined internal ring gear with planetary pinions and sun gear assembly',
    primaryAdvantage: 'Shares heavy torque across multiple planet pinions in a compact outer diameter.',
    manufacturingHighlight: 'Internal slotting and gear shaping with tight pitch run-out control.',
    commonIn: 'Excavator slewing gearboxes, port crane swing drives, and heavy hub reducers.'
  },
  {
    id: 'broken_inspection',
    name: 'Worn & Sheared Tooth Inspection',
    category: 'Reverse Engineering & Quality Control',
    shaftOrientation: 'Inspection & Metrology',
    toothGeometry: 'Tooth micrometer measurement, pitch profile reconstruction & metallurgical assay',
    imageUrl: brokenGearImage,
    caption: 'Precision metrology and root thickness measurement on worn gear sample',
    primaryAdvantage: 'Allows exact replication of gear wheels even when original CAD drawings are lost.',
    manufacturingHighlight: 'We calculate module, pitch, and core hardness directly from customer sample.',
    commonIn: 'Breakdown replacements for discontinued engines and imported machinery.'
  }
];

interface VisualGalleryProps {
  onOpenRfq: (initialGear?: string, urgent?: boolean) => void;
}

export const VisualGearGallery: React.FC<VisualGalleryProps> = ({ onOpenRfq }) => {
  const [selectedGear, setSelectedGear] = useState<GearVisualItem>(VISUAL_GEAR_TYPES[0]);

  return (
    <section id="gear-types-visual" className="py-16 md:py-24 bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Visual Anatomy & Engineering Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Types of Industrial Gear Wheels We Manufacture
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Examine our gear profiles, shaft orientations, and metallurgical applications. Every gear wheel manufactured at Vijay Engineering Works is cut to exact involute specifications to ensure maximum load transfer and minimal tooth wear.
          </p>
        </div>

        {/* Master Showcase: Split Interactive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Select Gear Type to Inspect Details:
            </div>
            
            {VISUAL_GEAR_TYPES.map((gear) => {
              const isSelected = selectedGear.id === gear.id;
              return (
                <button
                  key={gear.id}
                  onClick={() => setSelectedGear(gear)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-800 border-amber-500 shadow-md shadow-amber-500/5'
                      : 'bg-slate-950/70 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}>
                      <Cog className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs font-bold truncate ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                        {gear.name}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate font-mono">
                        {gear.shaftOrientation}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {gear.category.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Visual Inspection Card */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl space-y-0">
            
            {/* Main Featured Gear Photo */}
            <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden group">
              <img
                src={selectedGear.imageUrl}
                alt={selectedGear.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-800">
                {selectedGear.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <div className="bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded text-[11px] text-slate-200 font-mono border border-slate-800">
                  {selectedGear.caption}
                </div>
              </div>
            </div>

            {/* Spec Details & Technical Anatomy */}
            <div className="p-6 md:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedGear.name}</h3>
                  <div className="text-xs text-amber-400 font-mono mt-0.5">
                    Shaft Orientation: {selectedGear.shaftOrientation}
                  </div>
                </div>
                <button
                  onClick={() => onOpenRfq(selectedGear.id === 'broken_inspection' ? undefined : selectedGear.id)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-all shrink-0 flex items-center gap-1.5"
                >
                  <span>Quote this Gear Type</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800/80 space-y-1">
                  <span className="font-mono text-amber-400 uppercase text-[11px] font-bold block">
                    Tooth Geometry & Involute Profile:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {selectedGear.toothGeometry}
                  </p>
                </div>

                <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800/80 space-y-1">
                  <span className="font-mono text-amber-400 uppercase text-[11px] font-bold block">
                    Operational Advantage:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {selectedGear.primaryAdvantage}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-900/60 rounded border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Machining & Metallurgy: </strong>
                    <span className="text-slate-300">{selectedGear.manufacturingHighlight}</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/60 rounded border border-slate-800 flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">Key Regional Applications: </strong>
                    <span className="text-slate-300">{selectedGear.commonIn}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Multi-Image Industrial Montage Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative rounded-lg overflow-hidden border border-slate-800 h-40 bg-slate-950 group">
            <img
              src={helicalGearsImage}
              alt="Machined helical and double helical herringbone gear wheels"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
              Helical & Double Helical Gears
            </span>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-slate-800 h-40 bg-slate-950 group">
            <img
              src={bronzeWormImage}
              alt="Phosphor bronze worm wheel and hardened steel worm screw"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
              Bronze Worm & Steel Worm Shaft
            </span>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-slate-800 h-40 bg-slate-950 group">
            <img
              src={brokenGearImage}
              alt="Technician measuring damaged gear teeth with micrometer"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
              Tooth Geometry Reverse-Engineering
            </span>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-slate-800 h-40 bg-slate-950 group">
            <img
              src={bevelHelicalImage}
              alt="Precision spiral bevel gear and internal ring gears"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[11px] font-mono text-slate-200 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
              Spiral Bevel & Ring Gears
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
