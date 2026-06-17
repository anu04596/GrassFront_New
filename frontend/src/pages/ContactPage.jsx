import { useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/* ─── Data ─────────────────────────────────────────────────────────── */
const SERVICES = [
  { icon: "⬡", label: "Custom Software Development" },
  { icon: "⬡", label: "ERP Development" },
  { icon: "⬡", label: "AI & Business Automation" },
  { icon: "⬡", label: "Business Intelligence & Dashboards" },
  { icon: "⬡", label: "Procurement Management Solutions" },
  { icon: "⬡", label: "System Integration Services" },
];

const OFFICES = [
  {
    city: "Gurugram",
    address: "Plot 23, Sector 18, MIDA, Gurugram, Haryana 122015",
    href: "https://maps.google.com?q=Plot+23,+Sector+18,+Maruti+Industrial+Development+Area,+Gurugram,+Haryana+122015",
  },
  {
    city: "Jaipur",
    address:
      "Third Floor, AB Heights-8, Teachers Colony, DCM, Ajmer Road, Vaishali Nagar, Jaipur, Rajasthan",
    href: "https://maps.google.com?q=Third+Floor,+AB+Heights-8,+Teachers+Colony,+Baba+Market,+DCM,+Ajmer+Road,+Vaishali+Nagar,+Jaipur,+Rajasthan",
  },
];

const WHY = [
  "Replace spreadsheet-based operations",
  "Automate repetitive workflows",
  "Improve inventory and procurement management",
  "Build custom business software",
  "Create reporting dashboards",
  "Connect business applications",
  "Improve operational visibility",
  "Scale systems for business growth",
];

const PROCESS = [
  {
    n: "01",
    title: "Initial Discussion",
    body: "Understanding your goals and challenges.",
  },
  {
    n: "02",
    title: "Requirement Assessment",
    body: "Reviewing requirements and opportunities.",
  },
  {
    n: "03",
    title: "Solution Recommendation",
    body: "Proposing the best approach for your situation.",
  },
  {
    n: "04",
    title: "Project Planning",
    body: "Creating a roadmap and delivery plan.",
  },
];

const FAQS = [
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer a free 30-minute discovery call to understand your business challenges and determine whether we are the right fit.",
  },
  {
    q: "How quickly can we start?",
    a: "For most projects we can begin within 1–2 weeks of the initial discussion, depending on scope and current capacity.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. We work with clients across multiple countries and are comfortable with remote collaboration across different time zones.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely. We offer ongoing support, maintenance, and enhancement plans for all systems we deliver.",
  },
];

/* ─── Scroll reveal ─────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.dataset.visible = "1";
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.07 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── FAQ accordion ─────────────────────────────────────────────────── */
function Faq({ item, idx }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  return (
    <div className={`cp-faq__item${open ? " is-open" : ""}`}>
      <button
        className="cp-faq__trigger"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="cp-faq__q">{item.q}</span>
        <span className="cp-faq__chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="cp-faq__body" ref={bodyRef}>
        <p className="cp-faq__a">{item.a}</p>
      </div>
    </div>
  );
}

