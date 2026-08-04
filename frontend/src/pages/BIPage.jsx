
import { useState, useEffect, useRef } from 'react';
import './ServicePage.css';
import './BIPage.css';
import { useContactModal } from '../components/ContactModalContext';
import {
  FaChartLine,
  FaBoxes,
  FaDollarSign,
  FaCog,
  FaTachometerAlt,
  FaBullseye,
  FaFileAlt,
  FaLink,
  FaChartBar,
  FaBolt,
  FaBroadcastTower,
  FaRocket,
  FaClock,
  FaRulerCombined,
  FaSearch,
  FaUtensils,
  FaIndustry,
  FaShoppingCart,
  FaTruck,
  FaBriefcase,
  FaExclamationTriangle
} from 'react-icons/fa';


const TRACKS = [
  { icon: <FaChartLine />, title: 'Sales Performance', desc: 'Monitor revenue, growth trends, customer activity, and sales performance in real time.' },
  { icon: <FaBoxes />, title: 'Inventory & Operations', desc: 'Track stock levels, procurement activities, operational efficiency, and business workflows from a single dashboard.' },
  { icon: <FaDollarSign />, title: 'Financial Performance', desc: 'Gain visibility into expenses, budgets, profitability, and cash flow.' },
  { icon: <FaCog />, title: 'Team & Process Performance', desc: 'Measure productivity, process efficiency, and operational bottlenecks across departments.' },
];

const SOLUTIONS = [
  { icon: <FaTachometerAlt />, title: 'Executive Dashboards', desc: 'A clear view of your most important business metrics in one place — built for decision-makers who need answers fast.', tags: ['REAL-TIME', 'KPI', 'OVERVIEW'] },
  { icon: <FaBullseye />, title: 'KPI Tracking Systems', desc: 'Track the numbers that drive growth and performance. Define, monitor, and act on what matters most to your business.', tags: ['METRICS', 'TARGETS', 'ALERTS'] },
  { icon: <FaFileAlt />, title: 'Automated Reporting', desc: 'Eliminate manual reporting and access real-time insights whenever needed — no more waiting for someone to prepare a report.', tags: ['AUTOMATION', 'SCHEDULED', 'INSTANT'] },
  { icon: <FaLink />, title: 'Data Integration', desc: 'Connect data from multiple systems into a single reporting platform — ERP, CRM, accounting, spreadsheets, and more.', tags: ['ERP', 'CRM', 'API'] },
  { icon: <FaChartBar />, title: 'Custom Analytics', desc: 'Get reports and dashboards built specifically around your business goals, workflows, and reporting requirements.', tags: ['CUSTOM', 'ANALYTICS', 'INSIGHTS'] },
];

const BENEFITS = [
  { icon: <FaBolt />, title: 'Faster Decision-Making', desc: 'Access accurate information without waiting for manual reports to be prepared.' },
  { icon: <FaBroadcastTower />, title: 'Better Visibility', desc: 'Understand what\'s happening across your business in real time, not days later.' },
  { icon: <FaRocket />, title: 'Improved Performance', desc: 'Identify opportunities, inefficiencies, and trends faster than your competition.' },
  { icon: <FaClock />, title: 'Reduced Manual Work', desc: 'Automate reporting and eliminate repetitive data collection from your team\'s workload.' },
  { icon: <FaRulerCombined />, title: 'Stronger Business Growth', desc: 'Make decisions backed by data rather than assumptions or outdated information.' },
  { icon: <FaSearch />, title: 'Single Source of Truth', desc: 'Eliminate conflicting reports from different departments with one unified platform.' },
];

const INDUSTRIES = [
  {
    icon: <img src="/assets/ind-coffee.png" alt="Hospitality" />,
    name: 'Hospitality & Restaurants',
    items: [
      'Cover and menu mix reporting by outlet',
      'Kitchen yield and waste reports',
      'Guest spend analysis by service period',
    ],
    outcome: 'Match purchasing and staffing to actual demand.',
  },
  {
    icon: <img src="/assets/ind-factory.png" alt="Manufacturing" />,

    name: 'Manufacturing',
    items: [
      'Machine uptime and scrap rate dashboards',
      'Batch cost and margin analysis',
      'Supplier quality scorecards',
    ],
    outcome: 'Make production decisions with current quality and cost data.',
  },
  {
    icon: <img src="/assets/ind-cart.png" alt="Retail" />,
    name: 'Retail',
    items: [
      'Promotion conversion and sell-through reports',
      'SKU velocity across channels',
      'Margin analysis by category',
    ],
    outcome: 'Plan assortments and pricing from real sales performance.',
  },
  {
    icon: <img src="/assets/ind-truck.png" alt="Distribution & Logistics" />,
    name: 'Distribution & Logistics',
    items: [
      'On-time delivery and fulfillment dashboards',
      'Inventory velocity by warehouse',
      'Shipment exception tracking',
    ],
    outcome: 'Keep logistics and inventory teams aligned on actual progress.',
  },
  {
    icon: <img src="/assets/ind-services.jpg" alt="Professional Services" />,
    name: 'Professional Services',
    items: [
      'Utilization and capacity planning dashboards',
      'Revenue per consultant and project',
      'Billable vs non-billable time analysis',
    ],
    outcome: 'Staff the right people on the right projects and protect margins.',
  },
];

