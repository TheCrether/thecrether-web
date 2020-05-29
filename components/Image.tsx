interface Props {
  path: string;
  className?: string;
  id?: string;
  alt?: string;
}
export function Image({ path, className, id, alt }: Props) {
  return (
    <picture className={`${className || ""}`}>
      <source srcSet={require(`images/${path}?webp`)} type="image/webp" />
      <source srcSet={require(`images/${path}?png`)} type="image/png" />
      <img src={require(`images/${path}?jpg`)} alt={alt || ""} id={id || ""} />
    </picture>
  );
}

export default Image;
