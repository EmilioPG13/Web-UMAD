import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { tuitionPlans } from '../data/costs';
import { formatMXN } from '../utils/formatCurrency';
import type { CostLevel } from '../types';
import { Link } from 'react-router-dom';

const tabs: { id: CostLevel; label: string }[] = [
  { id: 'Licenciatura', label: 'Licenciatura' },
  { id: 'Posgrado', label: 'Posgrado' },
  { id: 'CEL', label: 'CEL — Idiomas' },
];

export default function CostosPage() {
  const [activeTab, setActiveTab] = useState<CostLevel>('Licenciatura');
  const plan = tuitionPlans.find(p => p.programLevel === activeTab)!;

  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Costos y Colegiaturas"
            subtitle="Transparencia total en nuestros precios. Conoce el costo real de tu inversión educativa."
            light
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Tab switcher */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-umad-navy shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <ScrollReveal key={activeTab}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {plan.programName && (
              <div className="bg-umad-cream px-6 py-3 border-b border-gray-100">
                <p className="text-umad-navy font-semibold text-sm">{plan.programName}</p>
              </div>
            )}

            <div className="divide-y divide-gray-100">
              {plan.fees.map(fee => (
                <div key={fee.label} className="flex items-start justify-between px-6 py-5">
                  <div className="flex-1">
                    <p className="font-semibold text-umad-navy text-sm">{fee.label}</p>
                    {fee.notes && (
                      <p className="text-gray-400 text-xs mt-0.5">{fee.notes}</p>
                    )}
                    <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full capitalize">
                      {fee.frequency}
                    </span>
                  </div>
                  <p className="font-display font-bold text-umad-red text-lg ml-4 whitespace-nowrap">
                    {formatMXN(fee.amountMXN)}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-umad-navy px-6 py-4">
              <div className="flex justify-between items-center text-white">
                <span className="font-semibold text-sm">Inversión mensual aproximada</span>
                <span className="font-display font-bold text-xl">
                  {formatMXN(plan.fees.find(f => f.frequency === 'mensual')?.amountMXN ?? 0)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            * Los costos son orientativos y pueden variar por programa. Actualizado: Enero 2026.
          </p>
        </ScrollReveal>

        {/* Beca CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 bg-umad-cream rounded-2xl p-8 text-center">
            <p className="font-display font-bold text-umad-navy text-xl mb-2">¿Aplicas para beca?</p>
            <p className="text-gray-500 text-sm mb-6">
              Calcula tu descuento en minutos con nuestra calculadora interactiva. Becas desde 10% hasta 50%.
            </p>
            <Link
              to="/becas"
              className="inline-flex items-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Calcular mi beca
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </PageWrapper>
  );
}
