import type { TuitionPlan } from '../types';

export const tuitionPlans: TuitionPlan[] = [
  {
    id: 'lic-general',
    programLevel: 'Licenciatura',
    fees: [
      { label: 'Inscripción', amountMXN: 3500, frequency: 'única', notes: 'Por semestre. Primer semestre incluye cuota de admisión.' },
      { label: 'Colegiatura mensual', amountMXN: 2200, frequency: 'mensual', notes: 'Equivalente a 5 mensualidades por semestre.' },
      { label: 'Material didáctico', amountMXN: 800, frequency: 'semestral', notes: 'Varía según carrera.' },
      { label: 'Seguro estudiantil', amountMXN: 350, frequency: 'semestral' },
    ],
  },
  {
    id: 'posgrado-general',
    programLevel: 'Posgrado',
    fees: [
      { label: 'Inscripción', amountMXN: 5000, frequency: 'única' },
      { label: 'Colegiatura mensual', amountMXN: 3800, frequency: 'mensual', notes: 'Equivalente a 5 mensualidades por cuatrimestre.' },
      { label: 'Material y plataforma', amountMXN: 1200, frequency: 'semestral' },
      { label: 'Titulación', amountMXN: 8500, frequency: 'única', notes: 'Al concluir el posgrado.' },
    ],
  },
  {
    id: 'cel-general',
    programLevel: 'CEL',
    programName: 'Centro de Extensión y Lenguas',
    fees: [
      { label: 'Inscripción', amountMXN: 500, frequency: 'única' },
      { label: 'Mensualidad (grupo regular)', amountMXN: 1400, frequency: 'mensual' },
      { label: 'Mensualidad (intensivo)', amountMXN: 1900, frequency: 'mensual', notes: 'Clases 5 días a la semana.' },
      { label: 'Certificación internacional', amountMXN: 3200, frequency: 'única', notes: 'Opcional. Presenta examen TOEFL o Cambridge.' },
    ],
  },
];
