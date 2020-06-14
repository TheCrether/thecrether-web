import { Layout } from "@components";
import styles from "./about.module.scss";

export default function Recommendations() {
  return (
    <Layout>
      <h1>Watching/Listening Recommendations</h1>
      <div className="alternating">
        <h2>Youtubers</h2>
        <p>
          Some of my favorite youtubers at the moment are:
          <ul className={styles.list}>
            <li>
              <a href="https://www.youtube.com/user/LinusTechTips">
                Linus Tech Tips
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCO5QSoES5yn2Dw7YixDYT5Q">
                Aperture
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCgSJ92_7N3_TOHvKxN2yV1w">
                skate702
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCIabPXjvT5BVTxRDPCBBOOQ">
                Dani
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A">
                Tom Scott
              </a>
            </li>
          </ul>
          <p>... and many more</p>
        </p>
        <h2>Music</h2>
        <p>
          In terms of listening to music, I like a lot of different
          artists/genres whatever, so here is my current Spotify playlist
          <iframe
            src="https://open.spotify.com/embed/playlist/7ANbFhdHN3uuekgUVsInzx"
            width="300"
            height="380"
            frameBorder="0"
            allowTransparency
            allow="encrypted-media"
          ></iframe>
        </p>
      </div>
    </Layout>
  );
}
