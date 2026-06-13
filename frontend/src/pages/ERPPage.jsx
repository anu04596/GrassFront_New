import './ServicePage.css';
import {
  FaShoppingCart,
  FaBoxes,
  FaChartLine,
  FaWallet,
  FaChartPie,
  FaFileExcel,
  FaProjectDiagram,
  FaClock,
  FaEye,
  FaIndustry,
  FaUtensils,
  FaStore,
  FaTruck,
  FaBriefcase
} from 'react-icons/fa';

const MODULES = [
  { icon: <FaShoppingCart />, title: 'Procurement Management', desc: 'Manage vendors, quotations, purchase requests, approvals, and purchase orders from one place.' },
  { icon: <FaBoxes />, title: 'Inventory Management', desc: 'Track stock movement, warehouse operations, inventory levels, and reorder alerts in real time.' },
  { icon: <FaChartLine />, title: 'Sales Management', desc: 'Monitor enquiries, quotations, orders, invoicing, and sales performance through a single dashboard.' },
  { icon: <FaWallet />, title: 'Finance & Expense Tracking', desc: 'Keep track of expenses, approvals, budgets, and financial reporting.' },
  { icon: <FaChartPie />, title: 'Business Dashboards', desc: 'View important business numbers without opening multiple reports or spreadsheets.' },
];

const PROBLEMS = [
  { icon: <FaFileExcel />, title: 'Too Much Work Happens in Excel', desc: "Teams spend more time updating data than using it. As businesses grow, spreadsheets lead to mistakes, duplicate work, and reporting issues." },
  { icon: <FaProjectDiagram />, title: 'Teams Are Using Different Software', desc: "When sales, inventory, finance, and operations work on separate systems, data doesn't match, reports take longer, and decision-making slows down." },
  { icon: <FaClock />, title: 'Approvals Take Too Long', desc: "Purchase requests and vendor approvals get stuck in emails and WhatsApp groups, creating delays and making it hard to track who approved what." },
  { icon: <FaEye />, title: 'No Clear View of Business Performance', desc: "Business owners spend hours collecting information before understanding what's happening. A good ERP gives you real-time visibility without waiting for manual reports." },
];

const STEPS = [
  { num: '01', title: 'Understand Your Business', desc: 'We spend time understanding how your operations work today and where the bottlenecks are.' },
  { num: '02', title: 'Design the Solution', desc: 'We create a plan for the ERP system based on your workflow and business goals.' },
  { num: '03', title: 'Build & Test', desc: 'Our team develops the platform and thoroughly tests it before launch.' },
  { num: '04', title: 'Go Live', desc: 'We deploy the system, train your team, and make sure everything runs smoothly.' },
  { num: '05', title: 'Ongoing Support', desc: 'As your business grows, we continue supporting and improving the platform.' },
];

const INDUSTRIES = [
  {
    icon: <FaIndustry />,
    name: 'Manufacturing Companies',
    items: [
      'Track raw material receipts against production orders',
      'Compare supplier lead times for critical components',
    ],
    outcome: 'More predictable production planning and fewer line stoppages.',
  },
  {
    icon: <FaUtensils />,
    name: 'Hospitality Businesses',
    items: [
      'Match supplier deliveries to event and banquet schedules',
      'Track linen, food, and beverage usage across outlets',
      
    ],
    outcome: 'Less waste and fewer supply gaps during peak service.',
  },
  {
    icon: <FaStore />,
    name: 'Retail Businesses',
    items: [
      'Compare purchase orders for promotions and seasonal assortments',
      'Track stock transfers between stores and warehouses',
    ],
    outcome: 'Better in-stock availability during high-demand windows.',
  },
  {
    icon: <FaTruck />,
    name: 'Distributors & Wholesalers',
    items: [
      'Match customer orders to available stock across warehouses',
      'Track pallet receipts, allocations, and dispatch priorities',
     
    ],
    outcome: 'Stronger order reliability and clearer margin control.',
  },
  {
    icon: <FaBriefcase />,
    name: 'Service-Based Companies',
    items: [
      'Manage purchase requests for field equipment and services',
      'Track vendor contracts, renewals, and support commitments',
      
    ],
    outcome: 'Faster approvals and clearer cost visibility for services.',
  },
];

const WHY = [
  'Workflows designed around your process',
  'Better user adoption',
  'Easier reporting',
  'Improved efficiency',
  'Less manual work',
  'More visibility',
  'Flexibility to grow as your business grows',
];

