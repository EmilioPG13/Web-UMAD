import type { Faculty } from '../../types';

const ALL = 'Todas';
type Filter = Faculty | typeof ALL;

interface Props {
  active: Filter;
  onChange: (f: Filter) => void;
}

const faculties: Filter[] = [
  ALL,
  'Ingenierías',
  'Arte y Humanidades',
  'Negocios',
  'Ciencias Sociales',
  'Comercio y Derecho',
  'Posgrados en Línea',
];

export default function FacultyFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {faculties.map(f => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === f
              ? 'bg-umad-navy text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
