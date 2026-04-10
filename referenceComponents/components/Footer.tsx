// Removed unused React import

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Ready to build something <span className="gradient-text">amazing?</span></h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:contact@fernandosulzbach.com" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Email Me</a>
          <a href="#" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>LinkedIn</a>
          <a href="#" className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>GitHub</a>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Fernando Sulzbach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
