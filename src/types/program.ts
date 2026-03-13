export type Modality = 'Presencial' | 'En línea' | 'Mixto';

export type Faculty =
  | 'Derecho'
  | 'Ingeniería y Tecnología'
  | 'Ciencias de la Salud'
  | 'Negocios y Administración'
  | 'Humanidades y Educación';

export type ProgramLevel = 'Licenciatura' | 'Maestría' | 'Doctorado' | 'TSU';

export interface Program {
  id: string;
  name: string;
  shortName: string;
  faculty: Faculty;
  level: ProgramLevel;
  modalities: Modality[];
  durationSemesters: number;
  description: string;
  accentColor: string;
  featured: boolean;
  rvoeCode?: string;
}
