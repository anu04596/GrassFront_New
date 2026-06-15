import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    image: "/assets/horeca_meet_logo.jpg",
    url: "https://www.horecameet.com",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    category: "Procurement · ERP",
    title: "Horeca Mall — B2B Procurement Platform",
    challenge:
      "Managing procurement workflows through spreadsheets and disconnected manual processes across multiple vendor relationships.",
    solution:
      "Custom procurement management platform with automated approvals, vendor management, and real-time inventory tracking.",
    results: [
      "70% Faster Procurement Cycle",
      "Significantly Reduced Manual Effort",
      "120+ Vendors Onboarded in First Quarter",
    ],
    pageUrl: "#",
    bg: "#ffffff",
  },
  {
    image: "/assets/bizzstudio.jpeg",
    link: "https://bizzstudio.co",
    tech: ["React", "FastAPI", "Redis"],
    category: "Business Intelligence",
    title: "Bizz Studio — Operations Dashboard",
    challenge:
      "Fragmented reporting spread across multiple operational teams with no single source of truth for business performance.",
    solution:
      "Centralized business intelligence dashboard with KPI tracking, automated reporting, and team-level access controls.",
    results: [
      "Real-Time Reporting Across All Departments",
      "Significantly Improved Decision-Making Speed",
      "Single Source of Truth for All Metrics",
    ],
    pageUrl: "#",
    bg: "#000000",
  },
  {
    image: "/assets/platter_pos.jpg",
    link: "https://www.platterpos.com",
    tech: ["React Native", "Firebase"],
    category: "POS · Hospitality",
    title: "Platter — Restaurant POS & Ordering",
    challenge:
      "Restaurants relying on outdated or fragmented POS systems with no unified view of orders, tables, and kitchen flow.",
    solution:
      "End-to-end point-of-sale and digital ordering system with kitchen display integration, table management, and analytics.",
    results: [
      "Deployed Across 14 Locations",
      "99.9% Uptime Across All Installations",
      "Unified Orders, Tables & Kitchen in One View",
    ],
    pageUrl: "#",
    bg: "#ffffff",
  },
];

function calculateGap(width) {
  if (width < 600) return width * 0.15;
  const minWidth = 1024,
    maxWidth = 1456,
    minGap = 60,
    maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const projectsLength = useMemo(() => PROJECTS.length, []);
  const activeProject = useMemo(() => PROJECTS[activeIndex], [activeIndex]);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsLength);
    }, 5000);
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [projectsLength]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, projectsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;

    if (isActive)
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    if (isLeft)
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    if (isRight)
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-section-inner">
        <div className="projects-head">
          <div>
            <div className="section-tag">
              <span className="section-tag-line" />
              <span className="section-tag-label">CASE STUDIES</span>
            </div>
            <h2>Delivering impact across industries.</h2>
          </div>
          <p className="projects-sub">
            A selection of systems and platforms delivered across different
            business environments.
          </p>
        </div>

        <div className="projects-slider-grid">
          {/* ── Left: Image Carousel ── */}
          <div className="projects-visual-container" ref={imageContainerRef}>
            {PROJECTS.map((p, index) => (
              <div
                key={p.title}
                className="project-visual-card"
                style={{
                  ...getImageStyle(index),
                  backgroundColor: p.bg || "var(--haiti)",
                }}
              >
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-link"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-carousel-image"
                    />
                  </a>
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-carousel-image"
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Right: Details Panel ── */}
          <div className="project-details-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="project-details-content"
              >
                {/* Tech tags */}
                <div className="project-tag-row">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="project-tech">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="project-title">{activeProject.title}</h3>

                {/* The Challenge */}
                <div className="project-block">
                  <p className="project-block-label">The Challenge</p>
                  <p className="project-block-text">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="project-divider" />

                {/* Our Solution */}
                <div className="project-block">
                  <p className="project-block-label">Our Solution</p>
                  <p className="project-block-text">{activeProject.solution}</p>
                </div>

                <div className="project-divider" />

                {/* Results Delivered */}
                <div className="project-block">
                  <p className="project-block-label">Results Delivered</p>
                  <ul className="project-results">
                    {activeProject.results.map((r) => (
                      <li key={r} className="project-result-item">
                        <span className="result-check">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-divider" />

                {/* Case study link */}
                <div className="project-read-more">
                  <Link to="/case-studies" className="read-more-link">
                    Read Full Case Study →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="arrow-buttons">
              <button
                className="arrow-button prev-button"
                onClick={handlePrev}
                style={{
                  backgroundColor: hoverPrev ? "var(--blue)" : "var(--white)",
                }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous project"
              >
                <FaArrowLeft
                  size={16}
                  color={hoverPrev ? "var(--white)" : "var(--blue)"}
                />
              </button>
              <button
                className="arrow-button next-button"
                onClick={handleNext}
                style={{
                  backgroundColor: hoverNext ? "var(--blue)" : "var(--white)",
                }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next project"
              >
                <FaArrowRight
                  size={16}
                  color={hoverNext ? "var(--white)" : "var(--blue)"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
