import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Zap,
  BarChart3,
  MessageSquare,
  Headphones,
  CheckCircle,
  Building2,
  Factory,
  ShoppingBag,
  Truck,
  Briefcase,
} from 'lucide-react';
import './WhyGrassfrontPage.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const DIFFERENCES = [
  {
    icon: Rocket,
    title: "We Start With Your Business, Not Technology",
    desc: "Before recommending any solution, we understand your goals, challenges, and workflows."
  },
  {
    icon: Zap,
    title: "Practical Solutions, Not Unnecessary Complexity",
    desc: "We focus on building systems that teams can actually adopt and use effectively."
  },
  {
    icon: BarChart3,
    title: "Long-Term Thinking",
    desc: "Technology evolves as businesses grow. We build solutions that scale."
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "Transparent updates and visibility throughout the project lifecycle."
  },
  {
    icon: Headphones,
    title: "Support Beyond Launch",
    desc: "Maintenance, optimization and continuous improvement after delivery."
  }
];

const INDUSTRIES = [
  {
    icon: Building2,
    title: "Hospitality & Restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    path: "/industries/hospitality"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
    path: "/industries/manufacturing"
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    path: "/industries/retail"
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    path: "/industries/logistics"
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    path: "/industries/professional-services"
  }
];

const CLIENT_VALUES = [
  "Business-first approach",
  "Reliable project delivery",
  "Practical problem solving",
  "Transparent communication",
  "Long-term support",
  "Scalable technology solutions",
];

export default function WhyGrassfrontPage() {
  return (
    <main className="wg-page">
      {/* ── Dark Hero ── */}
      <section className="wg-hero">
        {/* Gradient backdrop */}
        <div className="wg-hero__bg-gradient" />

        <div className="wg-hero__inner">
          <motion.div className="wg-hero__left" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <span className="wg-hero__badge">Why GrassFront</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="wg-hero__title">
              Technology Built Around<br />
              <span className="wg-hero__accent">Business Outcomes</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="wg-hero__sub">
              Choosing a technology partner is about more than software.
              You need a team that understands your business and delivers
              measurable impact.
            </motion.p>
            <motion.div variants={fadeInUp} className="wg-hero__actions">
              <a href="#contact" className="wg-btn wg-btn--primary">
                Schedule Consultation
              </a>
              <Link to="/our-process" className="wg-btn wg-btn--ghost">
                Our Process
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="wg-hero__right"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/assets/why-grassfront-hero.png" alt="Technology Built for Outcomes" className="wg-hero__img" />
          </motion.div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="wg-diff-section">
        <div className="wg-diff-section__inner">
          <div className="wg-section-header wg-section-header--split">
            <div>
              <span className="wg-section-badge">Our Difference</span>
              <h2 className="wg-section-title">What Makes Us Different?</h2>
            </div>
            <p className="wg-section-desc">
              At GrassFRONT, we focus on solving operational challenges
              through practical technology solutions.
            </p>
          </div>

          <div className="wg-diff-grid">
            {DIFFERENCES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="wg-diff-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Icon className="wg-diff-card__icon" />
                  <h3 className="wg-diff-card__title">{item.title}</h3>
                  <p className="wg-diff-card__desc">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Client Experience ── */}
      <section className="wg-client-section">
        <div className="wg-client-section__inner">
          <motion.div
            className="wg-client-left"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <span className="wg-section-badge">Client Experience</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="wg-section-title">
              What Clients Value Most
            </motion.h2>
            <motion.p variants={fadeInUp} className="wg-client-desc">
              Here's what our clients consistently highlight about
              working with us.
            </motion.p>
          </motion.div>

          <motion.div
            className="wg-client-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="wg-client-box">
              {CLIENT_VALUES.map((val, i) => (
                <div key={i} className="wg-client-item">
                  <CheckCircle className="wg-client-item__icon" />
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="wg-industry-section">
        <div className="wg-industry-section__inner">
          <div className="wg-section-header">
            <span className="wg-section-badge">Industries We Serve</span>
            <h2 className="wg-section-title">Industries We Serve</h2>
          </div>

          <div className="wg-industry-grid">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  className="wg-industry-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img src={ind.image} className="wg-industry-card__bg" alt={ind.title} />
                  <div className="wg-industry-card__overlay" />
                  <div className="wg-industry-card__content">
                    <Icon className="wg-industry-card__icon" />
                    <h3 className="wg-industry-card__title">{ind.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dark CTA Banner ── */}
      <section className="wg-cta">
        <motion.div
          className="wg-cta__inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="wg-cta__title">Let's Build Something Valuable</h2>
          <p className="wg-cta__desc">
            Whether you're looking to automate processes, improve
            reporting, streamline operations, or build custom software.
          </p>
          <div className="wg-cta__actions">
            <a href="#contact" className="wg-btn wg-btn--white">
              Book Discovery Call
            </a>
            <Link to="/our-process" className="wg-btn wg-btn--outline">
              See Our Process
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
