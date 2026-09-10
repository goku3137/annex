"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-[2rem] p-12 text-center"
      >
        <div className="w-20 h-20 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-[#00E5FF]">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent</h3>
        <p className="text-[#94A3B8] mb-8">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">First Name *</label>
          <input
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">Last Name *</label>
          <input
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">Email Address *</label>
          <input
            type="email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">Phone Number</label>
          <input
            type="tel"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all"
            placeholder="+971 50 000 0000"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">Course of Interest</label>
        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all appearance-none cursor-pointer">
          <option value="">General Enquiry</option>
          <option value="medical">Medical Coding</option>
          <option value="tech">Programming & IT</option>
          <option value="design">Design & AutoCAD</option>
          <option value="language">Languages & IELTS</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase ml-1">Your Message *</label>
        <textarea
          required
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#7C3AED] focus:bg-black/40 outline-none transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-premium w-full mt-4 py-4"
      >
        <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  );
}
