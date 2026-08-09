import clsx from "clsx";

export function Badge({ children, dark = false, className }) {
  return (
    <span
      className={clsx(
        "rounded-sm border px-2.5 py-1 font-mono text-xs tracking-[0.02em]",
        dark ? "border-line-dark text-muted-dark" : "border-line text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
