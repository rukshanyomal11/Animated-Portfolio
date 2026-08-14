import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Sparkles } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      // Initialize EmailJS with client public key
      emailjs.init('KCg_lMYNpw4yx4Mry');

      // Prepare template parameters matching the EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        reply_to: formData.email,
      };

      // Transmit email packet
      const result = await emailjs.send(
        'service_4sa6swb',
        'template_4sr8d8c',
        templateParams
      );

      console.log('Email sent successfully:', result);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to transmit packet. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus(''), 6000);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden bg-slate-950 font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none z-0" />

      {/* Decorative cyber grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white font-anton uppercase">
            Initiate Connection
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form & Info Grid Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Cyber Info Widget (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            
            {/* Holographic Contact Card */}
            <div className="group relative bg-[#0b0f19]/70 backdrop-blur-xl border border-white/10 hover:border-indigo-500/30 p-8 rounded-[2rem] shadow-2xl transition-all duration-300 flex-grow flex flex-col justify-between overflow-hidden">
              {/* Corner Aura Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 border-b border-white/5 pb-4">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span>Contact Channels</span>
                </h3>
                
                <div className="space-y-4.5">
                  {/* Email Channel */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover/item:border-indigo-500/40 group-hover/item:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider font-mono">Email Gateway</span>
                      <a href="mailto:rukshanyomal11@gmail.com" className="text-xs font-semibold text-white hover:text-indigo-400 hover:underline transition-colors">
                        rukshanyomal11@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone Channel */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover/item:border-indigo-500/40 group-hover/item:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider font-mono">Direct Line</span>
                      <a href="tel:+94713412404" className="text-xs font-semibold text-white hover:text-indigo-400 hover:underline transition-colors">
                        +94 71 341 2404
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Channel */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover/item:border-indigo-500/40 group-hover/item:text-white transition-all duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider font-mono">LinkedIn Profile</span>
                      <a href="https://linkedin.com/in/yomal-rukshan-a24635305" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white hover:text-indigo-400 hover:underline transition-colors truncate max-w-[200px] sm:max-w-xs">
                        yomal-rukshan-a24635305
                      </a>
                    </div>
                  </div>

                  {/* GitHub Channel */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover/item:border-indigo-500/40 group-hover/item:text-white transition-all duration-300">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider font-mono">GitHub Repository</span>
                      <a href="https://github.com/rukshanyomal11" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white hover:text-indigo-400 hover:underline transition-colors">
                        rukshanyomal11
                      </a>
                    </div>
                  </div>

                  {/* Location Channel */}
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover/item:border-indigo-500/40 group-hover/item:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider font-mono">Hangar Location</span>
                      <span className="text-xs font-semibold text-white">
                        Walasmulla, Sri Lanka
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Section */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-white/5 mt-8 relative overflow-hidden">
                {/* Glowing grid pulse */}
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping m-3" />
                
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest font-mono">
                    AVAILABILITY STATUS
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white mt-2">Available for Projects</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                  Open to software internships, freelance tasks, and web integration contracts. Drop a line to start!
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: Sleek Contact Form (Right) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="group relative w-full bg-[#0b0f19]/70 backdrop-blur-xl border border-white/10 hover:border-indigo-500/20 p-8 rounded-[2rem] shadow-2xl flex flex-col gap-6 text-left transition-colors duration-500"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/5 pb-4">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Transmit message packet</span>
              </h3>

              <div className="space-y-4">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider flex items-center gap-1 font-mono">
                      <User className="w-3.5 h-3.5 text-indigo-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rukshan Yomal"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.08] transition-all text-xs font-semibold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider flex items-center gap-1 font-mono">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.08] transition-all text-xs font-semibold"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider flex items-center gap-1 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Subject Heading
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Collaboration Proposal"
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.08] transition-all text-xs font-semibold"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider flex items-center gap-1 font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> Message Body
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Compose message details here..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.08] transition-all text-xs font-semibold resize-none"
                  />
                </div>

              </div>

              {/* Error Alert Display */}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-[10px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-white hover:bg-white/95 text-black font-extrabold text-xs transition-all shadow-lg active:scale-95 disabled:opacity-50 mt-4"
              >
                {status === 'sending' ? (
                  <span className="w-5 h-5 rounded-full border-2 border-black/20 border-t-black animate-spin"></span>
                ) : status === 'success' ? (
                  <span className="text-emerald-700 font-bold animate-pulse font-sans">✓ Message Packet Transmitted</span>
                ) : status === 'error' ? (
                  <span className="text-red-700 font-bold font-sans">⚠ Transmission Failed</span>
                ) : (
                  <>
                    <span>Transmit Packet</span>
                    <Send className="w-4 h-4 text-black animate-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
