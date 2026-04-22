---
theme: default
title: "Aligning Physics with Computation"
info: |
  Guest lecture for Energy Efficient Computing
  Stanford University, 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Aligning Physics with Computation

### From physical systems to neuromorphic hardware

<br/>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; [jepedersen.dk](https://jepedersen.dk)

DTU Electro

<br/>

Energy Efficient Computing &mdash; Stanford, 2026

---

# When does a physical system compute?

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

Horsman et al. (2014): computation requires a **representation relation** $\mathcal{R}$ between a physical system and an abstract model

<v-clicks>

- A physical system $p$ evolves: $p \xrightarrow{e_p} p'$
- We *interpret* $p$ through $\mathcal{R}$ to get abstract model $m_p$
- We evaluate abstractly: $m_p \xrightarrow{e} m'_p$
- Computation occurs when the diagram **commutes**: $m'_p \sim m_{p'}$

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-50 rounded-lg text-sm">

**The alignment question**: when $\mathcal{R}$ maps naturally &mdash; when the physics *matches* the abstraction &mdash; computation becomes cheap

</div>

</v-click>

</div>
<div>

![When does a physical system compute?](/horsman.png)

<p class="text-xs text-gray-400 text-center mt-2">Horsman et al., "When does a physical system compute?", 2014</p>

</div>
</div>

---

# Computational classes and representations

<div class="grid grid-cols-[3fr_3fr] gap-8 items-center">
<div>

<img src="/compfun.png" class="h-40 mx-auto"/>
<p class="text-xs text-gray-400 text-center mt-2">Adapted from Yanofsky, 2022</p>

</div>
<div>

Yanofsky (2022): different representations are **isomorphic** &mdash; strings, naturals, booleans, reals all map to the same computable functions

<v-clicks>

- CompFunc $\hookrightarrow$ Func: not all functions are computable
- All computable **representations** are equivalent
- Computation is a **structure-preserving map** between algebras, not a property of the substrate

</v-clicks>

<v-click>

</v-click>

</div>
</div>

---

# Source-independent linking and semantic retention

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Horsman's diagram must commute **across substrates** &mdash; but how do we guarantee this?

<v-clicks>

- **Horizontal compositionality**: link  each target
- **Source-independent linking** (Patterson, 2019): inject a verified **adapter**

</v-clicks>

<v-click>

$$\text{Source} \xrightarrow{\mathcal{R}} \text{IR} \xrightarrow{\mathcal{R}_\text{IR}} \text{Target}$$

If both $\mathcal{R}$ and $\mathcal{R}_\text{IR}$ are correct, the composition is correct &mdash; **compiler correctness by construction**

</v-click>

<v-click>

<div class="mt-4 p-3 bg-blue-50 rounded-lg text-sm">

Morris (1973): nodes are **algebras**, arrows **homomorphisms**

</div>

</v-click>

</div>
<div>

<img src="/source_independent_linking.png" class="h-50 mx-auto"/>
<p class="text-xs text-gray-400 text-center">From graph representation to physical execution via source-independent linking</p>

</div>
</div>

---

# 27 orders of magnitude

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<img src="/energy_limit.png" class="h-80 mx-auto"/>
<p class="text-xs text-gray-400 text-center">Shankar, Energy Estimates, 2023</p>

</div>
<div>

<v-clicks>

- Landauer limit: $\sim10^{-21}$ J
- Biological unit operation: $\sim10^{-19}$ J
- Digital switch: $\sim10^{-17}$ J
- FP64 instruction: $\sim10^{-9}$ J

</v-clicks>

<v-click>

The gap is **the cost of the representation relation** $\mathcal{R}$

</v-click>

</div>
</div>

---

# The brain: analog compute, digital communication

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Von Neumann (1958): the nervous system uses **two types of communication**

<v-clicks>

- **Analog**: membrane voltages, synaptic currents &mdash; continuous, numerical
- **Digital**: spikes are all-or-nothing &mdash; discrete, logical, robust
- Memory and computation are **co-located** in synapses

</v-clicks>

</div>
<div>

<v-click>

The leaky integrator is the canonical example of physics-algorithm alignment:

$$\tau \frac{dv}{dt} = -v + I$$

An ion channel implements this ODE **natively** &mdash; the physics *is* the computation.

</v-click>

<v-click>

> "... the nervous system is based on two types of communications: those which do not involve arithmetical formalisms, and those which do, i.e. communications of orders (logical ones) and communications of numbers (arithmetical ones)."
>
> <span class="text-sm text-gray-500">&mdash; von Neumann, *The Computer and the Brain*, 1958</span>

</v-click>

</div>
</div>


---

# Axiomatizing $\mathcal{R}$ for neuromorphic systems

<div class="grid grid-cols-2 gap-8 items-center">
<div>

What are the **necessary conditions** for a representation relation over neuromorphic substrates?

<v-clicks>

