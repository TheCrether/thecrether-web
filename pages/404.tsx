import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page not found :("
        openGraph={{ title: "Page not found :(" }}
      ></NextSeo>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
