function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function w(t){return E(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}class S{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=d(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)f(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let A;function R(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}const L=[],C=[],N=[],j=[],q=Promise.resolve();let O=!1;function U(t){N.push(t)}let I=!1;const k=new Set;function T(){if(!I){I=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];R(e),H(e.$$)}for(L.length=0;C.length;)C.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];k.has(e)||(k.add(e),e())}N.length=0}while(L.length);for(;j.length;)j.pop()();O=!1,I=!1,k.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const J=new Set;let D;function B(){D={r:0,c:[],p:D}}function M(){D.r||s(D.c),D=D.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),D.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function F(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,q.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,o,a,c,i,l=[-1]){const u=A;R(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&Q(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=y(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&V(e.$$.fragment),W(e,n.target,n.anchor),T()}R(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const rt={},st=()=>({});function ot(e){let n,r,s,o,a,c,i,p,$,_,x,S,A,R,P,L,C;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=d("a"),a=m("J. E. Pedersen"),c=g(),i=d("li"),p=g(),$=d("li"),_=d("a"),x=m("home"),A=g(),R=d("li"),P=d("a"),L=m("about"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var l=y(r);s=b(l,"LI",{class:!0});var u=y(s);o=b(u,"A",{class:!0,href:!0});var f=y(o);a=E(f,"J. E. Pedersen"),f.forEach(h),u.forEach(h),c=w(l),i=b(l,"LI",{class:!0}),y(i).forEach(h),p=w(l),$=b(l,"LI",{class:!0});var d=y($);_=b(d,"A",{class:!0,href:!0});var m=y(_);x=E(m,"home"),m.forEach(h),d.forEach(h),A=w(l),R=b(l,"LI",{class:!0});var g=y(R);P=b(g,"A",{class:!0,href:!0});var v=y(P);L=E(v,"about"),v.forEach(h),g.forEach(h),l.forEach(h),e.forEach(h),this.h()},h(){v(o,"class","deselected svelte-lr65em"),v(o,"href","."),v(s,"class","svelte-lr65em"),v(i,"class","fill svelte-lr65em"),v(_,"class",S=l(void 0===e[0]?"selected":"")+" svelte-lr65em"),v(_,"href","."),v($,"class","svelte-lr65em"),v(P,"class",C=l("about"===e[0]?"selected":"")+" svelte-lr65em"),v(P,"href","about"),v(R,"class","svelte-lr65em"),v(r,"class","svelte-lr65em"),v(n,"class","svelte-lr65em")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,a),u(r,c),u(r,i),u(r,p),u(r,$),u($,_),u(_,x),u(r,A),u(r,R),u(R,P),u(P,L)},p(t,[e]){1&e&&S!==(S=l(void 0===t[0]?"selected":"")+" svelte-lr65em")&&v(_,"class",S),1&e&&C!==(C=l("about"===t[0]?"selected":"")+" svelte-lr65em")&&v(P,"class",C)},i:t,o:t,d(t){t&&h(n)}}}function at(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ct extends tt{constructor(t){super(),Z(this,t,at,ot,a,{segment:0})}}function it(t){let e,n,r,s,o,a,l,p,$,_,x;e=new ct({props:{segment:t[0]}});const S=t[2].default,A=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(S,t,t[1],null);return{c(){z(e.$$.fragment),n=g(),r=d("main"),A&&A.c(),s=g(),o=d("footer"),a=d("p"),l=m("Except where otherwise noted, content on this site is licensed under a \n"),p=d("a"),$=m("Creative Commons Attribution 4.0 International license\n"),_=m("."),this.h()},l(t){G(e.$$.fragment,t),n=w(t),r=b(t,"MAIN",{class:!0});var c=y(r);A&&A.l(c),c.forEach(h),s=w(t),o=b(t,"FOOTER",{class:!0});var i=y(o);a=b(i,"P",{});var u=y(a);l=E(u,"Except where otherwise noted, content on this site is licensed under a \n"),p=b(u,"A",{rel:!0,href:!0,title:!0});var f=y(p);$=E(f,"Creative Commons Attribution 4.0 International license\n"),f.forEach(h),_=E(u,"."),u.forEach(h),i.forEach(h),this.h()},h(){v(r,"class","svelte-g22bv1"),v(p,"rel","license"),v(p,"href","https://creativecommons.org/licenses/by/4.0/"),v(p,"title","Creative Commons Attribution 4.0 International license"),v(o,"class","svelte-g22bv1")},m(t,c){W(e,t,c),f(t,n,c),f(t,r,c),A&&A.m(r,null),f(t,s,c),f(t,o,c),u(o,a),u(a,l),u(a,p),u(p,$),u(a,_),x=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),A&&A.p&&2&n&&i(A,S,t,t[1],n,null,null)},i(t){x||(V(e.$$.fragment,t),V(A,t),x=!0)},o(t){K(e.$$.fragment,t),K(A,t),x=!1},d(t){X(e,t),t&&h(n),t&&h(r),A&&A.d(t),t&&h(s),t&&h(o)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ut extends tt{constructor(t){super(),Z(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r=t[0].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var s=y(e);n=E(s,r),s.forEach(h)},m(t,r){f(t,e,r),u(e,n)},p(t,e){1&e&&r!==(r=t[0].stack+"")&&_(n,r)},d(t){t&&h(e)}}}function ht(e){let n,r,s,o,a,c,i,l,p,S=e[0].message+"";document.title=n=e[1];let A=e[2]&&e[0].stack&&ft(e);return{c(){r=g(),s=d("h1"),o=m(e[1]),a=g(),c=d("p"),i=m(S),l=g(),A&&A.c(),p=$(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=w(t),s=b(t,"H1",{class:!0});var n=y(s);o=E(n,e[1]),n.forEach(h),a=w(t),c=b(t,"P",{class:!0});var u=y(c);i=E(u,S),u.forEach(h),l=w(t),A&&A.l(t),p=$(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),A&&A.m(t,e),f(t,p,e)},p(t,[e]){2&e&&n!==(n=t[1])&&(document.title=n),2&e&&_(o,t[1]),1&e&&S!==(S=t[0].message+"")&&_(i,S),t[2]&&t[0].stack?A?A.p(t,e):(A=ft(t),A.c(),A.m(p.parentNode,p)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&h(r),t&&h(s),t&&h(a),t&&h(c),t&&h(l),A&&A.d(t),t&&h(p)}}}function pt(t,e,n){let{error:r}=e,{status:s}=e;return t.$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,s=t.status)},[r,s,!1]}class dt extends tt{constructor(t){super(),Z(this,t,pt,ht,a,{error:0,status:1})}}function mt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&z(n.$$.fragment),r=$()},l(t){n&&G(n.$$.fragment,t),r=$()},m(t,e){n&&W(n,t,e),f(t,r,e),s=!0},p(t,e){const s=16&e?F(o,[Y(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){B();const t=n;K(t.$$.fragment,1,0,()=>{X(t,1)}),M()}a?(n=new a(c()),z(n.$$.fragment),V(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&V(n.$$.fragment,t),s=!0)},o(t){n&&K(n.$$.fragment,t),s=!1},d(t){t&&h(r),n&&X(n,t)}}}function gt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function $t(t){let e,n,r,s;const o=[gt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(B(),K(a[i],1,1,()=>{a[i]=null}),M(),n=a[e],n||(n=a[e]=o[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){s||(V(n),s=!0)},o(t){K(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function vt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new ut({props:o}),{c(){z(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?F(s,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function yt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,P().$$.after_update.push(u),f=rt,h=r,P().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class bt extends tt{constructor(t){super(),Z(this,t,yt,vt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/index\.json$/,/^\/([^\/]+?)\.json$/],wt=[{js:()=>import("./index.f268e46e.js"),css:[]},{js:()=>import("./about.cae23e2b.js"),css:[]},{js:()=>import("./[slug].1fbd9463.js"),css:[]}],_t=(xt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:2,params:t=>({slug:xt(t[1])})}]}]);var xt;const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Rt,Pt,Lt=!1,Ct=[],Nt="{}";const jt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(St&&St.session)};let qt,Ot;jt.session.subscribe(async t=>{if(qt=t,!Lt)return;Ot=!0;const e=Bt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=await Ft(e);n===Rt&&await Kt(r,o,s,e.page)});let Ut,It=null;let kt,Tt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Jt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Mt(){return{x:pageXOffset,y:pageYOffset}}async function Vt(t,e,n,r){if(e)kt=e;else{const t=Mt();Jt[kt]=t,e=kt=++Tt,Jt[kt]=n?t:{x:0,y:0}}kt=e,At&&jt.preloading.set(!0);const s=It&&It.href===t.href?It.promise:Ft(t);It=null;const o=Rt={},{redirect:a,props:c,branch:i}=await s;if(o===Rt&&(await Kt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Jt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Jt[kt]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),Vt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await Pt},n.notify=jt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)zt(t.nextSibling);zt(t),zt(e)}At=new bt({target:Ut,props:n,hydrate:!0})}Ct=e,Nt=JSON.stringify(r.query),Lt=!0,Ot=!1}async function Ft(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Pt||(Pt=St.preloaded[0]||st.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Nt)return!0;const s=Ct[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!Ot&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=Lt||!St.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:St.preloaded[c+1],o["level"+h]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Yt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function zt(t){t.parentNode.removeChild(t)}function Gt(t){const e=Bt(new URL(t,document.baseURI));if(e)return It&&t===It.href||function(t,e){It={href:t,promise:e}}(t,Ft(e)),It.promise}let Wt;function Xt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Bt(s);if(o){Vt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ht.pushState({id:kt},"",s.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Jt[kt]=Mt(),t.state){const e=Bt(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){kt=t}(Tt),Ht.replaceState({id:kt},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ht.scrollRestoration="auto"}),addEventListener("load",()=>{Ht.scrollRestoration="manual"}),function(t){Ut=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Tt},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=St;Pt||(Pt=o&&o[0]),Kt(null,[],{error:c,status:a,session:s,level0:{props:Pt},level1:{props:{status:a,error:c},component:dt},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=Bt(n);return r?Vt(r,Tt,!0,t):void 0});export{S as H,tt as S,g as a,y as b,b as c,w as d,d as e,E as f,h as g,v as h,Z as i,f as j,u as k,_ as l,p as m,t as n,x as q,a as s,m as t};