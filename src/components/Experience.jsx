import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Cyber Security Intern',
      organization: 'Purezza Technologies',
      period: 'May 2026 – Present',
      category: 'INTERNSHIP',
      description: 'Working on cybersecurity practices, vulnerability assessments, penetration testing concepts, and industry-standard security protocols.',
      icon: <Briefcase size={26} />,
      skills: ['Cyber Security', 'Vulnerability Assessment', 'Security Protocols']
    },
    {
      title: 'B.Tech in Computer Science',
      organization: 'Parul University, Vadodara',
      period: '2024 – 2028',
      category: 'GRADUATION',
      description: 'Undergraduate study in Computer Science & Engineering. Core focus on Data Structures, Algorithms, DBMS, Object-Oriented Programming, and Full-Stack Software Engineering.',
      icon: <GraduationCap size={26} />,
      skills: ['Data Structures & Algorithms', 'DBMS & SQL', 'Web Development', 'OOP']
    }
  ];

  const capabilities = [
    {
      title: 'Full-Stack Web Development',
      tag: 'SERVICES',
      description: 'Building modern web applications with React on the frontend and scalable Node.js / Express or Flask REST API backends.',
      icon: <Code2 size={24} />
    },
    {
      title: 'UI/UX & Interactive Motion',
      tag: 'DESIGN',
      description: 'Crafting responsive user interfaces with Framer Motion animations, glassmorphism aesthetics, and fluid interaction design.',
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.h2
            className="section-title text-gradient"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            EXPERIENCE & <span className="serif-italic">EDUCATION</span>
          </motion.h2>
        </div>

        {/* Main Experience & Education Timeline */}
        <div className="experience-timeline-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-header">
                <div className="timeline-icon-box">{exp.icon}</div>
                <div className="timeline-badge-group">
                  <span className="mono-tag text-accent">{exp.category}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
              </div>

              <h3 className="timeline-role">{exp.title}</h3>
              <h4 className="timeline-org">{exp.organization}</h4>
              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-skills">
                {exp.skills.map((s, idx) => (
                  <span key={idx} className="timeline-skill-pill">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Services Sub-Grid */}
        <div className="services-subgrid">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              className="service-mini-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="service-mini-icon">{cap.icon}</div>
              <div>
                <span className="mono-tag text-accent">{cap.tag}</span>
                <h4 className="service-mini-title">{cap.title}</h4>
                <p className="service-mini-desc">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
