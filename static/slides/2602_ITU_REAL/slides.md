---
theme: default
title: "From Spikes to Physical AI"
info: |
  Presentation for the REAL group at ITU Copenhagen
  February 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# From Spikes to Physical AI

### Event-driven sensing and computation for embodied intelligence

<br/>

**Jens Egholm Pedersen**

DTU Electro

<br/>

REAL Group, ITU Copenhagen &mdash; February 2026

<div class="abs-br m-6 text-sm opacity-50">
  jepedersen.dk &middot; jegpe@dtu.dk
</div>

---
layout: section
---

# Part I
## The case for neuromorphic computing

---

# The energy wall

<div class="grid grid-cols-2 gap-8 items-center">
<div>

<v-clicks>

- Separation of memory and computation creates an **insurmountable energy bottleneck**
- AI training costs are **doubling every 6 months**
- Moving data costs **10,000&times;** more energy than computing it
- We are approaching fundamental physical limits

</v-clicks>

</div>
<div>

<img src="/energy_limit.png" class="h-80 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Shankar, Energy Estimates, 2023</p>

</div>
</div>

<v-click>

> There is a lot of room to improve &mdash; up to **27&ndash;35 orders of magnitude**

</v-click>

---

# Event-based cameras

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Each pixel **independently** reports brightness changes

<v-clicks>

- **Microsecond** temporal resolution
- **120 dB** dynamic range (vs ~60 dB conventional)
- No redundant data &mdash; only changes are transmitted
- Fundamentally **asynchronous**

</v-clicks>

</div>
<div>

<img src="/event_sensor.png" class="h-40 mx-auto"/>

</div>
</div>

<v-click>

</v-click>

---


<video src="/westmead_3d_small.mp4" autoplay loop muted controls class="h-100 mx-auto rounded shadow"/>

<p class="text-xs text-gray-400 text-center">Real event camera data &mdash; Alexandre Mariceau, 2023</p>

---

# Event cameras: extreme efficiency

<div class="grid grid-cols-2 gap-12 items-center mt-8">
<div class="text-center">

<img src="/dvxplorer.jpg" class="h-40 mx-auto rounded"/>

**iniVation DVXplorer**

~500 mW

</div>
<div class="text-center">

<img src="/evk4.jpg" class="h-40 mx-auto rounded"/>

**Prophesee EVK4**

~100 mW

</div>
</div>

<v-click>

<div class="mt-8 text-center">

Compare: a conventional camera system uses **1&ndash;10 W**

Event sensors transmit **only what changes** &mdash; orders of magnitude less data

</div>

</v-click>

---

# Neuromorphic hardware


<div>

<v-clicks>

- **Co-locate memory and computation** &mdash; no von Neumann bottleneck
- Computation happens **in the physics** of analog circuits
- Energy per operation:

</v-clicks>

</div>

<div class="grid grid-cols-2 gap-12 mt-4" v-click>
<div class="text-center p-4 bg-blue-50 rounded-lg">

<img src="/transistor.jpg" class="h-30 mx-auto"/>

**Transistors**: $10^{-12}$ J/op

</div>
<div class="text-center p-4 bg-green-50 rounded-lg">

<img src="/neuron.jpeg" class="h-30 mx-auto"/>

**Neurons**: $10^{-20}$ J/op

</div>
</div>

<p class="text-center mt-2 text-xl font-bold" v-click>$10^{8}\times$ more efficient</p>

---

# The gap

<div class="grid grid-cols-2 gap-8 items-center">
<div>

We can build the circuits...

<v-clicks>

- But we **lack theories** to guide efficient implementations
- Current neuromorphic models **cannot compete** with deep learning
- We need a principled bridge between **physics and computation**

</v-clicks>

<br/>

<h3 v-click>How do we program neuromorphic systems?</h3>

</div>
<div>

<img src="/programming_nm.png" class="h-70 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Abreu & Pedersen, 2024</p>

</div>
</div>

---
layout: section
---

# Part II
## Mathematical foundations
### From receptive fields to spiking wavelets

---

# What the frog's eye tells the frog's brain

<div class="grid grid-cols-[1fr_auto] gap-8 items-center">
<div>

Frog eyes are **bug detectors**

<v-clicks>

- Sharp, dark, moving edges
- Independent of luminosity
- Nature uses **spatio-temporal receptive fields**

</v-clicks>

<br/>

<p v-click class="text-xl">

Can we build the same with spiking neurons?

</p>

</div>
<div>

<img src="/frog.png" class="h-60"/>
<p class="text-xs text-gray-400">Lettvin et al., 1959</p>

</div>
</div>

---

# Spatial receptive fields

Convolution of input signal $f$ with Gaussian kernel $g$:

$$
(g * f)(x) = \int_{u \in \mathbb{R}^n} g(u)\, f(x - u)\, du
$$

<v-click>

Gaussian kernels are **covariant to affine transformations**

