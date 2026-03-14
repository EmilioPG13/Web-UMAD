import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-umad-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg px-3 py-1.5 inline-flex">
                <img src="/media/logos/umad-logo.png" alt="UMAD" className="h-8 w-auto" />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Universidad Madero — Formando líderes con valores desde 1975. Comprometidos con la excelencia académica y el desarrollo humano integral.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/universidadmaderopuebla" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com/school/universidad-madero/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Oferta educativa</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {['Licenciaturas', 'Maestrías', 'Doctorados', 'CEL — Idiomas', 'Educación continua'].map(item => (
                <li key={item}>
                  <Link to="/carreras" className="hover:text-umad-red transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Estudiantes</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {[
                { label: 'Admisiones', to: '/admisiones' },
                { label: 'Becas', to: '/becas' },
                { label: 'Costos', to: '/costos' },
                { label: 'SISE (Portal)', to: '#' },
                { label: 'Manual del universitario', to: '#' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-umad-red transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                <span>Camino Real a Cholula 4212, Col. Exhacienda La Concepción Buenavista, C.P. 72150, Puebla, México.</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                <span>(+52) 222 141 59 59<br />(+52) 222 141 59 62</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                <span>admision@umad.edu.mx</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-white/5 rounded-lg text-xs text-white/60">
              <p className="font-medium text-white/80 mb-1">Horarios de atención</p>
              <p>Lunes–Viernes: 9:00–18:00 hrs</p>
              <p>Sábados: 9:00–13:00 hrs</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Universidad Madero. Todos los derechos reservados.</p>
          <p>RVOE SEP · Institución de Educación Superior Privada</p>
        </div>
      </div>
    </footer>
  );
}
