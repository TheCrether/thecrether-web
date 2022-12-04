import NextImage from "next/legacy/image";

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
        layout={layout || "fill"}
        objectFit={objectFit}
      ></NextImage>
    </div>
  );
}

export default Image;