</v-click>

<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>

<video src="/spatial_gaussian_narrow.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>
<p class="text-xs text-center text-gray-400">Narrow receptive field</p>

</div>
<div v-click>

<video src="/spatial_gaussian_wide.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>
<p class="text-xs text-center text-gray-400">Wide receptive field</p>

</div>
</div>

---

# Temporal receptive fields

**Causality constraint**: cannot integrate from $-\infty$ to $\infty$

Use the **truncated exponential kernel**:

$$
h(t;\, \mu) = \begin{cases} \mu^{-1}\exp(-t/\mu) & t > 0 \\ 0 & t \leq 0 \end{cases}
$$


<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>

<video src="/temporal_fast.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>
<p class="text-xs text-center text-gray-400">Fast decay ($\mu = 1/6$)</p>

</div>
<div v-click>

<video src="/temporal_slow.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>
<p class="text-xs text-center text-gray-400">Slow decay ($\mu = 1$)</p>

</div>
</div>

---

# Spatio-temporal covariance

<div class="grid grid-cols-2 gap-8 items-center">
<div>

<img src="/covariance.png" class="h-30 mx-auto"/>

<v-click>

**Covariance** = the representation changes **predictably** with transformations

$$g \cdot \phi = \phi' \cdot g'$$

</v-click>

<v-click>

Unlike invariance, covariance **preserves relational structure** &mdash; essential for adaptation

</v-click>

</div>
<div>

<img src="/spatiotemporal_covariance.png" class="h-60 mx-auto mt-4" v-click/>

</div>
</div>

---

# Neuromorphic implementation

**Key insight**: Leaky integrators *are* scale covariant

<v-clicks>

- Leaky integrate-and-fire (LIF) neurons are **approximately scale covariant**
- Leveraging covariance lets us **precisely formulate computation**
- And outperform ANNs

</v-clicks>

<div class="grid grid-cols-2 gap-8 mt-4" v-click>
<div>

<img src="/rfs.png" class="h-50 mx-auto"/>
<p class="text-xs text-center text-gray-400">Covariant spiking components</p>

</div>
<div>

<img src="/rfs_result.png" class="h-50 mx-auto"/>
<p class="text-xs text-center text-gray-400"><b>42.4%</b> improvement over ANN baselines</p>

</div>
</div>

<p class="text-xs text-right text-gray-400 mt-2">Pedersen, Conradt, & Lindeberg, Nature Communications, 2025</p>

---

# But covariance goes deeper than vision...

<v-click>

What if spiking neurons can implement **wavelets**?

</v-click>

<v-click>

This would give us:

- **Rigorous signal processing** on neuromorphic substrates
- **Information efficiency** through temporally sparse spikes
- **Energy efficiency** through event-driven computation
- A mathematical bridge between **signal processing and neuroscience**

</v-click>

---

# Wavelets: efficient signal decomposition

The mother wavelet $\psi$ decomposes a signal $f$ at scale $a$ and shift $b$:

$$
\psi(x; a, b) = |a|^{-1/2}\, \psi\!\left(\frac{x - b}{a}\right)
$$

<v-click>

The wavelet transform:

$$
(Tf)(x; a, b) = \int_{-\infty}^{\infty} f(x)\, |a|^{-1/2}\, \overline{\psi}\!\left(\frac{x-b}{a}\right) dx
$$

</v-click>

<v-click>

**Resolution of identity** &mdash; perfect reconstruction:

$$
f(t) = C_\psi^{-1} \int\!\!\int a^{-2}\, \langle f, \psi(t;a,b)\rangle\, \psi(t;a,b)\, da\, db
$$

</v-click>

---

# Spiking mother wavelet

**Problem**: Spikes don't carry sign information

<v-click>

