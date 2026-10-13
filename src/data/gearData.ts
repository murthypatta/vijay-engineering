import { GearTypeInfo, PainPointItem } from '../types';

export const GEAR_CATALOG: GearTypeInfo[] = [
  {
    id: 'spur',
    name: 'Spur Gear Wheels',
    machineryType: 'Engines, Industrial Gearboxes & Conveyor Drives',
    description: 'Straight-toothed cylindrical gears engineered for high mechanical efficiency and parallel shaft power transmission. Manufactured with precise involute tooth profile hobbing.',
    commonApplications: [
      'Rice Mill Polishing & De-husking Units',
      'Industrial Conveyor Gearboxes',
      'Automotive & Tractor Engine Transmissions',
      'Marine Trawler Winch Systems',
      'Crusher & Agitator Drives'
    ],
    materialsSupported: ['EN8 / EN9 Carbon Steel', 'EN19 / EN24 Alloy Steel', '20MnCr5 (Case Carburized)', 'Cast Iron FG 260'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Module 1.0 to 16.0 (or DP equivalents)', 'Diameter: Up to 1200 mm', 'Teeth profiles: Standard & Modified Involute', 'Precision bore & keyway cutting'],
    typicalFailureMode: 'Tooth root fatigue, surface pitting from incorrect profile alignment or unhardened teeth.',
    imageUrl: '/src/assets/images/types_bevel_helical_1791891645639.jpg',
    imageCaption: 'Precision-hobbed spur gear wheel and cylindrical gear blanks'
  },
  {
    id: 'helical',
    name: 'Helical & Double Helical Gears',
    machineryType: 'High-Speed Gearboxes, Heavy Reduction Drives & Generators',
    description: 'Angled tooth configuration delivering gradual, continuous tooth engagement. Drastically cuts operational noise and vibration under heavy continuous engine loads.',
    commonApplications: [
      'High-Speed Marine Propulsion Auxiliary Drives',
      'Continuous Production Paper Mill Gearboxes',
      'Heavy-duty Sugar Mill Reduction Drives',
      'Cement Plant Ball Mill Drives',
      'Centrifugal Pump & Compressor Drives'
    ],
    materialsSupported: ['EN24 (Toughened)', 'EN353 / EN36 (Case Hardened)', 'SAE 8620', 'Forged Alloy Steel'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Helix Angle: 8° to 45°', 'Face Width: Optimized for load distribution', 'Left-Hand & Right-Hand pairs', 'Ground tooth profiles available'],
    typicalFailureMode: 'Excessive thrust load failure, pitting along contact lines from poor tooth crowning.',
    imageUrl: '/src/assets/images/helical_double_gears_1791894777150.jpg',
    imageCaption: 'Precision-machined helical and double helical (herringbone) gear wheels with V-shaped teeth'
  },
  {
    id: 'double_helical',
    name: 'Herringbone & Double Helical Gears',
    machineryType: 'Heavy Industrial Rolling Mills & Heavy Extruders',
    description: 'V-shaped tooth structure that inherently cancels opposing axial thrust forces. Built for severe-shock industrial drives where gearbox casing distortion must be eliminated.',
    commonApplications: [
      'Heavy Steel Re-rolling Mills',
      'Oil Extraction Expeller Drives (Godavari Industrial Belt)',
      'Mine Hoists & Dragline Winches',
      'Large Chemical Agitators'
    ],
    materialsSupported: ['EN19 / EN24 Alloy Steels', 'Forged Steel Rings', 'Normalized Cast Steel'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Continuous or Grooved Apex', 'Custom diametral pitch replication', 'Heavy-duty face widths'],
    typicalFailureMode: 'Uneven wear across twin helices when shafts go out of parallel alignment.',
    imageUrl: '/src/assets/images/herringbone_bull_gear_1791895433217.jpg',
    imageCaption: 'Heavy-duty forged steel herringbone double helical gear wheel for rolling mills and heavy drives'
  },
  {
    id: 'bevel',
    name: 'Straight & Spiral Bevel Gears',
    machineryType: 'Right-Angle Power Transmissions & Differential Units',
    description: 'Conical gears designed to transmit torque smoothly between intersecting shafts (usually 90°). Cut with accurate pitch cones and backlash control.',
    commonApplications: [
      'Marine Propulsion Rudder & Thruster Drives',
      'Agricultural Rotary Tillers & Harvesters',
      'Vertical Turbine Pump Gear Drives',
      'Overhead Crane Travel Drives',
      'Cooling Tower Right-Angle Gearboxes'
    ],
    materialsSupported: ['20MnCr5 (Case Carburized & Quenched)', 'EN353 Alloy Steel', 'Forged Carbon Steels'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Shaft Angle: 90° (Standard) or Custom Oblique', 'Precision matched gear and pinion pairs', 'Mounting distance verification'],
    typicalFailureMode: 'Scuffing and chipped tooth ends due to improper mounting distance adjustment.',
    imageUrl: '/src/assets/images/spiral_bevel_gears_1791895892612.jpg',
    imageCaption: 'Precision-matched spiral bevel gear and pinion drive assembly for 90-degree shaft power transmission'
  },
  {
    id: 'worm',
    name: 'Worm Shafts & Worm Wheel Gears',
    machineryType: 'Speed Reduction Gearboxes, Winches & Valve Actuators',
    description: 'Compact high-ratio reduction gear sets offering high mechanical advantage and anti-reversing capability for safety-critical winches and lifting equipment.',
    commonApplications: [
      'Kakinada Port Boat Winches & Crane Hoists',
      'Industrial Sluice Gate Actuators & Dam Regulators',
      'Packaging & Bottle Conveyor Indexers',
      'Heavy Slurry Agitators & Mixers'
    ],
    materialsSupported: ['Phosphor Bronze (PB2 / PB1 / AB2) Wheel', 'Case-hardened Alloy Steel (20MnCr5/EN353) Worm Shaft', 'Centrifugally Cast Bronze'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Single, Double & Multi-start Worms', 'Thread grinding & polishing', 'Precision lead angle matching'],
    typicalFailureMode: 'Rapid bronze tooth flaking when lubrication breaks down or shafts deflect.',
    imageUrl: '/src/assets/images/bronze_worm_gear_1791891645632.jpg',
    imageCaption: 'High-grade phosphor bronze worm wheel meshed with case-hardened worm shaft'
  },
  {
    id: 'internal',
    name: 'Internal Ring & Planetary Gears',
    machineryType: 'Planetary Gearboxes, Slewing Drives & Rotary Tables',
    description: 'Gears with teeth cut on the internal diameter of a ring blank. Provides compact co-axial reduction for high-torque industrial planetary stages.',
    commonApplications: [
      'Excavator Slewing Rings & Port Crane Slewing Rings',
      'Planetary Hub Reducers for Earthmoving Machinery',
      'Internal Clutches & Power Take-Off (PTO) Units',
      'Rotary Drum Mixers'
    ],
    materialsSupported: ['Forged Carbon Steel', 'Alloy Forged Rings (42CrMo4 / EN19)', 'Cast Steel'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Internal shaping & gear slotting', 'Internal diameters up to 1000 mm', 'Flame/induction hardened teeth'],
    typicalFailureMode: 'Internal rim cracking or uneven tooth tip wear from planet carrier misalignment.',
    imageUrl: '/src/assets/images/internal_planetary_gear_1791896438723.jpg',
    imageCaption: 'Precision-machined internal ring gear with planetary pinions and sun gear assembly'
  },
  {
    id: 'timing_cam',
    name: 'Engine Timing, Cam & Crankshaft Gears',
    machineryType: 'Diesel Engines, Marine Auxiliaries & Compressor Cranksets',
    description: 'Precision timing gears manufactured to maintain exact valve and fuel pump synchronicity in diesel engines and industrial generator prime movers.',
    commonApplications: [
      'Marine Inboard Diesel Engine Timing Assemblies',
      'Stationary Power Generator Engine Gear Trains',
      'Agricultural Diesel Pump Sets',
      'Reciprocating Air Compressor Crankshaft Gears'
    ],
    materialsSupported: ['EN8D / EN9 Carbon Steel', 'Alloy Steels with Induction Hardened Teeth', 'Ductile S.G. Iron'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Zero run-out precision bore', 'Exact timing marks stamped', 'Tight backlash tolerances (0.05 - 0.12 mm)'],
    typicalFailureMode: 'Catastrophic engine valve collision if teeth skip or break due to inaccurate tooth pitching.',
    imageUrl: '/src/assets/images/gear_hero_assembly_1791891644858.jpg',
    imageCaption: 'Engine timing gear wheels manufactured with precision bore and keyway tolerances'
  },
  {
    id: 'spline_sprocket',
    name: 'Spline Shafts, Couplings & Heavy Sprockets',
    machineryType: 'PTO Drives, Machine Tool Spindles & Chain Elevators',
    description: 'Internal and external straight or involute splines and heavy-pitch transmission sprockets designed to carry high torsional shock loads.',
    commonApplications: [
      'Tractor PTO Shafts & Harvester Splines',
      'Bucket Elevator Heavy Chain Sprockets',
      'Machine Tool Sliding Gear Shafts',
      'Industrial Coupling Hubs'
    ],
    materialsSupported: ['EN19 / EN24 Toughened Steel', 'C45 Carbon Steel with Tooth Hardening'],
    manufacturingFrom: ['Technical Drawing', 'Physical Worn Sample', 'Dimensions/Specs'],
    keySpecifications: ['Involute & Straight-sided Splines', 'Simplex, Duplex & Triplex Sprockets', 'Broached or wire-EDM / slotted internal splines'],
    typicalFailureMode: 'Fretting corrosion and tooth shearing from torsional play and improper hardness.',
    imageUrl: '/src/assets/images/spline_shafts_sprockets_1791897000713.jpg',
    imageCaption: 'Precision-machined involute spline shafts, heavy transmission sprockets, and splined couplings'
  }
];

export const PAIN_POINTS_DATA: PainPointItem[] = [
  {
    id: 'pain-1',
    number: '01',
    title: 'Unexpected Machinery Breakdowns',
    customerConcern: '“If this gear fails, my production line stops.”',
    rootCause: 'Substandard metal alloys, micro-fissures in teeth, unhardened contact surfaces, or improper tooth profile meshing causing tooth shearing under sudden torque surges.',
    engineeringRemedy: 'We analyze your operational torque and shock loads, selecting certified alloy steel (e.g. EN19, EN24, 20MnCr5) with controlled heat treatment (case-hardening or induction) to ensure tooth toughness and fatigue resistance.',
    impactOnDowntime: 'Eliminates sudden catastrophic fractures; keeps primary lines running reliably between scheduled maintenance windows.',
    iconName: 'AlertTriangle',
    imageUrl: '/src/assets/images/broken_gear_inspection_1791891645384.jpg'
  },
  {
    id: 'pain-2',
    number: '02',
    title: 'Difficulty Sourcing Replacement Gears',
    customerConcern: '“Where can I get a gear that matches my existing equipment?”',
    rootCause: 'Imported engines or legacy industrial machines where the OEM is obsolete, overseas lead times are 16+ weeks, or original engineering drawings are lost.',
    engineeringRemedy: 'Vijay Engineering Works manufactures custom gears directly from your technical drawings, hand-sketched dimensions, or physical worn/damaged samples sent to our Kakinada workshop for reverse-engineering.',
    impactOnDowntime: 'Cuts lead time from months of overseas sourcing down to rapid domestic manufacturing, restarting stopped machinery fast.',
    iconName: 'Search',
    imageUrl: 'https://images.openai.com/static-rsc-4/9zfy9r6sA1kdzGocH9m6purLT2PiztOHonLNdewboMosFdZc6QvkUVNRzgGy6JGExMM_PcI4XUTlL5xQaQiAPJg1bjajQJmKxUrggO1iqZ792LCxtWcALvUTRCs7z8ccAcxmJJ1vFHNcYkCWDK6s7Y1cdRJ-mHWlRxL0cC1lPro?purpose=inline'
  },
  {
    id: 'pain-3',
    number: '03',
    title: 'Repeated Repairs & Replacement Costs',
    customerConcern: '“I cannot afford to keep replacing the same component.”',
    rootCause: 'Using off-the-shelf "approximate" gears that do not match the true pressure angle, module, backlash, or surface hardness required by the driving motor.',
    engineeringRemedy: 'Fit-for-application engineering: we verify tooth root geometry, pitch diameter, pressure angle (20° vs 14.5°), and core-to-surface metallurgical profile so replacement gears last their full design life.',
    impactOnDowntime: 'Stops the expensive cycle of teardowns, gearbox oil replacements, and repetitive technician overtime.',
    iconName: 'RefreshCw',
    imageUrl: 'https://images.openai.com/static-rsc-4/l1SRrzQdsIm5zy3hA9FY8iGSnFxFTIosrKi2lbKsvuZ1kiPQqoE1QYPuzboUYyBl0ns-SpWxHwkjOAyI3NYxqMcQY-dREwO6f5uePlKkO3cyIlfxtS_jQ6zyOfD7RfRjGhS-bwfCkDgczgJT2Y8zb3uzvG1JnOUfIRJNOWhm1XoJ7zoFzOqSBh6z5WPvuqWB?purpose=inline'
  },
  {
    id: 'pain-4',
    number: '04',
    title: 'Uncertainty About Suppliers & Delivery',
    customerConcern: '“Will the supplier understand my requirements and deliver what I need?”',
    rootCause: 'Generic machine shops that lack gear hobbing precision, give vague delivery dates, or fail to understand critical center-distance and shaft tolerances.',
    engineeringRemedy: 'Transparent technical review before cutting metal. We confirm all critical dimensions (bore, keyway, teeth count, OD, module) and provide clear feasibility assessments and honest delivery commitments.',
    impactOnDowntime: 'Ensures the gear fits the shaft and meshes correctly on the first installation, with zero on-site grinding or re-work.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.openai.com/static-rsc-4/oEInvAVLdOCZeEUwxB1_bU17qZDbz9IBDzVoluceLLFkxNIrFlHY4EMHDG3maqrO0cox_xJ-mTxsQDOWnOvWpBnUlPUCfs2Nue2oesz-8uiPymnNinw439i22EE9xottykEF6MMOcfYqMVawO8nqPfjX869zj6RP-iyGsHcdRPk?purpose=inline'
  }
];

export const REGIONAL_INDUSTRIES = [
  {
    name: 'Rice Mills & Agro-Processing',
    belt: 'East & West Godavari, Andhra Pradesh',
    gearUsage: 'Paddy cleaner drives, rubber roll sheller gears, elevator drives, polisher gearboxes.',
    solutionNote: 'High continuous operating hours during milling season require heavy-duty tooth hardening.'
  },
  {
    name: 'Marine Engines & Port Machinery',
    belt: 'Kakinada Deep Water Port, Anchorages & Fishing Harbors',
    gearUsage: 'Marine diesel engine timing gears, winch gearboxes, anchor windlasses, cargo cranes.',
    solutionNote: 'Corrosion resistance and bronze worm wheel engineering to handle high marine torque.'
  },
  {
    name: 'Sugar Mills & Distilleries',
    belt: 'Samalkot, Visakhapatnam, Krishna & Rayalaseema',
    gearUsage: 'Cane carrier drives, crusher roller spur gears, bagasse conveyor gear trains.',
    solutionNote: 'Severe shock loads and continuous seasonal operation demand EN19/EN24 forged alloy steels.'
  },
  {
    name: 'Paper Mills & Heavy Manufacturing',
    belt: 'Rajahmundry, Visakhapatnam, Vijayawada Belt',
    gearUsage: 'Dryer cylinder drive gears, calendar roll helical gears, slurry pump gear sets.',
    solutionNote: 'Continuous 24/7 web run requirements where even 1 hour of downtime costs thousands in lost pulp.'
  },
  {
    name: 'Cement Plants & Mining Equipment',
    belt: 'Andhra Pradesh & Telangana Industrial Corridors',
    gearUsage: 'Kiln drive pinions, clinker cooler drives, bucket elevator sprockets, ball mill gears.',
    solutionNote: 'Abrasive dust environments requiring sealed backlash tolerances and hardened tooth flanks.'
  }
];
