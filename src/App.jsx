import FlameCursor from './components/FlameCursor'
import './App.css'

const portfolioProjects = [
  {
    title: 'The Huron',
    url: 'https://thehuron.com/',
    description: 'Luxury condominium website for Brooklyn\'s iconic waterfront development. Features elegant animations, immersive scrolling experience, and sophisticated design reflecting the premium real estate brand. Built with modern web technologies for optimal performance.',
    tags: ['Real Estate', 'Luxury Brand', 'Animation']
  },
  {
    title: 'Honu Bay',
    url: 'https://shophonu.com/',
    description: 'E-commerce platform for elegant resort wear and beachwear. Clean, modern storefront with seamless shopping experience, product catalog management, and integrated payment systems. Designed for comfort-focused fashion brand.',
    tags: ['E-Commerce', 'Fashion', 'Shopify']
  },
  {
    title: 'Barbie Li Team',
    url: 'https://www.barbieliteam.com/',
    description: 'Top-performing real estate team website featuring property listings, home valuations, and lead generation systems. Includes interactive search, testimonials, and CRM integration for New York\'s top 1% real estate professionals.',
    tags: ['Real Estate', 'Lead Generation', 'CRM']
  },
  {
    title: 'Melissa Wood Health',
    url: 'https://store.melissawoodhealth.com',
    description: 'Health and wellness e-commerce store with subscription management, product catalog, and seamless checkout experience. Built for scalability with focus on user engagement and conversion optimization.',
    tags: ['E-Commerce', 'Health', 'Subscription']
  }
]

const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vue.js', 'jQuery', 'Responsive Design'],
  backend: ['Node.js', 'PHP (OOP)', 'Python', 'Go', 'Laravel', 'Django', 'FastAPI', 'MySQL'],
  apis: ['REST API', 'Stripe', 'ServiceM8', 'HubSpot', 'GoHighLevel', 'Telegram', 'Discord'],
  cms: ['WordPress', 'Shopify', 'Custom Themes', 'Payment APIs', 'Shipping APIs'],
  ai: ['AI Chatbots', 'CRM Sync', 'Lead Automation', 'Workflow Automation']
}

