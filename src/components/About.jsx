import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Layout, Server, Database, PenTool } from 'lucide-react';
import './About.css';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI']
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'Prisma']
    },
    {
      title: 'Tools',
      icon: <PenTool size={24} />,
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">Get to know me</h2>
      </div>

      <div className="about-glass-grid">
        
        <motion.div 
          className="glass-panel bio-glass-box"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="bio-glass-title">My Journey</h3>
          <p className="bio-glass-text">
            I'm a passionate Computer Science student and Full Stack Developer. I thrive on building beautiful, intuitive, and modern web applications that provide seamless user experiences while maintaining robust, scalable backends.
          </p>
          <ul className="bio-glass-list">
            <li><span className="text-gradient-ambient">✨</span> Full Stack Web Developer</li>
            <li><span className="text-gradient-ambient">✨</span> Deep interest in AI & Machine Learning</li>
            <li><span className="text-gradient-ambient">✨</span> Exploring Cybersecurity</li>
            <li><span className="text-gradient-ambient">✨</span> Eager learner of Cloud & DevOps</li>
          </ul>
        </motion.div>

        <div className="skills-glass-container">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="glass-panel skill-glass-box"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="skill-glass-header">
                <div className="skill-icon-wrap">{category.icon}</div>
                <h4>{category.title}</h4>
              </div>
              <div className="skill-glass-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="glass-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
