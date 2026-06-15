import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HospitalityRestaurantsPage.css';
import './TrustPages.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } }
};

const DIFFERENTIATORS = [
  {
    icon: '🎯',
    title: 'We Start With Your Business, Not Technology',
    desc: 'Before recommending any solution, we take time to understand how your business operates, existing challenges, current workflows, and growth objectives. This ensures the solution supports your business instead of creating additional complexity.'
  },
  {
    icon: '⚡',
    title: 'Practical Solutions, Not Unnecessary Complexity',
    desc: 'We believe software should simplify work. Our focus is on creating systems that teams can adopt quickly and use effectively — no unnecessary features, no overcomplicated workflows.'
  },
  {
    icon: '📈',
    title: 'Long-Term Thinking',
    desc: 'Technology requirements evolve as businesses grow. That\'s why we build solutions that can scale, adapt, and continue delivering value over time.'
  },
  {
    icon: '💬',
    title: 'Clear Communication',
    desc: 'Clients should never wonder what\'s happening, what\'s completed, or what\'s next. We provide regular updates and maintain complete transparency throughout the project lifecycle.'
  },
  {
    icon: '🛠️',
    title: 'Support Beyond Launch',
    desc: 'Launching software is not the finish line. We continue supporting our clients through maintenance, improvements, optimization, and future enhancements.'
  }
];

const VALUES = [
  'Business-first approach',
  'Reliable project delivery',
  'Practical problem solving',
  'Transparent communication',
  'Long-term support',
  'Scalable technology solutions'
];

const INDUSTRIES = [
  { icon: '🍽️', name: 'Hospitality & Restaurants', href: '/hospitality-restaurants' },
  { icon: '🏭', name: 'Manufacturing', href: '/manufacturing' },
  { icon: '🛒', name: 'Retail', href: '/retail' },
  { icon: '🚚', name: 'Distribution & Logistics', href: '/logistics' },
  { icon: '💼', name: 'Professional Services', href: '/professional-services' }
];

export default function WhyGrassfrontPage() {
  return (
    <main className="hr-page tp-page">

      {/* ── Hero Banner ── */}
      <section className="tp-hero">
        <img src="/assets/why-grassfront-hero.png" alt="Why GrassFRONT" className="tp-hero__img" />
        <div className="tp-hero__overlay">
          <motion.div
            className="tp-hero__content"
            initial="hidden" animate="visible" variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <span className="tp-hero__badge">Why GrassFRONT</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="tp-hero__title">
              Technology Built Around<br />
              <span className="hr-hero-title-accent">Business Outcomes</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="tp-hero__sub">
              Choosing a technology partner is about more than software. You need a team that understands
              your business, communicates clearly, and delivers solutions that create measurable impact.
            </motion.p>
            <motion.div variants={fadeInUp} className="sp-hero__actions">
              <a href="#contact" className="sp-btn sp-btn--white">Schedule a Free Consultation</a>
              <Link to="/our-process" className="sp-btn sp-btn--outline-white">Our Process →</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="sp-section sp-section--white">
        <motion.div className="sp-inner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Our Difference</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2>What Makes Us Different?</h2>
            <p>At GrassFRONT, we focus on solving operational challenges through practical technology solutions that improve efficiency, visibility, and growth.</p>
          </motion.div>
          <motion.div variants={stagger} className="hr-challenges-grid hr-grid-5">
            {DIFFERENTIATORS.map(d => (
              <motion.div key={d.title} variants={fadeInUp} className="hr-bento-card tp-diff-card">
                <div className="hr-icon-wrapper">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── What Clients Value ── */}
      <section className="sp-section sp-section--tint">
        <motion.div className="sp-inner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="sp-split">
            <motion.div variants={fadeInUp} className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Client Experience</span></div>
              <h2>What Clients Value Most</h2>
              <p className="sp-split__desc">
                Our clients choose GrassFRONT because we prioritize their business outcomes above all else.
                Here's what they consistently highlight about working with us.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ul className="sp-checklist" style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.04)', borderRadius: '20px', border: 'none' }}>
                {VALUES.map(v => (
                  <li key={v} className="sp-checklist__item" style={{ padding: '20px 24px', fontSize: '15px' }}>
                    <span className="sp-checklist__check">✓</span>{v}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Industries ── */}
      <section className="sp-section sp-section--white">
        <motion.div className="sp-inner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Industries We Serve</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2>Industries We Serve</h2>
          </motion.div>
          <motion.div variants={stagger} className="hr-minimal-list">
            {INDUSTRIES.map(ind => (
              <motion.div key={ind.name} variants={fadeInUp}>
                <Link to={ind.href} className="hr-minimal-item tp-industry-link">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>{ind.icon}</span>{ind.name}
                  </h4>
                  <span className="tp-arrow">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta">
        <motion.div className="sp-cta__inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Let's Build Something Valuable</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65' }}>
            Whether you're looking to automate processes, improve reporting, streamline operations, or build
            custom software — we're ready to help.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '28px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '15px 36px', fontSize: '15px' }}>Book a Discovery Call</a>
            <Link to="/our-process" className="sp-btn sp-btn--outline-white" style={{ padding: '15px 36px', fontSize: '15px' }}>See Our Process →</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
