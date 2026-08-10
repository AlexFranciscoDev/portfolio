import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine, X } from "lucide-react";
import { social } from "../../data/social";

export function MobileMenu({ open, onClose, items, cvHref = "/cv.pdf" }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus?.();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll("a, button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[60] flex flex-col bg-paper px-6"
    >
      <div className="flex h-[88px] items-center justify-end">
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center text-ink"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/#${item.id}`}
            onClick={onClose}
            className="py-2 text-4xl font-medium tracking-[-0.01em] text-ink transition-colors duration-200 ease-io hover:text-teal"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-wrap gap-6 border-t border-line py-8 font-mono text-xs uppercase tracking-[0.06em] text-muted">
        <a href={cvHref} download className="flex items-center gap-1.5 hover:text-ink">
          <ArrowDownToLine size={13} strokeWidth={1.8} aria-hidden="true" />
          Download CV
        </a>
        {social.slice(1).map((item) => (
          <a
            key={item.platform}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="hover:text-ink"
          >
            {item.platform}
          </a>
        ))}
      </div>
    </div>
  );
}
