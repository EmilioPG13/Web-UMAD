import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-umad-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-umad-navy" />
              </div>
              <span className="font-display font-bold text-xl">UMAD</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Universidad Madero — Formando líderes con valores desde 1975. Comprometidos con la excelencia académica y el desarrollo humano integral.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 bg-white/10 hover:bg-umad-red rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
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
                <span>Av. Universidad Madero 555, Col. La Paz, Puebla, Pue.</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                <span>(222) 237-5544</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-umad-red flex-shrink-0 mt-0.5" />
                <span>informes@umad.edu.mx</span>
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
