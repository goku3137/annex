import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";

// Generate static params for all courses at build time
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Annex Training Institute`,
    description: course.shortDescription,
  };
}

const catImages: Record<string, string> = {
  "medical-healthcare": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
  "programming-data": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
  "designing-creative": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  "engineering-cad": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
  "it-networking": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
  "languages-english": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop",
  "accounting": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
  "digital-marketing": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop",
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const WHATSAPP = `https://wa.me/97125463666?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`;
  const bgImage = catImages[course.categorySlug] || catImages["programming-data"];

  return (
    <div className="bg-[#09090E] min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/[0.05]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090E] via-[#09090E]/80 to-[#09090E]/50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/courses" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white text-sm font-bold tracking-widest uppercase mb-8 transition-colors">
            ← Back to Programs
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-[10px] font-bold tracking-widest uppercase">
                  {course.icon} {course.category}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] text-[10px] font-bold tracking-widest uppercase">
                  Level: {course.level}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
                {course.shortDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn-premium">
                <span>Enroll Now</span>
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Main Content */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* Overview */}
              <div className="glass-panel rounded-[2rem] p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#00E5FF]">✦</span> Program Overview
                </h2>
                <div className="text-[#94A3B8] leading-relaxed space-y-4">
                  <p>
                    The {course.title} program is designed to provide you with the most up-to-date, industry-relevant skills. Whether you're looking to start a new career, upskill in your current role, or earn a globally recognized certification, this course provides a comprehensive pathway to success.
                  </p>
                  <p>
                    Led by expert instructors with years of real-world experience, you will engage in practical, hands-on learning that goes beyond textbooks. We focus on an agency-based learning model, ensuring that upon completion, you are job-ready and confident.
                  </p>
                </div>
              </div>

              {/* What you will learn */}
              <div className="glass-panel rounded-[2rem] p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#7C3AED]">✦</span> What You Will Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Industry-standard tools and workflows",
                    "Practical problem-solving techniques",
                    "Real-world project implementation",
                    "Best practices and latest trends",
                    "Preparation for certification exams",
                    "Portfolio development strategies"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#A855F7] text-xs shrink-0 mt-0.5">✓</div>
                      <span className="text-[#94A3B8] text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Sidebar / Meta */}
            <div className="lg:col-span-4 sticky top-32 flex flex-col gap-6">
              
              <div className="glass-card rounded-[2rem] p-8">
                <h3 className="text-white font-bold text-lg mb-6 border-b border-white/10 pb-4">Program Details</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">⏱</div>
                    <div>
                      <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Duration</div>
                      <div className="text-white font-medium">{course.duration}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">🏢</div>
                    <div>
                      <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">Training Modes</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {course.modes.map(m => (
                          <span key={m} className="px-2 py-1 rounded bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">{m}</span>
                        ))}
                      </div>
                    </div>
                  </li>
                  {course.certification && (
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center text-xl shrink-0">🏆</div>
                      <div>
                        <div className="text-[10px] font-bold text-[#F5C518] tracking-widest uppercase">Certification</div>
                        <div className="text-white font-medium">{course.certification}</div>
                      </div>
                    </li>
                  )}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white font-bold text-sm mb-4">Have questions?</h4>
                  <a href="tel:+97125463666" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#00E5FF] transition-colors mb-3">
                    <span className="text-xl">📞</span> +971 2 5463 666
                  </a>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
