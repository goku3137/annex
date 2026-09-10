"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Dynamic import of 3D scene to prevent SSR issues
const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border border-blue-500/30 animate-ping absolute inset-0" />
        <div className="w-32 h-32 rounded-full border border-blue-400/20 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  ),
});

const WHATSAPP_URL =
  "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

const stagger = {
  container: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  },
};

export default function Hero() {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/courses?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-mesh overflow-hidden"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* ── Left: Text Content ── */}
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={stagger.container}
            className="flex flex-col gap-6 lg:gap-7"
          >
            {/* Label badge */}
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium tracking-widest">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                ANNEX TRAINING INSTITUTE — ABU DHABI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={stagger.item}>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="text-white">Build Skills.</span>
                <br />
                <span className="gradient-text">Advance</span>
                <br />
                <span className="text-white">Your Career.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={stagger.item}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              Professional training programs in Abu Dhabi, UAE. From healthcare to technology, engineering to languages — discover the course that transforms your career.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={stagger.item}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] text-sm"
                id="hero-explore-courses"
              >
                Explore Courses
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 hover:border-white/20 font-medium rounded-xl transition-all duration-200 text-sm"
                id="hero-talk-advisor"
              >
                Talk to an Advisor
              </a>
            </motion.div>

            {/* Search Bar */}
            <motion.form
              variants={stagger.item}
              onSubmit={handleSearch}
              className="flex items-center gap-0 max-w-md"
              id="hero-search-form"
            >
              <div className="flex-1 flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-l-xl px-4 py-3 focus-within:border-blue-500/60 focus-within:bg-white/[0.08] transition-all duration-200">
                <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses, skills or certifications..."
                  className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
                  id="hero-search-input"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-r-xl transition-colors duration-200 border border-blue-600"
                id="hero-search-btn"
              >
                Search
              </button>
            </motion.form>

            {/* Stats mini-row */}
            <motion.div
              variants={stagger.item}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { value: "100+", label: "Courses" },
                { value: "20+", label: "Trainers" },
                { value: "500+", label: "Students" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
              <div className="h-8 w-px bg-white/10 mx-2" />
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500">Excellent Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: 3D Scene ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: "600px" }}
          >
            {/* Glow ring behind canvas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
              <div className="absolute w-60 h-60 rounded-full bg-indigo-600/8 blur-2xl animate-pulse" />
            </div>
            {/* R3F Canvas */}
            <div className="relative z-10 w-full h-full">
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
