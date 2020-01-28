<svelte:head>
	<title>About</title>
</svelte:head>

<figure>
	<img src="./fox.gif" alt="" height="512" width="512" />
		<figcaption>
			<a href="http://www.alessiaolivari.com/the-playing-fox/">
				The Playing Fox
			</a>
			by
			<a href="https://www.instagram.com/alessiaolivari/">
				Alessia Olivari
			</a>
		</figcaption>
</figure>


<section class='content'>
	<h1>About this site</h1>
	<p>This site is part of an ongoing series of experiments with <a href="https://sapper.svelte.dev/">Sapper</a>, <a href="https://svelte.dev/">Svelte</a>, and <a href="https://daringfireball.net/projects/markdown/">Markdown</a>. To accommodate <a href="https://gitlab.com/help/user/project/pages/index.md">GitLab Pages</a>, we are making use of <a href="https://sapper.svelte.dev/docs#Base_URLs">Sapper&rsquo;s Base URL support</a> to <a href="https://gitlab.com/rdela/sapper-v3/blob/master/README.md#gitlab-pages-adjustments">alter the base path to <code>sapper-v3/</code></a>. Have a look at the <a href="https://gitlab.com/rdela/sapper-v3">source code on GitLab</a> or visit the <a href="https://kokodokai.com/">Netlify + root directory version</a>.</p>
</section>

<script context="module">
	export async function preload({ params, query }) {
		return;
	}
</script>

<style>
.content {
	max-width: 56em;
	padding: 1em 2em 2em;
	margin: 0 auto;
	text-align: left;
}

figure {
	margin: 0 auto;
}

figure img {
	height: auto;
	max-height: 512px;
	max-width: 100%;
}

figcaption {
	display: block;
	font-size: .875em;
	font-style: italic;
	line-height: 2.5em;
	padding: 0 1em;
}

h1 {
	margin: 1em 0 .25em;
}

h1,
p {
	text-align: center;
}
</style>