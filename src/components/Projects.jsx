import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

import sentboxImg from '../assets/image.png';
import silentseaImg from '../assets/image2.png';
import expediaImg from '../assets/image3.png';
import portfolioImg from '../assets/portfolio.png';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set custom properties for CSS radial gradient
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`bento-card glass-panel ${project.featured ? 'bento-featured' : 'bento-standard'}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Mouse Tracking Glow Element */}
      <div className="bento-glow"></div>

      <div className="bento-content-wrapper">
        <div className="bento-text-area">
          <h3 className="bento-title">{project.title}</h3>
          <p className="bento-desc">{project.desc}</p>
          <div className="bento-tech-tags">
            {project.tech.map((tech, tIdx) => (
              <span key={tIdx} className="bento-tag">{tech}</span>
            ))}
          </div>

          <div className="bento-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="bento-link">
                <FiExternalLink size={20} /> <span>Live Preview</span>
              </a>
            )}
            {project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bento-link">
                <FiGithub size={20} /> <span>Repository</span>
              </a>
            )}
          </div>
        </div>

        <div className="bento-image-area">
          <div className="browser-mockup">
            <div className="browser-header">
              <span className="browser-dot red"></span>
              <span className="browser-dot yellow"></span>
              <span className="browser-dot green"></span>
            </div>
            <div className="browser-content">
              <img src={project.image} alt={project.title} className="bento-img" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Sentbox',
      desc: 'A powerful, full-stack Centralized Email Campaign Automation platform. Serves as a unified dashboard to manage and execute email campaigns across 25+ different free-tier email providers from a single interface.',
      tech: ['JavaScript', 'TypeScript', 'CSS', 'MySQL'],
      live: 'https://sentbox.vercel.app/',
      github: '#',
      image: sentboxImg,
      featured: true
    },
    {
      title: 'Silent Sea',
      desc: 'A student counselor web application designed to help individuals overcome stress anonymously.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://tarun-baranwal.github.io/wellness/',
      github: 'https://github.com/tarun-baranwal/wellness',
      image: silentseaImg,
      featured: false
    },
    {
      title: 'Expedia Clone',
      desc: 'A front-end clone of the Expedia travel booking website, focusing on UI/UX structure.',
      tech: ['HTML', 'CSS'],
      live: 'https://tarun-baranwal.github.io/Expidiaclone/',
      github: 'https://github.com/tarun-baranwal/Expidiaclone',
      image: expediaImg,
      featured: false
    },
    {
      title: 'Personal Portfolio',
      desc: 'A premium, modern portfolio built with fluid scroll animations and glowing neo-morphic elements.',
      tech: ['React', 'Framer Motion', 'Vite', 'CSS'],
      live: 'https://tarunbaranwal.vercel.app/',
      github: 'https://github.com/tarun-baranwal/portfolio',
      image: portfolioImg,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Featured Work</h2>
      </div>

      <div className="neo-bento-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
