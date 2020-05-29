import styles from "./intro.module.scss";
import Image from "components/Image";

export type IntroType = "home" | "projects" | "about";

interface Props {
  introType?: IntroType;
  title: string;
  height?: string;
}

export function Intro({ introType, title, height }: Props) {
  let style = {};
  if (height) {
    style = {
      height,
    };
  }
  let image: JSX.Element = <></>;
  if (introType === "home") {
    image = (
      <Image
        path="profile.jpg"
        alt="Profile Picture"
        id={styles.homeProfilePic}
      ></Image>
    );
  }
  return (
    <div
      className={`${styles.intro} ${
        introType ? styles[introType] : styles.default
      }`}
      style={style}
    >
      <div>
        {image}
        <h1 id="introTitle">{title}</h1>
      </div>
    </div>
  );
}

export default Intro;
