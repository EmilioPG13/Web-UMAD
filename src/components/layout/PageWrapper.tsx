import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
