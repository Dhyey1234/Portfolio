import { useEffect, useState } from 'react'
import './App.css'

type Project = {
  category: string
  name: string
  description: string
  stack: string[]
  video: string
  github: string
  live: string
}

type ExperienceItem = {
  years: string
  role: string
  company: string
  location: string
}

type TimelineItem = {
  year: string
  title: string
  detail: string
}

type Certification = {
  name: string
  issuer: string
  date: string
  badge?: string
}

const projects: Project[] = [
  {
    category: 'Commerce System',
    name: 'BookStore Project',
    description:
      'A polished e-commerce workflow built for clarity, with inventory control, customer-focused checkout, and a lean product catalogue experience.',
    stack: ['ASP.NET', 'C#', 'SQL Server'],
    video: '/media/BookStore Project.mp4',
    github: 'https://github.com/Dhyey1234',
    live: 'https://www.linkedin.com/in/dhyeydesaii/',
  },
  {
    category: 'Operations Platform',
    name: 'Employee Management System',
    description:
      'A structured full-stack dashboard for admin workflows, real-time data interaction, and business-ready CRUD operations.',
    stack: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    video: '/media/Employee MAnagement system.mp4',
    github: 'https://github.com/Dhyey1234/Employee-Management-System',
    live: 'https://github.com/Dhyey1234/Employee-Management-System',
  },
  {
    category: 'Mobile Experience',
    name: 'BodyandCareWorks',
    description:
      'A mobile retail experience focused on product storytelling, checkout simplicity, and smooth content pacing.',
    stack: ['Java', 'XML', 'Firebase'],
    video: '/media/BodyandCareWorks.mp4',
    github: 'https://github.com/Dhyey1234/Body-And-Care-works',
    live: 'https://github.com/Dhyey1234/Body-And-Care-works',
  },
]

const experience: ExperienceItem[] = [
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
]

const timeline: TimelineItem[] = [
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
    detail: 'Finished the program ',
  },
]

const certifications: Certification[] = [
  {
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    date: 'AZ-104 / 2026',
    badge: '/media/AZ104.jpeg',
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    badge: '/media/Aws Cloud Practioner Essntials.jpeg',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026',
    badge: '/media/Claude Code.jpeg',
  },
]

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
]

const heroRoles = ['Software Developer', 'Backend Developer', 'Cloud Developer', 'Mobile Developer']

function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % heroRoles.length)
    }, 2800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="app-shell">
      <header className={`topbar${navScrolled ? ' topbar-scrolled' : ''}`}>
        <a className="brand-link" href="#home">
          DD
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow role-rotate" key={activeRole}>
              {heroRoles[activeRole]}
            </span>
            <h1>Building software that is simple, strong, and clear.</h1>
            <p>
              I focus on backend systems, cloud services, and mobile apps that work well,
              look clean, and stay easy to use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="#contact">
                Let’s connect
              </a>
            </div>
          </div>
          <div className="hero-mesh" aria-hidden="true" />
        </section>

        <section id="about" className="section-block about-block">
          <div className="section-head">
            <span className="eyebrow">About</span>
            <h2>Software with structure, clarity, and calm impact.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I build systems that feel dependable and easy to use. My work blends backend
                reliability, cloud stability, and mobile accessibility.
              </p>
              
            </div>
            {/* <div className="about-right">
              <div className="about-photo">
                <img src="/media/DhyeyGraduation.jpeg" alt="Graduation portrait" />
              </div>
              <div className="about-stat-panel">
                <span className="stat-label">Graduation moment</span>
                <strong>Dec 2025 • Web Development</strong>
                <p>
                  Finished the program at Conestoga College and moved into cloud-first development.
                </p>
              </div>
            </div> */}
          </div>
        </section>

        <section id="projects" className="section-block projects-block">
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2>Selected work with real-world clarity.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-card-preview">
                  <video src={project.video} autoPlay muted loop playsInline />
                </div>
                <div className="project-card-top">
                  <span>{project.category}</span>
                  <div className="project-chip">Featured</div>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((stackItem) => (
                    <span key={stackItem}>{stackItem}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="section-block timeline-block">
          <div className="section-head">
            <span className="eyebrow">Timeline</span>
            <h2>Key milestones from graduation to AI learning.</h2>
          </div>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block experience-block">
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2>Practical roles that shaped how I ship software.</h2>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="experience-card">
                <span className="experience-date">{item.years}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <small>{item.location}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block skills-block">
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2>Capabilities and toolsets I rely on.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.label} className="skill-card">
                <span>{group.label}</span>
                <p>{group.items.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block ai-block">
          <div className="section-head">
            <span className="eyebrow">AI Learning</span>
            <h2>Claude Code in action</h2>
          </div>
          <div className="highlight-panel">
            <div>
              <p>
                Completed Anthropic’s Claude Code certification, translating AI concepts into working code.
                The focus is on practical prompt workflows, automation, and making machine-assisted systems feel
                structured rather than noisy.
              </p>
            </div>
            <div className="highlight-badge">
              <span>Certificate</span>
              <strong>Claude Code in Action</strong>
              <small>Anthropic • 2026</small>
            </div>
          </div>
        </section>

        <section className="section-block certification-block">
          <div className="section-head">
            <span className="eyebrow">Certificates</span>
            <h2>Official credentials and cloud skills.</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="cert-card">
                {cert.badge ? (
                  <img src={cert.badge} alt={`${cert.name} badge`} />
                ) : null}
                <span className="cert-label">{cert.issuer}</span>
                <h3>{cert.name}</h3>
                <p>{cert.date}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-block">
        <div className="footer-inner">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let’s create the next clean system together.</h2>
            <p>
              Reach out for project work, collaboration, or to discuss AI-enabled products and cloud-first engineering.
            </p>
          </div>
          <div className="footer-actions">
            <a className="button button-primary" href="mailto:dhyeydesai2103@gmail.com">
              Email me
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/dhyeydesaii/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Dhyey Desai</p>
        </div>
      </footer>
    </div>
  )
}

export default App
