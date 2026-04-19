---
title: "Interactive exercise: Build a spiking neuron"
pubdate: 2026-03-23
featured_image: img/dtu_logo.svg
description: "An interactive simulation of a Leaky Integrate-and-Fire (LIF) neuron for the 27020 Bioengineering guest lecture."
full_width: true
---

<style>
  /* Full width layout */
  article.mw8 { max-width: 80vw !important; }
  article.mw8 .w-two-thirds-l { width: 100% !important; padding-right: 0 !important; }
  article.mw8 .w-30-l { display: none !important; }
  .dynsim-editor-textarea { min-height: 400px !important; }
  /* Force Plotly to fill container width */
  .js-plotly-plot, .plot-container, .plotly { width: 100% !important; }
  .dynsim-python-container > div { width: 100% !important; }
</style>

This is a companion exercise for the guest lecture on
[Brain-Inspired Computing with Spiking Neural Networks](/posts/talks/202604_dtu_bioeng/)
in [27020 Bioengineering](https://kurser.dtu.dk/course/27020).

## Leaky Integrate-and-Fire Neuron

A LIF neuron integrates incoming current and fires a **spike** when its membrane voltage crosses a threshold.
Between spikes, the voltage **leaks** back towards rest --- just like a biological neuron.

The continuous-time equation for a LIF neuron is:

$$
\tau \frac{dv}{dt} = -v + I
$$

Using **Euler discretization** (replacing $\frac{dv}{dt} \approx \frac{v_{t+1} - v_t}{\Delta t}$), we get:

$$
v_{t+1} = v_t + \frac{\Delta t}{\tau} \left( -v_t + I \right)
$$

When $v \geq \theta$, the neuron **spikes** (red lines) and resets to $0$.

Below is a live code editor. The simulation starts with a simple **identity function** (it just passes the input through).
Your task is to build up the LIF neuron step by step. Changes apply automatically as you type.

### Exercises

1. **Understand the setup** --- the code currently just returns `x` (the input current). Move the input slider and watch the plot. What do you see?
2. **Add the leak** --- replace `v_new = x` with the Euler update: `v_new = v + dt / tau * (-v + x)`. What happens now when you increase the input?
3. **Add spiking** --- add a spike check: if `v_new >= 1.0`, reset it to `0.0` and set `spiked = True`. Can you make the neuron fire?
4. **Change the threshold** --- try changing the threshold from `1.0` to `0.5`. What happens?
5. **Add noise** --- add `import random` at the top of the step function, and add `random.gauss(0, 0.1)` to the input. How does noise affect spike timing?
6. **Break the leak** --- remove `-v` from the update equation. What happens without the leak? Why is it important?

<!-- Plotly -->
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>

<!-- PyScript -->
<script src="https://pyscript.net/releases/2024.11.1/core.js" type="module"></script>

<!-- DynSim -->
<script src="https://unpkg.com/dynsim"></script>

<!-- Simulation container -->
<div id="lif" class="dynsim-python-container"
     style="min-height: 200px; display: flex; align-items: center; justify-content: center; color: #888;">
  Loading simulation…
</div>

<!-- Python system definition -->
<script type="py">
from pyscript import window
import json

STEP_CODE = '''
def step(x, state, params):
    v      = state["v"]
    dt     = params["dt"]
    tau    = params["tau"]
    spiked = False

    # TODO: Replace this with the Euler update
    #   v_new = v + dt / tau * (-v + x)
    v_new = x

    # TODO: Add spike detection
    #   if v_new >= 1.0:
    #       v_new = 0.0
    #       spiked = True

    return [v_new, {"v": v_new, "z": spiked}]
'''

exec(STEP_CODE)

config = {
    "params": json.dumps([
        {"id": "tau", "label": "tau",  "min": 1.0, "max": 50.0, "step": 1.0, "value": 10.0},
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
