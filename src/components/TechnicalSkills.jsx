import React, { useState, useEffect } from 'react';

// Tech SVG Imports
import reactSvg from '../assets/icon/react.svg';
import jsSvg from '../assets/icon/javascript.svg';
import tsSvg from '../assets/icon/typescript.svg';
import javaSvg from '../assets/icon/java.svg';
import springSvg from '../assets/icon/springboot.svg';
import nodeSvg from '../assets/icon/nodejs.svg';
import flutterSvg from '../assets/icon/flutter.svg';
import mysqlSvg from '../assets/icon/mysql.svg';
import mongoSvg from '../assets/icon/mongodb.svg';
import tailwindSvg from '../assets/icon/tailwindcss.svg';
import gitSvg from '../assets/icon/git.svg';
import postmanSvg from '../assets/icon/postman.svg';
import dartSvg from '../assets/icon/dart.svg';
import phpSvg from '../assets/icon/php.svg';
import html5Svg from '../assets/icon/html5.svg';
import css3Svg from '../assets/icon/css3.svg';
import angularSvg from '../assets/icon/angular.svg';
import nextjsSvg from '../assets/icon/nextjs.svg';
import bootstrapSvg from '../assets/icon/bootstrap.svg';
import expressSvg from '../assets/icon/express.svg';
import supabaseSvg from '../assets/icon/supabase.svg';
import linuxSvg from '../assets/icon/linux.svg';
import vscodeSvg from '../assets/icon/vscode.svg';
import oauthSvg from '../assets/icon/oauth.svg';
import openapiSvg from '../assets/icon/openapi.svg';