const experience = [
  {
    role: 'Lead Web Developer',
    company: 'ROBAT TV',
    period: 'Nov 2023 - Apr 2025',
    description: 'Led end-to-end development of streaming platform with live broadcasts, VOD libraries, and creator monetization systems.',
    highlights: [
      'Built subscription management system',
      'Developed creator monetization engine',
      'Implemented real-time audience engagement tools',
      'Integrated CDN for low-latency delivery'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'A1 Pro Quality Services LLC',
    period: 'Jan 2017 - 2023',
    description: 'Primary developer responsible for building and maintaining all digital systems including CRM, websites, and automation tools.',
    highlights: [
      'Architected custom internal CRM system',
      'Built multiple high-performance websites',
      'Developed automation tools suite',
      'Executed comprehensive SEO strategies'
    ]
  }
]

function App() {
  return (
    <>
      <FlameCursor />
      
      <nav className="navbar">
        <div className="nav-content">
          <a href="#hero" className="nav-logo">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#ff9f1c" />
                </linearGradient>
              </defs>
              <text x="8" y="30" fontFamily="Georgia, serif" fontSize="28" fontWeight="bold" fill="url(#logoGrad)">M</text>
            </svg>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span>8+ Years Experience</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-name">Mohammad Ahmad</span>
            <span className="hero-role">Senior Full Stack Software Engineer</span>
          </h1>
          <p className="hero-description">
            Building scalable, high-performance web applications, CRM systems, AI chatbots, 
            and custom automation tools that drive business growth.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </a>
          </div>
          <div className="hero-location">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Elburn, IL, USA</span>
          </div>
        </div>
        <div className="hero-visual">
          <svg viewBox="0 0 400 400" className="hero-svg">
            <defs>
              <linearGradient id="flameGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ff6b35"/>
                <stop offset="50%" stopColor="#ff9f1c"/>
                <stop offset="100%" stopColor="#ffcd3c"/>
              </linearGradient>
              <linearGradient id="flameGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ff4500"/>
                <stop offset="100%" stopColor="#ff6b35"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <circle cx="200" cy="200" r="150" fill="none" stroke="url(#flameGrad1)" strokeWidth="2" opacity="0.3" className="pulse-ring"/>
            <circle cx="200" cy="200" r="120" fill="none" stroke="url(#flameGrad2)" strokeWidth="1.5" opacity="0.5" className="pulse-ring-delayed"/>
            <g filter="url(#glow)" className="code-icon">
              <path d="M160 170 L130 200 L160 230" fill="none" stroke="url(#flameGrad1)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M240 170 L270 200 L240 230" fill="none" stroke="url(#flameGrad1)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="220" y1="150" x2="180" y2="250" stroke="url(#flameGrad2)" strokeWidth="6" strokeLinecap="round"/>
            </g>
          </svg>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
            <defs>
              <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35"/>
                <stop offset="100%" stopColor="#ff9f1c"/>
              </linearGradient>
            </defs>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <circle cx="12" cy="7" r="4" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
          </svg>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <p>
            Results-driven Senior Full Stack Software Engineer specializing in building scalable, 
            optimized, and maintainable digital products that streamline business operations, 
            improve customer engagement, and drive measurable growth.
          </p>
          <p>
            Extensive experience in enterprise environments across fintech, iGaming, healthcare, 
            and other sectors, delivering complex solutions with high reliability and security standards.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <path d="M2 17l10 5 10-5" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
                <path d="M2 12l10 5 10-5" fill="none" stroke="#ffcd3c" strokeWidth="2"/>
              </svg>
              <h3>Full Stack</h3>
              <p>End-to-end development from frontend to backend</p>
            </div>
            <div className="highlight-card">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <circle cx="12" cy="12" r="3" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ff9f1c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>Automation</h3>
              <p>AI chatbots and workflow automation</p>
            </div>
            <div className="highlight-card">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <h3>Performance</h3>
              <p>Optimized for speed and scalability</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-dark">
        <div className="section-header">
          <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
          </svg>
          <h2>Experience</h2>
        </div>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-header">
                <div className="exp-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                    <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="exp-title">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
              <ul className="exp-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M9 12l2 2 4-4" fill="none" stroke="#ff9f1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" fill="none" stroke="#ff6b35" strokeWidth="1.5"/>
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
          </svg>
          <h2>Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-header">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <line x1="3" y1="9" x2="21" y2="9" stroke="#ff9f1c" strokeWidth="2"/>
                <line x1="9" y1="21" x2="9" y2="9" stroke="#ff9f1c" strokeWidth="2"/>
              </svg>
              <h3>Frontend</h3>
            </div>
            <div className="skill-tags">
              {skills.frontend.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <rect x="9" y="9" width="6" height="6" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
                <line x1="9" y1="1" x2="9" y2="4" stroke="#ffcd3c" strokeWidth="2"/>
                <line x1="15" y1="1" x2="15" y2="4" stroke="#ffcd3c" strokeWidth="2"/>
                <line x1="9" y1="20" x2="9" y2="23" stroke="#ffcd3c" strokeWidth="2"/>
                <line x1="15" y1="20" x2="15" y2="23" stroke="#ffcd3c" strokeWidth="2"/>
              </svg>
              <h3>Backend</h3>
            </div>
            <div className="skill-tags">
              {skills.backend.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
              </svg>
              <h3>APIs & Integrations</h3>
            </div>
            <div className="skill-tags">
              {skills.apis.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <path d="M2 12h20" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
              </svg>
              <h3>CMS & E-Commerce</h3>
            </div>
            <div className="skill-tags">
              {skills.cms.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-header">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h4a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-4v1.5c1.2.7 2 2 2 3.5a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.5V16.5H6a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h4V9.5c-1.2-.7-2-2-2-3.5a4 4 0 0 1 4-4z" fill="none" stroke="#ff6b35" strokeWidth="2"/>
              </svg>
              <h3>AI & Automation</h3>
            </div>
            <div className="skill-tags">
              {skills.ai.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section section-dark">
        <div className="section-header">
          <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
            <rect x="3" y="3" width="7" height="7" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
          </svg>
          <h2>Featured Portfolio</h2>
        </div>
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="portfolio-card"
            >
              <div className="portfolio-preview">
                <div className="portfolio-placeholder">
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="#ff6b35" strokeWidth="1.5"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="#ff9f1c" strokeWidth="1.5"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="#ff9f1c" strokeWidth="1.5"/>
                  </svg>
                  <span>{new URL(project.url).hostname}</span>
                </div>
                <div className="portfolio-overlay">
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke="#fff" strokeWidth="2"/>
                    <polyline points="15 3 21 3 21 9" fill="none" stroke="#fff" strokeWidth="2"/>
                    <line x1="10" y1="14" x2="21" y2="3" stroke="#fff" strokeWidth="2"/>
                  </svg>
                  <span>Visit Site</span>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-header">
          <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
            <polyline points="22,6 12,13 2,6" fill="none" stroke="url(#aboutGrad)" strokeWidth="2"/>
          </svg>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <p>Interested in working together? Let's connect and discuss how I can help bring your project to life.</p>
          <div className="contact-cards">
            <a href="mailto:contact@mohammadahmad.dev" className="contact-card">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <polyline points="22,6 12,13 2,6" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
              </svg>
              <span>Email Me</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" fill="none" stroke="#ff6b35" strokeWidth="2"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="#ff6b35" strokeWidth="2"/>
                <rect x="2" y="9" width="4" height="12" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
                <circle cx="4" cy="4" r="2" fill="none" stroke="#ff9f1c" strokeWidth="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <svg viewBox="0 0 40 40" width="32" height="32">
            <text x="8" y="30" fontFamily="Georgia, serif" fontSize="28" fontWeight="bold" fill="url(#logoGrad)">M</text>
          </svg>
          <p>© 2026 Mohammad Ahmad. Built with React & Three.js</p>
        </div>
      </footer>
    </>
  )
}

export default App
