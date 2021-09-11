import styles from "./intro.module.scss";
import Image, { getBackground, checkWebp } from "components/Image";
import { CSSProperties, useEffect, useState, useRef } from "react";
import NextImage from "next/image";
import profile from "../../public/images/profile.jpg";

export type IntroType = "home" | "projects";

interface Props {
  introType: IntroType;
  title: string;
  height?: string;
}

type Urls = {
  [type in IntroType]: string;
};

const backgroundNames: Urls = {
  home: "intro.jpg",
  projects: "projects.jpg",
};

export function Intro({ introType, title, height }: Props) {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (height) {
      setStyle({ height, ...style });
    }
  }, []);

  return (
    <div className={styles.intro}>
      <Image
        path={`bg/${backgroundNames[introType]}`}
        layout="fill"
        className={styles.bg}
        objectFit="cover"
        position="absolute"
      ></Image>
      <div className="flex">
        {introType === "home" && (
          <Image
            path="profile.jpg"
            alt="Profile Picture"
            id={styles.homeProfilePic}
          ></Image>
        )}
        <h1 id="introTitle">{title}</h1>
      </div>
    </div>
  );
}

export default Intro;
