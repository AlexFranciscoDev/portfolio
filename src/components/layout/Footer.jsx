import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { site } from "../../data/site";
import { social } from "../../data/social";

const ICONS = { mail: Mail, linkedin: Linkedin, github: Github };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coal text-bone">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-medium tracking-[-0.01em]">{site.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.06em] text-teal-dark">{site.role}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {social
              .filter((item) => ICONS[item.icon])
              .map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <a
                    key={item.platform}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.platform}
                    className="link-swap flex items-center gap-2 text-sm text-muted-dark hover:text-bone"
                  >
                    <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
                    {item.platform}
                  </a>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 sm:items-end">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.06em] text-muted-dark hover:text-teal-dark"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
          <p className="font-mono text-xs text-muted-dark">© {year} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
