export enum TyreType {
  FrontLeft,
  FrontRight,
  RearLeft,
  RearRight,
}

export interface UsureAnalysis {
  id: number;
  vehicle: string;
  rate: 'A' | 'B' | 'C' | 'D';
  imagesUrl?: string[];
}

export interface ReferenceAnalysis {
  id: number;
  vehicle: string;
  dimension: string;
  imagesUrl?: string[];
}
