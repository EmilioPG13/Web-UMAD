import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { icon: Building2, value: 50,    suffix: '+', label: 'Años de trayectoria'   },
  { icon: BookOpen,  value: 30,    suffix: '+', label: 'Programas académicos'  },
  { icon: Users,     value: 15,    suffix: '+', label: 'Egresados activos', format: 'k' },
  { icon: Award,     value: 85,    suffix: '%', label: 'Tasa de empleabilidad' },
];

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const counters = gsap.utils.toArray<HTMLElement>('.stat-number');

    counters.forEach((el, i) => {
      const target = Number(el.dataset.target ?? 0);
      const suffix = el.dataset.suffix ?? '';
      const isK    = el.dataset.format === 'k';

      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2,
        delay: i * 0.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        onUpdate() {
          const v = Math.round(obj.val);
          el.textContent = isK ? `${v}k${suffix}` : `${v}${suffix}`;
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-umad-cream py-14">
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
                <span
                  className="stat-number"
                  data-target={s.value}
                  data-suffix={s.suffix}
                  data-format={s.format ?? ''}
                >
                  {s.format === 'k' ? `0k${s.suffix}` : `0${s.suffix}`}
                </span>
              </p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
