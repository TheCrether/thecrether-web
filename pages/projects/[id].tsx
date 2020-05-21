import Layout from "@components/Layout";
import { getAllProjectIds, ProjectPost, getProjectData } from "@lib/projects";

interface Props {
  projectData: ProjectPost;
}

export default function ProjectPage({ projectData }: Props) {
  console.log(projectData);
  return (
    <Layout>
      <p>d</p>
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
  const projectData = getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
