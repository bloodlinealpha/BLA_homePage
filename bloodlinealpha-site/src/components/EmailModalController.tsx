import { useState, useEffect } from "react";
import EmailModal from "../components/EmailModal";

export default function EmailModalController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Intercept all clicks on email links
    function handler(e: MouseEvent) {
      const el = e.target as Element | null;
      if (!el) return;
      const target = el.closest("a,button");
      if (!target) return;
      if (
        target instanceof HTMLAnchorElement &&
        target.href &&
        target.href.includes("bloodlinealpha@gmail.com") &&
        !target.hasAttribute("data-bypass-email-modal")
      ) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return <EmailModal open={open} onClose={() => setOpen(false)} />;
}
