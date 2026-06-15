import React, { useEffect } from 'react';
import './PrivacyPolicyPage.css';

const TERMS_SECTIONS = [
  {
    num: 1,
    heading: 'Acceptance of Terms',
    content: (
      <p>
        By accessing this website, you acknowledge that you have read, understood, and agreed to these
        Terms &amp; Conditions and our Privacy Policy. If you do not agree with these terms, please
        refrain from using our website and services.
      </p>
    )
  },
  {
    num: 2,
    heading: 'Services',
    content: (
      <>
        <p>GrassFRONT provides services including but not limited to:</p>
        <ul>
          <li>ERP Development</li>
          <li>Custom Software Development</li>
          <li>AI Automation Solutions</li>
          <li>Business Intelligence &amp; Reporting</li>
          <li>Procurement Management Solutions</li>
          <li>System Integration Services</li>
          <li>Technology Consulting</li>
        </ul>
        <p>Service scope, timelines, pricing, and deliverables are governed by individual client agreements.</p>
      </>
    )
  },
  {
    num: 3,
    heading: 'Website Content',
    content: (
      <>
        <p>All content on this website, including:</p>
        <ul>
          <li>Text</li>
          <li>Graphics</li>
          <li>Logos</li>
          <li>Design Elements</li>
          <li>Images</li>
          <li>Documents</li>
        </ul>
        <p>
          is the property of GrassFRONT Technologies Pvt. Ltd. unless otherwise stated.
          Unauthorized copying, reproduction, modification, or distribution is prohibited without written permission.
        </p>
      </>
    )
  },
  {
    num: 4,
    heading: 'Intellectual Property',
    content: (
      <>
        <p>
          Any custom software, designs, documentation, or deliverables developed under client agreements
          shall be governed by the terms outlined in the respective project contract.
        </p>
        <p>
          GrassFRONT retains ownership of proprietary methodologies, frameworks, and pre-existing
          intellectual property unless otherwise agreed in writing.
        </p>
      </>
    )
  },
  {
    num: 5,
    heading: 'User Responsibilities',
    content: (
      <>
        <p>Users agree not to:</p>
        <ul>
          <li>Use the website for unlawful purposes</li>
          <li>Attempt unauthorized access to systems</li>
          <li>Introduce malicious software or code</li>
          <li>Misrepresent identity or business information</li>
          <li>Interfere with website functionality</li>
        </ul>
      </>
    )
  },
  {
    num: 6,
    heading: 'Limitation of Liability',
    content: (
      <>
        <p>GrassFRONT shall not be liable for:</p>
        <ul>
          <li>Indirect damages</li>
          <li>Business interruption</li>
          <li>Data loss</li>
          <li>Loss of profits</li>
          <li>Third-party service failures</li>
        </ul>
        <p>
          arising from the use of this website or related services. To the fullest extent permitted by
          law, liability shall be limited to the value of services contracted between the parties.
        </p>
      </>
    )
  },
  {
    num: 7,
    heading: 'Third-Party Links',
    content: (
      <>
        <p>Our website may contain links to external websites.</p>
        <p>
          GrassFRONT is not responsible for the content, security, or practices of third-party websites.
          Accessing such websites is at the user's own risk.
        </p>
      </>
    )
  },
  {
    num: 8,
    heading: 'Confidentiality',
    content: (
      <p>
        Any confidential information shared during consultations, project discussions, or service
        engagements will be handled responsibly and in accordance with applicable agreements.
      </p>
    )
  },
  {
    num: 9,
    heading: 'Payment Terms',
    content: (
      <>
        <p>For project-based services:</p>
        <ul>
          <li>Payment schedules will be defined in project proposals or contracts.</li>
          <li>Work may commence only after agreed payments are received.</li>
          <li>Delayed payments may impact project timelines.</li>
        </ul>
      </>
    )
  },
  {
    num: 10,
    heading: 'Project Changes',
    content: (
      <>
        <p>Changes to approved project scope may require:</p>
        <ul>
          <li>Revised timelines</li>
          <li>Additional costs</li>
          <li>Updated deliverables</li>
        </ul>
        <p>Such changes will be discussed and approved before implementation.</p>
      </>
    )
  },
  {
    num: 11,
    heading: 'Termination',
    content: (
      <>
        <p>
          Either party may terminate a service agreement according to the terms specified in the
          applicable contract.
        </p>
        <p>
          Any completed work and outstanding payments up to the termination date shall remain payable.
        </p>
      </>
    )
  },
  {
    num: 12,
    heading: 'Governing Law',
    content: (
      <>
        <p>
          These Terms &amp; Conditions shall be governed by and interpreted in accordance with the
          laws of India.
        </p>
        <p>Any disputes shall be subject to the jurisdiction of courts located in Gurugram, Haryana.</p>
      </>
    )
  },
  {
    num: 13,
    heading: 'Changes to Terms',
    content: (
      <>
        <p>GrassFRONT reserves the right to modify these Terms &amp; Conditions at any time.</p>
        <p>Updated versions will be published on this page with the revised effective date.</p>
      </>
    )
  },
  {
    num: 14,
    heading: 'Contact Information',
    content: (
      <>
        <p><strong>GrassFRONT Technologies Pvt. Ltd.</strong></p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@grassfront.com" className="pp-inline-link">info@grassfront.com</a>
          </li>
          <li>
            <strong>Gurugram Office:</strong> Plot 23, Sector 18, Maruti Industrial Development Area,
            Gurugram, Haryana 122015
          </li>
          <li>
            <strong>Jaipur Office:</strong> Third Floor, AB Heights-8, Teachers Colony, Baba Market,
            DCM, Ajmer Road, Vaishali Nagar, Jaipur, Rajasthan
          </li>
        </ul>
      </>
    )
  }
];

export default function TermsConditionsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | GrassFRONT Technologies Pvt. Ltd.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      "Read GrassFRONT's Terms & Conditions to understand the rules, responsibilities, and legal framework governing the use of our website and services."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pp-page">

      {/* ── Hero: landscape full-width banner ── */}
      <section className="pp-hero">
        <img
          src="/assets/terms-hero.png"
          alt="Terms and Conditions"
          className="pp-hero__img"
        />
        <div className="pp-hero__overlay">
          <h1 className="pp-hero__title">Terms &amp; Conditions</h1>
        </div>
      </section>

      {/* ── Intro paragraph ── */}
      <div className="pp-intro-wrap">
        <div className="pp-intro">
          Welcome to GrassFRONT Technologies Pvt. Ltd. By accessing or using this website, you agree
          to comply with and be bound by the following Terms &amp; Conditions. If you do not agree with
          these terms, please refrain from using our website and services. Last Updated: <strong>June 2026</strong>.
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="pp-divider" />

      {/* ── Terms Sections ── */}
      <div className="pp-sections-wrap">
        {TERMS_SECTIONS.map(sec => (
          <section key={sec.num} className="pp-section" id={`term-${sec.num}`}>
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
