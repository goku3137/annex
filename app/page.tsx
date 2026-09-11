import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";

/* ── Minimalist Trusted By Section ──────────────────────────────────────── */
function TrustedBySection() {
  const partners = [
    "ACTVET", "DOH", "AMCA", "BRITISH COUNCIL", "IDP", "KHDA"
  ];

  return (
    <section style={{ padding: '3rem 0', background: 'var(--color-brand-black)', borderBottom: '1px solid var(--color-brand-border)', position: 'relative' }}>
      <div className="premium-container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-text-muted)' }}>
            Recognized By
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
            {partners.map(partner => (
              <span key={partner} style={{ fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.5)', transition: 'color 0.3s ease' }} className="hover-glow">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final Editorial CTA ──────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section style={{ padding: '8rem 0', position: 'relative', background: 'var(--color-brand-black)', borderTop: '1px solid var(--color-brand-border)', overflow: 'hidden' }} id="final-cta">
      <div className="bg-grid-premium" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--color-brand-accent-glow) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="premium-container" style={{ padding: '0 5%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 className="premium-title fade-up stagger-1" style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          Advance<br />Your Career
        </h2>
        <p className="premium-subtitle fade-up stagger-2">
          Join a prestigious network of professionals who have accelerated their trajectories with our industry-aligned programs.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem' }} className="fade-up stagger-3">
          <Link href="/contact" className="btn-premium">
            Apply Now
          </Link>
          <Link href="/courses" className="btn-premium-outline">
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ background: 'var(--color-brand-black)' }}>
      <Hero />
      <TrustedBySection />
      <Courses />
      <About />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
