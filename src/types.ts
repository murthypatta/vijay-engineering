export type GearCategory =
  | 'spur'
  | 'helical'
  | 'double_helical'
  | 'bevel'
  | 'worm'
  | 'internal'
  | 'timing_cam'
  | 'spline_sprocket';

export interface GearTypeInfo {
  id: GearCategory;
  name: string;
  teluguName?: string;
  machineryType: string;
  description: string;
  commonApplications: string[];
  materialsSupported: string[];
  manufacturingFrom: ('Technical Drawing' | 'Physical Worn Sample' | 'Dimensions/Specs')[];
  keySpecifications: string[];
  typicalFailureMode: string;
  imageUrl?: string;
  imageCaption?: string;
}

export interface PainPointItem {
  id: string;
  number: string;
  title: string;
  customerConcern: string;
  rootCause: string;
  engineeringRemedy: string;
  impactOnDowntime: string;
  iconName: string;
  imageUrl?: string;
}

export interface RfqFormState {
  gearType: GearCategory;
  sourcingMethod: 'drawing' | 'sample' | 'dimensions' | 'urgent_breakdown';
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  machineryContext: string;
  quantity: number;
  // Dimensions
  teethCount?: string;
  moduleOrDP?: string;
  outerDiameter?: string;
  faceWidth?: string;
  boreDiameter?: string;
  keywaySize?: string;
  materialPreference?: string;
  heatTreatment?: string;
  isUrgentBreakdown: boolean;
  notes: string;
  uploadedFileName?: string;
}

export interface MarketingAssetGroup {
  category: 'google_ads' | 'linkedin' | 'whatsapp' | 'seo' | 'landing_copy';
  title: string;
  subtitle: string;
  items: {
    title: string;
    description?: string;
    content: string;
    tags?: string[];
  }[];
}
