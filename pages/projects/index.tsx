import { Layout, Intro, Image, Project, BackLink } from "@components";
import Head from "next/head";
import styles from "./projects.module.scss";
import { getProjectsByCategory, ProjectPosts } from "@lib/projects";
import { flex, sectionAnimator } from "@lib/utils";
import { useEffect } from "react";

const languages = [
  {
    name: "TypeScript",
    amount: 5,
    margin: "0 10px 0 0",
  },
  {
    name: "Java",
    amount: 10,
    margin: "0 50px 0 0",
  },
  {
    name: "Go",
    amount: 13,
    margin: "0 80px 0 0",
  },
];

interface Props {
  posts: ProjectPosts;
}

export default function Projects({ posts }: Props) {
  const intro = <Intro introType="projects" title="Projects"></Intro>;

  function onClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => sectionAnimator(`.${styles.language}`, "animatedPosts"));

  return (
    <Layout intro={intro} maxWidth>
      <Head>
        <title>Projects</title>
      </Head>
      <nav className={styles.menu}>
        {languages.map((lang) => (
          <div className={styles.menuItem} key={lang.name}>
            <a
              className={styles.menuItemLink}
              onClick={() => onClick(lang.name.toLowerCase())}
            >
              {lang.name}
            </a>
            <Image
              path={`skills/${lang.name.toLowerCase()}.png`}
              alt={`${lang.name} Logo`}
              className={styles.menuItemImg}
            ></Image>
            <div className={styles.marquee}>
              <div className={styles.marqueeInner} aria-hidden="true">
                {getSpans(lang.name, lang.amount, lang.margin)}
              </div>
            </div>
          </div>
        ))}
      </nav>
      <div className={`container ${styles.projects}`}>
        {languages.map((lang) => {
          let projects = posts[lang.name.toLowerCase()];
          return (
            <div key={lang.name}>
              <h1 id={lang.name.toLowerCase()}>{lang.name}</h1>
              <div className={flex(styles.language)}>
                {projects &&
                  projects.map((project, index) => (
                    <Project
                      id={project.id}
                      imgPath={project.imgPath}
                      title={project.title}
                      key={project.id}
                      desc={project.desc}
                      index={index}
                    ></Project>
                  ))}
                {!projects && <p>Coming soon!</p>}
              </div>
            </div>
          );
        })}
      </div>
      <BackLink></BackLink>
    </Layout>
  );
}

function getSpans(name: string, amount: number, margin: string) {
  let spans = [];
  for (let i = 0; i < amount; i++) {
    spans.push(
      <span key={`${name}-span${i}`} style={{ margin: `${margin}` }}>
        {name}
      </span>
    );
  }
  return spans;
}

export async function getStaticProps() {
  const posts = getProjectsByCategory();
  return {
    props: {
      posts,
    },
  };
}
