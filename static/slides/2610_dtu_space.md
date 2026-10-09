---
theme: default
title: "Structure-preserving receptive fields"
info: |
  DTU Space — workshop on neuromorphic imaging in space, DTU, 7-8 October 2026
  Thursday 16:00-16:20, building 101 room s12 — last talk before mingling
  Target: ~15 min talk + ~5 min questions
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Structure-preserving receptive fields

## ... unlock microsecond-latency event-based sensory processing

<img src="/_assets/swavelet_hero.png" class="h-32 mx-auto my-2"/>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

Postdoc, DTU Electro

DTU Space &mdash; *Neuromorphic imaging in space* &mdash; 8 October 2026


---

# What the last two days established

<div class="grid grid-cols-2 gap-8 text-sm mt-4">
<div>

**The sensors fly, and they work**

- ISS: Falcon Neuro / ODIN, Thor-Davis &rarr; DAVIS-LI
- Ground + near-space: BOOTES, Greenland SST, balloons
- Lightning: Spain, Croatia, Säntis, HV lab reconstruction
- Ruggedisation, radiation, qualification: Terma, Coros, ESA

</div>
<div>

**We hit similar walls downstream**

- Data volume vs. downlink
- Noise filtering chosen per site, per campaign
- &mu;s phenomena, but ms pipelines
- Jetson/GPU in the loop &mdash; SWaP, and a clock

</div>
</div>

<v-click>

<div class="mt-6 p-3 bg-yellow-50 rounded-lg text-center">

**The sensor is asynchronous and low-powered, but...**

</div>

</v-click>

---

# ...the pipelines are not

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

We can build the circuits &mdash; but the pipelines that consume them are mostly synchronous and hand-tuned.

<v-clicks>

- Filters chosen **empirically**, tuned per dataset
- No principled answer to whether the spike stream still contains the signal
- No account of what happens when the scene **transforms**
- Present solution: accumulate to frames, and hand it to a GPU

</v-clicks>

<v-click>

<div class="mt-6 p-3 bg-red-50 rounded-lg text-center text-sm">

**Building frames and handing off to GPUs defeat the point of asynchronous event processing - and ruin the competitive edge**

</div>

</v-click>

</div>
<div>

<img src="/_assets/programming_nm.png" class="h-60 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Abreu &amp; Pedersen, 2024</p>

</div>
</div>


---
layout: section
---

# Part I
## Two guarantees
### Stable recovery &middot; covariance

---

# Guarantee 1 &mdash; the signal survives the spikes

## Wavelet and wavelet bounds

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div class="text-sm">

A wavelet atom

$$\psi(t; a, b) = |a|^{-1/2} \, \psi\left((t - b)/a\right)$$

<v-click>

A wavelet transform

$$
\begin{aligned}
\big(T(f)\big)(t; a, b) & = \langle f(t), \psi(t; a, b) \rangle                                                              \\
                        & = \int_{-\infty}^{\infty} f(t) \, |a|^{-1/2} \, \overline{\psi \left((t - b)/a \right)}\ {\rm d}t
\end{aligned}
$$

</v-click>

<v-click>

Frame bounds

$$
A \, \|f\|^2 \leqslant \sum_{k \in K} |\langle f, \psi_k\rangle |^2 \leqslant B \, \|f\|^2
$$

</v-click>

</div>
<div>

<img src="/_assets/wavelet_tiling.png" class="w-full"/>
<p class="text-xs text-gray-400 text-center mt-2">
Mallat, <em>A Wavelet Tour of Signal Processing: The Sparse Way</em>, 2009
</p>

</div>
</div>

---

# Guarantee 1 &mdash; the signal survives the spikes

## Scale-parameterized signal representations

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div class="text-sm">

Lowpass

$$L(t;\ \sigma) = h(t;\ \sigma) * f(t) = \int_{\xi = -\infty}^{\infty} h(\xi;\ \sigma) \, f(t - \xi) \, {\rm d}\xi$$

