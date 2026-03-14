// ═══════════════════════════════════════════════════════════
//  PROJECTS DATA
//  Solo datos no traducibles: imágenes, colores, empresa, año, tecnologías.
//  Todo el texto visible está en i18n.js.
// ═══════════════════════════════════════════════════════════

const PROJECTS = {

  pavimentos: {
    i18nKey:      'proj.pav',
    contribucion: 'ITYAC SA',
    año:          '2023 – 2025',
    tecnologias:  'Python · TensorFlow · Computer Vision · LCMS',
    mainImg:      'assets/images/project1_main.jpg',
    mainIcon:     '🛣️',
    mainBg:       '#111111',
    gallery: [
      { src: 'assets/images/project1_intern1.png' },
      { src: 'assets/images/project1_intern2.png' },
      { src: 'assets/images/project1_intern3.png' },
    ],
  },

  presupuestador: {
    i18nKey:      'proj.pres',
    contribucion: 'FLEXIO SA',
    año:          '2025',
    tecnologias:  'Python · Pandas · Power BI · DAX',
    mainImg:      'assets/images/project2_main.jpeg',
    mainIcon:     '🏗️',
    mainBg:       '#1c1a14',
    gallery: [
      { src: 'assets/images/project2_intern1.png' },
      { src: 'assets/images/project2_intern2.png' },
      { src: 'assets/images/project2_intern3.png' },
    ],
  },

  visualizador: {
    i18nKey:      'proj.vis',
    contribucion: 'ITYAC SA',
    año:          '2024',
    tecnologias:  'Python · Plotly · Dash · GPS · Computer Vision',
    mainImg:      'assets/images/project3_main.jpg',
    mainIcon:     '📊',
    mainBg:       '#1a1a2e',
    gallery: [
      { src: 'assets/images/project3_intern1.png' },
      { src: 'assets/images/project3_intern2.png' },
      { src: 'assets/images/project3_intern3.png' },
    ],
  },

  dashboard: {
    i18nKey:      'proj.dash',
    contribucion: 'FLEXIO SA',
    año:          '2025',
    tecnologias:  'Power BI · DAX · Business Intelligence',
    mainImg:      'assets/images/project4_main.png',
    mainIcon:     '📈',
    mainBg:       '#0d1b2a',
    gallery: [
      { src: 'assets/images/project4_intern1.png' },
      { src: 'assets/images/project4_intern2.png' },
      { src: 'assets/images/project4_intern3.png' },
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

  function openProject(id) {
    const p = PROJECTS[id];
    if (!p) return;
    content.innerHTML = buildHTML(p);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;

    // Bind imagen principal → lightbox
    const mainWrap = content.querySelector('.proj-main-img-wrap[data-src]');
    if (mainWrap) {
      mainWrap.addEventListener('click', () => openLightbox(mainWrap.dataset.src, mainWrap.dataset.alt));
    }

    // Bind galería → lightbox
    content.querySelectorAll('.proj-gallery-item[data-src]').forEach(item => {
      item.addEventListener('click', () => openLightbox(item.dataset.src, item.dataset.alt));
    });

    // Bind botones "contacto"
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

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalLogo.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    setTimeout(() => {
      document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('open');
  }
  function closeLightbox() { lightbox.classList.remove('open'); }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox.classList.contains('open')) closeLightbox();
      else closeModal();
    }
  });

  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
    });
  });

  // ── Construir HTML del modal — todo texto viene de i18n
  function buildHTML(p) {
    const T   = (typeof window.getT === 'function') ? window.getT : function(k) { return k; };
    const key = p.i18nKey;

    const title = T(key + '.modal.title');

    // Tópicos
    const topicsRaw  = T(key + '.modal.topics');
    const topicsHTML = topicsRaw
      ? `<div class="proj-topics">${
          topicsRaw.split('|').map(tp => `<span class="proj-topic">${tp}</span>`).join('')
        }</div>`
      : '';

    // Imagen principal
    const mainImgHTML = `
      <div class="proj-main-img-wrap" data-src="${p.mainImg}" data-alt="${title}">
        <img src="${p.mainImg}" alt="${title}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="proj-icon-fallback" style="display:none; background:${p.mainBg}; width:100%; height:100%; align-items:center; justify-content:center; font-size:4rem;">
          ${p.mainIcon}
        </div>
        <div class="proj-main-img-overlay">
          <span class="proj-main-img-badge">${T('modal.img.badge')}</span>
        </div>
      </div>`;

    // Descripción
    const blocks   = T(key + '.modal.desc');
    const descHTML = Array.isArray(blocks)
      ? blocks.map(b =>
          b.type === 'award'
            ? `<div class="proj-desc-award">${b.text}</div>`
            : `<p class="proj-desc-p">${b.text}</p>`
        ).join('')
      : '';

    // 3 cards
    const cardsHTML = `
      <div class="proj-cards">
        <div class="proj-card">
          <div class="proj-card-label">${T('modal.contrib')}</div>
          <div class="proj-card-val">${p.contribucion}</div>
        </div>
        <div class="proj-card">
          <div class="proj-card-label">${T('modal.year')}</div>
          <div class="proj-card-val">${p.año}</div>
        </div>
        <div class="proj-card">
          <div class="proj-card-label">${T('modal.tech')}</div>
          <div class="proj-card-val">${p.tecnologias}</div>
        </div>
      </div>`;

    // Galería — captions vienen de i18n
    const galleryCaptions = T(key + '.modal.gallery');
    const galleryItems = (p.gallery || []).map((item, i) => {
      const cap = Array.isArray(galleryCaptions) && galleryCaptions[i] ? galleryCaptions[i] : {};
      const caption = cap.caption || '';
      const sub     = cap.sub     || '';
      return `
        <div class="proj-gallery-item" data-src="${item.src}" data-alt="${caption}">
          <div class="proj-gallery-thumb">
            <img src="${item.src}" alt="${caption}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="proj-gallery-placeholder" style="display:none;">
              <span>🖼️</span><span>Imagen próximamente</span>
            </div>
          </div>
          <div class="proj-gallery-caption">
            <div class="proj-gallery-caption-text">${caption}</div>
            <div class="proj-gallery-caption-sub">${sub}</div>
          </div>
        </div>`;
    }).join('');

    const galleryHTML = galleryItems ? `
      <div class="proj-gallery">
        <div class="proj-gallery-heading">${T('modal.gallery')}</div>
        <div class="proj-gallery-grid">${galleryItems}</div>
      </div>` : '';

    return `
      <div class="proj-title-area">
        <h1 class="proj-title">${title}</h1>
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
          <h3>${T('modal.cta.title')}</h3>
          <p>${T('modal.cta.body')}</p>
        </div>
        <a href="#contact" class="btn btn-white modal-contact-btn">${T('modal.cta.btn')}</a>
      </div>
    `;
  }

})();