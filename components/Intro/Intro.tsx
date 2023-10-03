import styles from "./intro.module.scss";
import Image from "components/Image";
import { CSSProperties, useEffect, useState } from "react"; // eslint-disable-line

export type IntroType = "home" | "projects";

interface Props {
  introType: IntroType;
  title: string;
  height?: string;
}

type Urls = {
  // TODO check if eslint has a bug or if this is possible in another way
  // eslint-disable-next-line no-unused-vars
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
        alt="Homepage Star Background"
      ></Image>
      <div className="flex">
        {introType === "home" && (
          <Image
            path="profile.png"
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
