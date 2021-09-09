import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from 'remark';
import html from 'remark-html';

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
	content: string;
}

export const projectPostDir = path.join(process.cwd(), "posts", "projects");

export function getProjectsByCategory(): ProjectPosts {
	// Get file names under /posts
	const fileNames = fs.readdirSync(projectPostDir);
	const projectsPosts: ProjectPosts = {};
	fileNames.forEach(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(projectPostDir, fileName);
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

export function getAllProjectIds() {
	const fileNames = fs.readdirSync(projectPostDir);

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		};
	});
}

export async function getProjectData(id: string): Promise<ProjectPost> {
	const fullPath = path.join(projectPostDir, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html, { sanitize: false })
		.process(matterResult.content);
	const content = processedContent.toString();

	// Combine the data with the id
	return {
		id,
		content,
		...matterResult.data
	} as ProjectPost;
}