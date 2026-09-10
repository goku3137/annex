"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import Link from "next/link";
import { categories, courses, type Course } from "@/data/courses";

const ALL = "all";

function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const modeColors: Record<string, string> = {
    Classroom: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    Online: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    Corporate: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  };

  const levelColors: Record<string, string> = {
    Beginner: "text-emerald-400",
    Intermediate: "text-blue-400",
    Advanced: "text-purple-400",
  };

  const WHATSAPP_URL = `https://wa.me/97125463666?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
    course.title
  )}%20course%20at%20Annex%20Training%20Institute.`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transform: hovered
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(4px)`
          : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
        transition: "transform 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-blue-500/30 rounded-2xl p-5 flex flex-col gap-4 cursor-pointer transition-colors duration-300"
      id={`course-card-${course.id}`}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top row: icon + category + level */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{course.icon}</span>
          <div>
            <span className="text-xs text-slate-500 font-medium">{course.category}</span>
            {course.certification && (
              <div className="text-[10px] text-blue-400 font-medium">{course.certification}</div>
            )}
          </div>
        </div>
        <span className={`text-[10px] font-semibold ${levelColors[course.level]}`}>
          {course.level.toUpperCase()}
        </span>
      </div>

      {/* Title & description */}
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-base mb-1.5 leading-snug group-hover:text-blue-100 transition-colors duration-200">
          {course.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {course.shortDescription}
        </p>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-2 flex-wrap relative z-10">
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </span>
        <span className="w-1 h-1 bg-slate-700 rounded-full" />
        {course.modes.map((mode) => (
          <span
            key={mode}
            className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${modeColors[mode]}`}
          >
            {mode}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto relative z-10">
        <Link
          href={`/courses/${course.slug}`}
          className="flex-1 text-center py-2.5 text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          id={`course-view-${course.id}`}
        >
          View Course
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl transition-all duration-200"
          id={`course-enquire-${course.id}`}
        >
          Enquire
        </a>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const filtered = courses.filter((c) => {
    const matchesCat =
      activeCategory === ALL || c.categorySlug === activeCategory;
    const matchesSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="section relative overflow-hidden" id="courses">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-4"
          >
            WHAT WE TEACH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore Our <span className="gradient-text">Courses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Professional training programs across technology, healthcare, business, design, engineering, languages and more.
          </motion.p>
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 focus-within:border-blue-500/40 transition-colors">
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(9); }}
              placeholder="Search courses..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
              id="courses-search"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-slate-500 hover:text-white transition-colors">✕</button>
            )}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          id="course-category-tabs"
        >
          <button
            onClick={() => { setActiveCategory(ALL); setVisibleCount(9); }}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
              activeCategory === ALL
                ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                : "bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20"
            }`}
            id="filter-all"
          >
            All Courses
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.slug); setVisibleCount(9); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                activeCategory === cat.slug
                  ? "bg-blue-600 text-white border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "bg-white/[0.04] text-slate-400 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
              id={`filter-${cat.id}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <AnimatePresence mode="wait">
          {visible.length > 0 ? (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              id="courses-grid"
            >
              {visible.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
              id="courses-empty"
            >
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-white font-semibold text-lg mb-2">No courses found</p>
              <p className="text-slate-500 text-sm">
                Try a different keyword or{" "}
                <button onClick={() => { setSearch(""); setActiveCategory(ALL); }} className="text-blue-400 hover:underline">
                  browse all courses
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        {visible.length < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 9)}
              className="px-8 py-3 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.04]"
              id="courses-load-more"
            >
              Load More Courses ({filtered.length - visible.length} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
