---
theme: default
title: "Frames without frames"
info: |
  EdgeAI — "Beyond von Neumann compute: Neuromorphic AI at the edge"
  September 2026
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
math: katex
---

# Frames without frames

## Signal-processing guarantees for event-driven neuromorphic computation


<img src="/_assets/chiptobrain.png" class="h-32 mx-auto my-2"/>


**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

Postdoc, DTU Electro

<br/>

EdgeAI &mdash; *Beyond von Neumann compute* &mdash; September 2026

---

# Wavelet "frame", not video "frame"

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

A **frame** is a redundant, stable way of representing a signal.

<div class="mt-6 p-3 bg-yellow-50 rounded-lg text-sm">

Analysis: $\boldsymbol{T}\colon V \to \ell^2. \qquad \qquad$ Synthesis: $\boldsymbol{T}^\star \colon \ell^2 \to V$

</div>

<v-click>

Not a video frame. A guarantee that a (compressed) representation is "meaningful".

</v-click>

</div>
<div>

<div class="relative h-72">
<div v-click.hide="2" class="absolute inset-0">

<svg viewBox="0 0 420 340" class="w-full max-h-72 mx-auto">
  <rect x="110" y="8" width="200" height="52" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <path d="M 128 38 q 11 -13 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="118" y="26" style="font-size:13px;fill:#1e40af;font-style:italic;">f(t)</text>
  <text x="326" y="40" style="font-size:15px;fill:#64748b;font-style:italic;">V</text>
  <line x1="210" y1="60" x2="210" y2="98" stroke="#475569" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="218" y="78" style="font-size:13px;fill:#0f172a;font-weight:600;">T</text>
  <text x="230" y="78" style="font-size:10px;fill:#64748b;">analysis</text>
  <rect x="40" y="102" width="340" height="112" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="52" y1="158" x2="368" y2="158" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="56" y1="158" x2="56" y2="152" stroke="#475569" stroke-width="1.8"/>
  <circle cx="56" cy="152" r="2.2" fill="#475569"/>
  <line x1="70" y1="158" x2="70" y2="168" stroke="#475569" stroke-width="1.8"/>
  <circle cx="70" cy="168" r="2.2" fill="#475569"/>
  <line x1="84" y1="158" x2="84" y2="136" stroke="#475569" stroke-width="1.8"/>
  <circle cx="84" cy="136" r="2.2" fill="#475569"/>
  <line x1="98" y1="158" x2="98" y2="162" stroke="#475569" stroke-width="1.8"/>
  <circle cx="98" cy="162" r="2.2" fill="#475569"/>
  <line x1="112" y1="158" x2="112" y2="144" stroke="#475569" stroke-width="1.8"/>
  <circle cx="112" cy="144" r="2.2" fill="#475569"/>
  <line x1="126" y1="158" x2="126" y2="186" stroke="#475569" stroke-width="1.8"/>
  <circle cx="126" cy="186" r="2.2" fill="#475569"/>
  <line x1="140" y1="158" x2="140" y2="150" stroke="#475569" stroke-width="1.8"/>
  <circle cx="140" cy="150" r="2.2" fill="#475569"/>
  <line x1="154" y1="158" x2="154" y2="140" stroke="#475569" stroke-width="1.8"/>
  <circle cx="154" cy="140" r="2.2" fill="#475569"/>
  <line x1="168" y1="158" x2="168" y2="170" stroke="#475569" stroke-width="1.8"/>
  <circle cx="168" cy="170" r="2.2" fill="#475569"/>
  <line x1="182" y1="158" x2="182" y2="124" stroke="#475569" stroke-width="1.8"/>
  <circle cx="182" cy="124" r="2.2" fill="#475569"/>
  <line x1="196" y1="158" x2="196" y2="164" stroke="#475569" stroke-width="1.8"/>
  <circle cx="196" cy="164" r="2.2" fill="#475569"/>
  <line x1="210" y1="158" x2="210" y2="148" stroke="#475569" stroke-width="1.8"/>
  <circle cx="210" cy="148" r="2.2" fill="#475569"/>
  <line x1="224" y1="158" x2="224" y2="178" stroke="#475569" stroke-width="1.8"/>
  <circle cx="224" cy="178" r="2.2" fill="#475569"/>
  <line x1="238" y1="158" x2="238" y2="132" stroke="#475569" stroke-width="1.8"/>
  <circle cx="238" cy="132" r="2.2" fill="#475569"/>
  <line x1="252" y1="158" x2="252" y2="166" stroke="#475569" stroke-width="1.8"/>
  <circle cx="252" cy="166" r="2.2" fill="#475569"/>
  <line x1="266" y1="158" x2="266" y2="154" stroke="#475569" stroke-width="1.8"/>
  <circle cx="266" cy="154" r="2.2" fill="#475569"/>
  <line x1="280" y1="158" x2="280" y2="142" stroke="#475569" stroke-width="1.8"/>
  <circle cx="280" cy="142" r="2.2" fill="#475569"/>
  <line x1="294" y1="158" x2="294" y2="172" stroke="#475569" stroke-width="1.8"/>
  <circle cx="294" cy="172" r="2.2" fill="#475569"/>
  <line x1="308" y1="158" x2="308" y2="128" stroke="#475569" stroke-width="1.8"/>
  <circle cx="308" cy="128" r="2.2" fill="#475569"/>
  <line x1="322" y1="158" x2="322" y2="168" stroke="#475569" stroke-width="1.8"/>
  <circle cx="322" cy="168" r="2.2" fill="#475569"/>
  <line x1="336" y1="158" x2="336" y2="152" stroke="#475569" stroke-width="1.8"/>
  <circle cx="336" cy="152" r="2.2" fill="#475569"/>
  <line x1="350" y1="158" x2="350" y2="180" stroke="#475569" stroke-width="1.8"/>
  <circle cx="350" cy="180" r="2.2" fill="#475569"/>
  <line x1="364" y1="158" x2="364" y2="146" stroke="#475569" stroke-width="1.8"/>
  <circle cx="364" cy="146" r="2.2" fill="#475569"/>
  <text x="388" y="164" style="font-size:15px;fill:#64748b;font-style:italic;">&#8467;&#178;</text>
  <text x="210" y="206" style="font-size:10px;fill:#475569;text-anchor:middle;">signed, real-valued, any amplitude</text>
  <line x1="210" y1="214" x2="210" y2="252" stroke="#475569" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="218" y="232" style="font-size:13px;fill:#0f172a;font-weight:600;">T&#8902;</text>
  <text x="240" y="232" style="font-size:10px;fill:#64748b;">synthesis</text>
  <rect x="110" y="256" width="200" height="52" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <path d="M 128 286 q 11 -13 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="118" y="274" style="font-size:13px;fill:#1e40af;font-style:italic;">&#8776; f(t)</text>
  <text x="326" y="288" style="font-size:15px;fill:#64748b;font-style:italic;">V</text>
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
    </marker>
  </defs>
