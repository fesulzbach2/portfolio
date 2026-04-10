import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass ${scrolled ? 'nav-scrolled' : ''}`} style={{ 
      position: 'fixed', top: 0, width: '100%', height: 'var(--nav-height)', 
      zIndex: 100, transition: 'all var(--transition-normal)',
      background: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
          FS<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
