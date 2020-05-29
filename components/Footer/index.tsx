import Container from "../Container";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>© 2020 TheCrether</p>
      </Container>
    </footer>
  );
}

export default Footer;
