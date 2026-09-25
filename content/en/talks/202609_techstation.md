---
title: "More compute for less energy: rethinking the computer"
pubdate: 2026-09-24
featured_image: slides/_assets/chiptobrain.png
aliases:
  - /posts/talks/202609_techstation/
venue: "TechStation"

---

A TechTalk (in Danish) at [TechStation](https://www.techstation.nu/), the hard-tech innovation hub in Hellerup, aimed at founders and engineers, on moving signal and edge processing into the sensor itself.

<!--
DRAFT NOTE:
- `pubdate:` is a guess &mdash; the deck was last edited on 24 September, and the
  slides only say "september 2026". Fix it if the talk was another day.
- `draft: true` so it stays unpublished until you flip it.
- The title is my rendering of "Mere compute for mindre energi / Hvordan vi kan
  gentænke computere" &mdash; rewrite if you want the Danish headline instead.
- The paragraph below is a table of contents drawn from your own slides, not new
  claims. The thesis line and the three asks are left for you to phrase.
-->

The talk covers (1) what edge sensing costs today &mdash; the sensors are ready, the pipeline is not, and the analogue-to-digital conversion is the expensive part; (2) the case for mixed-signal &mdash; letting the physics compute and keeping binary events as the only digital quantity, with spiking wavelet frames as the guarantee that the signal survives the spikes ([arXiv:2602.02020](https://arxiv.org/abs/2602.02020)); (3) where it applies &mdash; wearable ECG, hearing aids, acoustic arrays, vision and condition monitoring &mdash; including an ECG frontend compiled through the Neuromorphic Intermediate Representation ([Nature Communications, 2024](https://www.nature.com/articles/s41467-024-52259-9)) to an FPGA, and covariant spatio-temporal receptive fields for vision ([Nature Communications, 2025](https://www.nature.com/articles/s41467-025-63493-0)); and (4) what can be bought today versus what still has to be built, and three concrete proposals for taking it further.

Slides [are available here](/slides/2609_techstation/).
