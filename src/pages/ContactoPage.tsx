import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Linkedin, Send } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
);
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.name.trim()) errs.name = 'El nombre es requerido.';
  if (!form.email.includes('@')) errs.email = 'Ingresa un correo válido.';
  if (!form.message.trim()) errs.message = 'Escribe tu mensaje.';
  return errs;
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSent(true);
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-umad-navy ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-umad-navy'
    }`;

  return (
    <PageWrapper>
      {/* Header */}
      <div className="bg-umad-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contacto"
            subtitle="Estamos para ayudarte. Visítanos, escríbenos o llámanos."
            light
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <ScrollReveal>
            <div className="space-y-7">
              {/* Dirección */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-umad-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-umad-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Dirección</p>
                  <p className="text-gray-800 leading-snug">Camino Real a Cholula 4212, Col. Exhacienda La Concepción Buenavista, C.P. 72150, Puebla, México.</p>
                </div>
              </div>

              {/* Correo */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-umad-navy/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-umad-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Correo</p>
                  <a href="mailto:admision@umad.edu.mx" className="text-gray-800 hover:text-umad-red transition-colors">admision@umad.edu.mx</a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-umad-navy/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-umad-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Teléfono</p>
                  <a href="tel:+522221415959" className="block text-gray-800 hover:text-umad-red transition-colors">(+52) 222 141 59 59</a>
                  <a href="tel:+522221415962" className="block text-gray-800 hover:text-umad-red transition-colors">(+52) 222 141 59 62</a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-umad-navy/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-umad-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Horario de atención</p>
                  <p className="text-gray-800">Lun–Vie: 9:00 – 18:00 hrs</p>
                  <p className="text-gray-800">Sábados: 9:00 – 13:00 hrs</p>
                </div>
              </div>

              {/* Social — iconos flotantes con color de marca en hover */}
              <div className="flex items-center gap-1 pt-1">
                <a href="https://www.facebook.com/universidadmaderopuebla" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-[#1877F2] hover:bg-blue-50 transition-all duration-200 hover:scale-110">
                  <FacebookIcon />
                </a>
                <a href="https://x.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="X"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-110">
                  <XIcon />
                </a>
                <a href="https://www.linkedin.com/school/universidad-madero/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 transition-all duration-200 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-[#E1306C] hover:bg-pink-50 transition-all duration-200 hover:scale-110">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                  className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-110">
                  <TikTokIcon />
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-video mt-4">
                <iframe
                  title="Ubicación UMAD"
                  src="https://maps.google.com/maps?q=Universidad+Madero+Camino+Real+a+Cholula+4212+Puebla+Mexico&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.2}>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-green-800 text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-700 text-sm">Un asesor académico se pondrá en contacto contigo en menos de 24 horas hábiles.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-umad-navy text-sm hover:underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Juan García López" className={inputClass('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="juan@ejemplo.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="(222) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-umad-navy focus:border-umad-navy" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Me interesa</label>
                  <select name="interest" value={form.interest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-umad-navy focus:border-umad-navy bg-white">
                    <option value="">Selecciona una opción</option>
                    <optgroup label="── Licenciaturas Presenciales ──">
                      <option>Ingeniería de Software</option>
                      <option>Seguridad Informática y Redes</option>
                      <option>Ingeniería Industrial y Rentabilidad de Negocios</option>
                      <option>Ingeniería en Mecatrónica</option>
                      <option>Ingeniería en Diseño Industrial</option>
                      <option>Diseño y Negocios de la Moda</option>
                      <option>Diseño Digital</option>
                      <option>Imagen y Relaciones Públicas</option>
                      <option>Comunicación y Multimedia</option>
                      <option>Arquitectura e Interiorismo</option>
                      <option>Administración e Innovación de Negocios</option>
                      <option>Finanzas, Banca e Inversiones Estratégicas</option>
                      <option>Mercadotecnia</option>
                      <option>Lenguas Extranjeras</option>
                      <option>Lenguas Extranjeras para los Negocios</option>
                      <option>Negocios Turísticos</option>
                      <option>Comercio Exterior y Derecho Aduanero</option>
                      <option>Derecho</option>
                    </optgroup>
                    <optgroup label="── Maestrías en Línea ──">
                      <option>Maestría en Administración en Proyectos Empresariales</option>
                      <option>Maestría en Administración y Dirección de Negocios</option>
                      <option>Maestría en Docencia y Orientación Escolar</option>
                      <option>Maestría en Imagen y Relaciones Públicas</option>
                      <option>Maestría en Logística Internacional</option>
                      <option>Maestría en Mercadotecnia</option>
                    </optgroup>
                    <optgroup label="── Otros programas ──">
                      <option>Prepa UMAD</option>
                      <option>UMAD Online</option>
                      <option>Centro de Idiomas (CEL)</option>
                      <option>Educación Continua / Diplomados</option>
                      <option>Intercambios Internacionales</option>
                      <option>Prácticas Profesionales</option>
                    </optgroup>
                    <optgroup label="── Información general ──">
                      <option>Becas y financiamiento</option>
                      <option>Costos y pagos</option>
                      <option>Proceso de admisión</option>
                      <option>Otra consulta</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="¿En qué podemos ayudarte?" className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-umad-red hover:bg-umad-red-dark text-white font-bold py-4 rounded-xl transition-colors text-base">
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>
                <p className="text-xs text-gray-400 text-center">Tus datos están seguros. No compartimos tu información con terceros.</p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}
