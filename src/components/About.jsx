import React, { useState } from 'react';
import profileImg from '../assets/Me.png';
import { Sparkles, MapPin, User, Mail, MessageSquare } from './Icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('brief');

  const dossierData = {
    brief: {
      code: 'SEC-LOG // 101',
      title: 'INTEL BRIEFING',
      subtitle: 'Mission statement & profile overview',
      content: 'A highly motivated Full-Stack Developer focusing on structural reliability and secure backend patterns. Specializes in building RESTful services (Spring Boot, Node.js) and integrating responsive single-page web apps (React, Angular). Dedicated to architectural patterns, automated code testing, and clean database structures.',
      bullets: [
        { label: 'System Class', value: 'Full-Stack Software Engineer' },
        { label: 'Location Base', value: 'Walasmulla, Sri Lanka' },
        { label: 'Availability', value: 'Active / Immediate placement' }
      ]
    },
    logs: {
      code: 'SEC-LOG // 204',
      title: 'INFIELD LOGISTICS',
      subtitle: 'Sri Lanka Ports Authority (SLPA) record',
      content: 'Contributed to the development of the Electronic Document Digitisation System (EDDS) within the Information Systems division. Architected secure role authorization guards, structured complex relational database schemas, and linked AngularJS modules with Spring Boot backend APIs.',
      bullets: [
        { label: 'Assigned Role', value: 'Software Engineering Intern' },
        { label: 'Active Service', value: '6 Months (Jan - Jul 2026)' },
        { label: 'Key Stack', value: 'Spring Boot, MySQL, AngularJS, TS' }
      ]
    },
    academic: {
      code: 'SEC-LOG // 308',
      title: 'ACADEMIC Dossier',
      subtitle: 'University of Moratuwa (ITUM) log',
      content: 'Completed rigorous curriculum focusing on relational database normalization (DBMS), object-oriented design patterns (OOP), data structures, and computer networking foundations. Actively built internal prototypes and collaborative software projects.',
      bullets: [
        { label: 'Affiliation', value: 'ITUM, University of Moratuwa' },
        { label: 'Academics', value: 'National Diploma in Technology' },
        { label: 'Core Study', value: 'Software Architecture & Algorithms' }
      ]
    }
  };

  const activeDossier = dossierData[activeTab];

  return (
    <section 
      id="about" 
      className="relative py-28 overflow-hidden bg-slate-950 font-sans"
    >
      {/* Background neon ambient grids */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Cyberpunk grid background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] z-0" />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Dossier
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white font-anton uppercase">
            Security Dossier
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Security Access Dossier Widget */}
        <div className="max-w-4xl mx-auto bg-[#080d16]/75 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl relative">
          
          {/* Laser Line Scanning Effect on Top corners */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />

          {/* 1. Header Access Status Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-dashed border-white/10 pb-8 mb-8">
            
            {/* Left: Scan Face photo (span 4) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-white/15 p-1 bg-slate-900/60 group">
                <img 
                  src={profileImg} 
                  alt="Yomal Rukshan" 
                  className="w-full h-full object-cover object-top rounded-xl filter contrast-125"
                />
                {/* Scanner Glowing Line animation */}
                <div className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_8px_#34d399] opacity-75 top-0 animate-scanner pointer-events-none" />
                
                <style>{`
                  @keyframes scan {
                    0%, 100% { top: 0%; }
                    50% { top: 100%; }
                  }
                  .animate-scanner {
                    animation: scan 4s linear infinite;
                  }
                `}</style>
              </div>
            </div>

            {/* Right: Security metadata (span 8) */}
            <div className="md:col-span-8 text-left space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  SYSTEM LEVEL: CLEARANCE LEVEL 02
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500">
                  ID: YR-1124
                </span>
              </div>

              <h3 className="text-3xl font-black text-white font-anton uppercase tracking-wide">
                Yomal Rukshan
              </h3>

              {/* Status metrics grid */}
              <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-gray-400 border-t border-white/5 pt-4">
                <div>
                  <span className="block text-gray-600 font-bold uppercase tracking-wider">SYSTEM STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                    ● ACTIVE
                  </span>
                </div>
                <div>
                  <span className="block text-gray-600 font-bold uppercase tracking-wider">NETWORK NODE</span>
                  <span className="text-white font-bold mt-0.5 block truncate">
                    SECURE GATEWAY
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 2. Dossier navigation tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start font-mono text-[10px] mb-8">
            <button 
              onClick={() => setActiveTab('brief')}
              className={`px-4 py-2 rounded-xl border transition-all duration-300 font-bold uppercase tracking-wider ${
                activeTab === 'brief' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              [ 01. INTEL BRIEFING ]
            </button>
            <button 
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-2 rounded-xl border transition-all duration-300 font-bold uppercase tracking-wider ${
                activeTab === 'logs' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              [ 02. INFIELD LOGS ]
            </button>
            <button 
              onClick={() => setActiveTab('academic')}
              className={`px-4 py-2 rounded-xl border transition-all duration-300 font-bold uppercase tracking-wider ${
                activeTab === 'academic' 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              [ 03. ACADEMIC RECORD ]
            </button>
          </div>

          {/* 3. Output Log display block */}
          <div className="bg-slate-950/60 border border-white/5 rounded-3xl p-6 sm:p-8 text-left transition-all duration-500">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none">
              <span className="font-mono text-[9px] font-bold text-gray-600">
                {activeDossier.code}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                {activeDossier.title}
              </span>
            </div>

            <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
              {activeDossier.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3 font-medium">
              {activeDossier.content}
            </p>

            {/* Bullets grid */}
            <div className="mt-8 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px]">
              {activeDossier.bullets.map((bullet, idx) => (
                <div key={idx} className="bg-[#0b101b]/40 p-3.5 rounded-xl border border-white/5">
                  <span className="block text-gray-600 font-bold uppercase tracking-wider">{bullet.label}</span>
                  <span className="text-white font-bold mt-1 block truncate">{bullet.value}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
