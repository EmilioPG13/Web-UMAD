export type SpecialCondition =
  | 'deportista_destacado'
  | 'primer_ingreso'
  | 'hermano_umad'
  | 'empleado_umad'
  | 'convenio_empresa';

export interface ScholarshipTier {
  id: string;
  label: string;
  minGPA: number;
  maxGPA: number;
  baseDiscountPct: number;
  description: string;
}

export interface CalculatorInput {
  gpa: number;
  conditions: SpecialCondition[];
}

export interface CalculatorResult {
  baseDiscount: number;
  conditionBonus: number;
  totalDiscount: number;
  tierLabel: string;
  message: string;
  isEligible: boolean;
}
