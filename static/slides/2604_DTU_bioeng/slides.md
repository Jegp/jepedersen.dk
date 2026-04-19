---
theme: default
title: "Brain-Inspired Computing with Spiking Neural Networks"
info: |
  Guest lecture for 27020 Bioengineering (Polytechnical Foundation)
  DTU, Spring 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

<div class="absolute inset-0 bg-black z-0"></div>
<video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover opacity-70 z-0">
  <source src="/mouse_cortex.mp4" type="video/mp4"/>
</video>

<div class="relative z-10 text-white">

# Brain-Inspired Computing with Spiking Neural Networks

### How biology inspires the next generation of computing

<br/>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

DTU Electro

<br/>

27020 Bioengineering &mdash; Spring 2026

</div>

---

# About me

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

- Postdoc at **DTU Electro**
- PhD in neurocomputing from **KTH Royal Institute of Technology**, Sweden
- MSc in computer science from **University of Copenhagen**

<br/>

Research question:

How can we build computers that work **like the brain**?


<v-clicks>

> *"What I cannot create, I do not understand"* &mdash; Richard Feynman

</v-clicks>

</div>
<div>

<img src="/dvxplorer.jpg" class="h-50 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">An event camera &mdash; a sensor inspired by the retina</p>

</div>
</div>

---

# Today's roadmap

<div class="grid grid-cols-[3fr_1fr] gap-8 mt-8">
<div>

<v-clicks>

1. **How does the brain compute?** &mdash; neurons, spikes, and energy
2. **Spiking Neural Networks** &mdash; mimicking the brain in software
3. **Seeing like the brain** &mdash; event cameras + live demo
4. **Research highlight** &mdash; covariant receptive fields
5. **Hands-on exercise** &mdash; build a spiking neuron
6. **The bigger picture** &mdash; from von Neumann to neuromorphic

</v-clicks>

</div>
<div class="flex items-center justify-center">

<div class="text-6xl">
🧠 
<br/>

&nbsp;&darr; 
<br/>
<br/>
<br/>
💻
</div>

</div>
</div>

---
layout: section
---

# Part I
## How does the brain compute?
### Neurons, spikes, and energy efficiency

---

# The nervous system

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Your brain contains **~86 billion neurons** connected by **~100 trillion synapses**

<v-clicks>

- Neurons communicate via short electrical pulses called **spikes** (or action potentials)
- A spike lasts about **1 millisecond**
- Neurons only fire when their input crosses a **threshold**
- Most of the time, neurons are **silent** &mdash; this is key to efficiency

</v-clicks>

</div>
<div>

<img src="/neuron.jpeg" class="h-60 mx-auto rounded"/>
<p class="text-xs text-gray-400 text-center">A biological neuron (Wikipedia)</p>

</div>
</div>

---

# How a neuron works

<div class="grid grid-cols-2 gap-8 items-center">
<div>

A neuron is essentially a **leaky bucket**:

<v-clicks>

1. Input signals arrive and **add charge**
2. The charge slowly **leaks away** over time
3. If the charge crosses a **threshold** &rarr; the neuron fires a **spike**
4. After firing, the charge **resets**

</v-clicks>

<v-click>

<br/>

$$\tau \frac{dv}{dt} = -v(t) + I(t)$$

$$\text{if } v(t) \geq \theta: \text{ emit spike, reset } v$$

This is called a **Leaky Integrate-and-Fire** (LIF) neuron.

</v-click>

</div>
<div>

<div style="height: 400px; overflow: hidden;">
<iframe src="lif-sim.html" class="border-0" style="width: 100%; height: 800px; transform: scale(0.9); transform-origin: top left;"></iframe>
</div>

</div>
</div>

---

# Why should engineers care?

<div class="grid grid-cols-[1fr_1fr_2fr] gap-6 mt-4 items-center">
<div class="text-center p-3 bg-blue-50 rounded-lg">

<img src="/transistor.jpg" class="h-20 mx-auto"/>

**GPUs**

$10^{-12}$ J/op &middot; ~500 W

</div>
<div class="text-center p-3 bg-green-50 rounded-lg">

<img src="/neuron.jpeg" class="h-20 mx-auto"/>

**Brains**

$10^{-20}$ J/op &middot; ~20 W

</div>
<div>

<img src="/energy_limit.png" class="h-50 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Shankar, Energy Estimates, 2023</p>

</div>
</div>

<v-click>

