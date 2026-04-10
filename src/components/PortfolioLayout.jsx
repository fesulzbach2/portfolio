import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FluidHero } from './FluidHero';
import { projectsData as centralProjects } from '../data/projectsData';

const projectsData = [
  {
    id: 1,
    title: "ConcursAI",
    tech: "SwiftUI • AI Integration",
    description: "Aplicativo inteligente que utiliza Inteligência Artificial para gerar simulados e rotinas de estudos voltados para concursos públicos de alto desempenho.",
    year: "2024",
    icon: "/ConcursAIIcon.png"
  },
  {
    id: 2,
    title: "Overdrive",
    tech: "UIKit • CoreAnimation",
    description: "Plataforma avançada focada em gerenciamento veicular extremo e performance, trazendo um layout robusto e interfaces de alto contraste.",
    year: "2025",
    icon: "/OverdriveIconSet.png"
  },
  {
    id: 3,
    title: "Pickture!",
    tech: "SwiftUI • PhotosUI",
    description: "Utilitário divertido e social para gerenciar e interagir com fotos. Conta com animações espaciais e processamento assíncrono avançado para fluxos multimídia.",
    year: "2024",
    icon: "/Pickture!Icon.png"
  },
  {
    id: 4,
    title: "Rise of the Lich King",
    tech: "SpriteKit • GameplayKit",
    description: "Um jogo imersivo com física customizada, estados controlados por Inteligência Artificial e arte detalhada rodando nativamente via SpriteKit e Metal.",
    year: "2023",
    icon: "/RiseOfTheLichKingIcon.png"
  },
  {
    id: 5,
    title: "Aether Wallet",
    tech: "Combine • Web3.swift",
    description: "Carteira multichain fluida focada na abstração de infraestrutura Web3. Proporciona visualização de portfólio de altíssima resposta nativa.",
    year: "2025"
  },
  {
    id: 6,
    title: "HealthConnect",
    tech: "SwiftUI • HealthKit",
    description: "Sistema integrador de saúde nativo para watchOS/iOS. Utiliza Swift Charts para visualização gráfica elegante de estatísticas processadas em background.",
    year: "2024"
  },
  {
    id: 7,
    title: "AR Architect",
    tech: "ARKit • Metal",
    description: "Poderosa ferramenta de medição espacial com RA. Processa varreduras LiDAR instantâneas para exportação arquitetônica sub-milimétrica em escala.",
    year: "2023"
  },
  {
    id: 8,
    title: "Vanguard Pay",
    tech: "UIKit • PassKit",
    description: "Aplicativo corporativo de fintech multinacional. Estrutura protocolos complexos em uma jornada hiper-simplificada com integração na Apple Wallet.",
    year: "2025"
  }
];

const timelineData = [
  {
    id: 1,
    type: "work",
    period: "2023 - Presente",
    role: "Senior iOS Engineer",
    company: "Tech Vanguard",
    description: "Liderando o desenvolvimento de aplicativos corporativos em Swift. Arquitetura de micro-componentes em SwiftUI e integração avançada com APIs nativas da Apple."
  },
  {
    id: 2,
    type: "education",
    period: "2020 - 2024",
    role: "Engenharia de Software",
    company: "Universidade Federal",
    description: "Bacharelado. Foco em arquitetura de sistemas, algoritmos de alto desempenho e computação gráfica."
  },
  {
    id: 3,
    type: "work",
    period: "2021 - 2023",
    role: "iOS Developer",
    company: "Creative Studio",
    description: "Desenvolvimento de interfaces iterativas e ricas em animações usando UIKit e CoreAnimation. Publicação de diversos apps premiados na App Store."
  },
  {
    id: 4,
    type: "education",
    period: "2019",
    role: "Apple Developer Academy",
    company: "Apple",
    description: "Formação intensiva em ecossistema Apple, Design Thinking e desenvolvimento nativo, resultando em 3 aplicativos completos lançados."
  }
];

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .magnetic-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 flex items-center justify-center border border-red-500/60 rounded-full pointer-events-none z-50"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.15)' : 'rgba(0,0,0,0)',
      }}
      transition={{ type: 'spring', ...springConfig }}
    >
      {isHovering && <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />}
    </motion.div>
  );
};

