import { Suspense } from "react";
import Courses from "@/components/sections/Courses";

export const metadata = {
  title: "All Programs | Annex Training Institute",
  description: "Explore our comprehensive list of professional training programs including Medical Coding, IT, AutoCAD, IELTS, and more.",
};

export default function CoursesPage() {
  return (
    <div className="bg-[#09090E] min-h-screen pt-24">
      {/* Premium Hero Banner */}
      <section className="relative py-24 overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090E] via-[#09090E]/80 to-[#09090E]" />
        <div className="glow-orb glow-orb-cyan w-[500px] h-[500px] top-0 right-[-10%] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full" />
            Academy Catalog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Find Your <span className="text-gradient-cyan">Program</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Browse our complete catalog of industry-aligned courses, bootcamps, and professional certifications.
          </p>
        </div>
      </section>

      {/* The main courses grid logic is handled in the Courses component */}
      <Suspense fallback={
        <div className="py-32 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#7C3AED]/20 border-t-[#00E5FF] rounded-full animate-spin" />
        </div>
      }>
        <div className="-mt-32">
          <Courses />
        </div>
      </Suspense>
    </div>
  );
}