**Solution**: Two-channel representation (cf. Dale's principle)

$$
\mu\, \dot{u}^+ = -u^+ + f(t) \qquad \mu\, \dot{u}^- = -u^- - f(t)
$$

</v-click>

<v-click>

**Entirely representable with leaky integrators as physical primitives**

<img src="/sinus_spike.png" class="h-70 mx-auto"/>

</v-click>

---

# Reconstruction experiment

<img src="/reconstruction.png" class="h-50 mx-auto"/>

<v-click>

Compared: **Morlet** wavelet, **truncated exponential** ($K\!=\!5$), **spiking** wavelets ($K \in \{3, 6, 12\}$)

</v-click>

<v-click>

### Results

- Truncated exponential achieves **best reconstruction**
- Spike-count encoding captures frequency components without requiring many channels
- Plateau suggests need for **more sophisticated spike-time encodings**

</v-click>

<p class="text-xs text-right text-gray-400">Pedersen, Lindeberg, & Gerstoft, arXiv:2602.02020, 2026</p>

---
layout: section
---

# Part III
## Physical AI
### Putting it all together

---

# Physical AI: the next frontier

<v-click>

> Physical AI is going to be the next big wave of artificial intelligence
>
> &mdash; Lisa Su, AMD CEO

</v-click>

<br/>

<v-click>

The convergence:

</v-click>

<div class="grid grid-cols-3 gap-6 mt-4">
<div class="text-center p-4 bg-blue-50 rounded-lg" v-click>

**Event-driven sensing**

Cameras, microphones, tactile

$\mu$s latency, $\mu$W power

</div>
<div class="text-center p-4 bg-green-50 rounded-lg" v-click>

**Neuromorphic compute**

Covariant receptive fields

Spiking wavelets

</div>
<div class="text-center p-4 bg-purple-50 rounded-lg" v-click>

**Embodied agents**

Real-time control

Continual learning

</div>
</div>

---

# Closing the loop

<div class="text-center mt-8">

```mermaid
graph LR
    A["🎥 Event sensors"] -->|"μs latency"| B["🧠 Spiking processing"]
    B -->|"Covariant RFs<br/>Wavelets"| C["⚡ Neuromorphic control"]
    C -->|"Real-time"| D["🤖 Physical world"]
    D -->|"Events"| A
    style A fill:#e3f2fd
    style B fill:#e8f5e9
    style C fill:#fff3e0
    style D fill:#f3e5f5
```

</div>

<v-clicks>

- **Sensing**: Event cameras provide asynchronous, sparse input
- **Processing**: Covariant receptive fields extract multi-scale features with mathematical guarantees
- **Signal analysis**: Spiking wavelets decompose signals on neuromorphic substrates
- **Control**: Real-time, energy-efficient actuation
- **All running at $\mu$W power budgets**

</v-clicks>

---

# Where REAL meets neuromorphic

<div class="grid grid-cols-2 gap-12 items-start mt-4">
<div>

### What neuromorphic provides

<v-clicks>

- Event-driven sensing substrate
- Ultra-low-power, real-time computation
- Principled spiking signal processing
- Continual, on-chip learning primitives

</v-clicks>

</div>
<div>

### What REAL provides

<v-clicks>

- Long-lived, continual learning algorithms
- Safe exploration in deployment (meta-learning?)
- Evolutionary optimization
- Bio-inspired

</v-clicks>

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-blue-50 rounded-lg text-center">

**The vision**: Embodied agents that sense, process, and learn continuously &mdash; at biological energy budgets

</div>

</v-click>

---

# Open Neuromorphic ecosystem

<div class="grid grid-cols-2 gap-8 items-center">
<div>

<v-clicks>

- **Norse** &mdash; PyTorch spiking neural networks
- **NIR** &mdash; Write once, run on 14+ platforms
- **AEStream** &mdash; Real-time event processing
- **2100+ community members**
- Open standards preventing fragmentation

</v-clicks>

</div>
<div>

<img src="/nir_flow.png" class="h-50 mx-auto"/>
<p class="text-xs text-center text-gray-400">Neuromorphic Intermediate Representation</p>

</div>
</div>

<v-click>

<div class="mt-4 p-4 bg-green-50 rounded-lg text-center">

**open-neuromorphic.org** &mdash; community-driven, open-source neuromorphic computing

</div>

</v-click>

---

# Learn more: Practical SNN book

<div class="grid grid-cols-2 gap-8 items-center">
<div>

<v-clicks>

- Free, open educational resource
- From neuron models to hardware deployment
- Hands-on with Norse and NIR
- Lowering the barrier to neuromorphic computing

</v-clicks>

<br/>

<p v-click class="text-xl font-bold">

snnbook.net

</p>

</div>
<div class="text-center">

<div class="p-8 bg-gray-50 rounded-lg">
<p class="text-6xl mb-4">📖</p>
<p class="text-xl font-bold">Practical Spiking Neural Networks</p>
<p class="text-gray-500">snnbook.net</p>
</div>

</div>
</div>

---
layout: center
class: text-center
---

# Thank you

**Jens Egholm Pedersen**

jegpe@dtu.dk &middot; jepedersen.dk

<br/>

<div class="grid grid-cols-2 gap-8 text-left text-sm mx-auto" style="max-width: 600px;">
<div>

**Papers**

- [Spiking Wavelets (2026)](https://arxiv.org/abs/2602.02020)
- [Spatio-temporal recetive fields (2025)](https://www.nature.com/articles/s41467-025-63493-0)
- [NIR: Neuromorphic Intermediate Representation (2024)](https://www.nature.com/articles/s41467-024-52259-9)

</div>
<div>

**Resources**

- [open-neuromorphic.org](https://open-neuromorphic.org)
- [snnbook.net](https://snnbook.net)
- [jepedersen.dk](https://jepedersen.dk)

</div>
</div>

<br/>

*Support from the Novo Nordisk Foundation (NNF24OC0089302) and the Swedish Research Council (2022-02969)*
