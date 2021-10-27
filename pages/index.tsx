import Head from "next/head";
import { Layout, Intro, siteTitle } from "@components";
import Link from "next/link";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { intersectionAnimator } from "@lib/utils";

export default function Home() {
  const intro = (
    <Intro title="TheCrether" introType="home" height="50vh"></Intro>
  );
  useEffect(() => {
    intersectionAnimator();
  });
  return (
    <Layout home intro={intro} className={styles.intro}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>
        <span>Hello</span>, I am Denis &quot;TheCrether&quot; Imeri
      </h2>

      <section>
        <h2>About</h2>
        <p>I am a 18-year old student</p>
        <p>
          I am from Austria and go to HTBLA Kaindorf. I do a lot of different
          stuff and if you would like to find out more about me, click on the
          link below!
        </p>
        <Link href="/about">
          <a>find out more on my About page →</a>
        </Link>
      </section>
      <section>
        <h2>Projects</h2>
        <p>
          I always have a lot of fun working on projects. I wrote some posts
          about them and I describe them more in detail. Click on the link below
          to find out more about my recent projects.
        </p>
        <Link href="/projects">
          <a>find out more about my Projects!</a>
        </Link>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          You can contact me through the all normal social media portals! You
          can find them by clicking on the link below!
        </p>
        <Link href="/contact">
          <a>Contact me!</a>
        </Link>
      </section>
    </Layout>
  );
}
