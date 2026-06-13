import { useState } from 'react';
import './ServicePage.css';
import './AIAutomationPage.css';
import {
  FaCogs,
  FaRobot,
  FaChartLine,
  FaFileInvoice,
  FaExchangeAlt,
  FaProjectDiagram,

  FaTasks,
  FaHourglassHalf,
  FaClipboardList,
  FaHeadset,
  FaLink,

  FaClock,
  FaCheckCircle,
  FaRocket,
  FaHandshake,
  FaDollarSign,
  FaEye,

  FaBullseye,
  FaTools,
  FaChartBar,
  FaShieldAlt,
  FaUtensils,
  FaIndustry,
  FaStore,
  FaTruck,
  FaBriefcase
} from "react-icons/fa";


const SOLUTIONS = [
  {
    icon: <FaCogs />,
    title: 'Workflow Automation',
    desc: 'Automate purchase approvals, vendor onboarding, employee requests, document reviews, and internal workflows to reduce delays and improve accountability.',
    tags: ['APPROVALS', 'ONBOARDING', 'WORKFLOWS'],
  },
  {
    icon: <FaRobot />,
    title: 'AI Chatbots',
    desc: 'Provide instant 24/7 responses to customer inquiries. AI chatbots answer common questions, capture leads, schedule appointments, and reduce support workload.',
    tags: ['CHATBOT', 'LEAD CAPTURE', '24/7 SUPPORT'],
  },
  {
    icon: <FaChartLine />,
    title: 'Automated Reporting',
    desc: 'Stop building reports manually. We create systems that automatically collect data and generate real-time dashboards — sales, procurement, inventory, and KPI tracking.',
    tags: ['DASHBOARDS', 'KPI', 'REAL-TIME'],
  },
  {
    icon: <FaFileInvoice />,
    title: 'Document Processing',
    desc: 'AI processes invoices, purchase orders, vendor documents, contracts, and forms — reducing manual data entry and improving accuracy across high-volume operations.',
    tags: ['INVOICES', 'CONTRACTS', 'OCR'],
  },
  {
    icon: <FaExchangeAlt />,
    title: 'Data Synchronization',
    desc: 'Automatically transfer information between systems without manual intervention — ERP to CRM, CRM to accounting, inventory to e-commerce, procurement to finance.',
    tags: ['ERP', 'CRM', 'INTEGRATIONS'],
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Business Process Automation',
    desc: 'Automate entire workflows from start to finish. Reduce manual effort, improve consistency, eliminate bottlenecks, and increase productivity across departments.',
    tags: ['END-TO-END', 'PRODUCTIVITY', 'BPA'],
  },
];

const SIGNS = [
  { icon: <FaTasks />, title: 'Your Team Repeats the Same Tasks Every Day', desc: 'Employees spend hours updating spreadsheets, sending reminders, or moving information between systems.' },
  { icon: <FaHourglassHalf />, title: 'Approvals Take Too Long', desc: 'Businesses still rely on emails and manual follow-ups for approvals — creating delays, confusion, and lost accountability.' },
  { icon: <FaClipboardList />, title: 'Reporting Requires Too Much Effort', desc: 'Someone spends hours every week creating reports that could be generated automatically with real-time data.' },
  { icon: <FaHeadset />, title: 'Customer Queries Overwhelm Your Team', desc: 'Customers ask similar questions repeatedly. AI chatbots can handle routine inquiries while your team focuses on complex issues.' },
  { icon: <FaLink />, title: 'Multiple Systems Don\'t Work Together', desc: 'Data gets stuck between software platforms. Automation connects systems and eliminates repetitive data entry.' },
];

const BENEFITS = [
  { icon: <FaClock />, title: 'Save Time', desc: 'Reduce hours spent on repetitive activities. Automation allows employees to focus on more meaningful, high-value work.' },
  { icon: <FaCheckCircle />, title: 'Improve Accuracy', desc: 'Manual processes often lead to mistakes. Automation ensures consistency and significantly reduces human error.' },
  { icon: <FaRocket />, title: 'Faster Operations', desc: 'Workflows move quicker when approvals, notifications, and updates happen automatically without waiting.' },
  { icon: <FaHandshake />, title: 'Better Customer Experience', desc: 'Customers receive faster responses and more consistent service across every touchpoint.' },
  { icon: <FaDollarSign />, title: 'Lower Operational Costs', desc: 'Automation helps businesses do more without continuously increasing headcount or overhead.' },
  { icon: <FaEye />, title: 'Improved Visibility', desc: 'Automated systems provide better tracking and reporting across all operations in real time.' },
];

