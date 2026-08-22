import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const FADE_MS = 700;

export function ProjectCardSecondary({ project }) {
  const { demo, github } = project.links || {};
  const videoRef = useRef(null);
  const resetTimeout = useRef(null);

  const ImageWrapper = demo ? "a" : "div";
  const imageWrapperProps = demo ? { href: demo, target: "_blank", rel: "noreferrer" } : {};

  const playDemo = () => {
    clearTimeout(resetTimeout.current);
    videoRef.current?.play();
  };
  const pauseDemo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    resetTimeout.current = setTimeout(() => {
      if (videoRef.current) videoRef.current.currentTime = 0;
    }, FADE_MS);
  };

  return (
    <div className="img-hover-trigger group">
      <ImageWrapper
        {...imageWrapperProps}
        className="block"
        onMouseEnter={playDemo}
        onMouseLeave={pauseDemo}
        onFocus={playDemo}
        onBlur={pauseDemo}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
          <img
            src={project.images.cover}
            alt={`${project.title} screenshot`}
            className="img-hover h-full w-full object-cover"
            loading="lazy"
          />
          {project.images.demo && (
            <video
              ref={videoRef}
              src={project.images.demo}
              className="img-hover absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-focus:opacity-100"
              muted
              loop
              playsInline
            />
          )}
          {demo && (
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-io group-hover:opacity-100">
              <ExternalLink size={14} strokeWidth={1.5} aria-hidden="true" />
            </span>
          )}
        </div>
      </ImageWrapper>

      <div className="mt-4 flex items-start gap-3">
        <h4 className="text-sm font-medium text-ink">{project.title}</h4>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="mt-0.5 shrink-0 text-teal transition-colors duration-200 ease-io"
          >
            <Github size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        )}
      </div>
      {project.shortDescription && (
        <p className="mt-1 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
      )}
      <p className="mt-2 font-mono text-xs text-muted-2">{project.tags.join(" · ")}</p>
    </div>
  );
}
