import React, { useEffect, useRef, useState, useCallback } from 'react';

const InteractiveBackground = ({ darkMode }) => {
  const containerRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [energyFields, setEnergyFields] = useState([]);
  const [neonLines, setNeonLines] = useState([]);
  const [pulseRings, setPulseRings] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Create particles with better distribution
  const createParticles = useCallback(() => {
    const newParticles = [];
    const particleCount = Math.min(25, Math.floor(window.innerWidth / 50));
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 6,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        direction: Math.random() * Math.PI * 2
      });
    }
    setParticles(newParticles);
  }, []);

  // Create energy fields
  const createEnergyFields = useCallback(() => {
    const newFields = [];
    const fieldCount = Math.min(6, Math.floor(window.innerWidth / 300));
    
    for (let i = 0; i < fieldCount; i++) {
      newFields.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 300 + 150,
        delay: Math.random() * 3,
        intensity: Math.random() * 0.5 + 0.3
      });
    }
    setEnergyFields(newFields);
  }, []);

  // Create neon lines
  const createNeonLines = useCallback(() => {
    const newLines = [];
    const lineCount = Math.min(3, Math.floor(window.innerWidth / 400));
    
    for (let i = 0; i < lineCount; i++) {
      newLines.push({
        id: i,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 8,
        duration: Math.random() * 4 + 6
      });
    }
    setNeonLines(newLines);
  }, []);

  // Create pulse rings
  const createPulseRings = useCallback(() => {
    const newRings = [];
    const ringCount = Math.min(4, Math.floor(window.innerWidth / 300));
    
    for (let i = 0; i < ringCount; i++) {
      newRings.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 4,
        size: Math.random() * 100 + 50
      });
    }
    setPulseRings(newRings);
  }, []);

  // Create sparkles
  const createSparkles = useCallback(() => {
    const newSparkles = [];
    const sparkleCount = Math.min(15, Math.floor(window.innerWidth / 80));
    
    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2
      });
    }
    setSparkles(newSparkles);
  }, []);

  // Handle mouse movement with throttling
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsMouseMoving(true);

    // Update cursor glow
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.left = e.clientX - 100 + 'px';
      cursorGlowRef.current.style.top = e.clientY - 100 + 'px';
    }

    // Create cursor trail effect (throttled)
    if (containerRef.current && Math.random() > 0.7) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX - 3 + 'px';
      trail.style.top = e.clientY - 3 + 'px';
      
      // Add some randomness to trail size
      const size = Math.random() * 4 + 4;
      trail.style.width = size + 'px';
      trail.style.height = size + 'px';
      
      containerRef.current.appendChild(trail);
      
      // Remove trail after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 2000);
    }

    // Create sparkles around cursor occasionally
    if (Math.random() > 0.95) {
      createSparkleAtPosition(e.clientX, e.clientY);
    }

    // Reset mouse moving flag
    setTimeout(() => setIsMouseMoving(false), 100);
  }, []);

  // Create sparkle at specific position
  const createSparkleAtPosition = useCallback((x, y) => {
    if (containerRef.current) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';
      
      containerRef.current.appendChild(sparkle);
      
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 3000);
    }
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    createParticles();
    createEnergyFields();
    createNeonLines();
    createPulseRings();
    createSparkles();
  }, [createParticles, createEnergyFields, createNeonLines, createPulseRings, createSparkles]);

  // Mouse enter/leave effects
  const handleMouseEnter = useCallback(() => {
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.opacity = '1';
      cursorGlowRef.current.style.transform = 'scale(1)';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.opacity = '0';
      cursorGlowRef.current.style.transform = 'scale(0.8)';
    }
    setIsMouseMoving(false);
  }, []);

  // Click effect
  const handleClick = useCallback((e) => {
    if (containerRef.current) {
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'cursor-trail';
      ripple.style.left = e.clientX - 10 + 'px';
      ripple.style.top = e.clientY - 10 + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.background = darkMode 
        ? 'radial-gradient(circle, rgba(59, 130, 246, 1) 0%, rgba(147, 51, 234, 0.8) 50%, transparent 100%)'
        : 'radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.6) 50%, transparent 100%)';
      
      containerRef.current.appendChild(ripple);
      
      // Create pulse ring at click position
      const pulseRing = document.createElement('div');
      pulseRing.className = 'pulse-ring';
      pulseRing.style.left = e.clientX - 25 + 'px';
      pulseRing.style.top = e.clientY - 25 + 'px';
      pulseRing.style.width = '50px';
      pulseRing.style.height = '50px';
      
      containerRef.current.appendChild(pulseRing);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
        if (pulseRing.parentNode) {
          pulseRing.parentNode.removeChild(pulseRing);
        }
      }, 1000);
    }
  }, [darkMode]);

  useEffect(() => {
    createParticles();
    createEnergyFields();
    createNeonLines();
    createPulseRings();
    createSparkles();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleClick, handleResize, createParticles, createEnergyFields, createNeonLines, createPulseRings, createSparkles]);

  useEffect(() => {
    const canvas = document.getElementById('constellation-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));
    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.save();
            ctx.globalAlpha = 0.15 + 0.25 * (1 - dist / 120);
            ctx.strokeStyle = '#60a5fa';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (let node of nodes) {
        ctx.save();
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#a21caf';
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }
    function animate() {
      for (let node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }
    animate();
    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Interactive Background Container */}
      <div ref={containerRef} className="interactive-bg">
        {/* Animated Constellation Network */}
        <canvas
          ref={el => {
            if (el) {
              el.width = window.innerWidth;
              el.height = window.innerHeight;
            }
          }}
          id="constellation-canvas"
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle"
            style={{
              left: particle.x + 'px',
              top: particle.y + 'px',
              width: particle.size + 'px',
              height: particle.size + 'px',
              animationDelay: particle.delay + 's',
              animationDuration: (particle.speed + 3) + 's'
            }}
          />
        ))}
        
        {/* Energy Fields */}
        {energyFields.map((field) => (
          <div
            key={field.id}
            className="energy-field"
            style={{
              left: field.x + 'px',
              top: field.y + 'px',
              width: field.size + 'px',
              height: field.size + 'px',
              animationDelay: field.delay + 's',
              opacity: field.intensity
            }}
          />
        ))}

        {/* Neon Lines */}
        {neonLines.map((line) => (
          <div
            key={line.id}
            className="neon-line"
            style={{
              top: line.y + 'px',
              animationDelay: line.delay + 's',
              animationDuration: line.duration + 's'
            }}
          />
        ))}

        {/* Pulse Rings */}
        {pulseRings.map((ring) => (
          <div
            key={ring.id}
            className="pulse-ring"
            style={{
              left: ring.x + 'px',
              top: ring.y + 'px',
              width: ring.size + 'px',
              height: ring.size + 'px',
              animationDelay: ring.delay + 's'
            }}
          />
        ))}

        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: sparkle.x + 'px',
              top: sparkle.y + 'px',
              animationDelay: sparkle.delay + 's',
              animationDuration: sparkle.duration + 's'
            }}
          />
        ))}

        {/* Mouse interaction area */}
        <div 
          className="absolute inset-0"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Enhanced Cursor Glow Effect */}
      <div
        ref={cursorGlowRef}
        className="cursor-glow"
        style={{ 
          opacity: 0,
          transform: 'scale(0.8)',
          transition: 'all 0.2s ease-out'
        }}
      />

      {/* Additional glow when mouse is moving */}
      {isMouseMoving && (
        <div
          className="cursor-glow"
          style={{
            position: 'fixed',
            left: mousePosition.x - 150 + 'px',
            top: mousePosition.y - 150 + 'px',
            width: '300px',
            height: '300px',
            opacity: 0.3,
            pointerEvents: 'none',
            zIndex: 9998,
            transition: 'none',
            background: darkMode 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.03) 50%, transparent 100%)'
          }}
        />
      )}
    </>
  );
};

export default InteractiveBackground; 