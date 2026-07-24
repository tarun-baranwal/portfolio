import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Code, Cpu, Server, Database } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);

  const services = [
    { icon: <Code size={24} />, title: 'Full-Stack Web', desc: 'Crafting seamless experiences' },
    { icon: <Server size={24} />, title: 'API Integration', desc: 'Connecting modern systems' },
    { icon: <Cpu size={24} />, title: 'AI Solutions', desc: 'Intelligent, data-driven apps' },
    { icon: <Database size={24} />, title: 'Architecture', desc: 'Robust data management' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="ambient-orb"></div>
      
      <div className="section hero-glass-grid">
        
        <motion.div 
          className="hero-main-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="welcome-badge">👋 Welcome to my portfolio</span>
          <h1 className="hero-headline">
            Hi, I'm <br />
            <span className="text-gradient-ambient">Tarun Baranwal.</span>
          </h1>
          <p className="hero-lead">
            I'm a Full Stack Developer & CS Student crafting elegant, modern web applications. 
            I love combining clean code with beautiful, ambient design.
          </p>
          
          <div className="hero-action-bar">
            <a href="#contact" className="neumorphic-btn neumorphic-btn-primary">
              Let's Talk <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" className="neumorphic-btn" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div style={{ y: y1 }} className="glass-panel image-glass-wrapper">
            <img src="/profile.jpg" alt="Tarun Baranwal" className="hero-portrait" />
          </motion.div>
        </motion.div>

      </div>

      <div className="section services-glass-container">
        <div className="services-glass-grid">
          {services.map((svc, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel service-glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
            >
              <div className="service-icon-soft">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
