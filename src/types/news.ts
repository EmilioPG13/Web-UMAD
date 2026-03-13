export type NewsCategory = 'Noticias' | 'Eventos' | 'Logros' | 'Convocatorias';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  imageUrl: string;
  publishedAt: string;
  slug: string;
}
