import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './OurProcessPage.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery & Business Understanding',
    desc: 'We start by understanding your business, challenges, goals and technical requirements.',
    points: ['Existing challenges', 'Business goals', 'User requirements']
  },
  {
    num: '02',
    icon: '🗺️',
    title: 'Solution Planning',
    desc: 'We create a detailed project roadmap to ensure alignment on scope, timeline, and delivery approach.',
    points: ['Scope & features', 'Timeline', 'Integrations']
  },
  {
    num: '03',
    icon: '🎨',
    title: 'Design & User Experience',
    desc: 'We design intuitive interfaces that enhance user adoption and provide a delightful experience.',
    points: ['User-friendly layouts', 'Consistent design system', 'Accessibility']
  },
  {
    num: '04',
    icon: '💻',
    title: 'Development & Integration',
    desc: 'Our team builds robust, scalable solutions with clean code and seamless integrations.',
    points: ['Agile development', 'Clean code', 'Third-party integration']
  },
  {
    num: '05',
    icon: '🛡️',
    title: 'Testing & Quality Assurance',
    desc: 'We rigorously test every feature to ensure performance, security, and reliability.',
    points: ['Functional testing', 'Performance testing', 'Security check']
  },
  {
    num: '06',
    icon: '🚀',
    title: 'Launch & Deployment',
    desc: 'We deploy the solution with minimal disruption and ensure a smooth go-live experience.',
    points: ['Smooth deployment', 'Team training', 'Go-live support']
  },
  {
    num: '07',
    icon: '🎧',
    title: 'Ongoing Support',
    desc: 'We continue to support, optimize, and evolve the solution as your business grows.',
    points: ['Maintenance', 'Feature updates', 'Performance optimization']
  }
];

const BENEFITS = [
  { icon: '💬', title: 'Clear Communication', desc: 'You\'re informed at every step.' },
  { icon: '📊', title: 'Predictable Delivery', desc: 'We follow proven processes and timelines.' },
  { icon: '🛡️', title: 'Reduced Project Risk', desc: 'Issues are identified early and mitigated.' },
  { icon: '🎯', title: 'Business-Focused Execution', desc: 'We build solutions that drive real results.' }
];

export default function OurProcessPage() {
  return (
    <main className="op-page">
      {/* ── Dark Hero ── */}
      <section className="op-hero">
        <div className="op-hero__bg" style={{ backgroundImage: 'url(/assets/process-hero.png)' }} />
        <div className="op-hero__overlay" />

        <div className="op-hero__inner">
          <motion.div className="op-hero__content" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <span className="op-hero__badge">— OUR PROCESS</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="op-hero__title">
              A Clear Process Designed to Reduce Risk & <span className="op-hero__accent">Deliver Results</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="op-hero__sub">
              Technology projects work best when everyone understands
              the roadmap. Our 7-step process ensures clarity, collaboration,
              and successful outcomes from day one.
            </motion.p>
            <motion.div variants={fadeInUp} className="op-hero__actions">
              <a href="#cp-contact" className="op-btn op-btn--primary">
                Request a Consultation <span>→</span>
              </a>
              <Link to="/faqs" className="op-btn op-btn--ghost">
                View FAQ <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Steps Section ── */}
      <section className="op-steps-section">
        <div className="op-steps-section__inner">
          <div className="op-section-header">
            <span className="op-section-badge">— THE 7 STEPS</span>
            <div className="op-section-title-row">
              <h2 className="op-section-title">How We Work</h2>
              <p className="op-section-desc">
                Every project follows this structured approach<br/>so you always know where things stand.
              </p>
            </div>
          </div>

          <div className="op-steps-grid">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="op-step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="op-step-card__num-wrap">
                  <div className="op-step-card__num">{step.num}</div>
                </div>
                <div className="op-step-card__content">
                  <div className="op-step-card__icon-wrap">
                    <span className="op-step-card__icon">{step.icon}</span>
                  </div>
                  <h3 className="op-step-card__title">{step.title}</h3>
                  <p className="op-step-card__desc">{step.desc}</p>
                  <ul className="op-step-card__points">
                    {step.points.map((pt, j) => (
                      <li key={j}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="#00c3ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Arrow connecting to next card (desktop only) */}
                {i !== 3 && i !== 6 && (
                  <div className="op-step-card__arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#e0e0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it Works Section ── */}
      <section className="op-benefits-section">
        <div className="op-benefits-section__inner">
          <div className="op-section-header">
            <span className="op-section-badge">— THE RESULT</span>
            <h2 className="op-section-title">Why Our Process Works</h2>
            <p className="op-benefits-desc">
              A structured, transparent approach reduces uncertainty<br/>and gives you confidence throughout every stage<br/>of the project.
            </p>
          </div>

          <div className="op-benefits-grid">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                className="op-benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="op-benefit-card__icon">{b.icon}</div>
                <h3 className="op-benefit-card__title">{b.title}</h3>
                <p className="op-benefit-card__desc">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA Banner ── */}
      <section className="op-cta">
        <motion.div
          className="op-cta__inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="op-cta__left">
            <div className="op-cta__icon-wrap">
              <span className="op-cta__icon">📅</span>
            </div>
            <div>
              <h2 className="op-cta__title">Ready to Start Your Project?</h2>
              <p className="op-cta__desc">
                Let's discuss your requirements and find<br/>the right approach for your business.
              </p>
            </div>
          </div>
          <div className="op-cta__actions">
            <a href="#cp-contact" className="op-cta__btn op-cta__btn--white">
              Request a Consultation →
            </a>
            <Link to="/case-studies" className="op-cta__btn op-cta__btn--outline">
              View Case Studies →
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
