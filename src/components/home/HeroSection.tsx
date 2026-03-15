import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { BookOpen, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = { trigger: sectionRef.current, start: 'top bottom' };
    const ease    = 'power2.out';

    gsap.from(titleRef.current,    { opacity: 0, y: 40,             duration: 0.9, delay: 0,    ease, scrollTrigger: trigger });
    gsap.from(subtitleRef.current, { opacity: 0, y: 40,             duration: 0.9, delay: 0.15, ease, scrollTrigger: trigger });
    gsap.from(ctaRef.current,      { opacity: 0, y: 40,             duration: 0.9, delay: 0.3,  ease, scrollTrigger: trigger });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 z-0 bg-umad-navy-dark"
        style={{
          backgroundImage:
            'url("https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/YOHGRXKSFNDFNB7HM5GYRRZDVQ.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-umad-navy/70" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-umad-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Headline */}
          <h1
            ref={titleRef}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Construye tu futuro{' '}
            <span className="text-umad-red">con propósito</span>
          </h1>

          {/* Sub */}
          <p
            ref={subtitleRef}
            className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Más de 50 años formando profesionistas comprometidos. Explora nuestras licenciaturas, posgrados y programa de becas diseñado para ti.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/carreras"
              className="inline-flex items-center justify-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-base"
            >
              <BookOpen className="w-5 h-5" />
              Ver oferta educativa
            </Link>
            <Link
              to="/becas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 text-base"
            >
              <Calculator className="w-5 h-5" />
              Calcular mi beca
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Explora</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
