const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

const logoMap = {
  JavaScript: 'https://svgl.app/library/javascript.svg',
  TypeScript: 'https://svgl.app/library/typescript.svg',
  Php: 'https://svgl.app/library/php.svg',
  Java: 'https://svgl.app/library/java.svg',
  React: 'https://svgl.app/library/react_light.svg',
  Angular: 'https://svgl.app/library/angular.svg',
  'Node.js': 'https://svgl.app/library/nodejs.svg',
  'Microsoft Azure': 'https://svgl.app/library/azure.svg',
  Docker: 'https://svgl.app/library/docker.svg',
  MySQL: 'https://svgl.app/library/mysql-icon-light.svg',
  'Microsoft SQL Server': 'https://svgl.app/library/sql-server.svg',
  MongoDB: 'https://svgl.app/library/mongodb-icon-light.svg',
  Firebase: 'https://svgl.app/library/firebase.svg',
  Postman: 'https://svgl.app/library/postman.svg',
  'Visual Studio Code': 'https://svgl.app/library/vscode.svg',
  Android: 'https://svgl.app/library/android-icon.svg',
  Figma: 'https://svgl.app/library/figma.svg',
  Illustrator: 'https://svgl.app/library/illustrator.svg',
  GraphQL: 'https://svgl.app/library/graphql.svg',
  Git: 'https://svgl.app/library/git.svg',
  'Express.js': 'https://svgl.app/library/expressjs.svg',
  GitHub: 'https://svgl.app/library/github_light.svg',
  'Microsoft .NET': 'https://svgl.app/library/dotnet.svg',
};

const projects = [
  {
    category: 'Logistics Platform',
    name: 'Truck Connect',
    year: '2025',
    description:
      'Web and mobile application for drivers, shipments, and delivery tracking.',
    highlights: [
      'Built RESTful APIs and integrated third-party services.',
      'Developed responsive UI and cross-platform mobile features.',
      'Worked with MongoDB, improving query handling and data flow.',
      'Debugged issues and improved application performance.',
    ],
    stack: ['JavaScript', 'Node.js', 'Java', 'PHP', 'MongoDB', 'REST APIs', 'Git'],
    logoNames: ['JavaScript', 'Node.js', 'MongoDB', 'Git'],
    links: [],
  },
  {
    category: 'Full-stack Application',
    name: 'Employee Management System',
    year: '2024',
    description:
      'Full-stack web application to manage employee records, filters, and retirement tracking.',
    highlights: [
      'Built a full-stack MVC application using React and Node.js.',
      'Designed relational database structures and wrote efficient SQL queries.',
      'Integrated RESTful APIs and handled data manipulation workflows.',
      'Performed unit and integration testing to improve quality.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'GraphQL', 'MongoDB', 'HTML', 'Figma', 'Git'],
    logoNames: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    video: 'media/Employee%20MAnagement%20system.mp4',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Dhyey1234/Employee-Management-System',
      },
    ],
  },
  {
    category: 'Android Commerce App',
    name: 'Body And Care Works',
    year: 'Nov-Dec 2024',
    description:
      'E-commerce Android application with shopping cart and checkout.',
    highlights: [
      'Developed native Android application using Java and Kotlin.',
      'Integrated Firebase Realtime Database.',
      'Implemented checkout flow with validation.',
      'Built responsive UI for multiple screen orientations.',
    ],
    stack: ['Java', 'Kotlin', 'Android Development', 'Firebase'],
    logoNames: ['Java', 'Android', 'Firebase'],
    video: 'media/BodyandCareWorks.mp4',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Dhyey1234/Body-And-Care-works',
      },
    ],
  },
];

