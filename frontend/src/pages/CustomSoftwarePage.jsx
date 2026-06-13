import './ServicePage.css';
import {
  FaCogs,
  FaUserShield,
  FaShoppingCart,
  FaBoxes,
  FaRobot,
  FaCloud,
  FaChartBar,

  FaPuzzlePiece,
  FaTasks,
  FaEye,
  FaLink,

  FaBullseye,
  FaBolt,
  FaSmile,
  FaChartLine,
  FaExpandArrowsAlt,
  FaMoneyBillWave,
  FaUtensils,
  FaIndustry,
  FaStore,
  FaTruck,
  FaBriefcase
} from 'react-icons/fa';

const BUILDS = [
  { icon: <FaCogs />, title: 'Business Management Systems', desc: 'Manage operations, approvals, workflows, reporting, and day-to-day business activities through a centralized platform.' },
  { icon: <FaUserShield />, title: 'Customer Portals', desc: 'Provide customers with secure access to orders, invoices, documents, service requests, and account information.' },
  // { icon: <FaShoppingCart />, title: 'Procurement Platforms', desc: 'Streamline purchasing, vendor management, approvals, quotations, and procurement workflows.' },
  { icon: <FaBoxes />, title: 'Inventory Management Systems', desc: 'Track inventory levels, stock movement, warehouse operations, and purchasing requirements.' },
  { icon: <FaRobot />, title: 'Workflow Automation Platforms', desc: 'Automate repetitive business tasks and approval processes to improve efficiency.' },
  { icon: <FaCloud />, title: 'SaaS Applications', desc: 'Build scalable cloud-based software products designed for customers, teams, or business operations.' },
  { icon: <FaChartBar />, title: 'Reporting & Analytics Platforms', desc: 'Access business insights through dashboards, reports, and real-time performance tracking.' },
];

const PROBLEMS = [
  { icon: <FaPuzzlePiece />, title: 'Your Process Doesn\'t Fit Existing Software', desc: 'Many software products are designed for a broad audience. Custom software eliminates limitations by supporting your exact business process.' },
  { icon: <FaTasks />, title: 'Too Much Manual Work', desc: 'Businesses still rely on spreadsheets and manual updates, leading to human errors, delayed approvals, duplicate work, and productivity loss.' },
  { icon: <FaEye />, title: 'Lack of Visibility', desc: 'Without a centralized system, reporting becomes time-consuming and often inaccurate. Custom software provides real-time dashboards and complete visibility.' },
  { icon: <FaLink />, title: 'Systems Don\'t Talk to Each Other', desc: 'When different departments use different tools, information becomes fragmented. We create unified systems where data flows seamlessly between teams.' },
];

const STEPS = [
  { num: '01', title: 'Discovery & Requirement Gathering', desc: 'We start by understanding your business, current processes, challenges, and objectives to identify where technology creates the biggest impact.' },
  { num: '02', title: 'Solution Planning', desc: 'A clear roadmap covering features, user roles, workflows, integrations, and timeline — so everyone is aligned before development begins.' },
  { num: '03', title: 'UI/UX Design', desc: 'We design simple, user-friendly interfaces that encourage adoption. The focus is always on usability, speed, and clarity.' },
  { num: '04', title: 'Development', desc: 'Our team develops the software using modern technologies and agile delivery practices with regular updates throughout.' },
  { num: '05', title: 'Testing', desc: 'Every feature is tested to ensure reliability, security, and performance before launch.' },
  { num: '06', title: 'Deployment & Support', desc: 'Once approved, the software is deployed. We continue supporting, maintaining, and improving the system after launch.' },
];

const BENEFITS = [
  { icon: <FaBullseye />, title: 'Designed Around Your Business', desc: 'Your software should support your workflow, not force your team to adapt to unnecessary processes.' },
  { icon: <FaBolt />, title: 'Improved Efficiency', desc: 'Automating repetitive tasks helps teams complete work faster and with fewer errors.' },
  { icon: <FaSmile />, title: 'Better User Experience', desc: 'Employees are more likely to use software that feels simple, intuitive, and relevant to their work.' },
  { icon: <FaChartLine />, title: 'Easier Reporting', desc: 'Get accurate information when you need it through centralized dashboards and automated reports.' },
  { icon: <FaExpandArrowsAlt />, title: 'Scalability', desc: 'As your business grows, your software can grow with it. New modules and workflows can be added as requirements evolve.' },
  { icon: <FaMoneyBillWave />, title: 'Reduced Long-Term Costs', desc: 'Custom software often reduces operational inefficiencies and eliminates the need for multiple software subscriptions.' },
];

