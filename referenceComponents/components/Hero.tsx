// Removed unused React import
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="hero-bg-glow"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Hello, I'm</h2>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Fernando Sulzbach
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            I am a <span className="gradient-text" style={{fontWeight: 600, fontSize: '1.3rem'}}>Software Engineer</span> and <span className="gradient-text-alt" style={{fontWeight: 600, fontSize: '1.3rem'}}>iOS Developer</span> dedicated to building performant, responsive, and beautiful digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">Explore My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
