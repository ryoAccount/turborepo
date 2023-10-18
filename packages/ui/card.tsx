import * as React from "react";

export function Card({
  className,
  title,
  children,
  href,
  target
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  target?: string
}): JSX.Element {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target={target}
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
