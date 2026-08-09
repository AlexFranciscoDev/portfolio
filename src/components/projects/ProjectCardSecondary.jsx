import { ExternalLink } from "lucide-react";

export function ProjectCardSecondary({ project }) {
  const href = project.links?.demo || project.links?.github;

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper {...wrapperProps} className="img-hover-trigger group block">
      <div className="relative aspect-[4/3] overflow-hidden border border-line-dark bg-coal-alt">
        <img
          src={project.images.cover}
          alt={`${project.title} screenshot`}
          className="img-hover h-full w-full object-cover"
          loading="lazy"
        />
        {href && (
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm bg-coal/80 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-io group-hover:opacity-100">
            <ExternalLink size={14} strokeWidth={1.5} aria-hidden="true" />
          </span>
        )}
      </div>
      <h4 className="mt-4 text-sm font-medium text-bone">{project.title}</h4>
      <p className="mt-1 font-mono text-xs text-muted-dark">{project.tags.join(" · ")}</p>
    </Wrapper>
  );
}
