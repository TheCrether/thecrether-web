import { useState, useEffect } from "react";
import Container from "../Container";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "../Image";

interface Props {
  home: boolean | undefined;
}

export default function Header({ home }: Props) {
  const [scrolled, setScrolled] = useState(false);

  // if (home) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const introTitle = document.getElementById("introTitle");
      if (introTitle) {
        const isScrolled = introTitle.offsetTop - 50 < window.scrollY;
        if (isScrolled && !scrolled) setScrolled(true);
        else if (scrolled && !isScrolled) setScrolled(false);
      } else {
        // check if 50% of window height scrolled
        const isScrolled = window.innerHeight / 2 < window.scrollY;
        if (isScrolled && !scrolled) {
          setScrolled(true);
        } else if (scrolled && !isScrolled) {
          setScrolled(false);
        }
      }
    });
  });
  // } else if (!scrolled) {
  //   setScrolled(true);
  // }

  return (
    <header className={scrolled ? styles.scrolled : styles.header}>
      <div id={styles.notScrolled}>
        {!home && (
          <Link href="/">
            <a className={styles.centerProfile}>
              <Image path="profile.jpg" alt="Profile Picture"></Image>
            </a>
          </Link>
        )}
        <div id={styles.notScrolledLinks}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </div>

      <Container className={styles.container}>
        <Link href="/">
          <a id={styles.left}>
            <Image path="profile.jpg" alt="Profile Picture"></Image>
            <p>TheCrether</p>
          </a>
        </Link>
        <div id={styles.right}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </Container>
    </header>
  );
}
