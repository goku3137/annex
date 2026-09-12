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
    <footer style={{ background: 'var(--color-brand-black)', paddingTop: '6rem', paddingBottom: '2rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-brand-border)' }}>
      {/* Decorative Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(0, 255, 204, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

      <div className="premium-container" style={{ padding: '0 5%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', textDecoration: 'none' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--color-brand-accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px var(--color-brand-accent-glow)' }}>
                <span style={{ color: 'var(--color-brand-black)', fontWeight: '900', fontSize: '1.2rem', lineHeight: '1' }}>A</span>
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '0.15em', color: 'var(--color-brand-white)' }}>ANNEX</div>
                <div style={{ color: 'var(--color-brand-accent)', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Institute</div>
              </div>
            </Link>
            <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Transforming careers through rigorous, industry-aligned education in Abu Dhabi, UAE.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} className="hover-glow">IN</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} className="hover-glow">FB</a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-brand-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-white)', textDecoration: 'none', transition: 'all 0.3s ease' }} className="hover-glow">IG</a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 style={{ color: 'var(--color-brand-white)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>Programs</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {footerLinks.programs.map(link => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 style={{ color: 'var(--color-brand-white)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'var(--color-brand-white)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-brand-text-muted)' }}>
              <a href="tel:+97125463666" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.25rem' }}>Phone</div>
                +971 2 5463 666
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.25rem' }}>WhatsApp</div>
                Chat With Us
              </a>
              <div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-accent)', marginBottom: '0.25rem' }}>Location</div>
                604, Al Falah Tower,<br/>Al Falah St, Abu Dhabi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-brand-border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'var(--color-brand-text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Annex Training Institute
          </p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Link href="/privacy" style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }} className="hover-glow">Privacy</Link>
            <Link href="/terms" style={{ color: 'var(--color-brand-text-muted)', textDecoration: 'none' }} className="hover-glow">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
