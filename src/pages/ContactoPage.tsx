import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';
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
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Dirección', value: 'Av. Universidad Madero 555, Col. La Paz, Puebla, Pue. C.P. 72160' },
                { icon: Phone, label: 'Teléfono', value: '(222) 237-5544' },
                { icon: Mail, label: 'Correo', value: 'informes@umad.edu.mx' },
              ].map(info => (
                <div key={info.label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-umad-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                    <p className="text-umad-navy font-medium mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-umad-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Horario de atención</p>
                  <p className="text-umad-navy font-medium mt-0.5">Lun–Vie: 9:00 – 18:00 hrs</p>
                  <p className="text-umad-navy font-medium">Sábados: 9:00 – 13:00 hrs</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-2">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-umad-navy hover:bg-umad-red rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-video mt-4">
                <iframe
                  title="Ubicación UMAD"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.87!2d-98.2!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAwLjAiTiA5OMKwMTInMDAuMCJX!5e0!3m2!1ses!2smx!4v1"
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
                    <option>Licenciatura</option>
                    <option>Maestría / Doctorado</option>
                    <option>CEL — Idiomas</option>
                    <option>Información de becas</option>
                    <option>Educación continua</option>
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
