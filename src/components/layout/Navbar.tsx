import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navLinks = [
  { to: '/carreras', label: 'Oferta Educativa' },
  { to: '/becas', label: 'Becas' },
  { to: '/admisiones', label: 'Admisiones' },
  { to: '/costos', label: 'Costos' },
  { to: '/institucion', label: 'Institución' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => { setOpen(false); }, [location]);

  useGSAP(() => {
    const el = headerRef.current;
    if (!el) return;

    // Always white background; shadow intensifies on scroll
    gsap.set(el, {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    });

    const st = ScrollTrigger.create({
      start: 60,
      onEnter: () =>
        gsap.to(el, {
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        }),
      onLeaveBack: () =>
        gsap.to(el, {
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        }),
    });

    return () => st.kill();
  }, { dependencies: [isHome] });

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/media/logos/umad-logo.png" alt="UMAD" className="h-10 lg:h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-800 font-medium hover:text-red-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/admisiones"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Inscríbete
            </Link>
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-red-50 text-red-600 font-semibold'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-red-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admisiones"
                className="mt-2 px-4 py-3 bg-red-600 text-white font-semibold text-sm rounded-lg text-center"
              >
                Inscríbete ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
