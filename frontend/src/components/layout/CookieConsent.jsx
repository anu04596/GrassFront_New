import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('grassfront_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for a smoother entry
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('grassfront_cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          Cookies are important to the proper functioning of a site. To improve your experience, we use cookies to remember log-in details and provide secure log-in, collect statistics to optimize site functionality, and deliver content tailored to your interests. Click Agree and Proceed to accept cookies and go directly to the site or click on{' '}
          <Link to="/privacy-policy#cookies" className="cookie-link">
            View Cookie Settings
          </Link>{' '}
          to see detailed descriptions of the types of cookies and choose whether to accept certain cookies while on the site.
        </div>
        <button onClick={handleAccept} className="cookie-btn">
          Ok
        </button>
      </div>
    </div>
  );
}
