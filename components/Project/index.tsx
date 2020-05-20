import Link from "next/link";
import styles from "./project.module.scss";
import Image from "@components/Image";

interface Props {
  id: string;
  title: string;
  imgPath: string;
}

export default function Project({ id, title, imgPath }: Props) {
  return (
    <Link href="/projects/[id]" as={`/projects/${id}`}>
      <a>
        <div className={imgPath ? styles.project : styles.noImg}>
          {imgPath && <Image className={styles.topImg} path={imgPath}></Image>}
          <div className={styles.bottom}>{title}</div>
        </div>
      </a>
    </Link>
  );
}
