import Container from "../Container";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { flex } from "@lib/utils";
import { Blank } from "@components";

export function Footer() {
  return (
    <footer>
      <Container className={flex(styles.footer)}>
        <p>© 2020 TheCrether</p>
        <div className={flex(styles.socials)}>
          <Blank href="https://github.com/TheCrether" className="flex">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>Github
          </Blank>
          <Blank href="https://twitter.com/thecrether" className="flex">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>Twitter
          </Blank>
        </div>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
