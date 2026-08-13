import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { elementorWork } from "../../data/elementorWork";

export function ElementorWork() {
  return (
    <section id="elementor-work" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Works" title="Client sites built with WordPress & Elementor." />
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-3 gap-3.5 [grid-auto-rows:150px]">
          {elementorWork.map((item) => {
            const Wrapper = item.url ? "a" : "div";
            const wrapperProps = item.url ? { href: item.url, target: "_blank", rel: "noreferrer" } : {};

            return (
              <Wrapper
                key={item.id}
                {...wrapperProps}
                style={{ gridColumn: item.col, gridRow: item.row }}
                className="img-hover-trigger group relative overflow-hidden rounded-lg"
              >
                {item.placeholder ? (
                  <div className="flex h-full w-full items-center justify-center bg-paper-alt text-muted-2">
                    <ImageIcon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.alt || "Elementor website screenshot"}
                    className="img-hover h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
                {item.url && (
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-io group-hover:opacity-100">
                    <ExternalLink size={14} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                )}
              </Wrapper>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