$h_{\rm Gauss}(t;\; \sigma) = \frac{1}{\sqrt{2 \pi}\sigma}e^{-\frac{t^2}{2\sigma^2}} \qquad h_{\rm exp}(t;\; \mu) = \begin{cases}
        \mu^{-1} \exp{(-t / \mu)} & t > 0          \\
        0                                             & t \leqslant 0\end{cases}$

<v-click>

Bandpass

$$
\Delta L(t;\; \sigma_k, c) = L(t;\; \sigma_k, c) - L(t;\; \sigma_{k-1}, c) = \psi(t;\; \sigma_k,c) * f(t)
$$

</v-click>

<v-click>

In fact, spikes are a quantized indicator of a scaled representations up to error

$$\epsilon \leqslant C\ \theta_{\rm thr} \Omega,$$

where $\theta_{\rm thr}$ is a threshold, $\Omega$ is the filter bandwidth, $C$ is some constant.

</v-click>

</div>
<div>

<img src="/_assets/scale_space_kernels.png" class="w-full"/>
<p class="text-xs text-gray-400 text-center mt-2">
Pedersen et al., <em>Encoding and Decoding Temporal Signals with
Spiking Bandpass Wavelets</em>, 2026
</p>

</div>
</div>

---

# Guarantee 1 &mdash; the signal survives the spikes

## Spiking wavelets

<img src="/_assets/swavelet_hero.png" class="h-28 mx-auto my-2"/>


<img src="/_assets/swavelet_encode_decode.png" class="h-60 mx-auto" alt="Signal, per-channel spike trains, and reconstruction for ECG and speech"/>
<p class="text-xs text-gray-400 text-center mt-1">
Pedersen et al., <em>Encoding and Decoding Temporal Signals with Spiking Bandpass Wavelets</em>, 2026
</p>


---

# Guarantee 2 &mdash; features survive motion and scale

<p class="text-sm text-gray-400 -mt-3 mb-2">Covariant spatio-temporal receptive fields</p>

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

Typical processing rely on frames and ANNs

* ANNs ignore crucial temporal structures
* ANNs collapse 

We want **covariance**, not **invariance**.

<v-click>

$$g \cdot \phi = \phi' \cdot g'$$

</v-click>

<v-click>

We prove covariance for affine, Galilean, and temporal scaling

</v-click>

</div>
<div>

<div class="grid grid-cols-2 gap-6 my-4 items-end">
<div>
<img src="/_assets/covariance_square.png" class="h-28 mx-auto" alt="Covariance: the square commutes, the action is retained"/>
<p class="text-xs text-gray-400 text-center mt-1">covariant &mdash; keeps g</p>
</div>
<div>
<img src="/_assets/invariance_triangle.png" class="h-28 mx-auto" alt="Invariance: the triangle collapses, the action is discarded"/>
<p class="text-xs text-gray-400 text-center mt-1">invariant &mdash; discards g</p>
</div>
</div>

</div>
</div>

---

# Guarantee 2 &mdash; features survive motion and scale


<img src="/_assets/rf_scale_covariance.png" class="w-full mt-2" alt="Expanding squares at three temporal scales, and receptive fields across spatial and temporal scales"/>

<p class="text-xs text-gray-400 text-center">Pedersen, Conradt &amp; Lindeberg, Nature Communications, 2025</p>

---

# Guarantee 2 &mdash; features survive motion and scale

<div class="text-sm mb-2">

TODO &mdash; one line: same scene, same network, the input gets sparser.

</div>

<div class="flex justify-center">
<div style="width: 192px;">
  <div class="relative" style="height: 144px;">
    <video src="/_assets/circle_dense_coo.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full rounded shadow"/>
    <div v-click="2" class="absolute inset-0 bg-white">
      <video src="/_assets/circle_sparse_coo.mp4" autoplay loop muted playsinline class="w-full rounded shadow"/>
    </div>
  </div>
  <div class="relative" style="height: 22px;">
    <p class="absolute inset-0 text-xs text-gray-400 text-center m-0">dense</p>
    <p v-click="2" class="absolute inset-0 text-xs text-gray-400 text-center m-0 bg-white">sparse &mdash; fewer events</p>
  </div>