const FAQS = [
  { q: 'What is Business Intelligence?', a: 'Business Intelligence (BI) is the process of collecting, analyzing, and visualizing business data to support better decision-making across your organization.' },
  { q: 'Can BI connect with our existing software?', a: 'Yes. We can integrate data from ERP systems, CRM platforms, accounting software, spreadsheets, and most other business tools.' },
  { q: 'How often is data updated?', a: 'Depending on requirements, dashboards can update in real time, hourly, daily, or on a custom schedule that fits your operations.' },
  { q: 'Do you create custom dashboards?', a: 'Yes. Every dashboard is designed around your business goals and reporting requirements — not a generic template.' },
  { q: 'Is BI suitable for small businesses?', a: 'Absolutely. Business Intelligence helps businesses of all sizes make better use of their data and improve decision-making.' },
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

export default function BIPage() {
  useReveal();
  const [open, setOpen] = useState(null);
  const { openContactModal, redirectToContact } = useContactModal();
  const col1 = FAQS.filter((_, i) => i % 2 === 0);
  const col2 = FAQS.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ item, idx }) => {
    const isOpen = open === idx;
    return (
      <div className={`sp-faq-item${isOpen ? ' sp-faq-item--open' : ''}`}
        onClick={() => setOpen(p => p === idx ? null : idx)}
        role="button" tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(p => p === idx ? null : idx)}>
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
      {/* breadcrumb */}
      <div className="sp-back-link">
        <a href="/">← Back</a>
      </div>

      {/* hero */}
      <section className="sp-hero">
        <div className="sp-hero__inner">
          {/* <div className="sp-hero__label"><span className="sp-hero__dot" />Business Intelligence Solutions</div> */}
          <h1>Turn Business Data Into <span className="sp-hero__accent">Better Decisions.</span></h1>
          <p>Most businesses have plenty of data but very little visibility. Sales in one system, expenses in another, inventory in spreadsheets. By the time information reaches decision-makers, the opportunity to act has often passed.</p>
          <div className="sp-hero__actions">
            <button
              type="button"
              className="sp-btn sp-btn--primary"
              onClick={() => openContactModal("Business Intelligence & Dashboards")}
            >
              Request a Consultation
            </button>
            <a href="#bi-solutions" className="sp-btn sp-btn--ghost">See Our Solutions →</a>
          </div>
          <div className="sp-hero__stats">
            {[['500+', 'Users on BI platforms'], ['60%', 'Reporting time saved'], ['Real-time', 'Data refresh'], ['100%', 'Custom dashboards']].map(([n, l]) => (
              <div key={n} className="sp-hero__stat">
                <span className="sp-hero__stat-num">{n}</span>
                <span className="sp-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="bi-mock">
              <div className="bi-mock__bar">
                <span className="bi-mock__dot" style={{ background: '#FF5F57' }} />
                <span className="bi-mock__dot" style={{ background: '#FFBD2E' }} />
                <span className="bi-mock__dot" style={{ background: '#28CA41' }} />
                <span className="bi-mock__url">grassfront.com/dashboard</span>
              </div>
              <div className="bi-mock__body">
                <div className="bi-mock__head">Business Overview · Live</div>
                <div className="bi-kpi-row">
                  {[['₹1.34M', 'Revenue', '+12%'], ['8,543', 'Orders', '+8.1%'], ['98.6%', 'On-Time', '+0.3%'], ['₹4.2L', 'Expenses', '-3.1%']].map(([v, l, c]) => (
                    <div key={l} className="bi-kpi">
                      <span className="bi-kpi__val">{v}</span>
                      <span className="bi-kpi__label">{l}</span>
                      <span className={`bi-kpi__change${c.startsWith('-') ? ' bi-kpi__change--down' : ''}`}>{c}</span>
                    </div>
                  ))}
                </div>
                <div className="bi-chart-area">
                  <div className="bi-chart-label">Revenue Trend (6 months)</div>
                  <svg viewBox="0 0 260 70" fill="none" className="bi-chart-svg">
                    <defs>
                      <linearGradient id="biGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1F00FF" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#1F00FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polyline points="0,55 44,44 88,48 132,26 176,32 220,18 260,10"
                      stroke="#1F00FF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <polygon points="0,55 44,44 88,48 132,26 176,32 220,18 260,10 260,70 0,70"
                      fill="url(#biGrad)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* challenges */}
      <section className="sp-section sp-section--white sp-reveal" id="bi-challenges">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Common Challenges</span></div>
          <div className="sp-section-header">
            <h2>Stop Guessing. Start Making Data-Driven Decisions.</h2>
            <p>These challenges affect most growing businesses. BI solves all of them.</p>
          </div>
          <div className="bi-challenges">
            {['Reports take hours to prepare', 'Data is scattered across multiple systems', 'Teams work with outdated information', 'Important KPIs are difficult to track', 'Decision-making relies on assumptions instead of facts'].map((c, i) => (
              <div key={i} className="bi-challenge-item">
                <span className="bi-challenge-num">0{i + 1}</span>
                <span className="bi-challenge-icon">⚠️</span>
                <span className="bi-challenge-text">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we track */}
      <section className="sp-section sp-section--tint sp-reveal" id="bi-track">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">What We Help You Track</span></div>
          <div className="sp-section-header">
            <h2>Full Visibility Across Every Business Function.</h2>
            <p>One platform to track what matters most — across every department.</p>
          </div>
          <div className="sp-grid sp-grid--2">
            {TRACKS.map(t => (
              <div key={t.title} className="sp-module-card">
                <div className="sp-module-icon">{t.icon}</div>
                <div><h3>{t.title}</h3><p>{t.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* solutions */}
      <section className="sp-section sp-section--white sp-reveal" id="bi-solutions">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Our BI Solutions</span></div>
          <div className="sp-section-header">
            <h2>Business Intelligence Solutions We Build.</h2>
            <p>Every solution is designed around your data sources, reporting needs, and business goals.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {SOLUTIONS.map(s => (
              <div key={s.title} className="sp-module-card">
                <div className="sp-module-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <div className="sp-module-line" />
                <p>{s.desc}</p>
                <div className="cap-tags">{s.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="sp-section sp-section--tint sp-reveal" id="bi-benefits">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why Businesses Invest in BI</span></div>
          <div className="sp-section-header sp-section-header--center">
            <h2>What Business Intelligence Does for Your Organisation.</h2>
            <p>Measurable improvements in how fast and confidently your team makes decisions.</p>
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

      {/* why grassfront split */}
      <section className="sp-section sp-section--white sp-reveal" id="bi-why">
        <div className="sp-inner">
          <div className="sp-split">
            <div className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why GrassFRONT</span></div>
              <h2>We Don't Just Build Dashboards.</h2>
              <p className="sp-split__desc">We help businesses understand what numbers actually matter and create reporting systems that support better decision-making. Our approach focuses on business outcomes — not just visualizations.</p>
            </div>
            <div className="sp-split__right">
              <ul className="sp-checklist">
                {['Business-first reporting', 'Easy-to-understand dashboards', 'Real-time visibility', 'Custom KPI tracking', 'Scalable reporting solutions', 'Long-term support'].map(item => (
                  <li key={item} className="sp-check-item"><span className="sp-check-icon">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* industries */}
      <section className="sp-section sp-section--tint sp-reveal" id="bi-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Industries We Support</span></div>
          <div className="sp-section-header">
            <h2>BI Solutions Across Every Sector.</h2>
            <p>We've built reporting systems for businesses across a wide range of industries.</p>
          </div>
          <div className="sp-industry-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="sp-industry-card">
                <div className="sp-industry-card__icon">{ind.icon}</div>
                <h3>{ind.name}</h3>
                <ul>{ind.items.map(it => <li key={it}><span className="sp-industry-dot" />{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sp-section sp-section--white sp-reveal" id="bi-faq">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Frequently Asked Questions</span></div>
          <div className="sp-section-header">
            <h2>Common Questions, Straight Answers.</h2>
            <p>Everything you need to know before starting a BI project with us.</p>
          </div>
          <div className="sp-faq-cols">
            <div className="sp-faq-col">{col1.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2} />)}</div>
            <div className="sp-faq-col">{col2.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2 + 1} />)}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="sp-cta">
        <div className="sp-cta__inner sp-reveal">
          <div className="sp-cta__badge">Free consultation · No commitment required</div>
          <h2>Make Better Decisions With Better Visibility.</h2>
          <p>The right data, presented the right way, can transform how a business operates. GrassFRONT helps organizations build reporting and analytics systems that provide clarity, improve efficiency, and support growth.</p>
          <div className="sp-cta__btns">
            <button
              type="button"
              className="sp-btn sp-btn--white"
              onClick={() => openContactModal("Business Intelligence & Dashboards")}
            >
              Request a Consultation
            </button>
            
          </div>
          <div className="sp-cta__note">Free 30-min discovery call · <span>100+ businesses already served</span> · Response within 4 hours</div>
        </div>
      </div>
    </main>
  );
}
