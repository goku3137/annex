import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Annex Training Institute in Abu Dhabi. Call us, WhatsApp, or fill in our contact form. We are here to help.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 text-center py-12">
        <span className="inline-block text-xs font-medium tracking-widest text-blue-400 mb-5">
          GET IN TOUCH
        </span>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Talk to <span className="gradient-text">Our Team</span>
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Have a question about a course or want to discuss corporate training? We&apos;re here to help. Reach out through any of the options below.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Methods — left */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: "📞",
                title: "Call Us",
                detail: "+971 2 5463 666",
                sub: "Sunday – Thursday, 8:00 AM – 6:00 PM",
                href: "tel:+97125463666",
                cta: "Call Now",
                id: "contact-call",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                detail: "+971 2 5463 666",
                sub: "Chat with us for quick responses",
                href: "https://wa.me/97125463666?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20courses.",
                cta: "Open WhatsApp",
                id: "contact-whatsapp",
              },
              {
                icon: "📍",
                title: "Visit Us",
                detail: "604, Al Falah Tower",
                sub: "Near Al Falah Plaza, Al Falah Street, Abu Dhabi, UAE",
                href: "https://maps.google.com/?q=Al+Falah+Tower+Abu+Dhabi",
                cta: "View on Map",
                id: "contact-location",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-blue-300 text-sm font-medium mb-1">{item.detail}</p>
                    <p className="text-slate-500 text-xs mb-3 leading-relaxed">{item.sub}</p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-block text-xs font-semibold text-white bg-blue-600/70 hover:bg-blue-600 px-4 py-1.5 rounded-lg transition-colors duration-200"
                      id={item.id}
                    >
                      {item.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form — right (client component) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl h-56 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <div className="text-5xl mb-3">📍</div>
            <p className="text-slate-400 font-medium">604, Al Falah Tower</p>
            <p className="text-slate-600 text-sm">Al Falah Street, Abu Dhabi, UAE</p>
            <a
              href="https://maps.google.com/?q=Al+Falah+Tower+Abu+Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-400 border border-blue-500/30 px-5 py-2 rounded-lg hover:bg-blue-500/10 transition-colors"
              id="contact-map-link"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
