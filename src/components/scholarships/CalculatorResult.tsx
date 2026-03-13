import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CalculatorResult } from '../../types';

interface Props {
  result: CalculatorResult;
  onReset: () => void;
}

export default function CalculatorResultCard({ result, onReset }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className={`p-6 ${result.isEligible ? 'bg-gradient-to-r from-umad-navy to-umad-navy-light' : 'bg-gray-700'}`}>
        <div className="flex items-center gap-3">
          {result.isEligible
            ? <CheckCircle className="w-7 h-7 text-green-400" />
            : <XCircle className="w-7 h-7 text-red-400" />
          }
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider">Resultado</p>
            <p className="font-display font-bold text-white text-lg">{result.tierLabel}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {result.isEligible && (
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display font-bold text-6xl text-umad-red"
              >
                {result.totalDiscount}%
              </motion.p>
              <p className="text-gray-500 text-sm mt-1">de descuento en colegiatura</p>
            </div>
          </div>
        )}

        {/* Breakdown */}
        {result.isEligible && (
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-600">Descuento académico base</span>
              <span className="font-semibold text-umad-navy">{result.baseDiscount}%</span>
            </div>
            {result.conditionBonus > 0 && (
              <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-600">Bonos por condición</span>
                <span className="font-semibold text-green-600">+{result.conditionBonus}%</span>
              </div>
            )}
            <div className="flex justify-between text-sm py-2 bg-umad-cream rounded-lg px-3">
              <span className="font-bold text-umad-navy">Total</span>
              <span className="font-bold text-umad-red">{result.totalDiscount}%</span>
            </div>
          </div>
        )}

        <p className="text-gray-600 text-sm leading-relaxed mb-6">{result.message}</p>

        <div className="flex flex-col gap-3">
          {result.isEligible && (
            <Link
              to="/admisiones"
              className="flex items-center justify-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-bold py-3 rounded-xl transition-colors"
            >
              Solicitar beca <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <button
            onClick={onReset}
            className="text-gray-500 text-sm hover:text-umad-navy transition-colors"
          >
            ← Calcular de nuevo
          </button>
        </div>
      </div>
    </motion.div>
  );
}
