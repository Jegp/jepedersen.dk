!function(){"use strict";const s=1699303644964,e=`cache${s}`,i=["/client/client.21a6d92a.js","/client/inject_styles.803b7e80.js","/client/index.e949aa39.js","/client/about.57401d95.js","/client/_slug_.8697a9fa.js"].concat(["/service-worker-index.html","/ONM-logo.svg","/ai_pop.png","/attention.svg","/bib.bib","/cat.png","/deep_net.png","/favicon.png","/global.css","/hbp.png","/jens.png","/kth.png","/lambda.png","/lambda.svg","/manifest.json","/ncs.png","/neurotech.png","/nice_logo.png","/nir_logo.png","/norse.png","/pdf/2202lc.pdf","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.ai","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.eps","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.jpg","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.png","/slides/20200416_hbp_tea_and_slides/baxter.jpeg","/slides/20200416_hbp_tea_and_slides/baxter_paper.png","/slides/20200416_hbp_tea_and_slides/baxter_train.png","/slides/20200416_hbp_tea_and_slides/dangelo.png","/slides/20200416_hbp_tea_and_slides/hbp_credits.png","/slides/20200416_hbp_tea_and_slides/hbp_tea.png","/slides/20200416_hbp_tea_and_slides/index.html","/slides/20200416_hbp_tea_and_slides/mouse_sim.mp4","/slides/20200416_hbp_tea_and_slides/myo_arm.png","/slides/20200416_hbp_tea_and_slides/myo_spinn.png","/slides/20200416_hbp_tea_and_slides/nao.gif","/slides/20200416_hbp_tea_and_slides/nao_paper.png","/slides/20200416_hbp_tea_and_slides/ncs.png","/slides/20200416_hbp_tea_and_slides/ncs2.png","/slides/20200416_hbp_tea_and_slides/robot.gif","/slides/20200416_hbp_tea_and_slides/snn.jpeg","/slides/202209_neurotech/2209 Neurotech.ipynb","/slides/202209_neurotech/2209 durin.png","/slides/202209_neurotech/2209-durin-braitenberg.mp4","/slides/202209_neurotech/2209-edge-detection.mp4","/slides/202209_neurotech/2209_event_norse.png","/slides/202209_neurotech/benchmark_lif.png","/slides/202209_neurotech/benchmark_scnn.png","/slides/202209_neurotech/chiptobrain.png","/slides/202209_neurotech/chiptobrain.svg","/slides/202209_neurotech/gpu.gif","/slides/202209_neurotech/hbp.png","/slides/202209_neurotech/index.html","/slides/202209_neurotech/jax.png","/slides/202209_neurotech/kth.png","/slides/202209_neurotech/ncs.png","/slides/202209_neurotech/norse_logo.png","/slides/202209_neurotech/norsetochiptobrain.png","/slides/202209_neurotech/pytorch.png","/slides/202209_neurotech/rise.css","/slides/202209_neurotech/state.png","/slides/202209_neurotech/state.svg","/slides/202209_neurotech/tensorflow.png","/slides/2212_ONM/2209_event_norse.png","/slides/2212_ONM/benchmark_lif.png","/slides/2212_ONM/chiptobrain.png","/slides/2212_ONM/edge_detector.png","/slides/2212_ONM/index.html","/slides/2212_ONM/kernels.png","/slides/2212_ONM/kth.png","/slides/2212_ONM/ncs.png","/slides/2212_ONM/norse_logo.png","/slides/2212_ONM/onnx.png","/slides/2212_ONM/primitives.png","/slides/2212_ONM/primitives_1.png","/slides/2212_ONM/primitives_2.png","/slides/2212_ONM/punchcard.png","/slides/2212_ONM/rise.css","/slides/2212_ONM/state.png","/slides/2304_NICE/2209_event_video.mp4","/slides/2304_NICE/2212_NICE_model.svg","/slides/2304_NICE/2212_cr_heatmap.png","/slides/2304_NICE/2212_cr_heatmap.xcf","/slides/2304_NICE/2212_gpu_frames.png","/slides/2304_NICE/2304_aestream.html","/slides/2304_NICE/2304_object_tracking.html","/slides/2304_NICE/LICENSE","/slides/2304_NICE/README.md","/slides/2304_NICE/aestream.svg","/slides/2304_NICE/aestream_code.png","/slides/2304_NICE/aestream_logo.png","/slides/2304_NICE/aestream_logo.svg","/slides/2304_NICE/aestream_logo_small.png","/slides/2304_NICE/aestream_logo_small.svg","/slides/2304_NICE/aestream_qr.jpg","/slides/2304_NICE/aestream_qr.png","/slides/2304_NICE/aestream_qr.svg","/slides/2304_NICE/camera.png","/slides/2304_NICE/camera_raw.png","/slides/2304_NICE/conv_box.mp4","/slides/2304_NICE/conv_gaussian.mp4","/slides/2304_NICE/conv_gaussian2.mp4","/slides/2304_NICE/conv_gaussian_2.mp4","/slides/2304_NICE/conv_li.mp4","/slides/2304_NICE/conv_li2.mp4","/slides/2304_NICE/conv_spike.mp4","/slides/2304_NICE/conv_start.mp4","/slides/2304_NICE/coroutines.svg","/slides/2304_NICE/cpu_bottleneck.png","/slides/2304_NICE/cpu_bottleneck.svg","/slides/2304_NICE/cpu_bottleneck_simple.png","/slides/2304_NICE/cpu_raw.png","/slides/2304_NICE/cr_heatmap.png","/slides/2304_NICE/css/layout.scss","/slides/2304_NICE/css/print/paper.scss","/slides/2304_NICE/css/print/pdf.scss","/slides/2304_NICE/css/reveal.scss","/slides/2304_NICE/css/theme/README.md","/slides/2304_NICE/css/theme/source/beige.scss","/slides/2304_NICE/css/theme/source/black-contrast.scss","/slides/2304_NICE/css/theme/source/black.scss","/slides/2304_NICE/css/theme/source/blood.scss","/slides/2304_NICE/css/theme/source/dracula.scss","/slides/2304_NICE/css/theme/source/league.scss","/slides/2304_NICE/css/theme/source/moon.scss","/slides/2304_NICE/css/theme/source/night.scss","/slides/2304_NICE/css/theme/source/serif.scss","/slides/2304_NICE/css/theme/source/simple.scss","/slides/2304_NICE/css/theme/source/sky.scss","/slides/2304_NICE/css/theme/source/solarized.scss","/slides/2304_NICE/css/theme/source/white-contrast.scss","/slides/2304_NICE/css/theme/source/white.scss","/slides/2304_NICE/css/theme/template/exposer.scss","/slides/2304_NICE/css/theme/template/mixins.scss","/slides/2304_NICE/css/theme/template/settings.scss","/slides/2304_NICE/css/theme/template/theme.scss","/slides/2304_NICE/dist/reset.css","/slides/2304_NICE/dist/reveal.css","/slides/2304_NICE/dist/reveal.esm.js","/slides/2304_NICE/dist/reveal.esm.js.map","/slides/2304_NICE/dist/reveal.js","/slides/2304_NICE/dist/reveal.js.map","/slides/2304_NICE/dist/theme/beige.css","/slides/2304_NICE/dist/theme/black-contrast.css","/slides/2304_NICE/dist/theme/black.css","/slides/2304_NICE/dist/theme/blood.css","/slides/2304_NICE/dist/theme/dracula.css","/slides/2304_NICE/dist/theme/fonts/league-gothic/LICENSE","/slides/2304_NICE/dist/theme/fonts/league-gothic/league-gothic.css","/slides/2304_NICE/dist/theme/fonts/league-gothic/league-gothic.eot","/slides/2304_NICE/dist/theme/fonts/league-gothic/league-gothic.ttf","/slides/2304_NICE/dist/theme/fonts/league-gothic/league-gothic.woff","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/LICENSE","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff","/slides/2304_NICE/dist/theme/fonts/source-sans-pro/source-sans-pro.css","/slides/2304_NICE/dist/theme/league.css","/slides/2304_NICE/dist/theme/moon.css","/slides/2304_NICE/dist/theme/night.css","/slides/2304_NICE/dist/theme/serif.css","/slides/2304_NICE/dist/theme/simple.css","/slides/2304_NICE/dist/theme/sky.css","/slides/2304_NICE/dist/theme/solarized.css","/slides/2304_NICE/dist/theme/white-contrast.css","/slides/2304_NICE/dist/theme/white.css","/slides/2304_NICE/dist/theme/white_contrast_compact_verbatim_headers.css","/slides/2304_NICE/energy_scale.png","/slides/2304_NICE/event_still.png","/slides/2304_NICE/examples/assets/beeping.txt","/slides/2304_NICE/examples/assets/beeping.wav","/slides/2304_NICE/examples/assets/image1.png","/slides/2304_NICE/examples/assets/image2.png","/slides/2304_NICE/examples/auto-animate.html","/slides/2304_NICE/examples/backgrounds.html","/slides/2304_NICE/examples/barebones.html","/slides/2304_NICE/examples/layout-helpers.html","/slides/2304_NICE/examples/markdown.html","/slides/2304_NICE/examples/markdown.md","/slides/2304_NICE/examples/math.html","/slides/2304_NICE/examples/media.html","/slides/2304_NICE/examples/multiple-presentations.html","/slides/2304_NICE/examples/transitions.html","/slides/2304_NICE/fig_rf.png","/slides/2304_NICE/gpu.png","/slides/2304_NICE/gpu_bottleneck.png","/slides/2304_NICE/gpu_bottleneck.svg","/slides/2304_NICE/gpu_picture.png","/slides/2304_NICE/gpu_runtime.png","/slides/2304_NICE/gulpfile.js","/slides/2304_NICE/hbp.png","/slides/2304_NICE/heatmap_input.png","/slides/2304_NICE/js/components/playback.js","/slides/2304_NICE/js/config.js","/slides/2304_NICE/js/controllers/autoanimate.js","/slides/2304_NICE/js/controllers/backgrounds.js","/slides/2304_NICE/js/controllers/controls.js","/slides/2304_NICE/js/controllers/focus.js","/slides/2304_NICE/js/controllers/fragments.js","/slides/2304_NICE/js/controllers/jumptoslide.js","/slides/2304_NICE/js/controllers/keyboard.js","/slides/2304_NICE/js/controllers/location.js","/slides/2304_NICE/js/controllers/notes.js","/slides/2304_NICE/js/controllers/overview.js","/slides/2304_NICE/js/controllers/plugins.js","/slides/2304_NICE/js/controllers/pointer.js","/slides/2304_NICE/js/controllers/print.js","/slides/2304_NICE/js/controllers/progress.js","/slides/2304_NICE/js/controllers/slidecontent.js","/slides/2304_NICE/js/controllers/slidenumber.js","/slides/2304_NICE/js/controllers/touch.js","/slides/2304_NICE/js/index.js","/slides/2304_NICE/js/reveal.js","/slides/2304_NICE/js/utils/color.js","/slides/2304_NICE/js/utils/constants.js","/slides/2304_NICE/js/utils/device.js","/slides/2304_NICE/js/utils/loader.js","/slides/2304_NICE/js/utils/util.js","/slides/2304_NICE/kernels_old.png","/slides/2304_NICE/kth.png","/slides/2304_NICE/locks.svg","/slides/2304_NICE/ncs.png","/slides/2304_NICE/neuromorphic_substrate.png","/slides/2304_NICE/norse_logo.png","/slides/2304_NICE/object_qr.jpg","/slides/2304_NICE/package-lock.json","/slides/2304_NICE/package.json","/slides/2304_NICE/pendulum.mp4","/slides/2304_NICE/plugin/highlight/highlight.esm.js","/slides/2304_NICE/plugin/highlight/highlight.js","/slides/2304_NICE/plugin/highlight/monokai.css","/slides/2304_NICE/plugin/highlight/plugin.js","/slides/2304_NICE/plugin/highlight/zenburn.css","/slides/2304_NICE/plugin/markdown/markdown.esm.js","/slides/2304_NICE/plugin/markdown/markdown.js","/slides/2304_NICE/plugin/markdown/plugin.js","/slides/2304_NICE/plugin/math/katex.js","/slides/2304_NICE/plugin/math/math.esm.js","/slides/2304_NICE/plugin/math/math.js","/slides/2304_NICE/plugin/math/mathjax2.js","/slides/2304_NICE/plugin/math/mathjax3.js","/slides/2304_NICE/plugin/math/plugin.js","/slides/2304_NICE/plugin/notes/notes.esm.js","/slides/2304_NICE/plugin/notes/notes.js","/slides/2304_NICE/plugin/notes/plugin.js","/slides/2304_NICE/plugin/notes/speaker-view.html","/slides/2304_NICE/plugin/search/plugin.js","/slides/2304_NICE/plugin/search/search.esm.js","/slides/2304_NICE/plugin/search/search.js","/slides/2304_NICE/plugin/zoom/plugin.js","/slides/2304_NICE/plugin/zoom/zoom.esm.js","/slides/2304_NICE/plugin/zoom/zoom.js","/slides/2304_NICE/pytorch.png","/slides/2304_NICE/rf_sampling.jpg","/slides/2304_NICE/rise.css","/slides/2304_NICE/simple_rf_biology.png","/slides/2304_NICE/speedup_simple.png","/slides/2304_NICE/spif.png","/slides/2304_NICE/spif.svg","/slides/2304_NICE/spif_events.png","/slides/2304_NICE/spike.png","/slides/2304_NICE/spinn_bottleneck.png","/slides/2304_NICE/spinn_bottleneck.svg","/slides/2304_NICE/spinn_cpu_bottleneck.svg","/slides/2304_NICE/threads_and_coroutines.svg","/slides/2304_NICE/threads_simple.png","/slides/2310_norn_intro/Saltatory_Conduction.gif","/slides/2310_norn_intro/akida.png","/slides/2310_norn_intro/analog_component.png","/slides/2310_norn_intro/brain_org.png","/slides/2310_norn_intro/camera.gif","/slides/2310_norn_intro/camera_evolution.png","/slides/2310_norn_intro/computation_neuromorphic.png","/slides/2310_norn_intro/cost.png","/slides/2310_norn_intro/energy.png","/slides/2310_norn_intro/hw.webp","/slides/2310_norn_intro/img_cat.png","/slides/2310_norn_intro/index.html","/slides/2310_norn_intro/innatera.jpg","/slides/2310_norn_intro/loihi.jpg","/slides/2310_norn_intro/modern_maths.png","/slides/2310_norn_intro/paper.png","/slides/2310_norn_intro/performance.png","/slides/2310_norn_intro/retina_circuit.png","/slides/2310_norn_intro/simulators.png","/slides/2310_norn_intro/speck.png","/slides/2310_norn_intro/spintronic.png","/slides/2310_norn_intro/th-spinnaker.jpg","/slides/2310_norn_intro/thermo.png","/slides/2310_norn_intro/time.png","/slides/2311_snufa_nir/conv_similarity.png","/slides/2311_snufa_nir/css/layout.scss","/slides/2311_snufa_nir/css/print/paper.scss","/slides/2311_snufa_nir/css/print/pdf.scss","/slides/2311_snufa_nir/css/reveal.scss","/slides/2311_snufa_nir/css/theme/README.md","/slides/2311_snufa_nir/css/theme/source/beige.scss","/slides/2311_snufa_nir/css/theme/source/black-contrast.scss","/slides/2311_snufa_nir/css/theme/source/black.scss","/slides/2311_snufa_nir/css/theme/source/blood.scss","/slides/2311_snufa_nir/css/theme/source/dracula.scss","/slides/2311_snufa_nir/css/theme/source/league.scss","/slides/2311_snufa_nir/css/theme/source/moon.scss","/slides/2311_snufa_nir/css/theme/source/night.scss","/slides/2311_snufa_nir/css/theme/source/serif.scss","/slides/2311_snufa_nir/css/theme/source/simple.scss","/slides/2311_snufa_nir/css/theme/source/sky.scss","/slides/2311_snufa_nir/css/theme/source/solarized.scss","/slides/2311_snufa_nir/css/theme/source/white-contrast.scss","/slides/2311_snufa_nir/css/theme/source/white.scss","/slides/2311_snufa_nir/css/theme/template/exposer.scss","/slides/2311_snufa_nir/css/theme/template/mixins.scss","/slides/2311_snufa_nir/css/theme/template/settings.scss","/slides/2311_snufa_nir/css/theme/template/theme.scss","/slides/2311_snufa_nir/dist/reset.css","/slides/2311_snufa_nir/dist/reveal.css","/slides/2311_snufa_nir/dist/reveal.esm.js","/slides/2311_snufa_nir/dist/reveal.esm.js.map","/slides/2311_snufa_nir/dist/reveal.js","/slides/2311_snufa_nir/dist/reveal.js.map","/slides/2311_snufa_nir/dist/theme/beige.css","/slides/2311_snufa_nir/dist/theme/black-contrast.css","/slides/2311_snufa_nir/dist/theme/black.css","/slides/2311_snufa_nir/dist/theme/blood.css","/slides/2311_snufa_nir/dist/theme/dracula.css","/slides/2311_snufa_nir/dist/theme/fonts/league-gothic/LICENSE","/slides/2311_snufa_nir/dist/theme/fonts/league-gothic/league-gothic.css","/slides/2311_snufa_nir/dist/theme/fonts/league-gothic/league-gothic.eot","/slides/2311_snufa_nir/dist/theme/fonts/league-gothic/league-gothic.ttf","/slides/2311_snufa_nir/dist/theme/fonts/league-gothic/league-gothic.woff","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/LICENSE","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff","/slides/2311_snufa_nir/dist/theme/fonts/source-sans-pro/source-sans-pro.css","/slides/2311_snufa_nir/dist/theme/league.css","/slides/2311_snufa_nir/dist/theme/moon.css","/slides/2311_snufa_nir/dist/theme/night.css","/slides/2311_snufa_nir/dist/theme/serif.css","/slides/2311_snufa_nir/dist/theme/simple.css","/slides/2311_snufa_nir/dist/theme/sky.css","/slides/2311_snufa_nir/dist/theme/solarized.css","/slides/2311_snufa_nir/dist/theme/white-contrast.css","/slides/2311_snufa_nir/dist/theme/white.css","/slides/2311_snufa_nir/dist/theme/white_contrast_compact_verbatim_headers.css","/slides/2311_snufa_nir/index.html","/slides/2311_snufa_nir/js/components/playback.js","/slides/2311_snufa_nir/js/config.js","/slides/2311_snufa_nir/js/controllers/autoanimate.js","/slides/2311_snufa_nir/js/controllers/backgrounds.js","/slides/2311_snufa_nir/js/controllers/controls.js","/slides/2311_snufa_nir/js/controllers/focus.js","/slides/2311_snufa_nir/js/controllers/fragments.js","/slides/2311_snufa_nir/js/controllers/jumptoslide.js","/slides/2311_snufa_nir/js/controllers/keyboard.js","/slides/2311_snufa_nir/js/controllers/location.js","/slides/2311_snufa_nir/js/controllers/notes.js","/slides/2311_snufa_nir/js/controllers/overview.js","/slides/2311_snufa_nir/js/controllers/plugins.js","/slides/2311_snufa_nir/js/controllers/pointer.js","/slides/2311_snufa_nir/js/controllers/print.js","/slides/2311_snufa_nir/js/controllers/progress.js","/slides/2311_snufa_nir/js/controllers/slidecontent.js","/slides/2311_snufa_nir/js/controllers/slidenumber.js","/slides/2311_snufa_nir/js/controllers/touch.js","/slides/2311_snufa_nir/js/index.js","/slides/2311_snufa_nir/js/reveal.js","/slides/2311_snufa_nir/js/utils/color.js","/slides/2311_snufa_nir/js/utils/constants.js","/slides/2311_snufa_nir/js/utils/device.js","/slides/2311_snufa_nir/js/utils/loader.js","/slides/2311_snufa_nir/js/utils/util.js","/slides/2311_snufa_nir/lif_comparison.pdf","/slides/2311_snufa_nir/lif_comparison.png","/slides/2311_snufa_nir/nir.png","/slides/2311_snufa_nir/nir_logo.png","/slides/2311_snufa_nir/plugin/highlight/highlight.esm.js","/slides/2311_snufa_nir/plugin/highlight/highlight.js","/slides/2311_snufa_nir/plugin/highlight/monokai.css","/slides/2311_snufa_nir/plugin/highlight/plugin.js","/slides/2311_snufa_nir/plugin/highlight/zenburn.css","/slides/2311_snufa_nir/plugin/markdown/markdown.esm.js","/slides/2311_snufa_nir/plugin/markdown/markdown.js","/slides/2311_snufa_nir/plugin/markdown/plugin.js","/slides/2311_snufa_nir/plugin/math/katex.js","/slides/2311_snufa_nir/plugin/math/math.esm.js","/slides/2311_snufa_nir/plugin/math/math.js","/slides/2311_snufa_nir/plugin/math/mathjax2.js","/slides/2311_snufa_nir/plugin/math/mathjax3.js","/slides/2311_snufa_nir/plugin/math/plugin.js","/slides/2311_snufa_nir/plugin/notes/notes.esm.js","/slides/2311_snufa_nir/plugin/notes/notes.js","/slides/2311_snufa_nir/plugin/notes/plugin.js","/slides/2311_snufa_nir/plugin/notes/speaker-view.html","/slides/2311_snufa_nir/plugin/search/plugin.js","/slides/2311_snufa_nir/plugin/search/search.esm.js","/slides/2311_snufa_nir/plugin/search/search.js","/slides/2311_snufa_nir/plugin/zoom/plugin.js","/slides/2311_snufa_nir/plugin/zoom/zoom.esm.js","/slides/2311_snufa_nir/plugin/zoom/zoom.js","/slides/2311_snufa_nir/speck.png","/star.png"]),n=new Set(i);self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((s=>s.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const i of s)i!==e&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&n.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open(`offline${s}`).then((async s=>{try{const i=await fetch(e.request);return s.put(e.request,i.clone()),i}catch(i){const n=await s.match(e.request);if(n)return n;throw i}})))))}))}();
