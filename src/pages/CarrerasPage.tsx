import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import FacultyFilter from '../components/programs/FacultyFilter';
import FlipCard from '../components/programs/FlipCard';
import { programs } from '../data/programs';
import type { Faculty } from '../types';

type Filter = Faculty | 'Todas';

export default function CarrerasPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todas');

  const filtered = activeFilter === 'Todas'
    ? programs
    : programs.filter(p => p.faculty === activeFilter);

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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <FacultyFilter active={activeFilter} onChange={v => setActiveFilter(v as Filter)} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((program, i) => (
              <FlipCard key={program.id} program={program} delay={i * 50} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20">No hay programas en esta categoría.</p>
        )}
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
