import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { site } from "../../data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[78svh] flex-col items-center justify-center pb-20 pt-32 text-center sm:pt-24"
    >
      <Container className="flex flex-col items-center">
        <Reveal
          as="p"
          className="mb-7 w-fit rounded-full border border-teal-tint bg-teal-tint px-4 py-[7px] text-xs font-semibold tracking-[0.02em] text-teal-hover"
        >
          {site.location} — {site.availability}
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto max-w-4xl text-[length:var(--font-size-hero)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
            {site.name}
            <span className="block text-teal">{site.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-8 max-w-xl">
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted">
            {site.tagline} {site.experienceLine}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <Button to="/#contact" variant="primary">
            Let's work together
          </Button>
          <Button to="/#selected-work" variant="secondary">
            View my work
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
          <Button href="/cv.pdf" download variant="text" className="gap-2 px-2 text-muted hover:text-ink">
            <ArrowDownToLine size={16} strokeWidth={1.5} aria-hidden="true" />
            Download CV
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
