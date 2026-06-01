---
theme: default
title: "Brain-inspired sensing and computing for acoustics — and beyond"
info: |
  Acoustic Technology presentation day
  DTU Electro, June 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

<div class="absolute inset-0 bg-black z-0"></div>
<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-60 z-0">
  <source src="/_assets/mouse_cortex.mp4" type="video/mp4"/>
</video>

<div class="relative z-10 text-white">

# Brain-inspired sensing and computing

### A neuromorphic pipeline &mdash; from spiking ADCs to physical AI

<br/>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

DTU Electro &mdash; Acoustic Technology

<br/>

Presentation day &mdash; June 2026

</div>

---

# About me &amp; today's pitch

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

- Postdoc at **DTU Electro**, advisor **Peter Gerstoft**
- PhD in neurocomputing from **KTH**, MSc in CS from **KU**

<br/>

Today's topic:

> How do we build sensing and signal-processing systems that match the **energy and speed** of biology?

<br/>

<v-clicks>

1. **Why neuromorphic?** &mdash; the energy & time argument
2. **Models** &mdash; spiking systems for signal processing
3. **Pipeline** &mdash; spiking ADCs + fully neuromorphic compute
4. **Applications** &mdash; ears, eyes, skin, edge logic, general compute

</v-clicks>

</div>
<div>

<img src="/_assets/dvxplorer.jpg" class="h-40 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">An event camera &mdash; a sensor inspired by the retina</p>

</div>
</div>

---
layout: section
---

# Part I
## Why neuromorphic?
### The energy and time argument

---

# The energy wall

<div class="grid grid-cols-[2fr_3fr] gap-8 items-center">
<div>

<v-clicks>

- Conventional computing **separates** memory and computation
- Moving data costs **10,000&times;** more energy than computing it
- AI cost **doubles every 2-6 months**
- We are running into fundamental physical limits

</v-clicks>
<br>
<v-click>

> Up to **27&ndash;35 orders of magnitude** of headroom remain &mdash; if we change the way we compute

</v-click>

</div>
<div>

<img src="/_assets/energy_limit.png" class="h-90 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Shankar, Energy Estimates, 2023</p>

</div>
</div>

---

# Biology got it right

<div class="grid grid-cols-2 gap-12 mt-4">
<div class="text-center p-4 bg-blue-50 rounded-lg">

<img src="/_assets/transistor.jpg" class="h-30 mx-auto"/>

**Digital transistors**

$10^{-12}$ J / operation

~500 W (GPU)

</div>
<div class="text-center p-4 bg-green-50 rounded-lg">

<img src="/_assets/neuron.jpeg" class="h-30 mx-auto"/>

**Biological neurons**

$10^{-20}$ J / operation

~20 W (whole brain)

</div>
</div>

<p class="text-center mt-4 text-2xl font-bold" v-click>

Biology is at least $10^{8}\times$ more energy efficient

</p>

<v-click>

<div class="mt-4 p-3 bg-yellow-50 rounded-lg text-center text-sm">

Two principles do most of the work: **co-locate memory and compute**, and **only act when something changes**

</div>

</v-click>

---

# The time wall: event-driven sensing

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Frame-based sensors sample at fixed rates &mdash; biology doesn't

<v-clicks>

- Each "pixel" (or cochlear hair cell) reports **only when it changes**
- **Microsecond** temporal resolution
- **120 dB** dynamic range
- Sparse, asynchronous, **no redundant data**

</v-clicks>

<v-click>

<br/>

The same principle in vision: **event cameras**.
The same principle in hearing: **silicon cochleae** and spiking microphones.

</v-click>

</div>
<div>

<img src="/_assets/event_sensor.png" class="h-40 mx-auto mb-4"/>

<v-click>

<video src="/_assets/westmead_3d_small.mp4" autoplay loop muted controls class="h-50 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">Event camera output &mdash; each dot is a brightness change (Marcireau, 2023)</p>

</v-click>

</div>
</div>

---
layout: section
---

# Part II
## Computational models
### Spiking systems for signal processing

---

# Neurons are both analog *and* digital

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Von Neumann (1958) already noticed: the nervous system uses **two kinds of signals**

<v-clicks>

- **Analog**: membrane voltages, synaptic currents &mdash; continuous, numerical, integrate over time
- **Digital**: spikes are all-or-nothing &mdash; discrete, robust, cheap to transmit
- Memory and computation are **co-located**

</v-clicks>

<v-click>

<br/>

$$\tau \frac{dv}{dt} = -v(t) + I(t), \quad v \geq \theta \Rightarrow \text{spike}$$

The leaky integrator runs the **analog** ODE; the threshold emits the **digital** event.

</v-click>

</div>
<div>

<img src="/_assets/programming_nm.png" class="h-70 mx-auto"/>

<v-click>