const experience = [
  {
    years: 'Jan 2024 - Apr 2024',
    role: 'Backend Developer',
    company: 'Sarvadhi Solutions',
    location: 'Surat, India',
    bullets: [
      'Developed web applications and RESTful APIs while integrating third-party services.',
      'Worked with PostgreSQL and MongoDB to improve query performance.',
      'Performed debugging, testing, and troubleshooting in an Agile environment.',
      'Contributed to API design, documentation, and backend workflows.',
    ],
    tagsLabel: 'Technologies',
    tags: ['JavaScript', 'Node.js', 'Java', 'PHP', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    years: 'Feb 2025 - Present',
    role: 'Service Supervisor',
    company: 'Farm Boy',
    location: 'Kitchener, ON',
    bullets: [
      'Lead daily operations, manage workflow, and support team coordination.',
      'Handle issue resolution to maintain a smooth customer experience.',
      'Apply problem-solving, communication, and multitasking skills in fast-paced work.',
    ],
    tagsLabel: 'Strengths',
    tags: ['Leadership', 'Workflow management', 'Issue resolution', 'Communication'],
  },
];

const education = [
  {
    years: '2021 - 2024',
    degree: 'Bachelor of Computer Applications',
    school: 'Uka Tarsadia University',
  },
  {
    years: '2024 - 2025',
    degree: 'Web Development Diploma',
    school: 'Conestoga College',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Started Bachelor of Computer Applications',
    detail: 'Built software fundamentals at Uka Tarsadia University.',
  },
  {
    year: '2024',
    title: 'Backend Developer Intern at Sarvadhi Solutions',
    detail: 'Worked on web applications, RESTful APIs, PostgreSQL, and MongoDB.',
  },
  {
    year: 'Nov-Dec 2024',
    title: 'Built Body And Care Works',
    detail: 'Delivered an Android e-commerce app with Firebase-backed cart and checkout flows.',
  },
  {
    year: '2024 - 2025',
    title: 'Completed Web Development Diploma',
    detail: 'Expanded into full-stack web delivery at Conestoga College.',
  },
  {
    year: '2025',
    title: 'Built Truck Connect',
    detail: 'Contributed to a logistics-focused web and mobile application.',
  },
  {
    year: '2025 - Present',
    title: 'Service Supervisor at Farm Boy',
    detail: 'Leading operations, team coordination, and issue resolution in Kitchener.',
  },
];

const certifications = [
  {
    name: 'Microsoft Azure Administrator (AZ-104)',
    issuer: 'Microsoft',
    date: 'Hands-on project',
    badge: 'media/AZ104.jpeg',
    details: [
      'Deployed and managed VMs, storage, and virtual networks.',
      'Configured RBAC and access control.',
      'Implemented Docker-based deployments.',
      'Monitored systems using Azure Monitor.',
      'Used ARM templates for automation.',
    ],
  },
  {
    name: 'Claude Code In Action',
    issuer: 'Anthropic',
    date: 'Certificate',
    badge: 'media/Claude%20Code.jpeg',
    details: ['Applied AI-assisted workflows to coding, automation, and structured delivery.'],
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Foundations',
    badge: 'media/Aws%20Cloud%20Practioner%20Essntials.jpeg',
    details: ['Covered AWS cloud fundamentals, services, and core architecture concepts.'],
  },
];

const skills = [
  {
    label: 'Development',
    blurb: 'Languages and platforms used for web, backend, and mobile application delivery.',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'ASP.NET', 'Android (Java, Kotlin)', 'JSON'],
  },
  {
    label: 'Frameworks and Libraries',
    blurb: 'Frontend and server-side frameworks used across full-stack and mobile work.',
    items: ['React', 'Angular', 'Node.js', 'React Native', 'Express.js', 'GraphQL'],
  },
  {
    label: 'Cloud and DevOps',
    blurb: 'Infrastructure and delivery tooling used in cloud labs and deployment workflows.',
    items: ['Microsoft Azure', 'Docker', 'CI/CD (GitHub Actions)', 'AWS fundamentals'],
  },
  {
    label: 'Databases',
    blurb: 'Relational and document databases used in application and API work.',
    items: ['MySQL', 'Microsoft SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'Testing and Tools',
    blurb: 'Testing practices and tools used for debugging, API work, design, and delivery.',
    items: [
      'Unit testing',
      'Integration testing',
      'API testing',
      'Postman',
      'Visual Studio Code',
      'Android Studio',
      'Figma',
      'Adobe Illustrator',
      'Git',
    ],
  },
];

const technologyLogos = [
  { label: 'JavaScript', key: 'JavaScript' },
  { label: 'TypeScript', key: 'TypeScript' },
  { label: 'PHP', key: 'Php' },
  { label: 'Java', key: 'Java' },
  { label: 'ASP.NET', key: 'Microsoft .NET' },
  { label: 'React', key: 'React' },
  { label: 'Angular', key: 'Angular' },
  { label: 'Node.js', key: 'Node.js' },
  { label: 'Azure', key: 'Microsoft Azure' },
  { label: 'Docker', key: 'Docker' },
  { label: 'GitHub Actions', key: 'GitHub' },
  { label: 'MySQL', key: 'MySQL' },
  { label: 'SQL Server', key: 'Microsoft SQL Server' },
  { label: 'MongoDB', key: 'MongoDB' },
  { label: 'Firebase', key: 'Firebase' },
  { label: 'GraphQL', key: 'GraphQL' },
  { label: 'Express.js', key: 'Express.js' },
  { label: 'Postman', key: 'Postman' },
  { label: 'VS Code', key: 'Visual Studio Code' },
  { label: 'Android Studio', key: 'Android' },
  { label: 'Figma', key: 'Figma' },
  { label: 'Adobe Illustrator', key: 'Illustrator' },
  { label: 'Git', key: 'Git' },
];

const heroRoles = [
  'Software Developer',
  'Backend Developer',
  'Cloud-Focused Developer',
  'Full-stack Builder',
];

function renderLogoImage(key, label, className) {
  const source = logoMap[key];
  if (!source) return '';

  return `
    <span class="${className}">
      <img src="${source}" alt="${label} logo" loading="lazy" decoding="async" />
    </span>
  `;
}

function renderProjectMedia(project) {
  if (project.video) {
    return `<video src="${project.video}" autoplay muted loop playsinline preload="metadata"></video>`;
  }

  if (project.image) {
    return `<img src="${project.image}" alt="${project.name} preview" loading="lazy" />`;
  }

  return `
    <div class="project-media-fallback">
      <span class="project-media-tag">${project.year}</span>
      <strong>${project.name}</strong>
      <p>${project.description}</p>
      <div class="project-logo-stack">
        ${project.logoNames
          .map(
            (name) => `
              <span class="project-logo-pill">
                ${renderLogoImage(name, name, 'project-logo-mark')}
                <small>${name}</small>
              </span>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderProjectLinks(project) {
  if (!Array.isArray(project.links) || project.links.length === 0) {
    return '';
  }

  return project.links
    .map(
      (link) => `
        <a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${link.label}</a>
      `,
    )
    .join('');
}

function renderProjects() {
  const container = document.querySelector('.projects-grid');
  if (!container) return;

  container.innerHTML = projects
    .map((project, index) => {
      const layoutClass = index === 0 ? ' is-featured' : index === projects.length - 1 ? ' is-wide' : '';
      const linksMarkup = renderProjectLinks(project);

      return `
        <article class="project-card tilt-card${layoutClass}">
          <div class="project-media">
            ${renderProjectMedia(project)}
          </div>

          <div class="project-body">
            <div class="project-top">
              <span class="project-category">${project.category}</span>
              <span class="project-chip">${project.year}</span>
            </div>

            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>

            <ul class="detail-list project-highlights">
              ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
            </ul>

            <div class="project-footer">
              <div class="project-stack">
                ${project.stack.map((item) => `<span>${item}</span>`).join('')}
              </div>

              ${
                linksMarkup
                  ? `
                    <div class="project-links">
                      ${linksMarkup}
                    </div>
                  `
                  : ''
              }
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderTimeline() {
  const container = document.querySelector('.timeline-list');
  if (!container) return;

  container.innerHTML = `
    <div class="timeline-axis" aria-hidden="true"><span class="timeline-axis-fill"></span></div>
    ${timeline
      .map(
        (item) => `
          <article class="timeline-item">
            <div class="timeline-meta">
              <span class="timeline-year">${item.year}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </article>
        `,
      )
      .join('')}
  `;
}

function renderExperience() {
  const container = document.querySelector('.experience-grid');
  if (!container) return;

  container.innerHTML = experience
    .map(
      (item) => `
        <article class="experience-card tilt-card">
          <span class="experience-date">${item.years}</span>
          <h3>${item.role}</h3>
          <p>${item.company}</p>
          <small>${item.location}</small>

          <ul class="detail-list">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>

          <div class="detail-chips">
            <strong>${item.tagsLabel}</strong>
            ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');
}

function renderEducation() {
  const container = document.querySelector('.education-grid');
  if (!container) return;

  container.innerHTML = education
    .map(
      (item) => `
        <article class="education-card tilt-card">
          <span class="experience-date">${item.years}</span>
          <h3>${item.degree}</h3>
          <p>${item.school}</p>
        </article>
      `,
    )
    .join('');
}

function renderSkills() {
  const container = document.querySelector('.skills-grid');
  if (!container) return;

  container.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-card tilt-card">
          <span class="skill-label">${group.label}</span>
          <h3>${group.label}</h3>
          <p>${group.blurb}</p>
          <div class="detail-chips">
            ${group.items.map((item) => `<span>${item}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');
}

function renderTechnologyLogos() {
  const container = document.querySelector('.tech-logo-grid');
  if (!container) return;

  container.innerHTML = technologyLogos
    .map(
      (item) => `
        <article class="tech-logo-card tilt-card">
          ${renderLogoImage(item.key, item.label, 'tech-logo-mark')}
          <strong>${item.label}</strong>
        </article>
      `,
    )
    .join('');
}

function renderCertifications() {
  const container = document.querySelector('.cert-grid');
  if (!container) return;

  container.innerHTML = certifications
    .map((cert, index) => {
      const layoutClass =
        index === 0 ? ' is-featured' : index === certifications.length - 1 ? ' is-wide' : '';

      const media = cert.badge
        ? `<img src="${cert.badge}" alt="${cert.name} badge" loading="lazy" />`
        : `
          <div class="cert-card-fallback">
            ${renderLogoImage(cert.logoName, cert.name, 'cert-card-mark')}
          </div>
        `;

      return `
        <article class="cert-card tilt-card${layoutClass}">
          ${media}
          <div class="cert-card-body">
            <span class="cert-label">${cert.issuer}</span>
            <h3>${cert.name}</h3>
            <p>${cert.date}</p>
            <ul class="detail-list">
              ${cert.details.map((detail) => `<li>${detail}</li>`).join('')}
            </ul>
          </div>
        </article>
      `;
    })
    .join('');
}

function updateYear() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

function initRoleRotation() {
  const roleElement = document.querySelector('.hero-role');
  if (!roleElement) return;

  let currentIndex = 0;

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % heroRoles.length;
    const nextRole = heroRoles[currentIndex];

    if (hasGSAP && !prefersReducedMotion) {
      window.gsap.to(roleElement, {
        autoAlpha: 0,
        y: -14,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          roleElement.textContent = nextRole;
          window.gsap.fromTo(
            roleElement,
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power3.out' },
          );
        },
      });
      return;
    }

    roleElement.textContent = nextRole;
  }, 2800);
}

function initScrollState() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const onScroll = () => {
    topbar.classList.toggle('topbar-scrolled', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initInteractivePanels() {
  if (!hasGSAP || prefersReducedMotion) return;

  document.querySelectorAll('.tilt-card').forEach((card) => {
    const rotateX = window.gsap.quickTo(card, 'rotationX', {
      duration: 0.45,
      ease: 'power3.out',
    });
    const rotateY = window.gsap.quickTo(card, 'rotationY', {
      duration: 0.45,
      ease: 'power3.out',
    });
    const shiftY = window.gsap.quickTo(card, 'y', {
      duration: 0.45,
      ease: 'power3.out',
    });

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      rotateY((x - 0.5) * 8);
      rotateX((0.5 - y) * 8);
      shiftY(-4);
      card.style.setProperty('--glow-x', `${x * 100}%`);
      card.style.setProperty('--glow-y', `${y * 100}%`);
    };

    const handleLeave = () => {
      rotateX(0);
      rotateY(0);
      shiftY(0);
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '50%');
    };

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
  });
}

function initAnimations() {
  if (!hasGSAP || prefersReducedMotion) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  const introTimeline = window.gsap.timeline({ defaults: { ease: 'power3.out' } });

  introTimeline
    .from('.topbar-inner', { y: -30, autoAlpha: 0, duration: 0.8 })
    .from('.hero-role', { y: 24, autoAlpha: 0, duration: 0.55 }, '-=0.4')
    .from('.title-line', { yPercent: 100, autoAlpha: 0, duration: 0.9, stagger: 0.14 }, '-=0.2')
    .from('.hero-lead', { y: 26, autoAlpha: 0, duration: 0.7 }, '-=0.45')
    .from('.hero-actions .button', { y: 18, autoAlpha: 0, duration: 0.55, stagger: 0.1 }, '-=0.45')
    .from('.hero-stats .stat-card', { y: 22, autoAlpha: 0, duration: 0.55, stagger: 0.1 }, '-=0.35')
    .from('.hero-panel', { x: 38, autoAlpha: 0, duration: 0.8 }, '-=0.65')
    .from('.hero-orbit', { scale: 0.7, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, '-=0.55');

  window.gsap.utils.toArray('.reveal-up').forEach((element) => {
    window.gsap.from(element, {
      y: 46,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 84%',
        once: true,
      },
    });
  });

  window.gsap
    .utils.toArray(
      '.project-card, .timeline-item, .experience-card, .education-card, .skill-card, .tech-logo-card, .cert-card, .intel-panel',
    )
    .forEach((element) => {
      window.gsap.from(element, {
        y: 44,
        autoAlpha: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      });
    });

  const timelineFill = document.querySelector('.timeline-axis-fill');
  if (timelineFill) {
    window.gsap.to(timelineFill, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-list',
        start: 'top 72%',
        end: 'bottom 68%',
        scrub: true,
      },
    });
  }

  const heroImage = document.querySelector('.hero-panel-media img');
  if (heroImage) {
    window.gsap.to(heroImage, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  document.querySelectorAll('[data-parallax]').forEach((element) => {
    const amount = Number(element.getAttribute('data-parallax')) || 8;
    window.gsap.to(element, {
      yPercent: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  document.querySelectorAll('.hero-orbit').forEach((orbit, index) => {
    const xShift = index === 0 ? -8 : 10;
    const yShift = index === 0 ? 14 : -12;

    window.gsap.to(orbit, {
      xPercent: xShift,
      yPercent: yShift,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

function init() {
  renderProjects();
  renderTimeline();
  renderExperience();
  renderEducation();
  renderSkills();
  renderTechnologyLogos();
  renderCertifications();
  updateYear();
  initRoleRotation();
  initScrollState();
  initInteractivePanels();
  initAnimations();
}

window.addEventListener('DOMContentLoaded', init);
