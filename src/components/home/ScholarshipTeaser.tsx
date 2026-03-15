import { Link } from 'react-router-dom';
import { Calculator, CheckCircle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const perks = [
  'Subsidios desde 10% hasta 75% en colegiatura',
  'Descuentos por excelencia académica',
  'Convenios con empresas',
  'Beca familiar para hermanos UMAD',
];

export default function ScholarshipTeaser() {
  return (
    <section className="py-20 bg-umad-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <ScrollReveal>
            <div className="inline-block w-12 h-1 bg-umad-red rounded-full mb-4" />
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Becas y financiamiento<br />a tu medida
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              En UMAD creemos que la calidad educativa debe ser accesible. Contamos con un amplio programa de becas para que nada detenga tu desarrollo.
            </p>
            <ul className="space-y-3 mb-10">
              {perks.map(perk => (
                <li key={perk} className="flex items-center gap-3 text-white/85">
                  <CheckCircle className="w-5 h-5 text-umad-red flex-shrink-0" />
                  <span className="text-sm">{perk}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/becas"
              className="inline-flex items-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Calcular mi beca
            </Link>
          </ScrollReveal>

          {/* Right — mini calculator preview */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <p className="font-display font-semibold text-umad-navy text-lg mb-1">¿Cuánto puedo ahorrar?</p>
              <p className="text-gray-500 text-sm mb-6">Ejemplo con promedio 9.2 + primer ingreso</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Beca académica base</span>
                  <span className="font-bold text-umad-navy">25%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Bono primer ingreso</span>
                  <span className="font-bold text-green-600">+5%</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-umad-cream rounded-xl px-4">
                  <span className="font-semibold text-umad-navy">Total de descuento</span>
                  <span className="font-display font-bold text-2xl text-umad-red">30%</span>
                </div>
              </div>

              <Link
                to="/becas"
                className="mt-6 block text-center bg-umad-navy hover:bg-umad-navy-dark text-white font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Calcular con mis datos →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
