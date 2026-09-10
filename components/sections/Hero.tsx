"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090E]" id="hero">
      {/* Background Image with heavy overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'luminosity'
        }}
      />
      
      {/* Heavy gradients to blend image into dark background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#09090E] via-[#09090E]/90 to-[#09090E]/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#09090E] via-transparent to-[#09090E]/80" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-[2] pointer-events-none" />

      {/* Glowing Orbs (AIBI Style) */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] top-[-10%] right-[-5%]" />
      <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-[-5%] left-[-10%]" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* ── Left: Content (Col span 7) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-white uppercase">Future-Ready Education</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Master Your Skills.<br />
              Advance Your <span className="text-gradient-purple">Career.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              Transform your future with Abu Dhabi&apos;s leading training institute. Practical experience, expert instructors, and government-recognized certifications.
            </motion.p>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              {[
                { label: "10,000+ Students", icon: "🎓" },
                { label: "95% Placement", icon: "💼" },
                { label: "Expert Mentors", icon: "⭐" }
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <span className="text-lg">{stat.icon}</span>
                  <span className="text-white text-sm font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Lead Form (Col span 5) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
              {/* Inner subtle glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]" />
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey</h3>
                <p className="text-[#94A3B8] text-sm">Join the elite academy experience today.</p>
              </div>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Contact Number</label>
                  <input type="tel" placeholder="+971 50 000 0000" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Course of Interest</label>
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a category</option>
                    <option value="medical">Medical Coding</option>
                    <option value="tech">Programming & IT</option>
                    <option value="design">Design & AutoCAD</option>
                    <option value="language">Languages & IELTS</option>
                  </select>
                </div>

                <button className="btn-premium w-full mt-2" type="submit">
                  <span>Apply Now</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] tracking-[0.2em] text-white font-bold">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
