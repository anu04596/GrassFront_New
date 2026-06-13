import { useState, useEffect } from 'react';
import './ServicePage.css';
import './IntegrationPage.css';
import {
  FaBuilding,
  FaHandshake,
  FaBoxes,
  FaShoppingCart,
  FaCreditCard,
  FaPlug,
  FaKeyboard,
  FaBullseye,
  FaBolt,
  FaUsers,
  FaRocket,
  FaSearch,
  FaClipboardList,
  FaChartBar,
  FaBroadcastTower,
  FaChartLine,
  FaHourglassHalf,
  FaRandom,
  FaLock,
  FaTools,
  FaUtensils,
  FaIndustry,
  FaTruck,
  FaBriefcase
} from "react-icons/fa";

import {
  MdOutlineInventory2,
  MdSyncAlt,
  MdOutlineAccountTree
} from "react-icons/md";

const INTEGRATES = [
  { icon: <FaBuilding />, title: 'ERP & Accounting Software', desc: 'Keep financial and operational data synchronized automatically — no more manual reconciliation between your accounting and operations.' },
  { icon: <FaHandshake />, title: 'CRM & Sales Platforms', desc: 'Connect customer information, orders, quotations, and sales activities so every team works with the same up-to-date records.' },
  { icon: <FaBoxes />, title: 'Inventory & Procurement', desc: 'Ensure inventory levels and purchasing activities stay aligned. Prevent stock shortages caused by disconnected procurement data.' },
  { icon: <FaShoppingCart />, title: 'E-Commerce Platforms', desc: 'Connect online orders, inventory, payments, and fulfillment processes into a seamless, automated pipeline.' },
  { icon: <FaCreditCard />, title: 'Payment Gateways', desc: 'Automate payment tracking and transaction updates across your accounting and operational systems.' },
  { icon: <FaPlug />, title: 'Third-Party Applications', desc: 'Integrate your existing business tools into one connected workflow — from communication tools to specialized industry software.' },
];

const BENEFITS = [
  { icon: <FaKeyboard />, title: 'Eliminate Duplicate Data Entry', desc: 'Enter information once and let systems update automatically — freeing your team from repetitive manual work.' },
  { icon: <FaBullseye />, title: 'Improve Data Accuracy', desc: 'Reduce errors caused by manual updates and inconsistent records across departments.' },
  { icon: <FaBolt />, title: 'Faster Reporting', desc: 'Access information from multiple systems through a single dashboard — no more waiting on manual data pulls.' },
  { icon: <FaUsers />, title: 'Better Team Collaboration', desc: 'Every department works with the same data and stays aligned, regardless of which tools they use.' },
  { icon: <FaRocket />, title: 'Increased Efficiency', desc: 'Automated data flow helps teams focus on work that moves the business forward.' },
  { icon: <FaSearch />, title: 'Better Business Visibility', desc: 'Get a complete view of operations without switching between multiple platforms.' },
];

const USE_CASES = [
  {
    icon: <FaBriefcase />,
    title: 'Sales to Finance Integration',
    desc: 'Automatically sync customer orders, invoices, and payment information between your CRM and accounting software.',
    tags: ['CRM', 'ACCOUNTING', 'INVOICES'],
  },
  {
    icon: <FaClipboardList />,
    title: 'Procurement to Inventory',
    desc: 'Update inventory records as purchases are approved and received — keeping stock levels accurate without manual updates.',
    tags: ['ERP', 'INVENTORY', 'PROCUREMENT'],
  },
  {
    icon: <MdOutlineAccountTree />,
    title: 'CRM to ERP Integration',
    desc: 'Ensure customer information and transactions remain consistent across your sales and operational systems.',
    tags: ['CRM', 'ERP', 'SYNC'],
  },
  {
    icon: <FaChartBar />,
    title: 'Multi-System Reporting',
    desc: 'Combine data from multiple applications into a single reporting dashboard — one source of truth for the whole business.',
    tags: ['REPORTING', 'DASHBOARD', 'BI'],
  },
];

