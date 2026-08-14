import React from 'react';
import { ArrowUp, Heart, Sparkles, Github, Mail } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 backdrop-blur-md pt-16 pb-10 overflow-hidden">
      {/* Decorative Glow Blob */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Visual Separator Grid */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-50 z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">

          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-2 select-none">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="font-extrabold text-lg tracking-wider text-white bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                YOMAL RUKSHAN
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-medium max-w-sm">
              Creative full-stack developer specializing in high-end, responsive react interfaces, backend API services, and immersive interactive graphics.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/rukshanyomal11"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yomal-rukshan-a24635305/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:rukshanyomal11@gmail.com"
                title="Send Email"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 mb-4 font-mono">
              Quick Links
            </span>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-all font-semibold select-none text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                </button>
              ))}
            </div>
          </div>



        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 relative">

          {/* Logo and Credits */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <p className="text-[10px] text-gray-500 font-semibold uppercase">
              Designed & Developed by Yomal Rukshan
            </p>
            <p className="text-[9px] text-gray-600 font-medium uppercase mt-0.5">
              Made with <Heart className="w-3 h-3 inline text-red-500 fill-red-500 animate-pulse mx-0.5" /> in Sri Lanka © {new Date().getFullYear()}
            </p>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="group relative p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10 active:scale-95"
          >
            <ArrowUp className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 rounded-full border border-indigo-500/30 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
