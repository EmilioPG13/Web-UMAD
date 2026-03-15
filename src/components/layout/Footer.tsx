import { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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

const systemLogos = [
  { src: '/media/logos/umad-logo-blanco.png',           alt: 'UMAD Online', href: 'https://online.umad.edu.mx/', sizeClassName: 'h-11' },
  { src: '/media/logos/logo-umad-escritorio.png',       alt: 'Universidad Madero', href: 'https://umad.edu.mx/', sizeClassName: 'h-10' },
  { src: '/media/logos/logo-imm-escritorio.png',        alt: 'Instituto Mexicano Madero', href: 'https://imm.edu.mx/', sizeClassName: 'h-11' },
  { src: '/media/logos/logo-prepa-escritorio.png',      alt: 'Prepa UMAD', href: 'https://imm.edu.mx/prepa-umad/', sizeClassName: 'h-10' },
  { src: '/media/logos/logo-normal-escritorio.png',     alt: 'Instituto Normal México', href: 'https://inm.edu.mx/', sizeClassName: 'h-11' },
  { src: '/media/logos/logo-papaloapan-escritorio.png', alt: 'UMAD Campus Papaloapan', href: 'https://umadcup.edu.mx/', sizeClassName: 'h-11' },
];

function SystemLogoLink({
  src,
  alt,
  href,
  sizeClassName,
}: {
  src: string;
  alt: string;
  href: string;
  sizeClassName: string;
}) {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="flex min-h-[5.5rem] w-full items-center justify-start rounded-xl px-4 py-3 hover:bg-white/5 hover:opacity-90 transition-all sm:justify-center"
    >
      {showFallback ? (
        <span className="text-center font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-base">
          {alt}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${sizeClassName} w-auto object-contain object-left`}
          onError={() => setShowFallback(true)}
        />
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-umad-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Sistema Educativo Madero logos */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              <div className="col-span-full mb-1">
                <div className="inline-block border border-white/60 px-5 py-2">
                  <h2 className="font-display font-bold text-xs tracking-[0.25em] uppercase text-white">
                    Sistema Educativo Madero
                  </h2>
                </div>
              </div>
              {systemLogos.map((logo) => (
                <SystemLogoLink
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  href={logo.href}
                  sizeClassName={logo.sizeClassName}
                />
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="lg:ml-auto lg:w-full lg:max-w-md">
            <h2 className="font-display font-semibold text-lg text-white mb-6">
              Contacto
            </h2>
            <div className="space-y-3 text-sm text-white/80 leading-relaxed">
              <p>
                <span className="text-blue-400 font-semibold">Dirección:</span>{' '}
                Camino Real a Cholula 4212
                <br />Col. Exhacienda La Concepción Buenavista
                <br />C.P. 72150, Puebla, México.
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Teléfono:</span>{' '}
                <span className="text-white/50">(+52)</span> 222 141 59 59
                <br />
                <span className="ml-[4.6rem]"><span className="text-white/50">(+52)</span> 222 141 59 62</span>
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Email:</span>{' '}
                <a href="mailto:admision@umad.edu.mx" className="hover:text-white transition-colors">
                  admision@umad.edu.mx
                </a>
              </p>
            </div>
            <div className="flex gap-5 mt-7 text-white/70">
              <a href="https://www.facebook.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition-colors">
                <XIcon />
              </a>
              <a href="https://www.linkedin.com/school/universidad-madero/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@umadpuebla" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition-colors">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-1 text-sm text-white/40">
          <span>Derechos reservados © {new Date().getFullYear()}</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors ml-2">Aviso de privacidad</a>
          <span>,</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Código de Ética</a>
          <span>.</span>
        </div>
      </div>
    </footer>
  );
}
