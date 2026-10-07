import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const skills = [
    { category: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Flask', 'FastAPI'] },
    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Prisma'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title text-gradient"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            ABOUT <span className="serif-italic">TARUN</span>
          </motion.h2>
        </div>

        {/* High-End Bento Grid Without Second Image */}
        <div className="bento-grid">
          {/* Bento Card 1: Bio & Philosophy */}
          <motion.div
            className="bento-card bento-bio-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-tag text-accent">PHILOSOPHY</span>
            <h3 className="bento-title">Crafting Clean Code & <span className="serif-italic">Seamless</span> User Interfaces</h3>
            <p className="bento-desc">
              Passionate Full Stack Developer and CS student focused on building scalable web applications. I combine clean architectural design, algorithm optimization, and interactive UI experiences to build web tools that feel alive.
            </p>
          </motion.div>

          {/* Bento Card 2: Experience & Capabilities */}
          <motion.div
            className="bento-card bento-cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mono-tag text-accent">CAPABILITIES</span>
            <h4 className="cta-card-heading">Engineering & Digital Solutions</h4>
            <p className="cta-card-sub">Developing custom web applications, campaign automation tools, and responsive interfaces built for speed, security, and high performance.</p>
            <div className="bento-highlight-badges">
              <span className="bento-badge">React & Node.js</span>
              <span className="bento-badge">Python & Flask</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Focus Areas */}
          <motion.div
            className="bento-card bento-focus-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="mono-tag text-accent">CORE FOCUS</span>
            <ul className="bento-focus-list">
              <li><span className="bullet-glow" /> Full-Stack Application Development</li>
              <li><span className="bullet-glow" /> High-Performance Frontend & Web Architecture</li>
              <li><span className="bullet-glow" /> API Architecture & Web Security Protocols</li>
            </ul>
          </motion.div>

          {/* Bento Card 4: Full Width Skills Grid */}
          <motion.div
            className="bento-card bento-skills-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bento-skills-header">
              <span className="mono-tag text-accent">TECH STACK</span>
              <h3 className="bento-title" style={{ fontSize: '1.4rem', marginTop: '0.2rem' }}>Technologies & Tools</h3>
            </div>

            <div className="skills-container-bento">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group-bento">
                  <h4 className="skill-category-bento">{skillGroup.category}</h4>
                  <ul className="skill-list-bento">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="skill-item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
