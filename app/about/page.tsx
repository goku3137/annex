import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import { Target, Eye } from "lucide-react";

export const metadata = {
  title: "About Us | Annex Training Institute",
  description: "Learn about Annex Training Institute, our mission, vision, and the expert team behind our professional training programs in Abu Dhabi.",
};

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Premium Hero Banner */}
      <section style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '6rem', overflow: 'hidden', borderBottom: '1px solid var(--color-brand-border)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1577415124269-b9140d53610f?q=80&w=2000&auto=format&fit=crop" 
            alt="About Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-brand-black), transparent)', zIndex: 1 }} />
        <div className="bg-grid-premium" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.3 }} />
        
        <div className="premium-container" style={{ position: 'relative', zIndex: 10, padding: '0 5%', textAlign: 'center' }}>
          <div className="fade-up stagger-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 1rem', borderRadius: '50px', border: '1px solid var(--color-brand-accent)', background: 'var(--color-brand-accent-glow)', color: 'var(--color-brand-accent)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--color-brand-accent)', borderRadius: '50%' }} />
            About Annex
          </div>
          <h1 className="premium-title fade-up">
            Empowering Your Future
          </h1>
          <p className="premium-subtitle fade-up stagger-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Since 2014, we have been committed to delivering world-class professional education that bridges the gap between ambition and achievement.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="premium-container" style={{ padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-panel fade-up stagger-1" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, var(--color-brand-accent-glow) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Target className="w-8 h-8" style={{ color: 'var(--color-brand-accent)' }} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '1rem' }}>Our Mission</h2>
                <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: '1.8' }}>
                  To provide high-quality, industry-relevant training that equips individuals and organizations with the skills necessary to excel in a rapidly evolving global market. We strive to foster an environment of continuous learning and innovation.
                </p>
              </div>
            </div>
            
            <div className="glass-panel fade-up stagger-2" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Eye className="w-8 h-8" style={{ color: 'var(--color-brand-white)' }} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '1rem' }}>Our Vision</h2>
                <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: '1.8' }}>
                  To be the leading training institute in the Middle East, recognized for our excellence in education, commitment to student success, and our pivotal role in shaping the workforce of tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use the shared About component for stats and benefits */}
      <About />
      
      {/* Use the shared Testimonials component */}
      <div style={{ paddingTop: '4rem' }}>
        <Testimonials />
      </div>
    </div>
  );
}
