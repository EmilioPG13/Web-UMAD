import { motion } from 'framer-motion';
import { BookOpen, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient (fallback / overlay) */}
      <div className="absolute inset-0 bg-gradient-to-br from-umad-navy-dark via-umad-navy to-umad-navy-light" />

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

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-umad-red rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Admisiones abiertas 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Construye tu futuro{' '}
            <span className="text-umad-red">con propósito</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Más de 50 años formando profesionistas comprometidos. Explora nuestras licenciaturas, posgrados y programa de becas diseñado para ti.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: '50+', label: 'Años de experiencia' },
              { value: '30+', label: 'Programas académicos' },
              { value: '15k+', label: 'Egresados' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl text-white">{stat.value}</p>
                <p className="text-white/60 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
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
