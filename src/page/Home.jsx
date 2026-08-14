import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechnicalSkills from '../components/TechnicalSkills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import RobotModel from '../components/RobotModel';

const Home = () => {
  const mascotRef = useRef(null);
  const targetScrollY = useRef(0);
  const interpolatedScrollY = useRef(0);
  const frameId = useRef(null);
  const anchorsRef = useRef([]);
  const lastAlign = useRef('left');
  const [align, setAlign] = useState('left');

  const windowSizeRef = useRef({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    // Scroll listener (Updates target position, zero React re-renders)
    const handleScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    const handleResize = () => {
      windowSizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      recalculateAnchors();
    };

    // Recalculates document coordinates for all section anchors dynamically
    const recalculateAnchors = () => {
      const list = [];
      const windowWidth = windowSizeRef.current.width || 1200;
      const windowHeight = windowSizeRef.current.height || 800;

      // Calculate layout bounds for responsive side-floating
      const contentWidth = Math.min(windowWidth, 980);
      const containerLeft = (windowWidth - contentWidth) / 2;
      const leftX = Math.max(16, containerLeft - 180);
      const rightX = Math.min(windowWidth - 272, containerLeft + contentWidth - 80);

      const getElementInfo = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          height: rect.height
        };
      };

      // 1. Hero (Bottom-Left)
      const heroInfo = getElementInfo('#home');
      if (heroInfo) {
        list.push({
          scrollY: 0,
          x: leftX,
          y: heroInfo.top + heroInfo.height - 230
        });
      }

      // 2. About (Center-Right)
      const aboutInfo = getElementInfo('#about');
      if (aboutInfo) {
        list.push({
          scrollY: aboutInfo.top - 120,
          x: rightX,
          y: aboutInfo.top + 330
        });
      }

      // 3. Technical Skills (Center-Left)
      const skillsInfo = getElementInfo('#skills');
      if (skillsInfo) {
        list.push({
          scrollY: skillsInfo.top - 120,
          x: leftX,
          y: skillsInfo.top + 300
        });
      }

      // 4. Projects (Center-Right)
      const projectsInfo = getElementInfo('#projects');
      if (projectsInfo) {
        list.push({
          scrollY: projectsInfo.top - 120,
          x: rightX,
          y: projectsInfo.top + 280
        });
      }

      // 5. Experience 1: Internship (Center-Left)
      const exp1Info = getElementInfo('.milestone-card[data-id="0"]');
      if (exp1Info) {
        list.push({
          scrollY: exp1Info.top - 160,
          x: leftX,
          y: exp1Info.top + 80
        });
      }

      // 6. Experience 2 & 3: ITUM/Accreditation (Center-Right)
      const exp2Info = getElementInfo('.milestone-card[data-id="2"]');
      if (exp2Info) {
        list.push({
          scrollY: exp2Info.top - 160,
          x: rightX,
          y: exp2Info.top + 80
        });
      }

      // 7. Experience 4: GCE A/L (Center-Left)
      const exp4Info = getElementInfo('.milestone-card[data-id="3"]');
      if (exp4Info) {
        list.push({
          scrollY: exp4Info.top - 160,
          x: leftX,
          y: exp4Info.top + 80
        });
      }

      // 8. Footer (Center-Right final resting position)
      const footerInfo = getElementInfo('footer');
      if (footerInfo) {
        list.push({
          scrollY: footerInfo.top - 120,
          x: rightX,
          y: footerInfo.top + 45
        });
      }

      anchorsRef.current = list;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial positioning and scheduled recalculations for lazy-loaded elements
    recalculateAnchors();
    const t1 = setTimeout(recalculateAnchors, 200);
    const t2 = setTimeout(recalculateAnchors, 1000);
    const t3 = setTimeout(recalculateAnchors, 2500);

    // Animation Loop
    const loop = () => {
      // Smooth lerp on scroll position
      interpolatedScrollY.current += (targetScrollY.current - interpolatedScrollY.current) * 0.08;
      const scrollY = interpolatedScrollY.current;

      const anchors = anchorsRef.current;
      if (!anchors || anchors.length === 0) {
        frameId.current = requestAnimationFrame(loop);
        return;
      }

      let x = anchors[0].x;
      let y = anchors[0].y;
      let opacity = 1;

      // Find the active segment
      let activeIndex = -1;
      for (let i = 0; i < anchors.length - 1; i++) {
        if (scrollY >= anchors[i].scrollY && scrollY < anchors[i + 1].scrollY) {
          activeIndex = i;
          break;
        }
      }

      if (activeIndex !== -1) {
        // Interpolate between anchor i and i + 1
        const a1 = anchors[activeIndex];
        const a2 = anchors[activeIndex + 1];
        
        const segmentProgress = (scrollY - a1.scrollY) / (a2.scrollY - a1.scrollY);
        const p = Math.min(Math.max(segmentProgress, 0), 1);
        
        // Easing: easeInOutCubic for organic acceleration curves
        const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

        x = a1.x + ease * (a2.x - a1.x);
        y = a1.y + ease * (a2.y - a1.y);
      } else if (scrollY < anchors[0].scrollY) {
        // Before the first anchor
        x = anchors[0].x;
        y = anchors[0].y;
      } else {
        // Past the last anchor (remains fully visible at Footer)
        const lastAnchor = anchors[anchors.length - 1];
        x = lastAnchor.x;
        y = lastAnchor.y;
        opacity = 1;
      }

      // Determine left/right alignment based on calculated X position
      const windowWidth = windowSizeRef.current.width || 1200;
      const currentAlign = x > windowWidth / 2 ? 'right' : 'left';

      if (currentAlign !== lastAlign.current) {
        lastAlign.current = currentAlign;
        setTimeout(() => setAlign(currentAlign), 0);
      }

      // Directly update style properties (hardware accelerated)
      if (mascotRef.current) {
        mascotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        mascotRef.current.style.opacity = opacity;
        
        // Hide completely on mobile (screen width < 1024px) or if opacity is zero
        if (opacity <= 0.005 || windowWidth < 1024) {
          mascotRef.current.style.display = 'none';
        } else {
          mascotRef.current.style.display = 'block';
        }
      }

      frameId.current = requestAnimationFrame(loop);
    };

    frameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-100 selection:bg-violet-500/30 selection:text-violet-200">
      {/* Decorative Top Glowing Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-[120px] pointer-events-none z-0"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Floating 3D RoboShiba Mascot (Smoothly Morphs across Hero -> About -> Skills -> Projects -> Experience -> Footer on scroll) */}
      <div 
        ref={mascotRef}
        className="hidden lg:block absolute top-0 left-0 w-64 h-64 z-50 pointer-events-auto"
        style={{
          transform: 'translate3d(32px, 600px, 0px)', // Initial coordinate placeholder
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative w-full h-full">
          {/* Sci-fi rotating target rings */}
          <div className="absolute inset-0 m-auto w-44 h-44 rounded-full border border-dashed border-indigo-500/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-indigo-500/10 animate-[spin_25s_linear_infinite_reverse]" />
          {/* 3D Model Canvas */}
          <RobotModel align={align} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
