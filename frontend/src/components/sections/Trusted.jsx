import './Trusted.css';

const LOGOS = ['Horeca Mall', 'Bizz Studio', 'Platter'];

export default function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted-inner">
        <span className="trusted-label">Trusted by growing businesses</span>
        <div className="trusted-divider" />
        <div className="trusted-marquee-wrapper">
          <div className="trusted-marquee-track">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div key={i} className="trusted-logo">
                <span className="trusted-logo-dot" />
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}