</svg>

</div>
<div v-click="2" class="absolute inset-0">

<svg viewBox="0 0 420 340" class="w-full max-h-72 mx-auto">
  <rect x="110" y="8" width="200" height="52" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <path d="M 128 38 q 11 -13 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="118" y="26" style="font-size:13px;fill:#1e40af;font-style:italic;">f(t)</text>
  <text x="326" y="40" style="font-size:15px;fill:#64748b;font-style:italic;">V</text>
  <line x1="210" y1="60" x2="210" y2="98" stroke="#475569" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="218" y="78" style="font-size:13px;fill:#0f172a;font-weight:600;">T</text>
  <text x="230" y="78" style="font-size:10px;fill:#64748b;">analysis</text>
  <rect x="40" y="102" width="340" height="112" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <rect x="62" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="88" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="104" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="150" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="178" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="214" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="246" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="292" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="318" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="356" y="121" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="70" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="96" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="132" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="160" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="196" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="230" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="268" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="300" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="340" y="141" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="58" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="84" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="118" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="142" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="186" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="222" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="254" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="288" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="324" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="360" y="161" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="76" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="110" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="138" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="172" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="208" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="240" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="276" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="310" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <rect x="348" y="181" width="2.5" height="11" rx="1" fill="#059669"/>
  <text x="388" y="164" style="font-size:15px;fill:#64748b;font-style:italic;">&#8467;&#178;</text>
  <text x="210" y="206" style="font-size:10px;fill:#047857;text-anchor:middle;">all-or-nothing spikes, no amplitude</text>
  <line x1="210" y1="214" x2="210" y2="252" stroke="#475569" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="218" y="232" style="font-size:13px;fill:#0f172a;font-weight:600;">T&#8902;</text>
  <text x="240" y="232" style="font-size:10px;fill:#64748b;">synthesis</text>
  <rect x="110" y="256" width="200" height="52" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <path d="M 128 286 q 11 -13 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="118" y="274" style="font-size:13px;fill:#1e40af;font-style:italic;">&#8776; f(t)</text>
  <text x="326" y="288" style="font-size:15px;fill:#64748b;font-style:italic;">V</text>
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
    </marker>
  </defs>
</svg>

</div>
</div>

</div>
</div>

---

