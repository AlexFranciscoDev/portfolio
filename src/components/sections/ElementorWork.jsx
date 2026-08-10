import { Image as ImageIcon } from "lucide-react";
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
          {elementorWork.map((item) => (
            <div
              key={item.id}
              style={{ gridColumn: item.col, gridRow: item.row }}
              className="img-hover-trigger overflow-hidden rounded-lg"
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
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
