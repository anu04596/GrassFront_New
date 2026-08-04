import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function submitContactForm(form) {
  await addDoc(collection(db, "contact_submissions"), {
    ...form,
    submittedAt: serverTimestamp(),
  });
}

export function ContactForm({ initialService = "", onClose, onSuccess }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    message: "",
  });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitContactForm(form);
      setSent(true);
      onSuccess?.();
    } catch (err) {
      console.error("Firebase error:", err);
      setError(
        "Something went wrong. Please try again or email us directly at info@grassfront.com",
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="cp-form__success">
        <div className="cp-form__success-icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 11l5 5 9-9"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="cp-form__success-title">Message sent.</p>

        <p className="cp-form__success-sub">
          We'll get back to you within 4 business hours.
        </p>

        {onClose && (
          <button
            type="button"
            className="cp-btn cp-btn--primary cp-form__success-close"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="cp-form" onSubmit={onSubmit} noValidate>
      <div className="cp-form__row">
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-name">
            Full name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="cp-form__input"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-email">
            Business email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="cp-form__input"
            placeholder="you@company.com"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="cp-form__row">
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-company">
            Company
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            className="cp-form__input"
            placeholder="Company name"
            value={form.company}
            onChange={onChange}
          />
        </div>
        <div className="cp-form__field">
          <label className="cp-form__label" htmlFor="cf-service">
            Area of interest
          </label>
          <div className="cp-form__select-wrap">
            <select
              id="cf-service"
              name="service"
              className="cp-form__input cp-form__select"
              value={form.service}
              onChange={onChange}
            >
              <option value="">Select a service</option>
              <option>Custom Software Development</option>
              <option>ERP Development</option>
              <option>AI &amp; Business Automation</option>
              <option>Business Intelligence &amp; Dashboards</option>
              <option>Procurement Management</option>
              <option>System Integration</option>
              <option>Other</option>
            </select>
            <svg
              className="cp-form__select-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M2 4.5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="cp-form__field">
        <label className="cp-form__label" htmlFor="cf-message">
          Project details
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="cp-form__input cp-form__textarea"
          placeholder="Describe the challenge you're trying to solve, or the system you need built."
          rows={5}
          value={form.message}
          onChange={onChange}
          required
        />
      </div>

      {error && (
        <p
          style={{
            color: "#ef4444",
            fontSize: "14px",
            marginBottom: "12px",
            lineHeight: "1.5",
          }}
        >
          {error}
        </p>
      )}

      <div className="cp-form__actions">
        <button
          className="cp-btn cp-btn--primary"
          type="submit"
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
        <span className="cp-form__note">Response within 4 business hours</span>
      </div>
    </form>
  );
}
