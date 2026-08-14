import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Github } from './Icons';

// ─── Image imports ─────────────────────────────────────────────────────────────
import cb1 from '../assets/CineBook/1.png';
import cb2 from '../assets/CineBook/2.png';
import cb3 from '../assets/CineBook/3.png';
import cb4 from '../assets/CineBook/4.png';
import cb5 from '../assets/CineBook/5.png';
import cb6 from '../assets/CineBook/6.png';
import cb7 from '../assets/CineBook/7.png';
import cb8 from '../assets/CineBook/8.png';
import cb9 from '../assets/CineBook/9.png';
import ch1 from '../assets/CeylonHomes/1.png';
import ch2 from '../assets/CeylonHomes/2.png';
import ch3 from '../assets/CeylonHomes/3.png';
import ch4 from '../assets/CeylonHomes/4.png';
import aq1 from '../assets/AquaLink/1.png';
import aq2 from '../assets/AquaLink/2.png';
import aq3 from '../assets/AquaLink/3.png';
import aq4 from '../assets/AquaLink/4.png';
import a51_1 from '../assets/AREA 51/1.png';
import a51_2 from '../assets/AREA 51/2.png';
import a51_3 from '../assets/AREA 51/3.png';
import a51_4 from '../assets/AREA 51/4.png';
import bb1 from '../assets/BusBooking/1.png';
import fm1 from '../assets/Farmer/1.png';
import fm2 from '../assets/Farmer/2.png';
import fm3 from '../assets/Farmer/3.png';
import fm4 from '../assets/Farmer/4.png';
import bu1 from '../assets/BloodUnity/1.png';
import wc1 from '../assets/Web Conference Management/1.png';
import wa1 from '../assets/WatherApp/1.png';

