!function(){"use strict";const e=1619560241591,s=`cache${e}`,t=["/client/client.52f83b06.js","/client/inject_styles.5607aec6.js","/client/index.c5a71187.js","/client/about.6267d7c3.js","/client/[slug].0d1bc8dd.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/hbp.png","/jens.png","/kth.png","/manifest.json","/ncs.png","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.ai","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.eps","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.jpg","/slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.png","/slides/20200416_hbp_tea_and_slides/baxter.jpeg","/slides/20200416_hbp_tea_and_slides/baxter_paper.png","/slides/20200416_hbp_tea_and_slides/baxter_train.png","/slides/20200416_hbp_tea_and_slides/dangelo.png","/slides/20200416_hbp_tea_and_slides/hbp_credits.png","/slides/20200416_hbp_tea_and_slides/hbp_tea.png","/slides/20200416_hbp_tea_and_slides/index.html","/slides/20200416_hbp_tea_and_slides/mouse_sim.mp4","/slides/20200416_hbp_tea_and_slides/myo_arm.png","/slides/20200416_hbp_tea_and_slides/myo_spinn.png","/slides/20200416_hbp_tea_and_slides/nao.gif","/slides/20200416_hbp_tea_and_slides/nao_paper.png","/slides/20200416_hbp_tea_and_slides/ncs.png","/slides/20200416_hbp_tea_and_slides/ncs2.png","/slides/20200416_hbp_tea_and_slides/robot.gif","/slides/20200416_hbp_tea_and_slides/snn.jpeg","/star.png"]),n=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open(`offline${e}`).then((async e=>{try{const t=await fetch(s.request);return e.put(s.request,t.clone()),t}catch(t){const n=await e.match(s.request);if(n)return n;throw t}})))))}))}();