<div class="grid grid-cols-2 gap-8 mt-4">
<div class="p-3 bg-yellow-50 rounded-lg text-center">

Biology is $\sim10^{8}\times$ more energy efficient!

The **von Neumann bottleneck**: moving data costs **10,000&times;** more than computing it

</div>
<div class="p-3 bg-orange-50 rounded-lg text-center">

AI training costs **double every 6 months**

**This is not sustainable.** The brain shows us a better way.

</div>
</div>

</v-click>

---
layout: section
---

# Part II
## Spiking Neural Networks
### Mimicking the brain in software

---

# From biology to engineering

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Von Neumann observed that the brain is **both analog and digital**: neurons integrate inputs as continuous voltages (**analog**), but communicate via discrete spikes (**digital**)

<v-clicks>

- **Spiking Neural Networks (SNNs)** exploit this hybrid nature
- Neurons are **silent by default** &mdash; sparse activations
- Computation happens in **analog** (leaky integration), communication is **digital** (spikes)
- Can be implemented in specialized **neuromorphic hardware**

</v-clicks>

</div>
<div>

<v-click>

<div class="grid grid-cols-2 gap-4">
<div class="text-center p-3 bg-blue-50 rounded-lg text-sm">

**Conventional ANN**

Purely digital

Dense multiplications

Good at logic &mdash; expensive

</div>
<div class="text-center p-3 bg-green-50 rounded-lg text-sm">

**Spiking SNN**

Analog + digital hybrid

Sparse spikes

Energy-efficient

</div>
</div>

</v-click>

</div>
</div>

---
layout: section
---

# Part III
## Seeing like the brain
### Event cameras and live demo

---

# Event-driven sensing

<div class="grid grid-cols-2 gap-8 items-center">
<div>

A regular camera takes **frames** at a fixed rate (e.g. 30 fps)

An **event camera** works like a retina:

<v-clicks>

- Each pixel **independently** reports brightness changes
- Only **changes** are transmitted &mdash; no redundancy
- **Microsecond** temporal resolution (vs. 33 ms for 30 fps)
- **120 dB** dynamic range (vs. ~60 dB for normal cameras)
- **100&ndash;500 mW** power (vs. 1&ndash;10 W)

</v-clicks>

</div>
<div>

<img src="/event_sensor.png" class="h-40 mx-auto mb-4"/>

<v-click>

<video src="/westmead_3d_small.mp4" autoplay loop muted controls class="h-50 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">Event camera data: each dot is one brightness change event (Marcireau 2023)</p>

</v-click>

</div>
</div>

---

# Live demo: event camera

<div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
<div>

<div class="text-center p-8 bg-gray-100 rounded-lg text-2xl">

🎥 Live event camera demo

</div>

<v-clicks>


Try it yourself:
- **Wave your hand** &mdash; see sparse events track the motion
- **Stay still** &mdash; the camera outputs almost nothing
- **Fast motion** &mdash; microsecond response, no motion blur

</v-clicks>

<v-click>

<br/>

This is the **natural input** for spiking neural networks: sparse, asynchronous, event-driven

</v-click>

</div>
<div>

<img src="/dvxplorer.jpg" class="h-40 mx-auto rounded mb-4"/>
<p class="text-xs text-gray-400 text-center">iniVation DVXplorer</p>

<img src="/evk4.jpg" class="h-40 mx-auto rounded mt-4"/>
<p class="text-xs text-gray-400 text-center">Prophesee EVK4</p>

</div>
</div>

---
layout: section
---

# Part IV
## Research highlight
### From hardware to algorithms

---

# The goal: algorithms for neuromorphic hardware

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Neuromorphic chips **physically implement** spiking neurons in silicon &mdash; but we need algorithms designed for them

<v-clicks>

- **14+ hardware platforms** exist, each with different programming models
- We created **NIR** (Neuromorphic Intermediate Representation) &mdash; a **programming language** for neuromorphic hardware
- Train in any framework &rarr; export to NIR &rarr; deploy on any chip

</v-clicks>

<v-click>

**Key constraint**: algorithms must use only **neuromorphic primitives** (leaky integrators, spikes, synapses) to be deployable

</v-click>

</div>
<div>

<img src="/nir_flow.png" class="h-50 mx-auto"/>
<p class="text-xs text-right text-gray-400">Pedersen et al., Nature Communications, 2024</p>

</div>
</div>

---