export default function PortfolioLayout() {
  const containerRef = useRef(null);
  const journeyRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lang, setLang] = useState('pt');
  const { scrollYProgress } = useScroll({ target: containerRef });
  const isDark = useInView(journeyRef, { margin: "-40% 0px" });

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    if (scrollWidth <= clientWidth) return;
    
    const percentage = scrollLeft / (scrollWidth - clientWidth);
    const newSlide = Math.min(
       Math.max(Math.round(percentage * (projectsData.length - 1)) + 1, 1),
       projectsData.length
    );
    if (newSlide !== currentSlide) setCurrentSlide(newSlide);
  };

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.children[0]?.offsetWidth || 300;
    const gap = 48; // md:gap-x-12
    carouselRef.current.scrollBy({ left: direction * (itemWidth + gap), behavior: 'smooth' });
  };

  // Mouse Parallax for Home
  const mouseX = useSpring(0, { damping: 50, stiffness: 400 });
  const mouseY = useSpring(0, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleParallax = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(nx);
      mouseY.set(ny);
    };
    window.addEventListener('mousemove', handleParallax);
    return () => window.removeEventListener('mousemove', handleParallax);
  }, [mouseX, mouseY]);

  const nameX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const nameY = useTransform(mouseY, [-1, 1], [-10, 10]);
  const avatarX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const avatarY = useTransform(mouseY, [-1, 1], [-10, 10]);
  const subX = useTransform(mouseX, [-1, 1], [-10, 10]);
  const subY = useTransform(mouseY, [-1, 1], [-10, 10]);

  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const contentY1 = useTransform(scrollYProgress, [0, 1], ['-2%', '-10%']);

  return (
    <div ref={containerRef} className="relative w-full bg-transparent selection:bg-white/30 font-sans">
      <MagneticCursor />

      {/* Full-Width Frosted Glass Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 grid grid-cols-3 items-center">
          {/* Left spacer */}
          <div></div>

          {/* Nav Links - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold text-white/70">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="magnetic-target hover:text-white transition-colors">Home</button>
            <button onClick={() => { const el = document.getElementById('about'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: 'smooth' }); }}} className="magnetic-target hover:text-white transition-colors">About</button>
            <button onClick={() => { const el = document.getElementById('projects'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: 'smooth' }); }}} className="magnetic-target hover:text-white transition-colors">Work</button>
            <button onClick={() => { const el = document.getElementById('experience'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: y, behavior: 'smooth' }); }}} className="magnetic-target hover:text-white transition-colors">Experience</button>
          </nav>

          {/* Right Side: Socials + Language */}
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="magnetic-target text-white/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="magnetic-target text-white/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.3 5.3 0 0 0 19 5.5a5.3 5.3 0 0 0-.1-3.5s-1.4-.4-4.5 1.5a14.4 14.4 0 0 0-8 0c-3.1-1.9-4.5-1.5-4.5-1.5a5.3 5.3 0 0 0-.1 3.5 5.3 5.3 0 0 0-1.5 2.3c0 5.77 3.35 6.79 6.5 7.17A4.8 4.8 0 0 0 5 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <span className="hidden md:block w-px h-5 bg-white/10"></span>
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-0 bg-white/5 rounded-full border border-white/10 p-0.5 relative">
              <button onClick={() => setLang('pt')} className={`relative z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 ${lang === 'pt' ? 'text-white' : 'text-white/50 hover:text-white'}`}>
                {lang === 'pt' && <motion.div layoutId="langIndicator" className="absolute inset-0 bg-[#ff6a1a] rounded-full" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
                <span className="relative z-10">PT</span>
              </button>
              <button onClick={() => setLang('en')} className={`relative z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-200 ${lang === 'en' ? 'text-white' : 'text-white/50 hover:text-white'}`}>
                {lang === 'en' && <motion.div layoutId="langIndicator" className="absolute inset-0 bg-[#ff6a1a] rounded-full" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
                <span className="relative z-10">EN</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Fluid Background - Global Fixed */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <FluidHero isDark={isDark} />
      </div>

      {/* TOP WORLD (Light Version) */}
      <div className="relative w-full z-10 flex flex-col text-black">
        {/* HERO SECTION */}
        <motion.section
          className="h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="pointer-events-none"
              style={{ x: nameX, y: nameY }}
            >
              <div className="text-left mb-0 -translate-x-[4vw] md:-translate-x-[5vw] relative z-10">
                 <span className="text-xs md:text-xl font-bold tracking-[0.2em] uppercase text-black">Hello, I'm</span>
              </div>
              <h1 
                className="text-black text-center font-black tracking-tight leading-[0.85]"
                style={{ fontSize: "clamp(3.5rem, 13vw, 15rem)" }}
              >
                <span className="inline-block -translate-x-[4vw] md:-translate-x-[5vw]">Fernando</span><br />
                <span className="inline-block translate-x-[4vw] md:translate-x-[5vw]">Sulzbach.</span>
              </h1>
            </motion.div>

            {/* Avatar image positioned dynamically at top-right */}
            <motion.img
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 12 }}
              src="/avatar.png"
              alt="Avatar do Fernando"
              className="absolute -top-[25%] -right-[15%] md:-top-[35%] md:-right-[18%] w-32 md:w-48 lg:w-72 z-10 drop-shadow-2xl pointer-events-none"
              style={{ x: avatarX, y: avatarY }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-black/80 font-semibold tracking-[0.2em] uppercase text-xs md:text-base text-center"
            style={{ x: subX, y: subY }}
          >
            iOS Developer <span className="mx-2 md:mx-4 opacity-40">|</span> Software Engineer
          </motion.p>
        </motion.section>

        {/* PROJECTS SECTION - BENTO GRID */}
        <motion.section
          id="projects"
          className="w-full relative z-20 py-24 px-6 md:px-20 flex items-center justify-center"
          style={{ y: contentY1 }}
        >
          {/* Incline only applied to the absolute background, isolating content */}
          <div className="absolute inset-x-0 inset-y-10 md:-inset-y-10 w-full h-full bg-black/60 backdrop-blur-2xl border-y border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] -skew-y-2 pointer-events-none" />

          <div className="relative w-full max-w-6xl z-10 flex flex-col gap-12">
            
            {/* ABOUT ME SECTION from Reference */}
            <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 mt-8 px-6 md:px-0">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a1a] to-[#c73c00]">Me</span></h2>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  My journey in software engineering crosses the boundaries of mobile and web. Whether it's crafting deeply integrated native iOS applications using Swift, or building responsive web interfaces with React, my focus is always on the end-user experience.
                </p>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  I thrive in the intersection of thoughtful design and solid engineering, ensuring everything I build isn't just functional, but feels premium.
                </p>
                <div className="flex items-center gap-5 mt-6 bg-black/20 border border-white/10 rounded-2xl px-6 py-5 backdrop-blur-md shadow-xl border-l-4 border-l-[#ff6a1a]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6a1a] to-[#c73c00] flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg">🎓</div>
                  <div>
                    <p className="text-white font-bold text-base">Universidade Federal do Rio Grande do Sul</p>
                    <p className="text-white/50 text-sm font-semibold">Ciência da Computação · UFRGS · <span className="text-[#ff6a1a]">Em andamento</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 px-6 md:px-0">
                <div className="bg-black/20 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl text-white">
                  <h3 className="mb-6 text-xl font-bold" style={{ color: '#0070f3' }}>React & Web Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Vite', 'HTML/CSS'].map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl text-white">
                  <h3 className="mb-6 text-xl font-bold" style={{ color: '#ff6a1a' }}>iOS Native Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Swift', 'SwiftUI', 'UIKit', 'CoreData', 'Combine', 'XCTest'].map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS SECTION from Reference */}
            <div>
              <h2 className="text-4xl font-bold mb-12 tracking-tight text-center text-white">Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a1a] to-[#c73c00]">Work</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
                {centralProjects.map((project, index) => (
                  <Link to={`/project/${project.slug}`} key={index} className="magnetic-target group flex flex-col bg-black/20 border border-white/10 rounded-[16px] overflow-hidden backdrop-blur-md hover:-translate-y-2 hover:bg-black/40 hover:shadow-2xl transition-all relative no-underline">
                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-[16px] pointer-events-none"></div>
                    {/* Image Area */}
                    <div className="w-full h-36 bg-white/5 flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Image</span>
                      )}
                    </div>
                    <div className="flex flex-col flex-grow p-6 relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[0.8rem] font-medium px-3 py-1 rounded bg-[#0070f3]/10 text-[#0070f3]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* PROFESSIONAL EXPERIENCE from Reference */}
            <div id="experience" className="mt-16 mb-16 w-full max-w-4xl mx-auto px-6 md:px-0">
              <h2 className="text-4xl font-bold mb-12 tracking-tight text-center text-white">Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a1a] to-[#c73c00]">Experience</span></h2>
              
              <div className="flex flex-col gap-8">
                {[
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
                ].map((exp, index) => (
                  <div key={index} className="bg-black/20 border border-white/10 p-8 rounded-[16px] flex flex-col gap-3 backdrop-blur-md shadow-xl border-l-4 border-l-[#ff6a1a]">
                    <div className="flex justify-between flex-wrap items-baseline gap-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <span className="text-[#ff6a1a] font-bold tracking-widest text-sm uppercase">{exp.period}</span>
                    </div>
                    <h4 className="text-white/70 text-lg font-semibold">{exp.company}</h4>
                    <p className="text-white/60 mt-2 leading-relaxed text-base">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER & CONTACT SECTION */}
        <footer className="w-full relative z-20 -mt-4 pb-16 bg-transparent">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-black">Ready to build something amazing?</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="mailto:contact@fernandosulzbach.com" className="px-8 py-3 bg-[#ff6a1a] text-black font-bold rounded-full hover:bg-[#c73c00] transition-colors shadow-lg">Email Me</a>
              <a href="#" className="px-8 py-3 bg-black/5 text-black font-bold rounded-full hover:bg-black/10 transition-colors border border-black/10">LinkedIn</a>
              <a href="#" className="px-8 py-3 bg-black/5 text-black font-bold rounded-full hover:bg-black/10 transition-colors border border-black/10">GitHub</a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a href="/curriculo_pt.pdf" download className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Currículo (PT)
              </a>
              <a href="/resume_en.pdf" download className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Resume (EN)
              </a>
            </div>
            
            <p className="text-black/40 mt-20 text-sm font-semibold tracking-wider uppercase">
              © {new Date().getFullYear()} Fernando Sulzbach. All rights reserved.
            </p>
          </div>
        </footer>
      </div> {/* End Top World wrap */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-md"
          >
            <motion.div
              layoutId={`project-${selectedProject.id}-${selectedProject.cloneIndex}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors z-20 text-black font-bold text-lg"
              >
                ✕
              </button>
              
              <div className="w-full h-48 md:h-80 relative bg-gray-100 flex items-center justify-center overflow-hidden">
                 <motion.div layoutId={`project-bg-${selectedProject.id}-${selectedProject.cloneIndex}`} className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-50 opacity-100" />
                 {selectedProject.icon ? (
                    <motion.img 
                      layoutId={`project-image-${selectedProject.id}-${selectedProject.cloneIndex}`} 
                      src={selectedProject.icon} 
                      alt={selectedProject.title} 
                      className="w-32 h-32 md:w-56 md:h-56 object-contain drop-shadow-2xl relative z-10" 
                    />
                 ) : (
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-black/5 rounded-2xl md:rounded-3xl rotate-12 relative z-10 backdrop-blur-md border border-white" />
                 )}
              </div>
              
              <div className="p-8 md:p-12 bg-white relative z-10 flex flex-col">
                <motion.h3 layoutId={`project-title-${selectedProject.id}-${selectedProject.cloneIndex}`} className="text-3xl md:text-5xl font-black mb-4 text-black tracking-tight">{selectedProject.title}</motion.h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6">
                  <motion.p layoutId={`project-tech-${selectedProject.id}-${selectedProject.cloneIndex}`} className="text-black/60 font-semibold text-xs md:text-sm uppercase tracking-wider">{selectedProject.tech}</motion.p>
                  <span className="text-black/30 hidden md:inline">•</span>
                  <span className="text-black/60 font-semibold text-sm hidden md:inline">{selectedProject.year}</span>
                </div>
                
                <p className="text-black/80 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                  {selectedProject.description}
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-black text-white rounded-full font-bold text-xs tracking-wide uppercase hover:bg-black/80 transition-colors">
                    Acessar Estudo de Caso
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-black rounded-full font-bold text-xs tracking-wide uppercase hover:bg-gray-200 transition-colors">
                    Ver no GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
