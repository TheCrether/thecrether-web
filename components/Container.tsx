import styles from "./Layout/layout.module.scss";

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
  maxWidth?: boolean;
}

export function Container({ children, id, className, maxWidth }: Props) {
  return (
    <div
      className={`${maxWidth ? styles.maxWidth : styles.container} ${
        className || ""
      } container`}
      id={id}
    >
      {children}
    </div>
  );
}

export default Container;
