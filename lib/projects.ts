import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectPosts {
  [language: string]: ProjectPost[];
}

export interface ProjectPost {
  id: string;
  title: string;
  date: Date;
  language: string;
  website: string;
  imgPath: string;
  desc: string;
}

const postsDirectory = path.join(process.cwd(), "posts", "projects");

export function getProjectsByCategory(): ProjectPosts {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const projectsPosts: ProjectPosts = {};
  fileNames.forEach(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    if (matterResult.data.language) {
      const lang = matterResult.data.language.toLowerCase();
      let posts = projectsPosts[lang];
      if (!posts) {
        posts = projectsPosts[lang] = [];
      }
      posts.push({
        id,
        ...matterResult.data
      } as ProjectPost
      );
    }
  });

  // sort the posts
  for (const lang in projectsPosts) {
    const temp = projectsPosts[lang].sort((a, b) => {
      const lang = a.language.toUpperCase().localeCompare(b.language.toUpperCase());
      if (lang === 0) {
        return a.title.localeCompare(b.title);
      }
      return lang;
    });
    projectsPosts[lang] = temp;
  }

  // Sort posts by programming language and then title
  return projectsPosts;
}