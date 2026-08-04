import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ContactFormModal } from "./ContactPopup";

const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [initialService, setInitialService] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openContactModal = useCallback((service = "") => {
    setInitialService(service);
    setOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setOpen(false);
  }, []);

  const redirectToContact = useCallback(() => {
    if (location.pathname === "/contact") {
      const target = document.getElementById("cp-contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/contact#cp-contact");
    }
  }, [location.pathname, navigate]);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal, redirectToContact }}
    >
      {children}
      <ContactFormModal
        open={open}
        onClose={closeContactModal}
        initialService={initialService}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
