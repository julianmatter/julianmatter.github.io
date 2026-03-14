// ═══════════════════════════════════════════════════════════
//  PROJECTS DATA
// ═══════════════════════════════════════════════════════════

const PROJECTS = {

  pavimentos: {
    tag: 'Ing. Vial · IA',
    topics: ['Inteligencia Artificial', 'Ingeniería Vial'],
    title: 'Evaluador Superficial de Pavimentos',
    descBlocks: [
      {
        type: 'text',
        text: 'Software para automatizar la evaluación de superficies de pavimentos, integrando tecnología <em>LCMS</em> <span class="proj-aside">(Laser Crack Measurement System)</span>, <em>Deep Learning</em> y <em>Computer Vision</em>. El sistema detecta, clasifica y cuantifica fallas superficiales de forma automática a partir de datos de sensores láser de alta precisión, eliminando la subjetividad del proceso manual.',
      },
      {
        type: 'text',
        text: 'Más allá de la detección, el software procesa y visualiza los datos del tramo relevado para facilitar la toma de decisiones en gestión vial: identifica los sectores críticos, prioriza intervenciones y propone el mantenimiento óptimo para cada tipo de falla, integrando criterios técnicos y económicos mediante algoritmos de inteligencia artificial.',
      },
      {
        type: 'award',
        text: '<strong>🏆 Accésit — Premio Internacional a la Innovación en Carreteras 2024 (X Edición · España).</strong> El proceso que anteriormente demandaba <strong>40 minutos por kilómetro</strong> fue reducido a <strong>1 minuto</strong>, representando un aumento de 40× en productividad para los equipos de evaluación vial.',
      },
    ],
    contribucion: 'ITYAC SA',
    año: '2023 – 2025',
    tecnologias: 'Python · TensorFlow · Computer Vision · LCMS',
    mainImg:  'assets/images/project1_main.jpg',
    mainIcon: '🛣️',
    mainBg:   '#111111',
    gallery: [
      { src: 'assets/images/project1_intern1.png', alt: 'Material del proyecto 1', caption: 'Algoritmo de Agrupación', sub: 'Fallas Superficiales' },
      { src: 'assets/images/project1_intern2.png', alt: 'Material del proyecto 2', caption: 'Procesamiento de Fallas', sub: 'Análisis de Deterioros' },
      { src: 'assets/images/project1_intern3.png', alt: 'Material del proyecto 3', caption: 'Predicción de Reparaciones', sub: 'Mantenimiento Inteligente' },
    ],
  },

  presupuestador: {
    tag: 'Gestión · Análisis de Datos',
    topics: ['Gestión de Proyectos', 'Análisis de Datos'],
    title: 'Presupuestador de Proyectos Industriales',
    descBlocks: [
      {
        type: 'text',
        text: 'Software de presupuestación para proyectos de construcción industrial que permite alimentar y mantener <em>bases de datos históricas</em> propias de la empresa: cotizaciones, rendimientos, costos de materiales, fabricación y montaje. La información se organiza en módulos diferenciados por etapa, lo que facilita construir presupuestos detallados y coherentes con la realidad operativa de cada organización.',
      },
      {
        type: 'text',
        text: 'Integra <em>tableros de visualización</em> para el análisis económico en distintas instancias del presupuesto, permitiendo comparar escenarios, detectar desvíos y tomar decisiones basadas en datos ordenados. El sistema también genera <em>exportaciones estructuradas</em> para hacer seguimiento al proyecto durante su ejecución, transformando la data histórica acumulada en un activo concreto de la empresa.',
      },
      {
        type: 'text',
        text: 'La gran ventaja no es solo presupuestar más rápido, sino hacerlo con datos propios y organizados — convirtiendo el conocimiento acumulado de la empresa en una herramienta de decisión real.',
      },
    ],
    contribucion: 'FLEXIO SA',
    año: '2025',
    tecnologias: 'Python · Pandas · Power BI · DAX',
    mainImg:  'assets/images/project2_main.jpeg',
    mainIcon: '🏗️',
    mainBg:   '#1c1a14',
    gallery: [
      { src: 'assets/images/project2_intern1.png', alt: 'Módulo de presupuestación', caption: 'Costo por Secciones', sub: 'Análisis de Materiales' },
      { src: 'assets/images/project2_intern2.png', alt: 'Análisis económico', caption: 'Dashboard Precio Unitario', sub: 'Análisis Gráfico' },
      { src: 'assets/images/project2_intern3.png', alt: 'Control de costos', caption: 'Dashboard Precio de Venta', sub: 'Análisis Económico General' },
    ],
  },

  visualizador: {
    tag: 'Ing. Vial · Datos',
    topics: ['Visualización de Datos', 'Ingeniería Vial'],
    title: 'Visualización de Datos de Pavimentos',
    descBlocks: [
      {
        type: 'text',
        text: 'Software que permite un <em>recorrido virtual</em> por un tramo de ruta estudiado, con todos los datos presentados de forma georreferenciada y sincronizada. Es como caminar la ruta, pero con acceso en tiempo real a cada dato relevado: estado superficial, índices de deterioro, imágenes de cámara frontal e integración con posicionamiento <em>GPS</em>.',
      },
      {
        type: 'text',
        text: 'Combina <em>cámaras superficiales</em> de alta resolución con cámaras de recorrido virtual, integrando toda la información en una única interfaz de análisis. Los ingenieros pueden navegar el tramo, consultar métricas por segmento y tomar decisiones de mantenimiento con contexto visual completo — sin necesidad de volver al campo.',
      },
      {
        type: 'text',
        text: 'Utilizado para analizar los datos de toda la <strong>red vial provincial de Santa Fe, Argentina</strong>, procesando cientos de kilómetros de infraestructura con información organizada y lista para la toma de decisiones.',
      },
    ],
    contribucion: 'ITYAC SA',
    año: '2024',
    tecnologias: 'Python · Plotly · Dash · GPS · Computer Vision',
    mainImg:  'assets/images/project3_main.jpg',
    mainIcon: '📊',
    mainBg:   '#1a1a2e',
    gallery: [
      { src: 'assets/images/project3_intern1.png', alt: 'Análisis de fallas', caption: 'Análisis de Fallas', sub: 'Información de Deterioros' },
      { src: 'assets/images/project3_intern2.png', alt: 'Recorrido virtual', caption: 'Recorrido Virtual', sub: 'Cámara Frontal Disponible' },
      { src: 'assets/images/project3_intern3.png', alt: 'Análisis de reparaciones', caption: 'Análisis de Reparaciones', sub: 'Bacheos Propuestos' },
    ],
  },

  dashboard: {
    tag: 'Gestión · Business Intelligence',
    topics: ['Business Intelligence', 'Análisis de Datos'],
    title: 'Dashboard de Análisis de Compras',
    descBlocks: [
      {
        type: 'text',
        text: 'Conjunto de <em>tableros interactivos</em> desarrollados en Power BI para hacer seguimiento a solicitudes y compras de la empresa, con actualizaciones periódicas de los datos. Permite tener visibilidad completa sobre el estado de los materiales, ordenar prioridades y tomar las mejores decisiones en cada etapa del proceso de abastecimiento.',
      },
      {
        type: 'text',
        text: 'Integra tableros de distinta naturaleza: operativos para el seguimiento del día a día, y <em>métricas periódicas</em> para medir el desempeño del proceso y detectar oportunidades de mejora. Cada tablero fue diseñado para responder preguntas concretas del equipo, con visualizaciones claras y filtros adaptados a la operación real.',
      },
      {
        type: 'text',
        text: 'A futuro se proyecta una expansión para la <strong>generación automática de reportes mensuales</strong>, que permita entender cómo evoluciona el proceso de compras mes a mes y tomar decisiones estratégicas con datos históricos consolidados.',
      },
    ],
    contribucion: 'FLEXIO SA',
    año: '2025',
    tecnologias: 'Power BI · DAX · Business Intelligence',
    mainImg:  'assets/images/project4_main.png',
    mainIcon: '📈',
    mainBg:   '#0d1b2a',
    gallery: [
      { src: 'assets/images/project4_intern1.png', alt: 'Vista general del dashboard', caption: 'Solicitudes de Compras', sub: 'Análisis de Prioridades' },
      { src: 'assets/images/project4_intern2.png', alt: 'Análisis por proveedor', caption: 'Detalle de Compra', sub: 'Análisis de Planificación' },
      { src: 'assets/images/project4_intern3.png', alt: 'Evolución de compras', caption: 'Seguimiento de Compras', sub: 'Estados de Materiales' },
    ],
  },

};