# What the frog's eye tells the frog's brain

<div class="grid grid-cols-[3fr_1fr] gap-8 items-center">
<div>

Frog eyes are **bug detectors** &mdash; they respond to small, dark, moving objects

<v-clicks>

- The frog doesn't just detect "something is there"
- It knows the **size**, **position**, and **speed**
- This requires a representation that transforms **predictably** &mdash; not one that throws away information

</v-clicks>

<v-click>

<br/>

This is the difference between:
- **Invariance**: "there is a bug" (loses details)
- **Covariance**: "there is a bug of *this size* at *this position* moving *this fast*" (preserves structure)

</v-click>

</div>
<div>

<img src="/frog.png" class="h-60"/>
<p class="text-xs text-gray-400">Lettvin et al., 1959</p>

</div>
</div>

---

# Receptive fields: how neurons filter the world

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Biological neurons respond to specific patterns in **space** and **time** &mdash; their **receptive field**

<v-clicks>

- **Spatial**: Gaussian blur at different scales (like squinting)
- **Temporal**: exponential decay (recent events matter more)
- Multiple scales = seeing both **fine detail** and **big picture**

</v-clicks>

<v-click>

**Key insight**: the leaky integrator in a LIF neuron **is** a temporal receptive field.

$$h(t;\, \mu) = \frac{1}{\mu}e^{-t/\mu}, \quad t > 0$$

Biology hides beautiful math!

</v-click>

</div>
<div class="relative">

<div v-click="[1, 3]" class="absolute inset-0">

<video src="/spatial_gaussian_narrow.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>

<video src="/spatial_gaussian_wide.mp4" autoplay loop muted class="h-50 mx-auto rounded mt-2"/>

</div>

<div v-click="3">

<video src="/temporal_fast.mp4" autoplay loop muted class="h-50 mx-auto rounded"/>

<video src="/temporal_slow.mp4" autoplay loop muted class="h-50 mx-auto rounded mt-2"/>

</div>

</div>
</div>

---

# Spiking receptive fields: results

<div class="grid grid-cols-2 gap-8 items-start">
<div>

We showed that LIF neurons are **naturally scale-covariant** &mdash; they handle transformations in space and time with mathematical guarantees

<v-clicks>

- Applied to **event camera data**
- ... and very sparse data
- **42.4% improvement** over conventional ANN baselines on event-vision tasks

</v-clicks>

<v-click>

<br/>

All using standard neuromorphic primitives &mdash; deployable on neuromorphic hardware

</v-click>

</div>
<div>

<div class="relative">
<video src="/circle_dense_coo.mp4" autoplay loop controls style="max-width: 100%;" v-click="[1, 2]"></video>
<video src="/circle_sparse_coo.mp4" autoplay loop controls style="max-width: 100%; position: absolute; top: 0; left: 0;" v-click="[2, 5]"></video>
</div>

<p class="text-xs text-right text-gray-400 mt-2">Pedersen, Conradt, & Lindeberg, Nature Communications, 2025</p>

</div>
</div>

---
layout: section
---

# Part V
## Hands-on exercise
### Build a spiking neuron &mdash; in your browser

---

# Exercise: a LIF neuron you can play with

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<div class="p-4 bg-blue-50 rounded-lg text-center text-2xl mt-4 mb-4">

<img src="/exercise_qr.png" class="h-80 mx-auto" alt="QR code"/>

