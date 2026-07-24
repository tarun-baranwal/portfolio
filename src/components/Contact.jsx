import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing container" style={{ textAlign: 'center' }}>
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1, marginBottom: '2rem' }}
      >
        Anything in Mind?<br/>Let's Talk
      </motion.h2>

      <motion.a 
        href="mailto:tarunbaranwal2020@gmail.com"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ display: 'inline-block', background: 'var(--text-primary)', color: 'var(--bg-color)', padding: '1rem 3rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        Get in Touch
      </motion.a>

      {/* Abstract Glowing Image Collage */}
      <div style={{ position: 'relative', height: '400px', marginTop: '6rem', display: 'flex', justifyContent: 'center' }}>
        
        <motion.div 
          animate={{ rotate: [-10, -5, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '250px', height: '350px', left: 'calc(50% - 250px)', zIndex: 1 }}
        >
          <img src="/profile.jpg" alt="abstract" style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#333', filter: 'sepia(1) hue-rotate(-50deg) saturate(3)' }} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '280px', height: '380px', zIndex: 2 }}
        >
          <img src="/profile.jpg" alt="tarun" style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'var(--accent-orange)', boxShadow: '0 0 50px rgba(255,69,0,0.5)' }} />
        </motion.div>

        <motion.div 
          animate={{ rotate: [10, 5, 10] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '250px', height: '350px', right: 'calc(50% - 250px)', zIndex: 1 }}
        >
          <img src="/profile.jpg" alt="abstract" style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#111', filter: 'sepia(1) hue-rotate(150deg) saturate(2)' }} />
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;
