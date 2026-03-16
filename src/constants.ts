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
    title: "Miami's electrical work, done right the first time.",
    subtitle:
      'From panel upgrades to EV chargers, we solve electrical work that needs to be safe, fast, and code-compliant.',
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
  howItWorks: {
    eyebrow: '03 How It Works',
    title: 'From first call to finished work in four clear steps.',
    steps: [
      { number: '01', title: 'Call or Message', description: 'Reach us by phone or WhatsApp in seconds. We answer fast and guide you to the right next step.' },
      { number: '02', title: 'On-Site Diagnosis', description: 'We arrive prepared, assess the issue thoroughly, and explain what needs to be done in plain language.' },
      { number: '03', title: 'Clear Quote', description: 'You receive a transparent estimate with zero hidden costs before any work begins.' },
      { number: '04', title: 'Work + Warranty', description: 'We complete the job to code, clean up, and back every installation with a 1-year workmanship warranty.' },
    ],
  },
  testimonials: {
    eyebrow: '04 Client Reviews',
    title: 'What clients say about working with us.',
    subtitle: '5.0 · 86 Google reviews',
    cta: 'See all reviews on Google',
    items: [
      {
        name: 'Mari Cabrera',
        role: 'Local Guide · Google',
        text: 'Jesus was punctual and polite! After 2 months with no light in our living room and dining room and calling multiple no show electricians, I was grateful for his attention and professionalism. He got the job done with ease and made sure I knew what needed to be replaced. I highly recommend him and will be using his services again.',
        rating: 5,
      },
      {
        name: 'Lien Perez',
        role: 'Local Guide · Google',
        text: 'Tuve una experiencia fantástica con JPower Electric! Tuvimos un problema electrico en casa los llame y contesto Jesús Hernandez le explique lo que sucedia y en menos de una hora estaba en mi puerta para hacer un diagnóstico del problema, lo explicó todo con claridad y mucho conocimiento. Realizo el trabajo sin ningún problema de principio a fin con un precio razonable. Realmente se preocupa por brindar un servicio excelente.',
        rating: 5,
      },
      {
        name: 'Fany Hernandez',
        role: 'Google',
        text: 'Quiero destacar el excelente trabajo realizado por este electricista. Su profesionalismo, puntualidad y atención al detalle superaron todas mis expectativas. Desde el primer contacto hasta la finalización del proyecto, demostró gran conocimiento y compromiso, solucionando cualquier inconveniente de forma rápida y eficiente. Sin duda, recomendaría sus servicios a quien busque calidad y confianza en el área eléctrica. ¡Gracias por un trabajo impecable!',
        rating: 5,
      },
      {
        name: 'Roberto Rojas',
        role: 'Google',
        text: 'Estoy muy complacido con el servicio de esta compañía, me instalaron las luces que necesitamos sin daños, fueron puntuales y muy profesionales, es difícil de encontrar en estos días, los recomiendo y me he convertido en su cliente siempre que necesite cualquier trabajo de electricidad.',
        rating: 5,
      },
      {
        name: 'Ariel Nieto',
        role: 'Local Guide · Google',
        text: 'Muy buen servicio, nos instalo las luces del techo nuevas LED. Puntual y muy calificado para este trabajo.',
        rating: 5,
      },
    ],
  },
  faq: {
    title: '05 Common Questions',
    items: [
      { question: 'Are you licensed and insured?', answer: 'Yes. JPower Electric is certified by the State of Florida and carries insurance coverage for residential and commercial work.' },
      { question: 'Do you offer emergency services?', answer: 'Yes. We handle urgent issues that need a fast, safety-first response and clear next steps on site.' },
      { question: 'What areas do you serve?', answer: 'We are based in Miami, FL and work across surrounding areas for residential, commercial, and industrial projects.' },
      { question: 'Do your services come with a warranty?', answer: 'Yes. Completed work is backed by a one-year workmanship warranty.' },
    ],
  },
  contact: {
    eyebrow: '06 Request A Quote',
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
    eyebrow: 'Contratistas eléctricos con licencia en Miami',
    title: 'Electricidad en Miami, bien hecha desde el primer momento.',
    subtitle:
      'Desde paneles eléctricos hasta cargadores EV, resolvemos trabajos que deben hacerse de forma segura, rápida y conforme al código.',
    cta: 'Llamar Ahora',
    secondaryCta: 'Ver Servicios',
    highlights: [
      'Certificados por el Estado de Florida',
      'Respuesta para emergencias',
      'Residencial, comercial e industrial',
    ],
    metrics: [
      { value: '15+', label: 'Años de experiencia' },
      { value: '1.2K+', label: 'Proyectos completados' },
      { value: '1 Año', label: 'Garantía de mano de obra' },
    ],
  },
  about: {
    eyebrow: '01 Por Qué JPower',
    title: 'Comunicación clara, agenda confiable y trabajo bien hecho.',
    description:
      'Llegamos preparados, explicamos el trabajo con claridad, cuidamos la propiedad y entregamos instalaciones seguras pensadas para durar.',
    stats: [
      { label: 'Años de Experiencia', value: 15, suffix: '+' },
      { label: 'Proyectos Realizados', value: 1200, suffix: '+' },
      { label: 'Clientes Felices', value: 950, suffix: '+' },
      { label: 'Garantía', value: 1, suffix: ' Año' },
    ],
    values: [
      {
        title: 'Profesionalismo',
        description: 'Llegamos preparados, comunicamos cada paso y mantenemos un estándar de servicio confiable.',
      },
      {
        title: 'Experiencia',
        description: 'Nuestras instalaciones se planifican para durar, verse limpias y cumplir estrictamente con el código.',
      },
      {
        title: 'Confianza',
        description: 'El cliente sabe qué se hará, cuánto cuesta y qué garantía respalda el trabajo terminado.',
      },
      {
        title: 'Seguridad',
        description: 'Protegemos hogares, negocios y equipos con procedimientos disciplinados y componentes de calidad.',
      },
    ],
  },
  services: {
    eyebrow: '02 Servicios Principales',
    title: 'Los trabajos que más nos solicitan, organizados por necesidad real.',
    subtitle: 'Abre cada tarjeta para ver trabajos relacionados, solicitudes comunes y dónde encaja mejor cada servicio.',
    items: [
      { id: 'emergency', title: 'Emergencia', description: 'Respuesta rápida para problemas eléctricos urgentes, garantizando seguridad y soluciones inmediatas.', icon: 'Zap', featured: true },
      { id: 'generators', title: 'Generadores', description: 'Instalación y mantenimiento de generadores de respaldo para mantener tu energía durante apagones.', icon: 'Power', featured: true },
      { id: 'wiring', title: 'Cableado', description: 'Instalación y reparación de cableado eléctrico para una distribución de energía eficiente y segura.', icon: 'Cable', featured: true },
      { id: 'repairs', title: 'Reparaciones y Diagnóstico', description: 'Diagnóstico y solución de problemas eléctricos para recuperar funcionalidad y seguridad.', icon: 'Wrench' },
      { id: 'panels', title: 'Paneles Eléctricos', description: 'Actualización y servicio de paneles eléctricos para gestionar tu sistema de forma segura.', icon: 'Cpu', featured: true },
      { id: 'smoke-fans', title: 'Detectores y Ventiladores', description: 'Instalación y mantenimiento de detectores de humo y ventiladores de techo para seguridad y confort.', icon: 'Wind' },
      { id: 'circuits', title: 'Nuevos Circuitos', description: 'Instalación de nuevos circuitos para soportar más carga o nuevos equipos.', icon: 'PlusCircle' },
      { id: 'lighting', title: 'Iluminación', description: 'Instalación personalizada de sistemas de iluminación para mejorar visibilidad y ambiente.', icon: 'Lightbulb', featured: true },
      { id: 'construction', title: 'Construcción y Remodelación', description: 'Servicios eléctricos integrales para obra nueva y proyectos de renovación.', icon: 'Home' },
      { id: 'ev-charging', title: 'Carga de EV', description: 'Instalación profesional de estaciones de carga para vehículos eléctricos en el hogar o negocio.', icon: 'BatteryCharging', featured: true },
      { id: 'switches-outlets', title: 'Interruptores y Tomas', description: 'Instalación y reparación de interruptores y tomas para un acceso eléctrico seguro y fluido.', icon: 'ToggleRight' },
    ],
  },
  howItWorks: {
    eyebrow: '03 Cómo Funciona',
    title: 'Del primer contacto al trabajo terminado en cuatro pasos claros.',
    steps: [
      { number: '01', title: 'Llama o Escribe', description: 'Contáctanos por teléfono o WhatsApp en segundos. Respondemos rápido y te orientamos al siguiente paso.' },
      { number: '02', title: 'Diagnóstico en Sitio', description: 'Llegamos preparados, evaluamos el problema a fondo y te explicamos qué se necesita en términos simples.' },
      { number: '03', title: 'Presupuesto Claro', description: 'Recibes una estimación directa sin costos ocultos antes de que comience cualquier trabajo.' },
      { number: '04', title: 'Trabajo + Garantía', description: 'Terminamos conforme al código, dejamos todo limpio y respaldamos cada instalación con garantía de un año.' },
    ],
  },
  testimonials: {
    eyebrow: '04 Reseñas de Clientes',
    title: 'Lo que dicen nuestros clientes.',
    subtitle: '5.0 · 86 reseñas en Google',
    cta: 'Ver todas las reseñas en Google',
    items: [
      {
        name: 'Mari Cabrera',
        role: 'Local Guide · Google',
        text: 'Jesús fue puntual y agradable. Después de dos meses sin luz en nuestra sala y comedor, y despues de llamar a varios electricistas que nunca aparecieron, estaba muy agradecida por su atención y profesionalismo. Terminó el trabajo con facilidad y se aseguró de explicarme lo que necesitaba ser reemplazado. Lo recomiendo muchísimo y volveré a usar sus servicios.',
        rating: 5,
      },
      {
        name: 'Lien Perez',
        role: 'Local Guide · Google',
        text: 'Tuve una experiencia fantástica con JPower Electric! Tuvimos un problema electrico en casa los llame y contesto Jesús Hernandez le explique lo que sucedia y en menos de una hora estaba en mi puerta para hacer un diagnóstico del problema, lo explicó todo con claridad y mucho conocimiento. Realizo el trabajo sin ningún problema de principio a fin con un precio razonable. Realmente se preocupa por brindar un servicio excelente.',
        rating: 5,
      },
      {
        name: 'Fany Hernandez',
        role: 'Google',
        text: 'Quiero destacar el excelente trabajo realizado por este electricista. Su profesionalismo, puntualidad y atención al detalle superaron todas mis expectativas. Desde el primer contacto hasta la finalización del proyecto, demostró gran conocimiento y compromiso, solucionando cualquier inconveniente de forma rápida y eficiente. Sin duda, recomendaría sus servicios a quien busque calidad y confianza en el área eléctrica. ¡Gracias por un trabajo impecable!',
        rating: 5,
      },
      {
        name: 'Roberto Rojas',
        role: 'Google',
        text: 'Estoy muy complacido con el servicio de esta compañía, me instalaron las luces que necesitamos sin daños, fueron puntuales y muy profesionales, es difícil de encontrar en estos días, los recomiendo y me he convertido en su cliente siempre que necesite cualquier trabajo de electricidad.',
        rating: 5,
      },
      {
        name: 'Ariel Nieto',
        role: 'Local Guide · Google',
        text: 'Muy buen servicio, nos instalo las luces del techo nuevas LED. Puntual y muy calificado para este trabajo.',
        rating: 5,
      },
    ],
  },
  faq: {
    title: '05 Preguntas Comunes',
    items: [
      { question: '¿Están licenciados y asegurados?', answer: 'Sí. JPower Electric está certificado por el Estado de Florida y cuenta con cobertura de seguro para trabajos residenciales y comerciales.' },
      { question: '¿Ofrecen servicios de emergencia?', answer: 'Sí. Atendemos problemas urgentes con una respuesta rápida, segura y con pasos claros en sitio.' },
      { question: '¿Qué áreas cubren?', answer: 'Estamos basados en Miami, FL y trabajamos en zonas cercanas para proyectos residenciales, comerciales e industriales.' },
      { question: '¿Sus servicios tienen garantía?', answer: 'Sí. El trabajo terminado cuenta con una garantía de mano de obra de un año.' },
    ],
  },
  contact: {
    eyebrow: '06 Pide Tu Presupuesto',
    title: 'Escríbenos por WhatsApp y recibe una estimación más rápida.',
    description: 'Envía fotos, detalles del proyecto o el problema que tienes. Te guiamos al servicio correcto y al siguiente paso.',
    name: 'Nombre Completo',
    email: 'Correo Electrónico',
    phone: 'Teléfono',
    message: 'Detalles del Proyecto',
    send: 'Pedir Presupuesto por WhatsApp',
    success: 'Mensaje enviado con éxito. Nos pondremos en contacto pronto.',
    availability: 'Lun-Sáb | Agenda rápida y soporte de emergencia',
  },
};

export const CONTACT_INFO = {
  phone: '+1 305-525-1268',
  email: 'jpowerelc@gmail.com',
  address: 'Miami, FL 33054',
  whatsapp: 'https://wa.me/13055251268',
  facebook: 'https://www.facebook.com/share/1C1Yn6HSye/',
};
