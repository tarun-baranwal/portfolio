import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, MapPin, Code2, Globe, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('baranwaltarun@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        
        {/* Top Hero Contact CTA */}
        <div className="footer-cta-container">
          <motion.div
            className="footer-status-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="status-dot" />
            <span className="status-text">AVAILABLE FOR FREELANCE & FULL-TIME ROLES</span>
          </motion.div>

          <motion.h2
            className="footer-headline-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's craft something <span className="serif-italic">extraordinary</span>.
          </motion.h2>

          <p className="footer-sub-text">
            Have a project idea, web application request, or collaboration opportunity? Feel free to drop an email or reach out on socials.
          </p>

          {/* Clean Prominent Email Action Bar */}
          <div className="footer-email-actions">
            <a href="mailto:baranwaltarun@gmail.com" className="footer-big-email">
              <Mail size={22} className="email-icon" /> baranwaltarun@gmail.com
            </a>

            <div className="footer-action-btns">
              <a href="mailto:baranwaltarun@gmail.com" className="btn btn-primary footer-btn">
                Say Hello <ArrowUpRight size={18} />
              </a>

              <button onClick={copyEmail} className="btn btn-outline copy-btn">
                {copied ? <><Check size={18} color="#f0b323" /> Copied!</> : <><Copy size={18} /> Copy Email</>}
              </button>
            </div>
          </div>
        </div>

        {/* Clean Divider Line */}
        <div className="footer-divider-line" />

        {/* Footer Details 3-Column Grid */}
        <div className="footer-columns-grid">
          
          {/* Column 1: Location & Bio */}
          <div className="footer-col">
            <span className="col-label">
              <MapPin size={14} className="col-icon" /> LOCATION
            </span>
            <h4 className="col-val">Vadodara, Gujarat, India</h4>
            <p className="col-desc">B.Tech CS Student & Full-Stack Developer creating modern interactive web tools.</p>
          </div>

          {/* Column 2: Social Links */}
          <div className="footer-col">
            <span className="col-label">CONNECT & SOCIALS</span>
            <div className="col-social-links">
              <a href="https://github.com/tarun-baranwal" target="_blank" rel="noreferrer">
                <Globe size={14} /> GitHub ↗
              </a>
              <a href="https://linkedin.com/in/tarun-baranwal-7524a9322" target="_blank" rel="noreferrer">
                <Globe size={14} /> LinkedIn ↗
              </a>
              <a href="https://leetcode.com/u/tarun_baranwal" target="_blank" rel="noreferrer">
                <Code2 size={14} /> LeetCode ↗
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="footer-col">
            <span className="col-label">NAVIGATION</span>
            <div className="col-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <span>&copy; {new Date().getFullYear()} Tarun Baranwal. All rights reserved.</span>
          <span>Crafted with React, Node.js & Modern Web Architecture</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
