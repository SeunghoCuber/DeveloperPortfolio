"use client"

import { useState, useEffect } from "react"
import styles from "./Portfolio.module.css"
import { Mail, Phone, MapPin, Linkedin, GitBranch, ExternalLink, FileText } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = ["about", "education", "experience", "projects", "skills", "activities"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-30% 0px -70% 0px" }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={styles.container}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.header}>
            <h1 className={styles.name}>Seungho Lee</h1>
            <p className={styles.title}>Computer Science Student</p>
            <p className={styles.subtitle}>
              Experienced in Agentic AI, Machine Learning, and Full Stack Engineering
            </p>
          </div>

          <nav className={styles.nav}>
            <button
              className={`${styles.navItem} ${activeSection === "projects" ? styles.active : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              PROJECTS
            </button>
            <button
              className={`${styles.navItem} ${activeSection === "about" ? styles.active : ""}`}
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </button>
            <button
              className={`${styles.navItem} ${activeSection === "experience" ? styles.active : ""}`}
              onClick={() => scrollToSection("experience")}
            >
              EXPERIENCE
            </button>
            <button
              className={`${styles.navItem} ${activeSection === "skills" ? styles.active : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              SKILLS
            </button>
            <button
              className={`${styles.navItem} ${activeSection === "activities" ? styles.active : ""}`}
              onClick={() => scrollToSection("activities")}
            >
              ACTIVITIES
            </button>
          </nav>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/SeunghoCuber"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://docs.google.com/document/d/1b6lpRLIU2BY4s5hbEBdWD0j2Sp7iEZSKDKlM_m59EIA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="CV"
            >
              <FileText size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/seungholee2024/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Projects</h2>

            <div className={styles.projectList}>
              <div className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Circuit Sensei</h3>
                  <div className={styles.projectLinks}>
                    <a href="https://github.com/SeunghoCuber/CircuitSensei" target="_blank" className={styles.projectLink} aria-label="GitHub">
                      <GitBranch size={18} />
                    </a>
                    <a href="https://circuit-sensei.vercel.app/" target="_blank" className={styles.projectLink} aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Built a full-stack agentic AI assistant that guides users through circuit assembly.
                </p>
                <div className={styles.projectPreview}>
                  <iframe
                    src="/project-htmls/circuit-sensei.html"
                    className={styles.projectIframe}
                    sandbox="allow-scripts allow-same-origin"
                    title="Circuit Sensei preview"
                    style={{ height: 380 }}
                  />
                </div>
                <div className={styles.tags}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>FastAPI</span>
                  <span className={styles.tag}>WebSocket</span>
                  <span className={styles.tag}>OpenCV</span>
                  <span className={styles.tag}>Gemma</span>
                </div>
              </div>

              <div className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Eudox.ai</h3>
                  <div className={styles.projectLinks}>
                    <a href="https://eudox.ai/" target="_blank" className={styles.projectLink} aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className={styles.projectDescription}>
                  Built a multi-agent AI financial research platform with LangChain for automated web scraping and data synthesis.
                </p>
                <div className={styles.projectPreview}>
                  <iframe
                    src="/project-htmls/eudox-ai.html"
                    className={styles.projectIframe}
                    sandbox="allow-scripts allow-same-origin"
                    title="Eudox.ai preview"
                    style={{ height: 484 }}
                  />
                </div>
                <div className={styles.tags}>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>LangChain</span>
                  <span className={styles.tag}>RAG</span>
                  <span className={styles.tag}>AWS ECS</span>
                  <span className={styles.tag}>Docker</span>
                  <span className={styles.tag}>RESTful API</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Professional Profile</h2>
            <p className={styles.description}>
              Computer Science and Business Administration student at USC with experience building AI systems, 
              ML infrastructure, and full-stack applications. I specialize in developing multi-agent LLM systems, 
              optimizing ML pipelines for performance, and deploying scalable solutions across cloud and edge environments. 
              I’m particularly interested in AI infrastructure, performance 
              engineering, and the integration of machine learning with real-world systems.
            </p>

            <div className={styles.objective}>
              <h3 className={styles.objectiveTitle}>Professional Objective</h3>
              <p className={styles.description}>
                To build high-performance AI systems and ML infrastructure that integrate scalable software with efficient hardware to enable real-world intelligent applications.
              </p>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={20} className={styles.contactIcon} />
                <span>Los Angeles, CA</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} className={styles.contactIcon} />
                <a href="mailto:seungho9422@gmail.com" className={styles.contactLink}>
                  seungho9422@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={20} className={styles.contactIcon} />
                <span>+1 650 946 8309</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Professional Experience</h2>

            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>AI Engineer Intern</h3>
                    <p className={styles.experienceCompany}>Allganize · Houston, TX</p>
                  </div>
                  <span className={styles.experienceDate}>June 2025 - August 2025</span>
                </div>
                <p className={styles.experienceDescription}>
                  Developed a multi-agent LLM system with tool-calling and parallel execution, 
                  integrating full-stack components to enable scalable AI workflows.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>AWS S3</span>
                  <span className={styles.tag}>PostgreSQL</span>
                </div>
              </div>

              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>AI Researcher</h3>
                    <p className={styles.experienceCompany}>Keck School of Medicine of USC · Los Angeles, CA</p>
                  </div>
                  <span className={styles.experienceDate}>August 2024 - February 2025</span>
                </div>
                <p className={styles.experienceDescription}>
                  Trained a Convolutional Neural Network model to convert raw nanopore electrical signals into RNA sequences, and
                  deployed an optimized Python TensorFlow Lite pipeline on a Coral Edge TPU for efficient, low-latency basecalling

                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>TensorFlow</span>
                  <span className={styles.tag}>Machine Learning</span>
                  <span className={styles.tag}>Linux</span>
                  <span className={styles.tag}>Signal Processing</span>
                  <span className={styles.tag}>Edge TPU</span>
                </div>
              </div>

              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>Software Engineer</h3>
                    <p className={styles.experienceCompany}>CityPlug · Remote</p>
                  </div>
                  <span className={styles.experienceDate}>January 2023 - May 2023</span>
                </div>
                <p className={styles.experienceDescription}>
                  Implemented ML-driven analytics and backend pipelines for EV charger placement while deploying and 
                  maintaining production web infrastructure.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>scikit-learn</span>
                  <span className={styles.tag}>NumPy</span>
                  <span className={styles.tag}>CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Academic Education</h2>

            <div className={styles.educationItem}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.educationTitle}>B.S. - Computer Science/Business Administration</h3>
                  <p className={styles.experienceCompany}>University of Southern California</p>
                </div>
                <span className={styles.experienceDate}>August 2024 - May 2028</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Skills</h2>

            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Programming Languages</h3>
                <ul className={styles.skillList}>
                  <li>C++</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Frameworks</h3>
                <ul className={styles.skillList}>
                  <li>Next.js</li>
                  <li>React</li>
                  <li>LangChain</li>
                  <li>TensorFlow</li>
                  <li>scikit-learn</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Technologies</h3>
                <ul className={styles.skillList}>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>PostgreSQL</li>
                  <li>AWS (ECS, S3, ECR, CloudWatch)</li>
                </ul>
              </div>

              <div className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Soft Skills</h3>
                <ul className={styles.skillList}>
                  <li>Technical Leadership</li>
                  <li>Project Management</li>
                  <li>Problem Solving</li>
                  <li>Business Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Activities Section */}
        <section id="activities" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Other Activities</h2>

            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>Competitive Programmer</h3>
                  </div>
                  <span className={styles.experienceDate}>8 years</span>
                </div>
                <p className={styles.experienceDescription}>
                  USACO Gold Tier; Represented USC in the International Collegiate Programming Contest 
                  in a select team of 12 students to solve complex algorithmic problems with advanced 
                  data structures and computational theories.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>C++</span>
                  <span className={styles.tag}>Problem Solving</span>
                </div>
              </div>

              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>Tutor</h3>
                  </div>
                  <span className={styles.experienceDate}>2 years</span>
                </div>
                <p className={styles.experienceDescription}>
                  Instructed 40+ students for Kodely and Applied Computing Foundation in K-12 STEM programs, 
                  including C++ programming and Arduino Circuit courses. Successfully guided Andy Zhang through 
                  EE-141 Final Exam.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Technical Leadership</span>
                  <span className={styles.tag}>Communication</span>
                </div>
              </div>

              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceTitle}>Runner</h3>
                  </div>
                  <span className={styles.experienceDate}>4 years</span>
                </div>
                <p className={styles.experienceDescription}>
                  Competitive long-distance runner with a sub-19-minute 5K, including participation on 
                  the Webb 4x4 relay team, demonstrating discipline and endurance. I also enjoy running 
                  throughout Los Angeles, using it as a way to stay consistent, clear my mind, and explore the city.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Teamwork</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Website template design by {" "}
            <a
              href="https://portifolio-gx4d.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Manuel Pires Luis
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}
