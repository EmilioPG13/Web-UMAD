import { MessageCircle, ClipboardList, FileText, PenLine, CheckCircle, GraduationCap } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { admissionSteps } from '../data/admissions';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle, ClipboardList, FileText, PenLine, CheckCircle, GraduationCap,
};

export default function AdmisionesPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Proceso de Admisión"
            subtitle="Tu camino a UMAD en 6 pasos simples. Sin complicaciones, sin burocracia innecesaria."
            light
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

          <div className="space-y-8">
            {admissionSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? CheckCircle;
              return (
                <ScrollReveal key={step.id} delay={i * 0.1}>
                  <div className="flex gap-6 items-start relative">
                    {/* Step circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-umad-navy flex flex-col items-center justify-center relative z-10 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                      <span className="text-white/60 text-xs mt-0.5">0{step.id}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-display font-bold text-umad-navy text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <div className="bg-umad-cream rounded-lg px-3 py-2">
                        <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Documents list */}
        <ScrollReveal>
          <div className="mt-16 bg-umad-navy rounded-2xl p-8 text-white">
            <h3 className="font-display font-bold text-xl mb-4">Documentos requeridos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Certificado de bachillerato (original y copia)',
                'CURP (original y copia)',
                'Acta de nacimiento (original y copia)',
                '4 fotografías tamaño infantil en blanco y negro',
                'Identificación oficial (INE o pasaporte)',
                'Comprobante de domicilio reciente',
                'Solicitud de admisión llenada',
                'Resultado del examen de admisión EXANI-II',
              ].map(doc => (
                <div key={doc} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">¿Tienes dudas sobre el proceso?</p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Contactar a un asesor
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
