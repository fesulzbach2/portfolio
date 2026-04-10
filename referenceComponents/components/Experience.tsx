// Removed unused React import

const Experience = () => {
  const experiences = [
    {
      role: 'Senior iOS Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      desc: 'Leading the development of a flagship iOS application, implementing custom rendering pipelines and reducing crash rates by 40%.',
    },
    {
      role: 'Software Engineer',
      company: 'Digital Innovators',
      period: '2020 - 2023',
      desc: 'Developed robust React web applications and Node.js microservices serving millions of active users daily.',
    },
    {
      role: 'Mobile Developer',
      company: 'Creative Agency',
      period: '2018 - 2020',
      desc: 'Built native iOS and React Native applications for high-profile clients with focus on sophisticated UI/UX.',
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Professional <span className="gradient-text-alt">Experience</span></h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <span style={{ color: 'var(--accent-swift)', fontWeight: 600 }}>{exp.period}</span>
              </div>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>{exp.company}</h4>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
