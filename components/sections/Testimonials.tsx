"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    start();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const go = (i: number) => {
    setDir(i > current ? 1 : -1);
    setCurrent(i);
    start();
  };

  const variants = {
    enter: (d: number) => ({ x: d * 50, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: -d * 50, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-32 relative bg-[#09090E] overflow-hidden" id="testimonials">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] top-[10%] right-[-10%] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Real Impact on <br />
              <span className="text-gradient-purple">Real Careers</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Main Featured Testimonial (Col 7) */}
          <div className="lg:col-span-7">
            <div className="relative">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="glass-card rounded-[2rem] p-8 md:p-12 relative"
                >
                  {/* Neon Quote Icon */}
                  <div className="absolute top-8 right-10 text-8xl leading-none text-white/5 font-serif select-none pointer-events-none">"</div>

                  <div className="flex text-[#00E5FF] text-lg mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < testimonials[current].rating ? "opacity-100" : "opacity-30"}>★</span>
                    ))}
                  </div>

                  <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 font-medium">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] p-[2px]">
                        <div className="w-full h-full bg-[#12121A] rounded-2xl flex items-center justify-center text-white font-black text-xl">
                          {testimonials[current].name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{testimonials[current].name}</div>
                        <div className="text-[#00E5FF] text-xs tracking-widest uppercase font-bold">{testimonials[current].course}</div>
                      </div>
                    </div>

                    {testimonials[current].outcome && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        <span className="text-[#00E5FF]">✓</span>
                        <span className="text-white text-sm font-semibold">{testimonials[current].outcome}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-10 h-2 bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Clickable List (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => go(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  i === current
                    ? "bg-white/10 border-[#7C3AED]/50 shadow-[0_0_30px_rgba(124,58,237,0.15)]"
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                }`}
              >
                {i === current && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7C3AED] to-[#00E5FF]" />
                )}
                
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] p-[1px] shrink-0 transition-opacity ${i === current ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>
                    <div className="w-full h-full bg-[#12121A] rounded-xl flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-bold text-sm">{t.name}</div>
                      <div className="text-[#00E5FF] text-[10px]">★ {t.rating}.0</div>
                    </div>
                    <div className={`text-xs mt-1 transition-colors ${i === current ? "text-[#94A3B8]" : "text-[#475569]"}`}>
                      {t.course}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
