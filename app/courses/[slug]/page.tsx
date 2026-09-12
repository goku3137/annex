import { notFound } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Star, BookOpen, Check, Clock, Building, Award, Phone } from "lucide-react";

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

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const WHATSAPP = `https://wa.me/97125463666?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`;

  return (
    <div style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* ── Hero Section ── */}
      <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '6rem', overflow: 'hidden', borderBottom: '1px solid var(--color-brand-border)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          {course.image ? (
            <img 
              src={course.image}
              alt="Course Background" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #111, #222)', opacity: 0.5 }}></div>
          )}
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-brand-black), transparent)', zIndex: 1 }} />
        <div className="bg-grid-premium" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.3 }} />
        
        <div className="premium-container" style={{ position: 'relative', zIndex: 10, padding: '0 5%' }}>
          <Link href="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-text-muted)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem', transition: 'color 0.3s ease' }} className="hover-glow">
            ← Back to Programs
          </Link>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 1rem', borderRadius: '50px', border: '1px solid var(--color-brand-accent)', background: 'var(--color-brand-accent-glow)', color: 'var(--color-brand-accent)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {course.icon} {course.category}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 1rem', borderRadius: '50px', border: '1px solid var(--color-brand-border)', background: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-brand-white)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Level: {course.level}
                </span>
              </div>
              <h1 className="premium-title fade-up">
                {course.title}
              </h1>
              <p className="premium-subtitle fade-up stagger-1" style={{ margin: 0, textAlign: 'left' }}>
                {course.shortDescription}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }} className="fade-up stagger-2">
              <Link href="/contact" className="btn-premium">
                Enroll Now
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-premium-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="premium-container" style={{ padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Left: Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', flex: '2 1 600px' }}>
              
              {/* Image highlight */}
              {course.curriculumImage && (
                <div className="glass-panel" style={{ padding: 0, height: '300px', overflow: 'hidden' }}>
                   <img src={course.curriculumImage} alt="Curriculum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}

              {/* Overview */}
              <div className="glass-panel fade-up stagger-1">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Star className="w-5 h-5" style={{ color: 'var(--color-brand-accent)' }} /> Program Overview
                </h2>
                <div style={{ color: 'var(--color-brand-text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    The {course.title} program is designed to provide you with the most up-to-date, industry-relevant skills. Whether you're looking to start a new career, upskill in your current role, or earn a globally recognized certification, this course provides a comprehensive pathway to success.
                  </p>
                  <p>
                    Led by expert instructors with years of real-world experience, you will engage in practical, hands-on learning that goes beyond textbooks. We focus on an agency-based learning model, ensuring that upon completion, you are job-ready and confident.
                  </p>
                </div>
              </div>

              {/* What you will learn */}
              <div className="glass-panel fade-up stagger-2">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BookOpen className="w-5 h-5" style={{ color: 'var(--color-brand-accent)' }} /> What You Will Learn
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  {[
                    "Industry-standard tools and workflows",
                    "Practical problem-solving techniques",
                    "Real-world project implementation",
                    "Best practices and latest trends",
                    "Preparation for certification exams",
                    "Portfolio development strategies"
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-brand-accent-glow)', border: '1px solid var(--color-brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-accent)', flexShrink: 0 }}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span style={{ color: 'var(--color-brand-text)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Sidebar / Meta */}
            <div style={{ flex: '1 1 300px' }}>
              <div className="glass-panel fade-up stagger-3" style={{ position: 'sticky', top: '100px' }}>
                <h3 style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-brand-border)' }}>Program Details</h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--color-brand-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Duration</div>
                      <div style={{ color: 'var(--color-brand-white)', fontWeight: '500' }}>{course.duration}</div>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Building className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--color-brand-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Training Modes</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {course.modes.map(m => (
                          <span key={m} style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: 'var(--color-brand-white)', fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </li>
                  {course.certification && (
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(245, 197, 24, 0.1)', border: '1px solid rgba(245, 197, 24, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Award className="w-5 h-5" style={{ color: '#F5C518' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#F5C518', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Certification</div>
                        <div style={{ color: 'var(--color-brand-white)', fontWeight: '500' }}>{course.certification}</div>
                      </div>
                    </li>
                  )}
                </ul>

                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-brand-border)' }}>
                  <h4 style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem' }}>Have questions?</h4>
                  <a href="tel:+97125463666" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                    <Phone className="w-4 h-4" /> +971 2 5463 666
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
