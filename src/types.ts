export interface UsureAnalysis {
  id: number;
  vehicle: string;
  rate: 'A' | 'B' | 'C' | 'D';
  imageUrl?: string;
}

export interface ReferenceAnalysis {
  id: number;
  vehicle: string;
  dimension: string;
  imageUrl?: string;
}