# Neuromorphic computing has existed since the 80's

<div class="text-xl mb-1"><v-click>Where is it?</v-click></div>

<div class="relative w-full" style="height:255px;">

<div v-click class="absolute" style="left:8px; top:0px; width:360px; z-index:10; transform:rotate(-5deg);">
<div style="background:#fff; border:1px solid #e2e8f0; border-radius:2px; box-shadow:0 8px 22px rgba(15,23,42,.16); padding:11px 14px 12px;">
<!-- for a real screenshot, replace this inner div with:
     <img src="/_assets/clip_mehonic.png" class="w-full"/> -->
<div style="font-size:9.5px; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8;">Nature 604, 255&ndash;260 &middot; 2022</div>
<div style="font-family:Georgia,serif; font-size:15px; font-weight:700; line-height:1.28; color:#0f172a; margin:5px 0 6px;">Brain-inspired computing needs a master plan</div>
<div style="font-size:11px; color:#64748b;">Mehonic &amp; Kenyon</div>
</div>
</div>
<div v-click class="absolute" style="left:298px; top:-8px; width:360px; z-index:20; transform:rotate(3.5deg);">
<div style="background:#fff; border:1px solid #e2e8f0; border-radius:2px; box-shadow:0 8px 22px rgba(15,23,42,.16); padding:11px 14px 12px;">
<!-- for a real screenshot, replace this inner div with:
     <img src="/_assets/clip_frenkel.png" class="w-full"/> -->
<div style="font-size:9.5px; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8;">Proc. IEEE 111(6), 623&ndash;652 &middot; 2023</div>
<div style="font-family:Georgia,serif; font-size:15px; font-weight:700; line-height:1.28; color:#0f172a; margin:5px 0 6px;">Bottom-Up and Top-Down Approaches for the Design of Neuromorphic Processing Systems</div>
<div style="font-size:11px; color:#64748b;">Frenkel, Bol &amp; Indiveri</div>
</div>
</div>
<div v-click class="absolute" style="left:540px; top:10px; width:360px; z-index:30; transform:rotate(-3deg);">
<div style="background:#fff; border:1px solid #e2e8f0; border-radius:2px; box-shadow:0 8px 22px rgba(15,23,42,.16); padding:11px 14px 12px;">
<!-- for a real screenshot, replace this inner div with:
     <img src="/_assets/clip_kudithipudi.png" class="w-full"/> -->
<div style="font-size:9.5px; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8;">Nature 637, 801&ndash;812 &middot; 2025</div>
<div style="font-family:Georgia,serif; font-size:15px; font-weight:700; line-height:1.28; color:#0f172a; margin:5px 0 6px;">Neuromorphic computing at scale</div>
<div style="font-size:11px; color:#64748b;">Kudithipudi, Schuman, Vineyard et al.</div>
</div>
</div>
<div v-click class="absolute" style="left:118px; top:98px; width:360px; z-index:40; transform:rotate(2.5deg);">
<div style="background:#fff; border:1px solid #e2e8f0; border-radius:2px; box-shadow:0 8px 22px rgba(15,23,42,.16); padding:11px 14px 12px;">
<!-- for a real screenshot, replace this inner div with:
     <img src="/_assets/clip_muir.png" class="w-full"/> -->
<div style="font-size:9.5px; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8;">Nature Communications 16, 3586 &middot; 2025</div>
<div style="font-family:Georgia,serif; font-size:15px; font-weight:700; line-height:1.28; color:#0f172a; margin:5px 0 6px;">The road to commercial success for neuromorphic technologies</div>
<div style="font-size:11px; color:#64748b;">Muir &amp; Sheik</div>
</div>
</div>
<div v-click class="absolute" style="left:418px; top:116px; width:360px; z-index:50; transform:rotate(-4.5deg);">
<div style="background:#fff; border:1px solid #e2e8f0; border-radius:2px; box-shadow:0 8px 22px rgba(15,23,42,.16); padding:11px 14px 12px;">
<!-- for a real screenshot, replace this inner div with:
     <img src="/_assets/clip_indiveri.png" class="w-full"/> -->
<div style="font-size:9.5px; letter-spacing:.08em; text-transform:uppercase; color:#94a3b8;">Neuron 113(20), 3311&ndash;3314 &middot; 2025</div>
<div style="font-family:Georgia,serif; font-size:15px; font-weight:700; line-height:1.28; color:#0f172a; margin:5px 0 6px;">Neuromorphic is dead. Long live neuromorphic.</div>
<div style="font-size:11px; color:#64748b;">Indiveri</div>
</div>
</div>

</div>

<v-click>

