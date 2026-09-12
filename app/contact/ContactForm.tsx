"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid var(--color-brand-border)',
    borderRadius: '12px',
    padding: '1rem',
    color: 'var(--color-brand-white)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    fontSize: '0.65rem',
    fontWeight: 'bold',
    color: 'var(--color-brand-text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginLeft: '0.25rem',
    marginBottom: '0.5rem',
    display: 'block'
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: 'center', padding: '2rem 0' }}
      >
        <div style={{ width: '80px', height: '80px', background: 'var(--color-brand-accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--color-brand-accent)' }}>
          <Check className="w-10 h-10" style={{ color: 'var(--color-brand-accent)' }} />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '1rem' }}>Message Sent</h3>
        <p style={{ color: 'var(--color-brand-text-muted)', marginBottom: '2rem' }}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-premium-outline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>First Name *</label>
          <input
            type="text"
            required
            style={inputStyle}
            placeholder="John"
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input
            type="text"
            required
            style={inputStyle}
            placeholder="Doe"
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            required
            style={inputStyle}
            placeholder="john@example.com"
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            style={inputStyle}
            placeholder="+971 50 000 0000"
            onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Course of Interest</label>
        <select 
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
        >
          <option value="" style={{ color: '#000' }}>General Enquiry</option>
          <option value="medical" style={{ color: '#000' }}>Medical Coding</option>
          <option value="tech" style={{ color: '#000' }}>Programming & IT</option>
          <option value="design" style={{ color: '#000' }}>Design & AutoCAD</option>
          <option value="language" style={{ color: '#000' }}>Languages & IELTS</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Your Message *</label>
        <textarea
          required
          rows={4}
          style={{ ...inputStyle, resize: 'none' }}
          placeholder="How can we help you?"
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-accent)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-brand-border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-premium"
        style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
