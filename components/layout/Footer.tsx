import Link from "next/link";

const footerLinks = {
  courses: [
    { label: "Medical & Healthcare", href: "/courses?category=medical-healthcare" },
    { label: "Programming & Data", href: "/courses?category=programming-data" },
    { label: "Designing & Creative", href: "/courses?category=designing-creative" },
    { label: "Engineering & CAD", href: "/courses?category=engineering-cad" },
    { label: "IT & Networking", href: "/courses?category=it-networking" },
    { label: "Languages & English", href: "/courses?category=languages-english" },
    { label: "Accounting", href: "/courses?category=accounting" },
    { label: "Digital Marketing", href: "/courses?category=digital-marketing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Corporate Training", href: "/corporate" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const WHATSAPP_URL =
  "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

export default function Footer() {
  return (
    <footer className="relative bg-[#020810] border-t border-white/[0.06] pt-20 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" id="footer-logo">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <span className="text-white font-bold text-base">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-widest leading-tight">ANNEX</span>
                <span className="text-blue-400 text-[9px] font-medium tracking-[0.2em] leading-tight">TRAINING INSTITUTE</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Professional and vocational training institute based in Abu Dhabi, UAE. Helping students and professionals build skills, earn certifications, and advance their careers.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+97125463666"
                className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                id="footer-phone"
              >
                <span className="text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors">📞</span>
                <span>+971 2 5463 666</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <span className="text-blue-500 mt-0.5">📍</span>
                <span>604, Al Falah Tower, Near Al Falah Plaza,<br />Al Falah Street, Abu Dhabi, UAE</span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                id="footer-whatsapp"
              >
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "Facebook", icon: "f", href: "#" },
                { label: "Instagram", icon: "in", href: "#" },
                { label: "LinkedIn", icon: "li", href: "#" },
                { label: "X", icon: "x", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/30 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 text-xs font-bold"
                  id={`footer-social-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Courses</h3>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + CTA Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Support</h3>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-5">
              <p className="text-white text-sm font-semibold mb-2">Ready to start?</p>
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                Explore our courses or speak with an advisor today.
              </p>
              <Link
                href="/courses"
                className="block w-full text-center py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors duration-200"
                id="footer-explore-cta"
              >
                Explore Courses →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Annex Training Institute. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            604, Al Falah Tower, Al Falah Street, Abu Dhabi, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
