import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { services } from "../../data/services";

export function Services() {
  return (
    <section id="services" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Services" title="What I can do for you." />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 90}
              className="bg-paper px-8 py-10 transition-colors duration-250 ease-io hover:bg-surface sm:bg-transparent"
            >
              <span className="font-mono text-sm text-teal">{service.number}</span>
              <h3 className="mt-6 text-[length:var(--font-size-h4)] font-medium tracking-[-0.01em] text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
