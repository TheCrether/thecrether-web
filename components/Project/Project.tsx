import Link from "next/link";
import styles from "./project.module.scss";
import Image from "@components/Image";
import { flex } from "@lib/utils";

interface Props {
  id: string;
  title: string;
  imgPath: string;
  desc: string;
  index: number;
}

export function Project({ id, title, imgPath, desc, index }: Props) {
  return (
    <Link href="/projects/[id]" as={`/projects/${id}`}>
      <a
        className={styles.wrapper}
        style={{ animationDelay: `${(index + 1) * 200}ms` }}
      >
        <div className={flex(imgPath ? styles.project : styles.noImg)}>
          {imgPath && (
            <Image
              className={flex(styles.topImg)}
              path={imgPath}
              objectFit="cover"
            ></Image>
          )}
          <div className={styles.bottom}>
            <p className={styles.title}>{title}</p>
            <p>{desc}</p>
          </div>
          <p className={`${styles.more} link`}>More →</p>
        </div>
      </a>
    </Link>
  );
}

export default Project;
