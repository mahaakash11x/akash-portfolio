import ThreeScene from '@/components/ThreeScene';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <ThreeScene />
      
      {/* Hero Section */}
      <section className="section" id="home">
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Profile Picture */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent-color)', boxShadow: '0 0 20px var(--accent-glow)' }}>
              <Image 
                src="/profile.jpg" 
                alt="Akash Debnath" 
                width={160} 
                height={160} 
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
          </div>

          <h2 className="hero-title">
            Hi, I&apos;m Akash Debnath
          </h2>
          <p className="hero-description">
            Software Developer with 1+ year of internship experience in React Native, React.js, Next.js, TypeScript, MERN Stack, and SAPUI5. 
            Experienced in developing mobile and web applications, integrating APIs, and building responsive user interfaces.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn">Experience</a>
            <a href="#projects" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>Projects</a>
            <a href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>Contact</a>
          </div>

          {/* Download CV Button */}
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <a href="/Akash_Debnath_CV.pdf" download="Akash_Debnath_CV.pdf" className="btn btn-cv">
              Download My CV
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="exp-title">Software Developer Intern</h3>
            <h4 className="exp-subtitle">Sky IT Solution Pvt Ltd | Jan 2026 - July 2026</h4>
            <ul className="exp-list">
              <li>Developed responsive mobile and web application interfaces using React Native, Next.js and NativeWind.</li>
              <li>Implemented pixel-perfect UI from Figma designs for multiple real-world client projects.</li>
              <li>Built reusable components, handled navigation flow, and integrated basic APIs.</li>
              <li>Worked on projects including Doc-App, Biye.co, AllRounder, DailyAstro and UniqueGurukul.</li>
              <li>Improved frontend responsiveness and user experience across Android and web platforms.</li>
              <li>Collaborated with team members using Git/GitHub and project workflow management.</li>
              <li>Participated in manual QA testing, frontend bug fixing, Android APK build generation, and UI optimization.</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="exp-title">Associate Software Engineer</h3>
            <h4 className="exp-subtitle">PCS Global Pvt.Ltd | July 2025 - Oct 2025</h4>
            <ul className="exp-list">
              <li>Worked on MERN stack fundamentals and frontend development tasks.</li>
              <li>Assisted in building React components and basic API integration.</li>
              <li>Gained exposure to MongoDB, Express.js, and team-based development workflow.</li>
              <li>Learned MVC architecture, Mongoose schema modeling, and backend controller structure.</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="exp-title">SAPUI5 / Fiori Developer Intern</h3>
            <h4 className="exp-subtitle">ERP League | Feb 2025 - Apr 2025</h4>
            <ul className="exp-list">
              <li>Built a Sales Dashboard App with navigation between customer, product, and regional sales views.</li>
              <li>Created a fully functional Employee Management App using the sap.m.Table control and bound to JSON data.</li>
              <li>Integrated JSON and OData models (e.g., Northwind service) for real-time data handling.</li>
              <li>Collaborated with senior consultants to debug issues using Chrome DevTools and SAP debugging tools.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects" style={{ justifyContent: 'flex-start', paddingTop: '50px' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>DailyAstro</h3>
            <p style={{ fontSize: '0.85rem' }}><strong style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>Mobile Astrology Application</strong> <span style={{ color: 'var(--text-secondary)' }}>|</span> <span style={{ color: 'var(--accent-color)' }}>React Native, TypeScript, NativeWind</span></p>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'outside', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Developed 20+ responsive mobile screens from Figma using React Native and NativeWind.</li>
              <li>Implemented keyboard handling, and frontend UI optimization for improved user experience.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href="https://play.google.com/store/apps/details?id=com.nativewindapp" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s ease' }}>
                View on Play Store <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Unique Gurukul</h3>
            <p style={{ fontSize: '0.85rem' }}><strong style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>Online Learning Platform</strong> <span style={{ color: 'var(--text-secondary)' }}>|</span> <span style={{ color: 'var(--accent-color)' }}>React Native, Next.js, Tailwind CSS, TypeScript</span></p>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'outside', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Converted Figma designs into responsive web pages using Next.js and Tailwind CSS.</li>
              <li>Performed API integration using MockAPI and improved UI consistency, and overall user experience.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href="https://uniquegurukul.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s ease' }}>
                Visit Website <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>DollarCare</h3>
            <p style={{ fontSize: '0.85rem' }}><strong style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>Online Doctor Consultation Platform</strong> <span style={{ color: 'var(--text-secondary)' }}>|</span> <span style={{ color: 'var(--accent-color)' }}>React.js, Next.js, Tailwind CSS</span></p>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'outside', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Developed appointment and authentication screens with pixel-perfect UI implementation.</li>
              <li>Resolved frontend bugs and optimized reusable components for better performance.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href="https://dollarcare.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s ease' }}>
                Visit Website <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>AllRounder</h3>
            <p style={{ fontSize: '0.85rem' }}><strong style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>Social Media Mobile Application</strong> <span style={{ color: 'var(--text-secondary)' }}>|</span> <span style={{ color: 'var(--accent-color)' }}>React Native, TypeScript</span></p>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'outside', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Developed responsive social media mobile screens for photo and video sharing features.</li>
              <li> Implemented reusable UI components, navigation workflows, and interactive user interactions.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href="https://play.google.com/store/apps/details?id=com.Allrounder.App" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s ease' }}>
                View on Play Store <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Biyeco</h3>
            <p style={{ fontSize: '0.85rem' }}><strong style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>Matchmaking Mobile Application</strong> <span style={{ color: 'var(--text-secondary)' }}>|</span> <span style={{ color: 'var(--accent-color)' }}>React Native, TypeScript</span></p>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'outside', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>Designed profile and matchmaking interfaces with responsive mobile layouts.</li>
              <li>Enhanced frontend usability through intuitive navigation and reusable components.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <a href="https://www.biyeco.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s ease' }}>
                View on Play Store <span style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="section" id="skills">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Skills & Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="skills-title">Technical Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div className="skill-category">
                <strong>Mobile & Frontend</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">React Native</span><span className="skill-badge">React.js</span><span className="skill-badge">Next.js</span><span className="skill-badge">TypeScript</span><span className="skill-badge">JavaScript</span><span className="skill-badge">HTML5</span><span className="skill-badge">CSS3</span><span className="skill-badge">Tailwind CSS</span><span className="skill-badge">NativeWind</span>
                </div>
              </div>
              <div className="skill-category">
                <strong>SAP UI/UX</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">SAPUI5</span><span className="skill-badge">SAP Fiori</span><span className="skill-badge">JSON</span><span className="skill-badge">MVC architecture</span><span className="skill-badge">Routing</span><span className="skill-badge">OData</span><span className="skill-badge">Debugging</span>
                </div>
              </div>
              <div className="skill-category">
                <strong>Backend</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">Node.js</span><span className="skill-badge">Express.js</span><span className="skill-badge">REST API</span>
                </div>
              </div>
              <div className="skill-category">
                <strong>Database</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">MYSQL</span><span className="skill-badge">MongoDB</span><span className="skill-badge">Prisma</span>
                </div>
              </div>
              <div className="skill-category">
                <strong>Programming</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">C / C++</span><span className="skill-badge">Java</span>
                </div>
              </div>
              <div className="skill-category">
                <strong>Tools & Platforms</strong>
                <div className="skill-badge-container">
                  <span className="skill-badge">Git</span><span className="skill-badge">XAMPP</span><span className="skill-badge">Postman</span><span className="skill-badge">Android Studio</span><span className="skill-badge">Android SDK</span><span className="skill-badge mobile-only-badge">APK/AAB Build Generation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel education-panel" style={{ padding: '1.5rem' }}>
            <h3 className="education-title">Educational Qualification</h3>
            <ul className="education-list">
              <li><strong className="education-degree">Bachelor of Technology (B.Tech - CSE)</strong><br/>M.A.K.A.U.T, Elitte College of Engineering<br/>2024 | DGPA: 8.27 | Percentage: 78.50%</li>
              <li><strong className="education-degree">Higher Secondary (HSC)</strong><br/>CBSE, Sudhir Memorial Institute<br/>2020 | Percentage: 60%</li>
              <li><strong className="education-degree">Secondary School (SSC)</strong><br/>ICSE, St. Jude&apos;s High School<br/>2018 | Percentage: 70%</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Get In Touch</h2>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p><strong>Email:</strong> <a href="mailto:debnathakash911@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>debnathakash911@gmail.com</a></p>
            <p><strong>Phone:</strong> 7439852652</p>
            <p><strong>Location:</strong> Kolkata-700129, West Bengal, India</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/akash-debnath-a94124241" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin" style={{ gap: '0.75rem', paddingLeft: '1.25rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
                Connect on LinkedIn
              </a>
              <a href="https://github.com/mahaakash11x" target="_blank" rel="noopener noreferrer" className="btn btn-github" style={{ gap: '0.75rem', paddingLeft: '1.25rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '50%', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </span>
                Connect on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
