export interface AdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  detail: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    id: 1,
    title: 'Solicita informes',
    description: 'Contáctanos por WhatsApp, teléfono o visítanos en campus.',
    icon: 'MessageCircle',
    detail: 'Lunes a viernes 9:00–18:00 hrs · Sábados 9:00–13:00 hrs · Tel: 222 141 59 59 ext. 136, 123, 160',
  },
  {
    id: 2,
    title: 'Paga tu ficha de examen',
    description: 'Realiza el pago de la ficha de admisión para apartar tu lugar en el examen.',
    icon: 'CreditCard',
    detail: 'En caja UMAD o depósito bancario en Scotiabank a nombre de Promotora de Cultura y Servicio Social A.C., convenio No. 3642.',
  },
  {
    id: 3,
    title: 'Presenta tu examen',
    description: 'El examen es psicométrico — no requiere estudio previo.',
    icon: 'PenLine',
    detail: 'Puedes presentarlo desde casa en línea o en instalaciones UMAD. Adicionalmente presentarás un examen de ubicación de inglés para determinar tu nivel — no requiere preparación previa.',
  },
  {
    id: 4,
    title: 'Conoce tus resultados',
    description: 'Un asesor te informará tu resultado y te enviará las indicaciones para continuar el proceso.',
    icon: 'CheckCircle',
    detail: 'Recibirás notificación por correo electrónico o vía WhatsApp con los pasos a seguir.',
  },
  {
    id: 5,
    title: 'Entrega documentos e inscríbete',
    description: 'Presenta tu documentación completa en ventanilla y formaliza tu inscripción.',
    icon: 'FileText',
    detail: 'Certificado de bachillerato (original y copia) · CURP · Acta de nacimiento (original y copia) · Identificación oficial (INE o pasaporte)',
  },
];
