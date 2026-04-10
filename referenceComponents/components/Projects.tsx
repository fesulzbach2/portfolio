// Removed unused React import
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'UrbanEye API & App',
      description: 'A responsive iOS incident reporting app and Node backend. Features real-time maps and secure reporting layers.',
      tags: ['SwiftUI', 'Node.js', 'Docker', 'MapKit'],
      link: '#'
    },
    {
      title: 'Chromatic Flow Portfolio',
      description: 'A dynamic portfolio design system featuring complex gradients, fluid background shaders, and premium glassmorphism.',
      tags: ['React', 'TypeScript', 'Vanilla CSS', 'WebGL'],
      link: '#'
    },
    {
      title: 'Game Engine Refining',
      description: 'Enhanced game mechanics and boss systems with procedural spawning elements inside a custom iOS game engine.',
      tags: ['Swift', 'SpriteKit', 'GameDev'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Selected <span className="gradient-text">Work</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a href={project.link} key={index} className="project-card glass">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
