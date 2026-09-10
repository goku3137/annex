import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About Us | Annex Training Institute",
  description: "Learn about Annex Training Institute, our mission, vision, and the expert team behind our professional training programs in Abu Dhabi.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#09090E] pt-24">
      {/* Premium Hero Banner */}
      <section className="relative py-24 overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577415124269-b9140d53610f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090E] via-[#09090E]/80 to-[#09090E]" />
        <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-0 left-[-10%] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full" />
            About Annex
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Empowering Your <br />
            <span className="text-gradient-purple">Future</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Since 2014, we have been committed to delivering world-class professional education that bridges the gap between ambition and achievement.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-[#00E5FF]" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                To provide high-quality, industry-relevant training that equips individuals and organizations with the skills necessary to excel in a rapidly evolving global market. We strive to foster an environment of continuous learning and innovation.
              </p>
            </div>
            
            <div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6">
                👁️
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                To be the leading training institute in the Middle East, recognized for our excellence in education, commitment to student success, and our pivotal role in shaping the workforce of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use the shared About component for stats and benefits */}
      <About />
      
      {/* Use the shared Testimonials component */}
      <Testimonials />
    </div>
  );
}