export default function ERPPage() {
  return (
    <main className="sp-page">
      <section className="sp-hero">
        <div className="sp-hero__inner">
          {/* <div className="sp-hero__label"><span className="sp-hero__dot" />ERP Development Company in India</div> */}
          <h1>ERP Software Built Around <span className="sp-hero__accent">Your Business</span>,<br />Not the Other Way Around.</h1>
          <p>Many growing businesses start with Excel sheets, WhatsApp messages, emails, and multiple tools. As operations grow, information scatters, approvals get delayed, and decisions are made without visibility.</p>
          <div className="sp-hero__actions">
            <a href="/contact" className="sp-btn sp-btn--primary">Talk to an ERP Expert</a>
            <a href="#erp-modules" className="sp-btn sp-btn--ghost">See What We Build →</a>
          </div>
          <div className="sp-hero__stats">
            {[['500+','Users on ERP systems'],['68%','Avg. process time saved'],['120+','Vendors onboarded'],['99.9%','Uptime delivered']].map(([n,l])=>(
              <div className="sp-hero__stat" key={n}><span className="sp-hero__stat-num">{n}</span><span className="sp-hero__stat-label">{l}</span></div>
            ))}
          </div>
        </div>
        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="sp-hero__dash-header">
              <span className="sp-hero__dash-title">ERP Overview</span>
              <span className="sp-hero__dash-live">● Live</span>
            </div>
            <div className="sp-hero__dash-metrics">
              {[['Purchase Orders','142','+12%'],['Active Vendors','58','+4 this week'],['Stock Alerts','3','Requires action']].map(([l,v,c])=>(
                <div className="sp-hero__dash-metric" key={l}>
                  <span className="sp-hero__dash-label">{l}</span>
                  <span className="sp-hero__dash-val">{v}</span>
                  <span className="sp-hero__dash-change">{c}</span>
                </div>
              ))}
            </div>
            <div className="sp-hero__dash-mods">
              {['Procurement','Inventory','Finance','Sales','Reports'].map(m=>(
                <span key={m} className="sp-hero__dash-mod">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--white" id="erp-problems">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Common Challenges</span></div>
          <div className="sp-section-header"><h2>Is Your Business Facing These Challenges?</h2><p>Growing businesses hit these walls. A custom ERP removes them.</p></div>
          <div className="sp-grid sp-grid--2">
            {PROBLEMS.map(p=>(
              <div className="sp-problem-card" key={p.title}>
                <div className="sp-problem-icon">{p.icon}</div>
                <div><h3>{p.title}</h3><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--tint" id="erp-modules">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">What We Build</span></div>
          <div className="sp-section-header"><h2>One Platform. Every Department.</h2><p>We study how your business works and build software that supports your operations.</p></div>
          <div className="sp-grid sp-grid--3">
            {MODULES.map(m=>(
              <div className="sp-module-card" key={m.title}>
                <div className="sp-module-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <div className="sp-module-line"/>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--white" id="erp-why">
        <div className="sp-inner">
          <div className="sp-split">
            <div className="sp-split__left">
              <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Why Custom ERP</span></div>
              <h2>Why Businesses Choose Custom ERP</h2>
              <p className="sp-split__desc">Off-the-shelf software often comes with features you don't need and limitations you can't control. A custom ERP is built specifically for your business.</p>
            </div>
            <div className="sp-split__right">
              <ul className="sp-checklist">
                {WHY.map(item=>(
                  <li key={item} className="sp-checklist__item"><span className="sp-checklist__check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--tint" id="erp-process">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Our Approach</span></div>
          <div className="sp-section-header"><h2>We Keep Things Simple.</h2><p>A clear five-step process that keeps you informed and in control throughout.</p></div>
          <div className="sp-steps">
            {STEPS.map((s,i)=>(
              <div className="sp-step" key={s.num}>
                <div className="sp-step__top">
                  <span className="sp-step__num">STEP {s.num}</span>
                  {i < STEPS.length-1 && <span className="sp-step__connector"/>}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--white" id="erp-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Who We Work With</span></div>
          <div className="sp-section-header"><h2>Industries We Serve</h2><p>Our ERP solutions are designed for businesses across a range of sectors.</p></div>
          <div className="sp-industry-grid">
            {INDUSTRIES.map(ind => (
              <div className="sp-industry-card" key={ind.name}>
                <div className="sp-industry-card__header">
                  <div className="sp-industry-card__icon">{ind.icon}</div>
                  <h3>{ind.name}</h3>
                </div>
                <ul>{ind.items.map(item => <li key={item}><span className="sp-industry-dot" />{item}</li>)}</ul>
                {ind.outcome && <p className="sp-industry-card__outcome">{ind.outcome}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta__inner">
          <h2>Ready to Simplify Your Operations?</h2>
          <p>If your team is spending too much time on manual processes, disconnected software, or spreadsheet management, it may be time to move to a system built for growth.</p>
          <div className="sp-cta__actions">
            <a href="mailto:Info@grassfront.com" className="sp-btn sp-btn--white">Book a Free Consultation</a>
            <a href="tel:+917014626389" className="sp-btn sp-btn--outline-white">Talk to an Expert →</a>
          </div>
        </div>
      </section>
    </main>
  );
}