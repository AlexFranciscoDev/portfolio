import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

export function NextProjectLink({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="img-hover-trigger group block border-t border-line bg-paper-alt py-20">
      <Container className="flex items-center justify-between gap-6">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.1em] text-muted">Next project</p>
          <h3 className="text-[length:var(--font-size-h2)] font-medium tracking-[-0.01em] text-ink transition-colors duration-200 ease-io group-hover:text-teal">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          size={32}
          strokeWidth={1.5}
          className="img-hover shrink-0 text-ink transition-colors duration-200 ease-io group-hover:text-teal"
          aria-hidden="true"
        />
      </Container>
    </Link>
  );
}
