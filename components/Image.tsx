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

export function checkWebp(): boolean {
  var elem = document.createElement("canvas");
  if (elem.getContext && elem.getContext("2d")) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
}

export default Image;
