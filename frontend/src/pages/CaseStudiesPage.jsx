import { useState, useEffect, useCallback } from 'react';
import './CaseStudiesPage.css';

const PROJECTS = [
  {
    id: 'horeca',
    logo: 'assets\\horeca_meet_logo.jpg',
    logoAlt: 'Horeca Mall',
    name: 'Horeca Mall',
    tagline: 'B2B Procurement & Vendor Management Platform',
    industry: 'Hospitality Procurement',
    summary:
      'Horeca Mall was managing vendor relationships and purchase orders through a mix of spreadsheets and email threads. As the business grew, approvals were getting delayed and nobody had a clear picture of what was being spent.',
    challenges: [
      'Purchase approvals stuck in email threads for days',
      'Vendor contacts and pricing stored across different files',
      'No visibility into total spending or order history',
      'Inventory shortages because procurement was reactive, not planned',
    ],
    solution:
      'We built a procurement platform that brought every purchase request, vendor record, and approval into one place. Requests now route automatically to the right approver, vendors have their own profile with pricing history, and the team can see every order at a glance.',
    outcomes: [
      { metric: '68%', label: 'Faster approval cycles' },
      { metric: '120+', label: 'Vendors onboarded in Q1' },
    ],
    services: ['Procurement Software', 'Approval Automation', 'Vendor Management', 'Reporting Dashboard'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'bizz',
    logo: 'assets\\bizzstudio.jpeg',
    logoAlt: 'Bizz Studio',
    name: 'Bizz Studio',
    tagline: 'Operations Dashboard & Business Reporting',
    industry: 'Professional Services',
    summary:
      'The team at Bizz Studio was spending hours every week pulling numbers from different tools just to understand how the business was performing. By the time reports were ready, the data was already out of date.',
    challenges: [
      'Weekly reports took 4–6 hours to compile manually',
      'Performance data scattered across six different tools',
      'Leadership had no single view of business health',
      'Decisions were being made on last week\'s numbers',
    ],
    solution:
      'We connected all their data sources into a single dashboard that updates automatically. Leadership now opens one screen and immediately sees revenue, pipeline, project status, and team performance — all in real time, without anyone having to prepare a report.',
    outcomes: [
      { metric: '6 → 1', label: 'Tools consolidated' },
      { metric: '80%', label: 'Reporting time saved' },
    ],
    services: ['Business Intelligence', 'Dashboard Development', 'Data Integration'],
    stack: ['React', 'FastAPI', 'Redis', 'PostgreSQL'],
  },
  {
    id: 'platter',
    logo: 'assets\\platter_pos.jpg',
    logoAlt: 'Platter OS',
    name: 'Platter — Restaurant Platform',
    tagline: 'Inventory, Ordering & Kitchen Operations',
    industry: 'Hospitality & Restaurants',
    summary:
      'Running multiple restaurant locations meant the team was constantly firefighting inventory issues and chasing suppliers. Stock counts were done manually, ordering was based on guesswork, and the kitchen had no visibility into what was coming.',
    challenges: [
      'Inventory counted by hand at the end of each shift',
      'Ordering done via phone calls and WhatsApp messages',
      'No consistent process across different locations',
      'Kitchen team had no advance notice of upcoming orders',
    ],
    solution:
      'We built an end-to-end system that tracks inventory in real time across all locations, triggers purchase orders automatically when stock drops below threshold, and gives the kitchen a live view of what is in the pipeline. The whole operation now runs from one screen.',
    outcomes: [
      { metric: '14', label: 'Locations on the platform' },
      { metric: '99.9%', label: 'System uptime' },
    ],
    services: ['ERP Development', 'Inventory Tracking', 'POS Integration', 'Kitchen Display'],
    stack: ['React Native', 'Firebase', 'Node.js'],
  },
];

/* ── ChevronDown ─────────────────────────────────────────────────── */
const ChevronDown = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    style={{
      transition: 'transform .38s cubic-bezier(.22,1,.36,1)',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      flexShrink: 0,
    }}
  >
    <polyline
      points="4,7 10,13 16,7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Reveal hook ─────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('cs2-in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.cs2-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Close icon ──────────────────────────────────────────────────── */
const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ── Project Modal ───────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  /* ESC to close */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="cs2-modal-overlay" onClick={onClose}>
      <div className="cs2-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Modal header */}
        <div className="cs2-modal__header">
          <div className="cs2-modal__header-left">
            <div className="cs2-modal__logo-wrap">
              {project.logo
                ? <img src={project.logo} alt={project.logoAlt} className="cs2-modal__logo-img" />
                : <div className="cs2-modal__logo-fb">{project.name[0]}</div>
              }
            </div>
            <div>
              <div className="cs2-modal__industry-pill">{project.industry}</div>
              <h2 className="cs2-modal__name">{project.name}</h2>
            </div>
          </div>
          <button className="cs2-modal__close" onClick={onClose} aria-label="Close modal">
            <IconClose />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="cs2-modal__body">

          {/* Overview */}
          <div className="cs2-modal__section">
            <div className="cs2-modal__section-label">
              <span className="cs2-modal__pip cs2-modal__pip--blue" />Overview
            </div>
            <p className="cs2-modal__tagline">{project.tagline}</p>
            <p className="cs2-modal__summary">{project.summary}</p>
          </div>

          {/* Challenges */}
          <div className="cs2-modal__section">
            <div className="cs2-modal__section-label">
              <span className="cs2-modal__pip cs2-modal__pip--grey" />What Was the Problem
            </div>
            <div className="cs2-modal__challenges-grid">
              {project.challenges.map((c, i) => (
                <div key={i} className="cs2-modal__challenge-card">
                  <span className="cs2-modal__challenge-num">0{i + 1}</span>
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="cs2-modal__section">
            <div className="cs2-modal__section-label">
              <span className="cs2-modal__pip cs2-modal__pip--blue" />What We Built
            </div>
            <div className="cs2-modal__solution-card">
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="cs2-modal__section">
            <div className="cs2-modal__section-label">
              <span className="cs2-modal__pip cs2-modal__pip--green" />The Results
            </div>
            <div className="cs2-modal__kpis">
              {project.outcomes.map((o) => (
                <div key={o.label} className="cs2-modal__kpi">
                  <span className="cs2-modal__kpi-num">{o.metric}</span>
                  <span className="cs2-modal__kpi-label">{o.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services + Stack */}
          <div className="cs2-modal__footer-row">
            <div className="cs2-modal__footer-block">
              <div className="cs2-modal__section-label" style={{ marginBottom: '10px' }}>
                <span className="cs2-modal__pip cs2-modal__pip--blue" />Services Delivered
              </div>
              <div className="cs2-modal__tags">
                {project.services.map((s) => (
                  <span key={s} className="cs2-modal__tag cs2-modal__tag--svc">{s}</span>
                ))}
              </div>
            </div>
            <div className="cs2-modal__footer-block">
              <div className="cs2-modal__section-label" style={{ marginBottom: '10px' }}>
                <span className="cs2-modal__pip cs2-modal__pip--grey" />Technology Stack
              </div>
              <div className="cs2-modal__tags">
                {project.stack.map((s) => (
                  <span key={s} className="cs2-modal__tag cs2-modal__tag--stack">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Project Card ────────────────────────────────────────────────── */
function ProjectCard({ project, index, onOpen }) {
  const isFeatured = index === 0;
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="cs2-card cs2-reveal"
      style={{ '--d': `${index * 0.1}s` }}
    >
      {/* Glow accent — decorative */}
      <span className="cs2-card__glow" aria-hidden="true" />

      <div className="cs2-card__main">
        {/* Logo column */}
        <div className="cs2-card__logo-col">
          <span className="cs2-card__proj-num">{num}</span>
          {project.logo
            ? <img src={project.logo} alt={project.logoAlt} className="cs2-card__logo-img" />
            : <div className="cs2-card__logo-fb">{project.name[0]}</div>
          }
          {isFeatured && <span className="cs2-card__featured-badge">Featured</span>}
        </div>

        {/* Body */}
        <div className="cs2-card__body">
          <div className="cs2-card__top">
            <span className="cs2-card__industry">{project.industry}</span>
            <div className="cs2-card__stack">
              {project.stack.map((s) => (
                <span key={s} className="cs2-card__stack-tag">{s}</span>
              ))}
            </div>
          </div>

          <h2 className="cs2-card__name">{project.name}</h2>
          <p className="cs2-card__tagline">{project.tagline}</p>
          <p className="cs2-card__summary">{project.summary}</p>

          <div className="cs2-card__foot">
            <div className="cs2-card__metrics">
              {project.outcomes.map((o) => (
                <div key={o.label} className="cs2-card__metric">
                  <span className="cs2-card__metric-num">{o.metric}</span>
                  <span className="cs2-card__metric-label">{o.label}</span>
                </div>
              ))}
            </div>

            <div className="cs2-card__services">
              {project.services.map((s) => (
                <span key={s} className="cs2-card__svc">{s}</span>
              ))}
            </div>

            <button className="cs2-card__cta" onClick={() => onOpen(project)}>
              View Case Study <span className="cs2-card__cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Impact Dashboard (hero right panel) ─────────────────────────── */
function ImpactDashboard() {
  return (
    <div className="cs2-dash">
      {/* Top bar */}
      <div className="cs2-dash__bar">
        <div className="cs2-dash__bar-left">
          <span className="cs2-dash__dot cs2-dash__dot--pulse" />
          <span className="cs2-dash__bar-label">Impact Dashboard</span>
        </div>
        <span className="cs2-dash__bar-time">Live</span>
      </div>

      {/* KPI grid */}
      <div className="cs2-dash__kpis">
        {[
          { num: '100+', label: 'Projects Delivered', trend: '+12 this quarter', up: true },
          { num: '80%',  label: 'Avg. Efficiency Gain', trend: 'Across all clients', up: true },
          { num: '5+',   label: 'Industries Served', trend: 'Hospitality · Retail · SaaS', up: null },
          { num: '100%', label: 'Client Satisfaction', trend: '50+ happy clients', up: true },
        ].map((k) => (
          <div key={k.label} className="cs2-dash__kpi">
            <div className="cs2-dash__kpi-top">
              <span className="cs2-dash__kpi-num">{k.num}</span>
              {k.up !== null && (
                <span className={`cs2-dash__kpi-badge ${k.up ? 'cs2-dash__kpi-badge--up' : ''}`}>
                  {k.up ? '↑' : '↓'}
                </span>
              )}
            </div>
            <span className="cs2-dash__kpi-label">{k.label}</span>
            <span className="cs2-dash__kpi-trend">{k.trend}</span>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="cs2-dash__feed-head">
        <span className="cs2-dash__feed-title">Recent Deployments</span>
      </div>
      <div className="cs2-dash__feed">
        {[
          { name: 'Horeca Mall', desc: 'Procurement Platform', status: 'LIVE', cls: 'green' },
          { name: 'Bizz Studio', desc: 'BI Dashboard', status: 'LIVE', cls: 'green' },
          { name: 'Platter',     desc: 'POS + Inventory',  status: 'ACTIVE', cls: 'blue' },
        ].map((f) => (
          <div key={f.name} className="cs2-dash__feed-row">
            <div className="cs2-dash__feed-dot-wrap">
              <span className={`cs2-dash__feed-dot cs2-dash__feed-dot--${f.cls}`} />
            </div>
            <div className="cs2-dash__feed-info">
              <span className="cs2-dash__feed-name">{f.name}</span>
              <span className="cs2-dash__feed-desc">{f.desc}</span>
            </div>
            <span className={`cs2-dash__feed-badge cs2-dash__feed-badge--${f.cls}`}>{f.status}</span>
          </div>
        ))}
      </div>

      {/* Glass accent chip */}
      <div className="cs2-dash__glass-chip">
        <span className="cs2-dash__chip-dot" />
        All systems operational · 99.9% uptime
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  useReveal();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal  = useCallback((p) => setSelectedProject(p), []);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <main className="cs2-page">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="cs2-hero">
        <div className="cs2-hero__inner">
          <div className="cs2-hero__left">
            <h1 className="cs2-hero__title">
              Real Businesses.<br />
              <span className="cs2-hero__accent">Real Problems Solved.</span>
            </h1>
            <p className="cs2-hero__sub">
              Every project here started the same way — a business that was growing faster than their systems could keep up with. Here is how we helped.
            </p>
            <div className="cs2-hero__btns">
              <a href="#cs2-projects" className="cs2-btn cs2-btn--dark">Browse Projects</a>
              <a href="#contact" className="cs2-btn cs2-btn--outline-dark">Start a Project →</a>
            </div>
            <div className="cs2-hero__stats">
              {[['100+', 'Projects'], ['50+', 'Clients'], ['5+', 'Industries'], ['100%', 'On-Time']].map(([n, l]) => (
                <div key={l} className="cs2-hero__stat">
                  <span className="cs2-hero__stat-num">{n}</span>
                  <span className="cs2-hero__stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cs2-hero__right">
            <ImpactDashboard />
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────── */}
      <section className="cs2-section cs2-section--tint" id="cs2-projects">
        <div className="cs2-inner">
          <div className="cs2-stag cs2-reveal">
            <span className="cs2-tag-line" />
            <span className="cs2-tag-txt">Featured Projects</span>
          </div>
          <div className="cs2-shead cs2-reveal">
            <h2>Work We Are Proud Of.</h2>
            <p>A selection of systems delivered across different industries and operational environments.</p>
          </div>
          <div className="cs2-projects-list">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cs2-cta">
        <div className="cs2-cta__inner cs2-reveal">
          <div className="cs2-cta__pill">FREE STRATEGY CALL · NO COMMITMENT REQUIRED</div>
          <h2>Ready To Become Our Next Success Story?</h2>
          <p>
            Whether you need procurement software, ERP systems, dashboards, automation, or custom business platforms, we build solutions that eliminate bottlenecks and help businesses scale faster.
          </p>
          <div className="cs2-cta__btns">
            <a href="tel:+917014626389" className="cs2-btn cs2-btn--white">Book Strategy Call</a>
            <a href="#" className="cs2-btn cs2-btn--ghost-w">Explore Services →</a>
          </div>
          <span className="cs2-cta__note">
            Free 30-min strategy call · <strong>100+ businesses already served</strong> · Response within 4 hours
          </span>
        </div>
      </section>

      {/* ── MODAL ────────────────────────────────────────────────── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

    </main>
  );
}