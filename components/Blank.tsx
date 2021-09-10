interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Blank({ href, children, className, hover }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ? className : ""} ${hover ? "hover-bg" : ""}`}
    >
      {children}
    </a>
  );
}

export default Blank;
