import clsx from "clsx";

export function Badge({ children, dark = false, className }) {
  return (
    <span
      className={clsx(
        "rounded-full border px-4 py-1.5 text-[13px] font-medium tracking-[0.01em]",
        dark ? "border-line-dark text-muted-dark" : "border-line text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
