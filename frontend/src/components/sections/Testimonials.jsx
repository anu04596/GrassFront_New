import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: 'Grassfront delivered our website and field team tracking system exactly to our business requirements. Their communication was clear, their execution was reliable, and they stayed open to feedback throughout the project. The final solution has improved our daily operations and strengthened our field productivity.',
    name: 'Ujjawal Dubey',
    role: 'Founder, NKB',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
  {
    quote: 'Working with Grassfront on our HoReCa Mall e-commerce platform was a great experience. They understood our business needs quickly, suggested practical improvements, and delivered a scalable, user-friendly platform that has helped us grow. Their team was proactive, responsive, and focused on quality.',
    name: 'Mayank Sharma',
    role: 'Founder, HoReCa Mall',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
  {
    quote: 'Grassfront developed our Unity application with a high level of technical precision and professionalism. They were easy to work with, kept us informed throughout the process, and handled every challenge with thoughtful problem solving. We are pleased with the final product and confident in continuing the partnership.',
    name: 'Sherman',
    role: 'Client',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
  {
    quote: 'Working with Grassfront has been a very positive experience. They are professional, dependable, and focused on practical business outcomes. Their communication was clear, their delivery was consistent, and the entire process felt structured and transparent. I would confidently recommend them as a dependable technology partner.',
    name: 'Vlado',
    role: 'Founder, Axcel',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
  {
    quote: 'Grassfront has been a reliable partner for our community platform project. They took the time to understand our vision, offered valuable recommendations, and kept communication clear throughout the engagement. Their technical depth and commitment to quality have made a real difference in the project.',
    name: 'Wilko',
    role: 'Founder, High Touch Global',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
  {
    quote: 'Grassfront built our website and continues to support us with IT consulting and development work. Their team is responsive, knowledgeable, and genuinely invested in our success. It is reassuring to have a technology partner that we can rely on for ongoing guidance and execution.',
    name: 'Chef Michael',
    role: 'Founder, YCM',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  },
];

function Stars() {
  return (
    <div className="testi-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L7.5 4.5H11L8 7L9 11L6 9L3 11L4 7L1 4.5H4.5L6 1Z" fill="#1F00FF" />
        </svg>
      ))}
    </div>
  );
}

function TestiCard({ t }) {
  return (
    <div className="testi-card">
      <Stars />
      <p className="testi-quote">"{t.quote}"</p>
      <div className="testi-author">
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

const CARD_WIDTH = 340;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
// Speed in px/s — lower = slower
const SPEED = 40;

export default function Testimonials() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const offsetRef = useRef(0);   // current translateX (negative = moved left)
  const pausedRef = useRef(false);
  const lastTimeRef = useRef(null);

  // Duplicate cards enough times so we can loop seamlessly
  const items = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const singleSetWidth = TESTIMONIALS.length * STEP;

  // --- Animation loop ---
  const animate = (ts) => {
    if (!lastTimeRef.current) lastTimeRef.current = ts;
    const delta = ts - lastTimeRef.current;
    lastTimeRef.current = ts;

    if (!pausedRef.current) {
      offsetRef.current -= (SPEED * delta) / 1000;

      // Once we've scrolled one full set, reset silently
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current += singleSetWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
    }

    animRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // --- Manual step ---
  const step = (direction) => {
    // Temporarily pause auto-scroll, nudge by one card
    pausedRef.current = true;
    offsetRef.current -= direction * STEP;

    // Wrap
    if (Math.abs(offsetRef.current) >= singleSetWidth) {
      offsetRef.current += singleSetWidth;
    }
    if (offsetRef.current > 0) {
      offsetRef.current -= singleSetWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1)';
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }

    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = 'none';
      pausedRef.current = false;
      lastTimeRef.current = null; // reset delta so no jump
    }, 580);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-inner">

        {/* Head row */}
        <div className="testi-head">
          <div>
            <div className="section-tag">
              <span className="section-tag-line" />
              <span className="section-tag-label">Client Testimonials</span>
            </div>
            <h2>Relationships built on reliable delivery</h2>
          </div>

          {/* Nav buttons — top right */}
          <div className="testi-nav-group">
            <button className="testi-nav-btn" onClick={() => step(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="testi-nav-btn" onClick={() => step(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="testi-marquee-wrap"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; lastTimeRef.current = null; }}
        >
          {/* Fade edges */}
          <div className="testi-fade-left" />
          <div className="testi-fade-right" />

          <div className="testi-track" ref={trackRef}>
            {items.map((t, i) => (
              <TestiCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}