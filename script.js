
/* ═══════════════════════════════════════════════════════════
   PRECINCT 99 — Detective Dashboard Portfolio
   Dhyey Desai | Vanilla JavaScript
═══════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ───────────────────────────────────────────────── */

const HOLT_MESSAGES = [
  'Initializing investigation protocols.',
  'Loading case files. Please remain stationary.',
  'Processing operative credentials.',
  'Calibrating evidence analysis systems.',
  'Accessing the precinct database.',
  'Connection established. Admirable.',
  'Cross-referencing operative clearance levels.',
  'All systems operational. You may proceed.',
];

const TYPEWRITER_TEXTS = [
  'Full Stack Developer',
  'Cloud Explorer',
  'Java Backend Engineer',
  'React Frontend Dev',
  'Problem Solver',
  'AI Systems Builder',
];

const TERMINAL_TEXTS = [
  'dhyeydesai@precinct99.dev',
  'Available for full-time roles.',
  'Open to cloud & AI projects.',
  'Let\'s build something great.',
];

const skillsData = [
  { icon: '🎨',  name: 'HTML / CSS',    category: 'frontend'  },
  { icon: '📘',  name: 'TypeScript',    category: 'frontend'  },
  { icon: '⚛',  name: 'React.js',      category: 'frontend'  },
  { icon: '🟢',  name: 'Node.js',       category: 'backend'   },
  { icon: '🚂',  name: 'Express.js',    category: 'backend'   },
  { icon: '☕',  name: 'Java',          category: 'backend'   },
  { icon: '🍃',  name: 'MongoDB',       category: 'database'  },
  { icon: '🐬',  name: 'SQL',           category: 'database'  },
  { icon: '🔥',  name: 'Firebase',      category: 'database'  },
  { icon: '☁',   name: 'Azure',         category: 'cloud'     },
  { icon: '🟠',  name: 'AWS',           category: 'cloud'     },
  { icon: '💻',  name: 'VS Code',       category: 'tools'     },
  { icon: '📮',  name: 'Postman',       category: 'tools'     },
  { icon: '🤖',  name: 'Android Studio',category: 'tools'     },
  { icon: '🎭',  name: 'Figma',         category: 'tools'     },
];

const projectsData = [
  {
    id: 'CASE-001',
    status: 'CLOSED',
    name: 'Employee Management System',
    category: 'Full-Stack Application',
    tags: ['web'],
    year: '2024',
    description: 'Full-stack MVC web application for managing employee records, role filters, and retirement tracking with complete CRUD operations.',
    highlights: [
      'React + Node.js + Express.js MVC architecture',
      'GraphQL API with MongoDB data layer',
      'Unit and integration test coverage',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'GraphQL', 'MongoDB'],
    image: 'media/Employeemangementsystem.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Dhyey1234/Employee-Management-System', type: 'github' }],
  },
  {
    id: 'CASE-002',
    status: 'CLOSED',
    name: 'Body & Care Works',
    category: 'Android Commerce App',
    tags: ['mobile'],
    year: '2024',
    description: 'Native Android e-commerce application with real-time Firebase database, full shopping cart, product browsing, and checkout flow.',
    highlights: [
      'Java + Kotlin native Android development',
      'Firebase Realtime Database integration',
      'Multi-screen responsive UI with validation',
    ],
    stack: ['Java', 'Kotlin', 'Android', 'Firebase'],
    image: 'media/Bodyandcareworks.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Dhyey1234/Body-And-Care-works', type: 'github' }],
  },
  {
    id: 'CASE-003',
    status: 'CLOSED',
    name: 'BookStore App',
    category: 'Full-Stack Application',
    tags: ['web'],
    year: '2025',
    description: 'Full-stack bookstore management system with inventory tracking, user authentication, order management, and a responsive dashboard UI.',
    highlights: [
      'Full CRUD operations for book inventory',
      'User authentication and role-based access',
      'Responsive dashboard with search and filtering',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'media/Bookstore.png',
    links: [],
  },
  {
    id: 'CASE-004',
    status: 'CLOSED',
    name: 'Weather Notifier',
    category: 'Cloud Web Application',
    tags: ['web', 'cloud'],
    year: '2025',
    description: 'Cloud-deployed weather application powered by OpenWeatherMap API with real-time data display and automated Azure-triggered email notifications.',
    highlights: [
      'Azure-deployed Node.js backend with REST API',
      'Real-time weather data from OpenWeatherMap',
      'Automated email notifications via Azure services',
    ],
    stack: ['JavaScript', 'Node.js', 'Azure', 'REST APIs', 'HTML', 'CSS'],
    image: 'media/weatherApp.png',
    links: [
      { label: 'Live Demo', href: 'https://knowweather-ten.vercel.app', type: 'demo' },
      { label: 'GitHub', href: 'https://github.com/Dhyey1234/weather-notifier-azure', type: 'github' },
    ],
  },
  {
    id: 'CASE-005',
    status: 'ACTIVE',
    name: 'AI Loan Approval System',
    category: 'AI-Assisted System',
    tags: ['ai', 'web'],
    year: '2025',
    description: 'Intelligent loan approval system using machine learning models to analyze applicant data, compute risk scores, and automate approval decisions.',
    highlights: [
      'ML-powered risk assessment engine',
      'Java + Spring Boot RESTful backend',
      'Applicant data pipeline and scoring system',
    ],
    stack: ['Java', 'Spring Boot', 'Python', 'ML', 'REST APIs'],
    links: [],
  },
];

