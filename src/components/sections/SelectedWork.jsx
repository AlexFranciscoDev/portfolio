import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Reveal } from "../ui/Reveal";
import { ProjectFeatured } from "../projects/ProjectFeatured";
import { getFeaturedProjects } from "../../lib/projects";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section id="selected-work" className="py-12 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle kicker="Selected Work" title="Projects I'd point a client or a recruiter to first." />
        </Reveal>

        <div className="mt-8 divide-y divide-line">
          {projects.map((project, index) => (
            <ProjectFeatured key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
