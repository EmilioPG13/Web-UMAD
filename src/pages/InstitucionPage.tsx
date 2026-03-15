import { Heart, Shield, Users, Sparkles, CircleUser, Leaf } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';

const valores = [
  { icon: Shield,     label: 'Integridad Académica', desc: 'Honestidad y rigor en cada proceso de enseñanza, aprendizaje e investigación.' },
  { icon: Heart,      label: 'Generosidad',           desc: 'Disposición para compartir conocimiento, tiempo y recursos con la comunidad.' },
  { icon: Users,      label: 'Solidaridad',           desc: 'Apoyo mutuo entre estudiantes, docentes y egresados como comunidad universitaria.' },
  { icon: Sparkles,   label: 'Espiritualidad',        desc: 'Formación integral que reconoce la dimensión espiritual del ser humano.' },
  { icon: CircleUser, label: 'Dignidad Humana',       desc: 'Respeto irrestricto a toda persona sin distinción de raza, género o condición económica.' },
  { icon: Leaf,       label: 'Sostenibilidad',        desc: 'Compromiso con un desarrollo responsable que cuide el entorno para generaciones futuras.' },
];

const hitos = [
  { year: '1982', event: 'Fundación de la Universidad Madero — primera universidad protestante en Puebla, con 2 licenciaturas incorporadas a la UNAM.' },
  { year: '1991', event: 'Construcción y apertura del campus actual en Puebla.' },
  { year: '1993', event: 'Ampliación de la oferta educativa a 7 programas de licenciatura.' },
  { year: '2000', event: 'Acreditación ante la Federación de Instituciones Mexicanas Particulares de Educación Superior (FIMPES).' },
  { year: '2001', event: 'Certificación ISO 9001 en procesos académicos y administrativos.' },
  { year: '2008', event: 'Reconocimiento SEP como institución de Excelencia Académica.' },
  { year: '2015', event: 'Refrendo del reconocimiento SEP de Excelencia Académica.' },
];

const alianzas = [
  { name: 'SAP University Alliance',  area: 'ERP & Sistemas Empresariales', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'IBM Academic Initiative',  area: 'Tecnología & Cloud Computing',  color: 'bg-gray-50 border-gray-200 text-gray-800' },
  { name: 'Siemens',                  area: 'Automatización & Manufactura',  color: 'bg-teal-50 border-teal-200 text-teal-800' },
  { name: 'Cisco Networking Academy', area: 'Redes & Ciberseguridad',        color: 'bg-sky-50 border-sky-200 text-sky-800'  },
];

const acreditaciones = [
  { name: 'FIMPES',                   desc: 'Federación de Instituciones Mexicanas Particulares de Educación Superior' },
  { name: 'ISO 9001:2015',            desc: 'Certificación internacional en gestión de calidad' },
  { name: 'SEP Excelencia Académica', desc: 'Reconocimiento de la Secretaría de Educación Pública' },
  { name: 'CASE',                     desc: 'Council for Advancement and Support of Education' },
];

export default function InstitucionPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Universidad Madero"
            subtitle="Más de 40 años formando líderes íntegros, críticos y comprometidos con México."
            light
          />
        </div>
      </div>

      {/* Misión / Visión */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-umad-cream rounded-2xl">
              <div className="w-12 h-1 bg-umad-red rounded-full mb-4" />
              <h3 className="font-display font-bold text-umad-navy text-2xl mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Formamos profesionales competentes, íntegros, críticos y comprometidos, que
                transforman su entorno con sentido, conocimiento y valores.
              </p>
            </div>
            <div className="p-8 bg-umad-navy rounded-2xl">
              <div className="w-12 h-1 bg-umad-red rounded-full mb-4" />
              <h3 className="font-display font-bold text-white text-2xl mb-4">Visión 2035</h3>
              <p className="text-white/75 leading-relaxed">
                Ser una Universidad innovadora y confiable, reconocida por la excelente formación
                académica y por el trato humano y sensible que da a sus estudiantes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filosofía Metodista */}
      <div className="py-20 bg-umad-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-1 bg-umad-red rounded-full mx-auto mb-6" />
            <h2 className="font-display font-bold text-umad-navy text-3xl mb-6">Filosofía Metodista</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Como universidad de raíz metodista, UMAD fundamenta su quehacer educativo en el
              desarrollo integral de la persona: cuerpo, mente y espíritu. Creemos en la
              espiritualidad como fuerza transformadora, en la justicia social como imperativo
              ético, y en la solidaridad como motor de comunidad. Formamos sin discriminar
              por raza, género o condición económica, convencidos de que la dignidad humana
              es el punto de partida de toda educación auténtica.
            </p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nuestros valores" center />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {valores.map((v) => (
              <div key={v.label} className="bg-umad-cream rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-umad-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-display font-bold text-umad-navy text-base mb-2">{v.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="py-20 bg-umad-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Historia de UMAD" subtitle="Cuatro décadas de trayectoria educativa en Puebla." />
          <div className="relative mt-12">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-300 hidden sm:block" />
            <div className="space-y-6">
              {hitos.map((h) => (
                <div key={h.year} className="flex gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-12 bg-umad-red rounded-xl flex items-center justify-center z-10 shadow-md">
                    <span className="font-display font-bold text-white text-sm">{h.year}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed">{h.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alianzas */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Alianzas estratégicas"
            subtitle="Trabajamos con líderes globales para llevar tecnología de frontera al aula."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {alianzas.map((a) => (
              <div key={a.name} className={`rounded-2xl border p-6 text-center ${a.color}`}>
                <p className="font-display font-bold text-lg mb-1">{a.name}</p>
                <p className="text-xs opacity-70">{a.area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Acreditaciones */}
      <div className="py-20 bg-umad-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Acreditaciones"
            subtitle="Calidad educativa respaldada por organismos nacionales e internacionales."
            light
            center
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {acreditaciones.map((a) => (
              <div key={a.name} className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
                <p className="font-display font-bold text-white text-lg mb-2">{a.name}</p>
                <p className="text-white/60 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
