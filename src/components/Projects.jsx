import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

// Import images so Vite bundles them properly for production
import sentboxImg from '../assets/image.png';
import silentseaImg from '../assets/image2.png';
import expediaImg from '../assets/image3.png';

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projects = [
    {
      title: 'Sentbox',
      desc: 'A powerful, full-stack Centralized Email Campaign Automation platform. Serves as a unified dashboard to manage and execute email campaigns across 25+ different free-tier email providers from a single interface.',
      tech: ['JavaScript', 'TypeScript', 'CSS', 'MySQL'],
      live: 'https://sb-rbnd.vercel.app/',
      github: '#',
      image: sentboxImg,
      featured: true
    },
    {
      title: 'Silent Sea',
      desc: 'A student counselor web application designed to help individuals overcome stress or problems anonymously. It provides helpful resources and ways to cope without revealing their identity.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://tarun-baranwal.github.io/wellness/',
      github: '#',
      image: silentseaImg,
      featured: false
    },
    {
      title: 'Expedia Clone',
      desc: 'A front-end clone of the Expedia travel booking website, focusing on UI/UX structure and responsive design techniques.',
      tech: ['HTML', 'CSS'],
      live: 'https://tarun-baranwal.github.io/Expidiaclone/',
      github: '#',
      image: expediaImg,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Featured Work</h2>
      </div>

      <div className="projects-glass-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`glass-panel project-glass-card ${project.featured ? 'glass-featured' : 'glass-standard'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
          >
            <div className="project-glass-image-wrapper">
              {project.featured ? (
                <motion.img style={{ y: y1 }} src={project.image} alt={project.title} className="project-glass-image" />
              ) : (
                <img src={project.image} alt={project.title} className="project-glass-image" />
              )}
              <div className="project-glass-overlay">
                <div className="project-glass-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="glass-link-btn">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass-link-btn">
                      <FiGithub size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-glass-content">
              <h3 className="project-glass-title">{project.title}</h3>
              <p className="project-glass-desc">{project.desc}</p>
              <div className="project-glass-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="glass-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
