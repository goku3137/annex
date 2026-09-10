import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | Annex Training Institute",
  description: "Get in touch with Annex Training Institute in Abu Dhabi. We're here to help you find the right professional training program.",
};

const WHATSAPP = "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.";

export default function ContactPage() {
  return (
    <div className="bg-[#09090E] min-h-screen pt-24 pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] top-0 left-[-10%] opacity-40" />
      <div className="glow-orb glow-orb-cyan w-[500px] h-[500px] bottom-0 right-[-10%] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" />
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let's Start a <span className="text-gradient-cyan">Conversation</span>
          </h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Have questions about our programs, corporate training, or admissions? Our team is ready to help you take the next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-[2rem] p-8 group">
              <div className="w-12 h-12 bg-[#7C3AED]/20 border border-[#7C3AED]/40 rounded-xl flex items-center justify-center text-2xl mb-6">
                📍
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                Office 604, Al Falah Tower<br />
                Al Falah Street<br />
                Abu Dhabi, UAE
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00E5FF] font-bold text-sm hover:underline"
              >
                Get Directions →
              </a>
            </div>

            <div className="glass-card rounded-[2rem] p-8 group">
              <div className="w-12 h-12 bg-[#00E5FF]/20 border border-[#00E5FF]/40 rounded-xl flex items-center justify-center text-2xl mb-6">
                💬
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Contact Us</h3>
              <div className="flex flex-col gap-3 mt-4">
                <a href="tel:+97125463666" className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors">
                  <span className="text-xl">📞</span> +971 2 5463 666
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors">
                  <span className="text-xl">📱</span> WhatsApp Us
                </a>
                <a href="mailto:info@annexinstitute.com" className="flex items-center gap-3 text-[#94A3B8] hover:text-white transition-colors">
                  <span className="text-xl">✉️</span> info@annex.ae
                </a>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-8">
              <div className="w-12 h-12 bg-[#F5C518]/20 border border-[#F5C518]/40 rounded-xl flex items-center justify-center text-2xl mb-6">
                ⏰
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Office Hours</h3>
              <ul className="space-y-2 mt-4 text-[#94A3B8]">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF]" />
              <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-[#94A3B8] mb-8">Fill out the form below and our admissions team will contact you shortly.</p>
              
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
