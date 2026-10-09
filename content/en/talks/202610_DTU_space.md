---
title: "Structure-preserving receptive fields unlock microsecond-latency event-based sensory processing"
pubdate: 2026-10-08
featured_image: slides/_assets/swavelet_hero.png
aliases:
  - /posts/talks/202610_dtu_space/
venue: "DTU Space"

---

A talk at a [DTU Space](https://www.space.dtu.dk/) workshop on neuromorphic imaging in space, held at DTU on 7-8 October 2026, for a room of space scientists, mission engineers and event-vision groups &mdash; ISS payloads, lightning campaigns, space situational awareness, ESA, and industry.

<!--
DRAFT NOTE: the paragraph below is a table of contents drawn from your own slides,
not new claims. The framing sentence and anything you want to assert are yours to
write &mdash; rewrite freely, or cut it to a single line.
-->

Event sensors now fly, but the pipelines that consume them are still built by hand, and typically end by accumulating events back into frames for a GPU. The talk argues for staying in the spike domain, with two guarantees that make it safe to do so: wavelet frame bounds, so the signal is stably recoverable from spikes with a quoted error ([arXiv:2602.02020](https://arxiv.org/abs/2602.02020)), and covariance, so features transform predictably when the scene moves or rescales ([Nature Communications, 2025](https://www.nature.com/articles/s41467-025-63493-0)). Together they license structure-preserving latent spikes: a threshold that trades event rate against reconstruction error, with the bound saying what is lost &mdash; distinct from entropy coding, trained autoencoders or learned codecs. The talk closes on hardware: compiling such pipelines to FPGA through the Neuromorphic Intermediate Representation ([Nature Communications, 2024](https://www.nature.com/articles/s41467-024-52259-9)), computing before readout the way a retina does, and the spiking ADC that follows from it.

Slides [are available here](/slides/2610_dtu_space/).
