import styles from "./Layout/layout.module.scss";
import { flex } from "@lib/utils";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  maxWidth?: boolean;
}

export function Container({ children, id, className, maxWidth }: Props) {
  return (
    <div
      className={flex(
        `${maxWidth ? styles.maxWidth : ""} ${className || ""} container`
      )}
      id={id}
    >
      {children}
    </div>
  );
}

export default Container;
