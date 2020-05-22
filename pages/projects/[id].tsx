import Layout from "@components/Layout";
import { getAllProjectIds, ProjectPost, getProjectData } from "@lib/projects";
import Header from "@components/Header";
import layout from "@components/Layout/layout.module.scss";
import styles from "./post.module.scss";
import Image from "@components/Image";
import Container from "@components/Container";
import Date from "@components/Date";

interface Props {
  projectData: ProjectPost;
}

export default function ProjectPage({ projectData }: Props) {
  const { imgPath, date, language, title, website, content } = projectData;

  return (
    <Layout customHeader maxWidth mainClassName={styles.main}>
      <Header projectPost></Header>
      <div className={imgPath ? styles.topPart : styles.noImg} id="topPart">
        {imgPath && <Image id="topImg" path={projectData.imgPath}></Image>}
        <div className={styles.info}>
          <Container>
            <h1>{title}</h1>
            <div className={styles.properties}>
              {date && <Date dateString={date.toString()}></Date>}
              <p>Language: {language}</p>
              <a href={website}>Website</a>
            </div>
          </Container>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={layout.container}
        id={styles.post}
      ></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
