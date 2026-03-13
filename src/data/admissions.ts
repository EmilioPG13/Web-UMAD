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
    detail: 'Lunes a viernes 9:00–18:00 hrs · Sábados 9:00–13:00 hrs · Tel: (222) 123-4567',
  },
  {
    id: 2,
    title: 'Llena tu solicitud',
    description: 'Descarga o recoge el formulario de admisión en ventanilla.',
    icon: 'ClipboardList',
    detail: 'También disponible en línea. Se requiere correo electrónico vigente.',
  },
  {
    id: 3,
    title: 'Entrega documentos',
    description: 'Presenta tu documentación completa en la ventanilla de admisiones.',
    icon: 'FileText',
    detail: 'Certificado de bachillerato · CURP · Acta de nacimiento · 4 fotos tamaño infantil · INE o pasaporte',
  },
  {
    id: 4,
    title: 'Realiza tu examen',
    description: 'Presenta el examen de admisión EXANI-II en la fecha asignada.',
    icon: 'PenLine',
    detail: 'El examen se presenta en instalaciones UMAD. Dura aproximadamente 3 horas.',
  },
  {
    id: 5,
    title: 'Consulta resultados',
    description: 'Revisa tu resultado en el sistema SISE a los 5 días hábiles.',
    icon: 'CheckCircle',
    detail: 'Recibirás notificación por correo electrónico con tus credenciales.',
  },
  {
    id: 6,
    title: '¡Inscríbete!',
    description: 'Realiza tu pago de inscripción y accede a tu ficha de bienvenida.',
    icon: 'GraduationCap',
    detail: 'El pago puede realizarse en caja, transferencia bancaria o en línea. ¡Bienvenido a la familia UMAD!',
  },
];
