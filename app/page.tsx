import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";

// Trust / accreditation strip (server component — no interactivity needed)
function TrustStrip() {
  const accreditations = [
    { label: "ACTVET", full: "Abu Dhabi Centre for Technical & Vocational Education" },
    { label: "DOH", full: "Department of Health, Abu Dhabi" },
    { label: "AMCA", full: "American Medical Certification Association" },
    { label: "British Council", full: "British Council Affiliated" },
    { label: "IDP", full: "IDP IELTS" },
  ];
  return (
    <section className="py-10 border-y border-white/[0.06] bg-[#020810]/60" id="accreditations">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest text-slate-600 mb-6">
          ACCREDITATIONS & PROFESSIONAL AFFILIATIONS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {accreditations.map((a) => (
            <div
              key={a.label}
              title={a.full}
              className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-slate-400 text-sm font-medium">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured categories quick-nav
function CategoryNav() {
  const cats = [
    { icon: "🏥", label: "Medical", href: "/courses?category=medical-healthcare" },
    { icon: "💻", label: "Programming", href: "/courses?category=programming-data" },
    { icon: "🎨", label: "Design", href: "/courses?category=designing-creative" },
    { icon: "📐", label: "Engineering", href: "/courses?category=engineering-cad" },
    { icon: "🌐", label: "IT", href: "/courses?category=it-networking" },
    { icon: "🗣️", label: "Languages", href: "/courses?category=languages-english" },
    { icon: "📊", label: "Accounting", href: "/courses?category=accounting" },
    { icon: "📱", label: "Marketing", href: "/courses?category=digital-marketing" },
  ];
  return (
    <section className="py-12 relative" id="category-nav">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {cats.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-blue-500/10 border border-white/[0.07] hover:border-blue-500/30 rounded-2xl text-slate-400 hover:text-white transition-all duration-200 text-sm"
              id={`home-cat-${cat.label.toLowerCase()}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA banner
function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="final-cta">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-5">
          START YOUR JOURNEY
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Take the Next Step{" "}
          <span className="gradient-text">in Your Career?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore our professional training programs or speak with an advisor to find the right learning path for your goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            id="final-cta-explore"
          >
            Explore Courses →
          </Link>
          <a
            href="https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10 hover:border-white/20 font-medium rounded-xl transition-all duration-200"
            id="final-cta-advisor"
          >
            Talk to an Advisor
          </a>
        </div>

        {/* Contact quick-row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <a href="tel:+97125463666" className="flex items-center gap-2 hover:text-slate-300 transition-colors">
            📞 +971 2 5463 666
          </a>
          <span className="hidden md:block">·</span>
          <span className="flex items-center gap-2">
            📍 Al Falah Street, Abu Dhabi
          </span>
          <span className="hidden md:block">·</span>
          <a
            href="https://wa.me/97125463666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryNav />
      <Courses />
      <About />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
