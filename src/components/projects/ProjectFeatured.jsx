import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function ProjectFeatured({ project, index }) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid grid-cols-1 items-center gap-10 py-16 first:pt-0 lg:grid-cols-12 lg:gap-8 lg:py-24">
      <Reveal
        className={clsx("lg:col-span-5", reversed ? "lg:order-2" : "lg:order-1")}
      >
        <span className="font-mono text-sm text-teal">{number}</span>
        <h3 className="mt-4 text-[length:var(--font-size-h3)] font-medium tracking-[-0.01em] text-ink">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{project.shortDescription}</p>

        {project.tags?.length > 0 && (
          <p className="mt-6 font-mono text-xs tracking-[0.02em] text-muted">{project.tags.join(" · ")}</p>
        )}

        <div className="mt-8">
          <Button to={`/projects/${project.slug}`} variant="text">
            View case study
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </div>
      </Reveal>

      <Reveal
        delay={100}
        className={clsx("img-hover-trigger lg:col-span-7", reversed ? "lg:order-1" : "lg:order-2")}
      >
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
          {project.images?.cover ? (
            <img
              src={project.images.cover}
              alt={`${project.title} interface screenshot`}
              className="img-hover aspect-[16/10] w-full object-cover"
            />
          ) : (
            <div className="img-hover flex aspect-[16/10] w-full items-center justify-center border border-dashed border-line-strong bg-paper-alt font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Cover image pending
            </div>
          )}
        </Link>
      </Reveal>
    </article>
  );
}
