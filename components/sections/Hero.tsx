"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '140px' }}>
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.8 }}>
        <HeroScene />
      </div>
      
      {/* Overlay to ensure text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.4) 100%)', zIndex: 1 }} />

      <div className="premium-container" style={{ position: 'relative', zIndex: 10, padding: '0 5%', width: '100%' }}>
        <div style={{ maxWidth: '800px' }}>
          <div className="fade-up stagger-1" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', borderRadius: '50px', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)' }}>Leading Training Institute in Abu Dhabi</span>
          </div>
          
          <h1 className="premium-title fade-up stagger-2">
            Elevate Your <br />
            <span style={{ color: 'var(--color-brand-accent)', textShadow: '0 0 20px var(--color-brand-accent-glow)' }}>Potential.</span>
          </h1>
          
          <p className="premium-subtitle fade-up stagger-3" style={{ margin: '0 0 3rem 0', color: 'var(--color-brand-text)' }}>
            Industry-leading certifications and practical training programs designed to accelerate your career in Medical, Engineering, IT, and Business.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }} className="fade-up stagger-4">
            <Link href="/courses" className="btn-premium">
              Explore Programs
            </Link>
            <Link href="/contact" className="btn-premium-outline">
              Contact Admissions
            </Link>
          </div>
          
          <div className="fade-up stagger-4" style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-brand-white)' }}>15K+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-text-muted)' }}>Students Trained</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--color-brand-border)' }}></div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-brand-white)' }}>50+</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-text-muted)' }}>Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
