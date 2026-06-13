import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions', href: '#solutions', dropdown: [
      { label: 'ERP Development', href: '/erp' },
      { label: 'Custom Software Development', href: '/custom-software' },
      { label: 'AI Automation', href: '/ai-automation' },
      { label: 'Business Intelligence', href: '/bi' },
      { label: 'Procurement Management Software', href: '/procurement' },
      { label: 'System Integration', href: '/integration' },
    ]
  },
  {
    label: 'Industries', href: '#industries', dropdown: [
      { label: 'Hospitality & Restaurants', href: '#hospitality' },
      { label: 'Manufacturing', href: '#manufacturing' },
      { label: 'Retail', href: '#retail' },
      { label: 'Distribution & Logistics', href: '#logistics' },
      { label: 'Professional Services', href: '#professional-services' },
    ]
  },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const cancelAutoHideTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const startAutoHideTimer = () => {
    cancelAutoHideTimer();
    timeoutRef.current = setTimeout(() => {
      if (window.scrollY >= 50) setHidden(true);
    }, 2000);
  };

  const renderLink = (href, children, props = {}) => (
    href.startsWith('/') ? (
      <Link to={href} {...props}>{children}</Link>
    ) : (
      <a href={href} {...props}>{children}</a>
    )
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest < 50) {
      setHidden(false); cancelAutoHideTimer();
    } else if (latest > previous && latest > 100) {
      setHidden(true); cancelAutoHideTimer();
    } else if (latest < previous) {
      setHidden(false); startAutoHideTimer();
    }
  });

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      cancelAutoHideTimer();
    };
  }, []);

  return (
    <>
      <div className="navbar-glow" />
      <motion.header
        className="navbar"
        initial={{ x: "-50%" }}
        variants={{
          visible: { y: 0, x: "-50%" },
          hidden: { y: -150, x: "-50%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={cancelAutoHideTimer}
        onMouseLeave={() => {
          setActiveDropdown(null);
          if (window.scrollY >= 50) startAutoHideTimer();
        }}
      >
        <div className="navbar-container">
          <div className="navbar-top-reflection" />
          <div className="navbar-shine-reflection" />

          <div className="navbar-inner">
            {/* Logo */}
            <div className="nav-left">
              <a href="#" className="nav-logo">
                <img src="/assets/image.png" alt="GrassFront Logo" className="logo-image" />
              </a>
            </div>

            {/* Desktop Links */}
            <div className="nav-links-container desktop-only" ref={dropdownRef}>
              <ul className="nav-links">
                {NAV_LINKS.map(l => (
                  <li
                    key={l.label}
                    className={l.dropdown ? 'has-dropdown' : ''}
                    onMouseEnter={() => l.dropdown && setActiveDropdown(l.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {renderLink(l.href, <>
                      {l.label}
                      {l.dropdown && <span className="nav-chevron">▼</span>}
                    </>)}
                    {l.dropdown && activeDropdown === l.label && (
                      <div className="nav-dropdown">
                        {l.dropdown.map(item => (
                          <div key={item.label} className="nav-dropdown-item-wrapper">
                            {renderLink(item.href, item.label, { className: 'nav-dropdown-item' })}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA + Burger */}
            <div className="nav-right">
              <a href="#contact" className="nav-cta desktop-only">
                <span className="nav-cta-text">Book Discovery Call</span>
                <span className="nav-cta-pulse" />
              </a>
              <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <div className="nav-drawer">
            <ul>
              {NAV_LINKS.map(l => (
                <li key={l.label}>
                  {renderLink(l.href, <>
                    {l.label}{l.dropdown && <span className="nav-chevron">▼</span>}
                  </>, { onClick: () => setOpen(false) })}
                  {l.dropdown && (
                    <ul className="nav-drawer-sub">
                      {l.dropdown.map(item => (
                        <li key={item.label}>
                          {renderLink(item.href, item.label, { onClick: () => setOpen(false) })}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a href="tel:+917014626389" className="nav-cta-mobile" onClick={() => setOpen(false)}>
              Book Discovery Call
            </a>
          </div>
        )}
      </motion.header>
    </>
  );
}