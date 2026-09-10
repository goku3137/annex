"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Programs" },
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
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2rem] border ${
          scrolled 
            ? "bg-[#09090E]/80 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 px-6" 
            : "bg-transparent border-transparent py-4 px-2"
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] p-[1px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#09090E] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl leading-none">A</span>
                </div>
              </div>
              <div className={scrolled ? "block" : "hidden sm:block"}>
                <div className="text-white font-bold text-sm tracking-[0.2em] leading-none mb-1">ANNEX</div>
                <div className="text-[#00E5FF] text-[9px] font-bold tracking-[0.25em] leading-none">INSTITUTE</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] text-xs font-bold tracking-widest uppercase hover:text-white transition-colors">
                WhatsApp
              </a>
              <Link href="/contact" className="btn-premium py-2.5 px-6 text-sm">
                <span>Apply Now</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 p-4 rounded-[2rem] bg-[#09090E]/95 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white font-bold text-lg p-3 border-b border-white/5 hover:text-[#00E5FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-premium w-full mt-4 text-center"
                >
                  <span>Apply Now</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="glass-panel rounded-[2rem] p-2 flex gap-2 shadow-2xl">
          <a href="tel:+97125463666" className="flex-1 text-center py-3 text-white text-xs font-bold tracking-widest uppercase bg-white/5 rounded-xl border border-white/10">Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 text-[#00E5FF] text-xs font-bold tracking-widest uppercase bg-[#00E5FF]/10 rounded-xl border border-[#00E5FF]/20">WhatsApp</a>
        </div>
      </div>
    </>
  );
}
