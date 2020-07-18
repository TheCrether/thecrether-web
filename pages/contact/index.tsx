import { Layout, Header, Blank } from "@components";
import styles from "./contact.module.scss";
import { flex } from "@lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <Layout
      className={styles.contact}
      mainClassName={styles.main}
      maxWidth
      customHeader
      home
      noFooter
    >
      <Header scrolled></Header>
      <div>
        <h2>Contact me!</h2>
        Because I do not want to put my email into the wild, here are my socials
        where I am pretty active
      </div>
      <div className={styles.content}>
        <div className={flex(styles.socials)}>
          <Blank href="https://twitter.com/thecrether" className="flex">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            @TheCrether
          </Blank>
          <Blank href="https://github.com/TheCrether" className="flex">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            TheCrether
          </Blank>
          <Blank href="https://instagram.com/thecrether" className="flex">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            @TheCrether
          </Blank>
        </div>
      </div>
    </Layout>
  );
}
