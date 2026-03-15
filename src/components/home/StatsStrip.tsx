import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Award, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats = [
  { icon: Building2, value: 50,  suffix: '+',  label: 'Años de trayectoria'   },
  { icon: BookOpen,  value: 30,  suffix: '+',  label: 'Programas académicos'  },
  { icon: Users,     value: 15,  suffix: 'k+', label: 'Egresados activos'     },
  { icon: Award,     value: 85,  suffix: '%',  label: 'Tasa de empleabilidad' },
];

function AnimatedStat({
  icon: Icon,
  value,
  suffix,
  label,
  index,
}: {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId: number;
    const startTime = performance.now();
    const duration = 1800;

    function frame(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(frame);
      }
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-12 h-12 bg-umad-navy rounded-xl flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <p className="font-display font-bold text-3xl lg:text-4xl text-umad-navy">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-umad-cream py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
