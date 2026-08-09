import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-start justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">404</p>
      <h1 className="mt-4 text-[length:var(--font-size-h1)] font-medium tracking-[-0.02em] text-ink">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        The page you're looking for doesn't exist, or the project moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}
