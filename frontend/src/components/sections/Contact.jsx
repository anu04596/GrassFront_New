import './Contact.css';
import { useContactModal } from '../ContactModalContext';

export default function Contact() {
  const { openContactModal } = useContactModal();

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2>Ready to Improve Operational Efficiency?</h2>
        <p>Let's discuss how ERP, software development, and AI automation can help your business scale faster.</p>
        <div className="cta-btns">
          <button type="button" className="cta-btn-primary" onClick={() => openContactModal()}>Get Free Business Process Audit</button>
          
        </div>
      </div>
    </section>
  );
}