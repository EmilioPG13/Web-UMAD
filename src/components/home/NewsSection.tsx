import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { newsArticles } from '../../data/news';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categoryColors: Record<string, string> = {
  Noticias: 'bg-umad-navy',
  Eventos: 'bg-purple-600',
  Logros: 'bg-green-600',
  Convocatorias: 'bg-amber-600',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsSection() {
  const [featured, ...rest] = newsArticles.slice(0, 3);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.news-card', containerRef.current!);
    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-20 bg-umad-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
          <SectionHeading title="Noticias y eventos" subtitle="Mantente al día con la vida universitaria de UMAD." />
        </div>

        {/* Editorial layout: featured 2/3 + sidebar 1/3 */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-6">

          {/* Featured card — 2/3 width */}
          <article className="news-card lg:w-2/3 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge label={featured.category} colorClass={categoryColors[featured.category]} />
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <Calendar className="w-3 h-3" />
                  {formatDate(featured.publishedAt)}
                </span>
              </div>
              <h3 className="font-display font-semibold text-umad-navy text-xl leading-snug mb-2 group-hover:text-umad-red transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{featured.excerpt}</p>
              <button className="mt-4 text-umad-red text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Leer más <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Sidebar — 1/3 width, two cards stacked */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {rest.map(article => (
              <article
                key={article.id}
                className="news-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge label={article.category} colorClass={categoryColors[article.category]} />
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-umad-navy text-base leading-snug mb-2 group-hover:text-umad-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <button className="mt-4 text-umad-red text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Leer más <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
