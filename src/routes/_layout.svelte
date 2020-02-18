<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}
	footer {
		align-items: flex-start;
		flex-direction: column;
		color: #444;
		display: flex;
		font-size: 80%;
		justify-content: center;
		padding-top: 1em;
	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer>
<p>
Except where otherwise noted, content on this site is licensed under a&nbsp;
<a rel="license" href="https://creativecommons.org/licenses/by/4.0/" 
   title="Creative Commons Attribution 4.0 International license">
   Creative Commons Attribution 4.0 International license
</a>.
</p>
</footer>