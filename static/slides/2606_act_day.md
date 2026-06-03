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
<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-80 z-0">
  <source src="/_assets/mouse_cortex.mp4" type="video/mp4"/>
</video>

<div class="relative z-10 text-white">

# Brain-inspired sensing and computing

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

1. **Why neuromorphic?** &mdash; the energy & time argument, and the pipeline we want
2. **Mixed-signal computers** &mdash; spiking ADC, neuromorphic compute, deployment
3. **Applications** &mdash; ears, eyes, skin, edge logic, general compute

</v-clicks>

</div>
<div>

<img src="/_assets/chiptobrain.png" class="h-50 mx-auto"/>
<p class="text-xs text-gray-400 text-center">From chip to brain &mdash; and back</p>

</div>
</div>

---
layout: section
---

# Part I
## Why neuromorphic?
### The energy and time argument &mdash; and the pipeline we want

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

# The pipeline we want

<div class="grid grid-cols-[3fr_2fr] gap-6 items-start">

<div>

**Today &mdash; signal &rarr; ADC &rarr; GPU &rarr; DAC &rarr; action**

- Every conversion costs **energy and latency**
- Bulk of the power budget is in **moving data**, not computing

<div v-click="1" class="transition-opacity duration-500 mt-6">

**Our pipeline &mdash; stay in the spike domain**

- **Spiking ADC**: sparse, event-driven encode
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
layout: section
---

# Part II
## Building the pipeline
### Spiking ADC &middot; neuromorphic compute &middot; deployment

---

# 1. Sensing &mdash; the event camera

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Biological sensors don't sample at a fixed rate &mdash; they produce **events** when thresholds are crossed.

<v-clicks>

- Sparse, asynchronous, **no redundant data**
- **Microsecond** temporal resolution
- **120 dB** dynamic range

</v-clicks>

<v-click>

<br/>

Same principle, different modality:
- Vision &rarr; **event cameras**
- Hearing &rarr; **silicon cochleae**, spiking microphones
- Touch &rarr; **event-driven skin** and accelerometers

</v-click>

</div>
<div>

<img src="/_assets/event_sensor.png" class="h-30 mx-auto mb-3"/>

<v-click>

<video src="/_assets/westmead_3d_small.mp4" autoplay loop muted controls class="h-45 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">Event camera output (Marcireau, 2023)</p>

</v-click>

</div>
</div>

---

# 2. Computing &mdash; what von Neumann saw

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Von Neumann (1958) already noticed: the nervous system uses **two kinds of signals**

<v-clicks>

- **Analog**: membrane voltages, synaptic currents &mdash; continuous, integrate over time
- **Digital**: spikes are all-or-nothing &mdash; discrete, robust, cheap to transmit
- Memory and computation are **co-located**

</v-clicks>

<v-click>

<div class="mt-3 p-3 bg-green-50 rounded-lg text-sm">

Neuromorphic systems **combine** continuous (analog) dynamics with discrete (digital) events &mdash; the substrate runs the ODE, the spike is the message.

</div>

</v-click>

</div>
<div>

<img src="/_assets/programming_nm.png" class="h-60 mx-auto"/>

<p class="text-xs text-right text-gray-400 mt-1">Abreu &amp; Pedersen, Neuromorphic Computing &amp; Engineering, 2024</p>

</div>
</div>

---

# 3. Deployment &mdash; let physics do the compute

<div class="grid grid-cols-[3fr_2fr] gap-6 items-center">
<div>

**14+ neuromorphic platforms** &mdash; each with its own programming model.

<v-clicks>

- **NIR** &mdash; Neuromorphic Intermediate Representation
- Primitives defined as **continuous-time ODEs**
- Train anywhere &rarr; export to NIR &rarr; deploy anywhere
- Vendors: Intel, BrainChip, SynSense, Innatera, SpiNNcloud, Heidelberg

</v-clicks>

</div>
<div>

<img src="/_assets/nir_flow.png" class="h-30 mx-auto"/>
<p class="text-xs text-right text-gray-400">Pedersen et al., Nature Communications, 2024</p>

</div>
</div>

<div class="grid grid-cols-4 gap-3 mt-4 text-xs" v-click>
<div class="text-center p-2 bg-blue-50 rounded-lg">

**Intel Loihi 2** &middot; ~1 W

</div>
<div class="text-center p-2 bg-green-50 rounded-lg">

**BrainChip Akida** &middot; ~100 mW

</div>
<div class="text-center p-2 bg-purple-50 rounded-lg">

**SynSense Speck** &middot; ~10 mW

</div>
<div class="text-center p-2 bg-orange-50 rounded-lg">

**Innatera T1** &middot; ~1 mW

</div>
</div>

<div v-click class="mt-4 p-3 bg-orange-50 rounded-lg text-center text-sm">

The ODE **is** the chip &mdash; sub-mW for always-on audio

</div>

---
layout: section
---

# Part III
## Applications
### Where this matters to you

---

# Sound &mdash; the ear

The cochlea is **already** a spiking, multi-scale wavelet front-end &mdash; nature has done the engineering for us.

<center>
<img src="/_assets/swavelet_hero.svg" class="h-40">
</center>

<div class="grid grid-cols-[2fr_2fr] gap-8 items-center">
<div>


<v-clicks>

- **Spiking ADC for audio** &mdash; silicon cochleae
- **Always-on keyword and event detection** at $\mu$W
- **Noise reduction & source separation** with spikes

</v-clicks>

<v-click>

<div class="mt-3 p-3 bg-blue-50 rounded-lg text-sm">

Concrete starting points: a **spiking wavelet ADC** benchmarked against conventional DSP for hearing-aid front-ends &middot; **on-chip auditory scene analysis** for hearables

</div>

</v-click>

</div>
<div>

<v-click>

<img src="/_assets/swavelet_results.png" class="h-50 mx-auto"/>
<p class="text-xs text-center text-gray-400">Pedersen et al. 2026</p>

</v-click>

</div>
</div>

---

# Beyond hearing &mdash; the same pipeline, other modalities

<v-clicks>

- **Video &mdash; the eyes** &middot; event cameras at 100&ndash;500 mW, $\mu$s latency, 120 dB dynamic range, native input to SNNs. *High-speed tracking, gesture, driver monitoring, drones.*
- **Touch &mdash; tactile & vibration** &middot; event-driven skin and accelerometers; sparse activity ideal for spiking back-ends. *Prosthetics, robotics, predictive maintenance.*
- **Simple logic &mdash; routing / edge** &middot; always-on classifiers, wake-words, anomaly detection, packet routing. *Spiking logic beats clocked microcontrollers when most of the time nothing happens.*
- **General compute** &middot; the same covariant primitives across vision, audio, tactile, control &mdash; one substrate for sensing, signal processing, and classification.

</v-clicks>

<v-click>

<div class="mt-6 p-4 bg-orange-50 rounded-lg text-center">

**One pipeline** &mdash; event sensor &rarr; spiking ADC &rarr; neuromorphic compute &rarr; spike-domain action &mdash;
**many modalities**, all at $\mu$W&ndash;mW power and $\mu$s latency

</div>

</v-click>

---

# Where we are on the computing continuum

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

**Components** &mdash; spiking ADC &rarr; analog+digital neuromorphic compute &rarr; deploy via NIR.

</div>
<div class="p-3 bg-purple-50 rounded-lg text-left text-sm">

**Applications** &mdash; hearing first, but the same pipeline serves eyes, touch, edge, and general compute at $\mu$W&ndash;mW.

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

<p class="text-xs mt-4 opacity-50">Support from the Novo Nordisk Foundation (NNF24OC0089302)</p>
