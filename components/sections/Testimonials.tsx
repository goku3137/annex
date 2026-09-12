"use client";

import { testimonials } from "@/data/testimonials";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    })
  };

  const t = testimonials[currentIndex];

  return (
    <section className="premium-section" style={{ overflow: 'hidden' }}>
      <div className="premium-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title fade-up">Student Success</h2>
          <p className="premium-subtitle fade-up stagger-1">
            Hear from professionals who transformed their careers with us.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', height: '400px', display: 'flex', alignItems: 'center' }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="glass-panel"
              style={{ position: 'absolute', width: '100%', left: 0, right: 0 }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} width="24" height="24" viewBox="0 0 24 24" fill={idx < t.rating ? "var(--color-brand-accent)" : "rgba(255,255,255,0.1)"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p style={{ color: 'var(--color-brand-text)', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-brand-gray), #333)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-brand-white)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1.1rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--color-brand-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{t.course}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prevSlide} style={{ position: 'absolute', left: '-4rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }} className="hover-glow">
            <ChevronLeft />
          </button>
          
          <button onClick={nextSlide} style={{ position: 'absolute', right: '-4rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }} className="hover-glow">
            <ChevronRight />
          </button>
        </div>
        
        {/* Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              style={{ width: i === currentIndex ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === currentIndex ? 'var(--color-brand-accent)' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
