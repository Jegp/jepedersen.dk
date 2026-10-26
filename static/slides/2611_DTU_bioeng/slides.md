---
theme: default
title: "Brain-Inspired Computing with Spiking Neural Networks (30 min)"
info: |
  Guest lecture for 27020 Bioengineering (Polytechnical Foundation)
  DTU, Autumn 2026 — 30-minute version of the Spring 2026 lecture
  Budget: ~22 min lecture + ~6 min hands-on exercise + ~2 min questions
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

**Jens Egholm Pedersen** &middot; jeped@sdu.dk &middot; jepedersen.dk

DTU Electro

<br/>

27020 Bioengineering &mdash; Autumn 2026

</div>

<!--
0:00-0:01. Title only; the self-introduction is on the next slide to save time.
-->

---

# Today &mdash; 30 minutes

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<v-clicks>

1. **How does the brain compute?** &mdash; neurons, spikes, and energy
2. **Spiking Neural Networks** &mdash; mimicking the brain in software
3. **Seeing like the brain** &mdash; event cameras
4. **Research highlight** &mdash; covariant receptive fields
5. **Hands-on** &mdash; build a spiking neuron in your browser

</v-clicks>

<br/>

Postdoc at **DTU Electro** &middot; PhD in neurocomputing from **KTH**, MSc in computer science from **University of Copenhagen**

Research question: how can we build computers that work **like the brain**?

</div>
<div>

<img src="/dvxplorer.jpg" class="h-40 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center">An event camera &mdash; a sensor inspired by the retina</p>

<v-click>

> *"What I cannot create, I do not understand"* &mdash; Richard Feynman

</v-click>

</div>
</div>

<!--
0:01-0:02. Roadmap + one-breath self-introduction. Do not linger.
-->

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

<!--
0:02-0:04.
-->

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

<!--
0:04-0:08. The core slide of the lecture — the students will implement exactly
this equation later. Drive the slider; show sub-threshold input giving no spikes.
-->

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

<!--
0:08-0:11.
-->

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

<!--
0:11-0:13.
-->

---

# Seeing like the brain: event cameras

<div class="grid grid-cols-2 gap-8 items-center text-sm">
<div>

A regular camera takes **frames** at a fixed rate (e.g. 30 fps). An **event camera** works like a retina:

<v-clicks>

- Each pixel **independently** reports brightness changes
- Only **changes** are transmitted &mdash; no redundancy
- **Microsecond** temporal resolution (vs. 33 ms for 30 fps)
- **120 dB** dynamic range, **100&ndash;500 mW** power

</v-clicks>

<v-click>

<div class="mt-3">

This is the **natural input** for spiking neural networks: sparse, asynchronous, event-driven

</div>

</v-click>

</div>
<div>

<img src="/event_sensor.png" class="h-36 mx-auto mb-3"/>

<video src="/westmead_3d_small.mp4" autoplay loop muted controls class="h-44 mx-auto rounded shadow"/>
<p class="text-xs text-gray-400 text-center mt-1">Each dot is one brightness change event (Marcireau 2023)</p>

</div>
</div>

<!--
0:13-0:18. Sensing slide and live demo merged into one slide — switch to the
camera feed on the third click, then come back for the last line.
-->

---

# What the frog's eye tells the frog's brain

<div class="grid grid-cols-[3fr_1fr] gap-8 items-center">
<div>

Frog eyes are **bug detectors** &mdash; they respond to small, dark, moving objects

<v-clicks>

- The frog doesn't just detect "something is there": it knows the **size**, **position**, and **speed**
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

<!--
0:18-0:20. Research highlight, part 1 of 2 — kept short.
-->

---

# Receptive fields: the leak *is* the filter

<div class="grid grid-cols-2 gap-8 items-center text-sm">
<div>

Neurons respond to specific patterns in **space** and **time** &mdash; their **receptive field**

<v-click>

The leaky integrator in a LIF neuron **is** a temporal receptive field:

$$h(t;\, \mu) = \frac{1}{\mu}e^{-t/\mu}, \quad t > 0$$

</v-click>

<v-clicks>

- LIF neurons are **naturally scale-covariant**, with mathematical guarantees
- Standard neuromorphic primitives only &mdash; deployable on chip

</v-clicks>

</div>
<div class="relative h-100">

<div v-click="[1, 3]" class="absolute inset-0">

