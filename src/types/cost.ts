export type CostLevel = 'Licenciatura' | 'Posgrado' | 'CEL';

export interface FeeItem {
  label: string;
  amountMXN: number;
  frequency: 'única' | 'semestral' | 'mensual';
  notes?: string;
}

export interface TuitionPlan {
  id: string;
  programLevel: CostLevel;
  programName?: string;
  fees: FeeItem[];
}
