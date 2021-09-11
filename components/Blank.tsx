interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  ariaLabel?: string;
}

export function Blank({ href, children, className, hover, ariaLabel }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ? className : ""} ${hover ? "hover-bg" : ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default Blank;
