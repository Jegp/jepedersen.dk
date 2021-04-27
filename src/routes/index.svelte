<svelte:head>
	<title>J. E. Pedersen</title>
</svelte:head>

<p>
Research, thoughts and notes of Jens E. Pedersen.
</p>
<p>
<iframe src="https://github.com/sponsors/Jegp/button" title="Sponsor Jegp" height="35" width="116" style="border: 0;"></iframe>
&nbsp;</p>
<br>
<br>

<h2>Posts</h2>
<br/>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<a rel='prefetch' href='{post.slug}'>
				{#if post.image}
					<figure>
						<span><img src="{post.image}" alt="" /></span>
					</figure>
				{/if}
				{post.title}
			</a>
			<span class="date">{post.pubdate}</span>
		</li>
	{/each}
</ul>

<style>
	figure img {
		background-color: transparent;
		max-height: 202px;
		width: auto;
	}

	figure span {
		align-items: flex-end;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	h2 {
		font-size: 1.8em;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0.25em 0 0.0625em;
	}

	ul, p {
		align-items: flex-start;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		line-height: 1.5;
		list-style: none;
		margin: 0 0 1em 0;
		padding: 0;
	}

	ul li {
		list-style-type: none;
		padding: 11px;
		text-align: center;
	}
	ul li:hover {
		border-bottom: 1px solid black;
		padding-bottom: 10px;
	}

	li a {
		display: block;
	}

	.date {
		color: rgba(0, 0, 0, 0.5);
		font-size:90%;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 3em;
		}
	}
</style>


<script context="module">
	export async function preload({ params, query }) {
			return this.fetch(`index.json`).then(r => r.json()).then(posts => {
				return { posts };
			});
		}
</script>

<script>
	export let posts;
</script>
