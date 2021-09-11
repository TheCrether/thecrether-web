import { Layout, Header, Blank, Ring } from "@components";
import styles from "./contact.module.scss";
import { flex } from "@lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

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
      <NextSeo
        title="Contact me"
        description="My handles on different social media platforms can be found here"
        openGraph={{
          title: "Contact me",
          description:
            "My handles on different social media platforms can be found here",
        }}
      ></NextSeo>
      <Head>
        <title>Contact me!</title>
      </Head>
      <Header scrolled></Header>
      <div className={styles.beginning}>
        <h2>Contact me!</h2>
        Because I do not want to put my email into the wild, here are my socials
        where I am pretty active
      </div>
      <div className={`${styles.content} flex`}>
        <div className={flex(styles.socials)}>
          <Blank
            href="https://twitter.com/thecrether"
            className="flex"
            ariaLabel="Twitter @TheCrether"
          >
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTwitter}
            ></FontAwesomeIcon>
          </Blank>
          <Blank
            href="https://github.com/TheCrether"
            className="flex"
            ariaLabel="GitHub @TheCrether"
          >
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
            ></FontAwesomeIcon>
          </Blank>
          <Blank
            href="https://instagram.com/thecrether"
            className="flex"
            ariaLabel="Instagram @TheCrether"
          >
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faInstagram}
            ></FontAwesomeIcon>
          </Blank>
          <Blank
            href="https://www.linkedin.com/in/denis-imeri"
            className="flex"
            ariaLabel="LinkedIn @TheCrether"
          >
            <Ring className={styles.ring}></Ring>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </Blank>
        </div>
        <p className={styles.at}>@TheCrether</p>
      </div>
    </Layout>
  );
}
