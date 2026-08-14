import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from './Icons';
import heroArt from '../assets/Me.png';
import cvFile from '../assets/CV/YOMAL RUKSHAN- 2.pdf';

const Hero = () => {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Drag-and-drop / spring-back state for 5 tech icons
  const [draggedIcon, setDraggedIcon] = useState(null);
  const [iconOffsets, setIconOffsets] = useState({
    react: { x: 0, y: 0 },
    js: { x: 0, y: 0 },
    sql: { x: 0, y: 0 },
    spring: { x: 0, y: 0 },
    python: { x: 0, y: 0 }
  });
  const dragStart = useRef({ x: 0, y: 0 });
  const initialOffset = useRef({ x: 0, y: 0 });

  const roles = ['Software Engineer', 'Backend Developer', 'Frontend Developer', 'UI/UX Designer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  const handleMouseMove = (e) => {
    if (draggedIcon) return;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const rx = ((yc - y) / yc) * 10;
    const ry = ((x - xc) / xc) * 10;

    setRotate({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleIconMouseDown = (e, iconId) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedIcon(iconId);
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialOffset.current = { ...iconOffsets[iconId] };
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!draggedIcon) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;

      setIconOffsets(prev => ({
        ...prev,
        [draggedIcon]: {
          x: initialOffset.current.x + dx,
          y: initialOffset.current.y + dy
        }
      }));
    };

    const handleGlobalMouseUp = () => {
      if (!draggedIcon) return;
      const targetIcon = draggedIcon;
      setDraggedIcon(null);

      setIconOffsets(prev => ({
        ...prev,
        [targetIcon]: { x: 0, y: 0 }
      }));
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [draggedIcon]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Glass Sphere Styling Config for 3D sphere effect
  const sphereStyle = {
    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.3) 100%)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.5), inset 4px 4px 10px rgba(255, 255, 255, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)'
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 font-sans cursor-default select-none animate-fade-in"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none z-0" />

      {/* Cyber Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] z-0" />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Clean Typography */}
          <div className="lg:col-span-7 text-left space-y-6 z-20">

            {/* Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />

            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-none">
                Yomal Rukshan
              </h1>
              {/* Typewriter Rotating Subtitle */}
              <div className="h-8 flex items-center">
                <span className="text-lg font-mono font-bold text-indigo-400">
                  &gt; {currentText}
                </span>
                <span className="w-1.5 h-4 bg-indigo-400 ml-1.5 animate-pulse" />
              </div>
            </div>

            {/* Premium Bio */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium max-w-xl">
              I am a results-oriented developer experienced in building scalable digital applications. From designing secure backends with Spring Boot and Node.js to constructing responsive client layers with React and Angular, I deliver clean, documented code.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="text-[10px] font-bold font-mono text-white px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                ☕ Spring Boot
              </span>
              <span className="text-[10px] font-bold font-mono text-white px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                ⚛️ React / Angular
              </span>
              <span className="text-[10px] font-bold font-mono text-white px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                🛢️ MySQL / MongoDB
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-gray-100 text-black font-extrabold text-xs transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                <span>View Creations</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={cvFile}
                download="Yomal_Rukshan_CV.pdf"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-all shadow-lg shadow-indigo-600/35 hover:scale-105 active:scale-95"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-extrabold text-xs transition-all hover:scale-105"
              >
                <span>Get in Touch</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean 3D Parallax Cutout with Real 3D Orbiting & Drag-to-Rubber-Band Tech Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[460px] z-10">

            {/* Large Radial Aura behind the cutout photo */}
            <div
              className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 blur-3xl pointer-events-none transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${rotate.y * 15}px, ${-rotate.x * 15}px)`
              }}
            />

            {/* Orbit Container with 3D perspective tilt */}
            <div
              className="relative w-full max-w-[340px] aspect-[4/5] flex items-end justify-center transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >

              {/* 3D Orbit Plane (Tilted to let badges pass behind/front) */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                style={{
                  transform: 'rotateX(75deg) rotateY(-15deg)',
                  transformStyle: 'preserve-3d'
                }}
              >

                {/* Orbit Path 1 (React, JavaScript, SQL) */}
                <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-white/5" style={{ transformStyle: 'preserve-3d' }} />

                {/* React Badge */}
                <div
                  className="absolute"
                  style={{
                    animation: 'orbit-path-1-react 22s linear infinite',
                    animationPlayState: draggedIcon === 'react' ? 'paused' : 'running',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    onMouseDown={(e) => handleIconMouseDown(e, 'react')}
                    style={{
                      transform: `translate3d(${iconOffsets.react.x}px, ${iconOffsets.react.y}px, 0px)`,
                      transition: draggedIcon === 'react' ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      ...sphereStyle
                    }}
                    className="pointer-events-auto cursor-grab active:cursor-grabbing w-12 h-12 rounded-full flex items-center justify-center select-none hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      alt="React"
                      className="w-7 h-7 select-none pointer-events-none filter drop-shadow-[0_2px_5px_rgba(0,216,255,0.4)]"
                    />
                  </div>
                </div>

                {/* JavaScript Badge */}
                <div
                  className="absolute"
                  style={{
                    animation: 'orbit-path-1-js 22s linear infinite',
                    animationPlayState: draggedIcon === 'js' ? 'paused' : 'running',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    onMouseDown={(e) => handleIconMouseDown(e, 'js')}
                    style={{
                      transform: `translate3d(${iconOffsets.js.x}px, ${iconOffsets.js.y}px, 0px)`,
                      transition: draggedIcon === 'js' ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      ...sphereStyle
                    }}
                    className="pointer-events-auto cursor-grab active:cursor-grabbing w-12 h-12 rounded-full flex items-center justify-center select-none hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="w-7 h-7 select-none pointer-events-none rounded-md filter drop-shadow-[0_2px_5px_rgba(247,223,30,0.4)]"
                    />
                  </div>
                </div>

                {/* SQL Badge */}
                <div
                  className="absolute"
                  style={{
                    animation: 'orbit-path-1-sql 22s linear infinite',
                    animationPlayState: draggedIcon === 'sql' ? 'paused' : 'running',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    onMouseDown={(e) => handleIconMouseDown(e, 'sql')}
                    style={{
                      transform: `translate3d(${iconOffsets.sql.x}px, ${iconOffsets.sql.y}px, 0px)`,
                      transition: draggedIcon === 'sql' ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      ...sphereStyle
                    }}
                    className="pointer-events-auto cursor-grab active:cursor-grabbing w-12 h-12 rounded-full flex items-center justify-center select-none hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                      alt="SQL"
                      className="w-7 h-7 select-none pointer-events-none filter drop-shadow-[0_2px_5px_rgba(0,117,143,0.4)]"
                    />
                  </div>
                </div>

                {/* Orbit Path 2 (Spring Boot, Python) */}
                <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/5" style={{ transformStyle: 'preserve-3d' }} />

                {/* Spring Boot Badge */}
                <div
                  className="absolute"
                  style={{
                    animation: 'orbit-path-2-spring 16s linear infinite',
                    animationPlayState: draggedIcon === 'spring' ? 'paused' : 'running',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    onMouseDown={(e) => handleIconMouseDown(e, 'spring')}
                    style={{
                      transform: `translate3d(${iconOffsets.spring.x}px, ${iconOffsets.spring.y}px, 0px)`,
                      transition: draggedIcon === 'spring' ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      ...sphereStyle
                    }}
                    className="pointer-events-auto cursor-grab active:cursor-grabbing w-12 h-12 rounded-full flex items-center justify-center select-none hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                      alt="Spring Boot"
                      className="w-7 h-7 select-none pointer-events-none filter drop-shadow-[0_2px_5px_rgba(109,179,63,0.4)]"
                    />
                  </div>
                </div>

                {/* Python Badge */}
                <div
                  className="absolute"
                  style={{
                    animation: 'orbit-path-2-python 16s linear infinite',
                    animationPlayState: draggedIcon === 'python' ? 'paused' : 'running',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div
                    onMouseDown={(e) => handleIconMouseDown(e, 'python')}
                    style={{
                      transform: `translate3d(${iconOffsets.python.x}px, ${iconOffsets.python.y}px, 0px)`,
                      transition: draggedIcon === 'python' ? 'none' : 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
                      ...sphereStyle
                    }}
                    className="pointer-events-auto cursor-grab active:cursor-grabbing w-12 h-12 rounded-full flex items-center justify-center select-none hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                      alt="Python"
                      className="w-7 h-7 select-none pointer-events-none filter drop-shadow-[0_2px_5px_rgba(55,118,171,0.4)]"
                    />
                  </div>
                </div>

              </div>

              {/* Standing Cutout Image of Yomal (Positioned in 3D center) */}
              <img
                src={heroArt}
                alt="Yomal Rukshan"
                className="h-full w-auto object-contain filter contrast-105 brightness-105 drop-shadow-[0_20px_40px_rgba(99,102,241,0.18)] z-10 pointer-events-none"
                style={{
                  transform: 'translateZ(1px)',
                }}
              />
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* 
          3D Orbit Math:
          - Ring is tilted with: rotateX(75deg) rotateY(-15deg)
          - To keep icons upright facing the viewer, we counter-rotate them by:
            rotateY(15deg) rotateX(-75deg)
          - To move them in a circle, we spin them using:
            rotate(theta) translate(radius) rotate(-theta)
        */

        /* Outer Orbit (Radius: 145px) */
        @keyframes orbit-path-1-react {
          0% { transform: rotate(0deg) translate(145px) rotate(0deg) rotateY(15deg) rotateX(-75deg); }
          100% { transform: rotate(360deg) translate(145px) rotate(-360deg) rotateY(15deg) rotateX(-75deg); }
        }
        @keyframes orbit-path-1-js {
          0% { transform: rotate(120deg) translate(145px) rotate(-120deg) rotateY(15deg) rotateX(-75deg); }
          100% { transform: rotate(480deg) translate(145px) rotate(-480deg) rotateY(15deg) rotateX(-75deg); }
        }
        @keyframes orbit-path-1-sql {
          0% { transform: rotate(240deg) translate(145px) rotate(-240deg) rotateY(15deg) rotateX(-75deg); }
          100% { transform: rotate(600deg) translate(145px) rotate(-600deg) rotateY(15deg) rotateX(-75deg); }
        }

        /* Inner Orbit (Radius: 100px) - Rotating in opposite direction */
        @keyframes orbit-path-2-spring {
          0% { transform: rotate(360deg) translate(100px) rotate(-360deg) rotateY(15deg) rotateX(-75deg); }
          100% { transform: rotate(0deg) translate(100px) rotate(0deg) rotateY(15deg) rotateX(-75deg); }
        }
        @keyframes orbit-path-2-python {
          0% { transform: rotate(180deg) translate(100px) rotate(-180deg) rotateY(15deg) rotateX(-75deg); }
          100% { transform: rotate(-180deg) translate(100px) rotate(180deg) rotateY(15deg) rotateX(-75deg); }
        }
      `}</style>

    </section>
  );
};

export default Hero;
