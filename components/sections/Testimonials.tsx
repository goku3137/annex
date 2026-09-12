import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="premium-section">
      <div className="premium-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title fade-up">Student Success</h2>
          <p className="premium-subtitle fade-up stagger-1">
            Hear from professionals who transformed their careers with us.
          </p>
        </div>

        <div className="premium-grid">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`glass-panel fade-up stagger-${(i % 4) + 1}`}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} width="20" height="20" viewBox="0 0 24 24" fill={idx < t.rating ? "var(--color-brand-accent)" : "rgba(255,255,255,0.1)"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p style={{ color: 'var(--color-brand-text)', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '2rem' }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-brand-gray), #333)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-brand-white)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ color: 'var(--color-brand-white)', fontWeight: 'bold', fontSize: '1rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--color-brand-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
