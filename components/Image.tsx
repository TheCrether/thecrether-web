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

export function getBackground(path: string, webp: boolean) {
  if (webp) return "url(" + require(`images/bg/${path}?webp`) + ")";
  else return "url(" + require(`images/bg/${path}`) + ")";
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
