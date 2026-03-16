import { Content } from './types';

export const EN: Content = {
  nav: {
    services: 'Services',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Licensed electrical contractors in Miami',
    title: 'Sharp electrical work for homes, remodels, and fast-response calls.',
    subtitle:
      'JPower Electric handles urgent repairs, panel upgrades, rewiring, lighting, generators, and EV charging with clear communication and code-compliant work.',
    cta: 'Call Now',
    secondaryCta: 'Explore Services',
    highlights: [
      'State of Florida certified',
      'Emergency response available',
      'Residential, commercial, and industrial',
    ],
    metrics: [
      { value: '15+', label: 'Years on the field' },
      { value: '1.2K+', label: 'Projects completed' },
      { value: '1 Year', label: 'Workmanship warranty' },
    ],
  },
  about: {
    eyebrow: '01 Why JPower',
    title: 'Clear communication, reliable scheduling, and work done the right way.',
    description:
      'We show up prepared, explain the work clearly, protect the property, and finish with safe installations that are built to last.',
    stats: [
      { label: 'Years Experience', value: 15, suffix: '+' },
      { label: 'Projects Done', value: 1200, suffix: '+' },
      { label: 'Happy Clients', value: 950, suffix: '+' },
      { label: 'Warranty', value: 1, suffix: ' Year' },
    ],
    values: [
      {
        title: 'Professionalism',
        description: 'We show up prepared, communicate clearly, and keep every appointment with a reliable service standard.',
      },
      {
        title: 'Experience',
        description: 'Our installations are planned for durability, clean execution, and strict code compliance.',
      },
      {
        title: 'Trust',
        description: 'Clients know what is happening, what it costs, and what warranty backs the completed work.',
      },
      {
        title: 'Safety',
        description: 'We protect homes, businesses, and crews with disciplined procedures and quality components.',
      },
    ],
  },
  services: {
    eyebrow: '02 Core Services',
    title: 'The work clients call us for most, organized by real service needs.',
    subtitle: 'Open each service card to see related work, common requests, and where that solution fits best.',
    items: [
      { id: 'emergency', title: 'Emergency', description: 'Rapid response for urgent electrical issues, ensuring safety and immediate solutions.', icon: 'Zap', featured: true },
      { id: 'generators', title: 'Generators', description: 'Installation and maintenance of backup generators to keep your power running during outages.', icon: 'Power', featured: true },
      { id: 'wiring', title: 'Wiring', description: 'Installation and repair of electrical wiring to ensure efficient and safe power distribution.', icon: 'Cable', featured: true },
      { id: 'repairs', title: 'Repairs & Troubleshooting', description: 'Diagnosing and fixing electrical issues to restore functionality and safety.', icon: 'Wrench' },
      { id: 'panels', title: 'Electrical Panels', description: 'Upgrading and servicing electrical panels to manage your system effectively.', icon: 'Cpu', featured: true },
      { id: 'smoke-fans', title: 'Smoke Detectors & Fans', description: 'Installation and maintenance of smoke detectors and ceiling fans for safety and comfort.', icon: 'Wind' },
      { id: 'circuits', title: 'New Circuits', description: 'Installation of new circuits to support additional appliances or increased power demand.', icon: 'PlusCircle' },
      { id: 'lighting', title: 'Lighting Installations', description: 'Custom installation of lighting systems for enhanced visibility and aesthetics.', icon: 'Lightbulb', featured: true },
      { id: 'construction', title: 'Construction & Remodeling', description: 'Comprehensive electrical services for new construction and renovation projects.', icon: 'Home' },
      { id: 'ev-charging', title: 'EV Charging', description: 'Professional installation of electric vehicle charging stations for home or business.', icon: 'BatteryCharging', featured: true },
      { id: 'switches-outlets', title: 'Switches & Outlets', description: 'Installation and repair of switches and outlets for smooth and safe electrical access.', icon: 'ToggleRight' },
    ],
  },
  faq: {
    title: '03 Common Questions',
    items: [
      { question: 'Are you licensed and insured?', answer: 'Yes. JPower Electric is certified by the State of Florida and carries insurance coverage for residential and commercial work.' },
      { question: 'Do you offer emergency services?', answer: 'Yes. We handle urgent issues that need a fast, safety-first response and clear next steps on site.' },
      { question: 'What areas do you serve?', answer: 'We are based in Miami, FL and work across surrounding areas for residential, commercial, and industrial projects.' },
      { question: 'Do your services come with a warranty?', answer: 'Yes. Completed work is backed by a one-year workmanship warranty.' },
    ],
  },
  contact: {
    eyebrow: '04 Request A Quote',
    title: 'Start the conversation on WhatsApp and get a faster estimate.',
    description: 'Send us photos, project details, or the problem you are facing. We will guide you to the right service and next step.',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    message: 'Project Details',
    send: 'Request Estimate On WhatsApp',
    success: 'Message sent successfully! We will contact you soon.',
    availability: 'Mon-Sat | Fast scheduling and emergency support',
  },
};

