---
title: "Neuromorphic computation and intelligence"
description: "Research and thoughts of Jens Egholm Pedersen"
theme_version: '2.8.2'
cascade:
  featured_image: '/img/guorbivaggi.jpg'
menu:
  main:
    weight: 1
    name: "Home"
    url: "/"
---

<div class="mw8 center ph3 pv4 measure-wide">
  
  <header class="tc pb4">
    <p class="f4 f3-ns lh-copy measure center gray">
      Research and development in 
      {{<ico vendor=bootstrap name=lightbulb-fill color=#ffc107 size=1em >}} intelligence, 
      {{<ico vendor=bootstrap name=robot size=1em >}} machine learning, and 
      {{<ico vendor=bootstrap name=cpu-fill size=1em >}} neuromorphic engineering 
      by <a href="about/" class="link blue dim">Jens Egholm Pedersen</a>.
    </p>
  </header>

  <div class="bt b--light-gray pt4 mt4">
    <section class="pb4">
      <h2 class="f2 fw6 mb3">Research Focus</h2>
      <div class="measure-wide lh-copy f4">
        <p class="mb3">
          I develop <strong>spatiotemporal computation frameworks for brain-inspired systems</strong>, 
          bridging neuroscience and artificial intelligence. My work focuses on creating practical 
          tools and theoretical foundations for neuromorphic computing.
        </p>
        <div class="bg-light-gray pa3 br2 mb3">
          <h3 class="f5 fw6 mb2">Key Projects</h3>
          <ul class="list pl0">
            <li class="mb2">
              <a href="https://neuroir.org" class="link blue dim fw6">Neuromorphic Intermediate Representation (NIR)</a> 
              — A standard for bio-inspired computing
            </li>
            <li class="mb2">
              <a href="https://github.com/norse/norse" class="link blue dim fw6">Norse</a> 
              — Spiking neural networks in PyTorch
            </li>
            <li class="mb2">
              <a href="https://github.com/aestream/faery" class="link blue dim fw6">Faery</a> 
              — Event data processing
            </li>
            <li class="mb2">
              <a href="https://arxiv.org/abs/2405.00318" class="link blue dim fw6">Geometric methods</a> 
              — For neuromorphic receptive fields
            </li>
          </ul>
        </div>
        <a href="/posts/" class="db w-100 tc pv3 ph3 br2 bg-dark-blue white hover-bg-navy no-underline f5 fw6">
      {{<ico vendor=bootstrap name=arrow-right size=1em >}} Read more about my research
    </a>
      </div>
    </section>
  </div>

  <div class="bt b--light-gray pt4 mt4">
    <section class="pb4">
      <h2 class="f2 fw6 mb3">Open Source Contributions</h2>
      <div class="measure-wide lh-copy f4">
        <p class="mb4">
          I maintain several core libraries for the neuromorphic computing community:
        </p>
        <div class="grid-container mb4">
          <div class="bg-white ba b--light-gray br2 pa3 mb3">
            <h3 class="f5 fw6 mb2">
              <a href="https://neuroir.org" class="link blue dim">NIR</a>
            </h3>
            <p class="f6 gray mb2">Standard for bio-inspired computing</p>
            <div class="f7">
              <img src="https://img.shields.io/github/stars/neuromorphs/nir?style=flat-square" alt="GitHub stars" class="v-mid mr2">
              <a href="https://pypi.org/project/nir/" alt="PyPi NIR">
                <img src="https://img.shields.io/pepy/dt/nir?label=PyPi%20Downloads&style=flat-square" class="v-mid" />
              </a>
              <a href="https://anaconda.org/conda-forge/nir" alt="Conda NIR repository">
                <img src="https://img.shields.io/conda/dn/conda-forge/nir?label=Conda%20Downloads&style=flat-square" class="v-mid"/>
              </a>
            </div>
          </div>
          <div class="bg-white ba b--light-gray br2 pa3 mb3">
            <h3 class="f5 fw6 mb2">
              <a href="https://norse.github.io/norse" class="link blue dim">Norse</a>
            </h3>
            <p class="f6 gray mb2">Spiking neural network library</p>
            <div class="f7">
              <img src="https://img.shields.io/github/stars/norse/norse?style=flat-square" alt="GitHub stars" class="v-mid mr2">
              <a href="https://pypi.org/project/norse/" alt="PyPi Norse">
                <img src="https://img.shields.io/pepy/dt/norse?label=PyPi%20Downloads&style=flat-square" class="v-mid" />
              </a>
              <a href="https://anaconda.org/conda-forge/norse" alt="Conda Norse repository">
                <img src="https://img.shields.io/conda/dn/conda-forge/norse?label=Conda%20Downloads&style=flat-square" class="v-mid"/>
              </a>
            </div>
          </div>
          <div class="bg-white ba b--light-gray br2 pa3 mb3">
            <h3 class="f5 fw6 mb2">
              <a href="https://aestream.github.io/aestream" class="link blue dim">AEStream</a>
            </h3>
            <p class="f6 gray mb2">Streams sparse event data</p>
            <div class="f7">
              <a href="https://github.com/aestream/aestream" alt="AEStream GitHub repository">
                <img src="https://img.shields.io/github/stars/aestream/aestream?style=flat-square" alt="GitHub stars" class="v-mid mr2">
              </a>
              <a href="https://pypi.org/project/aestream/" alt="PyPi AEStream">
                <img src="https://img.shields.io/pepy/dt/aestream?label=PyPi%20Downloads&style=flat-square" class="v-mid" />
              </a>
              <a href="https://anaconda.org/conda-forge/aestream" alt="Conda AEStream repository">
                <img src="https://img.shields.io/conda/dn/conda-forge/aestream?label=Conda%20Downloads&style=flat-square" class="v-mid"/>
              </a>
            </div>
          </div>
          <div class="bg-white ba b--light-gray br2 pa3 mb3">
            <h3 class="f5 fw6 mb2">
              <a href="https://github.com/aestream/faery" class="link blue dim">Faery</a>
            </h3>
            <p class="f6 gray mb2">Process event camera data</p>
            <div class="f7">
              <a href="https://github.com/aestream/faery" alt="Faery GitHub repository">
                <img src="https://img.shields.io/github/stars/aestream/faery?style=flat-square" alt="GitHub stars" class="v-mid mr2">
              </a>
              <a href="https://pypi.org/project/faery/" alt="PyPi Faery">
                <img src="https://img.shields.io/pepy/dt/faery?label=PyPi%20Downloads&style=flat-square" class="v-mid" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap2">
          <a href="/posts/code/" class="flex-auto tc pv3 ph3 br2 bg-dark-blue white hover-bg-navy no-underline f5 fw6">
            {{<ico vendor=bootstrap name=arrow-right size=1em >}} View all projects
          </a>
          <a href="https://github.com/sponsors/Jegp" class="flex-auto tc pv3 ph3 br2 ba b--dark-blue dark-blue hover-bg-light-blue no-underline f5 fw6">
            {{<ico vendor=bootstrap name=heart-fill color=#fe8e86 size=1em >}} Sponsor my work
          </a>
        </div>
      </div>
    </section>
  </div>

  <div class="bt b--light-gray pt4 mt4">
    <section class="pb4">
      <h2 class="f2 fw6 mb3">Speaking & Media {{<ico vendor=bootstrap name=megaphone size=1.2em >}}</h2>
      <div class="measure-wide lh-copy f4">
        <p class="mb3">
          I work to increase visibility of neuromorphic computing in AI and broader scientific 
          communities through conference presentations, interviews, and public engagement.
        </p>
        <a href="/posts/talks/" class="db w-100 tc pv3 ph3 br2 bg-dark-blue white hover-bg-navy no-underline f5 fw6">
          {{<ico vendor=bootstrap name=play-btn size=1em >}} Watch talks and media appearances
        </a>
      </div>
    </section>
  </div>

</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

@media screen and (max-width: 30em) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.gap2 {
  gap: 0.5rem;
}
</style>