// ═══════════════════════════════════════════════════════════
//  MODAL SYSTEM
// ═══════════════════════════════════════════════════════════
(function () {
  const overlay   = document.getElementById('projectModal');
  const content   = document.getElementById('modalContent');
  const closeBtn  = document.getElementById('modalClose');
  const modalLogo = document.getElementById('modalLogoBtn');
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbClose   = document.getElementById('lbClose');

  // ── Abrir proyecto
  function openProject(id) {
    const p = PROJECTS[id];
    if (!p) return;
    content.innerHTML = buildHTML(p);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;

    // FIX: Bind imagen principal → lightbox
    const mainWrap = content.querySelector('.proj-main-img-wrap[data-src]');
    if (mainWrap) {
      mainWrap.addEventListener('click', () => openLightbox(mainWrap.dataset.src, mainWrap.dataset.alt));
    }

    // Bind galería → lightbox
    content.querySelectorAll('.proj-gallery-item[data-src]').forEach(item => {
      item.addEventListener('click', () => openLightbox(item.dataset.src, item.dataset.alt));
    });

    // Bind botones "contacto" dentro del modal
    content.querySelectorAll('.modal-contact-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        setTimeout(() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 250);
      });
    });
  }

  // ── Cerrar modal
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Logo del modal → cerrar y volver al hero
  modalLogo.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  // ── Lightbox
  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
  }
  function closeLightbox() { lightbox.classList.remove('open'); }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  // ── ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('open')) closeLightbox();
      else closeModal();
    }
  });

  // ── Bind cards de la página principal
  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
    });
  });

  // ── Construir HTML del modal
  function buildHTML(p) {

    // ── Tópicos (pills)
    const topicsHTML = (p.topics || []).length
      ? `<div class="proj-topics">${
          p.topics.map(t => `<span class="proj-topic">${t}</span>`).join('')
        }</div>`
      : '';

    // ── Imagen principal — data-src y data-alt en el wrapper para el lightbox
    const mainImgHTML = `
      <div class="proj-main-img-wrap" data-src="${p.mainImg}" data-alt="${p.title}">
        <img src="${p.mainImg}" alt="${p.title}"
          onerror="this.parentElement.innerHTML='<div class=proj-icon-fallback style=background:${p.mainBg}>${p.mainIcon}</div>'" />
        <div class="proj-main-img-overlay">
          <span class="proj-main-img-badge">Ver imagen completa ↗</span>
        </div>
      </div>`;

    // ── Bloques de descripción (text | award)
    const descHTML = (p.descBlocks || []).map(block => {
      if (block.type === 'award') {
        return `<div class="proj-desc-award">${block.text}</div>`;
      }
      return `<p class="proj-desc-p">${block.text}</p>`;
    }).join('');

    // ── 3 cards
    const cardsHTML = `
      <div class="proj-cards">
        <div class="proj-card">
          <div class="proj-card-label">Contribución con</div>
          <div class="proj-card-val">${p.contribucion}</div>
        </div>
        <div class="proj-card">
          <div class="proj-card-label">Año</div>
          <div class="proj-card-val">${p.año}</div>
        </div>
        <div class="proj-card">
          <div class="proj-card-label">Tecnologías</div>
          <div class="proj-card-val">${p.tecnologias}</div>
        </div>
      </div>`;

    // ── Galería
    const galleryItems = (p.gallery || []).map(item => `
      <div class="proj-gallery-item" data-src="${item.src}" data-alt="${item.alt || ''}">
        <div class="proj-gallery-thumb">
          <img src="${item.src}" alt="${item.alt || ''}" loading="lazy"
            onerror="this.parentElement.outerHTML='<div class=proj-gallery-placeholder><span>🖼️</span><span>Imagen próximamente</span></div>'" />
        </div>
        <div class="proj-gallery-caption">
          <div class="proj-gallery-caption-text">${item.caption || item.alt || ''}</div>
          <div class="proj-gallery-caption-sub">${item.sub || ''}</div>
        </div>
      </div>`
    ).join('');

    const galleryHTML = galleryItems ? `
      <div class="proj-gallery">
        <div class="proj-gallery-heading">Material del proyecto</div>
        <div class="proj-gallery-grid">${galleryItems}</div>
      </div>` : '';

    return `
      <div class="proj-title-area">
        <h1 class="proj-title">${p.title}</h1>
        ${topicsHTML}
      </div>

      ${mainImgHTML}

      <div class="proj-description">
        ${descHTML}
      </div>

      ${cardsHTML}

      ${galleryHTML}

      <div class="proj-cta">
        <div>
          <h3>¿Algo similar para tu empresa?</h3>
          <p>Puedo desarrollar soluciones a medida para tus procesos de ingeniería e infraestructura.</p>
        </div>
        <a href="#contact" class="btn btn-white modal-contact-btn">Hablemos →</a>
      </div>
    `;
  }

})();