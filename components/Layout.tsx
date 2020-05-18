import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import Container from "./container";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

// const name = 'TheCrether'
export const siteTitle = "TheCrether's website";

export default function Layout({ children, home }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website of TheCrether" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Header home={home}></Header>
      <main className={styles.main} id="main">
        <Container>{children}</Container>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <Container>a</Container>
      </footer>
    </div>
  );
}
