import { useState } from 'react';
import { motion } from 'framer-motion';
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
  { icon: '📦', title: 'Inventory Is Difficult to Track', desc: 'Many restaurants struggle with stock shortages, excess inventory, wastage, and manual stock tracking. Without real-time visibility, controlling inventory becomes challenging.' },
  { icon: '⏳', title: 'Procurement Takes Too Much Time', desc: 'Managing multiple vendors, quotations, approvals, and purchase orders manually often results in delays and inefficiencies. Teams spend valuable time following up instead of focusing on operations.' },
  { icon: '🧩', title: 'Data Is Scattered Across Systems', desc: 'Sales data, inventory records, procurement information, and operational reports often exist in separate tools. This makes reporting slow and decision-making difficult.' },
  { icon: '📉', title: 'Limited Visibility Into Costs', desc: 'Without proper reporting, businesses struggle to understand food costs, vendor performance, inventory consumption, and operational expenses.' },
];

const SOLUTIONS = [
  { icon: '🍽️', title: 'Restaurant ERP Systems', desc: 'Manage inventory, procurement, operations, reporting, and approvals through a centralized platform.', features: ['Inventory Management', 'Procurement Tracking', 'Vendor Management', 'Approval Workflows', 'Reporting Dashboards', 'Multi-Location Support'] },
  { icon: '🛒', title: 'Procurement Management Solutions', desc: 'Simplify purchasing and supplier management.', features: ['Purchase Requests', 'Approval Workflows', 'Vendor Database', 'Purchase Orders', 'Procurement Reporting'] },
  { icon: '📊', title: 'Inventory Management Systems', desc: 'Gain real-time visibility into stock levels and inventory movement.', features: ['Reduce wastage', 'Avoid stock shortages', 'Improve purchasing decisions', 'Better inventory control'] },
  { icon: '📈', title: 'Business Intelligence Dashboards', desc: 'Track important business metrics from a single dashboard.', features: ['Sales Performance', 'Inventory Consumption', 'Procurement Spend', 'Vendor Performance', 'Operational KPIs'] },
  { icon: '⚙️', title: 'Workflow Automation', desc: 'Reduce manual work and improve efficiency through automated processes.', features: ['Purchase approvals', 'Vendor onboarding', 'Inventory alerts', 'Reporting automation'] },
];

const BENEFITS = [
  { icon: '✅', title: 'Better Inventory Control', desc: "Know exactly what's available, what's moving, and what needs replenishment." },
  { icon: '⚡', title: 'Faster Procurement', desc: 'Automate approvals and improve vendor coordination.' },
  { icon: '💰', title: 'Reduced Operational Costs', desc: 'Identify inefficiencies and improve purchasing decisions.' },
  { icon: '👁️', title: 'Improved Visibility', desc: 'Access real-time information across locations and departments.' },
  { icon: '🧠', title: 'Better Decision-Making', desc: 'Use data to optimize operations and improve profitability.' },
];

const INDUSTRIES = [
  { name: 'Restaurants', desc: 'Manage procurement, inventory, reporting, and operations from one platform.' },
  { name: 'Cloud Kitchens', desc: 'Improve stock visibility and streamline purchasing workflows.' },
  { name: 'Cafés & QSR Chains', desc: 'Monitor inventory, vendors, and multi-location performance.' },
  { name: 'Hotels & Hospitality Groups', desc: 'Centralize procurement, inventory management, and operational reporting.' },
  { name: 'Catering Businesses', desc: 'Track inventory usage, purchasing activities, and supplier performance.' },
];

const WHY = [
  'Simplifying procurement',
  'Improving inventory visibility',
  'Reducing manual work',
  'Supporting multi-location operations',
  'Providing actionable business insights',
  'Helping teams operate more efficiently',
];

const FAQS = [
  { q: 'Do you provide software specifically for restaurants?', a: 'Yes. We build custom solutions for restaurants, cafés, cloud kitchens, and hospitality businesses.' },
  { q: 'Can the system support multiple locations?', a: 'Yes. Our solutions can manage inventory, procurement, and reporting across multiple branches.' },
  { q: 'Can procurement and inventory be connected?', a: 'Absolutely. Procurement activities can automatically update inventory records and stock levels.' },
  { q: 'Do you provide custom dashboards?', a: 'Yes. Dashboards can be customized based on operational and reporting requirements.' },
  { q: 'Can existing systems be integrated?', a: 'Yes. We can integrate POS systems, accounting software, ERP platforms, and other business tools.' },
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

export default function HospitalityRestaurantsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="hr-page">

      {/* ─── Hero Section ─── */}
      <section className="hr-hero-container">
        <div className="hr-hero-bg-orb" />

        <motion.div
          className="hr-hero-content"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="section-tag" style={{ marginBottom: '24px' }}>
            <span className="section-tag-line" />
            <span className="section-tag-label">Hospitality & Restaurant Solutions</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hr-hero-title">
            Technology Solutions Built for <span className="hr-hero-title-accent">Hospitality Businesses</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="hr-hero-subtitle">
            Running a restaurant, café, cloud kitchen, or hotel involves much more than serving customers.
            We help you move away from spreadsheets to streamline procurement, inventory, and operations.
          </motion.p>
          <motion.div variants={fadeInUp} className="sp-hero__actions">
            <a href="#contact" className="sp-btn sp-btn--primary">Schedule a Free Consultation</a>
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
                <div className="hr-metric-label">Monthly Wastage</div>
                <div className="hr-metric-val" style={{ color: '#10B981' }}>-14%</div>
              </div>
              <div className="hr-metric-box">
                <div className="hr-metric-label">Pending Approvals</div>
                <div className="hr-metric-val">2</div>
              </div>
              <div className="hr-metric-box hr-metric-full">
                <div className="hr-metric-label">Inventory Alerts</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="hr-metric-val">12 Items Low</div>
                  <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>Auto-Reorder Initiated</div>
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
            <h2 style={{ maxWidth: '100%' }}>Common Challenges Hospitality Businesses Face</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-challenges-grid">
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
            <h2 style={{ maxWidth: '100%' }}>Benefits for Hospitality Businesses</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-benefits-wrapper">
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
                Unlike generic software providers, we understand the operational challenges hospitality businesses face every day. Our solutions focus on practical needs.
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
          <h2 style={{ fontSize: '56px', letterSpacing: '-1.5px' }}>Help Your Hospitality Business Operate More Efficiently</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
            Technology should make operations easier, not more complicated. GrassFRONT helps hospitality businesses improve procurement, inventory management, reporting, and operational efficiency through practical technology solutions designed around real business needs.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '32px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '12px' }}>Book a Discovery Call</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
