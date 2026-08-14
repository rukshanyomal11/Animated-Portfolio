import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Cpu, Briefcase, Award, Mail, Menu, X, Sparkles, Sun, Moon } from './Icons';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const [isLightMode, setIsLightMode] = useState(false);
  const navRef = useRef(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light');
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for navbar height

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium, soft 3D Tilt effect
  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const rect = nav.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const rx = -(y - yc) / yc * 6; // slightly softer tilt
    const ry = (x - xc) / xc * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.005, 1.005, 1.005)`,
      transition: 'transform 0.15s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s ease-in-out',
    });
  };

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
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-24 flex items-center justify-center pointer-events-none">
        
        {/* Sleek Floating Capsule Navbar */}
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
          className="w-[92%] max-w-5xl h-14 pointer-events-auto bg-slate-950/70 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.15)] relative transition-all duration-500 ease-out"
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-emerald-500/5 rounded-full pointer-events-none" />

          <div className="relative z-10 w-full flex items-center justify-between">
            
            {/* Brand Logo with pulse indicator */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 cursor-pointer group select-none"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </div>
              <span className="font-mono text-xs font-black tracking-widest text-white uppercase transition-colors group-hover:text-indigo-400">
                Yomal
              </span>
              <span className="font-mono text-[9px] font-bold text-gray-500 tracking-wider">// PORTFOLIO</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 p-1 bg-white/5 border border-white/5 rounded-full">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase transition-all duration-300 relative flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white bg-indigo-600/30 border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'text-indigo-400 rotate-6 scale-110' : 'text-gray-400 group-hover:scale-105'}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-indigo-400 rounded-full shadow-[0_0_8px_#818cf8]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Tools */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-300 hover:text-white hover:scale-105 active:scale-95"
              >
                {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              {/* Mobile Nav Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 z-50 p-5 bg-slate-950/95 backdrop-blur-xl rounded-3xl animate-fade-in border border-white/10 shadow-2xl pointer-events-auto">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600/20 to-indigo-500/20 border-indigo-500/40 text-white shadow-lg shadow-indigo-600/10'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-indigo-600/30 text-indigo-400' : 'bg-white/5 text-gray-500'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                  </div>
                </button>
              );
            })}
            
            <div className="h-[1px] bg-white/10 my-1"></div>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between p-3.5 rounded-2xl border bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/5 text-gray-500">
                  {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </div>
                <span className="font-semibold text-sm tracking-wide">{isLightMode ? "Dark Mode" : "Light Mode"}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Theme</span>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
