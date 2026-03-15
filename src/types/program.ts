export type Modality = 'Presencial' | 'En línea' | 'Mixto';

export type ProgramCategory =
  | 'Licenciaturas'
  | 'Maestrías'
  | 'Prepa UMAD'
  | 'UMAD Online'
  | 'Educación Continua'
  | 'Intercambios'
  | 'Prácticas Profesionales'
  | 'Training Model';

export type Faculty =
  | 'Ingenierías'
  | 'Arte y Humanidades'
  | 'Negocios'
  | 'Ciencias Sociales'
  | 'Comercio y Derecho'
  | 'Posgrados en Línea';

export type ProgramLevel = 'Licenciatura' | 'Maestría' | 'Doctorado' | 'TSU';

export interface Program {
  id: string;
  name: string;
  shortName: string;
  faculty: Faculty;
  level: ProgramLevel;
  category?: ProgramCategory;
  modalities: Modality[];
  durationSemesters: number;
  description: string;
  accentColor: string;
  imageUrl?: string;
  featured: boolean;
  rvoeCode?: string;
}