const INDUSTRIES = [
  {
    icon: <img src="/assets/ind-coffee.png" alt="Hospitality" />,
    name: 'Hospitality & Restaurants',
    items: [
      'Sync POS order data with inventory and purchasing',
      'Manage staff task lists for front- and back-of-house',
    ],
    outcome: 'Reduce manual handoffs between service, kitchen, and purchasing teams.',
  },
  {
    icon: <img src="/assets/ind-factory.png" alt="Manufacturing" />,
    name: 'Manufacturing',
    items: [
      
      'Trigger supplier orders when production batches reach reorder points',
      'Log maintenance and calibration activity against machines',
    ],
    outcome: 'Keep production tasks aligned and reduce costly line delays.',
  },
  {
    icon: <img src="/assets/ind-cart.png" alt="Retail" />,

    name: 'Retail',
    items: [
      'Drive replenishment workflows for inventory transfers and store restock',
      'Automate return authorizations and reverse logistics',
      
    ],
    outcome: 'Keep stores, warehouses, and service teams working from the same plan.',
  },
  {
    icon: <img src="/assets/ind-truck.png" alt="Distribution & Logistics" />,
    name: 'Distribution & Logistics',
    items: [
      'Book shipments, allocation, and dispatch in one workflow',
      'Track order handoffs between warehouse, carrier, and customer service',
      
    ],
    outcome: 'Reduce shipping errors and make order handoffs easier to manage.',
  },
  {
    icon:  <img src="/assets/ind-services.jpg" alt="Professional Services" />,
    name: 'Professional Services',
    items: [
     
      'Capture time, expenses, and approvals against client engagements',
      'Share documents and project updates through secure client portals',
      
    ],
    outcome: 'Simplify project delivery so teams can focus on billable work.',
  },
];

const FAQS = [
  { q: 'How much does custom software development cost?', a: 'Project costs depend on functionality, integrations, complexity, and scope. After understanding your requirements, we provide a detailed estimate.' },
  { q: 'How long does a custom software project take?', a: 'Most projects take between 6 and 20 weeks, depending on complexity and requirements.' },
  { q: 'Can you integrate existing software?', a: 'Yes. We can integrate CRMs, ERPs, accounting software, payment gateways, inventory systems, and third-party applications.' },
  { q: 'Will the software be scalable?', a: 'Yes. Every solution is designed with future growth in mind.' },
  { q: 'Do you provide support after launch?', a: 'Absolutely. We offer maintenance, upgrades, performance optimization, and ongoing support.' },
  { q: 'Can you modernize existing software?', a: 'Yes. We help businesses upgrade outdated applications and improve performance, usability, and security.' },
];