/* ─── Contact form ──────────────────────────────────────────────────── */
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await addDoc(collection(db, "contact_submissions"), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setSent(true);
    } catch (err) {
      console.error("Firebase error:", err);
      setError(
        "Something went wrong. Please try again or email us directly at info@grassfront.com"
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="cp-form__success">
        <div className="cp-form__success-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 11l5 5 9-9"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="cp-form__success-title">Message sent.</p>
        <p className="cp-form__success-sub">
          We'll get back to you within 4 business hours.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-form" onSubmit={onSubmit} noValidate>
      <div className="cp-form__row">
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-name">
            Full name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="cp-form__input"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-email">
            Business email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="cp-form__input"
            placeholder="you@company.com"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className="cp-form__row">
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-company">
            Company
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            className="cp-form__input"
            placeholder="Company name"
            value={form.company}
            onChange={onChange}
          />
        </div>
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-service">
            Area of interest
          </label>
          <div className="cp-form__select-wrap">
            <select
              id="cf-service"
              name="service"
              className="cp-form__input cp-form__select"
              value={form.service}
              onChange={onChange}
            >
              <option value="">Select a service</option>
              <option>Custom Software Development</option>
              <option>ERP Development</option>
              <option>AI &amp; Business Automation</option>
              <option>Business Intelligence &amp; Dashboards</option>
              <option>Procurement Management</option>
              <option>System Integration</option>
              <option>Other</option>
            </select>
            <svg
              className="cp-form__select-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 4.5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="cp-form__field">
        <label className="cp-form__label" htmlFor="cf-message">
          Project details
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="cp-form__input cp-form__textarea"
          placeholder="Describe the challenge you're trying to solve, or the system you need built."
          rows={5}
          value={form.message}
          onChange={onChange}
          required
        />
      </div>

      {error && (
        <p
          style={{
            color: "#ef4444",
            fontSize: "14px",
            marginBottom: "12px",
            lineHeight: "1.5",
          }}
        >
          {error}
        </p>
      )}

      <div className="cp-form__actions">
        <button
          className="cp-btn cp-btn--primary"
          type="submit"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
        <span className="cp-form__note">Response within 4 business hours</span>
      </div>
    </form>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function ContactPage() {
  useReveal();

  return (
    <main className="cp-page">
      {/* ══ HERO ════════════════════════════════════════════════════════ */}
      <section className="cp-hero">
        <div className="cp-wrap">
          <div className="cp-eyebrow">Contact GrassFRONT</div>
          <h1 className="cp-hero__h1">
            Let's discuss your
            <br />
            <em className="cp-hero__em">business requirements.</em>
          </h1>
          <p className="cp-hero__sub">
            Whether you're planning a new software project, replacing manual
            processes, or improving operations — tell us about your goals and
            we'll map a path forward.
          </p>
          <div className="cp-hero__actions">
            <a href="#cp-contact" className="cp-btn cp-btn--primary">
              Start the conversation
            </a>
            <button
              className="cp-btn cp-btn--ghost"
              onClick={() =>
                document
                  .getElementById("cp-offices")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View offices →
            </button>
          </div>
          <div className="cp-hero__stats">
            <div className="cp-hero__stat">
              <span className="cp-hero__stat-n">100+</span>
              <span className="cp-hero__stat-l">Businesses served</span>
            </div>
            <div className="cp-hero__stat-sep" />
            <div className="cp-hero__stat">
              <span className="cp-hero__stat-n">&lt; 4 hrs</span>
              <span className="cp-hero__stat-l">Avg. response time</span>
            </div>
            <div className="cp-hero__stat-sep" />
            <div className="cp-hero__stat">
              <span className="cp-hero__stat-n">Free</span>
              <span className="cp-hero__stat-l">Strategy call</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════════════════════════ */}
      <section className="cp-section">
        <div className="cp-wrap">
          <div className="cp-section__hd" data-reveal>
            <div>
              <div className="cp-eyebrow">Services we help with</div>
              <h2 className="cp-section__h2">
                Common reasons businesses reach out.
              </h2>
            </div>
            <p className="cp-section__desc">
              We handle a wide range of operational and technical challenges
              across industries.
            </p>
          </div>
          <div className="cp-services" data-reveal>
            {SERVICES.map((s, i) => (
              <div
                className="cp-services__item"
                key={s.label}
                style={{ "--delay": `${i * 40}ms` }}
              >
                <span className="cp-services__dot" />
                <span className="cp-services__label">{s.label}</span>
                <svg
                  className="cp-services__arr"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT + OFFICES ═══════════════════════════════════════════ */}
      <section className="cp-section cp-section--alt" id="cp-contact">
        <div className="cp-wrap">
          <div className="cp-contact-grid" data-reveal>
            {/* Left — form */}
            <div className="cp-contact-form-col">
              <div className="cp-eyebrow">Get in touch</div>
              <h2 className="cp-contact__h2">Send us a message.</h2>
              <p className="cp-contact__sub">
                Fill in the form and we'll get back to you within 4 business
                hours.
              </p>
              <ContactForm />
            </div>

            {/* Right — offices + info */}
            <div className="cp-contact-info-col" id="cp-offices">
              {/* Offices */}
              <div className="cp-info-block">
                <p className="cp-info-block__label">Offices</p>

                {OFFICES.map((office) => (
                  <a
                    key={office.city}
                    href={office.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-office cp-office--link"
                  >
                    <div className="cp-office__icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.485-2.015-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="cp-office__name">{office.city} Office</p>
                      <p className="cp-office__detail">{office.address}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="cp-info-block">
                <p className="cp-info-block__label">Contact</p>

                <div className="cp-office">
                  <div className="cp-office__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 4.5h12v8H2V4.5z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 4.5l6 5 6-5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="cp-office__name">Email</p>
                    <a
                      href="mailto:info@grassfront.com"
                      className="cp-office__detail"
                    >
                      info@grassfront.com
                    </a>
                  </div>
                </div>

                <div className="cp-office">
                  <div className="cp-office__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 5v3.5l2 2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="cp-office__name">Business Hours</p>
                    <p className="cp-office__detail">
                      Monday – Saturday · 10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Promise */}
              <div className="cp-info-promise">
                <div className="cp-info-promise__dot" />
                <p>
                  Free 30-minute discovery call · No commitment required ·
                  Response within 4 business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY ═════════════════════════════════════════════════════════ */}
      <section className="cp-section">
        <div className="cp-wrap">
          <div className="cp-section__hd" data-reveal>
            <div>
              <div className="cp-eyebrow">Why businesses contact us</div>
              <h2 className="cp-section__h2">Challenges we solve every day.</h2>
            </div>
            <p className="cp-section__desc">
              From eliminating manual work to connecting enterprise systems.
            </p>
          </div>
          <div className="cp-why" data-reveal>
            {WHY.map((item, i) => (
              <div
                className="cp-why__item"
                key={item}
                style={{ "--delay": `${i * 35}ms` }}
              >
                <svg
                  className="cp-why__check"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.5 7l3.5 3.5 5.5-6"
                    stroke="#10B981"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════════════════ */}
      <section className="cp-section cp-section--alt">
        <div className="cp-wrap">
          <div className="cp-section__hd" data-reveal>
            <div>
              <div className="cp-eyebrow">What happens next</div>
              <h2 className="cp-section__h2">
                From first contact to project start.
              </h2>
            </div>
            <p className="cp-section__desc">
              A clear, four-step process so you always know where things stand.
            </p>
          </div>
          <div className="cp-timeline" data-reveal>
            {PROCESS.map((step, i) => (
              <div className="cp-timeline__step" key={step.n}>
                <div className="cp-timeline__track">
                  <div className="cp-timeline__node">
                    <span className="cp-timeline__num">{step.n}</span>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="cp-timeline__line" />
                  )}
                </div>
                <div className="cp-timeline__content">
                  <h3 className="cp-timeline__title">{step.title}</h3>
                  <p className="cp-timeline__body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════════ */}
      <section className="cp-section">
        <div className="cp-wrap">
          <div className="cp-faq-grid" data-reveal>
            <div className="cp-faq-grid__left">
              <div className="cp-eyebrow">FAQ</div>
              <h2 className="cp-section__h2">Common questions.</h2>
              <p
                className="cp-section__desc"
                style={{ maxWidth: "280px", marginTop: "12px" }}
              >
                Still have questions? Send us a message and we'll respond within
                4 hours.
              </p>
              <a
                href="#cp-contact"
                className="cp-btn cp-btn--outline"
                style={{ marginTop: "24px", display: "inline-flex" }}
              >
                Ask a question
              </a>
            </div>
            <div className="cp-faq">
              {FAQS.map((item, i) => (
                <Faq key={item.q} item={item} idx={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════ */}
      <section className="cp-cta">
        <div className="cp-wrap">
          <div className="cp-cta__inner" data-reveal>
            <div className="cp-cta__badge">
              FREE STRATEGY CALL · NO COMMITMENT
            </div>
            <h2 className="cp-cta__h2">
              Let's build something valuable together.
            </h2>
            <p className="cp-cta__body">
              Technology works best when aligned with business goals. Whether
              you need ERP software, automation, dashboards, or custom
              development — we're ready to help.
            </p>
            <div className="cp-cta__actions">
              <a href="#cp-contact" className="cp-btn cp-btn--white">
                Book a strategy call
              </a>
              <Link to="/services" className="cp-btn cp-btn--ghost-inv">
                Explore services →
              </Link>
            </div>
            <p className="cp-cta__note">
              100+ businesses served · Response within 4 business hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}