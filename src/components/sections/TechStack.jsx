import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { skills } from "../../data/skills";

export function TechStack() {
  return (
    <section id="tech-stack" className="bg-paper-alt py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Tech Stack" title="Tools I reach for." />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 90}>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-teal">{group.category}</p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[17px] leading-snug text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
