import { useEffect, useState } from "react";
import "./AboutPage.css";
import {
  Database,
  Code2,
  Bot,
  BarChart3,
  Network,
  Target,
  Wrench,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Data ───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Database,
    name: "ERP Development",
    route: "/erp",
  },
  {
    icon: Code2,
    name: "Custom Software Development",
    route: "/custom-software-development",
  },
  {
    icon: Bot,
    name: "AI & Business Automation",
    route: "/ai-automation",
  },
  {
    icon: BarChart3,
    name: "Business Intelligence & Reporting",
    route: "/business-intelligence",
  },
  {
    icon: Network,
    name: "System Integration",
    route: "/system-integration",
  },
];

const REASONS = [
  {
    icon: Target,
    title: "Business-First Thinking",
    desc: "Technology recommendations driven by operational needs.",
  },
  {
    icon: Wrench,
    title: "Practical Solutions",
    desc: "Focused on solving problems and simplifying processes.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Clear timelines and collaborative delivery.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "Ongoing support, enhancements, and improvements.",
  },
];

/* ─── Reveal hook ────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("about-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".about-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Hero stat card (right panel) ──────────────────────────────── */
function HeroPanel() {
  return (
    <div className="about-hero__panel">
      <div className="about-panel__bar">
        <div className="about-panel__bar-left">
          <span className="about-panel__dot" />
          <span className="about-panel__bar-label">GrassFRONT</span>
        </div>
        <span className="about-panel__bar-badge">Since 2019</span>
      </div>

      <div className="about-panel__stats">
        {[
          { num: "100+", label: "Projects Delivered" },
          { num: "50+", label: "Clients Served" },
          { num: "5+", label: "Industries" },
          { num: "10+", label: "Years Experience" },
        ].map((s) => (
          <div key={s.label} className="about-panel__stat">
            <span className="about-panel__stat-num">{s.num}</span>
            <span className="about-panel__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="about-panel__divider" />

      <div className="about-panel__values">
        {[
          "Business-first approach",
          "Practical, measurable outcomes",
          "Collaborative delivery",
        ].map((v) => (
          <div key={v} className="about-panel__value-row">
            <span className="about-panel__value-dot" />
            <span className="about-panel__value-text">{v}</span>
          </div>
        ))}
      </div>

      <div className="about-panel__chip">
        <span className="about-panel__chip-dot" />
        100% client satisfaction · On-time delivery
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function AboutPage() {
  useReveal();

  return (
    <main className="about-page">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__left">
            <div className="about-stag" style={{ marginBottom: "20px" }}>
              <span className="about-tag-line" />
              <span className="about-tag-txt">About GrassFRONT</span>
            </div>
            <h1 className="about-hero__title">
              Building Technology That Solves
              <br />
              <span className="about-hero__accent">
                Real Business Problems.
              </span>
            </h1>
            <p className="about-hero__sub">
              Technology should make businesses easier to run, not more
              complicated. We help organizations replace disconnected systems,
              manual processes, and operational bottlenecks with software
              designed around the way they actually work.
            </p>
            <div className="about-hero__btns">
              <a href="#about-story" className="about-btn about-btn--dark">
                Our Story
              </a>
              <a href="#contact" className="about-btn about-btn--outline-dark">
                Work With Us →
              </a>
            </div>
          </div>
          <div className="about-hero__right">
            <HeroPanel />
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="about-section about-section--white" id="about-story">
        <div className="about-inner">
          <div className="about-stag about-reveal">
            <span className="about-tag-line" />
            <span className="about-tag-txt">Our Story</span>
          </div>

          <div className="about-story-grid about-reveal">
            <div className="about-story__left">
              <h2 className="about-story__heading">
                Founded to bridge the gap between technology and business
                operations.
              </h2>
            </div>
            <div className="about-story__right">
              <p>
                After years of working with businesses and digital systems, we
                saw a common challenge: organizations were investing in
                technology but still struggling with inefficiencies.
              </p>
              <p>
                Our approach is different. We start by understanding how a
                business operates, then build solutions that fit real-world
                workflows and create measurable business value.
              </p>
              <div className="about-story__quote">
                <span className="about-story__quote-mark">"</span>
                <span>
                  We start by understanding how a business operates — then we
                  build.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────── */}
      <section
        className="about-section about-section--tint"
        id="about-services"
      >
        <div className="about-inner">
          <div className="about-stag about-reveal">
            <span className="about-tag-line" />
            <span className="about-tag-txt">What We Do</span>
          </div>
          <div className="about-shead about-reveal">
            <h2>Five Core Capabilities.</h2>
            <p>
              We focus where technology has the clearest impact on how a
              business runs day to day.
            </p>
          </div>

          <div className="about-services-grid about-reveal">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;

              return (
                <Link
                  key={s.name}
                  to={s.route}
                  className="about-service-card"
                  style={{ "--i": i }}
                >
                  <div className="about-service-card__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="about-service-card__name">{s.name}</span>

                  <span className="about-service-card__arrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────── */}
      <section className="about-section about-section--white" id="about-why">
        <div className="about-inner">
          <div className="about-stag about-reveal">
            <span className="about-tag-line" />
            <span className="about-tag-txt">
              Why Businesses Choose GrassFRONT
            </span>
          </div>
          <div className="about-shead about-reveal">
            <h2>The Principles Behind Every Project.</h2>
            <p>
              Four commitments that shape how we engage with every client we
              work with.
            </p>
          </div>

          <div className="about-reasons-grid about-reveal">
            {REASONS.map((r, i) => {
              const Icon = r.icon;

              return (
                <div
                  key={r.title}
                  className="about-reason-card"
                  style={{ "--i": i }}
                >
                  <div className="about-reason-card__icon-wrap">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="about-reason-card__title">{r.title}</h3>

                  <p className="about-reason-card__desc">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────── */}
      <section
        className="about-section about-section--tint"
        id="about-leadership"
      >
        <div className="about-inner">
          <div className="about-stag about-reveal">
            <span className="about-tag-line" />
            <span className="about-tag-txt">Leadership Experience</span>
          </div>

          <div className="about-leadership about-reveal">
            <div className="about-leadership__left">
              <div className="about-leadership__num">
                10<span>+</span>
              </div>
              <div className="about-leadership__num-label">
                Years of combined experience
              </div>
            </div>
            <div className="about-leadership__right">
              <p className="about-leadership__body">
                Our leadership team brings over 10 years of experience across
                business operations, process improvement, and technology
                solutions.
              </p>
              <p className="about-leadership__body">
                This combination of business understanding and technical
                expertise allows us to build systems that solve real operational
                challenges.
              </p>
              <div className="about-leadership__tags">
                {[
                  "Business Operations",
                  "Process Improvement",
                  "Technology Solutions",
                  "Enterprise Software",
                ].map((t) => (
                  <span key={t} className="about-leadership__tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta__inner about-reveal">
          <div className="about-cta__pill">
            FREE CONSULTATION · NO COMMITMENT REQUIRED
          </div>
          <h2>Let's Build Something That Creates Real Business Impact.</h2>
          <p>
            Whether you're looking to automate workflows, improve reporting, or
            build a custom platform, we're ready to help.
          </p>
          <div className="about-cta__btns">
            <a href="tel:+917014626389" className="about-btn about-btn--white">
              Book a Discovery Call
            </a>
            <Link to="/services" className="about-btn about-btn--ghost-w">
              View Our Services →
            </Link>
          </div>
          <span className="about-cta__note">
            Free 30-min discovery call ·{" "}
            <strong>100+ businesses already served</strong> · Response within 4
            hours
          </span>
        </div>
      </section>
    </main>
  );
}