<div class="mt-3 p-3 bg-green-50 rounded-lg text-sm">

Neuromorphic systems **combines** continuous (analog) dynamics and discrete (digital) events

</div>

</v-click>

<p class="text-xs text-right text-gray-400 mt-1">Abreu &amp; Pedersen, Neuromorphic Computing &amp; Engineering, 2024</p>

</div>
</div>

---

# Spiking receptive fields work &mdash; even on sparse data

<div class="grid grid-cols-2 gap-8 items-start">
<div>

LIF neurons are **naturally scale-covariant** &mdash; with mathematical guarantees on how they handle transformations in space and time.

<v-clicks>

- Applied to **event camera** data, dense and sparse
- **42.4% improvement** over conventional ANN baselines on event-vision tasks
- Built entirely from **neuromorphic primitives** &mdash; deployable today

</v-clicks>

</div>
<div>

<div class="grid grid-cols-1 gap-1">
<v-clicks>
<video src="/_assets/circle_dense_coo.mp4" autoplay loop muted class="rounded h-50"/>
<video src="/_assets/circle_sparse_coo.mp4" autoplay loop muted class="rounded h-50"/>
</v-clicks>
</div>


<p class="text-xs text-right text-gray-400 mt-2">Pedersen, Conradt, &amp; Lindeberg, Nature Communications, 2025</p>

</div>
</div>

---

# Spiking wavelets: async and sparse signal processing

<img src="/_assets/swavelet_hero.svg">

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Wavelets decompose a signal in **time and frequency** simultaneously &mdash; the same trick biological sensory systems use.


<v-clicks>

- **Perfect reconstruction** from wavelet theory
- We can do **rigorous signal processing entirely on neuromorphic substrates** &mdash; not just classification.

</v-clicks>
</div>

![](/_assets/swavelet_results.png)

</div>

<p class="text-xs text-right text-gray-400 mt-1">Pedersen, Lindeberg, &amp; Gerstoft, arXiv:2602.02020, 2026</p>

---
layout: section
---

# Part III
## The pipeline
### Spiking ADCs + fully neuromorphic compute

---

# From a digital detour to a spike-domain pipeline

<div class="grid grid-cols-[3fr_2fr] gap-6 items-start">

<div>

**Today &mdash; signal &rarr; ADC &rarr; GPU &rarr; DAC &rarr; action**

- Every conversion costs **energy and latency**
- Bulk of the power budget is in **moving data**, not computing

<div v-click="1" class="transition-opacity duration-500 mt-6">

**Our pipeline &mdash; stay in the spike domain**

- **Spiking ADC**: sparse, event-driven encode &mdash; wavelet front-end with reconstruction guarantees
- **Fully neuromorphic compute**: parallel, asynchronous &mdash; no clock, no global memory bus
- **Spike-domain decode** only when an actuator needs it

</div>

</div>

<div class="grid grid-cols-2 gap-4 items-start">

<div>

```mermaid {scale: 0.45}
graph TD
    A["Signal"] --> B["Frame ADC"] --> HW --> D["DAC"] --> E["Action"]
    subgraph HW["HW (GPU) acceleration"]
      direction TD
      C["ANN"]
    end
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2
```

</div>

<div v-click="1" class="transition-opacity duration-500">

```mermaid {scale: 0.45}
graph TD
    A["Signal"] --> NM --> E["Action"]
    subgraph NM["Neuromorphic acceleration"]
        direction TD
        B["Spiking ADC<br/>(wavelet encode)"] --> C["SNN<br/>(parallel + async)"] --> D["Spike decode"]
    end
    style B fill:#e8f5e9
    style C fill:#c8e6c9
    style D fill:#e8f5e9
    style NM fill:#f3e5f5,stroke:#9c27b0
```

</div>

</div>

</div>

<div v-click="2" class="mt-3 p-2 bg-green-50 rounded-lg text-xs text-center">

End-to-end signal processing that is **sparse** and **asynchronous** &mdash; operations on spikes correspond directly to operations on the signal.

</div>

---

# One model, many chips: NIR

<div class="grid grid-cols-2 gap-8 items-center">
<div>

The problem: **14+ neuromorphic platforms**, each with its own programming model.

<v-clicks>

- **NIR**: Neuromorphic Intermediate Representation
- Primitives defined as **continuous-time ODEs**
- Train anywhere &rarr; export to NIR &rarr; deploy anywhere
- Vendors include Intel, BrainChip, SynSense, Innatera, SpiNNcloud, Heidelberg

</v-clicks>

</div>
<div>

<img src="/_assets/nir_flow.png" class="h-40 mx-auto"/>

<p class="text-xs text-right text-gray-400 mt-1">Pedersen et al., Nature Communications, 2024</p>

</div>
</div>

---

# What does the hardware look like today?

