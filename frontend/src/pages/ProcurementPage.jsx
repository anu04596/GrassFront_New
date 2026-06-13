import { useState, useEffect } from 'react';
import './ServicePage.css';

import './ProcurementPage.css';
import {
  FaClipboardList,
  FaCheckCircle,
  FaHandshake,
  FaFileInvoiceDollar,
  FaBoxes,
  FaChartLine,
  FaBolt,
  FaRupeeSign,
  FaSearch,
  FaClock,
} from "react-icons/fa";

import {
  MdInventory2,
  MdApproval,
  MdOutlineAnalytics
} from "react-icons/md";


const MANAGES = [
  { icon: <FaClipboardList />, title: 'Purchase Requests', desc: 'Allow teams to raise purchase requests through a structured and transparent process. Track every request from submission to approval.' },
  { icon: <FaCheckCircle />, title: 'Approval Workflows', desc: 'Eliminate endless email chains and follow-ups. Automatically route requests to the right stakeholders and maintain a complete approval history.' },
  { icon: <FaHandshake />, title: 'Vendor Management', desc: 'Maintain a centralized database of suppliers, contracts, pricing, and performance records. Easily compare vendors and make informed purchasing decisions.' },
  { icon: <FaFileInvoiceDollar />, title: 'Purchase Orders', desc: 'Generate and manage purchase orders from a single platform. Track order status, delivery timelines, and supplier commitments.' },
  { icon: <FaBoxes />, title: 'Inventory & Procurement Visibility', desc: 'Connect procurement activities with inventory requirements to prevent stock shortages and unnecessary purchases.' },
  { icon: <FaChartLine />, title: 'Reporting & Analytics', desc: 'Monitor procurement spend, vendor performance, approval timelines, purchase trends, and cost-saving opportunities through dashboards.' },
];

const BENEFITS = [
  { icon: <FaBolt />, title: 'Faster Approvals', desc: 'Reduce delays by automating approval workflows and instant stakeholder notifications.' },
  { icon: <FaRupeeSign />, title: 'Better Cost Control', desc: 'Gain full visibility into purchasing activities and spending patterns across departments.' },
  { icon: <FaHandshake />, title: 'Improved Vendor Management', desc: 'Maintain stronger supplier relationships through organized records and performance tracking.' },
  { icon: <FaClock />, title: 'Reduced Manual Work', desc: 'Automate repetitive procurement tasks and eliminate paperwork from your team\'s workflow.' },
  { icon: <FaSearch />, title: 'Increased Transparency', desc: 'Track every purchase request, approval, and order from one centralized place.' },
  { icon: <FaChartLine />, title: 'Better Decision-Making', desc: 'Use real-time data to optimize purchasing strategies and supplier selection decisions.' },
];

const INDUSTRIES = [
  {
    icon: <img src="/assets/ind-coffee.png" alt="Hospitality" />,
    name: 'Hospitality & Restaurants',
    items: [
      'Manage food, linen, and beverage orders by outlet and service period',
      'Compare supplier prices and delivery windows for perishables',
     
    ],
    outcome: 'Keep kitchens stocked and service uninterrupted during busy shifts.',
  },
  {
    icon: <img src="/assets/ind-factory.png" alt="Manufacturing" />,

    name: 'Manufacturing',
    items: [
      'Compare supplier on-time delivery and quality performance',
     
      'Approve orders for spare parts and consumables before downtime occurs',
    ],
    outcome: 'Reduce the risk of production stops caused by missing materials.',
  },
  {
    icon: <img src="/assets/ind-cart.png" alt="Retail" />,
    name: 'Retail',
    items: [
      'Plan store replenishment and promotional buys with supplier data',
     
      'Track negotiated terms and supplier discounts by category',
    ],
    outcome: 'Make sure each location has the right products at the right time.',
  },
  {
    icon: <img src="/assets/ind-truck.png" alt="Distribution & Logistics" />,

    name: 'Distribution Businesses',
    items: [
      'Consolidate bulk purchase orders across customer segments',
      'Manage multi-location procurement with a single approval workflow',
      
    ],
    outcome: 'Control large-scale purchasing without losing sight of cost or delivery.',
  },
];

