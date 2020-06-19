interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Blank({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : ""}
    >
      {children}
    </a>
  );
}
