import ThreeScene from '@/components/ThreeScene';

export default function Home() {
  return (
    <main>
      <ThreeScene />
      
      {/* Hero Section */}
      <section className="section" id="home">
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="hero-title">
            Hi, I&apos;m Akash Debnath
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Software Developer with 1+ year of internship experience in React Native, React.js, Next.js, and the MERN Stack.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#experience" className="btn">Experience</a>
            <a href="#projects" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>Projects</a>
            <a href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>Contact</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>Software Developer Intern</h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Sky IT Solution Pvt Ltd (Jan 2026 - July 2026)</h4>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.6' }}>
              <li>Developed responsive mobile and web application interfaces using React Native, Next.js and NativeWind.</li>
              <li>Worked on projects including Doc-App, Biye.co, AllRounder, DailyAstro and UniqueGurukul.</li>
              <li>Participated in manual QA testing, frontend bug fixing, and Android APK build generation.</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>Associate Software Engineer</h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>PCS Global Pvt.Ltd (July 2025 - Oct 2025)</h4>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.6' }}>
              <li>Worked on MERN stack fundamentals and frontend development tasks.</li>
              <li>Assisted in building React components and basic API integration.</li>
              <li>Learned MVC architecture, Mongoose schema modeling, and backend controller structure.</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-color)' }}>SAPUI5 / Fiori Developer Intern</h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ERP League (Feb 2025 - Apr 2025)</h4>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.6' }}>
              <li>Built a Sales Dashboard App and a fully functional Employee Management App using SAPUI5.</li>
              <li>Integrated JSON and OData models for real-time data handling.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>DailyAstro</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>React Native, TypeScript, NativeWind</p>
            <p style={{ color: 'var(--text-secondary)' }}>Mobile Astrology Application with pixel-perfect responsive UI screens and reusable components.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Unique Gurukul</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>React Native, Next.js, Tailwind CSS</p>
            <p style={{ color: 'var(--text-secondary)' }}>Online Learning Platform with responsive web pages and modern UI layouts based on Figma designs.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Doctor App</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>React.js, Next.js, Tailwind CSS</p>
            <p style={{ color: 'var(--text-secondary)' }}>Online Doctor Consultation Platform focusing on frontend optimization and UI workflows.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>AllRounder</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>React Native, TypeScript</p>
            <p style={{ color: 'var(--text-secondary)' }}>Social Media mobile application with interactive UI elements and navigation workflows.</p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Biyeco</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>React Native, TypeScript</p>
            <p style={{ color: 'var(--text-secondary)' }}>Matchmaking mobile application with interactive UI elements and navigation workflows.</p>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Skills & Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--accent-color)' }}>Technical Skills</h3>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.8' }}>
              <li><strong>Frontend & Mobile Development:</strong> React Native, React.js, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>Backend & DB:</strong> Node.js, Express.js, MySQL, MongoDB, Prisma</li>
              <li><strong>Other:</strong> SAPUI5, SAP Fiori, Git, Postman, Android Studio</li>
              <li><strong>Languages:</strong> JavaScript, C, C++, Java</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--accent-color)' }}>Education</h3>
            <ul style={{ color: 'var(--text-secondary)', listStylePosition: 'inside', lineHeight: '1.8' }}>
              <li><strong>B.Tech - CSE (2024)</strong><br/>M.A.K.A.U.T, Elitte College of Engineering | CGPA: 8.27</li>
              <li><strong>Higher Secondary (2020)</strong><br/>CBSE, Sudhir Memorial Institute | 60%</li>
              <li><strong>Secondary School (2018)</strong><br/>ICSE, St. Jude&apos;s High School | 70%</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Get In Touch</h2>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p><strong>Email:</strong> debnathakash911@gmail.com</p>
            <p><strong>Phone:</strong> 7439852652</p>
            <p><strong>Location:</strong> Kolkata-700129, West Bengal, India</p>
            <p style={{ marginTop: '2rem' }}>
              <a href="https://www.linkedin.com/in/akash-debnath-a94124241" target="_blank" rel="noopener noreferrer" className="btn">
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
