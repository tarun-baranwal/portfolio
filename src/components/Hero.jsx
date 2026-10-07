import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroPortraitVisual from './HeroPortraitVisual';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, -80]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-split-grid"
          style={{ y: yText, opacity: opacityHero }}
        >
          {/* Left Column - Hero Text & CTA */}
          <div className="hero-text-col">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              🚀 DIGITAL DESIGNER & FULL STACK DEVELOPER
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
            >
              I'm <span className="text-accent">Tarun</span><br />
              Crafting <span className="serif-italic">Next-Gen</span><br />
              Digital Apps
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              Full Stack Developer & CS Student crafting high-performance, interactive web experiences with modern architecture, fluid animations, and intuitive UI design.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <a href="#projects" className="btn btn-primary">
                Explore Work ↗
              </a>
              <a href="#about" className="btn btn-outline">
                About Me
              </a>
            </motion.div>
          </div>

          {/* Right Column - Layered Cutout Portrait Visual */}
          <motion.div 
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPortraitVisual />
          </motion.div>
        </motion.div>

        {/* Clean Performance Metrics Band & Scroll Down Indicator */}
        <motion.div
          className="hero-bottom-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <div className="hero-stats-band">
            <div className="stat-box">
              <span className="stat-number text-accent">Full-Stack</span>
              <span className="stat-label">React, Node & Python</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive & Fluid Design</span>
            </div>
            <div className="stat-box">
              <span className="stat-number text-accent">Modern</span>
              <span className="stat-label">Clean Code Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative large marquee text running in background */}
      <div className="hero-marquee-bg">
        <div className="marquee-content">
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>CREATOR</span>
          <span>DEVELOPER</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;


