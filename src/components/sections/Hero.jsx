import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { site } from "../../data/site";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-[88svh] items-center pb-16 pt-32 sm:pt-24">
      <Container>
        <Reveal as="p" className="mb-6 font-mono text-xs uppercase tracking-[0.1em] text-teal">
          {site.location} — {site.availability}
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-4xl text-[length:var(--font-size-hero)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
            {site.name}
            <span className="block text-teal">{site.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={160} className="mt-8 max-w-xl">
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted">
            {site.tagline} {site.experienceLine}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
          <Button to="/#contact" variant="primary">
            Let's work together
          </Button>
          <Button to="/#selected-work" variant="secondary">
            View my work
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
