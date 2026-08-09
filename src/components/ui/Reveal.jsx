import clsx from "clsx";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Wraps children in the section-reveal treatment (opacity + translateY on enter).
 * Pass `delay` (ms) to stagger siblings — cap group size around 6 per the motion system.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children, ...props }) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={clsx("reveal", visible && "reveal-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
