import React, { useEffect } from 'react';
import './PrivacyPolicyPage.css';

const POLICY_SECTIONS = [
  {
    num: 1,
    heading: 'Information We Collect',
    content: (
      <>
        <p>We may collect information that you voluntarily provide through contact forms, consultation requests, email communications, newsletter subscriptions, and project inquiries.</p>
        <p>Information may include:</p>
        <ul>
          <li>Name and Company Name</li>
          <li>Email Address and Phone Number</li>
          <li>Business Information and Project Requirements</li>
          <li>Usage Data — includes information about how you use our website, products and services</li>
          <li>Marketing and Communications Data — includes your preferences in receiving marketing from us and your communication preferences</li>
        </ul>
      </>
    )
  },
  {
    num: 2,
    heading: 'How We Use Your Information',
    content: (
      <>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>To respond to your inquiries and schedule consultations</li>
          <li>To provide requested services and communicate project updates</li>
          <li>To improve our website and services continuously</li>
          <li>To evaluate website performance, including most visited parts and frequency of visits</li>
          <li>To send relevant business communications and newsletters</li>
          <li>To contact you and respond to your queries about our services</li>
        </ul>
        <p>We do not sell, rent, or trade personal information to third parties.</p>
      </>
    )
  },
  {
    num: 3,
    heading: 'How Do We Secure Your Information?',
    content: (
      <>
        <p>We are a service company that is only successful due to trust — in our company, in our customers, and vice versa. The protection of your personal data is a very important and special concern for us.</p>
        <p>We implement reasonable technical and organizational measures to protect your information against unauthorized access, disclosure, alteration, or destruction. Collection, processing, and use of your data only proceeds in the context of legal provisions or with your explicit consent.</p>
        <p>While we take security seriously, no method of internet transmission is completely secure, and we cannot guarantee absolute security.</p>
      </>
    )
  },
  {
    num: 4,
    heading: 'Cookies',
    content: (
      <>
        <p>Our website may use cookies and similar technologies to improve user experience and analyze website traffic. Cookies help us:</p>
        <ul>
          <li>Understand visitor behavior</li>
          <li>Improve website functionality</li>
          <li>Measure website performance</li>
        </ul>
        <p>You can disable cookies through your browser settings if you prefer.</p>
      </>
    )
  },
  {
    num: 5,
    heading: 'Information Collected Automatically',
    content: (
      <>
        <p>When you visit our website, certain information may be collected automatically, including:</p>
        <ul>
          <li>IP Address</li>
          <li>Browser Type</li>
          <li>Device Information</li>
          <li>Pages Visited</li>
          <li>Website Usage Data</li>
        </ul>
        <p>This information helps us improve website performance and user experience.</p>
      </>
    )
  },
  {
    num: 6,
    heading: 'Third-Party Services',
    content: (
      <>
        <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of external websites.</p>
        <p>Users are encouraged to review the privacy policies of any third-party websites they visit.</p>
      </>
    )
  },
  {
    num: 7,
    heading: 'Data Retention',
    content: (
      <>
        <p>We retain information only for as long as necessary to provide services, meet legal obligations, resolve disputes, and improve customer experience.</p>
        <p>When information is no longer required, it is securely deleted or anonymized.</p>
      </>
    )
  },
  {
    num: 8,
    heading: 'Your Rights',
    content: (
      <>
        <p>Depending on applicable laws, you may have the right to:</p>
        <ul>
          <li>Request access to your information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of personal data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p>To exercise these rights, please contact us using the details provided below.</p>
      </>
    )
  },
  {
    num: 9,
    heading: "Children's Privacy",
    content: (
      <p>Our services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children.</p>
    )
  },
  {
    num: 10,
    heading: 'Updates to This Policy',
    content: (
      <>
        <p>We may update this Privacy Policy periodically to reflect changes in legal requirements, business practices, or website functionality.</p>
        <p>Any updates will be posted on this page with the revised effective date.</p>
      </>
    )
  },
  {
    num: 11,
    heading: 'Contact Us',
    content: (
      <>
        <p>If you have questions regarding this Privacy Policy, please contact:</p>
        <p><strong>GrassFRONT Technologies Pvt. Ltd.</strong></p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@grassfront.com" className="pp-inline-link">info@grassfront.com</a>
          </li>
          <li>
            <strong>Gurugram Office:</strong> Plot 23, Sector 18, Maruti Industrial Development Area, Gurugram, Haryana 122015
          </li>
          <li>
            <strong>Jaipur Office:</strong> Third Floor, AB Heights-8, Teachers Colony, Baba Market, DCM, Ajmer Road, Vaishali Nagar, Jaipur, Rajasthan
          </li>
        </ul>
      </>
    )
  }
];

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | GrassFRONT Technologies Pvt. Ltd.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Read GrassFRONT's Privacy Policy to understand how we collect, use, protect, and manage your personal information when using our website and services.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pp-page">

      {/* ── Hero: landscape full-width banner ── */}
      <section className="pp-hero">
        <img
          src="/assets/privacy-hero.png"
          alt="Data Privacy and Security"
          className="pp-hero__img"
        />
        <div className="pp-hero__overlay">
          <h1 className="pp-hero__title">Privacy Policy</h1>
        </div>
      </section>

      {/* ── Intro paragraph ── */}
      <div className="pp-intro-wrap">
        <div className="pp-intro">
          We, at GrassFRONT Technologies Pvt. Ltd., are committed not only to the letter of the law, but also the spirit of the law. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (<a href="https://grassfront.com" className="pp-inline-link">grassfront.com</a>) and tell you about your privacy rights and how the law protects you. GrassFRONT is the controller and responsible for your personal data (collectively referred to as "we", "us" or "our" in this privacy policy).
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="pp-divider" />

      {/* ── Policy Sections ── */}
      <div className="pp-sections-wrap">
        {POLICY_SECTIONS.map(sec => (
          <section key={sec.num} className="pp-section" id={`section-${sec.num}`}>
            <h2 className="pp-section__heading">
              {sec.num}) {sec.heading}
            </h2>
            <div className="pp-section__body">
              {sec.content}
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}
