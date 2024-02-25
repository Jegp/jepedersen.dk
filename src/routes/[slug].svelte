<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

{#if post.metadata.video}
<iframe height="500"
src="{post.metadata.video}" title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
{/if}

{#if post.metadata.image && !post.metadata.video}
  <figure>
    <img src={post.metadata.image} alt="" />
    {#if post.metadata.caption}
      <figcaption>
        {#if post.metadata.captionlabel}
          {post.metadata.captionlabel}
        {/if}
        {#if post.metadata.captionlink}
          <a href={post.metadata.captionlink}>
            {post.metadata.caption}
          </a>
        {:else}
          {post.metadata.caption}
        {/if}
      </figcaption>
    {/if}
  </figure>
{/if}

<section class="content">
  <h1>{post.metadata.title}</h1>
  <span class="date">{post.metadata.pubdate}</span>
  {@html post.html}
</section>

<!-- Force-insert style -->
<div>
  <style>
	h2 {
		margin: 2rem 0.3rem;
	}
    .content figure {
      border: 1px solid #333;
      border-left: 0;
      border-right: 0;
      text-align: center;
      padding: 0.5em 0;
    }
    .content img {
      max-width: 100%;
      margin: 0 auto;
    }
    .content .caption {
      font-size: 80%;
    }
	.footnote-a {
		vertical-align: super;
		margin: 3px;
	}
	.footnotes {
		font-size: 70%;
	}
  </style>
</div>

<style>
  figure {
    margin: 0 auto;
  }

  figure img {
    height: auto;
    max-height: 384px;
    max-width: 100%;
  }

  iframe {
    display: block;
    margin: 0 auto;
    width: 50%;
  }

  figcaption {
    display: block;
    font-size: 0.875em;
    font-style: italic;
    padding: 0 1em;
  }

  .content {
    max-width: 40em;
    padding: 1em 2em 2em;
    margin: 0 auto;
    text-align: left;
  }

  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>
