import {
  Layout,
  Header,
  Image,
  Container,
  Date,
  BackLink,
  Blank,
} from "@components";
import { getAllProjectIds, ProjectPost, getProjectData } from "@lib/projects";
import styles from "./post.module.scss";
import { flex } from "@lib/utils";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {
  projectData: ProjectPost;
}

export default function ProjectPage({ projectData }: Props) {
  const { imgPath, date, language, title, website, content, desc, github } =
    projectData;

  return (
    <Layout customHeader maxWidth mainClassName={styles.main}>
      <NextSeo
        title={`${title} | Project`}
        description={desc}
        openGraph={{
          images: [
            {
              url: `https://thecrether.at/${imgPath}`,
              alt: `Image for project "${title}"`,
            },
          ],
          description: desc,
          title: `${title} | Project`,
        }}
        twitter={{
          handle: "@TheCrether",
        }}
      ></NextSeo>
      <Head>
        <link rel="stylesheet" href="/ash-min.css" />
        <title>{title} | Project</title>
      </Head>
      <Header projectPost></Header>
      <div
        className={flex(imgPath ? styles.topPart : styles.noImg)}
        id="topPart"
      >
        {imgPath && (
          <Image
            id={styles.topImg}
            path={projectData.imgPath}
            layout="fill"
            objectFit="contain"
            alt={`Image for project ${title}`}
          ></Image>
        )}
        <div className={flex(styles.info)}>
          <Container>
            <div className={flex(styles.properties)}>
              {date && (
                <div>
                  <Date dateString={date.toString()}></Date>
                </div>
              )}
              <Image
                path={`skills/${language.toLowerCase()}.png`}
                alt={`${language} Logo`}
                className={styles.menuItemImg}
              ></Image>
              {github && (
                <Blank hover href={github} className="flex">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </Blank>
              )}
              {website && (
                <Blank hover href={website} className="flex">
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                </Blank>
              )}
            </div>
            <h1>{title}</h1>
          </Container>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="container"
        id="post"
      ></div>
      <BackLink msg="Back to Projects" href="/projects"></BackLink>
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
