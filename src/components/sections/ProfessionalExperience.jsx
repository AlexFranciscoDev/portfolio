import { ExternalLink } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { Reveal } from "../ui/Reveal";
import { experience } from "../../data/experience";

export function ProfessionalExperience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Professional Experience" title={`${experience.role} — ${experience.period}`} />
        </Reveal>

        <Reveal delay={80} className="mt-6 max-w-xl leading-relaxed text-muted">
          <p>{experience.summary}</p>
        </Reveal>

        <Reveal delay={140} className="mt-8 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-2">
          {experience.positions.map((position, index) => (
            <Reveal key={position.company} delay={index * 90}>
              <p className="text-lg font-medium text-ink">{position.company}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.05em] text-muted">
                {position.role} · {position.period}
              </p>
              <p className="mt-3 leading-relaxed text-muted">{position.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Selected professional work</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {experience.selectedWork.map((work, index) => (
              <Reveal key={work.name} delay={index * 90} className="img-hover-trigger">
                <a href={work.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg">
                  <div className="relative overflow-hidden rounded-lg border border-line">
                    <img
                      src={work.image}
                      alt={`${work.name} website screenshot`}
                      className="img-hover aspect-[16/10] w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p className="text-sm font-medium text-ink">{work.name}</p>
                    <ExternalLink
                      size={13}
                      strokeWidth={1.5}
                      className="text-muted transition-colors duration-200 ease-io group-hover:text-teal"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{work.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
