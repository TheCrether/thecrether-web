import { useState, useEffect } from "react";
import Container from "../Container";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "../Image";
import { flex } from "@lib/utils";

interface Props {
  home?: boolean;
  projectPost?: boolean;
  scrolled?: boolean;
}

const routes: string[] = ["Projects", "About", "Contact"];

export function Header({ home, projectPost, scrolled }: Props) {
  const [currScrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  if (!scrolled) {
    useEffect(() => {
      let newScrolled;
      if (projectPost) {
        window.addEventListener("scroll", () => {
          const topPart = document.getElementById("topPart");
          if (topPart) {
            newScrolled =
              topPart.getBoundingClientRect().height * 0.8 < window.scrollY;
          } else {
            // check if 50% of window height scrolled if no intro is found
            newScrolled = window.innerHeight / 2 < window.scrollY;
          }
          changeScrolled(newScrolled);
        });
      } else {
        window.addEventListener("scroll", () => {
          const introTitle = document.getElementById("introTitle");
          if (introTitle) {
            newScrolled = introTitle.offsetTop - 50 < window.scrollY;
          } else {
            // check if 30% of window height scrolled if no intro is found
            newScrolled = window.innerHeight * 0.3 < window.scrollY;
          }
          changeScrolled(newScrolled);
        });
      }
    });
  }

  function changeScrolled(newScrolled: boolean) {
    if (newScrolled && !currScrolled) {
      setScrolled(true);
    } else if (currScrolled && !newScrolled) {
      setScrolled(false);
    }
  }

  let className = "";
  if (projectPost) {
    className = currScrolled ? styles.scrolled : styles.projectPost;
  } else {
    className = currScrolled ? styles.scrolled : styles.header;
  }

  const links = routes.map((route) => (
    <Link key={route} href={`/${route.toLowerCase()}`}>
      <a className="flex">{route}</a>
    </Link>
  ));

  return (
    <header className={`${className} ${navOpen ? styles.clicked : ""}`}>
      <div id={styles.notScrolled} className="flex">
        {!home && (
          <Link href="/">
            <a className={styles.centerProfile}>
              <Image path="profile.jpg" alt="Profile Picture"></Image>
            </a>
          </Link>
        )}
        <div id={styles.notScrolledLinks} className="flex">
          {links}
        </div>
      </div>

      <Container className="container">
        <Link href="/">
          <a id={styles.left} className="flex">
            <Image path="profile.jpg" alt="Profile Picture"></Image>
            <p>TheCrether</p>
          </a>
        </Link>
        <div id={styles.right} className="flex">
          {links}
        </div>
      </Container>
      {/* this burger thing is taken from https://www.parkside-interactive.com/ */}
      <div
        className={flex(`  ${styles.burger}`)}
        style={{ opacity: currScrolled ? 1 : 0 }}
      >
        <div
          className={styles.burgerWrapper}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className={styles.burgerIcon}>
            <div className={styles.firstLine}></div>
            <div className={styles.secondLine}></div>
            <div className={styles.thirdLine}></div>
          </div>
        </div>
        <div className={flex(styles.burgerLinks)}>
          <div className="flex">{links}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
