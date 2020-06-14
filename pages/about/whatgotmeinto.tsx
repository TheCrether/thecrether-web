import { Layout } from "@components";

export default function Page() {
  return (
    <Layout>
      <h1>What got me into Programming</h1>
      <div className="alternating">
        <p>
          Ever since I was young, I was interested in computers just because
          they were fun.
        </p>
        <h2>How it began</h2>
        <p>
          The first interaction I can remember, was when my mother said to log
          into her laptop when I was around 6 or 7.
          <br />
          She told me to type in her password and {'"'}Enter{'"'} and I did not
          understand that there was an actual Enter key.
          <br />
          So I basically typed in {'"'}Enter{'"'} key by key and was confused to
          no end. Somehow that first experience got me thinking about computers
          and getting into Minecraft.
          <br />
        </p>
        <h2>What continued</h2>
        <p>
          After that, I just used my old Acer laptop alot and I still own it to
          this day.
          <br />
          I did all kinds of stuff on it and just had my fun.
          <br />
          When I first wanted to start programming, I tried to use Java, but I
          just could not figure out that the print line function had an {'"'}L
          {'"'} in it and instead typed an {'"'}I{'"'} into it. <br /> I
          literally gave up and then tried again one year later with Python,
          where I had a lot of fun. <br />
        </p>
        <h2>School</h2>
        <p>
          Then, I got into HTBLA Kaindorf and started with C in my first year.{" "}
          <br />
          Since this first year, we are now programming{" "}
          <a href="https://github.com/TheCrether/POS">various stuff</a> with
          Java.
        </p>
      </div>
    </Layout>
  );
}