[jepedersen.dk/posts/talks/202604_dtu_bioeng_exercise/](https://jepedersen.dk/posts/talks/202604_dtu_bioeng_exercise/)

</div>

</div>
<div>

The equation being simulated:

$$\tau_m \frac{dv}{dt} = -v + I$$

When $v \geq 1$: **spike** and reset

</div>
</div>

---

# Think about

- Why does the neuron need a **minimum input** to fire?
- What controls **how fast** the neuron spikes?
- How is this related to the **leaky bucket** analogy?
- The brain has ~86 billion of these &mdash; what emerges from connecting them?

<v-click>

<div class="mt-4 p-4 bg-yellow-50 rounded-lg text-center">

This is exactly the same equation implemented in **neuromorphic chips** at milliwatt power &mdash; and it's the building block of our covariant receptive fields

</div>

</v-click>

---

# What did we just build?

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="p-4 bg-blue-50 rounded-lg text-center" v-click>

**Leaky integrator**

The temporal receptive field from the research

$$v_{t+1} = \alpha \cdot v_t + I_t$$

Same equation, same principle

</div>
<div class="p-4 bg-green-50 rounded-lg text-center" v-click>

**Spike threshold**

Information compression: continuous signal &rarr; binary events

The basis of energy-efficient communication in the brain

</div>
<div class="p-4 bg-purple-50 rounded-lg text-center" v-click>

**Network of neurons**

Information processing through interconnected spiking units

Exactly what neuromorphic chips implement in hardware

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-yellow-50 rounded-lg text-center">

The neuron you just played with is the foundation of **all** spiking neural network research &mdash; from fruit fly brains to neuromorphic chips

</div>

</v-click>

---
layout: section
---

# Part VI
## The bigger picture

---

# The computing continuum

<div class="mt-4">

We're on a spectrum from **von Neumann** to **neuromorphic** &mdash; and we're moving towards biology

</div>

<div class="grid grid-cols-5 gap-2 mt-6 text-sm">
<div class="p-2 bg-blue-50 rounded-lg text-center" v-click>

**CPU**

Sequential, clock-driven

~200 W

</div>
<div class="p-2 bg-blue-100 rounded-lg text-center" v-click>

**GPU / TPU**

Parallel, already using sparsity

~500 W

</div>
<div class="p-2 bg-blue-200 rounded-lg text-center" v-click>

**SNNs on GPUs**

Bio-inspired algorithms, conventional hardware

</div>
<div class="p-2 bg-green-100 rounded-lg text-center" v-click>

**Digital neuromorphic**

Intel Loihi, BrainChip Akida

~1 W

</div>
<div class="p-2 bg-green-200 rounded-lg text-center" v-click>

**Analog neuromorphic**

SynSense, Innatera

~1 mW

</div>
</div>

<div class="flex justify-between mt-2 text-xs text-gray-400 px-4">
<span>&larr; von Neumann</span>
<span>Neuromorphic &rarr;</span>
</div>

<v-click>

<div class="mt-6 p-4 bg-orange-50 rounded-lg text-center">

**The direction**: event-driven sensors + neuromorphic compute + embodied agents 

**Physical AI** &mdash; intelligent systems in the real world, at milliwatt power

</div>

</v-click>

---

# Three generations of neural networks

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="p-4 bg-blue-50 rounded-lg text-center" v-click>

**1st generation**

Perceptrons (1960s)

Binary threshold units

</div>
<div class="p-4 bg-green-50 rounded-lg text-center" v-click>

**2nd generation**

Deep learning (2010s)

Continuous activations, GPUs

</div>
<div class="p-4 bg-purple-50 rounded-lg text-center" v-click>

**3rd generation**

Spiking neural networks

Analog + digital, neuromorphic hardware

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-orange-50 rounded-lg text-center">

Each generation moves closer to how the brain actually works &mdash; event-driven, sparse, and efficient

</div>

<p class="text-xs text-gray-400 text-center mt-2">Maass, "Networks of Spiking Neurons: The Third Generation of Neural Network Models", 1997</p>

</v-click>

---
class: text-center
---

# Summary & resources

<div class="p-3 bg-blue-50 rounded-lg text-center mt-4">

**Brains are both analog and digital** (von Neumann, 1958) &mdash; neurons integrate in analog, communicate with digital spikes, and are $10^8\times$ more efficient than our best computers. SNNs and neuromorphic hardware exploit this hybrid nature.

</div>


**Jens Egholm Pedersen** &middot; jegpe@dtu.dk

<div class="grid grid-cols-2 gap-8 text-left text-sm mx-auto mt-4" style="max-width: 600px;">
<div>

**Papers**

- [The third generation of neural network models (1997)](https://doi.org/10.1016/S0893-6080(97)00011-7)
- [Spatio-temporal receptive fields (2025)](https://www.nature.com/articles/s41467-025-63493-0)
- [NIR (2024)](https://www.nature.com/articles/s41467-024-52259-9)
- [Spiking Wavelets (2026)](https://arxiv.org/abs/2602.02020)

</div>
<div>

**Learn more**

- [jepedersen.dk](https://jepedersen.dk)
- [open-neuromorphic.org](https://open-neuromorphic.org)
- [snnbook.net](https://snnbook.net) &mdash; free SNN textbook
- [Norse](https://github.com/norse/norse) &mdash; PyTorch SNN library

</div>
</div>

<br/>

<p class="text-lg">Questions? 🙋</p>
