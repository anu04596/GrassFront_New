import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm";
import { useContactModal } from "./ContactModalContext";
import "./ContactPopup.css";

export function ContactFormModal({ open, onClose, initialService = "" }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cf-modal__backdrop" onClick={onClose}>
      <div
        className="cf-modal__panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
      >
        <button
          type="button"
          className="cf-modal__close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <div className="cf-modal__header">
          
          <h3 id="contact-popup-title" className="cf-modal__title">
            Tell us about your project.
          </h3>
        </div>

        <ContactForm
          key={initialService}
          initialService={initialService}
          onClose={onClose}
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
}

export function PopupContactButton({
  children,
  className,
  style,
  initialService = "",
  type = "button",
  onClick,
  ...props
}) {
  let modalContext = null;
  try {
    modalContext = useContactModal();
  } catch (e) {
    // Fallback if rendered outside provider
  }

  const [localOpen, setLocalOpen] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (modalContext?.openContactModal) {
      modalContext.openContactModal(initialService);
    } else {
      setLocalOpen(true);
    }
  };

  return (
    <>
      <button
        type={type}
        className={className}
        style={style}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
      {!modalContext && (
        <ContactFormModal
          open={localOpen}
          onClose={() => setLocalOpen(false)}
          initialService={initialService}
        />
      )}
    </>
  );
}

