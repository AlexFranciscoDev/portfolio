import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { ArrowDownToLine, Menu } from "lucide-react";
import { Container } from "../ui/Container";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "../../hooks/useActiveSection";
import { site } from "../../data/site";

const NAV_ITEMS = [
  { id: "selected-work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const CV_HREF = "/cv.pdf";

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4" y="8" width="40" height="26" rx="3" stroke="var(--color-teal)" strokeWidth="2.5" />
      <path
        d="M17 19l-6 5 6 5M31 19l6 5-6 5"
        stroke="var(--color-teal)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="36" width="44" height="4" rx="2" fill="var(--color-teal)" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 border-b transition-[height,background-color,backdrop-filter,border-color] duration-250 ease-io",
          scrolled ? "h-16 border-line bg-paper/90 backdrop-blur-md" : "h-[92px] border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between gap-6">
          <Link to="/" aria-label={`${site.name} — home`} className="flex shrink-0 items-center gap-2.5">
            <LogoMark />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ink">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 text-[13px] font-medium min-[860px]:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                className={clsx(
                  "link-swap transition-colors duration-200 ease-io",
                  pathname === "/" && active === item.id ? "text-teal" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3.5">
            <a
              href={CV_HREF}
              download
              className="hidden items-center gap-[7px] rounded-full border-[1.5px] border-line-strong px-[18px] py-[9px] text-[13px] font-semibold tracking-[0.01em] text-ink transition-colors duration-200 ease-io hover:border-teal hover:text-teal min-[860px]:inline-flex"
            >
              <ArrowDownToLine size={14} strokeWidth={1.8} aria-hidden="true" />
              CV
            </a>
            <Link
              to="/#contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold tracking-[0.01em] text-paper transition-colors duration-200 ease-io hover:bg-ink/85 min-[860px]:inline-flex"
            >
              Let's talk
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center text-ink min-[860px]:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={NAV_ITEMS} cvHref={CV_HREF} />
    </>
  );
}
