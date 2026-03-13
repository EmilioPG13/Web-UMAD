import type { NewsArticle } from '../types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'UMAD obtiene reconocimiento SEP por excelencia educativa 2025',
    excerpt: 'La Universidad Madero fue reconocida por la Secretaría de Educación Pública por sus indicadores de calidad académica y tasa de titulación.',
    category: 'Logros',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    publishedAt: '2025-11-15',
    slug: 'reconocimiento-sep-2025',
  },
  {
    id: 'news-2',
    title: 'Apertura del nuevo laboratorio de tecnología e innovación',
    excerpt: 'Inauguramos un espacio de vanguardia con impresoras 3D, laboratorio de IoT y sala de realidad virtual para estudiantes de ingeniería.',
    category: 'Noticias',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    publishedAt: '2025-10-28',
    slug: 'laboratorio-innovacion',
  },
  {
    id: 'news-3',
    title: 'Convocatoria: Becas de excelencia enero 2026',
    excerpt: 'Abrimos el proceso de solicitud para becas del semestre enero–junio 2026. Conoce los requisitos y fechas límite.',
    category: 'Convocatorias',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    publishedAt: '2025-10-10',
    slug: 'convocatoria-becas-2026',
  },
  {
    id: 'news-4',
    title: 'Egresados UMAD en las empresas más importantes de Puebla',
    excerpt: 'Más del 85% de nuestros egresados se encuentran activos en el mercado laboral dentro de los primeros seis meses después de su titulación.',
    category: 'Logros',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    publishedAt: '2025-09-20',
    slug: 'egresados-mercado-laboral',
  },
];
