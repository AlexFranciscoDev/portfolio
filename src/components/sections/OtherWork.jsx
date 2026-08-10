import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { ProjectCardSecondary } from "../projects/ProjectCardSecondary";
import { getOtherProjects } from "../../lib/projects";

export function OtherWork() {
  const projects = getOtherProjects();

  return (
    <section id="other-work" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionTitle kicker="Other Work" title="Smaller builds and practice challenges." />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index, 5) * 90}>
              <ProjectCardSecondary project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
