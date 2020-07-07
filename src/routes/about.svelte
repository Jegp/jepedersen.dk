<svelte:head>
	<title>About</title>
</svelte:head>

<figure>
	<img src="./jens.png" alt="" width="300" />
		<figcaption>
			Foto by <a href="https://www.linkedin.com/in/kevlee1/" title="Taken in Spain, 2019">Kevin Lee</a>.
		</figcaption>
</figure>


<section class='content'>
	<h1>About</h1>
	<p>Jens Egholm Pedersen is a doctoral student at the
	<a href="https://www.kth.se/profile/jeped/" title="KTH">Royal Institute of Technology (KTH)</a>.
	
	He is currently working on spiking neural networks, dynamic vision systems, neuromorphic computing, and robots.
	</p>
	<p>
	Find him on <a href="https://twitter.com/jensegholm" title="Twitter">Twitter</a> 
	or
	<a href="https://github.com/jegp/" title="GitHub">GitHub</a>.
	</p>
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