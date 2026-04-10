import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { FluidHero } from './FluidHero';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#ff6a1a] font-semibold hover:underline">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative min-h-screen bg-black text-white font-sans selection:bg-white/30 overflow-x-hidden"
    >
      {/* Fixed Shader Background — Orange */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-50">
        <FluidHero isDark={false} />
      </div>

      {/* Sticky Back Nav */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-semibold text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Portfolio
          </Link>
          <span className="text-white/30 text-xs font-bold uppercase tracking-widest hidden md:block">{project.category}</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-28 pb-2 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          {/* App Header — Icon + Title + Actions */}
          <div className="flex items-center gap-6 md:gap-8 mb-8">
            {/* App Icon */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[22px] md:rounded-[28px] overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center shadow-2xl flex-shrink-0">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white/20 text-2xl font-black">{project.title.charAt(0)}</span>
              )}
            </div>

            {/* Title + Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">{project.title}</h1>
              <p className="text-lg md:text-xl text-white/60 font-medium mb-4">{project.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0070f3]/10 text-[#0070f3]">{tag}</span>
                ))}
                <span className="text-white/20 mx-1">•</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{project.year}</span>
                <span className="text-white/20 mx-1">•</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{project.category}</span>
              </div>
            </div>

            {/* Action Button — Right */}
            <div className="flex-shrink-0 hidden md:block">
              <a href={project.links.github || '#'} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-white/80 transition-colors shadow-lg">
                View on App Store
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SCREENSHOT GALLERY */}
      {project.screenshots.length > 0 && (
        <section className="relative z-10 py-6 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Preview</h2>
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-48 md:w-64 snap-center">
                    <img src={src} alt={`Screenshot ${i + 1}`} className="w-full rounded-xl border border-white/10 shadow-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty Screenshot Placeholder */}
      {project.screenshots.length === 0 && (
        <section className="relative z-10 py-6 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Preview</h2>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-80 h-48 md:h-56 snap-center rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/15 text-xs font-bold uppercase tracking-widest">Screenshot {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIDEO */}
      {project.videoUrl && (
        <section className="relative z-10 py-8 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Demo</h2>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe src={project.videoUrl} className="w-full h-full" allowFullScreen title="Demo Video" />
            </div>
          </div>
        </section>
      )}

      {/* DESCRIPTION */}
      <section className="relative z-10 py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white">About This Project</h2>
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-white/70 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative z-10 py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white">Technologies <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a1a] to-[#c73c00]">Used</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-black/30 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-black/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tech.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="relative z-10 py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white">Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a1a] to-[#c73c00]">Team</span></h2>
          <div className="flex flex-wrap gap-6">
            {project.developers.map((dev, i) => (
              <div key={i} className="flex items-center gap-5 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md min-w-[280px]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff6a1a] to-[#c73c00] flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0">
                  {dev.avatar ? (
                    <img src={dev.avatar} alt={dev.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    dev.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{dev.name}</h3>
                  <p className="text-white/50 text-sm">{dev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative z-10 py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Interested in this project?</h2>
          <p className="text-white/50 mb-10 text-lg">Let's talk about what we can build together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@fernandosulzbach.com" className="px-8 py-3 bg-[#ff6a1a] text-white font-bold rounded-full hover:bg-[#c73c00] transition-colors shadow-lg">
              Get in Touch
            </a>
            <Link to="/" className="px-8 py-3 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors border border-white/10">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
