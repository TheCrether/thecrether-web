import Container from "../Container";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { flex } from "@lib/utils";

export function Footer() {
  return (
    <footer>
      <Container className={flex(styles.footer)}>
        <p>© 2020 TheCrether</p>
        <div className={styles.socials}>
          <a href="https://github.com/TheCrether">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>Github
          </a>
          <a href="https://twitter.com/thecrether">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>Twitter
          </a>
        </div>
        <Link href="/legalnotice">
          <a>Legal Notice</a>
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
