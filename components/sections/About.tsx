"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const benefits = [
  { icon: "🏫", title: "Agency Based Learning", desc: "Gain practical experience through real-world projects, not just theory." },
  { icon: "🎓", title: "Expert Mentors", desc: "Learn directly from industry professionals with years of experience." },
  { icon: "🏆", title: "Govt. Recognized", desc: "Certifications approved by ACTVET, DOH, and international bodies." },
  { icon: "💼", title: "100% Placement Support", desc: "Dedicated career assistance and interview preparation." },
];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 relative bg-[#09090E] overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ── Left: Image/Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
            ref={headerRef}
          >
            {/* Main Image Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.15)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating Stats Card 1 */}
            <div className="absolute -right-6 md:-right-12 top-20 glass-panel rounded-2xl p-5 border-t border-t-[#00E5FF]/50 shadow-2xl animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-[#00E5FF] text-3xl font-black mb-1">95%</div>
              <div className="text-white text-xs font-bold tracking-widest uppercase">Placement Rate</div>
            </div>

            {/* Floating Stats Card 2 */}
            <div className="absolute -left-6 md:-left-12 bottom-20 glass-panel rounded-2xl p-5 border-t border-t-[#7C3AED]/50 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-[#A855F7] text-3xl font-black mb-1">10+</div>
              <div className="text-white text-xs font-bold tracking-widest uppercase">Years Experience</div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" />
                The Academy Experience
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Where Learning Meets <span className="text-gradient-cyan">Unforgettable</span> Experiences.
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                We bridge the gap between traditional education and industry requirements. At Annex, you don't just learn theory—you build practical skills through real-world projects under the guidance of industry veterans.
              </p>
            </motion.div>

            {/* Grid of Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#7C3AED]/20 group-hover:border-[#7C3AED]/40 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4"
            >
              <Link href="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