// ─── Projects data ─────────────────────────────────────────────────────────────
const projects = [
  { id:1, emoji:'🎬', badge:'Mobile & Web', title:'CineBooking', subtitle:'Movie Ticket Booking App',
    desc:'Cross-platform movie ticket booking with real-time seat selection, Stripe payments, QR tickets, trailer viewing, and a live support chat admin portal.',
    tech:['Flutter','React','Supabase','Stripe','Dart'],
    links:[{label:'Mobile App',url:'https://github.com/rukshanyomal11/Movie-App-Mobile'},{label:'Admin Web',url:'https://github.com/rukshanyomal11/Movie-App-Mobile-Web'}],
    images:[cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8,cb9], color:'#7c3aed' },
  { id:2, emoji:'🏠', badge:'Full-Stack Web', title:'CeylonHomes', subtitle:'Property Rent & Sale Platform',
    desc:'Real estate platform for Sri Lanka with listings, photo uploads, seller dashboards, and admin audit-trailed approval workflows.',
    tech:['React','Spring Boot','MySQL','JWT','Tailwind'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/CeylonHomes'}],
    images:[ch1,ch2,ch3,ch4], color:'#0891b2' },
  { id:3, emoji:'🐠', badge:'Multi-Role', title:'AquaLink', subtitle:'Ornamental Fish Platform',
    desc:'Supply chain platform connecting fish farms, buyers, exporters with NAQDA verification and live transport bidding.',
    tech:['React','Chakra UI','Spring Boot','MySQL','Spring Security'],
    links:[{label:'Source Code',url:'https://github.com/anjanamadushan310/Final-Project---Aqualink-'}],
    images:[aq1,aq2,aq3,aq4], color:'#0284c7' },
  { id:4, emoji:'👕', badge:'E-Commerce', title:'Area51', subtitle:'Clothing Website',
    desc:'Fashion e-commerce with catalog browsing, cart management, and full admin controls for clothing inventory.',
    tech:['React','Tailwind CSS','MongoDB','JavaScript'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/Area51'}],
    images:[a51_1,a51_2,a51_3,a51_4], color:'#dc2626' },
  { id:5, emoji:'🚌', badge:'Ticketing', title:'BusBooking', subtitle:'Bus Ticket Booking App',
    desc:'Full-stack bus ticketing with real-time seat maps, automated confirmations, and comprehensive admin route management.',
    tech:['React','Tailwind CSS','MongoDB','JavaScript'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/BusBooking'}],
    images:[bb1], color:'#d97706' },
  { id:6, emoji:'🌾', badge:'Agri-Tech', title:'FarmTech', subtitle:'Farm Management System',
    desc:'Multi-role agri platform for crops, livestock, inventory and staff with real-time alerts and financial tracking.',
    tech:['React','Node.js','MySQL','Socket.io','Express'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/Farm-management-system'}],
    images:[fm1,fm2,fm3,fm4], color:'#16a34a' },
  { id:7, emoji:'🩸', badge:'Healthcare', title:'BloodUnity', subtitle:'Blood Donation System',
    desc:'Donation management with donor registration, appointment scheduling, and real-time blood stock tracking.',
    tech:['PHP','MySQL','JavaScript','Bootstrap','HTML'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/BloodUnity-Blood-Donation-Management-System'}],
    images:[bu1], color:'#e11d48' },
  { id:8, emoji:'🔷', badge:'Event Mgmt', title:'ConfMan', subtitle:'Conference Management',
    desc:'Conference portal with online registration, QR check-in codes, and personalized session preference dashboards.',
    tech:['HTML','PHP','MySQL','CSS','JavaScript'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/Web-Based-Conference-Day-Management-System'}],
    images:[wc1], color:'#4f46e5' },
  { id:9, emoji:'🌤️', badge:'Dashboard', title:'WeatherApp', subtitle:'Interactive Weather Dashboard',
    desc:'Modern weather dashboard with SVG charts, city comparison, PDF reports, and astronomical trackers via OpenWeatherMap.',
    tech:['React','Vite','JavaScript','Tailwind','OpenWeatherMap'],
    links:[{label:'Source Code',url:'https://github.com/rukshanyomal11/Weather-App'}],
    images:[wa1], color:'#0ea5e9' },
];

// ─── Image Detail Modal ─────────────────────────────────────────────────────────
const Modal = ({ project, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => { setImgIdx(0); }, [project]);
  // Hide navbar when modal is open
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 9999 }} onClick={onClose}>
      {/* Backdrop — covers navbar too */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

      {/* Modal panel */}
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl"
        style={{ zIndex: 10000, boxShadow: `0 0 80px ${project.color}35` }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top Close pill button */}
        <button
          onClick={onClose}
          className="modal-close-btn absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95"
          style={{ 
            background: 'rgba(15, 23, 42, 0.85)', 
            backdropFilter: 'blur(8px)', 
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)', 
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}
        >✕ Close</button>

        {/* Big image */}
        <div className="relative bg-black overflow-hidden rounded-t-2xl" style={{ aspectRatio: '16/9' }}>
          <img
            key={imgIdx}
            src={project.images[imgIdx]}
            alt=""
            className="w-full h-full object-cover"
            style={{ animation: 'modalFadeIn .25s ease' }}
          />
          {project.images.length > 1 && (
            <>
              <button onClick={() => setImgIdx(i => (i - 1 + project.images.length) % project.images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white text-xl flex items-center justify-center transition-all shadow-lg">‹</button>
              <button onClick={() => setImgIdx(i => (i + 1) % project.images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white text-xl flex items-center justify-center transition-all shadow-lg">›</button>
            </>
          )}
          <span className="absolute bottom-2 right-2 text-[9px] font-bold bg-black/60 text-white/70 px-2 py-0.5 rounded-full">
            {imgIdx + 1} / {project.images.length}
          </span>
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-1.5 px-4 py-2.5 overflow-x-auto bg-black/30" style={{ scrollbarWidth: 'none' }}>
            {project.images.map((img, i) => (
              <button key={i} onClick={() => setImgIdx(i)}
                className="flex-shrink-0 w-14 h-9 rounded-md overflow-hidden border-2 transition-all"
                style={{ borderColor: i === imgIdx ? project.color : 'rgba(255,255,255,0.06)' }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl mt-0.5">{project.emoji}</span>
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                style={{ color: project.color, background: `${project.color}18`, borderColor: `${project.color}35` }}>
                {project.badge}
              </span>
              <h2 className="text-white text-xl font-bold mt-0.5">{project.title}</h2>
              <p className="text-white/40 text-xs">{project.subtitle}</p>
            </div>
          </div>
          <p className="text-white/65 text-sm leading-relaxed mb-4">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/7 border border-white/10 text-white/60">{t}</span>
            ))}
          </div>

          {/* Action buttons row */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95"
                style={i === 0
                  ? { background: project.color, color: '#fff', boxShadow: `0 4px 16px ${project.color}40` }
                  : { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }
                }>
                <Github className="w-3.5 h-3.5" />{l.label}
              </a>
            ))}


          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn { from { opacity:0; transform:scale(.97) } to { opacity:1; transform:scale(1) } }
        body.modal-open header { z-index: 1 !important; }
        .modal-close-btn:hover {
          background: #ef4444 !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.45) !important;
        }
      `}</style>
    </div>
  );
};

// ─── 3D Fan Carousel ───────────────────────────────────────────────────────────
const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modal, setModal] = useState(null);
  const autoRef = useRef(null);
  const total = projects.length;

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const totalDragDistanceRef = useRef(0);
  const threshold = 60; // 60px drag to shift 1 card

  // Auto-rotate
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveIdx(i => (i + 1) % total);
    }, 3000);
    return () => clearInterval(autoRef.current);
  }, [total]);

  const goTo = useCallback((i) => {
    clearInterval(autoRef.current);
    setActiveIdx(i);
    // Restart auto after pause
    autoRef.current = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % total);
    }, 3000);
  }, [total]);

  const prev = () => goTo((activeIdx - 1 + total) % total);
  const next = () => goTo((activeIdx + 1) % total);

  const activeProject = projects[activeIdx];

  // Drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Left click only
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    totalDragDistanceRef.current = 0;
    clearInterval(autoRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX;
    const deltaX = currentX - startXRef.current;
    totalDragDistanceRef.current += Math.abs(deltaX);

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Dragged right -> show previous card (rotate left)
        setActiveIdx(prevIdx => (prevIdx - 1 + total) % total);
      } else {
        // Dragged left -> show next card (rotate right)
        setActiveIdx(prevIdx => (prevIdx + 1) % total);
      }
      startXRef.current = currentX; // Reset to allow continuous dragging
    }
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      // Restart auto-rotation
      clearInterval(autoRef.current);
      autoRef.current = setInterval(() => {
        setActiveIdx(prevIdx => (prevIdx + 1) % total);
      }, 3000);
    }
  };

  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    totalDragDistanceRef.current = 0;
    clearInterval(autoRef.current);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    totalDragDistanceRef.current += Math.abs(deltaX);

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        setActiveIdx(prevIdx => (prevIdx - 1 + total) % total);
      } else {
        setActiveIdx(prevIdx => (prevIdx + 1) % total);
      }
      startXRef.current = currentX;
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-slate-950 select-none">
      <style>{`
        .font-anton { font-family: 'Anton', sans-serif; }
        .fan-scene { perspective: 1200px; }
        .fan-card { transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1); transform-style: preserve-3d; }
        .fan-card img { pointer-events: none; user-select: none; }
      `}</style>

      {/* Dynamic ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] transition-all duration-1000"
          style={{ background: `${activeProject.color}22` }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
            Projects
          </span>
          <h2 className="font-anton text-5xl sm:text-6xl font-extrabold mt-4 text-white uppercase tracking-tight">
            Product Showcase
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* ── 3D FAN ── */}
        <div 
          className="fan-scene relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing" 
          style={{ height: '420px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {projects.map((p, i) => {
            const offset = i - activeIdx;
            // Normalize offset to keep in range [-half, half]
            let norm = offset;
            if (norm > total / 2) norm -= total;
            if (norm < -total / 2) norm += total;

            const absNorm = Math.abs(norm);
            const isActive = norm === 0;
            const isVisible = absNorm <= 4;

            // Fan arc: each card rotated on Y and shifted
            const rotateY = norm * 18;        // degrees
            const translateX = norm * 130;    // px
            const translateZ = isActive ? 80 : Math.max(0, 80 - absNorm * 50);
            const translateY = absNorm * 18;  // cards arc downward
            const scale = isActive ? 1.08 : Math.max(0.6, 1 - absNorm * 0.12);
            const opacity = isActive ? 1 : Math.max(0.15, 1 - absNorm * 0.22);
            const zIndex = isActive ? 50 : Math.max(1, 20 - absNorm * 5);

            if (!isVisible) return null;

            return (
              <div
                key={p.id}
                className="fan-card absolute cursor-pointer animate-none"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  width: '280px',
                }}
                onClick={(e) => {
                  if (totalDragDistanceRef.current > 12) {
                    e.preventDefault();
                    return; // Ignore clicks if dragging
                  }
                  if (isActive) {
                    setModal(p);
                  } else {
                    goTo(i);
                  }
                }}
              >
                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: isActive
                      ? `0 20px 60px ${p.color}50, 0 0 0 2px ${p.color}60`
                      : '0 8px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Screenshot */}
                  <div className="relative" style={{ aspectRatio: '16/10' }}>
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Photo count */}
                    {p.images.length > 1 && (
                      <span className="absolute top-2 right-2 text-[9px] font-bold bg-black/60 text-white/80 px-1.5 py-0.5 rounded-full">
                        {p.images.length} 📷
                      </span>
                    )}
                    {/* Active glow ring */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-t-2xl border-2 pointer-events-none" style={{ borderColor: p.color }} />
                    )}
                  </div>

                  {/* Info bar */}
                  <div className="bg-[#111827] px-3.5 py-3 border-t border-white/5">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm">{p.emoji}</span>
                      <span className="text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-full" style={{ color: p.color, background: `${p.color}20` }}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-white font-bold text-xs leading-tight">{p.title}</p>
                    <p className="text-white/35 text-[10px] truncate">{p.subtitle}</p>
                  </div>
                </div>

                {/* "Click to view" hint on active */}
                {isActive && (
                  <div className="text-center mt-2">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest animate-pulse">
                      Click to view details
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active project details strip */}
        <div className="mt-8 max-w-xl mx-auto text-center transition-all duration-500">
          <span
            className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border"
            style={{ color: activeProject.color, background: `${activeProject.color}18`, borderColor: `${activeProject.color}35` }}
          >{activeProject.badge}</span>
          <h3 className="text-white font-bold text-xl mt-2">{activeProject.emoji} {activeProject.title}</h3>
          <p className="text-white/45 text-xs mt-1">{activeProject.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {activeProject.tech.map((t,i) => (
              <span key={i} className="text-[9px] font-semibold px-2 py-0.5 rounded bg-white/7 border border-white/10 text-white/55">{t}</span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white text-xl transition-all flex items-center justify-center">‹</button>

          {/* Dot strip */}
          <div className="flex gap-1.5">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? '20px' : '6px',
                  height: '6px',
                  background: i === activeIdx ? activeProject.color : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button onClick={next} className="w-10 h-10 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white text-xl transition-all flex items-center justify-center">›</button>
        </div>

        {/* Project counter */}
        <p className="text-center text-white/25 text-xs mt-3 font-mono">{activeIdx + 1} / {total}</p>
      </div>

      {/* Modal */}
      {modal && <Modal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

export default Projects;
