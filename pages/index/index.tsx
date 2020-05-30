import Head from "next/head";
import { Layout, Intro, siteTitle } from "@components";
import Link from "next/link";
import styles from "./index.module.scss";
import layout from "@components/Layout/layout.module.scss";

export default function Home() {
  const intro = (
    <Intro title="TheCrether" introType="home" height="50vh"></Intro>
  );
  return (
    <Layout home intro={intro} className={styles.intro}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>
        <span>Hello</span>, I am Denis &quot;TheCrether&quot; Imeri
      </h2>

      <ul className="section">
        <h3>About</h3>
        <li>I am an 17-year old student</li>
        <li>
          I am from Austria and go to{" "}
          <a href="https://www.htl-kaindorf.at/">HTBLA Kaindorf</a>
        </li>
        <li>
          <div className={layout.backToHome}>
            <Link href="/About">
              <a>find out more on my About page →</a>
            </Link>
          </div>
        </li>
      <section className="section">
        <h3>Projects</h3>
        <p>sa</p>
        <p>sa</p>
        <p>sa</p>
      </section>
      <section className="section">
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </section>
    </Layout>
  );
}
