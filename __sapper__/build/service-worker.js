!function(){"use strict";const e=["client/client.6a67f680.js","client/about.15af50ba.js","client/index.3c5b36cb.js","client/[slug].4f455fb5.js","client/client.4f82606a.js"].concat(["service-worker-index.html","favicon.png","global.css","hbp.png","jens.png","manifest.json","slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.ai","slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.eps","slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.jpg","slides/20200416_hbp_tea_and_slides/RGB/KTH_Logotyp_RGB_2013.png","slides/20200416_hbp_tea_and_slides/baxter.jpeg","slides/20200416_hbp_tea_and_slides/baxter_paper.png","slides/20200416_hbp_tea_and_slides/baxter_train.png","slides/20200416_hbp_tea_and_slides/dangelo.png","slides/20200416_hbp_tea_and_slides/hbp_credits.png","slides/20200416_hbp_tea_and_slides/hbp_tea.png","slides/20200416_hbp_tea_and_slides/index.html","slides/20200416_hbp_tea_and_slides/mouse_sim.mp4","slides/20200416_hbp_tea_and_slides/myo_arm.png","slides/20200416_hbp_tea_and_slides/myo_spinn.png","slides/20200416_hbp_tea_and_slides/nao.gif","slides/20200416_hbp_tea_and_slides/nao_paper.png","slides/20200416_hbp_tea_and_slides/ncs.png","slides/20200416_hbp_tea_and_slides/ncs2.png","slides/20200416_hbp_tea_and_slides/robot.gif","slides/20200416_hbp_tea_and_slides/snn.jpeg","star.png"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1590004030229").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1590004030229"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590004030229").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const a=await s.match(e.request);if(a)return a;throw t}}))))})}();