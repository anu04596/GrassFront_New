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
  { icon: '📦', title: 'Inventory Is Difficult to Manage', desc: 'Without real-time inventory tracking, businesses often experience stock shortages, overstock situations, lost sales opportunities, and inventory inaccuracies.' },
  { icon: '👁️', title: 'Limited Visibility Into Sales Performance', desc: 'Retail owners often struggle to answer: Which products sell best? Which locations perform better? What inventory needs replenishment? Without accurate reporting, decisions become difficult.' },
  { icon: '⏳', title: 'Manual Processes Slow Operations', desc: 'Many retail businesses still rely on spreadsheets and manual updates for inventory, purchasing, and reporting. This creates unnecessary work and increases the risk of errors.' },
  { icon: '🧩', title: 'Data Is Scattered Across Systems', desc: 'Sales, inventory, procurement, and finance often operate on different platforms, making reporting and coordination difficult.' },
];

const SOLUTIONS = [
  { icon: '🏬', title: 'Retail ERP Systems', desc: 'Manage inventory, sales, procurement, reporting, and operations through one centralized platform.', features: ['Inventory Management', 'Procurement Tracking', 'Sales Reporting', 'Vendor Management', 'Business Dashboards', 'Multi-Store Management'] },
  { icon: '📦', title: 'Inventory Management Solutions', desc: 'Track stock movement and inventory levels across stores and warehouses.', features: ['Reduce stock shortages', 'Improve inventory accuracy', 'Better replenishment planning', 'Minimize excess stock'] },
  { icon: '📊', title: 'Business Intelligence Dashboards', desc: 'Get complete visibility into retail performance.', features: ['Sales Trends', 'Product Performance', 'Inventory Levels', 'Procurement Activities', 'Store Performance'] },
  { icon: '⚡', title: 'Workflow Automation', desc: 'Reduce manual work through automation.', features: ['Inventory alerts', 'Purchase approvals', 'Sales reporting', 'Supplier management'] },
  { icon: '🔗', title: 'System Integration Services', desc: 'Connect POS systems, inventory software, accounting platforms, and reporting tools into one workflow.', features: [] },
];

const BENEFITS = [
  { icon: '👁️', title: 'Better Inventory Visibility', desc: 'Know exactly what inventory is available across locations.' },
  { icon: '📈', title: 'Improved Sales Insights', desc: 'Identify top-performing products, categories, and stores.' },
  { icon: '🚀', title: 'Faster Decision-Making', desc: 'Access real-time information through dashboards and reports.' },
  { icon: '⚙️', title: 'Reduced Manual Work', desc: 'Automate repetitive operational processes.' },
  { icon: '🤝', title: 'Better Customer Experience', desc: 'Maintain product availability and improve operational efficiency.' },
  { icon: '🌱', title: 'Scalable Growth', desc: 'Build systems that support expansion and multiple store locations.' },
];

const INDUSTRIES = [
  { name: 'Retail Stores', desc: 'Improve inventory control, sales visibility, and reporting.' },
  { name: 'Multi-Location Retail Chains', desc: 'Centralize operations and reporting across multiple outlets.' },
  { name: 'E-Commerce Businesses', desc: 'Integrate inventory, orders, procurement, and reporting.' },
  { name: 'Wholesale Retailers', desc: 'Manage inventory, purchasing, and supplier operations efficiently.' },
];

const WHY = [
  'Inventory optimization',
  'Sales visibility',
  'Procurement efficiency',
  'Real-time reporting',
  'Business automation',
  'Scalable growth',
];

const FAQS = [
  { q: 'Can the system support multiple retail locations?', a: 'Yes. Our solutions can manage inventory, sales, and reporting across multiple stores.' },
  { q: 'Can inventory automatically update after sales?', a: 'Yes. Inventory can be synchronized with sales systems and POS platforms.' },
  { q: 'Do you integrate with existing software?', a: 'Yes. We can integrate POS systems, accounting software, ERP platforms, and third-party applications.' },
  { q: 'Can dashboards be customized?', a: 'Absolutely. We create dashboards based on your business goals and reporting needs.' },
  { q: 'Do you provide ongoing support?', a: 'Yes. We offer maintenance, support, and future enhancements.' },
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

export default function RetailPage() {
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
            }}>Retail</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hr-hero-title">
            <span className="hr-hero-title-accent">Retail</span> Industry Solutions
          </motion.h1>
          <motion.p variants={fadeInUp} className="hr-hero-subtitle">
            Smarter Systems for Modern Retail Businesses.<br /><br />
            Running a retail business requires balancing inventory, sales, suppliers, customers, and operations every day. As the business grows, managing everything through spreadsheets and disconnected software becomes increasingly difficult. Inventory mismatches, stock shortages, delayed reporting, and lack of visibility can directly impact profitability and customer satisfaction.<br /><br />
            GrassFRONT helps retail businesses streamline operations through ERP systems, inventory management solutions, business intelligence dashboards, automation, and custom software development.
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
                <div className="hr-metric-label">Sales Velocity</div>
                <div className="hr-metric-val" style={{ color: '#10B981' }}>+18%</div>
              </div>
              <div className="hr-metric-box">
                <div className="hr-metric-label">Stock Shortages</div>
                <div className="hr-metric-val" style={{ color: '#EF4444' }}>0</div>
              </div>
              <div className="hr-metric-box hr-metric-full">
                <div className="hr-metric-label">Inventory Sync</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="hr-metric-val">All Stores Online</div>
                  <div style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>100% Accuracy</div>
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
            <h2 style={{ maxWidth: '100%' }}>Common Challenges Retail Businesses Face</h2>
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
                {s.features.length > 0 && (
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
            <h2 style={{ maxWidth: '100%' }}>Benefits for Retail Businesses</h2>
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
                We understand that retail businesses need visibility, speed, and operational control. Our solutions focus on empowering retailers with the systems they need for scalable growth.
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
          <h2 style={{ fontSize: '56px', letterSpacing: '-1.5px' }}>Build a More Efficient Retail Business</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
            The right technology can help retail businesses improve inventory control, increase visibility, reduce manual work, and make smarter business decisions. GrassFRONT helps retailers create systems that support growth and improve operational efficiency.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '32px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '12px' }}>Book a Discovery Call</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
