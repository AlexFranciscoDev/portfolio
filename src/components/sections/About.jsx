import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import alexPhoto from "../../assets/profile/alex.jpg";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <SectionTitle kicker="About" title="From keeping real sites running to building the interfaces myself." />

          <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-muted">
            <p>
              For the last five years I've built and maintained real websites for real clients — WordPress,
              WooCommerce, migrations, hosting, the parts of the job that rarely show up in a portfolio but keep a
              site running in production.
            </p>
            <p>
              Along the way I got more interested in the frontend itself: React, modern JavaScript, and building
              interfaces rather than just configuring them. That's where most of my energy goes now, alongside
              learning to build and ship full-stack JavaScript applications end to end.
            </p>
            <p className="font-mono text-sm text-muted">
              Currently expanding my frontend and full-stack development skills through IT Academy Barcelona.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="img-hover-trigger lg:col-span-5 lg:self-end">
          <div className="overflow-hidden border border-line">
            <img
              src={alexPhoto}
              alt="Portrait of Alex Francisco"
              className="img-hover aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
