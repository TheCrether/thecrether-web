import "../styles/global.scss";
import { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  });

  return <Component {...pageProps} />;
}
