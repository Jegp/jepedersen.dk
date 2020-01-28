# Sapper Markdown Site with Svelte v3 (GitLab Pages Version)

## Intro

This modified [Sapper](https://sapper.svelte.dev/) template uses [Markdown](https://daringfireball.net/projects/markdown/) for posts and [Svelte 3](https://svelte.dev/).

Visit <https://rdela.gitlab.io/sapper-v3/> to see it in action

To clone it and get started:

```bash
git clone https://gitlab.com/rdela/sapper-v3.git
cd sapper-v3
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000/sapper-v3](http://localhost:3000/sapper-v3) and start clicking around.

## GitLab Pages Adjustments

To accommodate [GitLab Pages](https://gitlab.com/help/user/project/pages/index.md), we are making use of [Sapper's base URL support](https://sapper.svelte.dev/docs#Base_URLs) to alter the base path to `sapper-v3/`.

See:

- [.gitlab-ci.yml#L31](https://gitlab.com/rdela/sapper-v3/blob/master/.gitlab-ci.yml#L31)
- [package.json#L11](https://gitlab.com/rdela/sapper-v3/blob/master/package.json#L11)
- [server.js#L11](https://gitlab.com/rdela/sapper-v3/blob/master/src/server.js#L11)

## Netlify + Root Directory Version

For a version that builds with Netlify instead of GitLab Pages and uses the root directory (`/`) instead of making use of base URL/`basepath`, visit <https://kokodokai.com/> or clone <https://github.com/rdela/kokodokai>:

```bash
git clone https://github.com/rdela/kokodokai.git
cd kokodokai
npm install # or yarn
npm run dev # or yarn dev
```

Open up [localhost:3000](http://localhost:3000/) and start clicking around.

## Sources

Derived from <https://github.com/pngwn/sapper-v3> and <https://github.com/sveltejs/sapper-template>. For a non-markdown version of the official template, follow the [Using `degit` for Rollup instructions](https://github.com/sveltejs/sapper-template/blob/master/README.md#getting-started):

```sh
npx degit "sveltejs/sapper-template#rollup" my-app
cd my-app
npm install # or yarn
npm run dev
```

Note [via pngwn, Dec 27, 2018](https://github.com/pngwn/sapper-v3/commit/db2d2e5f16873b40b5525f325bdae31d3e2d63bb#diff-04c6e90faac2675aa89e2176d2eec7d8R5): Right now, Sapper seems to expect a preload function to be exported from every route, it will still work without one but it will give you warnings. You can just [`return` nothing from preload](https://gitlab.com/rdela/sapper-v3/blob/master/src/routes/about.svelte#L26) to silence it.

&nbsp;

<a href="https://sapper.svelte.dev/"><img src="./static/sapper-markdown-gl-512.png" width="128" height="128" /></a>