const TechnicalSkills = () => {
  const [activeFile, setActiveFile] = useState('Languages.js');
  const [terminalLogs, setTerminalLogs] = useState([
    'Initializing skill diagnostics analyzer...',
    'Scanning local system dependencies...',
    'Rukshan-OS v1.4.2 loaded successfully.'
  ]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isLight, setIsLight] = useState(document.documentElement.classList.contains('light'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains('light'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const fileData = {
    'Languages.js': {
      title: 'Core Programming Languages',
      color: isLight ? '#6d28d9' : '#a78bfa',
      skills: [
        { name: 'JavaScript', level: 92, type: 'Dynamic', use: 'Web / App Logic', icon: jsSvg },
        { name: 'TypeScript', level: 85, type: 'Typed', use: 'Type-safe React', icon: tsSvg },
        { name: 'Java', level: 90, type: 'Compiled', use: 'Enterprise OOP / API', icon: javaSvg },
        { name: 'Dart', level: 80, type: 'Compiled', use: 'Cross-platform Flutter', icon: dartSvg },
        { name: 'PHP', level: 75, type: 'Server-side', use: 'Legacy Web / MVC', icon: phpSvg }
      ]
    },
    'Frontend.css': {
      title: 'User Interface Engineering',
      color: isLight ? '#0284c7' : '#38bdf8',
      skills: [
        { name: 'React.js', level: 95, type: 'Library', use: 'Modular UI Rendering', icon: reactSvg },
        { name: 'Flutter', level: 85, type: 'Framework', use: 'Mobile Native Widgets', icon: flutterSvg },
        { name: 'Angular', level: 80, type: 'Framework', use: 'Digitized Portals', icon: angularSvg },
        { name: 'Tailwind CSS', level: 92, type: 'Styling', use: 'Rapid Utility Styling', icon: tailwindSvg },
        { name: 'Next.js', level: 78, type: 'SSG/SSR', use: 'SEO Optimized Framework', icon: nextjsSvg }
      ]
    },
    'Backend.go': {
      title: 'Server Logic & Architecture',
      color: isLight ? '#047857' : '#4ade80',
      skills: [
        { name: 'Spring Boot', level: 92, type: 'Microservice', use: 'REST APIs & JWT Auth', icon: springSvg },
        { name: 'Node.js', level: 88, type: 'Runtime', use: 'Event-driven Services', icon: nodeSvg },
        { name: 'Express.js', level: 85, type: 'Framework', use: 'Routing & Middleware', icon: expressSvg },
        { name: 'REST APIs', level: 93, type: 'Protocol', use: 'JSON Data Transport', icon: openapiSvg }
      ]
    },
    'Database.sql': {
      title: 'Storage & Schema Systems',
      color: isLight ? '#c2410c' : '#fb923c',
      skills: [
        { name: 'MySQL', level: 90, type: 'Relational', use: 'Structured Storage', icon: mysqlSvg },
        { name: 'MongoDB', level: 85, type: 'Document Store', use: 'Unstructured Data', icon: mongoSvg },
        { name: 'Supabase', level: 80, type: 'BaaS', use: 'Real-time Postgres Backend', icon: supabaseSvg }
      ]
    },
    'Workflow.config': {
      title: 'DevOps & Development Tooling',
      color: isLight ? '#be185d' : '#f472b6',
      skills: [
        { name: 'Git & GitHub', level: 92, type: 'VCS', use: 'Team Collaboration', icon: gitSvg },
        { name: 'Linux / Bash', level: 85, type: 'OS/Shell', use: 'Scripting & Environments', icon: linuxSvg },
        { name: 'Postman', level: 90, type: 'API Client', use: 'Endpoint Diagnostics', icon: postmanSvg },
        { name: 'VS Code', level: 95, type: 'IDE', use: 'Primary Workspace', icon: vscodeSvg }
      ]
    }
  };

  useEffect(() => {
    // Set default selected skill when changing file
    if (fileData[activeFile]) {
      setSelectedSkill(fileData[activeFile].skills[0]);
    }

    // Add terminal log
    setTerminalLogs(prev => [
      ...prev,
      `cat src/components/skills/${activeFile}`,
      `Rendering skills index for ${activeFile.split('.')[0]}... OK`
    ].slice(-6));
  }, [activeFile]);

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-slate-950 font-sans">
      {/* Dynamic ambient backgrounds */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full opacity-10 blur-[130px] pointer-events-none transition-all duration-700"
        style={{ backgroundColor: fileData[activeFile].color }}
      ></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white font-anton uppercase">
            Developer Workspace
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* IDE Container */}
        <div className="max-w-5xl mx-auto bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 md:h-[580px]">
          
          {/* 1. SIDEBAR (File Explorer) */}
          <div className="md:col-span-3 bg-[#070b13] border-b md:border-b-0 md:border-r border-white/10 p-4 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4 select-none">
                📁 File Explorer
              </div>
              <div className="space-y-1.5">
                {Object.keys(fileData).map((fileName) => {
                  const isActive = fileName === activeFile;
                  const data = fileData[fileName];
                  return (
                    <button
                      key={fileName}
                      onClick={() => setActiveFile(fileName)}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                        isActive
                          ? 'bg-white/10 text-white shadow-md'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-sm" style={{ color: data.color }}>
                        📄
                      </span>
                      <span className="truncate">{fileName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 hidden md:block">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span>Workspace: Active</span>
              </div>
            </div>
          </div>

          {/* 2. MAIN CODE AREA (Center Editor) */}
          <div className="md:col-span-5 flex flex-col justify-between bg-[#080d16] p-5 border-b md:border-b-0 md:border-r border-white/10">
            <div>
              {/* File Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                <span className="text-xs font-bold text-gray-300 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fileData[activeFile].color }} />
                  {activeFile}
                </span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                  Editor Mode
                </span>
              </div>

              {/* Code display */}
              <div className="font-mono text-[11px] leading-relaxed space-y-3.5 text-gray-300 max-h-[380px] overflow-y-auto pr-1">
                <div className="text-gray-500 font-medium italic">// {fileData[activeFile].title}</div>
                {fileData[activeFile].skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      className={`cursor-pointer p-2.5 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-white/5 border-white/15 text-white shadow-sm'
                          : 'border-transparent hover:bg-white/3'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold mb-1">
                        <span className="flex items-center gap-2" style={{ color: isSelected ? fileData[activeFile].color : 'var(--text-color)' }}>
                          <img src={skill.icon} alt="" className="w-4 h-4 object-contain" />
                          const <span className="text-purple-400">{skill.name.replace(/[^a-zA-Z]/g, '')}</span> = {'{'}
                        </span>
                        <span className="text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="pl-4 text-gray-400 text-[10px]">
                        <div>type: <span className="text-amber-300">"{skill.type}"</span>,</div>
                        <div>useCase: <span className="text-cyan-300">"{skill.use}"</span></div>
                      </div>
                      <div className="font-bold">{'};'}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Micro Terminal Bar */}
            <div className="mt-4 pt-4 border-t border-white/5 bg-slate-950/50 p-2.5 rounded-xl font-mono text-[9px] text-gray-400 space-y-0.5">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="truncate">
                  <span className="text-purple-400">rukshan@desktop:~$</span> {log}
                </div>
              ))}
            </div>
          </div>

          {/* 3. PREVIEW & ANALYTICS PANEL (Right Panel) */}
          <div className="md:col-span-4 bg-[#090e18] p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4 select-none">
                📊 Skill Diagnostics
              </div>

              {selectedSkill ? (
                <div className="space-y-6">
                  {/* Skill name & badge */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 flex items-center gap-2.5">
                      <img src={selectedSkill.icon} alt="" className="w-6 h-6 object-contain" />
                      {selectedSkill.name}
                    </h4>
                    <span 
                      className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                      style={{ 
                        color: fileData[activeFile].color, 
                        borderColor: `${fileData[activeFile].color}40`,
                        backgroundColor: `${fileData[activeFile].color}15`
                      }}
                    >
                      {selectedSkill.type}
                    </span>
                  </div>

                  {/* Meter Gauge */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400">Proficiency</span>
                      <span style={{ color: fileData[activeFile].color }}>{selectedSkill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${selectedSkill.level}%`,
                          backgroundColor: fileData[activeFile].color
                        }}
                      />
                    </div>
                  </div>

                  {/* Details metadata */}
                  <div className="space-y-4 pt-2">
                    <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">Primary Target</div>
                      <div className="text-xs font-semibold text-gray-200">{selectedSkill.use}</div>
                    </div>

                    {/* Large Floating Glowing Tech Icon Display */}
                    <div className="flex justify-center items-center py-4">
                      <div className="relative group">
                        {/* Glow effect */}
                        <div 
                          className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"
                          style={{ 
                            backgroundColor: fileData[activeFile].color,
                            transform: 'scale(1.2)'
                          }}
                        />
                        {/* Circle Badge */}
                        <div className="relative w-28 h-28 rounded-full bg-white border border-white/10 flex items-center justify-center shadow-[0_10px_35px_rgba(255,255,255,0.08)] animate-float">
                          <img 
                            src={selectedSkill.icon} 
                            alt={selectedSkill.name} 
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-gray-500 text-xs">
                  Select a skill inside the editor to inspect diagnostics.
                </div>
              )}
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-3 mt-6">
              <div className="text-center p-2.5 bg-slate-950/30 rounded-xl border border-white/5">
                <span className="block text-lg font-bold text-white">21+</span>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Technologies</span>
              </div>
              <div className="text-center p-2.5 bg-slate-950/30 rounded-xl border border-white/5">
                <span className="block text-lg font-bold text-white">90%</span>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Target Avg</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Icon Marquee Section (Below IDE box) */}
        <div className="mt-16 relative max-w-5xl mx-auto w-full overflow-hidden py-4 select-none">
          {/* Subtle side fading gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <div className="flex whitespace-nowrap marquee-track">
            {/* Double the list for seamless looping */}
            {[...allMarqueeTechs, ...allMarqueeTechs].map((tech, i) => (
              <div key={i} className="marquee-item">
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-[0_6px_24px_rgba(255,255,255,0.06)] border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] cursor-pointer"
                  title={tech.name}
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .marquee-item {
          width: 10vw;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .marquee-item {
            width: 102.4px; /* 1024px / 10 */
          }
        }
      `}} />
    </section>
  );
};

// Data list for marquee
const allMarqueeTechs = [
  { name: 'React.js', icon: reactSvg },
  { name: 'JavaScript', icon: jsSvg },
  { name: 'TypeScript', icon: tsSvg },
  { name: 'Java', icon: javaSvg },
  { name: 'Spring Boot', icon: springSvg },
  { name: 'Node.js', icon: nodeSvg },
  { name: 'Flutter', icon: flutterSvg },
  { name: 'MySQL', icon: mysqlSvg },
  { name: 'MongoDB', icon: mongoSvg },
  { name: 'Tailwind CSS', icon: tailwindSvg },
  { name: 'Git', icon: gitSvg },
  { name: 'Postman', icon: postmanSvg }
];

export default TechnicalSkills;
