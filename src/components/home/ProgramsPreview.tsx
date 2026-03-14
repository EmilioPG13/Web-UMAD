import { useState, useRef, useCallback, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import FlipCard from '../programs/FlipCard';
import { programs } from '../../data/programs';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

const slideshowPrograms = programs.filter(p => p.level === 'Licenciatura');
const slides = chunkArray(slideshowPrograms, 4);

const AUTOPLAY_MS = 4000;
const MANUAL_MS = 8000;

export default function ProgramsPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const directionRef = useRef<'next' | 'prev'>('next');
  const currentSlideRef = useRef(0);
  const autoplayDelayRef = useRef(AUTOPLAY_MS);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep ref in sync with state to avoid stale closures in timers
  useEffect(() => { currentSlideRef.current = currentSlide; }, [currentSlide]);

  const animateTransition = useCallback((nextSlide: number) => {
    const grid = gridRef.current;
    if (!grid || isAnimating.current) return;
    isAnimating.current = true;
    const dir = directionRef.current;
    const cards = Array.from(grid.children) as HTMLElement[];

    gsap.to(cards, {
      x: dir === 'next' ? -60 : 60,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentSlide(nextSlide);
        // Double rAF to wait for React to flush DOM with new cards
        requestAnimationFrame(() => requestAnimationFrame(() => {
          const newCards = Array.from(gridRef.current!.children) as HTMLElement[];
          gsap.fromTo(
            newCards,
            { x: dir === 'next' ? 60 : -60, opacity: 0 },
            {
              x: 0, opacity: 1,
              duration: 0.4, ease: 'power2.out', stagger: 0.07,
              onComplete: () => { isAnimating.current = false; },
            }
          );
        }));
      },
    });
  }, []);

  // Autoplay loop — re-runs whenever currentSlide changes
  useEffect(() => {
    const delay = autoplayDelayRef.current;
    autoplayDelayRef.current = AUTOPLAY_MS; // reset for next cycle

    timerRef.current = setTimeout(() => {
      directionRef.current = 'next';
      animateTransition((currentSlideRef.current + 1) % slides.length);
    }, delay);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [currentSlide, animateTransition]);

  const handleNext = () => {
    if (isAnimating.current) return;
    autoplayDelayRef.current = MANUAL_MS;
    if (timerRef.current) clearTimeout(timerRef.current);
    directionRef.current = 'next';
    animateTransition((currentSlideRef.current + 1) % slides.length);
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    autoplayDelayRef.current = MANUAL_MS;
    if (timerRef.current) clearTimeout(timerRef.current);
    directionRef.current = 'prev';
    animateTransition((currentSlideRef.current - 1 + slides.length) % slides.length);
  };

  const handleDot = (idx: number) => {
    if (isAnimating.current || idx === currentSlideRef.current) return;
    autoplayDelayRef.current = MANUAL_MS;
    if (timerRef.current) clearTimeout(timerRef.current);
    directionRef.current = idx > currentSlideRef.current ? 'next' : 'prev';
    animateTransition(idx);
  };

  // Entrance animation — fires once when section scrolls into view
  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;
    gsap.from(Array.from(grid.children) as HTMLElement[], {
      opacity: 0, y: 50,
      duration: 0.7, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: gridRef, dependencies: [] });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
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

        {/* Carousel row */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-red-600 hover:text-red-600 transition-colors flex-shrink-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {slides[currentSlide].map((program) => (
                <FlipCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:border-red-600 hover:text-red-600 transition-colors flex-shrink-0"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDot(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-6 h-2 bg-red-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al grupo ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">
            Grupo {currentSlide + 1} de {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
