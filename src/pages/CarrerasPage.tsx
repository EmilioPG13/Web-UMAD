import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ProgramFilters, {
  type Tab,
  type SubFilter,
  type ModalityFilter,
} from '../components/programs/FacultyFilter';
import FlipCard from '../components/programs/FlipCard';
import { programs } from '../data/programs';

export default function CarrerasPage() {
  const [activeTab, setActiveTab] = useState<Tab>('estudia');
  const [activeSubFilter, setActiveSubFilter] = useState<SubFilter>('Todos');
  const [activeModality, setActiveModality] = useState<ModalityFilter>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);
    setActiveSubFilter('Todos');
    setActiveModality('Todas');
  }

  function handleSubFilterChange(sub: SubFilter) {
    setActiveSubFilter(sub);
    if (sub !== 'Licenciaturas' && sub !== 'Maestrías') {
      setActiveModality('Todas');
    }
  }

  const filtered = useMemo(() => {
    let result = programs.filter(p => {
      const inTab =
        activeTab === 'estudia'
          ? ['Licenciatura', 'Maestría', 'TSU'].includes(p.level) ||
            p.category === 'UMAD Online'
          : ['Training Model', 'Prácticas Profesionales', 'Intercambios'].includes(
              p.category ?? ''
            );

      const inSub =
        activeSubFilter === 'Todos'
          ? true
          : activeSubFilter === 'Licenciaturas'
          ? p.level === 'Licenciatura'
          : activeSubFilter === 'Maestrías'
          ? p.level === 'Maestría'
          : activeSubFilter === 'UMAD Online'
          ? p.category === 'UMAD Online'
          : p.category === activeSubFilter;

      const inModality =
        activeModality === 'Todas'
          ? true
          : p.modalities.includes(activeModality as 'Presencial' | 'En línea');

      return inTab && inSub && inModality;
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.shortName.toLowerCase().includes(q) ||
          p.faculty.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeTab, activeSubFilter, activeModality, searchQuery]);

  const hasActiveFilters =
    searchQuery || activeSubFilter !== 'Todos' || activeModality !== 'Todas';

  function clearFilters() {
    setSearchQuery('');
    setActiveSubFilter('Todos');
    setActiveModality('Todas');
  }

  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Oferta Educativa"
            subtitle="Explora nuestros programas académicos. Pasa el cursor sobre cada tarjeta para conocer más."
            light
          />
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
          <ProgramFilters
            activeTab={activeTab}
            activeSubFilter={activeSubFilter}
            activeModality={activeModality}
            onTabChange={handleTabChange}
            onSubFilterChange={handleSubFilterChange}
            onModalityChange={setActiveModality}
          />

          {/* Search + count row */}
          <div className="flex items-center gap-3 mt-4">
            <div className="relative w-full sm:w-64 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar carrera o área..."
                className="w-full pl-10 pr-8 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-umad-navy"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <p className="text-xs text-gray-400">
              Mostrando{' '}
              <span className="font-medium text-gray-600">{filtered.length}</span>{' '}
              programa{filtered.length !== 1 ? 's' : ''}
            </p>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto text-xs text-umad-red hover:underline"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeTab}-${activeSubFilter}-${activeModality}-${searchQuery}`}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((program, i) => (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <FlipCard program={program} delay={i * 40} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-24 text-center"
            >
              <Search className="w-10 h-10 text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">
                Sin resultados{searchQuery ? ` para "${searchQuery}"` : ''}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Prueba con otro término o cambia los filtros
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-umad-red hover:underline"
              >
                Ver todos los programas
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom info */}
      <div className="bg-umad-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Todos nuestros programas cuentan con Reconocimiento de Validez Oficial de
            Estudios (RVOE) otorgado por la SEP. Para mayor información sobre requisitos
            de admisión, fechas y costos, visita nuestra sección de{' '}
            <a href="/admisiones" className="text-umad-red font-medium hover:underline">
              Admisiones
            </a>
            .
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
