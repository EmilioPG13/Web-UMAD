import { AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import CalculatorForm from '../components/scholarships/CalculatorForm';
import CalculatorResultCard from '../components/scholarships/CalculatorResult';
import { useScholarshipCalc } from '../hooks/useScholarshipCalc';
import { scholarshipTiers } from '../data/scholarships';

export default function BecasPage() {
  const { gpa, setGpa, conditions, toggleCondition, result, hasCalculated, calculate, reset } = useScholarshipCalc();

  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Becas y Financiamiento"
            subtitle="En UMAD creemos que el talento no debe tener límites económicos. Explora nuestras opciones de beca."
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Tier table */}
          <ScrollReveal>
            <h3 className="font-display font-bold text-umad-navy text-xl mb-6">Tipos de beca disponibles</h3>
            <div className="space-y-4">
              {scholarshipTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-umad-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-lg">{tier.baseDiscountPct}%</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-umad-navy text-sm">{tier.label}</p>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        Promedio {tier.minGPA}–{tier.maxGPA}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{tier.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-umad-cream rounded-xl">
              <p className="font-semibold text-umad-navy text-sm mb-1">¿Sabías que...?</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Las becas son acumulables con bonos por condición especial (deportista, primer ingreso, familiar UMAD) hasta un máximo del 50% de descuento en colegiatura.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Calculator */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-display font-bold text-umad-navy text-xl mb-6">Calculadora de beca</h3>
            <AnimatePresence mode="wait">
              {!hasCalculated ? (
                <CalculatorForm
                  gpa={gpa}
                  setGpa={setGpa}
                  conditions={conditions}
                  toggleCondition={toggleCondition}
                  onCalculate={calculate}
                />
              ) : (
                <CalculatorResultCard result={result} onReset={reset} />
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}
