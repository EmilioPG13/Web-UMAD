import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Users, BookOpen, Award, Building2 } from 'lucide-react';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, v => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, target, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { icon: Building2, value: 50, suffix: '+', label: 'Años de trayectoria' },
  { icon: BookOpen, value: 30, suffix: '+', label: 'Programas académicos' },
  { icon: Users, value: 15000, suffix: '+', label: 'Egresados activos' },
  { icon: Award, value: 95, suffix: '%', label: 'Tasa de empleabilidad' },
];

export default function StatsStrip() {
  return (
    <section className="bg-umad-cream py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-umad-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-display font-bold text-3xl lg:text-4xl text-umad-navy">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
