import fs from 'fs';
import path from 'path';
import marked from 'marked';
import katex from 'katex';

export function getPosts () {
	const slugs = fs.readdirSync('posts')
		.filter(file => path.extname(file) === '.md')
		.map(file => file.slice(0, -3));

	return slugs.map(getPost).sort((a, b) => {
		return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
	});
}

export function getPost(slug) {
	const file = `posts/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
	metadata.dateString = date.toDateString();

	const html_markdown = marked(content);
	const html = process_latex(html_markdown);

	return {
		slug,
		metadata,
		html
	};
}

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}

function process_latex(html) {
	const toLatex = (match, g1) => {
		console.log(g1)
		return katex.renderToString(g1)
	}
	const regexp = /\$+(.*[^\$])\$+/g;
	return html.replace(regexp, toLatex)
}