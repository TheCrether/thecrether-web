import Head from "next/head";
import {
  generateDefaultSeo,
  generateNextSeo,
  type DefaultSeoProps,
  type NextSeoProps,
} from "next-seo/pages";

export function DefaultSeo(props: DefaultSeoProps) {
  return <Head>{generateDefaultSeo(props)}</Head>;
}

export function NextSeo(props: NextSeoProps) {
  return <Head>{generateNextSeo(props)}</Head>;
}
