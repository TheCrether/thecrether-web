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

export function getBackgrounds(path: string, webp: boolean) {
  const images = [
    require(`images/bg/${path}?webp`),
    require(`images/bg/${path}`),
  ];
  return images.map((img) => `url("${img}")`).join(",");
}

export function checkWebpSupport() {
  
}

export default Image;
