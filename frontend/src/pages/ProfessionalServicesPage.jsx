import { useState } from 'react';
import { motion } from 'framer-motion';
import { useContactModal } from '../components/ContactModalContext';
import './HospitalityRestaurantsPage.css';

const ThemeChevron = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    style={{
      transition: 'transform 0.3s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      flexShrink: 0
    }}
  >
    <polyline
      points="3,6 8,11 13,6"
      stroke="#1F00FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CHALLENGES = [
  {
    icon: '⏳',
    title: 'Too Much Manual Work',
    desc: 'Many teams spend hours every week updating spreadsheets, creating reports, following up on approvals, and managing project information. This reduces productivity and creates unnecessary administrative work.'
  },
  {
    icon: '👁️',
    title: 'Limited Project Visibility',
    desc: 'Business leaders often struggle to see which projects are on track, which clients are most profitable, how teams are performing, and where operational bottlenecks are. Without centralized visibility, decision-making becomes difficult.'
  },
  {
    icon: '🗂️',
    title: 'Client Information Is Scattered',
    desc: 'Customer data often exists across emails, spreadsheets, CRMs, and project management tools. This creates inefficiencies and makes collaboration harder.'
  },
  {
    icon: '📊',
    title: 'Reporting Takes Too Long',
    desc: 'Many businesses still prepare management reports manually, leading to delays and inconsistent information.'
  },
  {
    icon: '📈',
    title: 'Scaling Operations Becomes Difficult',
    desc: 'As the business grows, processes that once worked become difficult to manage efficiently.'
  }
];

const SOLUTIONS = [
  {
    icon: '💼',
    title: 'Business Management Systems',
    desc: 'Centralize operations through a single platform.',
    features: ['Client Management', 'Project Tracking', 'Team Collaboration', 'Task Management', 'Workflow Tracking', 'Reporting Dashboards']
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    desc: 'Automate repetitive administrative activities.',
    features: ['Client onboarding', 'Approval workflows', 'Task assignments', 'Report generation', 'Document management']
  },
  {
    icon: '📈',
    title: 'Business Intelligence Dashboards',
    desc: 'Get a real-time view of business performance.',
    features: ['Project Status', 'Team Productivity', 'Revenue Trends', 'Client Performance', 'Business KPIs']
  },
  {
    icon: '💻',
    title: 'Custom Software Development',
    desc: "Build software designed around your firm's unique processes and service delivery model.",
    features: ['Tailored workflow design', 'Custom modules', 'Scalable architecture', 'IP ownership', 'Direct team alignment']
  },
  {
    icon: '🔌',
    title: 'System Integration Services',
    desc: 'Connect CRM systems, accounting software, project management platforms, and reporting tools into one connected workflow.',
    features: ['CRM connectivity', 'Accounting sync', 'Project tool integration', 'Data consistency', 'Reduced double-entry']
  }
];

const BENEFITS = [
  { icon: '👁️', title: 'Better Project Visibility', desc: 'Track project progress and team performance from one dashboard.' },
  { icon: '⚡', title: 'Improved Productivity', desc: 'Reduce manual work and streamline daily operations.' },
  { icon: '📊', title: 'Faster Reporting', desc: 'Access real-time information without waiting for manual reports.' },
  { icon: '🤝', title: 'Better Client Experience', desc: 'Deliver services more efficiently with improved operational control.' },
  { icon: '👥', title: 'Stronger Team Collaboration', desc: 'Ensure everyone works from the same information.' },
  { icon: '📈', title: 'Scalable Growth', desc: 'Build systems that support expansion without increasing operational complexity.' }
];

const INDUSTRIES = [
  { name: 'Consulting Firms', desc: 'Manage clients, projects, reporting, and operations efficiently.' },
  { name: 'Marketing Agencies', desc: 'Track campaigns, resources, approvals, and business performance.' },
  { name: 'Recruitment Companies', desc: 'Streamline candidate tracking, approvals, and reporting.' },
  { name: 'Legal & Advisory Firms', desc: 'Improve document management, workflows, and operational visibility.' },
  { name: 'Design & Architecture Firms', desc: 'Manage projects, resources, timelines, and client communication.' }
];

const WHY = [
  'Project visibility',
  'Operational efficiency',
  'Workflow automation',
  'Business reporting',
  'Team collaboration',
  'Sustainable growth'
];

