---
title: "Research"
description: 'Research agenda and publications of Jens Egholm Pedersen'
featured_image: 'img/2401_jens_robots.png'
aliases:
  - /posts/
menu:
  main:
    weight: 10
---

## Research agenda

My goal is to understand and apply brain-inspired intelligence that live in the real, physical world.
I work both theoretically to understand the fundamental principles of physical computing,
and practically to build and solve problems with present-day neuromorphic platforms.

[More about me and my background](/about/)

## Research threads

### Closing the representational gap

Physical systems evolve, but only some of them compute. Building on [Horsman's
*representation relation*](https://doi.org/10.1098/rspa.2014.0182) and
[Yanofsky's structure-preserving maps](https://doi.org/10.1017/9781108872348), I ask what
has to hold for a physical substrate to faithfully carry an abstract
computation and what it costs when it does not. That cost is very real:
up to 27–36 orders of magnitude separate what physics needs from what digital
computers spend ([Shankar, 2023](https://arxiv.org/abs/2310.07516)). Closing the gap means aligning computation with the physics
that runs it, and exploiting the sparsity of a signal rather than evaluating
every path. The [Neuromorphic Intermediate
Representation](https://www.nature.com/articles/s41467-024-52259-9)
instantiates part of that today.
A physically faithful compiler is the longer goal.

### Covariant signal processing with spiking neurons

Biological sensing does not merely tolerate transformations and noise, it tracks
them ([Lettvin et al., 1959](https://doi.org/10.1109/JRPROC.1959.287207)). I
work on giving spiking neural networks the same property: *covariance* rather
than invariance. Meaning, a change of scale or velocity in the input produces a
predictable change in the response.
The construction runs from spatial and temporal receptive fields to full
[spatio-temporal
covariance](https://www.nature.com/articles/s41467-025-63493-0), and from
there to [scale-covariant spiking wavelets](https://arxiv.org/abs/2602.02020).
What makes this a thread rather than a paper is that the guarantee is not
specific to vision: the same machinery carries to audio and other signals.

### Interoperability and deployment

[Theory that cannot be run is not yet science](/blog/202505_research/).
NIR gives neuromorphic models a common compilation target so they can move between platforms; it is now
supported widely in the neuromorphic software and hardware communities.
Beyond portability, the question is whether these systems survive real constraints: power,
latency and scalability at, say, hearing-aid budgets rather than articifically constructed benchmark conditions.
That needs [benchmarks measuring embodied behaviour](https://www.nature.com/articles/s42256-026-01197-w) rather than
accuracy alone, and [maintained libraries](/code/) rather than code written
once for one paper.

## Selected publications

### 2026

* **[Encoding and decoding temporal signals with spiking bandpass wavelets](https://arxiv.org/abs/2605.09770)**  
  Jens Egholm Pedersen, Tony Lindeberg, Peter Gerstoft  
  *arXiv preprint, 2026*

* **[A benchmarking framework for embodied neuromorphic agents](https://www.nature.com/articles/s42256-026-01197-w)**  
  Giulia D'Angelo, Jens Egholm Pedersen, Taimoor Hassan, et al.  
  *Nature Machine Intelligence, March 2026*

* **[Scale-covariant spiking wavelets](https://arxiv.org/abs/2602.02020)**  
  Jens Egholm Pedersen, Tony Lindeberg, Peter Gerstoft  
  *IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026*

### 2025

* **[Covariant spatio-temporal receptive fields for spiking neural networks](https://www.nature.com/articles/s41467-025-63493-0)**  
  Jens Egholm Pedersen, Jörg Conradt, Tony Lindeberg  
  *Nature Communications, September 2025*

* **[GERD: Geometric event response data generation](http://arxiv.org/abs/2412.03259)**  
  Jens Egholm Pedersen, Dimitrios Korakovounis, Jörg Conradt  
  *arXiv preprint, in review, 2025*

* **[Low-latency neuromorphic air hockey player](https://iopscience.iop.org/article/10.1088/2634-4386/addc15)**  
  Juan P. Romero B., Dimitrios Korakovounis, Jens E Pedersen, and Jorg Conradt  
  *Journal of Neuromorphic Computing and Engineering, 2025*

### 2024

* **[Neuromorphic Programming: Emerging Directions for Brain-Inspired Hardware](https://ieeexplore.ieee.org/abstract/document/10766507)**  
  Steven Abreu, Jens Egholm Pedersen  
  *International Conference on Neuromorphic Systems, 2024*

* **[Q-S5: Towards Quantized State Space Models](https://arxiv.org/abs/2406.09477)**  
  Steven Abreu, Jens Egholm Pedersen, Kade Heckel, Alessandro Pierro  
  *Next Generation of Sequence Modeling Architectures, ICML, 2024*

* **[Neuromorphic intermediate representation: A unified instruction set for interoperable brain-inspired computing](https://www.nature.com/articles/s41467-024-52259-9)**  
  Jens Egholm Pedersen, Steven Abreu, Jason Eshraghian, et al.  
  *Nature Communications, September 2024*

### 2023

* **[AEStream: Accelerated event-based processing with coroutines](https://dl.acm.org/doi/10.1145/3584954.3584997)**  
  Jens Egholm Pedersen, Jörg Conradt  
  *Neuro Inspired Computational Elements Workshop, April 2023*

* **[Translation and Scale Invariance for Event-Based Object tracking](https://dl.acm.org/doi/10.1145/3584954.3584996)**  
  Jens Egholm Pedersen, Raghav Singhal, Jörg Conradt  
  *Neuro Inspired Computational Elements Workshop, April 2023*

### 2021

* **[Norse - A deep learning library for spiking neural networks](https://github.com/norse/norse)**  
  Christian Pehle, Jens Egholm Pedersen  
  *GitHub, January 2021*

### 2019

* **[Modelling learning systems in artificial and spiking neural networks](https://github.com/jegp/thesis)**  
  Jens Egholm Pedersen  
  *Master Thesis, University of Copenhagen, 2019*

### 2018

* **[Understanding the neurocognitive organization as strategies rather than functions: Implications for neurological research](https://www.semanticscholar.org/paper/29834f89cbc262714471c2ac1a10849f283eb9a9)**  
  J. Mogensen, Nicolaj Daugaard, Stavros Kitsios, Jens Egholm Pedersen, M. Overgaard  
  *2018*


{{< cta href="https://www.semanticscholar.org/author/Jens-Egholm-Pedersen/2146807252" variant="secondary" >}}Find more publications on Semantic Scholar{{< /cta >}}
