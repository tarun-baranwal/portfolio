import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="section footer-section">
      <div className="glass-panel footer-glass-panel">
        
        <div className="footer-glass-grid">
          
          <div className="footer-main">
            <h2 className="footer-headline">
              Let's create <br/>something <span className="text-gradient-ambient">amazing.</span>
            </h2>
            <a href="mailto:baranwaltarun@gmail.com" className="neumorphic-btn neumorphic-btn-primary footer-btn">
              Say Hello <FiArrowRight size={20} />
            </a>
          </div>

          <div className="footer-details">
            <div className="detail-glass-block">
              <span className="detail-label">Email</span>
              <span className="detail-val">baranwaltarun@gmail.com</span>
            </div>
            <div className="detail-glass-block">
              <span className="detail-label">Location</span>
              <span className="detail-val">Vadodara, Gujarat, India</span>
            </div>
            
            <div className="detail-glass-block social-block">
              <span className="detail-label">Socials</span>
              <div className="social-links-glass">
                <a href="https://www.linkedin.com/in/tarunbaranwal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/tarun-baranwal" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://leetcode.com/u/tarun_baranwal/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} Tarun Baranwal. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
