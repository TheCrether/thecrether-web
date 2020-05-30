import { Intro, Layout } from "@components";
import styles from "./about.module.scss";

export default function AboutPage() {
  // const intro = <Intro title="About Me" introType="about"></Intro>;
  return (
    <Layout>
      <div className="section">
        <h3>About Me</h3>
        <p>Thank you for trying to find out more about me!</p>
        <p>
          I am a 17-year old student from Austria studying Informatics at HTBLA
          Kaindorf
          <br />
          Below you'll find a lot of stuff about me
        </p>
      </div>

      <div className="section">
        <h3>What got me into Informatics</h3>
        <p></p>
      </div>
    </Layout>
  );
}
