!function(){"use strict";const e=1671387909191,s=`cache${e}`,n=["/client/client.7949dabb.js","/client/inject_styles.803b7e80.js","/client/index.19d03cc3.js","/client/about.829300c8.js","/client/_slug_.6690e68e.js"].concat(["/service-worker-index.html","/ONM-logo.svg","/ai_pop.png","/attention.svg","/bib.bib","/cat.png","/deep_net.png","/favicon.png","/global.css","/hbp.png","/jens.png","/kth.png","/lambda.png","/lambda.svg","/manifest.json","/ncs.png","/neurotech.png","/norse.png","/pdf/2202lc.pdf","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.ai","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.eps","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.jpg","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.png","/slides/20200416_hbp_tea_and_slides/baxter.jpeg","/slides/20200416_hbp_tea_and_slides/baxter_paper.png","/slides/20200416_hbp_tea_and_slides/baxter_train.png","/slides/20200416_hbp_tea_and_slides/dangelo.png","/slides/20200416_hbp_tea_and_slides/hbp_credits.png","/slides/20200416_hbp_tea_and_slides/hbp_tea.png","/slides/20200416_hbp_tea_and_slides/index.html","/slides/20200416_hbp_tea_and_slides/mouse_sim.mp4","/slides/20200416_hbp_tea_and_slides/myo_arm.png","/slides/20200416_hbp_tea_and_slides/myo_spinn.png","/slides/20200416_hbp_tea_and_slides/nao.gif","/slides/20200416_hbp_tea_and_slides/nao_paper.png","/slides/20200416_hbp_tea_and_slides/ncs.png","/slides/20200416_hbp_tea_and_slides/ncs2.png","/slides/20200416_hbp_tea_and_slides/robot.gif","/slides/20200416_hbp_tea_and_slides/snn.jpeg","/slides/202209_neurotech/2209 Neurotech.ipynb","/slides/202209_neurotech/2209 durin.png","/slides/202209_neurotech/2209-durin-braitenberg.mp4","/slides/202209_neurotech/2209-edge-detection.mp4","/slides/202209_neurotech/2209_event_norse.png","/slides/202209_neurotech/benchmark_lif.png","/slides/202209_neurotech/benchmark_scnn.png","/slides/202209_neurotech/chiptobrain.png","/slides/202209_neurotech/chiptobrain.svg","/slides/202209_neurotech/gpu.gif","/slides/202209_neurotech/hbp.png","/slides/202209_neurotech/index.html","/slides/202209_neurotech/jax.png","/slides/202209_neurotech/kth.png","/slides/202209_neurotech/ncs.png","/slides/202209_neurotech/norse_logo.png","/slides/202209_neurotech/norsetochiptobrain.png","/slides/202209_neurotech/pytorch.png","/slides/202209_neurotech/rise.css","/slides/202209_neurotech/state.png","/slides/202209_neurotech/state.svg","/slides/202209_neurotech/tensorflow.png","/slides/2212_ONM/2209_event_norse.png","/slides/2212_ONM/benchmark_lif.png","/slides/2212_ONM/chiptobrain.png","/slides/2212_ONM/edge_detector.png","/slides/2212_ONM/index.html","/slides/2212_ONM/kernels.png","/slides/2212_ONM/kth.png","/slides/2212_ONM/ncs.png","/slides/2212_ONM/norse_logo.png","/slides/2212_ONM/onnx.png","/slides/2212_ONM/primitives.png","/slides/2212_ONM/primitives_1.png","/slides/2212_ONM/primitives_2.png","/slides/2212_ONM/punchcard.png","/slides/2212_ONM/rise.css","/slides/2212_ONM/state.png","/star.png"]),t=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==s&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const n=new URL(s.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open(`offline${e}`).then((async e=>{try{const n=await fetch(s.request);return e.put(s.request,n.clone()),n}catch(n){const t=await e.match(s.request);if(t)return t;throw n}})))))}))}();