const experienceData = [
  {
    incidentId: 'INC-001',
    badge: 'TECHNICAL',
    period: 'Jan 2024 – Apr 2024',
    role: 'Backend Developer',
    org: 'Sarvadhi Solutions',
    location: 'Surat, Gujarat, India',
    bullets: [
      'Developed RESTful APIs and integrated third-party services in an Agile delivery environment.',
      'Optimised PostgreSQL and MongoDB queries, improving data retrieval performance.',
      'Performed systematic debugging, testing, and troubleshooting across multiple modules.',
      'Contributed to API documentation and backend architecture decisions.',
    ],
    tags: ['JavaScript', 'Node.js', 'Java', 'PHP', 'PostgreSQL', 'MongoDB', 'Git'],
  },
  {
    incidentId: 'INC-002',
    badge: 'LEADERSHIP',
    period: 'Feb 2025 – Present',
    role: 'Service Supervisor',
    org: 'Farm Boy',
    location: 'Kitchener, ON, Canada',
    bullets: [
      'Lead daily operations and coordinate team workflow in a high-volume retail environment.',
      'Resolve customer escalations and operational issues with precision and professionalism.',
      'Apply multitasking, time management, and communication skills under sustained pressure.',
    ],
    tags: ['Leadership', 'Operations', 'Team Coordination', 'Communication', 'Problem Solving'],
  },
];

const credentialsData = [
  {
    exhibitId: 'EXH-A',
    name: 'Microsoft Azure Administrator (AZ-104)',
    issuer: 'Microsoft',
    year: '2025',
    badge: 'media/AZ104.jpeg',
    bullets: [
      'VM deployment, storage accounts, and virtual network configuration',
      'RBAC and identity and access management',
      'Docker-based container deployments on Azure',
      'System monitoring with Azure Monitor and ARM templates',
    ],
  },
  {
    exhibitId: 'EXH-B',
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2025',
    badge: 'media/Aws%20Cloud%20Practioner%20Essntials.jpeg',
    bullets: [
      'AWS core services and cloud fundamentals',
      'Architecture best practices and cost optimization',
      'Security, compliance, and shared responsibility model',
    ],
  },
  {
    exhibitId: 'EXH-C',
    name: 'Claude Code In Action',
    issuer: 'Anthropic',
    year: '2025',
    badge: 'media/Claude%20Code.jpeg',
    bullets: [
      'AI-assisted coding workflows and structured delivery',
      'Prompt engineering for complex development tasks',
      'Human-AI collaboration in software projects',
    ],
  },
];

