const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const smoothScrollTo = target => {
  if (!target) return;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start'
  });
};

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (link.dataset.placeholder === 'true') {
      event.preventDefault();
      return;
    }
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    smoothScrollTo(target);
  });
});

document.addEventListener('click', event => {
  const placeholderLink = event.target.closest('a[data-placeholder="true"]');
  if (placeholderLink) {
    event.preventDefault();
  }
});

const navLinks = document.querySelectorAll('.nav-link');
if (navLinks.length) {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );
  sections.forEach(section => observer.observe(section));
}

let revealObserver = null;
if (!prefersReducedMotion) {
  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
}

const observeReveal = elements => {
  elements.forEach(el => {
    if (prefersReducedMotion) {
      el.classList.add('in-view');
    } else if (revealObserver) {
      revealObserver.observe(el);
    }
  });
};

observeReveal(document.querySelectorAll('.reveal'));

const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

const resumeToggle = document.querySelector('[data-resume-toggle]');
const resumePanel = document.querySelector('[data-resume-panel]');
if (resumeToggle && resumePanel) {
  const resumeFrame = resumePanel.querySelector('iframe');
  resumeToggle.addEventListener('click', () => {
    const isOpen = resumeToggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) {
      const src = resumeFrame.getAttribute('data-src');
      if (src && !resumeFrame.getAttribute('src')) {
        resumeFrame.setAttribute('src', src);
      }
      resumePanel.hidden = false;
      resumeToggle.setAttribute('aria-expanded', 'true');
      resumeToggle.textContent = 'Close inline preview';
    } else {
      resumePanel.hidden = true;
      resumeToggle.setAttribute('aria-expanded', 'false');
      resumeToggle.textContent = 'Open inline preview';
      resumeFrame.removeAttribute('src');
    }
  });
}

const emailEl = document.querySelector('[data-email]');
if (emailEl) {
  const user = emailEl.getAttribute('data-user');
  const domain = emailEl.getAttribute('data-domain');
  if (user && domain) {
    const email = `${user}@${domain}`;
    emailEl.textContent = email;
    emailEl.setAttribute('href', `mailto:${email}`);
  }
}

const phoneEl = document.querySelector('[data-phone]');
if (phoneEl) {
  const display = phoneEl.getAttribute('data-value');
  const tel = phoneEl.getAttribute('data-tel');
  if (display && tel) {
    phoneEl.textContent = display;
    phoneEl.setAttribute('href', `tel:${tel}`);
  }
}

const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
copyButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const item = button.closest('.contact-item');
    if (!item) return;
    const valueEl = item.querySelector('.contact-value');
    const value = valueEl ? valueEl.textContent.trim() : '';
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    button.classList.add('copied');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.classList.remove('copied');
      button.textContent = originalText;
    }, 1500);
  });
});

const featuredGrid = document.getElementById('featured-grid');
const projectGrid = document.getElementById('project-grid');
const featuredEmpty = document.getElementById('featured-empty');
const projectsEmpty = document.getElementById('projects-empty');

const buildLinkButton = (link, variant) => {
  if (!link) return '';
  const hasUrl = link.url && link.url.trim() !== '';
  const isPlaceholder = link.placeholder || !hasUrl;
  const label = link.label || 'Link';
  const classes = `btn ${variant || 'ghost'}`;
  const attrs = isPlaceholder
    ? 'data-placeholder="true" aria-disabled="true"'
    : 'target="_blank" rel="noreferrer"';
  const href = hasUrl ? link.url : '#';
  return `<a class="${classes}" href="${href}" ${attrs}>${label}</a>`;
};

const getProjectLinks = project => {
  const links = [];
  if (project.videoUrl || project.videoPlaceholder) {
    links.push({
      url: project.videoUrl,
      label: project.videoLabel || 'Video',
      placeholder: project.videoPlaceholder
    });
  }
  if (project.repoUrl || project.repoPlaceholder) {
    links.push({
      url: project.repoUrl,
      label: project.repoLabel || 'Repo',
      placeholder: project.repoPlaceholder
    });
  }
  if (project.buildUrl || project.buildPlaceholder) {
    links.push({
      url: project.buildUrl,
      label: project.buildLabel || 'Build',
      placeholder: project.buildPlaceholder
    });
  }
  return links;
};

const buildProjectActions = project => {
  const links = getProjectLinks(project);
  const buttons = [];
  if (links[0]) buttons.push(buildLinkButton(links[0], 'primary'));
  if (links[1]) buttons.push(buildLinkButton(links[1], 'ghost'));
  if (links[2]) buttons.push(buildLinkButton(links[2], 'ghost'));
  buttons.push(
    `<button class="btn ghost js-case-study" type="button" data-project-id="${project.id}">Case study</button>`
  );
  return buttons.join('');
};

const buildFeaturedCard = project => {
  const highlights = (project.highlights || []).map(item => `<li>${item}</li>`).join('');
  const tags = (project.tags || []).map(tag => `<span class="chip">${tag}</span>`).join('');
  const metaTags = (project.tags || []).slice(0, 3).map(tag => `<span class="meta-pill">${tag}</span>`).join('');
  return `
    <article class="project-card featured-card reveal" data-project-id="${project.id}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} gameplay screenshot" loading="lazy" decoding="async">
        <div class="project-meta">
          ${metaTags}
        </div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <span>${project.year}</span>
          <span>${project.role}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <ul class="project-highlights">${highlights}</ul>
        <div class="tag-row">${tags}</div>
        <div class="project-actions">${buildProjectActions(project)}</div>
      </div>
    </article>
  `;
};

