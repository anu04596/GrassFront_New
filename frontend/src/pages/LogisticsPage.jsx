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
  { icon: '📦', title: 'Inventory Visibility Issues', desc: 'Many businesses struggle to maintain accurate inventory records across warehouses and locations. This often leads to stock shortages, overstock situations, fulfillment delays, and inventory discrepancies.' },
  { icon: '📝', title: 'Manual Order Processing', desc: 'Order management often requires multiple manual steps, increasing the risk of errors and delays.' },
  { icon: '🏭', title: 'Warehouse Operations Become Difficult to Manage', desc: 'As inventory volume grows, tracking stock movement and warehouse activities becomes more challenging. Without proper systems, efficiency suffers.' },
  { icon: '🔗', title: 'Procurement and Inventory Are Disconnected', desc: 'When purchasing and inventory systems operate separately, businesses often experience planning issues and unnecessary stock purchases.' },
  { icon: '📉', title: 'Reporting Takes Too Long', desc: 'Management teams frequently spend hours collecting information from multiple sources before they can evaluate performance.' },
];

const SOLUTIONS = [
  { icon: '🏬', title: 'Distribution ERP Systems', desc: 'Centralize operations through a single platform.', features: ['Inventory Management', 'Procurement Tracking', 'Warehouse Operations', 'Order Management', 'Supplier Management', 'Reporting Dashboards'] },
  { icon: '📦', title: 'Inventory Management Solutions', desc: 'Track stock levels and inventory movement in real time.', features: ['Better inventory accuracy', 'Faster stock visibility', 'Improved replenishment planning', 'Reduced stock-related issues'] },
  { icon: '🏗️', title: 'Warehouse Management Solutions', desc: 'Improve warehouse efficiency through structured inventory tracking and operational visibility.', features: ['Stock Movement Tracking', 'Warehouse Visibility', 'Inventory Audits', 'Multi-Warehouse Support'] },
  { icon: '🛒', title: 'Procurement Management Software', desc: 'Streamline supplier management and purchasing operations.', features: ['Purchase Requests', 'Vendor Management', 'Purchase Orders', 'Approval Workflows', 'Procurement Reporting'] },
  { icon: '📊', title: 'Business Intelligence Dashboards', desc: 'Monitor performance through real-time reporting.', features: ['Inventory Levels', 'Procurement Spend', 'Order Fulfillment', 'Warehouse Performance', 'Supplier Metrics'] },
];

const BENEFITS = [
  { icon: '✅', title: 'Better Inventory Control', desc: 'Maintain accurate inventory records across locations.' },
  { icon: '⚡', title: 'Faster Order Processing', desc: 'Reduce delays and improve fulfillment efficiency.' },
  { icon: '👁️', title: 'Improved Warehouse Visibility', desc: 'Track stock movement and warehouse performance in real time.' },
  { icon: '📉', title: 'Better Procurement Planning', desc: 'Align purchasing activities with inventory requirements.' },
  { icon: '💰', title: 'Reduced Operational Costs', desc: 'Identify inefficiencies and improve resource utilization.' },
  { icon: '📈', title: 'Better Business Decisions', desc: 'Use accurate data to support planning and growth.' },
];

const INDUSTRIES = [
  { name: 'Wholesale Distributors', desc: 'Manage inventory, suppliers, purchasing, and reporting from a single platform.' },
  { name: 'Logistics Providers', desc: 'Improve operational visibility and process efficiency.' },
  { name: 'Warehouse Operations', desc: 'Track inventory movement and warehouse performance.' },
  { name: 'Supply Chain Businesses', desc: 'Improve coordination between procurement, inventory, and fulfillment operations.' },
];

const WHY = [
  'Improve inventory accuracy',
  'Streamline procurement',
  'Increase warehouse efficiency',
  'Reduce manual work',
  'Improve reporting',
  'Support business growth',
];

const FAQS = [
  { q: 'Can your solutions support multiple warehouses?', a: 'Yes. Our systems can manage inventory and operations across multiple warehouse locations.' },
  { q: 'Can procurement and inventory be connected?', a: 'Absolutely. Purchasing activities can automatically update inventory records and stock availability.' },
  { q: 'Do you integrate with existing software?', a: 'Yes. We can integrate ERP systems, accounting software, inventory platforms, and third-party applications.' },
  { q: 'Can dashboards be customized?', a: 'Yes. Every dashboard is built around your operational and reporting requirements.' },
  { q: 'Do you provide ongoing support?', a: 'Yes. We offer long-term maintenance, enhancements, and technical support.' },
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

export default function LogisticsPage() {
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
            }}>Distribution & Logistics</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hr-hero-title">
            <span className="hr-hero-title-accent">Distribution & Logistics</span> Solutions
          </motion.h1>
          <motion.p variants={fadeInUp} className="hr-hero-subtitle">
            Improve Inventory Visibility, Warehouse Operations, and Order Management.<br /><br />
            Distribution and logistics businesses depend on speed, accuracy, and visibility. When inventory records, warehouse operations, procurement activities, and order tracking are managed across spreadsheets and disconnected systems, delays become common and operational costs increase.<br /><br />
            As businesses grow, managing inventory across multiple warehouses, coordinating suppliers, and tracking order fulfillment becomes increasingly complex. GrassFRONT helps distribution and logistics companies streamline operations through ERP systems, inventory management software, automation solutions, and business intelligence dashboards.
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
                <div className="hr-metric-label">Order Fulfillment</div>
                <div className="hr-metric-val" style={{ color: '#10B981' }}>99.2%</div>
              </div>
              <div className="hr-metric-box">
                <div className="hr-metric-label">Pending Orders</div>
                <div className="hr-metric-val">14</div>
              </div>
              <div className="hr-metric-box hr-metric-full">
                <div className="hr-metric-label">Warehouse Sync</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="hr-metric-val">3 Locations Online</div>
                  <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>Real-time Updates</div>
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
            <h2 style={{ maxWidth: '100%' }}>Common Challenges Distribution Businesses Face</h2>
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
                {s.features && s.features.length > 0 && (
                  <ul className="hr-feature-list">
                    {s.features.map(f => (
                      <li key={f}><span className="hr-check">✓</span> {f}</li>
                    ))}
                  </ul>
                )}
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
            <h2 style={{ maxWidth: '100%' }}>Benefits for Distribution & Logistics Businesses</h2>
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
                We understand that distribution businesses need visibility and control across their operations. Our solutions are designed to help businesses improve efficiency and support scalable growth.
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
          <h2 style={{ fontSize: '56px', letterSpacing: '-1.5px' }}>Build a More Efficient Distribution Operation</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
            Modern distribution businesses require accurate inventory visibility, streamlined workflows, and better reporting. GrassFRONT helps organizations improve warehouse operations, inventory management, procurement processes, and business visibility through practical technology solutions.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '32px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '12px' }}>Book a Discovery Call</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
