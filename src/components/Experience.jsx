import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Cyber Security Intern',
      organization: 'Purezza Technologies, Ahmedabad, Gujarat',
      date: 'May 2026 - Present',
      type: 'experience',
      desc: 'Working on cybersecurity practices, vulnerability assessments, and learning industry-standard security protocols.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'B.Tech in Computer Science',
      organization: 'Parul University, Vadodara, Gujarat',
      date: '2024 - Present',
      type: 'education',
      desc: 'Currently in my 3rd year. Focusing on core computer science subjects, programming, and software development methodologies.',
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">My Journey</h2>
      </div>

      <div className="experience-glass-grid">
        {experiences.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="glass-panel exp-glass-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
          >
            <div className="exp-glass-top">
              <div className="exp-glass-icon">
                {item.icon}
              </div>
              <div className="exp-glass-date">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
            </div>
            
            <div className="exp-glass-content">
              <h3 className="exp-glass-title">{item.title}</h3>
              <h4 className="exp-glass-org text-gradient-ambient">{item.organization}</h4>
              <p className="exp-glass-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
