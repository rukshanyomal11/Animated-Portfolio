import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Sparkles } from './Icons';

const Experience = () => {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  const milestones = [
    {
      id: 0,
      year: '2026',
      period: 'January – July (6 Months)',
      role: 'Software Engineering Intern',
      company: 'Sri Lanka Ports Authority',
      location: 'Colombo, Sri Lanka',
      category: 'Work Experience',
      desc: 'Contributed to the Electronic Document Digitisation System (EDDS) within the Information Systems division. Focused on backend engineering with Spring Boot & MySQL and designed/tested a specialized Discipline Module while connecting the AngularJS frontend interface.',
      tags: ['Spring Boot', 'MySQL', 'AngularJS', 'TypeScript', 'Agile'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 1,
      year: '22-25',
      period: 'University Pathway',
      role: 'National Diploma in Technology',
      company: 'University of Moratuwa',
      location: 'ITUM, Moratuwa',
      category: 'Education',
      desc: 'Rigorous engineering foundations with core laboratory focus on Object-Oriented Programming (OOP), Data Structures & Algorithms, and relational Database Management Systems (DBMS).',
      tags: ['Software Engineering', 'OOP', 'Data Structures', 'DBMS'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 2,
      year: '22-23',
      period: 'Department of CSE',
      role: 'Technical Accreditations',
      company: 'University of Moratuwa',
      location: 'Online Academic Portals',
      category: 'Accreditation',
      desc: 'Earned official technical skill verifications in Python Programming, Front-End Web Development, and Web Design basics through university evaluation exams.',
      tags: ['Python Programming', 'Front-End Web Dev', 'Web Design'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 3,
      year: '2021',
      period: 'High School Graduation',
      role: 'G.C.E. Advanced Level',
      company: 'Walasmulla National School',
      location: 'Physical Science Stream',
      desc: 'Completed secondary high school qualifications with key physical science streams. Subject grades: Combined Mathematics (B), Physics (C), Chemistry (C).',
      tags: ['Combined Math', 'Physics', 'Chemistry'],
      gradient: 'from-sky-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.milestone-card');
      // Trigger threshold is at 50% of screen viewport height
      const triggerY = window.innerHeight * 0.5;

      let closestCardId = 0;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Calculate center of the card
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - triggerY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCardId = parseInt(card.getAttribute('data-id'), 10);
        }
      });

      setActiveCard(closestCardId);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial run with short timeout for render alignment
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="relative py-24 overflow-hidden bg-slate-950 font-sans"
    >
      {/* Background ambient mesh glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Chronology
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white font-anton uppercase">
            Professional Milestones
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Minimalist Premium Split Timeline */}
        <div ref={containerRef} className="max-w-4xl mx-auto space-y-16">
          {milestones.map((item) => {
            // Priority: hover state overrides scroll state
            const isActive = hoveredCard !== null ? hoveredCard === item.id : activeCard === item.id;
            
            return (
              <div 
                key={item.id}
                data-id={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="milestone-card grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
              >
                
                {/* 1. Large Year Column */}
                <div className="md:col-span-3 text-left md:text-right pt-2 select-none">
                  <div 
                    className={`font-anton text-5xl sm:text-6xl md:text-7xl leading-none tracking-tighter uppercase transition-all duration-500 ${
                      isActive ? 'text-white translate-x-2' : 'text-white/10'
                    }`}
                  >
                    {item.year}
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-wider font-mono">
                    {item.period}
                  </div>
                </div>

                {/* 2. Content Card Column */}
                <div className="md:col-span-9 relative">
                  
                  {/* Glowing connector point */}
                  <div 
                    className={`absolute -left-3 top-6 w-1.5 h-1.5 rounded-full transition-all duration-500 hidden md:block ${
                      isActive ? 'scale-150 shadow-[0_0_12px_rgba(99,102,241,0.4)]' : ''
                    }`}
                    style={{ backgroundColor: isActive ? 'var(--text-color)' : 'var(--glass-border)' }}
                  />

                  {/* Glassmorphic card details */}
                  <div 
                    className={`relative bg-[#070b13]/60 backdrop-blur-xl border p-6 sm:p-8 rounded-[2rem] transition-all duration-500 shadow-2xl ${
                      isActive 
                        ? 'border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.4)] translate-y-[-2px]' 
                        : 'border-white/5'
                    }`}
                  >
                    {/* Left border dynamic accent glow */}
                    <div 
                      className={`absolute left-0 top-8 bottom-8 w-[3px] rounded-r bg-gradient-to-b ${item.gradient} transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-y-110' : 'opacity-20'
                      }`}
                    />

                    {/* Card Content */}
                    <div className="pl-4">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span 
                          className={`text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border bg-white/5 transition-colors duration-500 ${
                            isActive ? 'text-white border-white/20' : 'text-gray-500 border-white/5'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide transition-colors duration-300">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-400/80 mt-1">
                        {item.company}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-4 font-medium">
                        {item.desc}
                      </p>

                      {/* Accent Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-3 border-t border-white/5">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[8px] font-extrabold uppercase tracking-widest text-gray-400 px-2.5 py-0.5 rounded bg-white/5 border border-white/5 hover:text-white hover:border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
