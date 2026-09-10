import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Annex Training Institute — our mission, history, and commitment to professional training in Abu Dhabi, UAE.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center py-16">
        <span className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-5">
          ABOUT ANNEX
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Professional Training <span className="gradient-text">Built for You</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Annex Training Institute is a professional and vocational training centre located in Abu Dhabi, UAE, dedicated to helping students and working professionals build practical skills, earn industry-recognized certifications, and advance their careers.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              description:
                "To provide high-quality, practical, and industry-relevant professional training that empowers individuals to achieve their career goals and contribute meaningfully to their organizations and communities.",
            },
            {
              icon: "👁️",
              title: "Our Vision",
              description:
                "To be the leading professional training institute in Abu Dhabi, recognized for the quality of our programs, the expertise of our trainers, and the outcomes achieved by our students.",
            },
            {
              icon: "💎",
              title: "Our Values",
              description:
                "Quality education, practical learning, individual attention, flexible delivery, professional excellence, and a genuine commitment to every student's success.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 hover:border-blue-500/20 transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h2 className="text-white font-bold text-xl mb-3">{item.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/[0.06]">
        <div className="text-center mb-10">
          <span className="text-xs font-medium tracking-widest text-blue-400">RECOGNIZED BY</span>
          <h2 className="text-3xl font-bold text-white mt-3 mb-2">Accreditations & Affiliations</h2>
          <p className="text-slate-500 text-sm">Annex Training Institute is affiliated with and accredited by professional bodies including:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "ACTVET", sub: "Abu Dhabi Centre for Technical & Vocational Education" },
            { label: "DOH", sub: "Department of Health, Abu Dhabi" },
            { label: "AMCA", sub: "American Medical Certification Association" },
            { label: "British Council", sub: "British Council" },
            { label: "IDP / IELTS", sub: "IDP Education" },
          ].map((a) => (
            <div
              key={a.label}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold text-xs">{a.label.charAt(0)}</span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{a.label}</div>
              <div className="text-slate-600 text-[10px] leading-relaxed">{a.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-medium tracking-widest text-blue-400">OUR LOCATION</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Visit Us in Abu Dhabi</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              We are conveniently located in the heart of Abu Dhabi, easily accessible by public and private transport.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p>📍 604, Al Falah Tower, Near Al Falah Plaza, Al Falah Street, Abu Dhabi, UAE</p>
              <p>📞 <a href="tel:+97125463666" className="text-blue-400 hover:underline">+971 2 5463 666</a></p>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <p className="text-slate-500 text-sm">Al Falah Tower, Abu Dhabi</p>
              <a
                href="https://maps.google.com/?q=Al+Falah+Tower+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-blue-400 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center py-16">
        <h2 className="text-3xl font-bold text-white mb-4">Start Your Training Journey</h2>
        <p className="text-slate-400 mb-8">Explore over 100 professional courses and find the right program for your goals.</p>
        <Link
          href="/courses"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          id="about-cta-explore"
        >
          Explore All Courses →
        </Link>
      </section>
    </div>
  );
}
