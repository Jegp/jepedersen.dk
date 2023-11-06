<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>J. E. Pedersen</title>
</svelte:head>

<div class="container">
  <p>Research, thoughts, and notes of Jens E. Pedersen.</p>
  <p>
    <iframe
      src="https://github.com/sponsors/Jegp/button"
      title="Sponsor Jegp"
      height="35"
      width="116"
      style="border: 0;"
    />
    &nbsp;
  </p>
  <br />
  <br />

  <h1>Posts</h1>
  <br />
  <div class="flex-container">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <div>
        <a rel="prefetch" href="{post.slug}">
          {#if post.image}
            <figure>
              <span><img src={post.image} alt="" /></span>
            </figure>
          {/if}
          <h3>{post.title}</h3>
        <span class="date">{post.pubdate}</span>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    text-align: center;
  }

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

  h1 {
    font-size: 2.5em;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0.25em 0 0.0625em;
  }

  .flex-container {
    align-content: space-around;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 20px;
    justify-content: center;
  }

  .flex-container div {
    border: 2px solid #f1f1f1;
    border-radius: 1rem;
    box-shadow: 3px 2px 6px #f1f1f1;
    display: flex;
    padding: 1em;
    position: relative;
	margin-left: auto;
	margin-right: auto;
    text-align: center;
    flex: 1;
  }

  .flex-container div a {
    display: inline-block;
    align-self: flex-end;
	text-decoration: none;
    word-wrap: break-word;
    font-size: 130%;
    margin: 0 auto;
  }
  .flex-container div a h3 {
	text-decoration: underline;
  font-weight: bold;
  color: #55C;
  }

  .date {
    color: rgba(0, 0, 0, 0.5);
    font-size: 90%;
  }

  @media (max-width: 600px) {
    .flex-container {
      flex-direction: column;
    }
  }
</style>
