---
title: "Interactive exercise: build a spiking neuron"
pubdate: 2026-10-26
featured_image: img/dtu_logo.svg
description: "An interactive simulation of a Leaky Integrate-and-Fire (LIF) neuron for the 27020 Bioengineering guest lecture."
full_width: true
aliases:
  - /posts/talks/202611_dtu_bioeng_exercise/
venue: "DTU"

---

<style>
  /* The simulation does not fit the 68ch prose measure: the editor wraps the
     comments mid-sentence and the control labels get squeezed. Break the
     container out to the full .wrap width. The article is left-aligned inside
     .wrap, so widening rightwards lands exactly on .wrap's right edge. */
  .sim-wide {
    width: min(var(--page-max), calc(100vw - 2 * var(--space-md)));
    max-width: none;
  }
  /* dynsim injects the code editor as a sibling of #lif, so both need to sit
     inside .sim-wide to pick up the wider containing block. */
  .sim-wide > div, .sim-wide > div > div { width: 100% !important; }
  .dynsim-editor-textarea { min-height: 400px !important; }
  /* Force Plotly to fill container width */
  .js-plotly-plot, .plot-container, .plotly { width: 100% !important; }
</style>

This is a companion exercise for the guest lecture on
[Brain-Inspired Computing with Spiking Neural Networks](/talks/202611_dtu_bioeng/)
in [27020 Bioengineering](https://kurser.dtu.dk/course/27020).

## Leaky integrate-and-fire neuron

A LIF neuron integrates incoming current and fires a **spike** when its membrane voltage crosses a threshold.
Between spikes, the voltage **leaks** back towards rest --- just like a biological neuron.

The continuous-time equation for a LIF neuron is:

$$
\tau \frac{dv}{dt} = -v + I
$$

**Euler discretization** replaces $\frac{dv}{dt}$ with $\frac{v_{t+1} - v_t}{\Delta t}$.
Rearranging for $v_{t+1}$ gives you the one line of code you need below --- do that rearrangement on paper first.

When $v \geq \theta$, the neuron **spikes** and resets to $0$ (red lines in the plot).

Below is a live code editor. The simulation starts with a simple **identity function** (it just passes the input through).
Your task is to build up the LIF neuron step by step. Changes apply automatically as you type.

### Exercises

1. **Understand the setup** --- the code currently just returns `x` (the input current). Move the input slider and watch the plot. What do you see?
2. **Add the leak** --- implement one Euler step of the equation above, so that `v_new` depends on the previous voltage `v`, the input `x`, and the ratio `dt / tau`. What happens now when you increase the input? Why does the voltage settle where it does?
3. **Add spiking** --- the neuron should emit a spike once the voltage reaches the threshold $\theta = 1$. Two things have to happen at that moment: the membrane has to go back to rest, and `spiked` has to become `True`. Can you make the neuron fire?
4. **Change the threshold** --- make the neuron fire at half the voltage. What changes in the spike pattern, and what does *not* change?
5. **Add noise** --- put `import random` at the top of the function and perturb the input with a small Gaussian sample (`random.gauss` takes a mean and a standard deviation). How does noise affect spike timing? Does the neuron ever fire below the input you needed before?
6. **Break the leak** --- make the voltage integrate without decaying. What happens, and what does that tell you about why the leak is there?
7. **Predict first, then check** --- before you run each change above, write down what you expect the plot to look like. Where were you wrong?

<!-- Plotly -->
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>

<!-- PyScript -->
<script src="https://pyscript.net/releases/2024.11.1/core.js" type="module"></script>

<!-- DynSim -->
<script src="https://unpkg.com/dynsim"></script>

<!-- Simulation container -->
<div class="sim-wide">
<div id="lif" class="dynsim-python-container"
     style="min-height: 200px; display: flex; align-items: center; justify-content: center; color: #888;">
  Loading simulation…
</div>
</div>

<!-- Python system definition -->
<script type="py">
from pyscript import window
import json

STEP_CODE = '''
def step(x, state, params):
    v      = state["v"]      # voltage at the previous step
    dt     = params["dt"]    # time step
    tau    = params["tau"]   # time constant (slider)
    spiked = False           # did it fire on this step?

    # TODO (2): integrate and leak.
    #   The voltage just follows the input. Replace
    #   this with one Euler step of tau dv/dt = -v + I,
    #   built from v, x, dt and tau.
    v_new = x

    # TODO (3): fire and reset.
    #   Nothing here yet, so it never spikes. Compare
    #   v_new against the threshold (1.0) and decide
    #   what v_new and spiked should become.

    return [v_new, {"v": v_new, "z": spiked}]
'''

exec(STEP_CODE)

config = {
    "params": json.dumps([
        {"id": "tau", "label": "Time constant τ", "min": 1.0, "max": 50.0, "step": 1.0, "value": 10.0},
    ]),
    "plotType": "timeseries",
    "plotConfig": json.dumps({
        "title": "Membrane Potential",
        "xaxis": {"title": "Time (ms)", "range": [0, 200]},
        "yaxis": {"title": "v", "range": [-0.2, 1.3]},
    }),
    "initialState": json.dumps({"v": 0.0, "z": False}),
    "input": json.dumps({"label": "Current I", "min": 0, "max": 5, "step": 0.1, "value": 1}),
    "height": 450,
    "dt": 0.1,
    "spikes": "z",
    "spikeThreshold": 1.0,
    "pauseTime": 200,
    "editor": json.dumps({"code": STEP_CODE.strip(), "live": True}),
}
window.registerPythonSystem("lif", step, config)
</script>

## What you just built

This simulation implements exactly the same equation that biological neurons use.
The leaky integrator --- charge leaking through a membrane --- is the fundamental building block of:

- **Spiking neural networks** in software (e.g., [Norse](https://github.com/norse/norse))
- **Neuromorphic chips** that implement this in analog circuits at milliwatt power
- **Covariant receptive fields** --- the leaky integrator *is* a temporal receptive field ([Pedersen et al., Nature Communications, 2025](https://www.nature.com/articles/s41467-025-63493-0))
