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

  if (height) {
    if (!style.height) setStyle({ height, ...style });
  }
  let image: JSX.Element = <></>;
  if (introType === "home") {
    image = (
      // <div id={styles.homeProfilePic}>
      //   <NextImage
      //     src={profile}
      //     alt="Profile picture"
      //     layout="fill"
      //     objectPosition="center center"
      //     objectFit="contain"
      //     unoptimized={true}
      //   ></NextImage>
      // </div>
      <Image
        path="profile.jpg"
        alt="Profile Picture"
        id={styles.homeProfilePic}
      ></Image>
    );
  }

  useEffect(() => {
    if (!style.backgroundImage) {
      // setStyle({
      //   backgroundImage: `${getBackground(backgroundNames[introType])}`,
      // });
    }
  });

  return (
    <div className={styles.intro} style={style}>
      <div className="flex">
        {image}
        <h1 id="introTitle">{title}</h1>
      </div>
    </div>
  );
}

export default Intro;
