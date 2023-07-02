import { Layout, BackLink } from "@components";
import styles from "./about.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { intersectionAnimator } from "@lib/utils";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function AboutPage() {
  useEffect(() => {
    intersectionAnimator();
  });

  return (
    <Layout>
      <NextSeo
        title="About me"
        description="Some interesting bits about me!"
        openGraph={{
          title: "About me",
          description: "Some interesting bits about me!",
        }}
      ></NextSeo>
      <Head>
        <title>About me</title>
      </Head>
      <h1>About Me</h1>
      <p>Thank you for trying to find out more about me!</p>
      <p>
        I am a 20-year old developer (and currently paramedic) from Austria. I studied Informatics at HTBLA
        Kaindorf and below you{"'"}ll find out a lot of stuff about me
      </p>

      <div className="section">
        <h2>Skills</h2>
        <p>
          I like to think that I have got some good skills under my belt. Here
          are some of them!
        </p>
        I have..
        <ul className={styles.list}>
          <li>
            programmed in various languages like TypeScript, Go, Java and more!
          </li>
          <li>a love for making my code efficient and documenting it</li>
          <li>good communication skills when working in a team</li>
          <li>a love for designing stuff</li>
          <li>the ability to adapt to situations</li>
        </ul>
      </div>

      <div className="section">
        <h2>What got me into Informatics</h2>
        {/* <div className={styles.content}> */}
        <p>
          Ever since I was young, I was interested in computers just because
          they were fun.
        </p>
        <p>
          The first interaction I can remember, was when my mother said to log
          into her laptop when I was around 6 or 7.
          <br />
          She told me to type in her password and {'"'}Enter{'"'} and I did not
          understand that there was an actual Enter key.
          <br />
          So I basically typed in {'"'}Enter{'"'} key by key and was confused to
          no end. Somehow that first experience got me thinking about computers
          and getting into Minecraft.
          <br />
        </p>
        {/* </div> */}
        <Link href="/about/whatgotmeinto">
          find out more about my adventure!
        </Link>
      </div>

      <div className="section">
        <h2>Hobbies</h2>
        <p>
          I am a pretty diverse person when it comes to hobbies/areas of
          interest. <br /> I read, watch or listen to a lot of stuff. The topics
          range from philosophical questions to the latest news about
          technology.
        </p>
        <h3>Sports</h3>
        <p>
          I like playing soccer, ultimate frisbee or the casual volleyball game.
          <br />
          In terms of workouts, I sometimes do them, but in the last few months,
          I was not really motivated to do so. <br />
          Another {'"'}sporty{'"'} thing I like to do, is driving my longboard.
          I really love it and it is most fun when I ride with my friends.
        </p>
        <h3>Gaming</h3>
        <p>
          Of course, I like playing video games too. <br />
          Some of my favorite games are the Fallout games, CS:GO, Rocket League
          and some Indie games like Hacknet or Orwell
        </p>
      </div>

      <div className="section">
        <h2>Recommendations</h2>
        <Link href="/about/recommendations">
          click here to find out what content creators and artists I recommend
        </Link>
      </div>

      <BackLink></BackLink>
    </Layout>
  );
}
