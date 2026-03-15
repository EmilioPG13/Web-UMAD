import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ProgramFilter from '../components/programs/FacultyFilter';
import FlipCard from '../components/programs/FlipCard';
import { programs } from '../data/programs';
import type { ProgramCategory } from '../types';

type Filter = ProgramCategory | 'Todas';

export default function CarrerasPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const byCategory = activeFilter === 'Todas'
      ? programs
      : programs.filter(p => p.category === activeFilter);

    if (!searchQuery.trim()) return byCategory;

    const q = searchQuery.toLowerCase();
    return byCategory.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.faculty.toLowerCase().includes(q)
    );
  }, [activeFilter, searchQuery]);

  const animKey = `${activeFilter}-${searchQuery}`;

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative w-full sm:w-72 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar carrera o área..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-umad-navy focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex-1 overflow-x-auto pb-0.5">
              <ProgramFilter
                active={activeFilter}
                onChange={v => setActiveFilter(v as Filter)}
                programs={programs}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Result count / active search label */}
        <div className="flex items-center gap-2 mb-6 min-h-[24px]">
          <p className="text-sm text-gray-500">
            {searchQuery
              ? <>Resultados para <span className="font-semibold text-umad-navy">"{searchQuery}"</span>: {filtered.length} programa{filtered.length !== 1 ? 's' : ''}</>
              : <>Mostrando <span className="font-semibold text-umad-navy">{filtered.length}</span> programa{filtered.length !== 1 ? 's' : ''}</>
            }
          </p>
          {(searchQuery || activeFilter !== 'Todas') && (
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('Todas'); }}
              className="text-xs text-umad-red hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={animKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((program, i) => (
                <FlipCard key={program.id} program={program} delay={i * 40} />
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
              <p className="text-gray-500 font-medium">No encontramos resultados para "{searchQuery}"</p>
              <p className="text-gray-400 text-sm mt-1">Prueba con otro término o limpia los filtros</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('Todas'); }}
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
            Todos nuestros programas cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) otorgado por la SEP.
            Para mayor información sobre requisitos de admisión, fechas y costos, visita nuestra sección de{' '}
            <a href="/admisiones" className="text-umad-red font-medium hover:underline">Admisiones</a>.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
