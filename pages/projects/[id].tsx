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

interface Props {
  projectData: ProjectPost;
}

export default function ProjectPage({ projectData }: Props) {
  const { imgPath, date, language, title, website, content, desc } =
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
        {imgPath && <Image id="topImg" path={projectData.imgPath}></Image>}
        <div className={flex(styles.info)}>
          <Container>
            <div className={flex(styles.properties)}>
              <div>
                Written on {date && <Date dateString={date.toString()}></Date>}
              </div>
              <p>Language: {language}</p>
              {website && <Blank href={website}>Website</Blank>}
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