/* ── LOADING SCREEN ─────────────────────────────────────── */
function initLoadingScreen() {
  const screen  = document.getElementById('loading-screen');
  const msgEl   = document.getElementById('loading-msg');
  const fillEl  = document.getElementById('loading-fill');
  if (!screen || !msgEl || !fillEl) return;

  let msgIndex = 0;
  let progress = 0;

  function nextMsg() {
    msgEl.textContent = HOLT_MESSAGES[msgIndex % HOLT_MESSAGES.length];
    msgIndex++;
  }
  nextMsg();

  const msgTimer = setInterval(nextMsg, 600);

  const progressTimer = setInterval(() => {
    progress = Math.min(progress + Math.random() * 18 + 8, 100);
    fillEl.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(progressTimer);
      clearInterval(msgTimer);
      msgEl.textContent = 'Ready. Admirable.';
      setTimeout(() => screen.classList.add('hidden'), 500);
    }
  }, 200);
}

/* ── PARTICLES ──────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function spawnParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - .5) * .3,
      vy: -Math.random() * .5 - .1,
      alpha: Math.random() * .5 + .1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,197,24,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  spawnParticles();
  draw();
  window.addEventListener('resize', () => { resize(); spawnParticles(); });
}

/* ── TYPEWRITER ──────────────────────────────────────────── */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  let textIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = TYPEWRITER_TEXTS[textIndex];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % TYPEWRITER_TEXTS.length;
      }
    }
    setTimeout(tick, deleting ? 50 : 80);
  }
  tick();
}

/* ── TERMINAL TYPED ─────────────────────────────────────── */
function initTerminalTyped() {
  const el = document.getElementById('term-typed');
  if (!el) return;

  let textIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = TERMINAL_TEXTS[textIndex];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % TERMINAL_TEXTS.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

/* ── NAV ────────────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      mobileNav.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.mobile-link, .mobile-resume').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        mobileNav.setAttribute('aria-hidden', true);
        document.body.style.overflow = '';
      });
    });
  }
}

/* ── SCROLL REVEAL ──────────────────────────────────────── */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── SKILL BAR ANIMATION ────────────────────────────────── */
function initSkillBars() {
  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.skill-bar-fill');
        if (fill) {
          const level = fill.getAttribute('data-level');
          requestAnimationFrame(() => { fill.style.width = level + '%'; });
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-card').forEach(card => obs.observe(card));
}

/* ── SKILLS RENDER ──────────────────────────────────────── */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  let evidenceNum = 1;
  grid.innerHTML = skillsData.map(skill => `
    <div class="skill-card reveal" data-category="${skill.category}">
      <span class="evidence-tag mono">EVD-${String(evidenceNum++).padStart(3,'0')}</span>
      <span class="skill-icon">${skill.icon}</span>
      <span class="skill-cat mono">${skill.category}</span>
      <span class="skill-name">${skill.name}</span>
    </div>
  `).join('');

  initRevealInGrid(grid);
}

/* ── SKILLS FILTER ──────────────────────────────────────── */
function initSkillsFilter() {
  const btns = document.querySelectorAll('[data-filter]');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.skill-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('filtered-out', !match);
      });
    });
  });
}

