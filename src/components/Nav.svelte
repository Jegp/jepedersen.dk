<script>
	export let segment;
</script>

<nav>
	<ul>
		<li><a class="deselected" href=".">J. E. Pedersen</a></li>
		<li class="fill" />
		<li>
			<a class={segment === undefined ? "selected" : ""} href=".">home</a>
		</li>
		<li>
			<a class={segment === "about" ? "selected" : ""} href="about">
				about
			</a>
		</li>
		<li>
			<a
				href="https://mastodon.social/@jegp"
				title="Jens E. Pedersen on Mastodon"
			>
				<i class="fa-brands fa-mastodon" />
				<span class="no-transform">@jegp</span>
			</a>
		</li>
		<li>
			<a
				href="https://github.com/jegp"
				title="Jens E. Pedersen on GitHub"
			>
				<i class="fa-brands fa-github" />
				<span class="no-transform">@jegp</span>
			</a>
		</li>
	</ul>
</nav>

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
		margin: 0 0 2.53125em;
		padding: 0;
		width: 100%;
	}

	/* clearfix */
	ul::after {
		content: "";
		display: block;
		clear: both;
	}

	ul li {
		list-style-type: none;
		padding: 11px;
		text-align: center;
		width: 202px;
	}

	.selected {
		color: rgb(170, 30, 30);
	}

	.deselected {
		color: rgb(0, 0, 0);
	}

	a {
		padding: 1em 0.5em;
		display: block;
		text-decoration: none;
	}
	a span.no-transform {
		text-transform: none;
	}
	a i {
		font-size: 170%;
		vertical-align: middle;
		margin: 0 1rem;
	}
</style>