export const ES: Content = {
  nav: {
    services: 'Servicios',
    about: 'Nosotros',
    faq: 'Preguntas',
    contact: 'Contacto',
  },
  hero: {
    eyebrow: 'Contratistas electricos con licencia en Miami',
    title: 'Trabajo electrico preciso para hogares, remodelaciones y llamadas urgentes.',
    subtitle:
      'JPower Electric resuelve reparaciones urgentes, paneles, recableado, iluminacion, generadores y cargadores EV con comunicacion clara y trabajo conforme al codigo.',
    cta: 'Llamar Ahora',
    secondaryCta: 'Ver Servicios',
    highlights: [
      'Certificados por el Estado de Florida',
      'Respuesta para emergencias',
      'Residencial, comercial e industrial',
    ],
    metrics: [
      { value: '15+', label: 'Anos en campo' },
      { value: '1.2K+', label: 'Proyectos completados' },
      { value: '1 Ano', label: 'Garantia de trabajo' },
    ],
  },
  about: {
    eyebrow: '01 Por Que JPower',
    title: 'Comunicacion clara, agenda confiable y trabajo bien hecho.',
    description:
      'Llegamos preparados, explicamos el trabajo con claridad, cuidamos la propiedad y entregamos instalaciones seguras pensadas para durar.',
    stats: [
      { label: 'Anos de Experiencia', value: 15, suffix: '+' },
      { label: 'Proyectos Realizados', value: 1200, suffix: '+' },
      { label: 'Clientes Felices', value: 950, suffix: '+' },
      { label: 'Garantia', value: 1, suffix: ' Ano' },
    ],
    values: [
      {
        title: 'Profesionalismo',
        description: 'Llegamos preparados, comunicamos cada paso y mantenemos un estandar de servicio confiable.',
      },
      {
        title: 'Experiencia',
        description: 'Nuestras instalaciones se planifican para durar, verse limpias y cumplir estrictamente con el codigo.',
      },
      {
        title: 'Confianza',
        description: 'El cliente sabe que se hara, cuanto cuesta y que garantia respalda el trabajo terminado.',
      },
      {
        title: 'Seguridad',
        description: 'Protegemos hogares, negocios y equipos con procedimientos disciplinados y componentes de calidad.',
      },
    ],
  },
  services: {
    eyebrow: '02 Servicios Principales',
    title: 'Los trabajos que mas nos solicitan, organizados por necesidad real.',
    subtitle: 'Abre cada tarjeta para ver trabajos relacionados, solicitudes comunes y donde encaja mejor cada servicio.',
    items: [
      { id: 'emergency', title: 'Emergencia', description: 'Respuesta rapida para problemas electricos urgentes, garantizando seguridad y soluciones inmediatas.', icon: 'Zap', featured: true },
      { id: 'generators', title: 'Generadores', description: 'Instalacion y mantenimiento de generadores de respaldo para mantener su energia durante apagones.', icon: 'Power', featured: true },
      { id: 'wiring', title: 'Cableado', description: 'Instalacion y reparacion de cableado electrico para garantizar una distribucion de energia eficiente y segura.', icon: 'Cable', featured: true },
      { id: 'repairs', title: 'Reparaciones', description: 'Diagnostico y solucion de problemas electricos para restaurar la funcionalidad y la seguridad.', icon: 'Wrench' },
      { id: 'panels', title: 'Paneles Electricos', description: 'Actualizacion y servicio de paneles electricos para gestionar su sistema de manera efectiva.', icon: 'Cpu', featured: true },
      { id: 'smoke-fans', title: 'Detectores y Ventiladores', description: 'Instalacion y mantenimiento de detectores de humo y ventiladores de techo para seguridad y confort.', icon: 'Wind' },
      { id: 'circuits', title: 'Nuevos Circuitos', description: 'Instalacion de nuevos circuitos para admitir electrodomesticos adicionales o mayor demanda de energia.', icon: 'PlusCircle' },
      { id: 'lighting', title: 'Iluminacion', description: 'Instalacion personalizada de sistemas de iluminacion para mejorar la visibilidad y la estetica.', icon: 'Lightbulb', featured: true },
      { id: 'construction', title: 'Construccion y Remodelacion', description: 'Servicios electricos integrales para proyectos de nueva construccion y renovacion.', icon: 'Home' },
      { id: 'ev-charging', title: 'Carga de EV', description: 'Instalacion profesional de estaciones de carga para vehiculos electricos en el hogar o negocio.', icon: 'BatteryCharging', featured: true },
      { id: 'switches-outlets', title: 'Interruptores y Tomas', description: 'Instalacion y reparacion de interruptores y tomas para un acceso electrico seguro y fluido.', icon: 'ToggleRight' },
    ],
  },
  faq: {
    title: '03 Preguntas Comunes',
    items: [
      { question: 'Estan licenciados y asegurados?', answer: 'Si. JPower Electric esta certificado por el Estado de Florida y cuenta con cobertura de seguro para trabajos residenciales y comerciales.' },
      { question: 'Ofrecen servicios de emergencia?', answer: 'Si. Atendemos problemas urgentes con una respuesta rapida, segura y con pasos claros en sitio.' },
      { question: 'Que areas cubren?', answer: 'Estamos basados en Miami, FL y trabajamos en las zonas cercanas para proyectos residenciales, comerciales e industriales.' },
      { question: 'Sus servicios tienen garantia?', answer: 'Si. El trabajo terminado cuenta con una garantia de mano de obra de un ano.' },
    ],
  },
  contact: {
    eyebrow: '04 Pide Tu Presupuesto',
    title: 'Escribenos por WhatsApp y recibe una estimacion mas rapida.',
    description: 'Envia fotos, detalles del proyecto o el problema que tienes. Te guiamos al servicio correcto y al siguiente paso.',
    name: 'Nombre Completo',
    email: 'Correo Electronico',
    phone: 'Telefono',
    message: 'Detalles del Proyecto',
    send: 'Pedir Presupuesto Por WhatsApp',
    success: 'Mensaje enviado con exito. Nos pondremos en contacto pronto.',
    availability: 'Lun-Sab | Agenda rapida y soporte de emergencia',
  },
};

export const CONTACT_INFO = {
  phone: '+1 305-525-1268',
  email: 'jpowerelc@gmail.com',
  address: 'Miami, FL 33054',
  whatsapp: 'https://wa.me/13055251268',
  facebook: 'https://www.facebook.com/share/1C1Yn6HSye/',
};
