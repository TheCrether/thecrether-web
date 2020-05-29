import styles from "./intro.module.scss";
import Image, { getBackgrounds } from "components/Image";
import { CSSProperties, useEffect, useState } from "react";

export type IntroType = "home" | "projects" | "about";

interface Props {
  introType: IntroType;
  title: string;
  height?: string;
}

type Urls = {
  [type in IntroType]: string;
};

const backgrounds: Urls = {
  home: getBackgrounds("intro.jpg"),
  projects: getBackgrounds("projects.jpg"),
  about: ``,
};

export function Intro({ introType, title, height }: Props) {
  const [style, setStyle] = useState<CSSProperties>({});
  // let style: CSSProperties = {
  //   backgroundImage: backgrounds[introType],
  // };
  if (height) {
    setStyle({ height });
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

  useEffect(() => {
    var elem = document.createElement("canvas");
    if (elem.getContext && elem.getContext("2d")) {
      // was able or not to get WebP representation
      return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
    }
    // very old browser like IE 8, canvas not supported
    return false;
  });

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
