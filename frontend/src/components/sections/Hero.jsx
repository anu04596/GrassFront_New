import { useRef, useCallback } from 'react';
import { useContactModal } from '../ContactModalContext';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);
  const { redirectToContact } = useContactModal();

  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px,
      rgba(31, 0, 255, 0.13) 0%,
      rgba(31, 0, 255, 0.06) 35%,
      transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    spotRef.current.style.background = 'transparent';
  }, []);

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* spotlight overlay */}
      <div className="hero-spotlight" ref={spotRef} />

      <div className="section-inner hero-inner">
        <div className="hero-left">

          <h1 className="hero-heading">
              Transform Manual Business Processes 
              <br />
              Into Scalable
              <br />
              <span className="hero-heading-accent">Digital Systems</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
                GrassFRONT helps growing businesses automate operations, reduce manual work, improve visibility, and scale faster through custom ERP, software development, and AI-powered automation.
            </p>

            <div className="hero-btns">
                <button type="button" className="btn-primary" onClick={() => redirectToContact()}>Get Free Business Process Audit</button>
              <button type="button" className="btn-outline" onClick={() => redirectToContact()}>Request a Consultation</button>
            </div>

              <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-num">100+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">50+</span>
                <span className="stat-label">Businesses Served</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}