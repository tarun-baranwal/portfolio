import React, { useEffect, useRef } from 'react';
import { createTimeline, random, stagger } from 'animejs';
import './ScrollBackground.css';

const ScrollBackground = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // We use a linear timeline so it scrubs perfectly 1-to-1 with scroll
    animationRef.current = createTimeline({
      autoplay: false,
      duration: 5000, // Long duration for smoother interpolation
      easing: 'linear'
    });

    // Add complex, randomized animations to all shapes
    animationRef.current.add({
      targets: '.anime-shape',
      translateY: () => random(-800, 800),
      translateX: () => random(-800, 800),
      rotate: () => random(-360, 360),
      scale: () => random(0.5, 3),
      borderRadius: () => ['0%', '50%', '10%', '50%'][random(0, 3)],
      opacity: [
        { value: 0.1, duration: 1000 },
        { value: 0.6, duration: 2000 },
        { value: 0.1, duration: 2000 }
      ],
      backgroundColor: () => {
        const colors = ['#FFDEDE', '#CF0F47', '#FF0B55', '#a8c0ff', '#e0c3fc'];
        return colors[random(0, colors.length - 1)];
      },
      duration: 5000,
      delay: stagger(50, { start: 0 })
    });

    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Calculate scroll percentage (0 to 1)
      let scrollPercent = scrollPosition / scrollHeight;
      
      // Clamp between 0 and 1 to prevent issues with Apple's "rubber band" overscrolling
      scrollPercent = Math.max(0, Math.min(1, scrollPercent));
      
      // Seek the anime.js timeline to the exact percentage of the scroll
      if (animationRef.current) {
        // Use requestAnimationFrame for buttery smooth 60fps scrubbing
        window.requestAnimationFrame(() => {
          animationRef.current.seek(animationRef.current.duration * scrollPercent);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set starting position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-bg-container" ref={containerRef}>
      {/* Generate 30 abstract elements */}
      {[...Array(30)].map((_, i) => (
        <div key={i} className={`anime-shape`} style={{
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
        }}></div>
      ))}
      <div className="bg-blur-overlay"></div>
    </div>
  );
};

export default ScrollBackground;
