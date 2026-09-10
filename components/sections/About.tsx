"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 100, suffix: "+", label: "Courses Available", icon: "📚" },
  { value: 20, suffix: "+", label: "Experienced Trainers", icon: "👨‍🏫" },
  { value: 500, suffix: "+", label: "Students Trained", icon: "🎓" },
  { value: 10, suffix: "+", label: "Years of Excellence", icon: "⭐" },
];

const benefits = [
  {
    icon: "🎯",
    title: "Experienced Trainers",
    description: "Professionals with real industry experience and a passion for teaching.",
  },
  {
    icon: "👤",
    title: "Individual Attention",
    description: "Small class sizes mean you get direct support from your trainer when you need it.",
  },
  {
    icon: "⏰",
    title: "Flexible Timings",
    description: "Morning, evening, and weekend batches designed to fit your schedule.",
  },
  {
    icon: "🔬",
    title: "Practical Learning",
    description: "Hands-on training focused on skills you can immediately apply in the workplace.",
  },
  {
    icon: "📱",
    title: "Online + Classroom",
    description: "Choose the learning format that works best for you — in-person or live online.",
  },
  {
    icon: "🏆",
    title: "Recognized Certifications",
    description: "Courses aligned with internationally recognized certifications and professional bodies.",
  },
  {
    icon: "📋",
    title: "Updated Materials",
    description: "Training materials are regularly updated to reflect current industry standards.",
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Resume guidance and career support to help you take the next step.",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="section relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020810] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-4"
          >
            WHY ANNEX
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Built for Your <span className="gradient-text">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Annex Training Institute is committed to delivering professional, practical, and industry-relevant training that makes a real difference in your career.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-blue-500/20 rounded-2xl p-6 text-center transition-all duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-1 text-glow">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-blue-400 group-hover:w-3/4 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs font-medium tracking-widest text-blue-400">WHY CHOOSE US</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.07 }}
              className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/20 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(59,130,246,0.08)]"
            >
              <div className="text-2xl mb-3">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-blue-100 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Training Methods */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Flexible <span className="gradient-text">Learning Formats</span>
            </h3>
            <p className="text-slate-400 text-sm">Learn the way that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏫",
                title: "Classroom Training",
                color: "from-blue-500/15 to-blue-600/5",
                border: "border-blue-500/20",
                features: [
                  "Instructor-led sessions",
                  "Hands-on demonstrations",
                  "Peer interaction",
                  "Post-class support",
                ],
              },
              {
                icon: "💻",
                title: "Online Live Training",
                color: "from-indigo-500/15 to-indigo-600/5",
                border: "border-indigo-500/20",
                features: [
                  "Live instructor sessions",
                  "Interactive discussions",
                  "Digital whiteboard",
                  "Recorded sessions",
                ],
              },
              {
                icon: "🏢",
                title: "Corporate Training",
                color: "from-purple-500/15 to-purple-600/5",
                border: "border-purple-500/20",
                features: [
                  "On-site or online",
                  "Customized curriculum",
                  "Team-based learning",
                  "Flexible scheduling",
                ],
              },
            ].map((method) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className={`bg-gradient-to-br ${method.color} border ${method.border} rounded-2xl p-6`}
              >
                <div className="text-3xl mb-4">{method.icon}</div>
                <h4 className="text-white font-semibold mb-4">{method.title}</h4>
                <ul className="space-y-2">
                  {method.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
