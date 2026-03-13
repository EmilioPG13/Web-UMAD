import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

const valores = [
  { icon: Heart, label: 'Humanismo', desc: 'El ser humano es el centro de nuestra misión educativa.' },
  { icon: Award, label: 'Excelencia', desc: 'Compromiso con los más altos estándares académicos.' },
  { icon: Users, label: 'Comunidad', desc: 'Construimos lazos duraderos entre estudiantes, docentes y egresados.' },
  { icon: Globe, label: 'Visión Global', desc: 'Preparamos profesionistas para un mundo sin fronteras.' },
  { icon: Target, label: 'Responsabilidad', desc: 'Formamos ciudadanos éticos y comprometidos con México.' },
  { icon: Eye, label: 'Innovación', desc: 'Adoptamos nuevas metodologías para una educación pertinente.' },
];

const hitos = [
  { year: '1975', event: 'Fundación de la Universidad Madero por el Lic. Roberto Madero González.' },
  { year: '1990', event: 'Apertura de las facultades de Ingeniería y Ciencias de la Salud.' },
  { year: '2000', event: 'Incorporación al sistema de Reconocimiento de Validez Oficial SEP.' },
  { year: '2010', event: 'Lanzamiento del Centro de Extensión y Lenguas (CEL).' },
  { year: '2018', event: 'Inicio de programas de posgrado en línea.' },
  { year: '2024', event: 'Inauguración del nuevo campus con laboratorios de tecnología e innovación.' },
];

export default function InstitucionPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nuestra Institución"
            subtitle="Más de 50 años transformando vidas a través de la educación de calidad."
            light
          />
        </div>
      </div>

      {/* Misión / Visión */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="p-8 bg-umad-cream rounded-2xl h-full">
                <div className="w-12 h-1 bg-umad-red rounded-full mb-4" />
                <h3 className="font-display font-bold text-umad-navy text-2xl mb-4">Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Formar profesionistas de excelencia, íntegros y con valores humanistas, capaces de contribuir al desarrollo sustentable de la sociedad mexicana, mediante una educación de calidad, innovadora y pertinente que articule el conocimiento científico con el compromiso social.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="p-8 bg-umad-navy rounded-2xl h-full">
                <div className="w-12 h-1 bg-umad-red rounded-full mb-4" />
                <h3 className="font-display font-bold text-white text-2xl mb-4">Visión</h3>
                <p className="text-white/75 leading-relaxed">
                  Ser la universidad privada de referencia en Puebla por su excelencia académica, innovación tecnológica y formación humana integral, reconocida nacional e internacionalmente por la calidad de sus egresados y su impacto positivo en el desarrollo regional.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="py-20 bg-umad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestros valores" center />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <ScrollReveal key={v.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-umad-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-umad-navy text-base mb-2">{v.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Historia de UMAD" subtitle="Cinco décadas de trayectoria educativa." />
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {hitos.map((h, i) => (
                <ScrollReveal key={h.year} delay={i * 0.1}>
                  <div className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-16 h-12 bg-umad-red rounded-xl flex items-center justify-center z-10 shadow-md">
                      <span className="font-display font-bold text-white text-sm">{h.year}</span>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed">{h.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
