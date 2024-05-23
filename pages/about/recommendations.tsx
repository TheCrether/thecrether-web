import { Layout } from "@components";
import { intersectionAnimator } from "@lib/utils";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect } from "react";
import styles from "./about.module.scss";

export default function Recommendations() {
  useEffect(() => intersectionAnimator());
  return (
    <Layout>
      <NextSeo
        title="My Recommendations"
        description="Find out what kind of books, youtubers and music I like"
        openGraph={{
          title: "My Recommendations",
          description:
            "Find out what kind of books, youtubers and music I like",
        }}
      ></NextSeo>
      <Head>
        <title>My Recommendations</title>
      </Head>
      <h1>My Recommendations</h1>
      <div className="section">
        <h2>Books</h2>
        <p>
          You can check out my{" "}
          <a href="https://www.goodreads.com/thecrether">
            goodreads.com profile
          </a>{" "}
          if you want to know more about what books I like and would books I
          would like to read.
        </p>
      </div>
      <div className="section">
        <h2>Music</h2>
        <p>
          In terms of listening to music, I like a lot of different
          artists/genres whatever, so here my current Spotify playlist! I
          generally listen to the last few songs on repeat, which means that I
          always rack up listening time for specific songs.
        </p>
        <p style={{ width: "100%" }}>
          <span className={styles.spotify} suppressHydrationWarning={true}>
            {/* <iframe
              src="https://open.spotify.com/embed/playlist/0eZah9iH4ml2GCsjL0nwzw"
              width="500"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe> */}
            {/* <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1kw0wgi3ZcUGuDle0U7voL?utm_source=generator"
              width="600"
              height="380"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe> */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2nrEO6KRLqTzgePE0gqXZp?utm_source=generator"
              width="600"
              height="380"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </span>
        </p>
      </div>
      <div className="section">
        <h2>Youtubers</h2>
        <p>
          Some of my favorite youtubers at the moment are:
          <ul className={styles.list}>
            <li>
              <a href="https://www.youtube.com/user/MrFish235">John Fish</a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/LinusTechTips">
                Linus Tech Tips
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCO5QSoES5yn2Dw7YixDYT5Q">
                Aperture
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCgSJ92_7N3_TOHvKxN2yV1w">
                skate702
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A">
                Tom Scott
              </a>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}
