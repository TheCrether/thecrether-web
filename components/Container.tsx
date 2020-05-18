import styles from "./layout.module.scss";
import { MutableRefObject } from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Container({ children, id, className }: Props) {
  return (
    <div className={`${styles.container} ${className}`} id={id}>
      {children}
    </div>
  );
}
