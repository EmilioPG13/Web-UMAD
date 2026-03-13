import type { ScholarshipTier } from '../types';

export const scholarshipTiers: ScholarshipTier[] = [
  {
    id: 'excelencia',
    label: 'Beca Excelencia',
    minGPA: 9.5,
    maxGPA: 10.0,
    baseDiscountPct: 30,
    description: 'Para estudiantes con promedio de excelencia que mantienen el nivel durante su trayectoria.',
  },
  {
    id: 'academica-1',
    label: 'Beca Académica I',
    minGPA: 9.0,
    maxGPA: 9.49,
    baseDiscountPct: 25,
    description: 'Reconoce el esfuerzo académico sostenido con un descuento significativo en colegiatura.',
  },
  {
    id: 'academica-2',
    label: 'Beca Académica II',
    minGPA: 8.5,
    maxGPA: 8.99,
    baseDiscountPct: 20,
    description: 'Apoya a estudiantes con buen rendimiento académico.',
  },
  {
    id: 'academica-3',
    label: 'Beca Académica III',
    minGPA: 8.0,
    maxGPA: 8.49,
    baseDiscountPct: 15,
    description: 'Incentiva la mejora continua del rendimiento escolar.',
  },
  {
    id: 'apoyo',
    label: 'Beca de Apoyo',
    minGPA: 7.0,
    maxGPA: 7.99,
    baseDiscountPct: 10,
    description: 'Beca de entrada para estudiantes con promedio aprobatorio que desean continuar sus estudios.',
  },
];

export const conditionBonuses: Record<string, number> = {
  primer_ingreso: 5,
  deportista_destacado: 10,
  hermano_umad: 5,
  empleado_umad: 50, // flat override
  convenio_empresa: 10,
};

export const conditionLabels: Record<string, string> = {
  primer_ingreso: 'Primer ingreso a universidad',
  deportista_destacado: 'Deportista de alto rendimiento',
  hermano_umad: 'Familiar de alumno UMAD',
  empleado_umad: 'Empleado de la Universidad',
  convenio_empresa: 'Empresa con convenio UMAD',
};