<video src="/temporal_fast.mp4" autoplay loop muted class="h-44 mx-auto rounded"/>

<video src="/temporal_slow.mp4" autoplay loop muted class="h-44 mx-auto rounded mt-2"/>

</div>

<div v-click="3" class="absolute inset-0">

<video src="/circle_dense_coo.mp4" autoplay loop muted class="h-88 mx-auto"/>
<p class="text-xs text-right text-gray-400">Pedersen, Conradt, &amp; Lindeberg, Nature Communications, 2025</p>

</div>

<div v-click="4" class="absolute inset-0">

<video src="/circle_sparse_coo.mp4" autoplay loop muted class="h-88 mx-auto"/>
<p class="text-xs text-right text-gray-400">Pedersen, Conradt, &amp; Lindeberg, Nature Communications, 2025</p>

</div>

</div>
</div>

<!--
0:20-0:23. Research highlight, part 2 of 2 — receptive-field concept and result
on one slide. Four clicks: temporal RFs, then dense, then sparse. Dropped from
the 60-min version: the spatial Gaussian videos and the NIR slide.
-->

---

# Your turn: build the neuron

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<div class="p-4 bg-blue-50 rounded-lg text-center mt-2 mb-2">

<img src="/exercise_qr.png" class="h-72 mx-auto" alt="QR code"/>

[jepedersen.dk/posts/talks/202611_dtu_bioeng_exercise/](https://jepedersen.dk/posts/talks/202611_dtu_bioeng_exercise/)

</div>

</div>
<div>

The code starts as an **identity function**. Your job, in order:

1. Make the voltage **integrate and leak**
2. Make it **spike and reset**
3. Then start breaking it

<br/>

The equation being simulated:

$$\tau_m \frac{dv}{dt} = -v + I$$

When $v \geq 1$: **spike** and reset

</div>
</div>

<!--
0:23-0:29, six minutes hands-on. Steps 1 and 2 are the whole point; the
variations (threshold, noise, no leak) are for whoever finishes early.
Walk around rather than talking over them. The page gives hints, not answers.
-->

---

# What you just built, and where it goes

<div class="grid grid-cols-3 gap-6 mt-6">
<div class="p-4 bg-blue-50 rounded-lg text-center" v-click>

**Leaky integrator**

The temporal receptive field from the research

$$v_{t+1} = \alpha \cdot v_t + I_t$$

</div>
<div class="p-4 bg-green-50 rounded-lg text-center" v-click>

**Spike threshold**

Continuous signal &rarr; binary events

The basis of energy-efficient communication in the brain

</div>
<div class="p-4 bg-purple-50 rounded-lg text-center" v-click>

**Network of neurons**

Exactly what neuromorphic chips implement in hardware

</div>
</div>

<v-click>

<div class="grid grid-cols-5 gap-2 mt-8 text-sm">
<div class="p-2 bg-blue-50 rounded-lg text-center">

**CPU**

Sequential, clock-driven &middot; ~200 W

</div>
<div class="p-2 bg-blue-100 rounded-lg text-center">

**GPU / TPU**

Parallel, already using sparsity &middot; ~500 W

</div>
<div class="p-2 bg-blue-200 rounded-lg text-center">

**SNNs on GPUs**

Bio-inspired algorithms, conventional hardware

</div>
<div class="p-2 bg-green-100 rounded-lg text-center">

**Digital neuromorphic**

Intel Loihi, BrainChip Akida &middot; ~1 W

</div>
<div class="p-2 bg-green-200 rounded-lg text-center">

**Analog neuromorphic**

SynSense, Innatera &middot; ~1 mW

</div>
</div>

<div class="flex justify-between mt-1 text-xs text-gray-400 px-4">
<span>&larr; von Neumann</span>
<span>Neuromorphic &rarr;</span>
</div>

</v-click>

<!--
0:29-0:30. Debrief and the bigger picture on one slide. Dropped from the 60-min
version: "Think about", the three generations of neural networks, and the
standalone computing-continuum slide.
-->

---
class: text-center
---

# Summary & resources

<div class="p-3 bg-blue-50 rounded-lg text-center mt-4">

**Brains are both analog and digital** (von Neumann, 1958) &mdash; neurons integrate in analog, communicate with digital spikes, and are $10^8\times$ more efficient than our best computers. SNNs and neuromorphic hardware exploit this hybrid nature.

</div>


**Jens Egholm Pedersen** &middot; jeped@sdu.dk

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
