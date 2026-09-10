import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";

/* ── Seamless Marquee ─────────────────────────────────────────────────── */
function ScrollingMarquee() {
  const items = [
    "95% Students Placed",
    "Learn from Industry Experts",
    "100% Placement Assistance",
    "Agency Based Learning Model",
    "Live Mentor-Led Sessions",
    "Real-World Projects",
    "Government Recognised Certificates",
    "10,000+ Careers Transformed"
  ];
  
  return (
    <div className="relative overflow-hidden py-4 border-y border-white/[0.03] bg-[#05050A]">
      <div className="animate-marquee">
        {/* Double array for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="text-sm font-bold tracking-wide text-white/80 px-8">
              {item}
            </span>
            <span className="text-[#7C3AED] text-lg leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Trust & Reviews Strip ────────────────────────────────────────────── */
function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#09090E]">
      {/* Background Orbs */}
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-0 left-0 opacity-50" />
      <div className="glow-orb glow-orb-cyan w-[300px] h-[300px] bottom-0 right-0 opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          {/* Google Reviews */}
          <div className="glass-panel rounded-2xl p-6 flex items-center gap-5 w-full md:w-auto">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shrink-0">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85L38.4 6.1C34.56 2.7 29.52.5 24 .5 14.76.5 6.88 6.1 3.24 14.1l7.05 5.47C12.04 13.27 17.56 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.68c-.55 2.97-2.22 5.48-4.73 7.17l7.3 5.67C43.36 37.92 46.5 31.68 46.5 24.5z"/>
                <path fill="#FBBC05" d="M10.29 28.43A14.64 14.64 0 0 1 9.5 24c0-1.54.26-3.04.73-4.43L3.18 14.1A23.5 23.5 0 0 0 .5 24c0 3.77.88 7.34 2.44 10.5l7.35-6.07z"/>
                <path fill="#34A853" d="M24 47.5c5.52 0 10.16-1.83 13.55-4.97l-7.3-5.67c-1.83 1.23-4.18 1.96-6.25 1.96-6.44 0-11.96-3.77-13.71-9.39l-7.35 6.07C6.88 41.9 14.76 47.5 24 47.5z"/>
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-1">Google Reviews</div>
              <div className="text-xl font-bold text-white leading-none mb-1.5">Rated 4.8/5</div>
              <div className="flex text-[#FBBC05] text-sm">★★★★★</div>
            </div>
          </div>

          {/* Accreditations */}
          <div className="glass-panel rounded-2xl p-6 flex items-center gap-5 w-full md:w-auto">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] p-[1px]">
              <div className="w-full h-full bg-[#12121A] rounded-xl flex items-center justify-center">
                <span className="text-xl">🏆</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-1">Recognized By</div>
              <div className="text-base font-bold text-white leading-tight">ACTVET, DOH, AMCA<br />British Council, IDP</div>
            </div>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "95%", t: "Students Placed", c: "from-[#7C3AED] to-[#4F46E5]" },
            { n: "10k+", t: "Careers Transformed", c: "from-[#00E5FF] to-[#0070F3]" },
            { n: "50+", t: "Corporate Partners", c: "from-[#A855F7] to-[#EC4899]" }
          ].map(m => (
            <div key={m.t} className="glass-card rounded-3xl p-10 flex flex-col items-center text-center group">
              <div className={`text-6xl font-black mb-3 bg-gradient-to-r ${m.c} text-transparent bg-clip-text transition-transform group-hover:scale-110 duration-300`}>
                {m.n}
              </div>
              <div className="text-[#94A3B8] font-bold tracking-wide uppercase text-sm">{m.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#09090E]" id="final-cta">
      {/* Intense Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-pulse" />
          Ready to Start?
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Transform Your <br />
          <span className="text-gradient-cyan">Future Today.</span>
        </h2>
        <p className="text-[#94A3B8] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who have advanced their careers with our industry-leading training programs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="/contact" className="btn-premium">
            <span>Apply Now</span>
          </Link>
          <a
            href="https://wa.me/97125463666"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-[#09090E]">
      <Hero />
      <ScrollingMarquee />
      <TrustSection />
      <Courses />
      <About />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