/* ── PROJECTS RENDER ────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectsData.map(p => {
    let media;
    if (p.video) {
      media = `<video src="${p.video}" autoplay muted loop playsinline preload="metadata" aria-label="${p.name} preview"></video>`;
    } else if (p.image) {
      media = `<img src="${p.image}" alt="${p.name} preview" loading="lazy" />`;
    } else {
      media = `<div class="project-media-fallback"><span>${p.id}</span></div>`;
    }

    const linksHTML = p.links.map(l =>
      `<a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''} class="project-link${l.type === 'demo' ? ' demo' : ''}">${l.label}</a>`
    ).join('');

    return `
      <article class="project-card reveal" data-tags="${p.tags.join(',')}">
        <div class="project-media">
          ${media}
          <span class="case-badge mono">${p.id}</span>
          <span class="status-badge ${p.status === 'CLOSED' ? 'status-closed' : 'status-active'} mono">${p.status}</span>
        </div>
        <div class="project-body">
          <span class="project-cat mono">${p.category} // ${p.year}</span>
          <h3 class="project-name">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <ul class="project-highlights">
            ${p.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
          <div class="project-stack">
            ${p.stack.map(s => `<span>${s}</span>`).join('')}
          </div>
          ${linksHTML ? `<div class="project-links">${linksHTML}</div>` : ''}
        </div>
      </article>
    `;
  }).join('');

  initRevealInGrid(grid);
}

/* ── PROJECTS FILTER ────────────────────────────────────── */
function initProjectsFilter() {
  const btns = document.querySelectorAll('[data-pfilter]');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const filter = btn.dataset.pfilter;
      document.querySelectorAll('.project-card').forEach(card => {
        const tags = (card.dataset.tags || '').split(',');
        const match = filter === 'all' || tags.includes(filter);
        card.classList.toggle('filtered-out', !match);
      });
    });
  });
}

/* ── EXPERIENCE RENDER ──────────────────────────────────── */
function renderExperience() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = experienceData.map(e => `
    <article class="timeline-item reveal">
      <div class="incident-id">
        <span class="incident-badge ${e.badge === 'TECHNICAL' ? 'badge-technical' : 'badge-leadership'} mono">${e.badge}</span>
        <span class="incident-num mono">${e.incidentId}</span>
      </div>
      <p class="timeline-period mono">${e.period}</p>
      <h3 class="timeline-role">${e.role}</h3>
      <p class="timeline-org">${e.org}</p>
      <p class="timeline-loc mono">${e.location}</p>
      <ul class="timeline-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="timeline-tags">
        ${e.tags.map(t => `<span class="timeline-tag mono">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ── CREDENTIALS RENDER ─────────────────────────────────── */
function renderCredentials() {
  const grid = document.getElementById('creds-grid');
  if (!grid) return;

  grid.innerHTML = credentialsData.map(c => `
    <article class="cred-card reveal">
      <div class="cred-media">
        <img src="${c.badge}" alt="${c.name}" loading="lazy" />
        <span class="exhibit-label mono">${c.exhibitId}</span>
      </div>
      <div class="cred-body">
        <span class="cred-issuer mono">${c.issuer}</span>
        <h3 class="cred-name">${c.name}</h3>
        <span class="cred-year mono">${c.year}</span>
        <ul class="cred-bullets">
          ${c.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

/* ── CONTACT FORM ───────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#cf-name').value.trim();
    const email   = form.querySelector('#cf-email').value.trim();
    const subject = form.querySelector('#cf-subject').value.trim();
    const message = form.querySelector('#cf-msg').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    const mailtoURL = `mailto:dhyeydesai2103@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoURL, '_blank');
    form.reset();
  });
}

/* ── HELPER: reveal items inside a freshly-rendered grid ── */
function initRevealInGrid(container) {
  if (!('IntersectionObserver' in window)) {
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  container.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── FOOTER YEAR ────────────────────────────────────────── */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── HERO CARD PARALLAX ─────────────────────────────────── */
function initHeroCardParallax() {
  const card = document.getElementById('hero-card');
  if (!card) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 1001) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    card.style.transform = `translateY(${-10 + dy * 5}px) rotateX(${-dy * 3}deg) rotateY(${dx * 4}deg)`;
  });
}

/* ── STAGGER REVEAL ─────────────────────────────────────── */
function staggerReveal() {
  document.querySelectorAll('.section-head.reveal').forEach(el => {
    el.style.transitionDelay = '0s';
  });
}

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initParticles();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCredentials();
  initTypewriter();
  initTerminalTyped();
  initNav();
  initReveal();
  initSkillsFilter();
  initProjectsFilter();
  initContactForm();
  initHeroCardParallax();
  staggerReveal();
  setFooterYear();
});
