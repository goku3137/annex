import { Suspense } from "react";
import Courses from "@/components/sections/Courses";

export const metadata = {
  title: "All Programs | Annex Training Institute",
  description: "Explore our comprehensive list of professional training programs including Medical Coding, IT, AutoCAD, IELTS, and more.",
};

export default function CoursesPage() {
  return (
    <div style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div className="bg-grid-premium" style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-brand-accent-glow) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="premium-container" style={{ padding: '0 5%', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 1rem', borderRadius: '50px', border: '1px solid var(--color-brand-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-brand-white)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--color-brand-white)', borderRadius: '50%' }} />
            Academy Catalog
          </div>
          <h1 className="premium-title fade-up stagger-1">
            Find Your Program
          </h1>
          <p className="premium-subtitle fade-up stagger-2" style={{ margin: '0 auto' }}>
            Browse our complete catalog of industry-aligned courses, bootcamps, and professional certifications.
          </p>
        </div>

        {/* The main courses grid logic is handled in the Courses component */}
        <Suspense fallback={
          <div style={{ padding: '5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="animate-spin" style={{ width: '48px', height: '48px', border: '4px solid var(--color-brand-border)', borderTopColor: 'var(--color-brand-accent)', borderRadius: '50%' }} />
          </div>
        }>
          <div>
            <Courses hideHeader={true} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
