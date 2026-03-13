import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, center = false, light = false }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={`inline-block w-12 h-1 bg-umad-red rounded-full mb-4 ${center ? 'mx-auto' : ''}`} />
        <h2 className={`font-display font-bold text-3xl lg:text-4xl leading-tight ${light ? 'text-white' : 'text-umad-navy'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-3 text-base lg:text-lg max-w-2xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
