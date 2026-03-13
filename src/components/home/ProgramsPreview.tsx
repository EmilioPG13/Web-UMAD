import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FlipCard from '../programs/FlipCard';
import ScrollReveal from '../ui/ScrollReveal';
import { programs } from '../../data/programs';

export default function ProgramsPreview() {
  const featured = programs.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <SectionHeading
            title="Oferta educativa"
            subtitle="Pasa el cursor sobre cada tarjeta para conocer el programa."
          />
          <Link
            to="/carreras"
            className="flex items-center gap-2 text-umad-red font-semibold hover:gap-3 transition-all"
          >
            Ver todos los programas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((program, i) => (
            <ScrollReveal key={program.id} delay={i * 0.1}>
              <FlipCard program={program} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
