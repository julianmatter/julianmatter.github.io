// ═══════════════════════════════════════════════════════════
//  i18n — Traducciones ES / EN
//  Para agregar texto: añadí data-i18n="clave" al elemento
//  HTML y luego agregá la clave aquí en ambos idiomas.
// ═══════════════════════════════════════════════════════════

const TRANSLATIONS = {

  es: {
    // NAV
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.portfolio':  'Proyectos',
    'nav.awards':     'Premios',
    'nav.education':  'Educación',
    'nav.contact':    'Contacto',

    // HERO
    'hero.title': 'Ingeniero Civil<br />especializado en<br /><em>Data Science</em>',
    'hero.sub':   'Aplico Inteligencia Artificial y Análisis de Datos para transformar la forma en que se gestionan, planifican y ejecutan proyectos de infraestructura y construcción.',
    'hero.cta1':  'Contactarme →',
    'hero.cta2':  'Ver proyectos',
    'hero.c1l': 'Premio Internacional', 'hero.c1s': 'Innovación en Carreteras 2024 · España',
    'hero.c2l': 'Premio Nacional',      'hero.c2s': 'Ponencias Nacionales · Argentina 2024',
    'hero.c3l': 'Experiencia',          'hero.c3v': '2+ años',  'hero.c3s': 'Ing. Civil + Data Science',
    'hero.c4l': 'Conferencias',         'hero.c4s': 'Nac. e internacionales',

    // SOBRE MÍ
    'about.label': 'Sobre mí',
    'about.title': 'Ingeniería con enfoque<br /><em>Data-Driven</em>',
    'about.p1': 'Soy Ingeniero Civil graduado de la Universidad Nacional de Rosario. Combino la rigurosidad técnica de la ingeniería con el poder del análisis de datos e IA para resolver problemas reales en infraestructura y construcción.',
    'about.p2': 'Trabajo en el cruce entre la Ingeniería Civil y la Ciencia de Datos — desarrollando herramientas que automatizan procesos, mejoran la toma de decisiones y generan valor concreto.',
    'about.p3': 'Trabajos reconocidos internacionalmente e investigaciones presentadas en Argentina, Colombia y México, con disertaciones en seminarios nacionales de referencia del sector vial.',
    'about.award':    '🏆 Accésit — Premio Internacional a la Innovación en Carreteras 2024 (X Edición · España)',
    'about.awardsub': '"Hacia la Modernización del Análisis del Estado Superficial de Pavimentos en Argentina"',

    // EXPERIENCIA
    'exp.label': 'Experiencia',
    'exp.title': 'Trayectoria profesional',
    'exp.flexio.period': 'Abril 2025 – Actualidad',
    'exp.flexio.role':   'Ingeniero · Industria de la Construcción · Rosario, Argentina',
    'exp.flexio.b1': 'Digitalización y automatización de procesos en la gestión de proyectos de construcción industrial, integrando análisis de datos históricos para mejorar precisión y eficiencia operativa.',
    'exp.flexio.b2': 'Implementación de herramientas de software para automatizar cómputos de recursos, optimizando decisiones técnicas y económicas a lo largo del ciclo de vida del proyecto.',
    'exp.ityac.period': 'Feb 2023 – Abril 2025',
    'exp.ityac.role':   'Ingeniero Junior · Ingeniería Vial · Rosario, Argentina',
    'exp.ityac.b1': 'Desarrollo de herramienta con IA para análisis y clasificación automática de fallas en pavimentos, reduciendo tiempos de estudio de 40 a 1 minuto por kilómetro — reconocida con Premio Internacional en España.',
    'exp.ityac.b2': 'Procesamiento y sistematización de datos de campo para reportes que respaldaron decisiones en proyectos de mantenimiento vial a nivel nacional.',
    'exp.ityac.b3': 'Implementación de mantenimiento inteligente de carreteras mediante IA, integrando datos de evaluación vial para optimizar intervenciones y extender la vida útil de la infraestructura.',
    'exp.ityac.b4': 'Participación en campañas nacionales de evaluación vial con equipos de medición avanzada, garantizando calidad y trazabilidad de los datos.',

    // PORTFOLIO
    'portfolio.label': 'Proyectos',
    'portfolio.title': 'Proyectos Destacados',
    'portfolio.sub':   'Desarrollos propios y en colaboración con empresas, en la intersección entre ingeniería, datos, IA y automatización.',
    'proj.cta':        'Ver detalle →',
    'proj.overlay':    'Ver proyecto',
    'proj.pav.title':  'Evaluador Superficial de Pavimentos',
    'proj.pav.desc':   'Software con IA para detectar, clasificar y cuantificar fallas en pavimentos de forma automática, reduciendo tiempos de análisis de 40 a 1 minuto por kilómetro.',
    'proj.pres.title': 'Presupuestador de Proyectos Industriales',
    'proj.pres.desc':  'Software que integra bases de datos históricas de la empresa para presupuestar proyectos industriales con precisión y generar exportaciones de seguimiento.',
    'proj.vis.title':  'Visualización de Datos de Pavimentos',
    'proj.vis.desc':   'Recorrido virtual por tramos de ruta con datos georreferenciados, imágenes superficiales y posicionamiento GPS para la toma de decisiones en campo.',
    'proj.dash.title': 'Dashboard de Análisis de Compras',
    'proj.dash.desc':  'Tableros interactivos en Power BI para el seguimiento de compras, métricas operativas y priorización de materiales en empresas de construcción.',
    'proj.next.tag':   'Próximo desafío',
    'proj.next.title': '¿Cuál es tu próximo proyecto?',
    'proj.next.desc':  'Transformemos juntos tus procesos de ingeniería con datos e IA. Contame tu desafío y encontremos la solución.',
    'proj.next.cta':   'Hablemos →',

    // PREMIOS
    'awards.label': 'Reconocimientos',
    'awards.title': 'Premios &amp; Conferencias',
    'awards.sub':   'Participación activa en el circuito científico-técnico de ingeniería civil y ciencia de datos, a nivel nacional e internacional.',

    // EDUCACIÓN
    'edu.label':    'Educación',
    'edu.title':    'Formación académica',
    'edu.sub':      'Base técnica en ingeniería, potenciada con formación en data science y machine learning.',
    'edu.guemes':   'Técnico en Equipos e Instalaciones Electromecánicas',
    'edu.unr':      'Ingeniero Civil',
    'edu.google':   'Certificación en Análisis de Datos',
    'edu.stanford': 'Machine Learning Specialization',

    // CONTACTO
    'contact.label': 'Contacto',
    'contact.title': '¿Hablamos?',
    'contact.body':  'Estoy abierto a nuevas oportunidades, colaboraciones en proyectos de ingeniería e IA, o simplemente intercambiar ideas sobre tecnología aplicada a construcción e infraestructura.',
    'contact.cta':   'Enviar un email →',
    'contact.email': 'Email',
    'contact.loc':   'Ubicación',
  },

  en: {
    // NAV
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.portfolio':  'Projects',
    'nav.awards':     'Awards',
    'nav.education':  'Education',
    'nav.contact':    'Contact',

    // HERO
    'hero.title': 'Civil Engineer<br />specialized in<br /><em>Data Science</em>',
    'hero.sub':   'I apply Artificial Intelligence and data analysis to transform the way infrastructure and construction projects are managed, planned and executed.',
    'hero.cta1':  'Get in touch →',
    'hero.cta2':  'View projects',
    'hero.c1l': 'International Award', 'hero.c1s': 'Innovation in Roads 2024 · Spain',
    'hero.c2l': 'National Award',      'hero.c2s': 'National Presentations · Argentina 2024',
    'hero.c3l': 'Experience',          'hero.c3v': '2+ years',  'hero.c3s': 'Civil Eng. + Data Science',
    'hero.c4l': 'Conferences',         'hero.c4s': 'National & international',

    // ABOUT
    'about.label': 'About me',
    'about.title': 'Engineering with a<br /><em>Data-Driven</em> approach',
    'about.p1': 'I am a Civil Engineer graduated from the National University of Rosario. I combine the technical rigor of engineering with the power of data analysis and AI to solve real problems in infrastructure and construction.',
    'about.p2': 'I work at the intersection of Civil Engineering and Data Science — developing tools that automate processes, improve decision-making and generate concrete value.',
    'about.p3': 'Internationally recognized work and research presented in Argentina, Colombia and Mexico, with lectures at national reference seminars in the road sector.',
    'about.award':    '🏆 Accésit — International Award for Innovation in Roads 2024 (X Edition · Spain)',
    'about.awardsub': '"Towards the Modernization of Pavement Surface Condition Analysis in Argentina"',

    // EXPERIENCE
    'exp.label': 'Experience',
    'exp.title': 'Professional background',
    'exp.flexio.period': 'April 2025 – Present',
    'exp.flexio.role':   'Engineer · Construction Industry · Rosario, Argentina',
    'exp.flexio.b1': 'Digitalization and automation of processes in industrial construction project management, integrating historical data analysis to improve accuracy and operational efficiency.',
    'exp.flexio.b2': 'Implementation of software tools to automate resource calculations, optimizing technical and economic decisions throughout the project lifecycle.',
    'exp.ityac.period': 'Feb 2023 – April 2025',
    'exp.ityac.role':   'Junior Engineer · Road Engineering · Rosario, Argentina',
    'exp.ityac.b1': 'Development of an AI tool for automatic analysis and classification of pavement failures, reducing study times from 40 to 1 minute per kilometer — recognized with an International Award in Spain.',
    'exp.ityac.b2': 'Processing and systematization of field data for reports that supported decisions in national road maintenance projects.',
    'exp.ityac.b3': 'Implementation of intelligent road maintenance using AI, integrating road evaluation data to optimize interventions and extend infrastructure service life.',
    'exp.ityac.b4': 'Participation in national road evaluation campaigns with advanced measurement equipment, ensuring data quality and traceability.',

    // PORTFOLIO
    'portfolio.label': 'Projects',
    'portfolio.title': 'Featured Projects',
    'portfolio.sub':   'Own developments and collaborations with companies, at the intersection of engineering, data, AI and automation.',
    'proj.cta':        'See details →',
    'proj.overlay':    'View project',
    'proj.pav.title':  'Pavement Surface Evaluator',
    'proj.pav.desc':   'AI-powered software that automatically detects, classifies and quantifies pavement failures, cutting analysis time from 40 to 1 minute per kilometer.',
    'proj.pres.title': 'Industrial Project Estimator',
    'proj.pres.desc':  'Software that integrates the company\'s historical databases to accurately budget industrial projects and generate tracking exports.',
    'proj.vis.title':  'Pavement Data Visualization',
    'proj.vis.desc':   'Virtual tour of road sections with georeferenced data, surface imagery and GPS positioning for field decision-making.',
    'proj.dash.title': 'Procurement Analysis Dashboard',
    'proj.dash.desc':  'Interactive Power BI dashboards for procurement tracking, operational metrics and material prioritization in construction companies.',
    'proj.next.tag':   'Next challenge',
    'proj.next.title': "What's your next project?",
    'proj.next.desc':  "Let's transform your engineering processes together with data and AI. Tell me your challenge and let's find the solution.",
    'proj.next.cta':   "Let's talk →",

    // AWARDS
    'awards.label': 'Recognition',
    'awards.title': 'Awards &amp; Conferences',
    'awards.sub':   'Active participation in the scientific-technical circuit of civil engineering and data science, nationally and internationally.',

    // EDUCATION
    'edu.label':    'Education',
    'edu.title':    'Academic background',
    'edu.sub':      'Technical engineering foundation, enhanced with data science and machine learning training.',
    'edu.guemes':   'Technician in Electromechanical Equipment and Installations',
    'edu.unr':      'Civil Engineer',
    'edu.google':   'Data Analytics Certification',
    'edu.stanford': 'Machine Learning Specialization',

    // CONTACT
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

  // Inicializar
  applyLang(currentLang);

  // Clicks en las opciones del switch
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLang(opt.dataset.lang);
    });
  });

})();