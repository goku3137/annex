"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Link from "next/link";
import { categories, courses, type Course } from "@/data/courses";

const ALL = "all";

const modeColors: Record<string, string> = {
  Classroom: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/20",
  Online: "text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/20",
  Corporate: "text-[#F5C518] bg-[#F5C518]/10 border-[#F5C518]/20",
};

// Generic placeholder images for different categories to make the site look premium
const catImages: Record<string, string> = {
  "medical-healthcare": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  "programming-data": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  "designing-creative": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  "engineering-cad": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  "it-networking": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  "languages-english": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
  "accounting": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  "digital-marketing": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
  "management": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "soft-skills": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  
  const bgImage = catImages[course.categorySlug] || catImages["programming-data"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1, ease: "easeOut" }}
      className="glass-card rounded-[24px] overflow-hidden group flex flex-col h-full"
    >
      {/* Top Image Banner */}
      <div className="h-40 w-full relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-[#12121A]/50 to-transparent" />
        
        {/* Category Badge over image */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
          <span>{course.icon}</span>
          <span className="text-[10px] font-bold text-white tracking-wider uppercase">{course.category}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10 -mt-6">
        {/* Title & Desc */}
        <div className="mb-4 flex-1">
          <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#00E5FF] transition-colors line-clamp-2">
            {course.title}
          </h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2">{course.shortDescription}</p>
        </div>

        {/* Meta tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-[#94A3B8] bg-white/5 border border-white/10 px-2 py-1 rounded-md">
            ⏱ {course.duration}
          </span>
          {course.modes.slice(0, 2).map((m) => (
            <span key={m} className={`text-[10px] px-2 py-1 rounded-md border font-bold uppercase tracking-wider ${modeColors[m]}`}>
              {m}
            </span>
          ))}
        </div>

        {/* View Course Button (Glass) */}
        <Link
          href={`/courses/${course.slug}`}
          className="w-full text-center py-3.5 rounded-xl font-bold text-sm text-white bg-white/5 hover:bg-[#7C3AED] border border-white/10 hover:border-[#7C3AED] transition-all duration-300 backdrop-blur-md"
        >
          View Program Details
        </Link>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = courses.filter((c) => {
    const matchesCat = activeCategory === ALL || c.categorySlug === activeCategory;
    const matchesSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="py-32 relative bg-[#09090E]" id="courses">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" />
            Program Catalog
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Explore Our <span className="text-gradient-purple">Programs</span>
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Industry-aligned curriculum designed to give you a competitive edge. Filter by your field of interest below.
          </p>
        </div>

        {/* Advanced Filters */}
        <div className="glass-panel rounded-[2rem] p-4 flex flex-col lg:flex-row gap-4 mb-12">
          {/* Search */}
          <div className="relative w-full lg:w-96 shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(9); }}
              placeholder="Search programs..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white text-sm focus:border-[#00E5FF] outline-none transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none flex-1">
            <button
              onClick={() => { setActiveCategory(ALL); setVisibleCount(9); }}
              className={`shrink-0 px-5 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all ${
                activeCategory === ALL 
                  ? "bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]" 
                  : "bg-white/5 text-[#94A3B8] border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              All Programs
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.slug); setVisibleCount(9); }}
                className={`shrink-0 px-5 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all flex items-center gap-2 ${
                  activeCategory === cat.slug 
                    ? "bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]" 
                    : "bg-white/5 text-[#94A3B8] border border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {visible.length > 0 ? (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-panel rounded-3xl py-32 text-center"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No programs found</h3>
              <p className="text-[#94A3B8] mb-6">We couldn't find any courses matching your current filters.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory(ALL); }}
                className="btn-outline"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        {visible.length < filtered.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + 9)}
              className="btn-outline"
            >
              Load More Programs ({filtered.length - visible.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