const FAQS = [
  { q: 'Can you build software specifically for our business process?', a: 'Yes. Every solution is tailored to your operational requirements and workflow.' },
  { q: 'Can your systems integrate with our existing tools?', a: 'Absolutely. We can integrate CRM, accounting, project management, and reporting platforms.' },
  { q: 'Do you provide dashboards for business reporting?', a: 'Yes. We build custom dashboards that provide real-time visibility into business performance.' },
  { q: 'Can workflows be automated?', a: 'Yes. Many repetitive processes can be automated to improve efficiency and reduce manual work.' },
  { q: 'Do you provide ongoing support?', a: 'Yes. We offer maintenance, enhancements, and long-term support after implementation.' }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProfessionalServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const { openContactModal } = useContactModal();

  return (
    <main className="hr-page">

      {/* ─── Hero Section ─── */}
      <section className="hr-hero-container">
        <div className="hr-hero-bg-orb" />

        <motion.div
          className="hr-hero-content"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '24px' }}>
            <span style={{
              display: 'inline-block',
              background: '#F0F5FF',
              color: '#1F00FF',
              padding: '8px 20px',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: '500',
              fontFamily: 'inherit'
            }}>Professional Services</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hr-hero-title">
            <span className="hr-hero-title-accent">Professional Services</span> Solutions
          </motion.h1>
          <motion.p variants={fadeInUp} className="hr-hero-subtitle">
            Streamline Operations, Improve Visibility, and Focus More on Client Delivery.<br /><br />
            Professional service businesses grow through expertise, client relationships, and efficient execution. However, as teams expand and projects increase, managing operations through spreadsheets, emails, and disconnected tools becomes difficult.<br /><br />
            Project tracking, client communication, approvals, reporting, and resource management often consume valuable time that could be spent serving clients.<br /><br />
            GrassFRONT helps professional service firms simplify operations through custom software, workflow automation, business intelligence dashboards, and integrated business management systems.
          </motion.p>
          <motion.div variants={fadeInUp} className="sp-hero__actions">
            <button type="button" className="sp-btn sp-btn--primary" onClick={() => openContactModal()}>Request a Consultation</button>
            <a href="#solutions" className="sp-btn sp-btn--ghost">Explore Solutions →</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hr-hero-visual"
        >
          <div className="hr-glass-dash">
            <div className="hr-glass-dash-header">
              <span className="hr-dash-title">Operations Center</span>
              <span className="hr-status-badge">
                <span className="hr-status-dot" /> Live Sync Active
              </span>
            </div>
            <div className="hr-metric-row">
              <div className="hr-metric-box">
                <div className="hr-metric-label">Resource Utilization</div>
                <div className="hr-metric-val" style={{ color: '#10B981' }}>84%</div>
              </div>
              <div className="hr-metric-box">
                <div className="hr-metric-label">Pending Approvals</div>
                <div className="hr-metric-val">4</div>
              </div>
              <div className="hr-metric-box hr-metric-full">
                <div className="hr-metric-label">Project Deadlines</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="hr-metric-val">3 Due This Week</div>
                  <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>All Milestones Met</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Challenges Section ─── */}
      <section className="sp-section sp-section--white">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">The Problem</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2 style={{ maxWidth: '100%' }}>Common Challenges Professional Service Firms Face</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-challenges-grid hr-grid-5">
            {CHALLENGES.map(c => (
              <motion.div variants={fadeInUp} className="hr-bento-card" key={c.title}>
                <div className="hr-icon-wrapper">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Solutions Section ─── */}
      <section className="sp-section sp-section--tint" id="solutions">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Our Solutions</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2>Solutions We Provide</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-solutions-grid">
            {SOLUTIONS.map(s => (
              <motion.div variants={fadeInUp} className="hr-bento-card" key={s.title}>
                <div className="hr-icon-wrapper">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="hr-feature-list">
                  {s.features.map(f => (
                    <li key={f}><span className="hr-check">✓</span> {f}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="sp-section sp-section--white">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">The Impact</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2 style={{ maxWidth: '100%' }}>Benefits for Professional Service Firms</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-benefits-wrapper hr-grid-6">
            {BENEFITS.map(b => (
              <motion.div variants={fadeInUp} className="hr-benefit-pill" key={b.title}>
                <div className="hr-icon-wrapper">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Industries Section (Minimal List) ─── */}
      <section className="sp-section sp-section--tint">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Who We Work With</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header" style={{ marginBottom: '24px' }}>
            <h2>Target Segments</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-minimal-list">
            {INDUSTRIES.map(ind => (
              <motion.div variants={fadeInUp} className="hr-minimal-item" key={ind.name}>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Why Choose Us Split Section ─── */}
      <section className="sp-section sp-section--white">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="sp-split">
            <motion.div variants={fadeInUp} className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why GrassFRONT</span></div>
              <h2>Why Choose GrassFRONT?</h2>
              <p className="sp-split__desc">
                We understand that professional service businesses succeed when teams spend more time delivering value and less time managing administrative tasks. Our solutions focus on practical needs.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="sp-split__right">
              <ul className="sp-checklist" style={{ boxShadow: '0 24px 48px rgba(0,0,0,0.04)', borderRadius: '20px', border: 'none' }}>
                {WHY.map(item => (
                  <li key={item} className="sp-checklist__item" style={{ padding: '20px 24px', fontSize: '15px' }}>
                    <span className="sp-checklist__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="sp-section sp-section--tint">
        <motion.div
          className="sp-inner"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">FAQ</span></motion.div>
          <motion.div variants={fadeInUp} className="sp-section-header">
            <h2 style={{ maxWidth: '100%' }}>Frequently Asked Questions</h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="hr-faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`sp-faq-item hr-faq-item ${isOpen ? 'hr-faq-item--open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                >
                  <div className="sp-faq-header hr-faq-header">
                    <h3>{faq.q}</h3>
                    <div className="hr-faq-icon-wrapper">
                      <ThemeChevron open={isOpen} />
                    </div>
                  </div>
                  <div className={`sp-faq-expand ${isOpen ? 'sp-faq-expand--open' : ''}`}>
                    <div className="sp-faq-expand-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="sp-cta">
        <motion.div
          className="sp-cta__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '56px', letterSpacing: '-1.5px' }}>Help Your Team Focus on What Matters Most</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
            Professional service firms thrive when their people can focus on clients, projects, and business growth—not administrative work. GrassFRONT helps organizations improve visibility, automate workflows, streamline operations, and create systems that support long-term success.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '32px' }}>
            <button type="button" className="sp-btn sp-btn--white" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '12px' }} onClick={() => openContactModal()}>Request a Consultation</button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
