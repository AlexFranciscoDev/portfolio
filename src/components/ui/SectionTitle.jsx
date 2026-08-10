import clsx from "clsx";

export function SectionTitle({ kicker, title, dark = false, centered = false, className, titleClassName }) {
  return (
    <div className={clsx("max-w-2xl", centered && "mx-auto text-center", className)}>
      {kicker && (
        <p
          className={clsx(
            "mb-4 font-mono text-xs uppercase tracking-[0.1em]",
            dark ? "text-teal-dark" : "text-teal",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        className={clsx(
          "text-[length:var(--font-size-h2)] font-medium leading-[1.15] tracking-[-0.01em]",
          dark ? "text-bone" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
