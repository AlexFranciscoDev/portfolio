import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Menu } from "lucide-react";
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
          scrolled
            ? "h-[60px] border-line bg-paper/90 backdrop-blur-md"
            : "h-[88px] border-transparent bg-transparent md:h-[92px]",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Link to="/" aria-label={`${site.name} — home`} className="flex items-center gap-2.5">
            {/* <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-[13px] font-bold tracking-[-0.03em] text-paper">
              AF
            </span> */}
            <span className="hidden text-[15px] font-medium tracking-[-0.01em] text-ink sm:inline">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 font-mono text-[13px] uppercase tracking-[0.06em] md:flex">
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

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={NAV_ITEMS} />
    </>
  );
}
