import { Intro, Layout } from "@components";

export default function AboutPage() {
  const intro = <Intro title="About Me" introType="about"></Intro>;
  return <Layout intro={intro}>d</Layout>;
}
