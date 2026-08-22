import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ProjectHero({ project }) {
  return (
    <header className="pb-16 pt-3 sm:pt-10">
      <Container>
        <Link to="/#selected-work" className="link-swap inline-flex items-center gap-2 text-sm text-muted">
          <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
          Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            {project.year && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.1em] text-muted">{project.year}</p>
            )}
            <h1 className="text-[length:var(--font-size-h1)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
              {project.title}
            </h1>
          </div>

          {(project.links?.demo || project.links?.github) && (
            <div className="flex gap-4">
              {project.links.demo && (
                <Button href={project.links.demo} variant="primary">
                  Live demo
                  <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </Button>
              )}
              {project.links.github && (
                <Button href={project.links.github} variant="secondary">
                  <Github size={16} strokeWidth={1.5} aria-hidden="true" />
                  GitHub
                </Button>
              )}
            </div>
          )}
        </div>

        {project.tags?.length > 0 && (
          <p className="mt-6 font-mono text-xs tracking-[0.02em] text-muted">{project.tags.join(" · ")}</p>
        )}
      </Container>
    </header>
  );
}