</div>
</div>

<div class="flex justify-center mt-4">
<div style="width: 640px;">
  <div class="relative" style="height: 160px;">
    <video v-click="1" src="/_assets/circle_dense_predictions.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full rounded shadow"/>
    <video v-click="3" src="/_assets/circle_sparse_predictions.mp4" autoplay loop muted playsinline class="absolute inset-0 w-full rounded shadow bg-white"/>
  </div>
  <div class="relative" style="height: 22px;">
    <p v-click="1" class="absolute inset-0 text-xs text-gray-400 text-center m-0">Events &middot; ANN &middot; LI &middot; LIF &mdash; <b>dense</b> stream</p>
    <p v-click="3" class="absolute inset-0 text-xs text-gray-400 text-center m-0 bg-white">Events &middot; ANN &middot; LI &middot; LIF &mdash; <b>sparse</b> stream</p>
  </div>
</div>
</div>

<p class="text-xs text-gray-400 text-center mt-1">Pedersen, Conradt &amp; Lindeberg, Nature Communications, 2025</p>


---

# Combined: structure-preserving latent spikes


<img src="/_assets/swavelet_hero.png" class="h-40 mx-auto my-2"/>

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<div class="p-3 bg-blue-50 rounded-lg text-xl">

We suggest to exploit

1) Frame bounds to provide stable **spiking signal representation**
2) **Provable covariance guarantees** to downsample the stream of events

</div>

</div>
<div>

<v-click>

### On FPGA

<img src="/_assets/nir2fpga_table.png" class="h-40 mx-auto"/>
<p class="text-xs text-gray-400 text-center">nRMSE vs. threshold; event rates in parentheses</p>

</v-click>

</div>
</div>
<div class="text-center">
<v-click >
Note, this is different from (entropy) coding, trained autoencoders, or learned codecs.
</v-click>
</div>


---
layout: section
---

# Part II
## Onto hardware
### Compiled, not hand-ported

---

# From model to hardware, through NIR

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

Neuromorphic Intermediate Representation (NIR)

Unifies deployment of models across **14+ platforms**

<v-clicks>

- **NIR** defines primitives as **continuous-time ODEs**
- Vendors implement the same ODEs
    - Train anywhere &rarr; NIR &rarr; deploy anywhere
- Intel Loihi, SynSense Speck & Xylo, SpiNNaker2, BrainScaleS, FPGA, MLIR, ONNX, ...
- Model zoo at: https://synfire.dev

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-orange-50 rounded-lg text-sm">

**Preliminary &mdash; NIR2FPGA:** spiking wavelets &rarr; NIR &rarr; FPGA

</div>

</v-click>

</div>
<div>

<img src="/_assets/nir_platforms.png" class="h-80 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Pedersen et al., Nature Communications, 2024</p>

</div>
</div>

---

# 1. Compute before readout &mdash; like a retina

<div class="grid grid-cols-[2fr_3fr] gap-6 items-center">
<div>

<div class="p-3 bg-purple-50 rounded-lg text-sm">

</div>

<v-clicks>

- The retina transmits **computed** quantities
- Here, filtering happens **before** the spike
- A "spiking ADC": the conversion **is** the first layer of processing
- The spikes **retain signal structure**

</v-clicks>

</div>
<div>
<div class="text-center text-sm">

**Conventional**

```mermaid {scale: 0.62}
graph LR
A["Signal"] --> B["ADC"] --> HW --> D["DAC"] --> E["Output"]
subgraph HW["GPU"]
  direction LR
  C["ANN"]
end
style B fill:#ffcdd2
style C fill:#ffcdd2
style D fill:#ffcdd2
```

</div>
<div class="text-center text-sm mt-1">

**Ours**

```mermaid {scale: 0.62}
graph LR
A["Signal"] --> NM --> E["Output"]
subgraph NM["Neuromorphic acceleration"]
    direction LR
    B["Spiking ADC"] --> C["SNN"] --> D["Spike decode"]
end
style B fill:#e8f5e9
style C fill:#c8e6c9
style D fill:#e8f5e9
style NM fill:#f3e5f5,stroke:#9c27b0
```

