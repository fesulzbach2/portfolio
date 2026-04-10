// Removed unused React import

const About = () => {
  const codeSkills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Vite', 'HTML/CSS'];
  const iosSkills = ['Swift', 'SwiftUI', 'UIKit', 'CoreData', 'Combine', 'XCTest'];

  return (
    <section id="about" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="gradient-text-alt">Me</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            My journey in software engineering crosses the boundaries of mobile and web. Whether it's crafting deeply integrated native iOS applications using Swift, or building responsive web interfaces with React, my focus is always on the end-user experience.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            I thrive in the intersection of thoughtful design and solid engineering, ensuring everything I build isn't just functional, but feels premium.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--accent-react)' }}>React & Web Technologies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {codeSkills.map((skill, index) => (
                <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--accent-swift)' }}>iOS Native Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {iosSkills.map((skill, index) => (
                <span key={index} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
