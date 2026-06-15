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
  { icon: '👁️', title: 'Limited Visibility Across Operations', desc: 'Many manufacturing businesses struggle to get a complete view of raw material availability, production status, inventory levels, supplier performance, and operational costs. Without accurate information, decision-making becomes difficult.' },
  { icon: '📦', title: 'Inventory Management Issues', desc: 'Poor inventory visibility often leads to stock shortages, excess inventory, production delays, and higher carrying costs.' },
  { icon: '⏳', title: 'Manual Procurement Processes', desc: 'Managing suppliers, quotations, purchase orders, and approvals manually can slow operations and create unnecessary delays.' },
  { icon: '📉', title: 'Reporting Takes Too Long', desc: 'When data is spread across multiple systems and spreadsheets, preparing reports becomes time-consuming and prone to errors.' },
  { icon: '⚙️', title: 'Production Planning Challenges', desc: 'Without proper systems, businesses find it difficult to forecast requirements, plan production schedules, and monitor operational performance.' },
];

const SOLUTIONS = [
  { icon: '🏭', title: 'Manufacturing ERP Systems', desc: 'Bring procurement, inventory, production, finance, and reporting into one platform.', features: ['Production Planning', 'Inventory Management', 'Procurement Tracking', 'Vendor Management', 'Approval Workflows', 'Business Reporting'] },
  { icon: '🛒', title: 'Procurement Management Software', desc: 'Simplify purchasing operations and supplier management.', features: ['Purchase Requests', 'Approval Workflows', 'Supplier Database', 'Purchase Orders', 'Procurement Analytics'] },
  { icon: '📦', title: 'Inventory Management Solutions', desc: 'Track inventory movement across warehouses and production facilities.', features: ['Improved stock visibility', 'Reduced shortages', 'Better purchasing decisions', 'Lower inventory costs'] },
  { icon: '📈', title: 'Business Intelligence Dashboards', desc: 'Monitor operational performance through real-time reporting.', features: ['Production Output', 'Inventory Levels', 'Procurement Spend', 'Vendor Performance', 'Operational KPIs'] },
  { icon: '⚡', title: 'Workflow Automation', desc: 'Reduce manual work and improve process efficiency through automation.', features: ['Procurement approvals', 'Inventory alerts', 'Production reporting', 'Supplier onboarding'] },
];

const BENEFITS = [
  { icon: '✅', title: 'Better Inventory Control', desc: 'Know exactly what materials are available and when replenishment is needed.' },
  { icon: '⚡', title: 'Improved Procurement Efficiency', desc: 'Manage suppliers and purchasing activities more effectively.' },
  { icon: '🚀', title: 'Faster Decision-Making', desc: 'Access real-time operational insights and performance data.' },
  { icon: '⚙️', title: 'Reduced Manual Work', desc: 'Automate repetitive processes and approvals.' },
  { icon: '👁️', title: 'Increased Operational Visibility', desc: 'Track business performance from a single dashboard.' },
  { icon: '📈', title: 'Scalable Operations', desc: 'Build systems that support future growth and expansion.' },
];

const INDUSTRIES = [
  { name: 'Industrial Manufacturers', desc: 'Improve visibility across procurement, production, and inventory operations.' },
  { name: 'Process Manufacturing Businesses', desc: 'Track materials, production workflows, and operational performance.' },
  { name: 'Fabrication & Engineering Companies', desc: 'Manage procurement, inventory, approvals, and reporting.' },
  { name: 'Consumer Goods Manufacturers', desc: 'Monitor inventory movement, supplier performance, and production efficiency.' },
];

const WHY = [
  'Production visibility',
  'Inventory control',
  'Procurement efficiency',
  'Real-time reporting',
  'Workflow automation',
  'Long-term scalability',
];

const FAQS = [
  { q: 'Can ERP systems support manufacturing operations?', a: 'Yes. Manufacturing ERP systems can manage procurement, inventory, production planning, reporting, and operational workflows.' },
  { q: 'Can inventory and procurement be connected?', a: 'Absolutely. Procurement activities can automatically update inventory records and material availability.' },
  { q: 'Do you support multi-location manufacturing operations?', a: 'Yes. Our solutions can support multiple plants, warehouses, and operational locations.' },
  { q: 'Can existing systems be integrated?', a: 'Yes. We can integrate ERP platforms, accounting software, inventory systems, and third-party applications.' },
  { q: 'Do you provide custom dashboards?', a: 'Yes. Reporting dashboards can be tailored to your operational and management requirements.' },
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

export default function ManufacturingPage() {
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
            }}>Manufacturing</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="hr-hero-title">
            <span className="hr-hero-title-accent">Manufacturing</span> Industry Solutions
          </motion.h1>
          <motion.p variants={fadeInUp} className="hr-hero-subtitle">
            Improve Production Visibility, Inventory Control, and Operational Efficiency.<br/><br/>
            Manufacturing businesses manage a large number of moving parts every day. Raw material procurement, inventory tracking, production planning, supplier management, quality control, and reporting all need to work together efficiently. When these processes are managed through spreadsheets, disconnected software, and manual workflows, delays and inefficiencies become unavoidable.<br/><br/>
            GrassFRONT helps manufacturing companies streamline operations through ERP systems, procurement automation, inventory management solutions, business intelligence dashboards, and custom software development.
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
                <div className="hr-metric-label">Production Efficiency</div>
                <div className="hr-metric-val" style={{ color: '#10B981' }}>+12%</div>
              </div>
              <div className="hr-metric-box">
                <div className="hr-metric-label">Pending Approvals</div>
                <div className="hr-metric-val">3</div>
              </div>
              <div className="hr-metric-box hr-metric-full">
                <div className="hr-metric-label">Inventory Alerts</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div className="hr-metric-val">8 Items Low</div>
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
            <h2 style={{ maxWidth: '100%' }}>Common Challenges Manufacturing Businesses Face</h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="hr-bento-grid">
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

          <motion.div variants={staggerContainer} className="hr-bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
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
            <h2 style={{ maxWidth: '100%' }}>Benefits for Manufacturing Businesses</h2>
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
                We understand that manufacturing businesses need more than software. They need systems that improve operational control, reduce inefficiencies, and support growth.
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
          <h2 style={{ fontSize: '56px', letterSpacing: '-1.5px' }}>Build a More Efficient Manufacturing Operation</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.6' }}>
            Modern manufacturing requires better visibility, faster decision-making, and streamlined processes. GrassFRONT helps manufacturing businesses improve procurement, inventory management, reporting, and operational efficiency through practical technology solutions built around real-world operations.
          </p>
          <div className="sp-cta__actions" style={{ marginTop: '32px' }}>
            <a href="#contact" className="sp-btn sp-btn--white" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '12px' }}>Book a Discovery Call</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