import { useState } from 'react';

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none"
    style={{ transition:'transform 0.35s cubic-bezier(0.22,1,0.36,1)', transform: open?'rotate(180deg)':'rotate(0deg)', flexShrink:0 }}>
    <polyline points="4.5,7 9,12 13.5,7" stroke="#1F00FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CustomSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const col1 = FAQS.filter((_,i)=>i%2===0);
  const col2 = FAQS.filter((_,i)=>i%2!==0);

  const FaqItem = ({ item, idx }) => {
    const isOpen = openFaq === idx;
    return (
      <div className={`sp-faq-item${isOpen?' sp-faq-item--open':''}`}
        onClick={()=>setOpenFaq(prev=>prev===idx?null:idx)}
        role="button" tabIndex={0}
        onKeyDown={e=>(e.key==='Enter'||e.key===' ')&&setOpenFaq(prev=>prev===idx?null:idx)}>
        <div className="sp-faq-header">
          <h3>{item.q}</h3>
          <span className="sp-faq-icon"><ChevronIcon open={isOpen}/></span>
        </div>
        <div className={`sp-faq-expand${isOpen?' sp-faq-expand--open':''}`}>
          <div className="sp-faq-expand-inner"><p>{item.a}</p></div>
        </div>
      </div>
    );
  };

  return (
    <main className="sp-page">
      <section className="sp-hero">
        <div className="sp-hero__inner">
          {/* <div className="sp-hero__label"><span className="sp-hero__dot"/>Custom Software Development Company</div> */}
          <h1>Software That Fits <span className="sp-hero__accent">Your Business</span><br/>Not the Other Way Around.</h1>
          <p>Most businesses use multiple tools — one for sales, another for inventory, spreadsheets for reporting. Over time, this creates confusion, duplicate work, and inefficiencies that slow growth. We fix that.</p>
          <div className="sp-hero__actions">
            <a href="#contact" className="sp-btn sp-btn--primary">Schedule a Free Consultation</a>
            <a href="#cs-builds" className="sp-btn sp-btn--ghost">See What We Build →</a>
          </div>
          <div className="sp-hero__stats">
            {[['100+','Projects delivered'],['6-20','Weeks avg. delivery'],['100%','On-time delivery'],['4.9','Client rating']].map(([n,l])=>(
              <div className="sp-hero__stat" key={n}><span className="sp-hero__stat-num">{n}</span><span className="sp-hero__stat-label">{l}</span></div>
            ))}
          </div>
        </div>
        <div className="sp-hero__visual">
          <div className="sp-hero__dash">
            <div className="sp-hero__dash-header">
              <span className="sp-hero__dash-title">Project Dashboard</span>
              <span className="sp-hero__dash-live">● Active</span>
            </div>
            <div className="sp-hero__dash-metrics">
              {[['Modules Built','12','Sprint 4'],['Test Coverage','94%','Passing'],['Launch','Week 14','On track']].map(([l,v,c])=>(
                <div className="sp-hero__dash-metric" key={l}>
                  <span className="sp-hero__dash-label">{l}</span>
                  <span className="sp-hero__dash-val">{v}</span>
                  <span className="sp-hero__dash-change">{c}</span>
                </div>
              ))}
            </div>
            <div className="sp-hero__dash-mods">
              {['Discovery','Design','Development','QA','Launch'].map(m=>(
                <span key={m} className="sp-hero__dash-mod">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--white" id="cs-problems">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Common Problems</span></div>
          <div className="sp-section-header"><h2>Why Businesses Outgrow Off-the-Shelf Software</h2><p>When software can't keep up with your business, your team works around it — not with it.</p></div>
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

      <section className="sp-section sp-section--tint" id="cs-builds">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">What We Build</span></div>
          <div className="sp-section-header"><h2>Every Business Has Unique Requirements.</h2><p>We don't sell fixed packages. We build solutions based on your goals, workflows, and operational challenges.</p></div>
          <div className="sp-grid sp-grid--3">
            {BUILDS.map(m=>(
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

      <section className="sp-section sp-section--white" id="cs-benefits">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Benefits</span></div>
          <div className="sp-section-header"><h2>What Custom Software Does for Your Business</h2><p>Beyond features — measurable impact on how your team works every day.</p></div>
          <div className="sp-grid sp-grid--3">
            {BENEFITS.map(b=>(
              <div className="sp-benefit-card" key={b.title}>
                <div className="sp-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--tint" id="cs-process">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Development Process</span></div>
          <div className="sp-section-header"><h2>How We Build Your Software.</h2><p>A structured process from discovery to deployment — and beyond.</p></div>
          <div className="sp-steps sp-steps--6">
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

      <section className="sp-section sp-section--white" id="cs-industries">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Industries We Serve</span></div>
          <div className="sp-section-header"><h2>Solutions Across Sectors</h2><p>We've delivered systems across a wide range of industries and operational environments.</p></div>
          <div className="sp-industry-grid">
            {INDUSTRIES.map(ind=>(
              <div className="sp-industry-card" key={ind.name}>
                <div className="sp-industry-card__header">
                  <div className="sp-industry-card__icon">{ind.icon}</div>
                  <h3>{ind.name}</h3>
                </div>
                <ul>{ind.items.map(it=><li key={it}><span className="sp-industry-dot"/>  {it}</li>)}</ul>
                {ind.outcome && <p className="sp-industry-card__outcome">{ind.outcome}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section sp-section--tint" id="cs-faq">
        <div className="sp-inner">
          <div className="section-tag"><span className="section-tag-line"/><span className="section-tag-label">Frequently Asked Questions</span></div>
          <div className="sp-section-header"><h2>Common Questions, Straight Answers.</h2><p>Everything you need to know before starting a project with us.</p></div>
          <div className="sp-faq-columns">
            <div className="sp-faq-col">{col1.map((item,i)=><FaqItem key={item.q} item={item} idx={i*2}/>)}</div>
            <div className="sp-faq-col">{col2.map((item,i)=><FaqItem key={item.q} item={item} idx={i*2+1}/>)}</div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta__inner">
          <h2>Let's Build Software That Works for Your Business.</h2>
          <p>If your team is struggling with spreadsheets, disconnected systems, or manual processes, custom software can create a more efficient and scalable way of working.</p>
          <div className="sp-cta__actions">
            <a href="tel:+917014626389" className="sp-btn sp-btn--white">Book a Discovery Call</a>
            <a href="mailto:Info@grassfront.com" className="sp-btn sp-btn--outline-white">Contact Our Team →</a>
          </div>
        </div>
      </section>
    </main>
  );
}