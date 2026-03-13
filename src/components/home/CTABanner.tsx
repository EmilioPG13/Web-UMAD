import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="py-20 bg-umad-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
            Agenda una visita a nuestras instalaciones o solicita informes ahora mismo. Un asesor académico te atenderá personalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-umad-red hover:bg-umad-cream font-bold px-8 py-4 rounded-lg transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              Solicitar informes
            </Link>
            <Link
              to="/admisiones"
              className="inline-flex items-center justify-center gap-2 bg-umad-red-dark hover:bg-umad-navy-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-base border border-white/30"
            >
              <MapPin className="w-5 h-5" />
              Agendar visita
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
