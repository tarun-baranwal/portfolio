import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, Terminal, Globe, ShieldCheck } from 'lucide-react';
import './ThreeDHeroVisual.css';

const ThreeDHeroVisual = () => {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  // 3D Canvas Particle & Wireframe Polyhedron Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Nodes for a rotating wireframe Icosahedron / Cube
    const nodes = [];
    const numNodes = 28;
    const radius = Math.min(canvas.width, canvas.height) * 0.28 || 120;

    // Golden Ratio for 3D Icosahedron
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    // Normalize vertices
    const points3D = vertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return { x: (x / len) * radius, y: (y / len) * radius, z: (z / len) * radius };
    });

    // Add extra ambient floating 3D particles
    for (let i = 0; i < numNodes; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(Math.random() * 2 - 1);
      const r = radius * (0.8 + Math.random() * 0.5);
      points3D.push({
        x: r * Math.sin(v) * Math.cos(u),
        y: r * Math.sin(v) * Math.sin(u),
        z: r * Math.cos(v)
      });
    }

    let angleX = 0.005;
    let angleY = 0.008;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = 350;

      // Rotate points
      angleX += 0.004;
      angleY += 0.006;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedPoints = points3D.map(pt => {
        // Rotate around Y
        let x = pt.x * cosY - pt.z * sinY;
        let z = pt.z * cosY + pt.x * sinY;
        // Rotate around X
        let y = pt.y * cosX - z * sinX;
        z = z * cosX + pt.y * sinX;

        // Perspective projection
        const scale = fov / (fov + z + 200);
        return {
          x: cx + x * scale,
          y: cy + y * scale,
          scale,
          z
        };
      });

      // Draw connecting lines between nearby points
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.45 * Math.min(p1.scale, p2.scale);
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(44, 145, 153, ${alpha})`);
            gradient.addColorStop(1, `rgba(240, 179, 35, ${alpha * 0.8})`);
            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      projectedPoints.forEach(p => {
        const radius = Math.max(1.5, 3.5 * p.scale);
        const alpha = Math.min(1, Math.max(0.2, (p.z + 200) / 400));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0 ? `rgba(240, 179, 35, ${alpha})` : `rgba(191, 222, 220, ${alpha * 0.7})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.z > 0 ? '#f0b323' : '#2c9199';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle 3D Tilt Effect on mouse move over visual card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 15;
    const rotY = ((x - centerX) / centerX) * 15;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="three-d-hero-wrapper">
      {/* Dynamic 3D Floating Particle Canvas */}
      <canvas ref={canvasRef} className="three-d-canvas" />

      {/* Interactive 3D Tilt Card */}
      <motion.div
        ref={cardRef}
        className="hero-3d-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
          transition: rotateX === 0 ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
        }}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.6 }}
      >
        {/* Dynamic Light Shine Overlay */}
        <div
          className="card-shine-overlay"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`
          }}
        />

        {/* Floating 3D Cyber HUD Header */}
        <div className="card-hud-header">
          <div className="hud-indicator">
            <span className="live-pulse" />
            <span className="hud-status-text">AVAILABLE FOR PROJECTS</span>
          </div>
          <ShieldCheck size={20} className="hud-icon" />
        </div>

        {/* Central 3D Interactive Core Display */}
        <div className="card-core-display">
          <div className="core-avatar-ring">
            <img src="/profile.jpg" alt="Tarun Baranwal" className="core-avatar-img" />
            <div className="orbit-ring orbit-1" />
            <div className="orbit-ring orbit-2" />
          </div>

          <div className="core-info">
            <h3 className="core-name">Tarun Baranwal</h3>
            <p className="core-subtitle">Full-Stack Engineer & CS Undergraduate</p>
          </div>
        </div>

        {/* Interactive Stats Grid */}
        <div className="card-stats-grid">
          <div className="card-stat-pill">
            <span className="stat-value text-accent">100+</span>
            <span className="stat-label">LeetCode Solved</span>
          </div>
          <div className="card-stat-pill">
            <span className="stat-value">Full-Stack</span>
            <span className="stat-label">React & Python</span>
          </div>
          <div className="card-stat-pill">
            <span className="stat-value text-accent">GDG 8th</span>
            <span className="stat-label">Hackathon Rank</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreeDHeroVisual;
