import type { Program, ProgramCategory } from '../../types';

const ALL = 'Todas' as const;
type Filter = ProgramCategory | typeof ALL;

const categories: Filter[] = [
  'Todas',
  'Licenciaturas',
  'Maestrías',
  'UMAD Online',
  'Intercambios',
  'Prácticas Profesionales',
  'Educación Continua',
];

interface Props {
  active: Filter;
  onChange: (f: Filter) => void;
  programs: Program[];
}

export default function ProgramFilter({ active, onChange, programs }: Props) {
  const countFor = (cat: Filter) =>
    cat === 'Todas' ? programs.length : programs.filter(p => p.category === cat).length;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? 'bg-umad-navy text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat} ({countFor(cat)})
        </button>
      ))}
    </div>
  );
}
