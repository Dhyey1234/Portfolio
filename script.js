const projects = [
  {
    category: 'Commerce System',
    name: 'BookStore Project',
    description:
      'A polished e-commerce workflow built for clarity, with inventory control, customer-focused checkout, and a lean product catalogue experience.',
    stack: ['ASP.NET', 'C#', 'SQL Server'],
    video: 'media/BookStore%20Project.mp4',
    github: 'https://github.com/Dhyey1234',
    live: 'https://www.linkedin.com/in/dhyeydesaii/',
  },
  {
    category: 'Operations Platform',
    name: 'Employee Management System',
    description:
      'A structured full-stack dashboard for admin workflows, real-time data interaction, and business-ready CRUD operations.',
    stack: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    video: 'media/Employee%20MAnagement%20system.mp4',
    github: 'https://github.com/Dhyey1234/Employee-Management-System',
    live: 'https://github.com/Dhyey1234/Employee-Management-System',
  },
  {
    category: 'Mobile Experience',
    name: 'BodyandCareWorks',
    description:
      'A mobile retail experience focused on product storytelling, checkout simplicity, and smooth content pacing.',
    stack: ['Java', 'XML', 'Firebase'],
    video: 'media/BodyandCareWorks.mp4',
    github: 'https://github.com/Dhyey1234/Body-And-Care-works',
    live: 'https://github.com/Dhyey1234/Body-And-Care-works',
  },
];

const experience = [
  {
    years: '2025 — Present',
    role: 'Service Supervisor',
    company: 'Farm Boy',
    location: 'Kitchener, ON',
  },
  {
    years: '2024',
    role: 'Backend Developer Intern',
    company: 'Sarvadhi Solutions',
    location: 'Surat, India',
  },
];

const timeline = [
  {
    year: 'Aug 2021',
    title: 'Started Bachelor of Computer Applications',
    detail: 'Began a Bachelor of Computer Applications program and focused on software fundamentals.',
  },
  {
    year: 'Jan 2024',
    title: 'Sarvadhi Solutions',
    detail: 'Worked as a backend developer intern and completed my BCA degree.',
  },
  {
    year: 'Sept 2024',
    title: 'Started Web Development',
    detail: 'Joined Conestoga College for Web Development and began building modern web systems.',
  },
  {
    year: 'Dec 2025',
    title: 'Completed Web Development',
    detail: 'Finished the program.',
  },
];

const certifications = [
  {
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    date: 'AZ-104 / 2026',
    badge: 'media/AZ104.jpeg',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    badge: 'media/Aws%20Cloud%20Practioner%20Essntials.jpeg',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026',
    badge: 'media/Claude%20Code.jpeg',
  },
];

const skills = [
  {
    label: 'Development',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'ASP.NET', 'Android (Java, Kotlin)'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Angular', 'Node.js', 'React Native'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Docker', 'CI/CD (GitHub Actions)'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'Testing & Tools',
    items: ['Unit testing', 'API testing', 'Postman', 'VS Code', 'Android Studio', 'Figma'],
  },
];

const heroRoles = ['Software Developer', 'Backend Developer', 'Cloud Developer', 'Mobile Developer'];

function renderProjects() {
  const container = document.querySelector('.projects-grid');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-card-preview">
          <video src="${project.video}" autoplay muted loop playsinline></video>
        </div>
        <div class="project-card-top">
          <span>${project.category}</span>
          <div class="project-chip">Featured</div>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-stack">
          ${project.stack.map((item) => `<span>${item}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${project.live}" target="_blank" rel="noreferrer">Live</a>
        </div>
      </article>
    `,
    )
    .join('');
}

function renderTimeline() {
  const container = document.querySelector('.timeline-list');
  if (!container) return;

  container.innerHTML = timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <span class="timeline-year">${item.year}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </div>
    `,
    )
    .join('');
}

function renderExperience() {
  const container = document.querySelector('.experience-grid');
  if (!container) return;

  container.innerHTML = experience
    .map(
      (item) => `
      <article class="experience-card">
        <span class="experience-date">${item.years}</span>
        <h3>${item.role}</h3>
        <p>${item.company}</p>
        <small>${item.location}</small>
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
      <article class="skill-card">
        <span>${group.label}</span>
        <p>${group.items.join(' · ')}</p>
      </article>
    `,
    )
    .join('');
}

function renderCertifications() {
  const container = document.querySelector('.cert-grid');
  if (!container) return;

  container.innerHTML = certifications
    .map(
      (cert) => `
      <article class="cert-card">
        ${cert.badge ? `<img src="${cert.badge}" alt="${cert.name} badge" />` : ''}
        <span class="cert-label">${cert.issuer}</span>
        <h3>${cert.name}</h3>
        <p>${cert.date}</p>
      </article>
    `,
    )
    .join('');
}

function updateYear() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

function initRoleRotation() {
  const roleElement = document.querySelector('.role-rotate');
  if (!roleElement) return;

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % heroRoles.length;
    roleElement.textContent = heroRoles[currentIndex];
    roleElement.classList.remove('role-rotate');
    void roleElement.offsetWidth;
    roleElement.classList.add('role-rotate');
  }, 2800);
}

function initScrollEffect() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const onScroll = () => {
    if (window.scrollY > 28) {
      topbar.classList.add('topbar-scrolled');
    } else {
      topbar.classList.remove('topbar-scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function init() {
  renderProjects();
  renderTimeline();
  renderExperience();
  renderSkills();
  renderCertifications();
  updateYear();
  initRoleRotation();
  initScrollEffect();
}

window.addEventListener('DOMContentLoaded', init);
