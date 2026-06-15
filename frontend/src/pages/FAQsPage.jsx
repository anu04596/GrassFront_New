import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FAQsPage.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const FAQS = [
  {
    q: 'What services does GrassFRONT provide?',
    a: 'We specialize in ERP Development, Custom Software Development, AI Automation, Procurement Solutions, Business Intelligence, and System Integration.'
  },
  {
    q: 'Which industries do you work with?',
    a: 'We primarily work with Hospitality & Restaurants, Manufacturing, Retail, Distribution & Logistics, and Professional Services.'
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. We work with startups, growing businesses, and established organizations. Our solutions scale to fit any stage of business.'
  },
  {
    q: 'Do you provide custom software development?',
    a: 'Yes. Every solution can be customized based on your operational requirements. We don\'t use one-size-fits-all approaches.'
  },
  {
    q: 'Can you improve our existing software?',
    a: 'Absolutely. We can enhance, modernize, automate, or integrate existing systems — you don\'t always need to start from scratch.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects range between 4 and 16 weeks depending on complexity and scope. We\'ll provide a detailed timeline during the planning phase.'
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We provide ongoing support, maintenance, and future enhancements. Launching software is just the beginning of our relationship.'
  },
  {
    q: 'Can you integrate our existing software?',
    a: 'Yes. We can connect ERP systems, CRMs, accounting software, inventory systems, payment gateways, and third-party applications.'
  },
  {
    q: 'How do I get started?',
    a: 'Simply contact our team and schedule a consultation. We\'ll understand your requirements and recommend the most suitable approach for your business.'
  }
];

const ThemeChevron = ({ open }) => (
  <svg
    width="18" height="18" viewBox="0 0 16 16" fill="none"
    style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <polyline points="3,6 8,11 13,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <main className="faq-page">

      {/* ── Dark Hero ── */}
      <section className="faq-hero">
        {/* Background glow orbs */}
        <div className="faq-hero__orb faq-hero__orb--1" />
        <div className="faq-hero__orb faq-hero__orb--2" />

        <div className="faq-hero__inner">
          {/* Left: text */}
          <motion.div
            className="faq-hero__left"
            initial="hidden" animate="visible" variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <span className="faq-hero__badge">FAQs</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="faq-hero__title">
              Everything You<br />
              Might <span className="faq-hero__accent">Want to Know</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="faq-hero__sub">
              Answers to the most common questions about GrassFRONT's
              services, process, timelines, and how we work.
            </motion.p>
          </motion.div>

          {/* Right: glowing image */}
          <motion.div
            className="faq-hero__right"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/assets/faq-hero.png" alt="FAQ" className="faq-hero__img" />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="faq-section">
        <div className="faq-section__inner">

          {/* Section header */}
          <motion.div
            className="faq-section__header"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <span className="faq-section__tag">Frequently Asked Questions</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="faq-section__title-row">
              <h2 className="faq-section__title">Common Questions</h2>
              <a href="#contact" className="faq-contact-link">
                Can't find your answer?&nbsp;&nbsp;<strong>Contact us directly →</strong>
              </a>
            </motion.div>
          </motion.div>

          {/* Two-column: accordion + sidebar */}
          <div className="faq-columns">

            {/* Accordion */}
            <motion.div
              className="faq-accordion"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
            >
              {FAQS.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    <div className="faq-item__header">
                      <span className="faq-item__num">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="faq-item__q">{faq.q}</h3>
                      <span className="faq-item__chevron"><ThemeChevron open={isOpen} /></span>
                    </div>
                    <div className={`faq-item__body ${isOpen ? 'faq-item__body--open' : ''}`}>
                      <div className="faq-item__body-inner">{faq.a}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="faq-sidebar"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="faq-sidebar__card">
                <div className="faq-sidebar__icon-wrap">
                  <span className="faq-sidebar__icon">🎧</span>
                </div>
                <h3 className="faq-sidebar__card-title">Still have questions?</h3>
                <p className="faq-sidebar__card-desc">
                  We're here to help. Reach out to our team and we'll get back to you shortly.
                </p>
                <a href="#contact" className="faq-sidebar__cta">Contact Us →</a>
              </div>

              <div className="faq-sidebar__features">
                <div className="faq-sidebar__feature">
                  <span className="faq-sidebar__feature-icon">⚡</span>
                  <div>
                    <div className="faq-sidebar__feature-title">Quick Response</div>
                    <div className="faq-sidebar__feature-sub">We reply within 24 hours</div>
                  </div>
                </div>
                <div className="faq-sidebar__feature">
                  <span className="faq-sidebar__feature-icon">🛡️</span>
                  <div>
                    <div className="faq-sidebar__feature-title">Expert Support</div>
                    <div className="faq-sidebar__feature-sub">Speak with our specialists</div>
                  </div>
                </div>
                <div className="faq-sidebar__feature">
                  <span className="faq-sidebar__feature-icon">✅</span>
                  <div>
                    <div className="faq-sidebar__feature-title">No Obligation</div>
                    <div className="faq-sidebar__feature-sub">100% free consultation</div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

    </main>
  );
}
