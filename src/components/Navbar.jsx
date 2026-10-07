import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className={`navbar-minimal ${scrolled ? 'scrolled' : ''}`}>
        {/* Top Scroll Progress Indicator */}
        <motion.div className="scroll-progress-bar" style={{ scaleX }} />

        <div className="navbar-container">
          <a href="#home" className="logo">
            <span className="logo-text">T.B.</span>
          </a>
          
          <button className="menu-btn-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={32} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="offcanvas-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="offcanvas-header">
              <button className="menu-close-btn" onClick={toggleMenu}>
                <X size={36} />
              </button>
            </div>
            
            <div className="offcanvas-content">
              <div className="offcanvas-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="offcanvas-link"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.08), duration: 0.4 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                className="offcanvas-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="contact-info">
                  <h4>GET IN TOUCH</h4>
                  <p>tarunbaranwal2020@gmail.com</p>
                </div>
                <div className="social-links">
                  <a href="https://github.com/tarun-baranwal" target="_blank" rel="noreferrer">Github ↗</a>
                  <a href="https://linkedin.com/in/tarun-baranwal-7524a9322" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                  <a href="https://leetcode.com/u/tarun_baranwal" target="_blank" rel="noreferrer">LeetCode ↗</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