const USE_CASES = [
  {
    label: 'Procurement',
    tag: 'WORKFLOW AUTOMATION',
    challenge: 'Purchase approvals required multiple emails and follow-ups, creating delays and lost visibility.',
    solution: 'Automated workflow routes approvals to the right stakeholders instantly with full audit trail.',
    result: 'Faster approvals and improved process visibility across all procurement operations.',
    metric: '68%', metricLabel: 'Faster approvals',
  },
  {
    label: 'Reporting',
    tag: 'AUTOMATED REPORTING',
    challenge: 'Management reports required hours of manual work every week pulling data from multiple systems.',
    solution: 'Real-time dashboards automatically pull and display business data without manual intervention.',
    result: 'Faster decision-making and significantly reduced reporting effort across the organization.',
    metric: '40h→4h', metricLabel: 'Weekly reporting time',
  },
  {
    label: 'Customer Support',
    tag: 'AI CHATBOT',
    challenge: 'Support teams were overwhelmed handling repetitive customer questions across multiple channels.',
    solution: 'AI chatbot manages common queries and routes complex requests to the appropriate team.',
    result: 'Improved response times and reduced support workload, allowing the team to focus on complex issues.',
    metric: '80%', metricLabel: 'Queries automated',
  },
];

const INDUSTRIES = [
  {
    icon: <FaUtensils />,
    name: 'Hospitality & Restaurants',
    items: [
      'Automated reservation and order confirmations',
      'Shift-based inventory alerts for high-volume service',
      'Guest feedback routing to the right manager',
    ],
    outcome: 'Free staff from routine guest follow-up so they can focus on service.',
  },
  {
    icon: <FaIndustry />,
    name: 'Manufacturing',
    items: [
      'Inspection result capture from shop floor devices',
      'Maintenance reminders when equipment thresholds are reached',
      'Production order status updates pushed to planning systems',
    ],
    outcome: 'Reduce downtime by making status and alerts automatic.',
  },
  {
    icon: <FaStore />,
    name: 'Retail',
    items: [
      'Basket abandonment follow-ups driven by online behaviour',
      'Price change alerts sent to stores and e-commerce channels',
      'Backroom replenishment requests triggered by sales velocity',
    ],
    outcome: 'Keep merchandising and store teams aligned during busy periods.',
  },
  {
    icon: <FaTruck />,
    name: 'Distribution & Logistics',
    items: [
      'Proof-of-delivery notifications pushed automatically',
      'Carrier delay alerts routed to customer service',
      'Return authorization workflows created from shipment exceptions',
    ],
    outcome: 'Reduce manual chasing across carriers, warehouses, and customer service.',
  },
  {
    icon: <FaBriefcase />,
    name: 'Professional Services',
    items: [
      'Client onboarding tasks assigned from intake forms',
      'Proposal follow-up reminders sent automatically',
      'Invoice review and delivery checks triggered by project milestones',
    ],
    outcome: 'Keep service delivery moving without extra administrative effort.',
  },
];

