"use client";

import { courses, categories } from "@/data/courses";
import Link from "next/link";

export default function Courses({ hideHeader }: { hideHeader?: boolean }) {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);

  return (
    <section className="premium-section" id="programs">
      <div className="premium-container">
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="premium-title fade-up">Featured Programs</h2>
            <p className="premium-subtitle fade-up stagger-1">
              Master highly sought-after skills with our expert-led certification programs.
            </p>
          </div>
        )}

        <div className="premium-grid">
          {featuredCourses.map((course, index) => (
            <Link href={`/courses/${course.slug}`} key={course.id} style={{ textDecoration: 'none' }}>
              <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0 }}>
                {/* Image Section */}
                <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  {course.image ? (
                    <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="course-img" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #111, #222)' }}></div>
                  )}
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-white)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {course.category}
                  </div>
                </div>
                
                {/* Content Section */}
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-brand-white)' }}>{course.title}</h3>
                  <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', flex: 1 }}>
                    {course.shortDescription}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {course.modes.slice(0,2).map(mode => (
                        <span key={mode} style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', background: 'var(--color-brand-accent-glow)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                          {mode}
                        </span>
                      ))}
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-brand-white)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                      View Course
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Link href="/courses" className="btn-premium-outline">
            View All Programs
          </Link>
        </div>
      </div>
      <style jsx>{`
        .glass-panel:hover .course-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
