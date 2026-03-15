import { motion, AnimatePresence } from 'framer-motion';

export type Tab = 'estudia' | 'valor-agregado';

export type SubFilter =
  | 'Todos'
  | 'Licenciaturas'
  | 'Maestrías'
  | 'UMAD Online'
  | 'Training Model'
  | 'Prácticas Profesionales'
  | 'Intercambios';

export type ModalityFilter = 'Todas' | 'Presencial' | 'En línea';

const TABS: { id: Tab; label: string }[] = [
  { id: 'estudia', label: 'Estudia en UMAD' },
  { id: 'valor-agregado', label: 'Valor Agregado' },
];

const SUB_FILTERS: Record<Tab, SubFilter[]> = {
  'estudia': ['Todos', 'Licenciaturas', 'Maestrías', 'UMAD Online'],
  'valor-agregado': ['Todos', 'Training Model', 'Prácticas Profesionales', 'Intercambios'],
};

const MODALITY_OPTIONS: ModalityFilter[] = ['Todas', 'Presencial', 'En línea'];

const showsModality = (sub: SubFilter) =>
  sub === 'Licenciaturas' || sub === 'Maestrías';

interface Props {
  activeTab: Tab;
  activeSubFilter: SubFilter;
  activeModality: ModalityFilter;
  onTabChange: (tab: Tab) => void;
  onSubFilterChange: (sub: SubFilter) => void;
  onModalityChange: (mod: ModalityFilter) => void;
}

export default function ProgramFilters({
  activeTab,
  activeSubFilter,
  activeModality,
  onTabChange,
  onSubFilterChange,
  onModalityChange,
}: Props) {
  return (
    <div className="space-y-4">

      {/* ── Nivel 1: Tabs ───────────────────────────────── */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`pb-3 text-sm border-b-2 transition-colors -mb-px ${
                activeTab === tab.id
                  ? 'border-red-600 text-umad-navy font-semibold'
                  : 'border-transparent text-gray-500 font-medium hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Nivel 2: Pills ──────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {SUB_FILTERS[activeTab].map(sub => (
          <button
            key={sub}
            onClick={() => onSubFilterChange(sub)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              activeSubFilter === sub
                ? 'bg-umad-navy text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* ── Nivel 3: Segmented modality toggle ──────────── */}
      <AnimatePresence>
        {showsModality(activeSubFilter) && (
          <motion.div
            key="modality"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs text-gray-400">Modalidad:</span>
            <div className="inline-flex border border-gray-200 rounded-lg p-0.5 gap-0.5">
              {MODALITY_OPTIONS.map(mod => (
                <button
                  key={mod}
                  onClick={() => onModalityChange(mod)}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    activeModality === mod
                      ? 'bg-umad-navy text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
