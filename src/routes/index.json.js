import { getPosts } from './_posts.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const posts = getPosts().map(post => ({
			title: post.metadata.title,
			pubdate: post.metadata.pubdate,
			slug: post.slug,
			image: post.metadata.image
		}));

		contents = JSON.stringify(posts);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}