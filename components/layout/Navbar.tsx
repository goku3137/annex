"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "97125463666";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#060b18]/85 backdrop-blur-2xl border border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/[0.03] backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" id="nav-logo">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-shadow duration-300">
              <span className="text-white font-bold text-base leading-none">A</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-widest leading-tight">ANNEX</span>
              <span className="text-blue-400 text-[9px] font-medium tracking-[0.2em] leading-tight">TRAINING INSTITUTE</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 group rounded-lg hover:bg-white/5"
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-blue-400 group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-500/10 rounded-xl transition-all duration-200"
              id="nav-whatsapp"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.856L0 24l6.336-1.5A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.382l-.36-.214-3.732.882.938-3.624-.235-.372A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => setEnquireOpen(true)}
              className="px-5 py-2 text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] font-medium"
              id="nav-enquire"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            id="nav-mobile-toggle"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white origin-center"
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto mt-2 p-4 rounded-2xl bg-[#060b18]/95 backdrop-blur-2xl border border-white/10 shadow-2xl"
              id="nav-mobile-menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 mb-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm text-emerald-400 border border-emerald-500/30 rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  WhatsApp Us
                </a>
                <button
                  onClick={() => { setMobileOpen(false); setEnquireOpen(true); }}
                  className="py-3 text-sm text-white bg-blue-600 rounded-xl font-medium"
                  id="nav-mobile-enquire"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Enquiry Modal ── */}
      <AnimatePresence>
        {enquireOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setEnquireOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-md bg-[#0a1228] border border-white/10 rounded-2xl p-8 shadow-2xl"
              id="enquiry-modal"
            >
              <button
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                onClick={() => setEnquireOpen(false)}
                aria-label="Close enquiry form"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-white mb-1">Enquire Now</h2>
              <p className="text-slate-400 text-sm mb-6">Our team will contact you within 24 hours.</p>
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setEnquireOpen(false); alert("Enquiry submitted! We will contact you shortly."); }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  id="enquiry-name"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  id="enquiry-phone"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  id="enquiry-email"
                />
                <input
                  type="text"
                  placeholder="Interested Course"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  id="enquiry-course"
                />
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                  id="enquiry-message"
                />
                <div className="flex gap-3 mt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-sm"
                    id="enquiry-submit"
                  >
                    Submit Enquiry
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 rounded-xl transition-all duration-200 text-sm font-medium whitespace-nowrap"
                    id="enquiry-whatsapp"
                  >
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Sticky Bottom Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-3 bg-[#060b18]/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex gap-2 max-w-sm mx-auto">
          <a
            href={`tel:+97125463666`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs text-white bg-white/10 rounded-xl"
            id="mobile-bar-call"
          >
            📞 Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl"
            id="mobile-bar-whatsapp"
          >
            💬 WhatsApp
          </a>
          <button
            onClick={() => setEnquireOpen(true)}
            className="flex-1 py-2.5 text-xs text-white bg-blue-600 rounded-xl font-medium"
            id="mobile-bar-enquire"
          >
            Enquire
          </button>
        </div>
      </div>
    </>
  );
}