1. **Hybrid primitives**: parameterized ODEs $f\colon \mathbb{R}^N \to \Theta \to \mathbb{R}^M$ &mdash; capturing both continuous dynamics and discrete events
2. **Compositional graphs**: directed graphs of primitives &mdash; signal flow without side effects
3. **Source-independent linking**: substrate-invariant intermediate representation, verifiable in isolation
4. **Semantic retention**: the diagram commutes across substrates &mdash; if $\mathcal{R}_\text{IR}$ and $\mathcal{R}$ is correct

</v-clicks>

</div>
<div>

<v-click>

<img src="/nir.png" class="h-50 mx-auto"/>
<p class="text-xs text-gray-400 text-center">From abstract model to platform execution</p>

</v-click>

</div>
</div>

---

# NIR: instantiating the representation relation

<div class="grid grid-cols-2 gap-8 items-center">
<div>

NIR implements these axioms concretely:

<v-clicks>

- Primitives are **continuous-time ODEs** with parameters
- The graph is **substrate-agnostic** &mdash; no discretization baked in
- Backends instantiate as needed:
  - Analog HW → run the ODE in physics
  - Digital HW → Euler / fixed-point discretization
  - Software → any ODE solver

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-yellow-50 rounded-lg text-center text-sm">

The **same model** runs on 10+ platforms: Norse, snnTorch, Lava, Rockpool, Loihi, SpiNNaker, BrainScaleS, ...

</div>

</v-click>

</div>
<div>

<img src="/nir_hw.png" class="h-35 mx-auto mb-4"/>

<img src="/nir_platforms.png" class="h-35 mx-auto"/>

</div>
</div>

---

# The cost of $\mathcal{R}$

<div class="grid grid-cols-2 gap-8 items-center">
<div>

The **cost of the representation relation** determines energy efficiency:

<v-clicks>

- Von Neumann: $\mathcal{R}$ is cheap for logic, expensive for numerics (data movement, precision)
- Analog neuromorphic: $\mathcal{R}$ is cheap for ODEs, expensive for logic
- A single physical system can implement **many computations** depending on how you interpret it (Wolpert & Korbel, 2026)

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-green-50 rounded-lg text-sm">

The question is not "what can this substrate compute?" but "**for which computations is $\mathcal{R}$ cheapest?**"

</div>

</v-click>

</div>
<div>

<img src="/programming_nm.png" class="h-55 mx-auto"/>
<p class="text-xs text-gray-400 text-center">Pedersen et al., Nature Reviews Electrical Engineering, 2025</p>

</div>
</div>

---

# The computing continuum

<div class="mt-8">

<div class="grid grid-cols-5 gap-3 text-center text-sm">

<div class="p-3 bg-blue-100 rounded-lg">

**CPU**

von Neumann

Precise logic

~100 W

</div>

<div class="p-3 bg-blue-200 rounded-lg">

**GPU / TPU**

Parallel arithmetic

Dense matrix ops

~500 W

</div>

<div class="p-3 bg-green-100 rounded-lg">

**SNNs on GPUs**

Sparse, temporal

Same HW, new $\mathcal{R}$

~500 W

</div>

<div class="p-3 bg-green-200 rounded-lg">

**Digital neuromorphic**

Loihi, SpiNNaker

Event-driven

~1 W

</div>

<div class="p-3 bg-green-300 rounded-lg">

**Analog neuromorphic**

BrainScaleS, DynapCNN

Physics = compute

~1 mW

</div>

</div>

</div>

<v-click>

<div class="mt-6 text-center">

$$\xleftarrow{\text{Programmable / expensive } \mathcal{R}} \qquad \qquad \qquad \qquad \xrightarrow{\text{Physics-aligned / cheap } \mathcal{R}}$$

NIR lets you **move along this continuum** without rewriting your algorithm

</div>

</v-click>

---

# Handoff to Steven

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

**What we established**

<v-clicks>

1. Computation = **commutative diagram** between physics and abstraction (Horsman)
2. Computational representations are **isomorphic** &mdash; what matters is the cost of $\mathcal{R}$ (Yanofsky)
3. **Source-independent linking** + **semantic retention** guarantee correctness across substrates
4. Energy efficiency = how cheap $\mathcal{R}$ is &mdash; **27 orders of magnitude** separate atoms from algorithms
5. **NIR** instantiates this &mdash; one model, many substrates

</v-clicks>

</div>
<div>

<v-click>

**References**

- [Horsman et al. (2014)](https://doi.org/10.1098/rspa.2014.0182) &mdash; When does a physical system compute?
- [Yanofsky (2022)](https://doi.org/10.1017/9781108872348) &mdash; TCS for the Working Category Theorist
- [Wolpert & Korbel (2026)](https://doi.org/10.48550/arXiv.2403.14280) &mdash; What does it mean for a system to compute?
- [NIR (2024)](https://www.nature.com/articles/s41467-024-52259-9)
- [Neuromorphic programming (2025)](https://doi.org/10.1038/s44287-025-00157-3)

</v-click>

</div>
</div>
