import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'PADmarks',
      category: 'OSINT Security Platform',
      description: 'An evidence-backed Open Source Intelligence (OSINT) and digital footprint investigation platform for threat analysts.',
      tech: ['Python', 'Flask', 'React', 'SQLite', 'OSINT'],
      github: 'https://github.com/tarun-baranwal/padmarks',
      live: 'https://padmark.vercel.app/',
      image: '/assets/images/thumbs/padmark.png'
    },
    {
      title: 'Sentbox',
      category: 'Full Stack App',
      description: 'A powerful Centralized Email Campaign Automation platform for 25+ providers.',
      tech: ['JavaScript', 'MySQL', 'Node.js', 'React'],
      github: 'https://github.com/tarun-baranwal',
      live: 'https://sentbox.vercel.app/',
      image: '/assets/images/thumbs/sentbox.png'
    },
    {
      title: 'Silent Sea',
      category: 'Web Platform',
      description: 'A student counselor web application designed to help individuals overcome stress anonymously.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/tarun-baranwal/wellness',
      live: 'https://tarun-baranwal.github.io/wellness/',
      image: '/assets/images/thumbs/image2.png'
    },
    {
      title: 'Portfolio',
      category: 'Creative Design',
      description: 'A premium, modern portfolio built with fluid scroll animations.',
      tech: ['React', 'Framer Motion', 'Vite'],
      github: 'https://github.com/tarun-baranwal/portfolio',
      live: 'https://tarunbaranwal.vercel.app/',
      image: '/assets/images/thumbs/image.png'
    },
    {
      title: 'Expedia Clone',
      category: 'UI/UX Clone',
      description: 'A front-end clone of the Expedia travel booking website focusing on structure.',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/tarun-baranwal/Expidiaclone',
      live: 'https://tarun-baranwal.github.io/Expidiaclone/',
      image: '/assets/images/thumbs/expdia.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title text-gradient"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            FEATURED <span className="serif-italic">WORKS</span>
          </motion.h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-row"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-row-left">
                <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-row-center">
                <p className="project-category">{project.category}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-row-right">
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link-icon">
                  <ArrowUpRight size={32} />
                </a>
              </div>

              {/* Hover Image Reveal */}
              <div className={`project-hover-image ${hoveredIndex === index ? 'active' : ''}`}>
                <img src={project.image} alt={project.title} className="hover-project-img" />
                <div className="project-hover-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover-icon" title="View Source Code"><Code /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover-icon" title="View Live Website"><ExternalLink /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="projects-footer text-center" style={{ marginTop: '5rem' }}>
          <a href="https://github.com/tarun-baranwal" target="_blank" rel="noreferrer" className="btn btn-outline">
            View More on Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
