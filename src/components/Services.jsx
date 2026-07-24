import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Shield, BrainCircuit } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Code2 size={32} />, title: "Frontend", desc: "React, Tailwind, UI/UX" },
    { icon: <Server size={32} />, title: "Backend", desc: "Node.js, Express, SQL" },
    { icon: <Shield size={32} />, title: "Security", desc: "Vulnerability Analysis" },
    { icon: <BrainCircuit size={32} />, title: "AI/ML", desc: "LLMs, Python, Data" }
  ];

  return (
    <section className="section-spacing container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      
      <div className="grid-2">
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.2, maxWidth: '400px', marginBottom: '4rem' }}>
            Professional services tailored to help you achieve meaningful and long-lasting results.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem 2rem' }}>
          {services.map((s, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
