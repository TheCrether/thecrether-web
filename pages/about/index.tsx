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
          Below you{"'"}ll find a lot of stuff about me
        </p>
      </div>

      <div className="section">
        <h3>What got me into Informatics</h3>
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
          no end. Somehow that first experience got me thinking about computers and
          getting into Minecraft.
          <br />
        </p>
      </div>
    </Layout>
  );
}
