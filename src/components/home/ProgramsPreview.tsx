import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FlipCard from '../programs/FlipCard';
import { programs } from '../../data/programs';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProgramsPreview() {
  const featured = programs.filter(p => p.featured).slice(0, 4);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(Array.from(gridRef.current!.children) as HTMLElement[], {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: gridRef });

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

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((program) => (
            <FlipCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
