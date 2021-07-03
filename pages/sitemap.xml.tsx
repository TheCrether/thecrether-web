import { projectPostDir } from "@lib/projects";
import { readdirSync } from "fs";
import { GetServerSidePropsContext } from "next";
import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }: GetServerSidePropsContext) => {
  const baseURL = {
    development: "http://localhost:3000",
    production: "https://mydomain.com",
    test: "http://localhost:3000",
  }[process.env.NODE_ENV];

  const staticPages = [baseURL];
  staticPages.push(
    ...readdirSync("pages", { withFileTypes: true })
      .filter((staticPage) => {
        return staticPage.isDirectory();
      })
      .flatMap((staticPagePath) => {
        return readdirSync(`pages/${staticPagePath.name}`)
          .filter((page) => {
            return !page.startsWith("[") && !page.includes(".scss");
          })
          .map((page) => {
            const replaced = page.replace(".tsx", "").replace("index", "");
            return `${baseURL}/${staticPagePath.name}${
              replaced ? "/" + replaced : ""
            }`;
          });
      })
  );

  const dynamicPages = readdirSync(projectPostDir).map((page) => {
    return `${baseURL}/projects/${page.replace(/\.md$/, "")}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${staticPages.map(generateURLXML).join("")}
			${dynamicPages.map(generateURLXML).join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

function generateURLXML(url: string): string {
  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
   </url>
	 `;
}

export default Sitemap;
