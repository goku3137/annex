"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Curriculum" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_URL = "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="premium-container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--color-brand-accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px var(--color-brand-accent-glow)' }}>
              <span style={{ color: 'var(--color-brand-black)', fontWeight: '900', fontSize: '1.2rem', lineHeight: '1' }}>A</span>
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '0.15em', color: 'var(--color-brand-white)' }}>ANNEX</div>
              <div style={{ color: 'var(--color-brand-accent)', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Institute</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="premium-nav-link"
                style={{ fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="premium-nav-link" style={{ fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              WhatsApp
            </a>
            <Link href="/contact" className="btn-premium">
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            style={{ background: 'transparent', border: 'none', color: 'var(--color-brand-white)', cursor: 'pointer' }}
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--color-brand-border)', overflow: 'hidden' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 5%' }}>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.2rem', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div style={{ padding: '2rem 0' }}>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-premium"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Sticky CTA */}
      <div style={{ display: 'flex', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40, background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="mobile-sticky-cta">
        <a href="tel:+97125463666" style={{ flex: 1, textAlign: 'center', padding: '1rem', color: 'var(--color-brand-white)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          Call
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', padding: '1rem', color: 'var(--color-brand-black)', background: 'var(--color-brand-accent)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
          WhatsApp
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-nav-toggle { display: none !important; }
          .mobile-sticky-cta { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
