function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function E(t){return b(t," ")}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e=document.body){return Array.from(e.querySelectorAll(t))}class x{constructor(t,e=null){this.e=p("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)u(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(f)}}let S;function A(t){S=t}function P(t,e){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.context.set(t,e)}const R=[],C=[],L=[],N=[],j=Promise.resolve();let q=!1;function O(t){L.push(t)}const U=new Set;function I(){do{for(;R.length;){const t=R.shift();A(t),k(t.$$)}for(;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(R.length);for(;N.length;)N.pop()();q=!1,U.clear()}function k(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const T=new Set;let H;function J(){H={r:0,c:[],p:H}}function D(){H.r||s(H.c),H=H.p}function B(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),H.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function V(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function z(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),O(()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(O)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(R.push(t),q||(q=!0,j.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,o,a,c,l,i=[-1]){const u=S;A(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let p=!1;h.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(h.bound[t]&&h.bound[t](s),p&&X(e,t)),n}):[],h.update(),p=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l(v(n.target)):h.fragment&&h.fragment.c(),n.intro&&B(e.$$.fragment),G(e,n.target,n.anchor),I()),A(u)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,s,o,a,c,h,g,w,_,x,S,A,P,R,C,L;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),a=d("J. E. Pedersen"),c=m(),h=p("li"),g=m(),w=p("li"),_=p("a"),x=d("home"),A=m(),P=p("li"),R=p("a"),C=d("about"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=v(n);r=y(e,"UL",{class:!0});var l=v(r);s=y(l,"LI",{class:!0});var i=v(s);o=y(i,"A",{class:!0,href:!0});var u=v(o);a=b(u,"J. E. Pedersen"),u.forEach(f),i.forEach(f),c=E(l),h=y(l,"LI",{class:!0}),v(h).forEach(f),g=E(l),w=y(l,"LI",{class:!0});var p=v(w);_=y(p,"A",{class:!0,href:!0});var d=v(_);x=b(d,"home"),d.forEach(f),p.forEach(f),A=E(l),P=y(l,"LI",{class:!0});var m=v(P);R=y(m,"A",{class:!0,href:!0});var $=v(R);C=b($,"about"),$.forEach(f),m.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){$(o,"class","deselected svelte-d845tl"),$(o,"href","."),$(s,"class","svelte-d845tl"),$(h,"class","fill svelte-d845tl"),$(_,"class",S=l(void 0===e[0]?"selected":"")+" svelte-d845tl"),$(_,"href","."),$(w,"class","svelte-d845tl"),$(R,"class",L=l("about"===e[0]?"selected":"")+" svelte-d845tl"),$(R,"href","about"),$(P,"class","svelte-d845tl"),$(r,"class","svelte-d845tl"),$(n,"class","svelte-d845tl")},m(t,e){u(t,n,e),i(n,r),i(r,s),i(s,o),i(o,a),i(r,c),i(r,h),i(r,g),i(r,w),i(w,_),i(_,x),i(r,A),i(r,P),i(P,R),i(R,C)},p(t,[e]){1&e&&S!==(S=l(void 0===t[0]?"selected":"")+" svelte-d845tl")&&$(_,"class",S),1&e&&L!==(L=l("about"===t[0]?"selected":"")+" svelte-d845tl")&&$(R,"class",L)},i:t,o:t,d(t){t&&f(n)}}}function st(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends Q{constructor(t){super(),Y(this,t,st,rt,a,{segment:0})}}function at(t){let e,n,r,s,o,a,l,h,g,w;const _=new ot({props:{segment:t[0]}}),x=t[2].default,S=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(x,t,t[1],null);return{c(){F(_.$$.fragment),e=m(),n=p("main"),S&&S.c(),r=m(),s=p("footer"),o=p("p"),a=d("Except where otherwise noted, content on this site is licensed under a \n"),l=p("a"),h=d("Creative Commons Attribution 4.0 International license\n"),g=d("."),this.h()},l(t){z(_.$$.fragment,t),e=E(t),n=y(t,"MAIN",{class:!0});var c=v(n);S&&S.l(c),c.forEach(f),r=E(t),s=y(t,"FOOTER",{class:!0});var i=v(s);o=y(i,"P",{});var u=v(o);a=b(u,"Except where otherwise noted, content on this site is licensed under a \n"),l=y(u,"A",{rel:!0,href:!0,title:!0});var p=v(l);h=b(p,"Creative Commons Attribution 4.0 International license\n"),p.forEach(f),g=b(u,"."),u.forEach(f),i.forEach(f),this.h()},h(){$(n,"class","svelte-g22bv1"),$(l,"rel","license"),$(l,"href","https://creativecommons.org/licenses/by/4.0/"),$(l,"title","Creative Commons Attribution 4.0 International license"),$(s,"class","svelte-g22bv1")},m(t,c){G(_,t,c),u(t,e,c),u(t,n,c),S&&S.m(n,null),u(t,r,c),u(t,s,c),i(s,o),i(o,a),i(o,l),i(l,h),i(o,g),w=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),_.$set(n),S&&S.p&&2&e&&S.p(c(x,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(x,t[1],e,null))},i(t){w||(B(_.$$.fragment,t),B(S,t),w=!0)},o(t){M(_.$$.fragment,t),M(S,t),w=!1},d(t){W(_,t),t&&f(e),t&&f(n),S&&S.d(t),t&&f(r),t&&f(s)}}}function ct(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class lt extends Q{constructor(t){super(),Y(this,t,ct,at,a,{segment:0})}}function it(t){let e,n,r=t[0].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var s=v(e);n=b(s,r),s.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){1&e&&r!==(r=t[0].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function ut(e){let n,r,s,o,a,c,l,h,x,S=e[0].message+"";document.title=n=e[1];let A=e[2]&&e[0].stack&&it(e);return{c(){r=m(),s=p("h1"),o=d(e[1]),a=m(),c=p("p"),l=d(S),h=m(),A&&A.c(),x=g(),this.h()},l(t){_('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t),s=y(t,"H1",{class:!0});var n=v(s);o=b(n,e[1]),n.forEach(f),a=E(t),c=y(t,"P",{class:!0});var i=v(c);l=b(i,S),i.forEach(f),h=E(t),A&&A.l(t),x=g(),this.h()},h(){$(s,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),i(s,o),u(t,a,e),u(t,c,e),i(c,l),u(t,h,e),A&&A.m(t,e),u(t,x,e)},p(t,[e]){2&e&&n!==(n=t[1])&&(document.title=n),2&e&&w(o,t[1]),1&e&&S!==(S=t[0].message+"")&&w(l,S),t[2]&&t[0].stack?A?A.p(t,e):(A=it(t),A.c(),A.m(x.parentNode,x)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(h),A&&A.d(t),t&&f(x)}}}function ft(t,e,n){let{error:r}=e,{status:s}=e;return t.$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,s=t.status)},[r,s,!1]}class ht extends Q{constructor(t){super(),Y(this,t,ft,ut,a,{error:0,status:1})}}function pt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&F(c.$$.fragment),n=g()},l(t){c&&z(c.$$.fragment,t),n=g()},m(t,e){c&&G(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?V(s,[K(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){J();const t=c;M(t.$$.fragment,1,0,()=>{W(t,1)}),D()}o?(F((c=new o(a())).$$.fragment),B(c.$$.fragment,1),G(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&B(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&W(c,t)}}}function dt(t){let e;const n=new ht({props:{error:t[0],status:t[1]}});return{c(){F(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){G(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function mt(t){let e,n,r,s;const o=[dt,pt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(J(),M(a[l],1,1,()=>{a[l]=null}),D(),n=a[e],n||(n=a[e]=o[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){s||(B(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function gt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new lt({props:s});return{c(){F(o.$$.fragment)},l(t){z(o.$$.fragment,t)},m(t,e){G(o,t,e),n=!0},p(t,[e]){const n=12&e?V(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(B(o.$$.fragment,t),n=!0)},o(t){M(o.$$.fragment,t),n=!1},d(t){W(o,t)}}}function $t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e;return P(et,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1)},[s,o,a,c,l,r]}class vt extends Q{constructor(t){super(),Y(this,t,$t,gt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const yt=[/^\/index.json$/,/^\/([^\/]+?).json$/],bt=[{js:()=>import("./index.ca991166.js"),css:["index.ca991166.css","client.6f3c8f74.css"]},{js:()=>import("./about.e135dd94.js"),css:["about.e135dd94.css","client.6f3c8f74.css"]},{js:()=>import("./[slug].49dd876d.js"),css:["[slug].49dd876d.css","client.6f3c8f74.css"]}],Et=(wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:2,params:t=>({slug:wt(t[1])})}]}]);var wt;const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let xt,St,At,Pt=!1,Rt=[],Ct="{}";const Lt={page:tt({}),preloading:tt(null),session:tt(_t&&_t.session)};let Nt,jt;Lt.session.subscribe(async t=>{if(Nt=t,!Pt)return;jt=!0;const e=Jt(new URL(location.href)),n=St={},{redirect:r,props:s,branch:o}=await Vt(e);n===St&&await Mt(r,o,s,e.page)});let qt,Ot=null;let Ut,It=1;const kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<Et.length;n+=1){const r=Et[n],s=r.pattern.exec(e);if(s){const n=Ht(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Dt(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)Ut=e;else{const t=Dt();Tt[Ut]=t,e=Ut=++It,Tt[Ut]=n?t:{x:0,y:0}}Ut=e,xt&&Lt.preloading.set(!0);const s=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const o=St={},{redirect:a,props:c,branch:l}=await s;if(o===St&&(await Mt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Tt[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Bt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Lt.page.set(r),Lt.preloading.set(!1),xt)xt.$set(n);else{n.stores={page:{subscribe:Lt.page.subscribe},preloading:{subscribe:Lt.preloading.subscribe},session:Lt.session},n.level0={props:await At};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}xt=new vt({target:qt,props:n,hydrate:!0})}Rt=e,Ct=JSON.stringify(r.query),Pt=!0,jt=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;At||(At=_t.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const s=Rt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const h=l++;if(!jt&&!u&&Rt[c]&&Rt[c].part===e.i)return Rt[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Kt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=Pt||!_t.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:_t.preloaded[c+1],o[`level${h}`]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Kt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function zt(t){const e=Jt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let Gt;function Wt(t){clearTimeout(Gt),Gt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&zt(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Jt(s);if(o){Bt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),kt.pushState({id:Ut},"",s.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(Tt[Ut]=Dt(),t.state){const e=Jt(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Ut=t}(It),kt.replaceState({id:Ut},"",location.href)}var te;te={target:document.querySelector("#sapper")},"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),function(t){qt=t}(te.target),addEventListener("click",Yt),addEventListener("popstate",Zt),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;kt.replaceState({id:It},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=_t;At||(At=o&&o[0]),Mt(null,[],{error:c,status:a,session:s,level0:{props:At},level1:{props:{status:a,error:c},component:ht},segments:o},{host:e,path:n,query:Ht(r),params:{}})}();const r=Jt(n);return r?Bt(r,It,!0,t):void 0});export{x as H,Q as S,m as a,v as b,y as c,E as d,p as e,b as f,f as g,$ as h,Y as i,u as j,i as k,w as l,h as m,t as n,_ as q,a as s,d as t};
