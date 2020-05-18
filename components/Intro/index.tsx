import styles from "./intro.module.scss";

export type IntroType = "home" | "projects" | "about";

interface Props {
  introType?: IntroType;
  title: string;
  height?: string;
}

export default function Intro({ introType, title, height }: Props) {
  let style = {};
  if (height) {
    style = {
      height,
    };
  }
  return (
    <div
      className={`${styles.intro} ${
        introType ? styles[introType] : styles.default
      }`}
      style={style}
    >
      <div>
        <h1 id="introTitle">{title}</h1>
      </div>
    </div>
  );
}
