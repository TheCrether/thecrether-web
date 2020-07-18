import styles from "./ring.module.scss";
import { useState, CSSProperties } from "react";

interface Props {
  className: string;
  strokeWidth?: number;
}

export function Ring({ className, strokeWidth }: Props) {
  strokeWidth = strokeWidth || 4;
  const radius = 50 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;

  const [style, setStyle] = useState<CSSProperties>({
    strokeDasharray: circumference,
    strokeDashoffset: circumference,
  });

  function mouseOver() {
    setStyle({
      ...style,
      strokeDashoffset: 0,
    });
  }

  function mouseOut() {
    setStyle({
      ...style,
      strokeDashoffset: circumference,
    });
  }

  return (
    <svg
      className={`${styles.socialRing} ${className}`}
      style={style}
      viewBox="0 0 100 100"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
    >
      <circle
        className={styles.socialRingCircle}
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
    </svg>
  );
}

export default Ring;
