import clsx from "clsx";

export function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-20", className)} {...props}>
      {children}
    </Tag>
  );
}
