import Link from "next/link";

const footerLinks = {
  programs: [
    { label: "Medical & Healthcare", href: "/courses?category=medical-healthcare" },
    { label: "Programming & Data", href: "/courses?category=programming-data" },
    { label: "Engineering & CAD", href: "/courses?category=engineering-cad" },
    { label: "Digital Marketing", href: "/courses?category=digital-marketing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Corporate Training", href: "/corporate" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const WHATSAPP = "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

export default function Footer() {
  return (
    <footer className="bg-[#05050A] pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#00E5FF] p-[1px]">
                <div className="w-full h-full bg-[#05050A] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">A</span>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-[0.2em] leading-none mb-1">ANNEX</div>
                <div className="text-[#00E5FF] text-[9px] font-bold tracking-[0.25em] leading-none">INSTITUTE</div>
              </div>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Transforming careers through practical, industry-aligned education in Abu Dhabi, UAE.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all">fb</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all">ig</a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Programs</h3>
            <ul className="space-y-4">
              {footerLinks.programs.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#94A3B8] hover:text-[#00E5FF] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#94A3B8] hover:text-[#00E5FF] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-[#94A3B8]">
              <a href="tel:+97125463666" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-[#00E5FF]">📞</span> +971 2 5463 666
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-[#00E5FF]">💬</span> WhatsApp Us
              </a>
              <div className="flex items-start gap-3">
                <span className="text-[#00E5FF]">📍</span> 604, Al Falah Tower,<br/>Al Falah St, Abu Dhabi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} Annex Training Institute. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#475569]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