</div>
</div>
</div>


---

# 2. Structured events compress

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

- We can now do wavelet compression (with spikes)
- The threshold as trade-off, the bound says what you lose
- Covariance guarantees correctness under scene transformation

</div>
<div>

<img src="/_assets/nir2fpga_table.png" class="h-40 mx-auto"/>
<p class="text-xs text-gray-400 text-center">The dial, measured: rate (in parentheses) against nRMSE</p>

</div>
</div>


---

# Thank you

<div class="text-lg my-6">

### Structure-preserving receptive fields unlock microsecond-latency event-based sensory processing

</div>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

**Thanks**: Peter Gerstoft (pegers@dtu.dk), Jörg Conradt (conr@kth.se), Tony Lindeberg (KTH), Michail Rontionov (Southhampton)

<div class="grid grid-cols-2 gap-8 text-left text-sm mx-auto mt-6" style="max-width: 600px;">
<div>

**Papers**

- [Spiking bandpass wavelets (2026)](https://arxiv.org/abs/2605.09770)
- [Spatio-temporal receptive fields (2025)](https://www.nature.com/articles/s41467-025-63493-0)
- [NIR (2024)](https://www.nature.com/articles/s41467-024-52259-9)

</div>
<div>

**Resources**

- [open-neuromorphic.org](https://open-neuromorphic.org)
- [snnbook.net](https://snnbook.net)
- [jepedersen.dk](https://jepedersen.dk)

</div>
</div>

<br/>

<p class="text-xs mt-4 opacity-50">Support from the Novo Nordisk Foundation (NNF24OC0089302)</p>

---
layout: section
---

# Backup

---

# Backup &mdash; wavelet "frame", not video "frame"

<div class="p-3 bg-yellow-50 rounded-lg text-sm">

Analysis: $\boldsymbol{T}\colon V \to \ell^2. \qquad \qquad$ Synthesis: $\boldsymbol{T}^\star \colon \ell^2 \to V$

</div>

TODO &mdash; port the full two-state SVG from `2609_EdgeAI.md` (slide 2) if you keep the
terminology in the main line. Otherwise this stays as the one-liner for Q&A.

---

# Backup &mdash; covariance, the limit

- Exact in continuous time; on hardware it holds across the scales you actually build
- The 42.4% figure in older decks is the L2 improvement over **uniform initialisation**,
  not over an ANN baseline &mdash; do not repeat it
- Cohen's *d* is the effect size the paper reports

---

# Backup &mdash; the energy claim in the abstract

<div class="p-3 bg-red-50 rounded-lg text-sm">

The abstract promises *"a fraction of the energy of frame-based solutions"*.
**There is no measured number.** Prepare the answer before someone asks.

</div>

TODO &mdash; the claim rests on: the wavelet formalism maps to silicon, and in that
circuit the work done scales with the event rate rather than with the pixel count.
In theory. Write the one-sentence version, and say "in theory" out loud.

- [ ] What would make it measurable: which board, which workload, what you would report
- [ ] What you will NOT claim: joules per inference, or any ratio against a GPU

---

# Backup &mdash; the energy argument

<div class="grid grid-cols-2 gap-12 mt-4">
<div class="text-center p-4 bg-blue-50 rounded-lg">

<img src="/_assets/transistor.jpg" class="h-30 mx-auto"/>

**Digital transistors**

$10^{-12}$ J / operation

</div>
<div class="text-center p-4 bg-green-50 rounded-lg">

<img src="/_assets/neuron.jpeg" class="h-30 mx-auto"/>

**Biological neurons**

$10^{-20}$ J / operation

</div>
</div>

<p class="text-center mt-4 text-2xl font-bold">

$10^{8}\times$ energy

</p>


---

# Backup &mdash; NIR platform table

<img src="/_assets/nir_platforms.png" class="h-80 mx-auto"/>

