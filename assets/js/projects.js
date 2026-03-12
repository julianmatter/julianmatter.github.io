// ═══════════════════════════════════════════════════════════
//  PROJECTS DATA
//  Cada proyecto tiene exactamente:
//    - contribucion: empresa colaboradora
//    - año
//    - tecnologias: string con las principales
//    - gallery: exactamente 3 imágenes (intern1, intern2, intern3)
//    - videoId: ID de YouTube (null si no hay)
// ═══════════════════════════════════════════════════════════

const PROJECTS = {

  pavimentos: {
    tag: 'Ing. Vial · IA',
    title: 'Evaluador Superficial de Pavimentos',
    description: 'Software que integra tecnología LCMS (Laser Crack Measurement System) e Inteligencia Artificial para analizar y clasificar automáticamente fallas superficiales en pavimentos. Transformó un proceso que tomaba 40 minutos por kilómetro en uno que demanda apenas 1 minuto — un aumento de 40× en productividad. Reconocido con el <strong>Accésit al Premio Internacional a la Innovación en Carreteras 2024 (X Edición, España)</strong>.',
    // ── 3 cards estándar
    contribucion: 'ITYAC SA',
    año: '2023 – 2025',
    tecnologias: 'Python · TensorFlow · Computer Vision · LCMS',
    // ── Imágenes
    mainImg: 'assets/images/project1_main.jpg',
    mainIcon: '🛣️',
    mainBg: '#111111',
    gallery: [
      { src: 'assets/images/project1_intern1.jpg', alt: 'Interfaz principal del software' },
      { src: 'assets/images/project1_intern2.jpg', alt: 'Clasificación automática de fallas' },
      { src: 'assets/images/project1_intern3.jpg', alt: 'Reportes exportables' },
    ],
    videoId: null,   // ← Pegar ID de YouTube cuando tengas el video (ej: "dQw4w9WgXcQ")
  },

  visualizador: {
    tag: 'Ing. Vial · IA',
    title: 'Visualización de Datos de Pavimentos',
    description: 'Software visualizador que permite el recorrido virtual de un tramo de carretera luego de un trabajo de relevamiento o actualización de pavimentos. Integra datos de sensores, imágenes y métricas en una interfaz interactiva que facilita la toma de decisiones para empresas viales y organismos de gestión.',
    contribucion: 'ITYAC SA',
    año: '2024',
    tecnologias: 'Python · Plotly · Dash · Visualización de datos',
    mainImg: 'assets/images/project2_main.jpg',
    mainIcon: '📊',
    mainBg: '#1a1a2e',
    gallery: [
      { src: 'assets/images/project2_intern1.jpg', alt: 'Recorrido virtual interactivo' },
      { src: 'assets/images/project2_intern2.jpg', alt: 'Dashboard de métricas del tramo' },
      { src: 'assets/images/project2_intern3.jpg', alt: 'Vista de datos por segmento' },
    ],
    videoId: null,
  },

  presupuestador: {
    tag: 'Gestión · Análisis de Datos',
    title: 'Presupuestador de Proyectos Industriales',
    description: 'Software de presupuestación de proyectos de construcción industrial que integra bases de datos históricas propias de la empresa para generar estimaciones más precisas. Incluye tableros de análisis económico que permiten comparar escenarios y automatizar cómputos de recursos a lo largo del ciclo de vida del proyecto.',
    contribucion: 'FLEXIO SA',
    año: '2025',
    tecnologias: 'Python · Pandas · Power BI · DAX',
    mainImg: 'assets/images/project3_main.jpg',
    mainIcon: '🏗️',
    mainBg: '#1c1a14',
    gallery: [
      { src: 'assets/images/project3_intern1.jpg', alt: 'Módulo de presupuestación' },
      { src: 'assets/images/project3_intern2.jpg', alt: 'Análisis económico comparativo' },
      { src: 'assets/images/project3_intern3.jpg', alt: 'Dashboard de control de costos' },
    ],
    videoId: null,
  },

  dashboard: {
    tag: 'Gestión · Business Intelligence',
    title: 'Dashboard de Análisis de Compras',
    description: 'Tablero interactivo desarrollado en Power BI para analizar en profundidad la gestión de compras y abastecimiento en empresas de construcción industrial. Permite identificar patrones de gasto, proveedores clave, oportunidades de ahorro y tomar decisiones basadas en datos históricos de la operación.',
    contribucion: 'FLEXIO SA',
    año: '2025',
    tecnologias: 'Power BI · DAX · Business Intelligence',
    mainImg: 'assets/images/project4_main.jpg',
    mainIcon: '📈',
    mainBg: '#0d1b2a',
    gallery: [
      { src: 'assets/images/project4_intern1.jpg', alt: 'Vista general del dashboard' },
      { src: 'assets/images/project4_intern2.jpg', alt: 'Análisis por proveedor' },
      { src: 'assets/images/project4_intern3.jpg', alt: 'Evolución de compras en el tiempo' },
    ],
    videoId: null,
  },

};


// ═══════════════════════════════════════════════════════════
//  MODAL SYSTEM
// ═══════════════════════════════════════════════════════════
(function () {
  const overlay    = document.getElementById('projectModal');
  const content    = document.getElementById('modalContent');
  const closeBtn   = document.getElementById('modalClose');
  const modalLogo  = document.getElementById('modalLogoBtn');
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lbImg');
  const lbClose    = document.getElementById('lbClose');

  // ── Abrir proyecto
  function openProject(id) {
    const p = PROJECTS[id];
    if (!p) return;
    content.innerHTML = buildHTML(p);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;

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

  // ── Bind cards
  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
    });
  });

  // ── Construir HTML del modal
  function buildHTML(p) {
    // Imagen principal
    const mainImgHTML = `
      <div class="proj-hero-img" style="background:${p.mainBg}">
        <img src="${p.mainImg}" alt="${p.title}"
          onerror="this.parentElement.innerHTML='<div class=proj-icon-fallback style=\\'background:${p.mainBg}\\'>${p.mainIcon}</div>'" />
      </div>`;

    // 3 cards estándar
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

    // Galería de 3 imágenes
    const galleryItems = p.gallery.map(img => `
      <div class="proj-gallery-item" data-src="${img.src}" data-alt="${img.alt}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=proj-gallery-placeholder><span>🖼️</span><span>Imagen próximamente</span></div>'" />
      </div>`
    ).join('');

    const galleryHTML = `
      <div class="proj-gallery">
        <div class="proj-gallery-title">Imágenes del proyecto</div>
        <div class="proj-gallery-grid">${galleryItems}</div>
      </div>`;

    // Video (solo si hay videoId)
    const videoHTML = p.videoId ? `
      <div class="proj-video-wrap">
        <div class="proj-video-title">📽️ Demo del proyecto</div>
        <div class="proj-video-container">
          <iframe src="https://www.youtube.com/embed/${p.videoId}?rel=0&modestbranding=1"
            title="${p.title}" allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
      </div>` : '';

    return `
      <div class="proj-hero">
        ${mainImgHTML}
        <div class="proj-hero-text">
          <span class="proj-tag">${p.tag}</span>
          <h1 class="proj-title">${p.title}</h1>
          <p class="proj-desc">${p.description}</p>
          <a href="#contact" class="btn btn-dark modal-contact-btn">Consultar sobre este proyecto →</a>
        </div>
      </div>

      ${cardsHTML}
      ${videoHTML}
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