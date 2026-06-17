import { useState } from 'react';
import './FAQ.css';

const QAS = [
  {
    q: 'How much does custom software development cost?',
    a: 'Pricing depends on project complexity, integrations, and business requirements. We offer a free consultation to scope your project and provide a transparent estimate before any commitment.',
  },
  {
    q: 'How long does ERP implementation take?',
    a: 'Most ERP projects take between 8–24 weeks depending on the size of your business, the number of modules required, and data migration complexity.',
  },
  {
    q: 'Can you integrate our existing software?',
    a: 'Yes. We integrate ERP, CRM, accounting systems, and third-party applications into a unified workflow.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We provide ongoing maintenance, monitoring, and technical support post-launch. All projects include a structured handover and support SLA.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both. We work with growing startups that need their first operational system and established businesses looking to replace or scale existing infrastructure.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We have delivered systems across hospitality, retail, logistics, professional services, real estate, and creative agencies — among others.',
  },
];

const ChevronIcon = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 18 18" fill="none"
    style={{
      transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      flexShrink: 0,
    }}
  >
    <polyline
      points="4.5,7 9,12 13.5,7"
      stroke="#1F00FF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
    >
      <div className="faq-item-header">
        <h3>{item.q}</h3>
        <span className="faq-item-icon">
          <ChevronIcon open={isOpen} />
        </span>
      </div>
      <div className={`faq-expand${isOpen ? ' faq-expand--visible' : ''}`}>
        <div className="faq-expand-inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section className="faq" id="faq">
      <div className="section-inner">
        <div className="faq-frame">

          <div className="section-tag">
            <span className="section-tag-line" />
            <span className="section-tag-label">Frequently Asked Questions</span>
          </div>

          <div className="faq-header">
            <h2>Common Questions, Straight Answers</h2>
            <p className="faq-intro">
              Everything you need to know before starting a project with us.
            </p>
          </div>

          <div className="faq-grid">
            {QAS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}