<div class="p-2 bg-yellow-50 rounded-lg text-center text-sm">

We need models and theories that are **co-designed** with hardware.

</div>

</v-click>

---


# The argument, in one slide

<div class="text-xl my-8">

**Sensors are** (starting to be) **ready**. The **models are built by hand** &mdash; not from theory.

</div>

<v-clicks>

1. **The gap** &mdash; the sensors compete, the models on top don't
2. **The promise** &mdash; structure-preserving transformations **in the hardware**
3. **To hardware** &mdash; purely event-driven end to end, compiled

</v-clicks>

<!--
45-60 s. Say "spec" or "contract" out loud here — it is the handle for the rest of the talk.
This slide replaces a separate "what a guarantee buys you" bridge later on.
-->

---
layout: section
---

# Part I
## The gap
### Physical edge intelligence, event-based

---

# The sensors are ready

<div class="grid grid-cols-2 gap-8 items-center">
<div>

Each pixel **independently** reports brightness changes.

<v-clicks>

- **Microsecond** temporal resolution
- **120 dB** dynamic range (vs ~60 dB conventional)
- Only changes are transmitted &mdash; no redundancy
- Fundamentally **asynchronous**

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-blue-50 rounded-lg text-sm">

Same story beyond vision: **always-on keyword spotting**, **wearable ECG**,
**high-speed tracking** &mdash; anywhere the interesting thing is *a change*.

</div>

</v-click>


</div>
<div>

<img src="/_assets/event_sensor.png" class="w-full"/>
<p class="text-xs text-gray-400 text-center">One pixel: an event each time log-luminance crosses a threshold</p>

</div>
</div>

---

# ...the pipelines are not

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

We can build the circuits &mdash; but the pipelines that consume them are **built manually**.

<v-clicks>

- Filters chosen **empirically**, tuned per dataset
- No principled answer to whether the spike stream still contains the signal
- No account of what happens when the scene **moves or rescales**
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

# Part II
## Two guarantees
### Stable signal recovery &middot; covariance

---

# Guarantee 1 &mdash; the signal survives the spikes

<p class="text-sm text-gray-400 -mt-3 mb-2">Spiking wavelet frames</p>

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

<v-click>

**Claim** &mdash; a *frame*: **stably recoverable from spikes**, with bounds.

Leaky integrators all the way down.

</v-click>

<v-click>

**Limit** &mdash; quality **plateaus** with channel count. Spike *counts*, not spike *times* &mdash; yet.

</v-click>

</div>
<div>

<img src="/_assets/swavelet_results.png" class="h-40 mx-auto mt-3"/>
<p class="text-xs text-gray-400 text-center">Pedersen, Lindeberg &amp; Gerstoft, arXiv:2602.02020, 2026</p>

</div>
</div>

<v-click>

<div class="mt-3 p-2 bg-green-50 rounded-lg text-center text-sm">

The bound says the signal is still there &mdash; **no reason to decode back to check.**

</div>

</v-click>

---

# Guarantee 2 &mdash; features survive motion and scale

<p class="text-sm text-gray-400 -mt-3 mb-2">Covariant spatio-temporal receptive fields</p>

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

Object approaches &rarr; scale changes &rarr; tuned features degrade &rarr; someone retrains.

<v-click>

**Claim** &mdash; $\phi$ is **covariant** if it transforms predictably under $g$:

$$g \cdot \phi = \phi' \cdot g'$$

Invariance discards $g$. Covariance **keeps** it.

</v-click>

<v-click>

LIF neurons are **approximately scale covariant** &mdash; already in the hardware.

Use them as a prior and training improves: **Cohen's _d_ &ge; 1.9** (LI), **&ge; 1.6** (LIF),
under both spatial and temporal scaling.

</v-click>

<v-click>

**Limit** &mdash; exact in continuous time; on hardware it holds across the scales you actually build.

</v-click>

</div>
<div>

<img src="/_assets/spatiotemporal_covariance.png" class="h-45 mx-auto"/>

<img src="/_assets/rfs_result.png" class="h-30 mx-auto mt-3"/>
<p class="text-xs text-gray-400 text-center">Pedersen, Conradt &amp; Lindeberg, Nature Communications, 2025</p>

</div>
</div>

<!--
~3.5 min. NO biological-plausibility framing for this room — the frog stays home.
The limit bullet is first on the cut list if running long.

NOTE: the old "42.4% over ANN baselines" line was wrong, and the same error is in
2602_ITU_REAL and 2604_DTU_bioeng. In the paper the 42.4% is the improvement in L2 loss
(1.13 px, spatial scaling) over UNIFORM INITIALISATION of the same model — not over an
ANN baseline. Cohen's d is the effect size the paper actually reports for the RF prior.
-->

