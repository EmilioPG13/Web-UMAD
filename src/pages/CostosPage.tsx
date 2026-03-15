import { Phone, MessageSquare, CheckCircle, Info } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

const subsidios = [
  {
    name: 'SEP Estatal',
    desc: 'Beca otorgada por la Secretaría de Educación del Estado de Puebla.',
    req: 'Promedio mínimo 8.5',
    color: 'border-umad-navy',
    badge: 'bg-umad-navy',
  },
  {
    name: 'SEP Federal',
    desc: 'Beca federal para estudiantes con alto rendimiento académico.',
    req: 'Promedio mínimo 8.5',
    color: 'border-umad-navy',
    badge: 'bg-umad-navy',
  },
  {
    name: 'Intercambio Deportivo',
    desc: 'Para estudiantes con destacada participación deportiva representando a UMAD.',
    req: 'Promedio mínimo 7.5 · 20%–50% de subsidio',
    color: 'border-green-600',
    badge: 'bg-green-600',
  },
  {
    name: 'Fidelidad Metodista',
    desc: 'Reconocimiento acumulable para egresados de colegios metodistas.',
    req: '5% por cada nivel cursado en escuela metodista (acumulable)',
    color: 'border-purple-600',
    badge: 'bg-purple-600',
  },
  {
    name: 'Convenio Bachilleratos',
    desc: 'Para egresados de bachilleratos con convenio vigente con UMAD.',
    req: 'Hasta 75% con promedio 9.6 · o 50% con promedio 9.0',
    color: 'border-umad-red',
    badge: 'bg-umad-red',
  },
];

export default function CostosPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Costos y Financiamiento"
            subtitle="Costos personalizados según tu programa y perfil. Te asesoramos sin compromiso."
            light
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Cotización personalizada */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-umad-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-umad-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-umad-navy text-xl mb-1">Cuotas personalizadas</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    La UMAD maneja cuotas personalizadas según el programa y perfil del alumno.
                    Contáctanos directamente para recibir tu cotización y conocer las opciones
                    de pago disponibles para ti.
                  </p>
                </div>
              </div>

              <div className="bg-umad-cream rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-umad-navy flex-shrink-0" />
                  <span className="text-umad-navy font-semibold text-sm">222 141 59 59</span>
                  <span className="text-gray-400 text-sm">ext. 136, 123, 160</span>
                </div>
                <a
                  href="https://wa.me/522221415959?text=Hola%2C%20me%20interesa%20conocer%20los%20costos%20de%20UMAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Solicitar información de costos
                </a>
              </div>
            </div>

            {/* What's covered */}
            <div className="border-t border-gray-100 px-8 py-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Tu colegiatura incluye</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Acceso a plataforma educativa',
                  'Biblioteca física y digital',
                  'Laboratorios y talleres especializados',
                  'Actividades culturales y deportivas',
                  'Asesoría académica y orientación',
                  'Servicio médico estudiantil',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Subsidios y Becas */}
        <ScrollReveal>
          <div>
            <SectionHeading
              title="Subsidios y becas"
              subtitle="UMAD ofrece distintos esquemas de apoyo económico para que el costo no sea un obstáculo."
            />
            <div className="mt-8 space-y-4">
              {subsidios.map((s, i) => (
                <ScrollReveal key={s.name} delay={i * 0.08}>
                  <div className={`bg-white rounded-2xl border-l-4 ${s.color} border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-white text-xs font-bold px-2.5 py-0.5 rounded-full ${s.badge}`}>
                          {s.name}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xs text-gray-400 font-medium leading-snug max-w-[200px] sm:max-w-none">{s.req}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ENNTI Financiamiento */}
        <ScrollReveal>
          <div className="bg-umad-navy rounded-2xl p-8 text-white">
            <div className="w-10 h-1 bg-umad-red rounded-full mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">Financiamiento ENNTI</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              El esquema ENNTI te permite realizar pagos reducidos durante toda tu carrera y cubrir
              el diferencial una vez que te titules y estés trabajando. Una opción pensada para que
              ningún obstáculo económico detenga tu formación.
            </p>
            <p className="text-white/50 text-xs">
              Consulta elegibilidad y condiciones directamente con el departamento de finanzas UMAD.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Becas calculator */}
        <ScrollReveal>
          <div className="bg-umad-cream rounded-2xl p-8 text-center">
            <p className="font-display font-bold text-umad-navy text-xl mb-2">¿Aplicas para subsidio?</p>
            <p className="text-gray-500 text-sm mb-6">
              Calcula tu descuento en minutos con nuestra calculadora interactiva.
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