const FAQS = [
  { q: 'What types of processes can be automated?', a: 'Approvals, reporting, customer communication, document processing, data synchronization, onboarding, and many other business workflows.' },
  { q: 'Is AI automation only for large businesses?', a: 'No. Small and medium-sized businesses often benefit significantly from automation because it helps lean teams work more efficiently without adding headcount.' },
  { q: 'Will automation replace employees?', a: 'Automation is designed to reduce repetitive work, allowing employees to focus on more valuable tasks — not to replace roles.' },
  { q: 'How long does automation implementation take?', a: 'Most projects can be implemented within a few weeks depending on complexity and the number of systems involved.' },
  { q: 'Can automation work with existing software?', a: 'Yes. Automation can integrate with ERP systems, CRMs, accounting software, inventory platforms, and most business tools.' },
];

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none"
    style={{ transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
    <polyline points="4.5,7 9,12 13.5,7" stroke="#1F00FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AIAutomationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const col1 = FAQS.filter((_, i) => i % 2 === 0);
  const col2 = FAQS.filter((_, i) => i % 2 !== 0);

  const FaqItem = ({ item, idx }) => {
    const isOpen = openFaq === idx;
    return (
      <div className={`sp-faq-item${isOpen ? ' sp-faq-item--open' : ''}`}
        onClick={() => setOpenFaq(prev => prev === idx ? null : idx)}
        role="button" tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenFaq(prev => prev === idx ? null : idx)}>
        <div className="sp-faq-header">
          <h3>{item.q}</h3>
          <span className="sp-faq-icon"><ChevronIcon open={isOpen} /></span>
        </div>
        <div className={`sp-faq-expand${isOpen ? ' sp-faq-expand--open' : ''}`}>
          <div className="sp-faq-expand-inner"><p>{item.a}</p></div>
        </div>
      </div>
    );
  };

  return (
    <main className="sp-page">

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero__inner">
        
          <h1>Stop Repeating Work.<br /><span className="sp-hero__accent">Let Automation Handle It.</span></h1>
          <p>Every business has tasks that consume hours every week but add very little value. Approvals move through emails. Reports are prepared manually. Teams copy data between systems. We fix that.</p>
          <div className="sp-hero__actions">
            <a href="#contact" className="sp-btn sp-btn--primary">Schedule a Free Consultation</a>
            <a href="#ai-solutions" className="sp-btn sp-btn--ghost">See Solutions →</a>
          </div>
          <div className="sp-hero__stats">
            {[['2000+', 'Hours saved'], ['80%', 'Queries automated'], ['40h→4h', 'Reporting time'], ['100%', 'On-time delivery']].map(([n, l]) => (
              <div className="sp-hero__stat" key={n}>
                <span className="sp-hero__stat-num">{n}</span>
                <span className="sp-hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="sp-hero__dash-header">
              <span className="sp-hero__dash-title">Automation Flow</span>
              <span className="sp-hero__dash-live">● Running</span>
            </div>
            <div className="ai-flow">
              {[
                { icon: '📥', label: 'New Request Received', status: 'done' },
                { icon: '🔍', label: 'Validation Check', status: 'done' },
                { icon: '⚡', label: 'Auto-Route to Approver', status: 'active' },
                { icon: '✉️', label: 'Notify Stakeholders', status: 'pending' },
                { icon: '✅', label: 'Completed', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="ai-flow__row">
                  <div className={`ai-flow__step ai-flow__step--${step.status}`}>
                    <span className="ai-flow__icon">{step.icon}</span>
                    <span className="ai-flow__label">{step.label}</span>
                    <span className="ai-flow__badge">
                      {step.status === 'done' ? '✓' : step.status === 'active' ? '⟳' : '○'}
                    </span>
                  </div>
                  {i < 4 && <div className="ai-flow__connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is AI Automation ── */}
      <section className="sp-section sp-section--tint ai-explainer" id="ai-what">
        <div className="sp-inner">
          <div className="ai-explainer__grid">
            <div className="ai-explainer__left">
              <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">What Is AI Automation</span></div>
              <h2>Practical Automation for Real Business Problems.</h2>
              <p>AI automation combines artificial intelligence with business workflows to reduce manual effort and improve operational efficiency. Instead of performing the same tasks repeatedly, businesses use automation to handle routine activities automatically.</p>
              <p>The objective isn't to replace people. The objective is to help people spend less time on repetitive work and more time on activities that create value.</p>
            </div>
            <div className="ai-explainer__right">
              <h4>Common automation examples</h4>
              <div className="ai-examples">
                {['Automated approvals', 'Smart document processing', 'AI chatbots', 'Automated reporting', 'Data synchronization', 'Customer support automation', 'Workflow automation'].map(ex => (
                  <span key={ex} className="ai-example-pill">{ex}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signs You Need Automation ── */}
      <section className="sp-section sp-section--white" id="ai-signs">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Signs You Need Automation</span></div>
          <div className="sp-section-header">
            <h2>Is Your Business Ready for Automation?</h2>
            <p>Recognise any of these? Each one is an automation opportunity.</p>
          </div>
          <div className="ai-signs-list">
            {SIGNS.map((s, i) => (
              <div className="ai-sign-item" key={i}>
                <div className="ai-sign-icon">{s.icon}</div>
                <div className="ai-sign-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="ai-sign-num">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className="sp-section sp-section--tint" id="ai-solutions">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Automation Solutions</span></div>
          <div className="sp-section-header">
            <h2>AI Automation Solutions We Build.</h2>
            <p>Every solution is purpose-built around your workflow and operational requirements.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {SOLUTIONS.map(s => (
              <div className="sp-module-card" key={s.title}>
                <div className="sp-module-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <div className="sp-module-line" />
                <p>{s.desc}</p>
                <div className="cap-tags">
                  {s.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="sp-section sp-section--white" id="ai-benefits">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Benefits</span></div>
          <div className="sp-section-header">
            <h2>What Automation Does for Your Business.</h2>
            <p>Measurable improvements across time, accuracy, and operational efficiency.</p>
          </div>
          <div className="sp-grid sp-grid--3">
            {BENEFITS.map(b => (
              <div className="sp-benefit-card" key={b.title}>
                <div className="sp-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases (tabbed) ── */}
      <section className="sp-section sp-section--tint" id="ai-cases">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Real Business Use Cases</span></div>
          <div className="sp-section-header">
            <h2>Automation in Practice.</h2>
            <p>How businesses are using automation to solve real operational problems.</p>
          </div>
          <div className="ai-cases">
            <div className="ai-cases__tabs">
              {USE_CASES.map((c, i) => (
                <button
                  key={i}
                  className={`ai-cases__tab${activeCase === i ? ' ai-cases__tab--active' : ''}`}
                  onClick={() => setActiveCase(i)}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="ai-cases__panel">
              <span className="ai-cases__tag">{USE_CASES[activeCase].tag}</span>
              <div className="ai-cases__body">
                <div className="ai-case-col">
                  <div className="ai-case-block ai-case-block--challenge">
                    <span className="ai-case-block__label">Challenge</span>
                    <p>{USE_CASES[activeCase].challenge}</p>
                  </div>
                  <div className="ai-case-block ai-case-block--solution">
                    <span className="ai-case-block__label">Solution</span>
                    <p>{USE_CASES[activeCase].solution}</p>
                  </div>
                  <div className="ai-case-block ai-case-block--result">
                    <span className="ai-case-block__label">Result</span>
                    <p>{USE_CASES[activeCase].result}</p>
                  </div>
                </div>
                <div className="ai-case-metric">
                  <span className="ai-case-metric__num">{USE_CASES[activeCase].metric}</span>
                  <span className="ai-case-metric__label">{USE_CASES[activeCase].metricLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="sp-section sp-section--white" id="ai-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Industries We Support</span></div>
          <div className="sp-section-header">
            <h2>Automation Across Every Sector.</h2>
            <p>We've deployed automation solutions for businesses across a wide range of industries.</p>
          </div>
          <div className="sp-industry-grid">
            {INDUSTRIES.map(ind => (
              <div className="sp-industry-card" key={ind.name}>
                <div className="sp-industry-card__header">
                  <div className="sp-industry-card__icon">{ind.icon}</div>
                  <h3>{ind.name}</h3>
                </div>
                <ul>{ind.items.map(it => <li key={it}><span className="sp-industry-dot" />{it}</li>)}</ul>
                {ind.outcome && <p className="sp-industry-card__outcome">{ind.outcome}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why GrassFRONT ── */}
      <section className="sp-section sp-section--tint" id="ai-why">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Why GrassFRONT</span></div>
          <div className="sp-section-header">
            <h2>Practical Automation, Not Just Technology.</h2>
            <p>We focus on automation that delivers measurable results — not demos.</p>
          </div>
          <div className="sp-grid sp-grid--2">
            {[
              { icon: <FaBullseye />, title: 'Practical Automation, Not Just Technology', desc: 'Many businesses hear about AI but struggle to understand where it creates real value. We identify practical automation opportunities that deliver measurable improvements.' },
              { icon: <FaTools />, title: 'Solutions Designed Around Your Process', desc: 'Every business operates differently. We build automation solutions that fit your existing workflows rather than forcing major operational changes.' },
              { icon: <FaChartBar />, title: 'Business-First Approach', desc: 'We start by understanding your business challenge before recommending technology. No solution is proposed without a clear problem to solve.' },
              { icon: <FaShieldAlt />, title: 'Long-Term Support', desc: 'Automation requirements evolve as businesses grow. We continue supporting and improving solutions after implementation — not just deploying and leaving.' },
            ].map(w => (
              <div className="sp-problem-card" key={w.title}>
                <div className="sp-problem-icon">{w.icon}</div>
                <div><h3>{w.title}</h3><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-section sp-section--white" id="ai-faq">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line" /><span className="section-tag-label">Frequently Asked Questions</span></div>
          <div className="sp-section-header">
            <h2>Common Questions, Straight Answers.</h2>
            <p>Everything you need to know before starting an automation project.</p>
          </div>
          <div className="sp-faq-columns">
            <div className="sp-faq-col">{col1.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2} />)}</div>
            <div className="sp-faq-col">{col2.map((item, i) => <FaqItem key={item.q} item={item} idx={i * 2 + 1} />)}</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta">
        <div className="sp-cta__inner">
          <h2>Ready to Automate Your Business Processes?</h2>
          <p>If your team spends too much time on repetitive tasks, manual reporting, approvals, or customer support, automation can help create a faster and more efficient way of working.</p>
          <div className="sp-cta__actions">
            <a href="mailto:Info@grassfront.com" className="sp-btn sp-btn--white">Book a Free Automation Consultation</a>
            <a href="tel:+917014626389" className="sp-btn sp-btn--outline-white">Talk to Our Team →</a>
          </div>
        </div>
      </section>

    </main>
  );
}