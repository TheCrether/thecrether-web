import "../styles/global.scss";
import { AppProps } from "next/app"; //eslint-disable-line
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  });

  return (
    <>
      <DefaultSeo
        title="TheCrether's website"
        description="@TheCrether's personal website"
        defaultTitle="TheCrether's website"
        openGraph={{
          title: "TheCrether's website",
          description: "@TheCrether's personal website",
          images: [
            {
              url: "/images/profile.png",
              alt: "@TheCrether's profile picture",
            },
          ],
        }}
        twitter={{
          site: "@TheCrether",
          cardType: "summary_large_image",
        }}
      ></DefaultSeo>
      {/* Component has to come after DefaultSeo because it would otherwise override the SEO changes made in the children */}
      <Component {...pageProps} />
    </>
  );
}
