"use client";

export default function ContactForm() {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
      <p className="text-slate-500 text-sm mb-7">
        Fill in the form below and our team will get back to you within one business day.
      </p>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We will contact you shortly.");
        }}
        id="contact-form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-name">
              Full Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-phone">
              Phone Number *
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              placeholder="+971 __ ______"
              className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-email">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-course">
            Interested Course
          </label>
          <input
            id="contact-course"
            type="text"
            placeholder="e.g. Medical Coding, IELTS, Python..."
            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-message">
            Message *
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            placeholder="Tell us how we can help..."
            className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] mt-1"
          id="contact-submit"
        >
          Send Message →
        </button>
        <p className="text-center text-xs text-slate-600">
          Or call us directly at{" "}
          <a href="tel:+97125463666" className="text-blue-400 hover:underline">
            +971 2 5463 666
          </a>
        </p>
      </form>
    </div>
  );
}
