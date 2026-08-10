import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { ProjectHero } from "../components/projects/ProjectHero";
import { NextProjectLink } from "../components/projects/NextProjectLink";
import { getFeaturedProjects, getProjectBySlug } from "../lib/projects";
import { site } from "../data/site";

function CaseStudyBlock({ title, children }) {
  return (
    <div className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-muted">{title}</p>
      {children}
    </div>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) document.title = `${project.title} — ${site.name}`;
    return () => {
      document.title = `${site.name} — ${site.role}`;
    };
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const { caseStudy = {} } = project;
  const featured = getFeaturedProjects();
  const currentIndex = featured.findIndex((p) => p.slug === project.slug);
  const nextProject = featured[(currentIndex + 1) % featured.length];

  return (
    <>
      <ProjectHero project={project} />

      <Container>
        {project.images?.cover ? (
          <img
            src={project.images.cover}
            alt={`${project.title} interface screenshot`}
            className="aspect-[16/10] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-line-strong bg-paper-alt font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Cover image pending
          </div>
        )}

        <div className="mx-auto mt-16 max-w-2xl pb-24">
          {caseStudy.overview && (
            <CaseStudyBlock title="Overview">
              <p className="leading-relaxed text-ink">{caseStudy.overview}</p>
            </CaseStudyBlock>
          )}

          {caseStudy.problem && (
            <CaseStudyBlock title="Problem / Goal">
              <p className="leading-relaxed text-ink">{caseStudy.problem}</p>
            </CaseStudyBlock>
          )}

          {caseStudy.solution && (
            <CaseStudyBlock title="Solution">
              <p className="leading-relaxed text-ink">{caseStudy.solution}</p>
            </CaseStudyBlock>
          )}

          {caseStudy.features?.length > 0 && (
            <CaseStudyBlock title="Main features">
              <ul className="space-y-3">
                {caseStudy.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-relaxed text-ink">
                    <span className="mt-[2px] font-mono text-teal">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CaseStudyBlock>
          )}

          {caseStudy.challenges && (
            <CaseStudyBlock title="Challenges">
              <p className="leading-relaxed text-ink">{caseStudy.challenges}</p>
            </CaseStudyBlock>
          )}

          {caseStudy.learnings && (
            <CaseStudyBlock title="What I learned">
              <p className="leading-relaxed text-ink">{caseStudy.learnings}</p>
            </CaseStudyBlock>
          )}
        </div>
      </Container>

      {nextProject && <NextProjectLink project={nextProject} />}
    </>
  );
}
