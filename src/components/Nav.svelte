<script>
	export let segment;
</script>

<style>
	nav {
		padding: 0 1.5em;
		text-transform: uppercase;
	}

	ul {
		align-items: flex-start;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		margin: 0 0 4.53125em;
		padding: 0;
		width: 100%;
	}

	ul li {
		list-style-type: none;
		padding: 11px;
		text-align: center;
		width: 202px;
	}

	.selected {
		color: rgb(170,30,30);
	}

	.deselected {
		color: rgb(0, 0, 0);
	}

	a, span {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	@media (max-width: 900px) {
		nav ul, nav li, nav a {
			padding: 3px 0;
		}
		nav li.fill {
			width: 0;
		}
	}

	@media (max-width: 660px) {
		nav ul, nav li, nav a {
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 480px) {
		nav ul, nav li, nav a {
			padding: 3px 0;
		}
	}
</style>

<nav>
	<ul>
		<li><a class='deselected' href='.'>J. E. Pedersen</a></li>
		<li class="fill"></li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
	</ul>
</nav>