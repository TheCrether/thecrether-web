import { Layout, Header, Blank, Ring } from "@components";
import styles from "./contact.module.scss";
import { flex } from "@lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ContactPage() {
  const [hovered, setHovered] = useState(-1);

  function onHover(index: number) {
    setHovered(index);
  }

  return (
    <Layout
      className={styles.contact}
      mainClassName={styles.main}
      maxWidth
      customHeader
      home
      noFooter
    >
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
      <Header scrolled></Header>
      <div>
        <h2>Contact me!</h2>
        Because I do not want to put my email into the wild, here are my socials
        where I am pretty active
      </div>
      <div className={`${styles.content} flex`}>
        <div className={flex(styles.socials)}>
          <Blank href="https://twitter.com/thecrether" className="flex">
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTwitter}
            ></FontAwesomeIcon>
          </Blank>
          <Blank href="https://github.com/TheCrether" className="flex">
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
            ></FontAwesomeIcon>
          </Blank>
          <Blank href="https://instagram.com/thecrether" className="flex">
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faInstagram}
            ></FontAwesomeIcon>
          </Blank>
        </div>
        <p className={styles.at}>@TheCrether</p>
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="dark"
          data-vanity="denis-imeri"
        >
          <a
            className="LI-simple-link"
            href="https://at.linkedin.com/in/denis-imeri?trk=profile-badge"
          >
            Denis Imeri
          </a>
        </div>
      </div>
    </Layout>
  );
}