const FAQS = [
  { q: 'What is procurement management software?', a: 'Procurement management software helps businesses manage purchasing activities, vendor relationships, approvals, purchase orders, and procurement reporting from a centralized platform.' },
  { q: 'Can the software support custom approval workflows?', a: 'Yes. Approval workflows can be configured based on your organizational structure and procurement policies — including multi-level approvals.' },
  { q: 'Can procurement software integrate with ERP systems?', a: 'Yes. Procurement solutions can be integrated with ERP, inventory management, accounting software, and other business systems.' },
  { q: 'Is the software suitable for multi-location businesses?', a: 'Absolutely. The platform can support procurement activities across multiple branches, warehouses, or business units from a single interface.' },
  { q: 'Do you provide support after implementation?', a: 'Yes. We provide ongoing maintenance, enhancements, and technical support as your business and procurement requirements evolve.' },
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

export default function ProcurementPage() {
  useReveal();
  const [open, setOpen] = useState(null);
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
      <a href="/#capabilities" className="sp-back-link">← Back</a>

      <section className="sp-hero">
        <div className="sp-hero__inner">
          {/* <div className="sp-hero__label"><span className="sp-hero__dot" />Procurement Management Software</div> */}
          <h1>Simplify Purchasing, Vendor Management, <span className="sp-hero__accent">and Approvals.</span></h1>
          <p>Managing procurement through spreadsheets and emails works when operations are small. But as your business grows, tracking vendors, purchase requests, approvals, and orders becomes increasingly difficult — and costly.</p>
          <div className="sp-hero__actions">
            <a href="#contact" className="sp-btn sp-btn--primary">Book a Free Consultation</a>
            <a href="#proc-manages" className="sp-btn sp-btn--ghost">See What We Build →</a>
          </div>
          <div className="sp-hero__stats">
            {[['68%', 'Faster approvals'], ['120+', 'Vendors onboarded'], ['500+', 'SKUs managed'], ['100%', 'Audit trail']].map(([n, l]) => (
              <div key={n} className="sp-hero__stat">
                <span className="sp-hero__stat-num">{n}</span>
                <span className="sp-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="proc-mock">
              <div className="proc-mock__header">
                <span className="proc-mock__title">Purchase Requests</span>
                <span className="proc-mock__live">● Live</span>
              </div>
              <div className="proc-mock__items">
                {[
                  { label: 'Office Supplies — Marketing', amt: '₹12,400', status: 'Approved', cls: 's-green' },
                  { label: 'Raw Material Batch #47', amt: '₹2,34,000', status: 'Pending', cls: 's-amber' },
                  { label: 'IT Hardware Q4', amt: '₹1,12,000', status: 'Approved', cls: 's-green' },
                ].map(item => (
                  <div key={item.label} className="proc-mock__item">
                    <div className="proc-mock__item-left">
                      <span className="proc-mock__item-icon">🏷️</span>
                      <div>
                        <div className="proc-mock__item-label">{item.label}</div>
                        <div className="proc-mock__item-amt">{item.amt}</div>
                      </div>
                    </div>
                    <span className={`proc-mock__item-status ${item.cls}`}>{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="proc-mock__footer">
                <div className="proc-mock__kpi"><span className="proc-mock__kpi-num">142</span><span className="proc-mock__kpi-label">Total POs</span></div>
                <div className="proc-mock__kpi"><span className="proc-mock__kpi-num">58</span><span className="proc-mock__kpi-label">Vendors</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bottlenecks */}
      <section className="sp-section sp-section--white sp-reveal" id="proc-bottlenecks">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Common Bottlenecks</span></div>
          <div className="sp-section-header">
            <h2>Is Your Procurement Process Creating Bottlenecks?</h2>
            <p>These are the most common signs that manual procurement is slowing your business down.</p>
          </div>
          <div className="proc-bottlenecks">
            {['Purchase requests getting delayed', 'Vendor information scattered across files', 'Difficulty tracking approvals', 'Lack of visibility into spending','Inventory shortages due to poor planning', 'Limited reporting on procurement performance'].map((b, i) => (
              <div key={i} className="proc-bottleneck-item">
                <span className="proc-bottleneck-icon">⚠️</span>
                <span className="proc-bottleneck-text">{b}</span>
                <span className="proc-bottleneck-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we manage */}
      <section className="sp-section sp-section--tint sp-reveal" id="proc-manages">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">What We Help You Manage</span></div>
          <div className="sp-section-header">
            <h2>Everything Your Procurement Team Needs in One Place.</h2>
            <p>From purchase requests to vendor records — centralized and automated.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {MANAGES.map(m => (
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

      {/* benefits */}
      <section className="sp-section sp-section--white sp-reveal" id="proc-benefits">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Benefits</span></div>
          <div className="sp-section-header sp-section-header--center">
            <h2>Benefits of Procurement Automation.</h2>
            <p>Measurable improvements across speed, control, and visibility.</p>
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

      {/* why grassfront */}
      <section className="sp-section sp-section--tint sp-reveal" id="proc-why">
        <div className="sp-inner">
          <div className="sp-split">
            <div className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why GrassFRONT</span></div>
              <h2>Built Around Your Process, Not a Generic Template.</h2>
              <p className="sp-split__desc">Every business follows a different procurement workflow. We design solutions around your operations instead of forcing you into predefined systems — with practical outcomes as the focus.</p>
              <div className="proc-outcomes">
                {['Faster approvals', 'Better visibility', 'Lower procurement costs', 'Improved operational efficiency'].map(o => (
                  <div key={o} className="proc-outcome-item"><span className="proc-outcome-check">✓</span>{o}</div>
                ))}
              </div>
            </div>
            <div className="sp-split__right">
              <div className="proc-info-card">
                <div className="proc-info-card__head">Easy to Use</div>
                <p>Software adoption becomes easier when systems are designed for real users. We focus on creating clean, intuitive interfaces that teams can start using quickly — without long training sessions.</p>
              </div>
              <div className="proc-info-card">
                <div className="proc-info-card__head">Long-Term Support</div>
                <p>We continue supporting and improving your system as your business grows — adding modules, optimizing workflows, and ensuring your procurement operations scale with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* industries */}
      <section className="sp-section sp-section--white sp-reveal" id="proc-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Designed For Growing Businesses</span></div>
          <div className="sp-section-header">
            <h2>Industries We Build Procurement Solutions For.</h2>
            <p>Tailored to the specific operational complexity of each sector.</p>
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
      <section className="sp-section sp-section--tint sp-reveal" id="proc-faq">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Frequently Asked Questions</span></div>
          <div className="sp-section-header">
            <h2>Common Questions, Straight Answers.</h2>
            <p>Everything you need to know before starting a procurement project with us.</p>
          </div>
          <div className="sp-faq-cols">
            <div className="sp-faq-col">{col1.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2} />)}</div>
            <div className="sp-faq-col">{col2.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2 + 1} />)}</div>
          </div>
        </div>
      </section>

      <div className="sp-cta">
        <div className="sp-cta__inner sp-reveal">
          <div className="sp-cta__badge">Free consultation · No commitment required</div>
          <h2>Gain Better Control Over Procurement Operations.</h2>
          <p>Procurement plays a critical role in business performance. The right system can help reduce delays, improve visibility, strengthen supplier management, and optimize purchasing decisions.</p>
          <div className="sp-cta__btns">
            <a href="mailto:Info@grassfront.com" className="sp-btn sp-btn--white">Schedule a Free Consultation</a>
            <a href="tel:+917014626389" className="sp-btn sp-btn--outline-white">Talk to Our Team →</a>
          </div>
          <div className="sp-cta__note">Free 30-min discovery call · <span>100+ businesses already served</span> · Response within 4 hours</div>
        </div>
      </div>
    </main>
  );
}