const INDUSTRIES = [
  {
    icon: <FaUtensils />,
    name: 'Hospitality & Restaurants',
    items: [
      'Sync POS, procurement, and kitchen systems for real-time stock updates',
      'Link event catering orders to inventory and staffing plans',
      'Push reservation data into service workflows',
    ],
    outcome: 'Keep guest service, kitchen, and procurement teams coordinated automatically.',
  },
  {
    icon: <FaIndustry />,
    name: 'Manufacturing',
    items: [
      'Connect MES with ERP to eliminate manual production handoffs',
      'Sync procurement and inventory data with finance systems',
      'Push production status into planning and order management',
    ],
    outcome: 'Reduce manual escalation when work moves between production and support teams.',
  },
  {
    icon: <FaShoppingCart />, name: 'Retail',
    items: [
      'Sync online orders with in-store inventory and fulfillment',
      'Flow loyalty and CRM data into point-of-sale experiences',
      'Record returns and exchanges across channels in one system',
    ],
    outcome: 'Stop retail channels from operating with inconsistent inventory and customer data.',
  },
  {
    icon: <FaTruck />,
    name: 'Distribution & Logistics',
    items: [
      'Connect WMS to carriers for live shipment and allocation updates',
      'Send order status changes to customer service automatically',
      'Sync forecasts with replenishment and purchase order systems',
    ],
    outcome: 'Keep shipment commitments accurate and reduce manual tracking.',
  },
  {
    icon: <FaBriefcase />,
    name: 'Professional Services',
    items: [
      'Push CRM opportunities into project delivery systems',
      'Sync time tracking with billing and finance tools',
      'Update contract approvals across sales and legal systems',
    ],
    outcome: 'Keep sales, delivery, and finance aligned through one connected workflow.',
  },
];

const PROCESS = [
  { num: '01', title: 'Discovery', desc: 'We map your existing systems, data flows, and operational pain points.' },
  { num: '02', title: 'Architecture', desc: 'We design the integration architecture — what connects to what and how data flows.' },
  { num: '03', title: 'Development', desc: 'We build and configure the integration layer, APIs, and automation logic.' },
  { num: '04', title: 'Testing', desc: 'Thorough testing across all connected systems before going live.' },
  { num: '05', title: 'Deployment', desc: 'Seamless go-live with minimal disruption to your operations.' },
];

const FAQS = [
  { q: 'What is system integration?', a: 'System integration connects different software applications so they can exchange information automatically — removing the need for manual data transfer between tools.' },
  { q: 'Can you integrate our existing software?', a: 'Yes. We work with ERP systems, CRM platforms, accounting software, inventory tools, e-commerce platforms, payment gateways, and many third-party applications.' },
  { q: 'Do we need to replace our current software?', a: 'No. Integration allows you to continue using your existing systems while improving how data flows between them.' },
  { q: 'Is integration secure?', a: 'Yes. Security and data protection are built into every integration solution. We follow best practices for API security, data encryption, and access control.' },
  { q: 'Can integrations be expanded later?', a: 'Absolutely. New systems and workflows can be added as your business requirements grow — without rebuilding from scratch.' },
  { q: 'How long does an integration project take?', a: 'Timeline depends on the complexity and number of systems involved. After a discovery session, we provide a clear project plan with milestones.' },
];

