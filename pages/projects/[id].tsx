import Layout from "@components/Layout";

export default function ProjectPage() {
  return (
    <Layout>
      <p>d</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
