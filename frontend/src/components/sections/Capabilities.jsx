import "./Capabilities.css";
import { Link } from "react-router-dom";
/* ─── Card data ─────────────────────────────────────────────────── */
const CAPS = [
  {
    shortTitle: "ERP Systems",
    tagline:
      "Centralize procurement, inventory, sales, finance, and reporting in one platform.",
    tags: ["ERP", "INVENTORY", "FINANCE"],
    href: "/erp",
  },
  {
    shortTitle: "Custom Software Development",
    tagline:
      "Build applications tailored to your workflows and business requirements.",
    tags: ["CUSTOM APPS", "WORKFLOWS"],
    href: "/custom-software",
  },
  {
    shortTitle: "AI Automation",
    tagline:
      "Automate repetitive tasks, approvals, reporting, and communication.",
    tags: ["AI", "AUTOMATION"],
    href: "/ai-automation",
  },
  {
    shortTitle: "Business Intelligence",
    tagline:
      "Track KPIs, monitor performance, and make decisions with confidence.",
    tags: ["BI", "DASHBOARDS", "KPI"],
    href: "/bi",
  },
  {
    shortTitle: "Procurement Management Software",
    tagline:
      "Streamline sourcing, supplier collaboration, purchase orders, and procurement workflows.",
    tags: ["PROCUREMENT", "VENDORS", "PURCHASING"],
    href: "/procurement",
  },
  {
    shortTitle: "System Integration",
    tagline: "Connect existing software into a single, efficient workflow.",
    tags: ["INTEGRATION", "APIS"],
    href: "/integration",
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Core Capabilities</span>
        </div>

        <div className="cap-frame">
          <h2>
            Solutions That Improve
            <br />
            Business Performance
          </h2>

          <div className="cap-grid">
            {CAPS.map((c, i) => (
              <div
                key={c.shortTitle}
                className="cap-card"
                style={{ "--delay": `${i * 0.07}s` }}
              >
                {/* ── Title ── */}
                <h3>{c.shortTitle}</h3>

                {/* ── Divider line ── */}
                <div className="cap-card-divider" />

                {/* ── Tagline ── */}
                <p className="cap-card-desc">{c.tagline}</p>

                {/* ── Tags ── */}
                <div className="cap-tags">
                  {c.tags.map((t) => (
                    <span key={t} className="cap-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* ── CTA ── */}
                <div className="cap-learn">
                  <Link to={c.href} className="learn-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
