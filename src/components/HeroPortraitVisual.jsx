import React from 'react';
import { motion } from 'framer-motion';
import './HeroPortraitVisual.css';

const HeroPortraitVisual = () => {
  return (
    <div className="seamless-portrait-wrapper">
      <motion.div
        className="seamless-portrait-container"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/profile.jpg"
          alt="Tarun Baranwal"
          className="seamless-portrait-img"
        />
        {/* Soft edge blend overlay */}
        <div className="portrait-edge-fade" />
      </motion.div>
    </div>
  );
};

export default HeroPortraitVisual;
