import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: 'GrassFRONT transformed our procurement workflow and significantly reduced operational overhead.',
    name: 'Rohan Mehta',
    role: 'Founder, Horeca Mall',
    image: 'https://i.pravatar.cc/80?img=12',
  },
  {
    quote: 'Excellent communication, strong technical expertise, and reliable delivery every time.',
    name: 'Priya Agarwal',
    role: 'COO, Bizz Studio',
    image: 'https://i.pravatar.cc/80?img=47',
  },
  {
    quote: 'Their support after launch was exceptional. Fast responses and real ownership.',
    name: 'Sameer Kapoor',
    role: 'Director, Platter Technologies',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'The ERP platform simplified processes across departments and improved visibility.',
    name: 'Vikas Sharma',
    role: 'Operations Head',
    image: 'https://i.pravatar.cc/80?img=57',
  },
  {
    quote: 'A highly professional team that focuses on business outcomes, not just code.',
    name: 'Anjali Gupta',
    role: 'Managing Director',
    image: 'https://i.pravatar.cc/80?img=44',
  },
  {
    quote: 'The final product exceeded expectations and was delivered ahead of schedule.',
    name: 'Rahul Verma',
    role: 'CEO',
    image: 'https://i.pravatar.cc/80?img=68',
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
        <img
          src={t.image}
          alt={t.name}
          className="testi-avatar"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&size=80&background=e8edff&color=1f00ff&bold=true`;
          }}
        />
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