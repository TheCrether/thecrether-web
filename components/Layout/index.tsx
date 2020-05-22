import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
  intro?: JSX.Element;
  home?: boolean;
  maxWidth?: boolean;
  customHeader?: boolean;
}

export const siteTitle = "TheCrether's website";

export default function Layout({ children, home, intro, maxWidth, customHeader }: Props) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website of TheCrether" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      {!customHeader &&
        <Header home={home}></Header>
      }
      {intro && intro}
      <main className={styles.main} id="main">
        <Container maxWidth={maxWidth}>{children}</Container>
      </main>
      {!home && (
        <Container>
          (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
          )
        </Container>
      )}
      <Footer></Footer>
    </div>
  );
}
