// ═══════════════════════════════════════════════════════════
//  i18n — Traducciones ES / EN
// ═══════════════════════════════════════════════════════════

const TRANSLATIONS = {

  es: {
    // ── NAV
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.portfolio':  'Proyectos',
    'nav.awards':     'Premios',
    'nav.education':  'Educación',
    'nav.contact':    'Contacto',

    // ── HERO
    'hero.title': 'Ingeniero Civil<br />especializado en<br /><em>Data Science</em>',
    'hero.sub':   'Aplico Inteligencia Artificial y Análisis de Datos para transformar la forma en que se gestionan, planifican y ejecutan proyectos de infraestructura y construcción.',
    'hero.cta1':  'Contactarme →',
    'hero.cta2':  'Ver proyectos',
    'hero.c1l': 'Premio Internacional', 'hero.c1s': 'Innovación en Carreteras 2024 · España',
    'hero.c2l': 'Premio Nacional',      'hero.c2s': 'Ponencias Nacionales · Argentina 2024',
    'hero.c3l': 'Experiencia',          'hero.c3v': '3+ años', 'hero.c3s': 'Ing. Civil + Data Science',
    'hero.c4l': 'Conferencias',         'hero.c4s': 'Nac. e Internacionales',

    // ── SOBRE MÍ
    'about.label':    'Sobre mí',
    'about.title':    'Ingeniería con enfoque<br /><em>Data-Driven</em>',
    'about.p1':       'Soy Ingeniero Civil graduado de la Universidad Nacional de Rosario. Combino la rigurosidad técnica de la ingeniería con el poder del análisis de datos e IA para resolver problemas reales en infraestructura y construcción.',
    'about.p2':       'Trabajo en el cruce entre la Ingeniería Civil y la Ciencia de Datos — desarrollando herramientas que automatizan procesos, mejoran la toma de decisiones y generan valor concreto.',
    'about.p3':       'Trabajos reconocidos internacionalmente e investigaciones presentadas en Argentina, Colombia y México, con disertaciones en seminarios técnicos de referencia del sector.',
    'about.award':    '🏆 Accésit — Premio Internacional a la Innovación en Carreteras 2024 (X Edición · España)',
    'about.awardsub': '"Hacia la Modernización del Análisis del Estado Superficial de Pavimentos en Argentina"',

    // ── EXPERIENCIA
    'exp.label':         'Experiencia',
    'exp.title':         'Trayectoria profesional',
    'exp.flexio.period': 'Abril 2025 – Actualidad',
    'exp.flexio.role':   'Ingeniero · Industria de la Construcción · Rosario, Argentina',
    'exp.flexio.b1':     'Digitalización y automatización de procesos en la gestión de proyectos de construcción industrial, integrando análisis de datos históricos para mejorar precisión y eficiencia operativa.',
    'exp.flexio.b2':     'Implementación de herramientas de software para automatizar cómputos de recursos, optimizando decisiones técnicas y económicas a lo largo del ciclo de vida del proyecto.',
    'exp.ityac.period':  'Feb 2023 – Abril 2025',
    'exp.ityac.role':    'Ingeniero Junior · Ingeniería Vial · Rosario, Argentina',
    'exp.ityac.b1':      'Desarrollo de herramienta con IA para análisis y clasificación automática de fallas en pavimentos, reduciendo tiempos de estudio de 40 a 1 minuto por kilómetro — reconocida con Premio Internacional en España.',
    'exp.ityac.b2':      'Procesamiento y sistematización de datos de campo para reportes que respaldaron decisiones en proyectos de mantenimiento vial a nivel nacional.',
    'exp.ityac.b3':      'Implementación de mantenimiento inteligente de carreteras mediante IA, integrando datos de evaluación vial para optimizar intervenciones y extender la vida útil de la infraestructura.',
    'exp.ityac.b4':      'Participación en campañas nacionales de evaluación vial con equipos de medición avanzada, garantizando calidad y trazabilidad de los datos.',

    // ── PORTFOLIO — cards página principal
    'portfolio.label':  'Proyectos',
    'portfolio.title':  'Proyectos Destacados',
    'portfolio.sub':    'Desarrollos propios y en colaboración con empresas, en la intersección entre ingeniería, datos, IA y automatización.',
    'proj.cta':         'Ver detalle →',
    'proj.overlay':     'Ver proyecto',
    'proj.pav.title':   'Evaluador Superficial de Pavimentos',
    'proj.pav.desc':    'Software con IA para detectar, clasificar y cuantificar fallas en pavimentos, e implementar estrategias de mantenimiento inteligente — reduciendo tiempos de análisis de 40 a 1 minuto por kilómetro.',
    'proj.pres.title':  'Presupuestador de Proyectos Industriales',
    'proj.pres.desc':   'Software que integra bases de datos históricas de la empresa para presupuestar proyectos industriales con precisión y generar exportaciones de seguimiento.',
    'proj.vis.title':   'Visualización de Datos de Pavimentos',
    'proj.vis.desc':    'Recorrido virtual por tramos de ruta con datos georreferenciados, imágenes superficiales y posicionamiento GPS para la toma de decisiones en campo.',
    'proj.dash.title':  'Dashboard de Análisis de Compras',
    'proj.dash.desc':   'Tableros interactivos en Power BI para el seguimiento de compras, métricas operativas y priorización de materiales en empresas de construcción.',
    'proj.next.tag':    'Próximo desafío',
    'proj.next.title':  '¿Cuál es tu próximo proyecto?',
    'proj.next.desc':   'Transformemos juntos tus procesos de ingeniería con datos e IA. Contame tu desafío y encontremos la solución.',
    'proj.next.cta':    'Hablemos →',

    // ── MODAL UI
    'modal.contrib':   'Contribución con',
    'modal.year':      'Año',
    'modal.tech':      'Tecnologías',
    'modal.gallery':   'Material del proyecto',
    'modal.img.badge': 'Ver imagen completa ↗',
    'modal.cta.title': '¿Algo similar para tu empresa?',
    'modal.cta.body':  'Puedo desarrollar soluciones a medida para tus procesos de ingeniería e infraestructura.',
    'modal.cta.btn':   'Hablemos →',

    // ── MODAL — títulos y tópicos
    'proj.pav.modal.title':   'Evaluador Superficial de Pavimentos',
    'proj.pav.modal.topics':  'Inteligencia Artificial|Ingeniería Vial',
    'proj.pres.modal.title':  'Presupuestador de Proyectos Industriales',
    'proj.pres.modal.topics': 'Gestión de Proyectos|Análisis de Datos',
    'proj.vis.modal.title':   'Visualización de Datos de Pavimentos',
    'proj.vis.modal.topics':  'Visualización de Datos|Ingeniería Vial',
    'proj.dash.modal.title':  'Dashboard de Análisis de Compras',
    'proj.dash.modal.topics': 'Business Intelligence|Análisis de Datos',

    // ── MODAL — captions de galería
    'proj.pav.modal.gallery': [
      { caption: 'Algoritmo de Agrupación',    sub: 'Fallas Superficiales' },
      { caption: 'Procesamiento de Fallas',    sub: 'Análisis de Deterioros' },
      { caption: 'Predicción de Reparaciones', sub: 'Mantenimiento Inteligente' },
    ],
    'proj.pres.modal.gallery': [
      { caption: 'Costo por Secciones',       sub: 'Análisis de Materiales' },
      { caption: 'Dashboard Precio Unitario', sub: 'Análisis Gráfico' },
      { caption: 'Dashboard Precio de Venta', sub: 'Análisis Económico General' },
    ],
    'proj.vis.modal.gallery': [
      { caption: 'Análisis de Fallas',       sub: 'Información de Deterioros' },
      { caption: 'Recorrido Virtual',         sub: 'Cámara Frontal Disponible' },
      { caption: 'Análisis de Reparaciones', sub: 'Bacheos Propuestos' },
    ],
    'proj.dash.modal.gallery': [
      { caption: 'Solicitudes de Compras', sub: 'Análisis de Prioridades' },
      { caption: 'Detalle de Compra',      sub: 'Análisis de Planificación' },
      { caption: 'Seguimiento de Compras', sub: 'Estados de Materiales' },
    ],

    // ── MODAL — descripciones
    'proj.pav.modal.desc': [
      { type: 'text',  text: 'Software para automatizar la evaluación de superficies de pavimentos, integrando tecnología <em>LCMS</em> <span class="proj-aside">(Laser Crack Measurement System)</span>, <em>Deep Learning</em> y <em>Computer Vision</em>. El sistema detecta, clasifica y cuantifica fallas superficiales de forma automática a partir de datos de sensores láser de alta precisión, eliminando la subjetividad del proceso manual.' },
      { type: 'text',  text: 'Más allá de la detección, el software procesa y visualiza los datos del tramo relevado para facilitar la toma de decisiones en gestión vial: identifica los sectores críticos, prioriza intervenciones y propone el mantenimiento óptimo para cada tipo de falla, integrando criterios técnicos y económicos mediante algoritmos de inteligencia artificial.' },
      { type: 'award', text: '<strong>🏆 Accésit — Premio Internacional a la Innovación en Carreteras 2024 (X Edición · España).</strong> El proceso que anteriormente demandaba <strong>40 minutos por kilómetro</strong> fue reducido a <strong>1 minuto</strong>, representando un aumento de 40× en productividad para los equipos de evaluación vial.' },
    ],
    'proj.pres.modal.desc': [
      { type: 'text', text: 'Software de presupuestación para proyectos de construcción industrial que permite alimentar y mantener <em>bases de datos históricas</em> propias de la empresa: cotizaciones, rendimientos, costos de materiales, fabricación y montaje. La información se organiza en módulos diferenciados por etapa, lo que facilita construir presupuestos detallados y coherentes con la realidad operativa de cada organización.' },
      { type: 'text', text: 'Integra <em>tableros de visualización</em> para el análisis económico en distintas instancias del presupuesto, permitiendo comparar escenarios, detectar desvíos y tomar decisiones basadas en datos ordenados. El sistema también genera <em>exportaciones estructuradas</em> para hacer seguimiento al proyecto durante su ejecución, transformando la data histórica acumulada en un activo concreto de la empresa.' },
      { type: 'text', text: 'La gran ventaja no es solo presupuestar más rápido, sino hacerlo con datos propios y organizados — convirtiendo el conocimiento acumulado de la empresa en una herramienta de decisión real.' },
    ],
    'proj.vis.modal.desc': [
      { type: 'text', text: 'Software que permite un <em>recorrido virtual</em> por un tramo de ruta estudiado, con todos los datos presentados de forma georreferenciada y sincronizada. Es como caminar la ruta, pero con acceso en tiempo real a cada dato relevado: estado superficial, índices de deterioro, imágenes de cámara frontal e integración con posicionamiento <em>GPS</em>.' },
      { type: 'text', text: 'Combina <em>cámaras superficiales</em> de alta resolución con cámaras de recorrido virtual, integrando toda la información en una única interfaz de análisis. Los ingenieros pueden navegar el tramo, consultar métricas por segmento y tomar decisiones de mantenimiento con contexto visual completo — sin necesidad de volver al campo.' },
      { type: 'text', text: 'Utilizado para analizar los datos de toda la <strong>red vial provincial de Santa Fe, Argentina</strong>, procesando cientos de kilómetros de infraestructura con información organizada y lista para la toma de decisiones.' },
    ],
    'proj.dash.modal.desc': [
      { type: 'text', text: 'Conjunto de <em>tableros interactivos</em> desarrollados en Power BI para hacer seguimiento a solicitudes y compras de la empresa, con actualizaciones periódicas de los datos. Permite tener visibilidad completa sobre el estado de los materiales, ordenar prioridades y tomar las mejores decisiones en cada etapa del proceso de abastecimiento.' },
      { type: 'text', text: 'Integra tableros de distinta naturaleza: operativos para el seguimiento del día a día, y <em>métricas periódicas</em> para medir el desempeño del proceso y detectar oportunidades de mejora. Cada tablero fue diseñado para responder preguntas concretas del equipo, con visualizaciones claras y filtros adaptados a la operación real.' },
      { type: 'text', text: 'A futuro se proyecta una expansión para la <strong>generación automática de reportes mensuales</strong>, que permita entender cómo evoluciona el proceso de compras mes a mes y tomar decisiones estratégicas con datos históricos consolidados.' },
    ],

    // ── PREMIOS
    'awards.label': 'Reconocimientos',
    'awards.title': 'Premios &amp; Conferencias',
    'awards.sub':   'Participación activa en el circuito científico-técnico de ingeniería civil y ciencia de datos, a nivel nacional e internacional.',

    // ── EDUCACIÓN
    'edu.label':    'Educación',
    'edu.title':    'Formación académica',
    'edu.sub':      'Base técnica en ingeniería, potenciada con formación en data science y machine learning.',
    'edu.guemes':   'Técnico en Equipos e Instalaciones Electromecánicas',
    'edu.unr':      'Ingeniero Civil',
    'edu.google':   'Certificación en Análisis de Datos',
    'edu.stanford': 'Machine Learning Specialization',

    // ── CONTACTO
    'contact.label': 'Contacto',
    'contact.title': '¿Hablamos?',
    'contact.body':  'Estoy abierto a nuevas oportunidades, colaboraciones en proyectos de ingeniería e IA, o simplemente intercambiar ideas sobre tecnología aplicada a construcción e infraestructura.',
    'contact.cta':   'Enviar un email →',
    'contact.email': 'Email',
    'contact.loc':   'Ubicación',
  },

  en: {
    // ── NAV
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.portfolio':  'Projects',
    'nav.awards':     'Awards',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    // ── HERO
    'hero.title': 'Civil Engineer<br />specialized in<br /><em>Data Science</em>',
    'hero.sub':   'I apply Artificial Intelligence and data analysis to transform the way infrastructure and construction projects are managed, planned and executed.',
    'hero.cta1':  'Get in touch →',
    'hero.cta2':  'View projects',
    'hero.c1l': 'International Award', 'hero.c1s': 'Innovation in Roads 2024 · Spain',
    'hero.c2l': 'National Award',      'hero.c2s': 'National Presentations · Argentina 2024',
    'hero.c3l': 'Experience',          'hero.c3v': '3+ years', 'hero.c3s': 'Civil Eng. + Data Science',
    'hero.c4l': 'Conferences',         'hero.c4s': 'Nat. & International',

    // ── ABOUT
    'about.label':    'About me',
    'about.title':    'Engineering with a<br /><em>Data-Driven</em> approach',
    'about.p1':       'I am a Civil Engineer graduated from the National University of Rosario. I combine the technical rigor of engineering with the power of data analysis and AI to solve real problems in infrastructure and construction.',
    'about.p2':       'I work at the intersection of Civil Engineering and Data Science — developing tools that automate processes, improve decision-making and generate concrete value.',
    'about.p3':       'Internationally recognized work and research presented in Argentina, Colombia and Mexico, with lectures at key technical seminars in the sector.',
    'about.award':    '🏆 Accésit — International Award for Innovation in Roads 2024 (X Edition · Spain)',
    'about.awardsub': '"Towards the Modernization of Pavement Surface Condition Analysis in Argentina"',

    // ── EXPERIENCE
    'exp.label':         'Experience',
    'exp.title':         'Professional background',
    'exp.flexio.period': 'April 2025 – Present',
    'exp.flexio.role':   'Engineer · Construction Industry · Rosario, Argentina',
    'exp.flexio.b1':     'Digitalization and automation of processes in industrial construction project management, integrating historical data analysis to improve accuracy and operational efficiency.',
    'exp.flexio.b2':     'Implementation of software tools to automate resource calculations, optimizing technical and economic decisions throughout the project lifecycle.',
    'exp.ityac.period':  'Feb 2023 – April 2025',
    'exp.ityac.role':    'Junior Engineer · Road Engineering · Rosario, Argentina',
    'exp.ityac.b1':      'Development of an AI tool for automatic analysis and classification of pavement failures, reducing study times from 40 to 1 minute per kilometer — recognized with an International Award in Spain.',
    'exp.ityac.b2':      'Processing and systematization of field data for reports that supported decisions in national road maintenance projects.',
    'exp.ityac.b3':      'Implementation of intelligent road maintenance using AI, integrating road evaluation data to optimize interventions and extend infrastructure service life.',
    'exp.ityac.b4':      'Participation in national road evaluation campaigns with advanced measurement equipment, ensuring data quality and traceability.',

    // ── PORTFOLIO — cards página principal
    'portfolio.label':  'Projects',
    'portfolio.title':  'Featured Projects',
    'portfolio.sub':    'Own developments and collaborations with companies, at the intersection of engineering, data, AI and automation.',
    'proj.cta':         'See details →',
    'proj.overlay':     'View project',
    'proj.pav.title':   'Pavement Surface Evaluator',
    'proj.pav.desc':    'AI-powered software to detect, classify and quantify pavement failures, and implement intelligent maintenance strategies — reducing analysis times from 40 to 1 minute per kilometer.',
    'proj.pres.title':  'Industrial Project Estimator',
    'proj.pres.desc':   'Software that integrates the company\'s historical databases to accurately budget industrial projects and generate tracking exports.',
    'proj.vis.title':   'Pavement Data Visualization',
    'proj.vis.desc':    'Virtual tour of road sections with georeferenced data, surface imagery and GPS positioning for field decision-making.',
    'proj.dash.title':  'Procurement Analysis Dashboard',
    'proj.dash.desc':   'Interactive Power BI dashboards for procurement tracking, operational metrics and material prioritization in construction companies.',
    'proj.next.tag':    'Next challenge',
    'proj.next.title':  "What's your next project?",
    'proj.next.desc':   "Let's transform your engineering processes together with data and AI. Tell me your challenge and let's find the solution.",
    'proj.next.cta':    "Let's talk →",

    // ── MODAL UI
    'modal.contrib':   'Collaboration with',
    'modal.year':      'Year',
    'modal.tech':      'Technologies',
    'modal.gallery':   'Project materials',
    'modal.img.badge': 'View full image ↗',
    'modal.cta.title': 'Something similar for your company?',
    'modal.cta.body':  'I can develop tailored solutions for your engineering and infrastructure processes.',
    'modal.cta.btn':   "Let's talk →",

    // ── MODAL — títulos y tópicos
    'proj.pav.modal.title':   'Pavement Surface Evaluator',
    'proj.pav.modal.topics':  'Artificial Intelligence|Road Engineering',
    'proj.pres.modal.title':  'Industrial Project Estimator',
    'proj.pres.modal.topics': 'Project Management|Data Analysis',
    'proj.vis.modal.title':   'Pavement Data Visualization',
    'proj.vis.modal.topics':  'Data Visualization|Road Engineering',
    'proj.dash.modal.title':  'Procurement Analysis Dashboard',
    'proj.dash.modal.topics': 'Business Intelligence|Data Analysis',

    // ── MODAL — captions de galería
    'proj.pav.modal.gallery': [
      { caption: 'Clustering Algorithm',   sub: 'Surface Failures' },
      { caption: 'Failure Processing',     sub: 'Deterioration Analysis' },
      { caption: 'Repair Prediction',      sub: 'Intelligent Maintenance' },
    ],
    'proj.pres.modal.gallery': [
      { caption: 'Cost by Sections',       sub: 'Materials Analysis' },
      { caption: 'Unit Price Dashboard',   sub: 'Graphic Analysis' },
      { caption: 'Sale Price Dashboard',   sub: 'General Economic Analysis' },
    ],
    'proj.vis.modal.gallery': [
      { caption: 'Failure Analysis',       sub: 'Deterioration Data' },
      { caption: 'Virtual Tour',           sub: 'Front Camera Available' },
      { caption: 'Repair Analysis',        sub: 'Proposed Patches' },
    ],
    'proj.dash.modal.gallery': [
      { caption: 'Purchase Requests',      sub: 'Priority Analysis' },
      { caption: 'Purchase Detail',        sub: 'Planning Analysis' },
      { caption: 'Purchase Tracking',      sub: 'Material Status' },
    ],

    // ── MODAL — descripciones
    'proj.pav.modal.desc': [
      { type: 'text',  text: 'Software to automate the evaluation of pavement surfaces, integrating <em>LCMS</em> <span class="proj-aside">(Laser Crack Measurement System)</span>, <em>Deep Learning</em> and <em>Computer Vision</em> technology. The system automatically detects, classifies and quantifies surface failures from high-precision laser sensor data, eliminating the subjectivity of manual inspection.' },
      { type: 'text',  text: 'Beyond detection, the software processes and visualizes the data collected along the road section to facilitate decision-making in road management: it identifies critical sectors, prioritizes interventions and proposes the optimal maintenance for each type of failure, integrating technical and economic criteria through artificial intelligence algorithms.' },
      { type: 'award', text: '<strong>🏆 Accésit — International Award for Innovation in Roads 2024 (X Edition · Spain).</strong> The process that previously required <strong>40 minutes per kilometer</strong> was reduced to <strong>1 minute</strong>, representing a 40× increase in productivity for road evaluation teams.' },
    ],
    'proj.pres.modal.desc': [
      { type: 'text', text: 'Budgeting software for industrial construction projects that allows building and maintaining the company\'s own <em>historical databases</em>: quotes, productivity rates, material costs, fabrication and assembly. Information is organized into modules by project stage, making it easy to build detailed estimates that reflect the real operational conditions of each organization.' },
      { type: 'text', text: 'It integrates <em>visualization dashboards</em> for economic analysis at different stages of the budget, allowing scenario comparison, deviation detection and data-driven decision-making. The system also generates <em>structured exports</em> for project tracking during execution, turning accumulated historical data into a concrete asset for the company.' },
      { type: 'text', text: 'The key advantage is not just faster budgeting — it\'s budgeting with your own organized data, turning the company\'s accumulated knowledge into a real decision-making tool.' },
    ],
    'proj.vis.modal.desc': [
      { type: 'text', text: 'Software that enables a <em>virtual tour</em> of a surveyed road section, with all data presented in a georeferenced and synchronized way. It\'s like walking the road, but with real-time access to every recorded data point: surface condition, deterioration indices, front camera imagery and <em>GPS</em> positioning.' },
      { type: 'text', text: 'It combines high-resolution <em>surface cameras</em> with virtual tour cameras, integrating all information into a single analysis interface. Engineers can navigate the section, consult metrics by segment and make maintenance decisions with full visual context — without needing to return to the field.' },
      { type: 'text', text: 'Used to analyze data across the entire <strong>provincial road network of Santa Fe, Argentina</strong>, processing hundreds of kilometers of infrastructure with organized, decision-ready information.' },
    ],
    'proj.dash.modal.desc': [
      { type: 'text', text: 'A set of <em>interactive dashboards</em> developed in Power BI to track the company\'s purchase requests and orders, with periodic data updates. It provides full visibility into material status, helps prioritize actions and supports better decisions at every stage of the procurement process.' },
      { type: 'text', text: 'It integrates dashboards of different kinds: operational ones for day-to-day tracking, and <em>periodic metrics</em> to measure process performance and identify improvement opportunities. Each dashboard was designed to answer specific team questions, with clear visualizations and filters adapted to real operations.' },
      { type: 'text', text: 'A future expansion is planned for the <strong>automatic generation of monthly reports</strong>, enabling a clear understanding of how the procurement process evolves month by month and supporting strategic decisions based on consolidated historical data.' },
    ],

    // ── AWARDS
    'awards.label': 'Recognition',
    'awards.title': 'Awards &amp; Conferences',
    'awards.sub':   'Active participation in the scientific-technical circuit of civil engineering and data science, nationally and internationally.',

    // ── EDUCATION
    'edu.label':    'Education',
    'edu.title':    'Academic background',
    'edu.sub':      'Technical engineering foundation, enhanced with data science and machine learning training.',
    'edu.guemes':   'Technician in Electromechanical Equipment and Installations',
    'edu.unr':      'Civil Engineer',
    'edu.google':   'Data Analytics Certification',
    'edu.stanford': 'Machine Learning Specialization',

    // ── CONTACT
    'contact.label': 'Contact',
    'contact.title': "Let's talk?",
    'contact.body':  "I'm open to new opportunities, collaborations on engineering and AI projects, or simply exchanging ideas about technology applied to construction and infrastructure.",
    'contact.cta':   'Send an email →',
    'contact.email': 'Email',
    'contact.loc':   'Location',
  },

};

// ═══════════════════════════════════════════════════════════
//  APPLY TRANSLATIONS
// ═══════════════════════════════════════════════════════════
(function () {
  let currentLang = localStorage.getItem('jm_lang') || 'es';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('jm_lang', lang);
    const t = TRANSLATIONS[lang] || TRANSLATIONS['es'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  applyLang(currentLang);

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLang(opt.dataset.lang);
    });
  });

  // Exponer para que projects.js lea idioma y traducciones en tiempo real
  window.getLang = function () { return currentLang; };
  window.getT    = function (key) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['es'];
    return t[key] !== undefined ? t[key] : key;
  };

})();