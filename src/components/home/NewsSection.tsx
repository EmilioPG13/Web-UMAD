import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { newsArticles } from '../../data/news';

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
  const articles = newsArticles.slice(0, 3);

  return (
    <section className="py-20 bg-umad-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading title="Noticias y eventos" subtitle="Mantente al día con la vida universitaria de UMAD." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
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
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                <a
                  href="https://umad.edu.mx/noticias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-umad-red text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Leer más <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
