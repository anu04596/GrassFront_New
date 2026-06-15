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

const STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery & Business Understanding',
    desc: 'Every project starts with understanding your business.',
    points: ['Existing challenges', 'Operational bottlenecks', 'Business goals', 'User requirements'],
    note: 'This helps us define the right solution before development begins.'
  },
  {
    num: '02',
    icon: '🗺️',
    title: 'Solution Planning',
    desc: 'Based on discovery, we create a project roadmap that includes:',
    points: ['Scope & Features', 'Timeline', 'Integrations', 'Delivery approach'],
    note: 'This ensures alignment before execution.'
  },
  {
    num: '03',
    icon: '🎨',
    title: 'Design & User Experience',
    desc: 'We create intuitive interfaces that make adoption easier for your team.',
    points: ['User-friendly layouts', 'Logical workflows', 'Consistent design system', 'Accessibility'],
    note: 'The goal is simple: build software people actually enjoy using.'
  },
  {
    num: '04',
    icon: '⚙️',
    title: 'Development',
    desc: 'Our team develops the solution in phases, allowing regular reviews and feedback throughout.',
    points: ['Phased delivery', 'Regular reviews', 'Client feedback loops', 'Agile methodology'],
    note: 'This keeps development aligned with business needs.'
  },
  {
    num: '05',
    icon: '🧪',
    title: 'Testing & Quality Assurance',
    desc: 'Before launch, every feature undergoes rigorous testing to ensure:',
    points: ['Reliability', 'Performance', 'Security', 'Usability'],
    note: 'We don\'t ship until we\'re confident it works perfectly.'
  },
  {
    num: '06',
    icon: '🚀',
    title: 'Launch & Deployment',
    desc: 'We deploy the solution with minimal disruption.',
    points: ['Smooth deployment', 'Team training', 'Go-live support', 'Issue monitoring'],
    note: 'We ensure everything operates smoothly from day one.'
  },
  {
    num: '07',
    icon: '🛠️',
    title: 'Ongoing Support',
    desc: 'Technology evolves. Business needs change.',
    points: ['Maintenance', 'Performance improvements', 'New features', 'System optimization'],
    note: 'We continue supporting and improving systems after launch.'
  }
];

const WHY_WORKS = [
  'Clear communication',
  'Predictable delivery',
  'Reduced project risk',
  'Business-focused execution',
  'Continuous improvement'
];

export default function OurProcessPage() {
  return (
    <main className="hr-page tp-page">

      {/* ── Hero Banner ── */}
      <section className="tp-hero">
        <img src="/assets/process-hero.png" alt="Our Process" className="tp-hero__img" />
        <div className="tp-hero__overlay">
          <motion.div className="tp-hero__content" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <span className="tp-hero__badge">Our Process</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="tp-hero__title">
              A Clear Process Designed to<br />
              <span className="hr-hero-title-accent">Reduce Risk & Deliver Results</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="tp-hero__sub">
              Technology projects work best when everyone understands the roadmap.
              Our process focuses on clarity, collaboration, and business outcomes from day one.
            </motion.p>
            <motion.div variants={fadeInUp} className="sp-hero__actions">
              <a href="#contact" className="sp-btn sp-btn--white">Schedule a Free Consultation</a>
              <Link to="/faqs" className="sp-btn sp-btn--outline-white">View FAQs →</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="sp-section sp-section--white">
        <motion.div className="sp-inner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">The 7 Steps</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2>How We Work</h2>
            <p>Every project follows this structured approach so you always know where things stand.</p>
          </motion.div>

          <div className="tp-steps">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="tp-step"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="tp-step__left">
                  <div className="tp-step__num">{step.num}</div>
                  <div className="tp-step__line" />
                </div>
                <div className="tp-step__right">
                  <div className="tp-step__icon">{step.icon}</div>
                  <h3 className="tp-step__title">Step {parseInt(step.num, 10)}: {step.title}</h3>
                  <p className="tp-step__desc">{step.desc}</p>
                  <ul className="tp-step__points">
                    {step.points.map(p => (
                      <li key={p}><span className="hr-check">✓</span>{p}</li>
                    ))}
                  </ul>
                  {step.note && <p className="tp-step__note">{step.note}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Why It Works ── */}
      <section className="sp-section sp-section--tint">
        <motion.div className="sp-inner" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <div className="sp-split">
            <motion.div variants={fadeInUp} className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">The Result</span></div>
              <h2>Why Our Process Works</h2>
              <p className="sp-split__desc">
                A structured, transparent approach reduces uncertainty and gives you confidence
                throughout every stage of the project.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ul className="sp-checklist" style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.04)', borderRadius: '20px', border: 'none' }}>
                {WHY_WORKS.map(w => (
                  <li key={w} className="sp-checklist__item" style={{ padding: '20px 24px', fontSize: '15px' }}>
                    <span className="sp-checklist__check">✓</span>{w}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta">
        <motion.div className="sp-cta__inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Ready to Start?</h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: '1.65' }}>
            Let's discuss your requirements and find the right approach for your business.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '28px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '15px 36px', fontSize: '15px' }}>Schedule a Free Consultation</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
