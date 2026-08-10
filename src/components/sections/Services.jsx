import { Code2, Globe, LayoutGrid } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { services } from "../../data/services";

const ICONS = { code: Code2, globe: Globe, layers: LayoutGrid };

export function Services() {
  return (
    <section id="services" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Services" title="What I can do for you." centered />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal
                key={service.slug}
                delay={index * 90}
                className="group flex flex-col items-center rounded-2xl border border-line bg-surface px-8 py-10 text-center transition-[transform,box-shadow,border-color] duration-300 ease-io hover:-translate-y-1.5 hover:border-teal-tint hover:shadow-[0_20px_48px_rgba(31,194,184,0.18)]"
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-hover text-white shadow-[0_12px_28px_rgba(31,194,184,0.3)] transition-transform duration-300 ease-io group-hover:rotate-[-4deg] group-hover:scale-110">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-[length:var(--font-size-h4)] font-bold tracking-[-0.01em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted">{service.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