<div class="grid grid-cols-4 gap-3 mt-2 text-sm">
<div class="text-center p-3 bg-blue-50 rounded-lg">

**Intel Loihi 2**

~1 W

Digital, programmable

</div>
<div class="text-center p-3 bg-green-50 rounded-lg">

**BrainChip Akida**

~100 mW

Edge inference

</div>
<div class="text-center p-3 bg-purple-50 rounded-lg">

**SynSense Speck**

~10 mW

Integrated event sensor + SNN

</div>
<div class="text-center p-3 bg-orange-50 rounded-lg">

**Innatera T1**

~1 mW

Mixed-signal, audio-focused

</div>
</div>

<v-click>

<div class="mt-4 text-center text-sm text-gray-500">

mixed-signal designs already push **below 1 mW** for always-on audio &mdash; a hearing-aid power budget

</div>

</v-click>

<img src="/_assets/nir_hw.png" class="h-50 mx-auto mt-4" v-click/>

---
layout: section
---

# Part IV
## Applications
### Ears, eyes, skin, edge logic, general compute

---

# Applications &mdash; one pipeline, many modalities

<v-clicks>

- **Sound &mdash; the ear** &middot; spiking wavelet ADCs, silicon cochleae, always-on keyword detection, noise reduction & source separation, auditory scene analysis. *Hearing aids, hearables, condition monitoring, sonar.*
- **Video &mdash; the eyes** &middot; event cameras at 100&ndash;500 mW, $\mu$s latency, 120 dB dynamic range, native input to SNNs. *High-speed tracking, gesture, driver monitoring, drones.*
- **Touch &mdash; tactile & vibration** &middot; event-driven skin and accelerometers, sparse activity ideal for spiking back-ends. *Prosthetics, robotics, predictive maintenance.*
- **Simple logic &mdash; routing / edge** &middot; always-on classifiers, wake-words, anomaly detection, packet routing. *Spiking logic beats clocked microcontrollers when most of the time nothing happens.*
- **General compute** &middot; same covariant primitives across vision, audio, tactile, control &mdash; spiking wavelets give rigorous signal processing on the same substrate as classification.

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-orange-50 rounded-lg text-center">

**One pipeline** &mdash; event sensor &rarr; spiking ADC &rarr; neuromorphic compute &rarr; spike-domain action &mdash;
**many modalities**, all at $\mu$W&ndash;mW power and $\mu$s latency

</div>

</v-click>

---

# Where this fits in the computing continuum

<div class="grid grid-cols-5 gap-2 mt-6 text-sm">
<div class="p-2 bg-blue-50 rounded-lg text-center">

**CPU**

Sequential, clocked

~100 W

</div>
<div class="p-2 bg-blue-100 rounded-lg text-center">

**GPU / TPU**

Parallel arithmetic

~500 W

</div>
<div class="p-2 bg-blue-200 rounded-lg text-center">

**SNNs on GPUs**

Bio-inspired algorithms, conventional HW

</div>
<div class="p-2 bg-green-100 rounded-lg text-center">

**Digital neuromorphic**

Loihi, Akida, SpiNNaker

~1 W

</div>
<div class="p-2 bg-green-200 rounded-lg text-center">

**Analog neuromorphic**

Speck, Innatera, DynapCNN

~1 mW

</div>
</div>

<div class="flex justify-between mt-2 text-xs text-gray-400 px-4">
<span>&larr; von Neumann</span>
<span>Physics-aligned &rarr;</span>
</div>

<v-click>

<div class="mt-6 p-4 bg-orange-50 rounded-lg text-center">

**Direction**: event-driven sensors + neuromorphic compute + embodied agents at biological energy budgets &mdash; **physical AI**

</div>

</v-click>

---

# Summary

<div class="grid grid-cols-3 gap-4 mt-2">
<div class="p-3 bg-blue-50 rounded-lg text-left text-sm">

**Why** &mdash; biology is $10^8\times$ more efficient. Co-locate memory &amp; compute, only act on change.

</div>
<div class="p-3 bg-green-50 rounded-lg text-left text-sm">

**Models** &mdash; Neurons as spatio-temporal pattern matchers for mixed-signal processing

</div>
<div class="p-3 bg-purple-50 rounded-lg text-left text-sm">

**Pipeline** &mdash; spiking ADC &rarr; parallel, async neuromorphic compute &rarr; embodied systems for hearing, seeing, sensing, and beyond.

</div>
</div>

<br/>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

<div class="grid grid-cols-2 gap-8 text-left text-sm mx-auto mt-4" style="max-width: 600px;">
<div>

**Papers**

- [Spiking Wavelets (2026)](https://arxiv.org/abs/2602.02020)
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

<p class="text-lg">Questions? 🙋</p>

<p class="text-xs mt-4 opacity-50">Support from the Novo Nordisk Foundation (NNF24OC0089302)</p>
