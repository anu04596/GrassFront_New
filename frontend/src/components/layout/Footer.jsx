import "./Footer.css";

const SERVICES = [
  { label: "ERP Development", href: "/erp" },
  { label: "Custom Software Development", href: "/custom-software" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Business Intelligence", href: "/bi" },
  { label: "Procurement Management Software", href: "/procurement" },
  { label: "System Integration", href: "/integration" },
];

const INDUSTRIES = [
  { label: "Hospitality", href: "/hospitality-restaurants" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Retail", href: "/retail" },
  { label: "Logistics", href: "/logistics" },
  { label: "Professional Services", href: "/professional-services" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Why GrassFRONT", href: "#why-grassfront" },
  { label: "Our Process", href: "#our-process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "/contact" },
];

const QUICK_LINKS = [
  { label: "FAQ", href: "#faq" },
  { label: "Get Free Audit", href: "/contact" },
  { label: "Book a Call", href: "tel:+917014626389" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Sitemap", href: "#sitemap" },
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

const SOCIALS = [
  {
    label: "LI",
    title: "LinkedIn",
    href: "https://linkedin.com/company/grassfront",
  },
  { label: "TW", title: "Twitter", href: "#" },
  { label: "YT", title: "YouTube", href: "#" },
  { label: "FB", title: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* ── Brand Column ── */}
          <div className="footer-brand">
            <a href="#" className="footer-logo-wrap">
              <img
                src="/assets/image.png"
                alt="GrassFront"
                className="footer-logo-image"
              />
            </a>
            <p className="footer-tagline">
              Scalable software, ERP systems, and AI-powered solutions that help
              organisations streamline operations and grow efficiently.
            </p>

            <div className="footer-offices">
              {OFFICES.map((o) => (
                <a
                  key={o.city}
                  href={o.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-office"
                >
                  <span className="footer-office-city">{o.city}</span>
                  <span className="footer-office-addr">{o.address}</span>
                </a>
              ))}
            </div>

            <a href="mailto:Info@grassfront.com" className="footer-email">
              Info@grassfront.com
            </a>

            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.title}
                  className="footer-social-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns ── */}
          <div className="footer-links">
            <div className="footer-col">
              <h4 className="footer-col-heading">Services</h4>
              <ul className="footer-col-list">
                {SERVICES.map((s) => (
                  <li key={s.label}>
                    <a href={s.href}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-heading">Industries</h4>
              <ul className="footer-col-list">
                {INDUSTRIES.map((i) => (
                  <li key={i.label}>
                    <a href={i.href}>{i.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-heading">Company</h4>
              <ul className="footer-col-list">
                {COMPANY.map((c) => (
                  <li key={c.label}>
                    <a href={c.href}>{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-col-list">
                {QUICK_LINKS.map((q) => (
                  <li key={q.label}>
                    <a href={q.href}>{q.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 GrassFRONT Technologies Pvt. Ltd. All rights reserved.
          </span>
          <span className="footer-copy">🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
