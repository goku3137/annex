"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const FloatingObjects = dynamic(() => import("@/components/3d/FloatingObjects"), { ssr: false });

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="premium-section" style={{ background: 'var(--color-brand-charcoal)', borderTop: '1px solid var(--color-brand-border)', borderBottom: '1px solid var(--color-brand-border)', position: 'relative', overflow: 'hidden' }} id="about">
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6, pointerEvents: 'none' }}>
        {mounted && <FloatingObjects />}
      </div>

      {/* Decorative Glow */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="premium-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div className="fade-up stagger-1">
            <h2 className="premium-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>
              Excellence in <br />
              <span style={{ color: 'var(--color-brand-accent)' }}>Education.</span>
            </h2>
            <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Annex Training Institute is a premier educational institution in Abu Dhabi, dedicated to bridging the gap between academic learning and industry requirements.
            </p>
            <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              We provide world-class training in Medical Coding, IT, Engineering, and Business Management, empowering professionals to achieve their career aspirations through practical, hands-on learning.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "KHDA & ACTVET Approved",
                "Industry-Expert Instructors",
                "State-of-the-art Facilities",
                "Flexible Learning Options"
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-brand-white)', fontWeight: 'bold' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-brand-accent-glow)', border: '1px solid var(--color-brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up stagger-2" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--color-brand-white)', lineHeight: '1', marginBottom: '1rem' }}>
                15+
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '2rem' }}>
                Years of Excellence
              </div>
              <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                Delivering high-quality education and corporate training solutions tailored to the dynamic needs of the global market.
              </p>
            </div>
            {/* Abstract geometric decoration */}
            <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '100px', height: '100px', border: '2px solid var(--color-brand-accent)', borderRadius: '50%', opacity: 0.5, zIndex: 1 }}></div>
            <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', width: '150px', height: '150px', border: '1px solid rgba(255,255,255,0.2)', opacity: 0.5, zIndex: 1, transform: 'rotate(45deg)' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
