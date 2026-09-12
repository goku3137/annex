import ContactForm from "./ContactForm";
import { MapPin, MessageCircle, Phone, Smartphone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Annex Training Institute",
  description: "Get in touch with Annex Training Institute in Abu Dhabi. We're here to help you find the right professional training program.",
};

const WHATSAPP = "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--color-brand-black)', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div className="bg-grid-premium" style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-brand-accent-glow) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div className="premium-container" style={{ padding: '0 5%', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 1rem', borderRadius: '50px', border: '1px solid var(--color-brand-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--color-brand-white)', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--color-brand-white)', borderRadius: '50%' }} />
            Get in Touch
          </div>
          <h1 className="premium-title fade-up stagger-1">
            Let's Start a Conversation
          </h1>
          <p className="premium-subtitle fade-up stagger-2" style={{ margin: '0 auto' }}>
            Have questions about our programs, corporate training, or admissions? Our team is ready to help you take the next step.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Left: Contact Info */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-panel fade-up stagger-1">
              <div style={{ width: '48px', height: '48px', background: 'var(--color-brand-accent-glow)', border: '1px solid var(--color-brand-accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <MapPin className="w-6 h-6" style={{ color: 'var(--color-brand-accent)' }} />
              </div>
              <h3 style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Visit Us</h3>
              <p style={{ color: 'var(--color-brand-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Office 604, Al Falah Tower<br />
                Al Falah Street<br />
                Abu Dhabi, UAE
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-brand-accent)', fontWeight: 'bold', fontSize: '0.85rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                className="hover-glow"
              >
                Get Directions →
              </a>
            </div>

            <div className="glass-panel fade-up stagger-2">
              <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <MessageCircle className="w-6 h-6" style={{ color: 'var(--color-brand-white)' }} />
              </div>
              <h3 style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>Contact Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+97125463666" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                  <Phone className="w-5 h-5" /> +971 2 5463 666
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                  <Smartphone className="w-5 h-5" /> WhatsApp Us
                </a>
                <a href="mailto:info@annexinstitute.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-brand-text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }} className="hover-glow">
                  <Mail className="w-5 h-5" /> info@annex.ae
                </a>
              </div>
            </div>

            <div className="glass-panel fade-up stagger-3">
              <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-brand-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Clock className="w-6 h-6" style={{ color: 'var(--color-brand-text)' }} />
              </div>
              <h3 style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>Office Hours</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-brand-text-muted)', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday - Friday:</span>
                  <span style={{ color: 'var(--color-brand-white)', fontWeight: '500' }}>9:00 AM - 8:00 PM</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Saturday:</span>
                  <span style={{ color: 'var(--color-brand-white)', fontWeight: '500' }}>10:00 AM - 6:00 PM</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday:</span>
                  <span style={{ color: 'var(--color-brand-white)', fontWeight: '500' }}>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ flex: '2 1 500px' }}>
            <div className="glass-panel fade-up stagger-2" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-brand-white)', marginBottom: '0.5rem' }}>Send a Message</h2>
              <p style={{ color: 'var(--color-brand-text-muted)', marginBottom: '2.5rem' }}>Fill out the form below and our admissions team will contact you shortly.</p>
              
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
