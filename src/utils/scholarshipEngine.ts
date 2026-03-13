import type { CalculatorInput, CalculatorResult } from '../types';

const GPA_BRACKETS: { min: number; max: number; discount: number; label: string }[] = [
  { min: 9.5, max: 10.0, discount: 30, label: 'Beca Excelencia' },
  { min: 9.0, max: 9.49, discount: 25, label: 'Beca Académica I' },
  { min: 8.5, max: 8.99, discount: 20, label: 'Beca Académica II' },
  { min: 8.0, max: 8.49, discount: 15, label: 'Beca Académica III' },
  { min: 7.0, max: 7.99, discount: 10, label: 'Beca de Apoyo' },
];

const CONDITION_BONUSES: Record<string, number> = {
  primer_ingreso: 5,
  deportista_destacado: 10,
  hermano_umad: 5,
  convenio_empresa: 10,
};

const MAX_DISCOUNT = 50;

export function calculateScholarship(input: CalculatorInput): CalculatorResult {
  const { gpa, conditions } = input;

  // Empleado UMAD is a flat override
  if (conditions.includes('empleado_umad')) {
    return {
      baseDiscount: 50,
      conditionBonus: 0,
      totalDiscount: 50,
      tierLabel: 'Beca Empleado UMAD',
      message: 'Como empleado de la Universidad Madero, tienes acceso a una beca del 50% sobre tu colegiatura.',
      isEligible: true,
    };
  }

  // Find base GPA bracket
  const bracket = GPA_BRACKETS.find(b => gpa >= b.min && gpa <= b.max);
  const baseDiscount = bracket?.discount ?? 0;
  const tierLabel = bracket?.label ?? 'Sin beca académica';

  // Sum condition bonuses
  const conditionBonus = conditions.reduce((sum, c) => {
    return sum + (CONDITION_BONUSES[c] ?? 0);
  }, 0);

  const rawTotal = baseDiscount + conditionBonus;
  const totalDiscount = Math.min(rawTotal, MAX_DISCOUNT);

  if (totalDiscount === 0) {
    return {
      baseDiscount: 0,
      conditionBonus: 0,
      totalDiscount: 0,
      tierLabel: 'Sin beca disponible',
      message: `Con un promedio de ${gpa.toFixed(1)}, no calificas para beca académica en este momento. Mejora tu promedio a 7.0 o más para acceder a una beca de apoyo.`,
      isEligible: false,
    };
  }

  const conditionText = conditionBonus > 0
    ? ` Tus condiciones adicionales suman un bono de ${conditionBonus}%.`
    : '';

  const message = `Con un promedio de ${gpa.toFixed(1)}, calificas a la ${tierLabel} (${baseDiscount}% base).${conditionText} Tu descuento total es del ${totalDiscount}% sobre colegiatura.`;

  return {
    baseDiscount,
    conditionBonus,
    totalDiscount,
    tierLabel,
    message,
    isEligible: true,
  };
}