const buildProjectCard = project => {
  const tags = (project.tags || []).map(tag => `<span class="meta-pill">${tag}</span>`).join('');
  return `
    <article class="project-card reveal" data-project-id="${project.id}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.title} gameplay screenshot" loading="lazy" decoding="async">
        <div class="project-meta">${tags}</div>
      </div>
      <div class="project-body">
        <div class="project-top">
          <span>${project.year}</span>
          <span>${project.role}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-role">${project.summary}</p>
        <div class="project-actions">${buildProjectActions(project)}</div>
      </div>
    </article>
  `;
};

const renderProjects = () => {
  if (!featuredGrid || !projectGrid || !window.projects) return;
  const featuredProjects = window.projects.filter(project => project.featured);
  const moreProjects = window.projects.filter(project => !project.featured);

  featuredGrid.innerHTML = featuredProjects.map(buildFeaturedCard).join('');
  projectGrid.innerHTML = moreProjects.map(buildProjectCard).join('');

  if (featuredEmpty) {
    featuredEmpty.hidden = featuredProjects.length > 0;
  }
  if (projectsEmpty) {
    projectsEmpty.hidden = moreProjects.length > 0;
  }

  observeReveal(document.querySelectorAll('.reveal:not(.in-view)'));
  bindCaseStudyButtons();
};

const bindCaseStudyButtons = () => {
  document.querySelectorAll('.js-case-study').forEach(button => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project-id');
      if (!projectId) return;
      openCaseStudyModal(projectId, button);
    });
  });
};

if (window.projects) {
  renderProjects();
}

const createModalController = (modalId, onClose) => {
  const modal = document.getElementById(modalId);
  if (!modal) return null;
  let lastFocusedElement = null;

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (onClose) onClose();
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const open = trigger => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    lastFocusedElement = trigger || document.activeElement;
    const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) {
      focusable[0].focus();
    }
  };

  const closeButton = modal.querySelector('.modal-close');
  if (closeButton) {
    closeButton.addEventListener('click', close);
  }
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      close();
    }
  });
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      close();
    }
    if (event.key === 'Tab') {
      const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  return { modal, open, close };
};

const demoModalController = createModalController('demo-modal', () => {
  const demoVideo = document.getElementById('demo-video');
  if (demoVideo) {
    demoVideo.removeAttribute('src');
  }
});

const demoTrigger = document.getElementById('demo-reel-trigger');
if (demoTrigger && demoModalController && window.demoReel) {
  demoTrigger.addEventListener('click', () => {
    const title = document.getElementById('demo-title');
    const description = document.getElementById('demo-description');
    const video = document.getElementById('demo-video');
    title.textContent = window.demoReel.title;
    description.textContent = window.demoReel.description;
    if (video) {
      video.setAttribute('src', window.demoReel.embedUrl);
    }
    demoModalController.open(demoTrigger);
  });
}

const projectModalController = createModalController('project-modal');

const openCaseStudyModal = (projectId, trigger) => {
  if (!projectModalController || !window.projects) return;
  const project = window.projects.find(item => item.id === projectId);
  if (!project) return;

  const titleEl = document.getElementById('modal-title');
  const metaEl = document.getElementById('modal-meta');
  const overviewEl = document.getElementById('modal-overview');
  const builtEl = document.getElementById('modal-built');
  const challengesEl = document.getElementById('modal-challenges');
  const improvementsEl = document.getElementById('modal-improvements');
  const galleryEl = document.getElementById('modal-gallery');
  const techEl = document.getElementById('modal-tech');
  const linksEl = document.getElementById('modal-links');

  const caseStudy = project.caseStudy || {};
  titleEl.textContent = project.title;
  metaEl.textContent = `${project.role} - ${project.year}`;
  overviewEl.textContent = caseStudy.overview || project.summary;
  builtEl.innerHTML = (caseStudy.built || []).map(item => `<li>${item}</li>`).join('');
  challengesEl.innerHTML = (caseStudy.challenges || []).map(item => `<li>${item}</li>`).join('');
  improvementsEl.innerHTML = (caseStudy.improvements || []).map(item => `<li>${item}</li>`).join('');

  if (galleryEl) {
    galleryEl.innerHTML = (caseStudy.gallery || []).map(item => `
      <figure>
        <img src="${item.src}" alt="${project.title} gallery image" loading="lazy" decoding="async">
        <figcaption>${item.caption}</figcaption>
      </figure>
    `).join('');
  }

  if (techEl) {
    techEl.innerHTML = (project.tags || []).map(tag => `<span class="chip">${tag}</span>`).join('');
  }

  if (linksEl) {
    const linkItems = getProjectLinks(project);
    const actions = linkItems.map(link => buildLinkButton(link, 'ghost'));
    linksEl.innerHTML = actions.join('');
    linksEl.style.display = actions.length ? 'flex' : 'none';
  }

  projectModalController.open(trigger);
};