---
layout: section
---

# Part III
## To hardware
### What the guarantees buy, and what runs today

---

# End to end, purely event-driven

<div class="grid grid-cols-[2fr_3fr] gap-6 items-center">
<div>

<div>

- **Filter the spikes, and you filter the signal**
- Convolution, filtering, features &mdash; **directly on spike trains**
- No decode / re-encode detour
- **Latency** set by the sensor &middot; **energy** &prop; events, not pixels

</div>

</div>
<div>
<div class="text-center text-sm">

**Conventional**

```mermaid {scale: 0.62}
graph LR
    A["Signal"] --> B["Frame ADC"] --> HW --> D["DAC"] --> E["Action"]
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
    A["Signal"] --> NM --> E["Action"]
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

<v-click>

<div class="mt-4 p-3 bg-orange-50 rounded-lg text-center text-sm">

The guarantee is stated in **continuous time**. A GPU has to clock and discretise it &mdash;
reintroducing the very frame we removed. Neuromorphic hardware **runs ODEs in parallel**.

</div>

</v-click>

---

# From model to FPGA, through NIR

<div class="grid grid-cols-[3fr_2fr] gap-8 items-center">
<div>

Neuromorphic Intermediate Representation (NIR)

Unifies deployment of models across **14+ platforms**

<v-clicks>

- **NIR** defines primitives as **continuous-time ODEs**
- Vendors implement the same ODEs &mdash; train anywhere &rarr; NIR &rarr; deploy anywhere
- Intel, SynSense Speck & Xylo, SpiNNaker2, BrainScaleS, FPGA
- Check out https://synfire.dev

</v-clicks>

<v-click>

<div class="mt-4 p-3 bg-orange-50 rounded-lg text-sm">

**Preliminary &mdash; NIR2FPGA:** Spiking wavelets -> NIR -> FPGA

</div>

</v-click>

</div>
<div>

<img src="/_assets/nir_platforms.png" class="h-36 mx-auto"/>
<p class="text-xs text-gray-400 text-right">Pedersen et al., Nature Communications, 2024</p>

<img src="/_assets/nir2fpga_table.png" class="h-32 mx-auto mt-3"/>
<p class="text-xs text-gray-400 text-center">Circuit matches the reference. Spiking wavelet on MIT-BIH; event rates in parentheses.</p>

</div>
</div>

<!--
~2.5 min. This is the slot the industry half can act on — keep it intact when cutting.

FPGA text is drawn from the NIR2FPGA draft (Rontionov, Ayala Le Brun, Beladel, Thomas,
Frenkel, Pedersen). The abstract claims "significant reduction in latency whilst
maintaining higher accuracy" vs Spiker+ but the draft's comparison table still has
unresolved refs — so no hard numbers are quoted here. Check before saying any out loud.

Per-chip power figures were deliberately removed: they aren't measured on a common
workload, a mW ladder implies a ranking that doesn't hold without naming task and
throughput, and some of these vendors are likely in the room. The argument here is
portability, not a chip comparison. If asked for numbers, give them per workload or
not at all.
-->

---

# What it takes to leave the lab

<div class="grid grid-cols-2 gap-12 items-start mt-4">
<div>

### What we bring

<v-clicks>

- End-to-end signal processing **in the spike domain**, with bounds
- Spiking wavelets as NIR graphs, executable on neuromorphic hardware
  - Algorithm &rarr; NIR &rarr; chip
- Event-based, asynchronous, edge computing

</v-clicks>

</div>
<div>

### What we are looking for

<v-clicks>

- **Signal-processing problems** with real power, latency and form-factor constraints
- Problems suitable for spiking edge processing
- Benchmarks to be measured against

</v-clicks>

</div>
</div>

<v-click>

<div class="mt-6 p-4 bg-orange-50 rounded-lg text-center">

Bring me an always-on sensing problem where **latency or battery is the binding
constraint** &mdash; we will compile it through NIR and tell you what it costs.

</div>

</v-click>

<!--
~1.5 min.
-->

---

# Thank you

<div class="text-lg my-6">

**Sensors are** (starting to be) **ready**. The **models are built by hand** &mdash; not from theory.

</div>

**Jens Egholm Pedersen** &middot; jegpe@dtu.dk &middot; jepedersen.dk

<div class="grid grid-cols-2 gap-8 text-left text-sm mx-auto mt-6" style="max-width: 600px;">
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

<!--
Deliberately NOT in the main talk — this room has heard the energy-wall slide before,
and it is not what the talk is about. Pull it up only if asked.
-->
