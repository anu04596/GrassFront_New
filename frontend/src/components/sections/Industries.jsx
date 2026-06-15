import React from 'react';
import './Industries.css';

const INDUSTRIES = [
  {
    title: 'Hospitality & Restaurants',
    icon: <img src="/assets/ind-coffee.png" alt="Hospitality 3D Icon" className="ind-3d-icon" />,
    items: ['ERP', 'Procurement', 'Inventory', 'POS Integrations'],
    link: '/hospitality-restaurants'
  },
  {
    title: 'Manufacturing',
    icon: <img src="/assets/ind-factory.png" alt="Manufacturing 3D Icon" className="ind-3d-icon" />,
    items: ['Production Tracking', 'Procurement', 'Inventory Control'],
    link: '/manufacturing'
  },
  {
    title: 'Retail',
    icon: <img src="/assets/ind-cart.png" alt="Retail 3D Icon" className="ind-3d-icon" />,
    items: ['Inventory Visibility', 'Sales Analytics', 'CRM Integration'],
    link: '/retail'
  },
  {
    title: 'Distribution',
    icon: <img src="/assets/ind-truck.png" alt="Distribution 3D Icon" className="ind-3d-icon" />,
    items: ['Warehouse Management', 'Logistics Reporting'],
    link: '/logistics'
  },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="section-inner">
        <div className="section-tag reveal">
          <span className="section-tag-line" />
          <span className="section-tag-label">INDUSTRIES</span>
        </div>

        <div className="industries-header reveal" style={{ transitionDelay: '0.1s' }}>
          <h2>Solutions Built for Your Industry</h2>
          <p>
            Deep domain expertise across high-growth sectors with solutions built
            around real operational challenges.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => {
            const cardContent = (
              <>
                <div className="industry-icon">{ind.icon}</div>
                <h3 className="industry-title">{ind.title}</h3>
                <ul className="industry-list">
                  {ind.items.map((item) => (
                    <li key={item}>
                      <span className="industry-list-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            );

            return ind.link ? (
              <a
                href={ind.link}
                key={ind.title}
                className="industry-card reveal"
                style={{ transitionDelay: `${0.2 + i * 0.1}s`, textDecoration: 'none', color: 'inherit' }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={ind.title}
                className="industry-card reveal"
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
