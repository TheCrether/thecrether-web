import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import { Header, Footer, Container } from "@components";
import { flex } from "@lib/utils";

interface Props {
  children: React.ReactNode;
  intro?: JSX.Element;
  home?: boolean;
  maxWidth?: boolean;
  customHeader?: boolean;
  mainClassName?: string;
  className?: string;
  noFooter?: boolean;
}

export const siteTitle = "TheCrether's website";

export function Layout({
  children,
  home,
  intro,
  maxWidth,
  customHeader,
  mainClassName,
  className,
  noFooter,
}: Props) {
  return (
    <div className={flex(`${styles.layout} ${className ? className : ""}`)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website of TheCrether" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      {!customHeader && <Header home={home}></Header>}
      {intro && intro}
      <main
        className={flex(`${styles.main} ${mainClassName ? mainClassName : ""}`)}
        id="main"
      >
        <Container maxWidth={maxWidth}>{children}</Container>
      </main>
      {!home && (
        <Container>
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </Container>
      )}
      {!noFooter && <Footer></Footer>}
    </div>
  );
}

export default Layout;
