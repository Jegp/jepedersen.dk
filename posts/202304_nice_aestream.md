---
title: AEStream: Accelerated event-based processing with coroutines
pubdate: 2023/04/11
image: slides/2304_NICE/aestream.svg
---

We published a paper on the technologies behind the event-based processing library, [AEStream](https://github.com/aestream/aestream).
Specifically, we used coroutines to demonstrate that we can achieve *at least* 2x speedups on conventional CPUs and GPUs, compared to parallelization approaches that does not use coroutines.

The work contributes
1. A plug-and-play library that streams events *from* files, event cameras, network *to* files, CPUs/GPUs, network, and Python machine learning frameworks such as Numpy, Tensorflow, PyTorch, and Jax
2. 3x throughput for events on CPUs on average
3. 5x throughput for events on GPUs on average

Please find the paper, presentation slideshow, and website along with steps to reproduce our findings below
* **Paper**: [AEStream: Accelerated event-based processing with coroutines](https://dl.acm.org/doi/10.1145/3584954.3584997)
* **Paper website**: [AEStream: Accelerated event-based processing with coroutines](https://jegp.github.io/aestream-paper/)
* **Slideshow**: [Accelerating event-based processing with coroutines on CPUs and GPUs (website)](https://jepedersen.dk/slides/2304_NICE/2304_aestream.html)
* **Library**: [AEStream library on GitHub](https://github.com/aestream/aestream/)