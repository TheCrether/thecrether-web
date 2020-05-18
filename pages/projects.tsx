import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Intro from "../components/Intro";
import styles from "./projects.module.scss";
import Image from "../components/Image";
import layout from "../components/Layout/layout.module.scss";

const languages = [
  {
    name: "TypeScript",
    amount: 8,
    margin: "0 10px",
  },
  {
    name: "Java",
    amount: 8,
    margin: "0 50px",
  },
  {
    name: "Go",
    amount: 15,
    margin: "0 80px",
  },
];

export default function Projects() {
  const intro = <Intro introType="projects" title="Projects"></Intro>;

  function onClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

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
      <div className={layout.container}>
        <h2 id="typescript">Typescript</h2>
        <h2 id="java">Java</h2>
        <h2 id="go">Go</h2>
      </div>
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
