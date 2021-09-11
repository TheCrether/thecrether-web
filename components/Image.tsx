import NextImage from "next/image";

interface Props {
  path: string;
  className?: string;
  id?: string;
  alt?: string;
  position?: "relative" | "absolute" | "static";
  layout?: "fill" | "responsive" | "intrinsic" | "fixed";
  objectFit?: "cover" | "fill" | "none" | "scale-down" | "contain";
}

export function Image({
  path,
  className,
  id,
  alt,
  position,
  layout,
  objectFit,
}: Props) {
  return (
    <div
      id={id}
      className={className}
      style={{ position: position || "relative" }}
    >
      <NextImage
        src={`/images/${path}`}
        alt={alt}
        id={id}
        layout={layout || "fill"}
        objectFit={objectFit}
      ></NextImage>
    </div>
  );
}

export function getBackground(path: string, webp = false) {
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
