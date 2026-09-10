import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug, courses } from "@/data/courses";

// Generate static params for all courses
export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

// Dynamic metadata per course
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.shortDescription,
  };
}

function AccordionModule({ module, index }: { module: { title: string; topics: string[] }; index: number }) {
  return (
    <details className="group border border-white/[0.07] rounded-xl overflow-hidden" id={`module-${index}`}>
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-white/[0.04] transition-colors">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white font-medium text-sm">{module.title}</span>
        </div>
        <svg
          className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19 9-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 py-4 border-t border-white/[0.06] bg-white/[0.02]">
        <ul className="space-y-2">
          {module.topics.map((topic) => (
            <li key={topic} className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const WHATSAPP_URL = `https://wa.me/97125463666?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
    course.title
  )}%20course%20at%20Annex%20Training%20Institute.%20Please%20provide%20more%20information%20about%20the%20schedule%20and%20fees.`;

  const modeColors: Record<string, string> = {
    Classroom: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    Online: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    Corporate: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-slate-300">{course.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Main Content ── */}
          <div className="lg:col-span-2">
            {/* Course Hero */}
            <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-3xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{course.icon}</span>
                <div>
                  <div className="text-xs text-blue-400 font-medium tracking-wide">{course.category}</div>
                  {course.certification && (
                    <div className="text-xs text-amber-400">🏆 {course.certification}</div>
                  )}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-slate-300 leading-relaxed">{course.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] border border-white/[0.1] rounded-lg text-xs text-slate-300">
                  ⏱ {course.duration}
                </span>
                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  course.level === "Beginner" ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" :
                  course.level === "Intermediate" ? "bg-blue-500/10 text-blue-300 border border-blue-500/20" :
                  "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                }`}>
                  {course.level}
                </span>
                {course.modes.map((mode) => (
                  <span key={mode} className={`px-3 py-1.5 rounded-lg text-xs border font-medium ${modeColors[mode]}`}>
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <section className="mb-10" id="course-overview">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6">
                <p className="text-slate-300 leading-relaxed">{course.description}</p>
              </div>
            </section>

            {/* Curriculum */}
            {course.curriculum.length > 0 && (
              <section className="mb-10" id="course-curriculum">
                <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>
                <div className="flex flex-col gap-2">
                  {course.curriculum.map((module, i) => (
                    <AccordionModule key={module.title} module={module} index={i} />
                  ))}
                </div>
              </section>
            )}

            {/* Career Opportunities */}
            {course.careerOpportunities.length > 0 && (
              <section className="mb-10" id="course-careers">
                <h2 className="text-2xl font-bold text-white mb-6">Career Opportunities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {course.careerOpportunities.map((role) => (
                    <div
                      key={role}
                      className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/[0.07] rounded-xl text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {role}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {course.faqs.length > 0 && (
              <section className="mb-10" id="course-faq">
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-2">
                  {course.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group border border-white/[0.07] rounded-xl overflow-hidden"
                      id={`faq-${i}`}
                    >
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-white/[0.04] transition-colors">
                        <span className="text-white text-sm font-medium">{faq.question}</span>
                        <svg
                          className="w-4 h-4 text-slate-500 shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19 9-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 py-4 border-t border-white/[0.06] bg-white/[0.02]">
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Why Annex */}
            <section className="mb-10" id="course-why-annex">
              <h2 className="text-2xl font-bold text-white mb-6">Why Learn at Annex?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Experienced industry trainers",
                  "Practical, hands-on learning approach",
                  "Individual attention and support",
                  "Flexible morning, evening and weekend timings",
                  "Classroom and online live options",
                  "Updated industry-relevant materials",
                  "Internationally recognized certifications",
                  "Career guidance and support",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs shrink-0 mt-0.5">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── Sidebar / Sticky CTA ── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 flex flex-col gap-4">
              {/* Enquiry Card */}
              <div className="bg-white/[0.03] border border-white/[0.1] rounded-2xl p-6" id="course-enquiry-card">
                <h3 className="text-white font-bold text-lg mb-2">Enquire About This Course</h3>
                <p className="text-slate-500 text-sm mb-5">Speak with our team about schedules, fees, and enrollment.</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 mb-3 text-sm"
                  id="course-whatsapp-cta"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="tel:+97125463666"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium rounded-xl transition-all duration-200 text-sm"
                  id="course-call-cta"
                >
                  📞 Call +971 2 5463 666
                </a>
              </div>

              {/* Course Quick Info */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-5">
                <h3 className="text-white font-semibold text-sm mb-4">Course Details</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Duration", value: course.duration },
                    { label: "Level", value: course.level },
                    { label: "Mode", value: course.modes.join(", ") },
                    ...(course.certification ? [{ label: "Certification", value: course.certification }] : []),
                  ].map((item) => (
                    <div key={item.label} className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-slate-500">{item.label}</span>
                      <span className="text-slate-200 text-right font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back to courses */}
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 py-3 border border-white/[0.07] hover:border-white/20 text-slate-400 hover:text-white rounded-xl text-sm transition-all duration-200"
                id="course-back-link"
              >
                ← Browse All Courses
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-6 mt-20 text-center">
        <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Start?</h2>
          <p className="text-slate-400 mb-7">
            Contact our team to discuss enrollment, upcoming batches, and fees for {course.title}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              id="course-bottom-whatsapp"
            >
              💬 WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              id="course-bottom-contact"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
