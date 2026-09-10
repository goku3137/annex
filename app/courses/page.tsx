"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { courses, categories } from "@/data/courses";

const ALL = "all";
const MODES = ["All", "Classroom", "Online", "Corporate"] as const;
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"] as const;

function CoursesContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [activeMode, setActiveMode] = useState<string>("All");
  const [activeLevel, setActiveLevel] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Read URL search params on mount
  useEffect(() => {
    const q = searchParams.get("q");
    const cat = searchParams.get("category");
    if (q) setSearch(q);
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = courses.filter((c) => {
    const matchesCat = activeCategory === ALL || c.categorySlug === activeCategory;
    const matchesMode = activeMode === "All" || c.modes.includes(activeMode as "Classroom" | "Online" | "Corporate");
    const matchesLevel = activeLevel === "All" || c.level === activeLevel;
    const matchesSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      (c.certification ?? "").toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesMode && matchesLevel && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  const modeColors: Record<string, string> = {
    Classroom: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    Online: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    Corporate: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  };

  const WHATSAPP_BASE = "https://wa.me/97125463666?text=Hello%2C%20I%20am%20interested%20in%20the%20";

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center py-12">
        <span className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-5">ALL COURSES</span>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Find Your <span className="gradient-text">Course</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Browse professional training programs across 10+ disciplines. Filter by category, mode, or skill level.
        </p>

        {/* Search */}
        <div className="max-w-lg mx-auto flex items-center gap-0" id="courses-page-search">
          <div className="flex-1 flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-l-xl px-4 py-3.5 focus-within:border-blue-500/50 transition-colors">
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(12); }}
              placeholder="Search by name, skill, or certification..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
              id="courses-page-search-input"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-slate-500 hover:text-white">✕</button>
            )}
          </div>
          <button className="px-5 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-r-xl border border-blue-600">
            Search
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0" id="courses-sidebar">
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-5 sticky top-28">
              <h2 className="text-white font-semibold mb-4 text-sm">Filter Courses</h2>

              {/* Category */}
              <div className="mb-6">
                <h3 className="text-xs font-medium tracking-wide text-slate-500 mb-3">CATEGORY</h3>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => { setActiveCategory(ALL); setVisibleCount(12); }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeCategory === ALL ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                    id="filter-cat-all"
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat.slug); setVisibleCount(12); }}
                      className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeCategory === cat.slug ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                      id={`filter-cat-${cat.id}`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span className="line-clamp-1">{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode */}
              <div className="mb-6">
                <h3 className="text-xs font-medium tracking-wide text-slate-500 mb-3">LEARNING MODE</h3>
                <div className="flex flex-col gap-1">
                  {MODES.map((mode) => (
                    <button
                      key={mode}
                      onClick={() => { setActiveMode(mode); setVisibleCount(12); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeMode === mode ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                      id={`filter-mode-${mode.toLowerCase()}`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div>
                <h3 className="text-xs font-medium tracking-wide text-slate-500 mb-3">SKILL LEVEL</h3>
                <div className="flex flex-col gap-1">
                  {LEVELS.map((level) => (
                    <button
                      key={level}
                      onClick={() => { setActiveLevel(level); setVisibleCount(12); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeLevel === level ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                      id={`filter-level-${level.toLowerCase()}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              {(activeCategory !== ALL || activeMode !== "All" || activeLevel !== "All" || search) && (
                <button
                  onClick={() => { setActiveCategory(ALL); setActiveMode("All"); setActiveLevel("All"); setSearch(""); setVisibleCount(12); }}
                  className="w-full mt-4 py-2 text-xs text-slate-500 hover:text-white border border-white/[0.06] hover:border-white/20 rounded-lg transition-colors"
                  id="filter-reset"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-500 text-sm">
                Showing <span className="text-white font-medium">{Math.min(visibleCount, filtered.length)}</span> of{" "}
                <span className="text-white font-medium">{filtered.length}</span> courses
                {search && <span> for &quot;<span className="text-blue-400">{search}</span>&quot;</span>}
              </p>
            </div>

            {/* Grid */}
            <AnimatePresence mode="wait">
              {visible.length > 0 ? (
                <motion.div
                  key={activeCategory + activeMode + activeLevel + search}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                  id="courses-results-grid"
                >
                  {visible.map((course, i) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-blue-500/25 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300"
                      id={`courses-result-${course.id}`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-2xl">{course.icon}</span>
                        <span className="text-[10px] font-semibold text-slate-500">{course.level.toUpperCase()}</span>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">{course.category}</div>
                        <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-blue-100 transition-colors line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                          {course.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-slate-500">⏱ {course.duration}</span>
                        {course.modes.slice(0, 2).map((m) => (
                          <span key={m} className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${modeColors[m]}`}>{m}</span>
                        ))}
                        {course.certification && (
                          <span className="text-[10px] text-blue-400">🏆 {course.certification}</span>
                        )}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex-1 text-center py-2 text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 rounded-xl transition-colors"
                          id={`courses-view-${course.id}`}
                        >
                          View Course
                        </Link>
                        <a
                          href={`${WHATSAPP_BASE}${encodeURIComponent(course.title)}%20course.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-500/20 transition-colors"
                          id={`courses-enquire-${course.id}`}
                        >
                          Enquire
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20" id="courses-no-results">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-white font-semibold text-xl mb-2">No courses found</h3>
                  <p className="text-slate-500 text-sm">
                    Try a different keyword or{" "}
                    <button
                      onClick={() => { setSearch(""); setActiveCategory(ALL); setActiveMode("All"); setActiveLevel("All"); }}
                      className="text-blue-400 hover:underline"
                    >
                      clear all filters
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More */}
            {visible.length < filtered.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((v) => v + 12)}
                  className="px-8 py-3 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white rounded-xl text-sm transition-all duration-200"
                  id="courses-load-more"
                >
                  Load {Math.min(12, filtered.length - visible.length)} More Courses
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-400 text-sm">Loading courses...</div>
      </div>
    }>
      <CoursesContent />
    </Suspense>
  );
}