const Chevron = ({ open }) => (
  <svg width="15" height="15" viewBox="0 0 18 18" fill="none"
    style={{ transition: 'transform .35s cubic-bezier(.22,1,.36,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
    <polyline points="4.5,7 9,12 13.5,7" stroke="#1F00FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.sp-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function IntegrationPage() {
  useReveal();
  const [open, setOpen] = useState(null);
  const col1 = FAQS.filter((_, i) => i % 2 === 0);
  const col2 = FAQS.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ item, idx }) => {
    const isOpen = open === idx;
    return (
      <div
        className={`sp-faq-item${isOpen ? ' sp-faq-item--open' : ''}`}
        onClick={() => setOpen(p => p === idx ? null : idx)}
        role="button" tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(p => p === idx ? null : idx)}
      >
        <div className="sp-faq-header">
          <h3>{item.q}</h3>
          <span className="sp-faq-chevron"><Chevron open={isOpen} /></span>
        </div>
        <div className={`sp-faq-expand${isOpen ? ' sp-faq-expand--open' : ''}`}>
          <div className="sp-faq-expand-inner"><p>{item.a}</p></div>
        </div>
      </div>
    );
  };

  return (
    <main className="sp-page">
      <a href="/#capabilities" className="sp-back-link">← Back</a>

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero__inner">
          {/* <div className="sp-hero__label"><span className="sp-hero__dot" />System Integration Services</div> */}
          <h1>Connect Your Business Systems, <span className="sp-hero__accent">Eliminate Manual Work.</span></h1>
          <p>Many businesses use multiple software tools that don't talk to each other. Sales in one system, finance in another, inventory elsewhere. The result is duplicate work, data inconsistencies, and delayed reporting.</p>
          <div className="sp-hero__actions">
            <a href="#contact" className="sp-btn sp-btn--primary">Talk to an Integration Expert</a>
            <a href="#int-integrates" className="sp-btn sp-btn--ghost">See What We Integrate →</a>
          </div>
          <div className="sp-hero__stats">
            {[['Zero', 'Manual data entry'], ['Real-time', 'Data sync'], ['100%', 'Audit trail'], ['Custom', 'Integration design']].map(([n, l]) => (
              <div key={l} className="sp-hero__stat">
                <span className="sp-hero__stat-num">{n}</span>
                <span className="sp-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="int-flow-card">
              <div className="int-flow-card__header">
                <span className="int-flow-card__title">Integration Flow</span>
                <span className="int-flow-card__live">● Live Sync</span>
              </div>
              <div className="int-flow-items">
                {[
                  { from: 'CRM', arrow: '→', to: 'ERP', label: 'Customer & order data', status: 'synced', cls: 's-green' },
                  { from: 'Inventory', arrow: '→', to: 'Accounting', label: 'Stock valuation', status: 'synced', cls: 's-green' },
                  { from: 'E-Commerce', arrow: '→', to: 'Inventory', label: 'Order fulfillment', status: 'active', cls: 's-blue' },
                ].map(row => (
                  <div key={row.label} className="int-flow-item">
                    <div className="int-flow-item__systems">
                      <span className="int-flow-sys">{row.from}</span>
                      <span className="int-flow-arrow">{row.arrow}</span>
                      <span className="int-flow-sys">{row.to}</span>
                    </div>
                    <span className={`int-flow-item__status ${row.cls}`}>{row.status}</span>
                  </div>
                ))}
              </div>
              <div className="int-flow-card__footer">
                <div className="int-flow-stat"><span className="int-flow-stat__num">6</span><span className="int-flow-stat__label">Systems</span></div>
                <div className="int-flow-stat"><span className="int-flow-stat__num">14k</span><span className="int-flow-stat__label">Synced</span></div>
                <div className="int-flow-stat"><span className="int-flow-stat__num">99.9%</span><span className="int-flow-stat__label">Uptime</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem section ── */}
      <section className="sp-section sp-section--white sp-reveal" id="int-problem">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Are Your Systems Working in Silos?</span></div>
          <div className="sp-section-header">
            <h2>Disconnected Software Slows Your Business Down.</h2>
            <p>If your team spends time on any of these, your systems may be working against you.</p>
          </div>
          <div className="int-problems">
            {[
              { icon: '📋', text: 'Copying data between systems manually' },
              { icon: '📊', text: 'Updating spreadsheets with information from multiple tools' },
              { icon: '📡', text: 'Chasing information across departments' },
              { icon: '📈', text: 'Creating reports by combining data from different sources' },
              { icon: '⏳', text: 'Delayed reporting due to slow data collection' },
              { icon: '🔀', text: 'Data inconsistencies between systems' },
            ].map((p, i) => (
              <div key={i} className="int-problem-card">
                <span className="int-problem-icon">{p.icon}</span>
                <span className="int-problem-text">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we integrate ── */}
      <section className="sp-section sp-section--tint sp-reveal" id="int-integrates">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">What We Integrate</span></div>
          <div className="sp-section-header">
            <h2>Connecting the Systems Your Business Already Uses.</h2>
            <p>From ERP to e-commerce — we integrate the tools your teams rely on every day.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {INTEGRATES.map(m => (
              <div key={m.title} className="sp-module-card">
                <div className="sp-module-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <div className="sp-module-line" />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="sp-section sp-section--white sp-reveal" id="int-benefits">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Benefits</span></div>
          <div className="sp-section-header">
            <h2>What System Integration Does for Your Business.</h2>
            <p>Measurable improvements in efficiency, accuracy, and visibility across every department.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {BENEFITS.map(b => (
              <div key={b.title} className="sp-benefit-card">
                <div className="sp-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="sp-section sp-section--tint sp-reveal" id="int-usecases">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Common Integration Use Cases</span></div>
          <div className="sp-section-header">
            <h2>Real Integrations That Drive Real Results.</h2>
            <p>These are the most common integration patterns we build for growing businesses.</p>
          </div>
          <div className="sp-grid sp-grid--2">
            {USE_CASES.map(uc => (
              <div key={uc.title} className="sp-module-card">
                <div className="sp-module-icon">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <div className="sp-module-line" />
                <p>{uc.desc}</p>
                <div className="cap-tags">{uc.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sp-section sp-section--white sp-reveal" id="int-process">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">How We Work</span></div>
          <div className="sp-section-header">
            <h2>Our Integration Process.</h2>
            <p>A clear, structured approach from discovery to deployment.</p>
          </div>
          <div className="sp-steps">
            {PROCESS.map(step => (
              <div key={step.num} className="sp-step">
                <div className="sp-step__top">
                  <span className="sp-step__num">{step.num}</span>
                  <span className="sp-step__connector" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why GrassFRONT ── */}
      <section className="sp-section sp-section--tint sp-reveal" id="int-why">
        <div className="sp-inner">
          <div className="sp-split">
            <div className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why GrassFRONT</span></div>
              <h2>Integration Built Around Your Business, Not a Generic Template.</h2>
              <p className="sp-split__desc">Every business uses different tools and processes. We design integrations around your operational requirements — not a one-size-fits-all approach — and continue supporting them as your systems evolve.</p>
              <ul className="sp-checklist">
                {['Business-first approach', 'Custom integration design', 'Scalable architecture', 'Security built in', 'Ongoing support & optimization'].map(item => (
                  <li key={item} className="sp-checklist__item">
                    <span className="sp-checklist__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-split__right">
              <div className="int-why-cards">
                {[
                  { icon: '🔒', head: 'Secure by Design', body: 'Every integration follows best practices for API security, data encryption, and access control — protecting your business data at every connection point.' },
                  { icon: '📈', head: 'Built to Scale', body: 'Integrations are architected to support future growth. New systems and workflows can be added as your business expands without starting over.' },
                  { icon: '🛠️', head: 'Ongoing Support', body: 'As your systems evolve, we continue supporting and optimizing your integrations — so your data keeps flowing reliably.' },
                ].map(c => (
                  <div key={c.head} className="int-why-card">
                    <div className="int-why-card__icon">{c.icon}</div>
                    <div>
                      <div className="int-why-card__head">{c.head}</div>
                      <p>{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="sp-section sp-section--white sp-reveal" id="int-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Industries We Support</span></div>
          <div className="sp-section-header">
            <h2>Integration Solutions Across Every Sector.</h2>
            <p>We've built connected systems for businesses across a wide range of industries.</p>
          </div>
          <div className="sp-industry-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="sp-industry-card">
                <div className="int-industry-icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <ul>{ind.items.map(it => <li key={it}><span className="sp-industry-dot" />{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-section sp-section--tint sp-reveal" id="int-faq">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Frequently Asked Questions</span></div>
          <div className="sp-section-header">
            <h2>Common Questions, Straight Answers.</h2>
            <p>Everything you need to know before starting an integration project with us.</p>
          </div>
          <div className="sp-faq-cols">
            <div className="sp-faq-col">{col1.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2} />)}</div>
            <div className="sp-faq-col">{col2.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2 + 1} />)}</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="sp-cta">
        <div className="sp-cta__inner sp-reveal">
          <div className="int-cta-badge">Free consultation · No commitment required</div>
          <h2>Make Your Software Work Together.</h2>
          <p>Disconnected systems create unnecessary work, delays, and reporting challenges. GrassFRONT helps businesses connect their applications, automate data flow, and create smoother operations.</p>
          <div className="sp-cta__actions">
            <a href="mailto:Info@grassfront.com" className="sp-btn sp-btn--white">Book a Free Consultation</a>
            <a href="tel:+917014626389" className="sp-btn sp-btn--outline-white">Talk to Our Team →</a>
          </div>
          <div className="int-cta-note">Free 30-min discovery call · <span>100+ businesses already served</span> · Response within 4 hours</div>
        </div>
      </div>
    </main>
  );
}