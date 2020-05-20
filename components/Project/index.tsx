import Link from "next/link";
import styles from "./project.module.scss";
import Image from "@components/Image";

interface Props {
  id: string;
  title: string;
  imgPath: string;
  desc: string;
}

export default function Project({ id, title, imgPath, desc }: Props) {
  return (
    <Link href="/projects/[id]" as={`/projects/${id}`}>
      <a className={styles.wrapper}>
        <div className={imgPath ? styles.project : styles.noImg}>
          {imgPath && <Image className={styles.topImg} path={imgPath}></Image>}
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
