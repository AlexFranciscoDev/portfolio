import clsx from "clsx";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "border border-teal bg-teal text-white px-7 py-3.5 hover:bg-teal-hover hover:border-teal-hover active:scale-[0.98]",
  "primary-dark":
    "border border-teal-dark bg-teal-dark text-coal px-7 py-3.5 hover:bg-teal-dark-hover hover:border-teal-dark-hover active:scale-[0.98]",
  secondary: "border border-line-strong bg-transparent text-ink px-7 py-3.5 hover:border-teal hover:text-teal",
  "secondary-dark":
    "border border-line-dark bg-transparent text-bone px-7 py-3.5 hover:border-teal-dark hover:text-teal-dark",
  text: "p-0 text-ink font-medium",
};

export function Button({ as, to, href, variant = "primary", className, children, ...props }) {
  const classes = clsx(
    "inline-flex w-fit items-center gap-2 rounded-full font-semibold text-[15px] tracking-[0.01em] transition-[background-color,border-color,color,transform] duration-200 ease-io",
    VARIANTS[variant],
    className,
  );

  const content =
    variant === "text" ? <span className="link-swap inline-flex items-center gap-2">{children}</span> : children;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} {...props}>
        {content}
      </a>
    );
  }

  const Tag = as || "button";
  return (
    <Tag className={classes} {...props}>
      {content}
    </Tag>
  );
}
