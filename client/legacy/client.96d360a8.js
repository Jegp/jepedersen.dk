function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,i=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new R(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,$=w&&w(w(O([])));$&&$!==r&&o.call($,i)&&(x=$);var E=b.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=E.constructor=b,b.constructor=y,y.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[c]=function(){return this},e.AsyncIterator=k,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new k(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),s(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(a={exports:{}},a.exports),a.exports);function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function d(){}function m(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function y(){return Object.create(null)}function b(t){t.forEach(g)}function x(t){return"function"==typeof t}function w(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function $(t,e,n,r){return t[1]&&r?m(n.ctx.slice(),t[1](r(e))):n.ctx}function E(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=$(n,r,o,c);e.p(s,u)}}function _(t){return null==t?"":t}function k(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function N(){return P("")}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?O(e):R(e)}function T(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return P(e)}function B(t){return T(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function J(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}var G,M=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;h(this,t),this.a=e,this.e=this.n=null}return v(t,[{key:"m",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=R(e.nodeName),this.t=e,this.h(t)),this.i(n)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var e=0;e<this.n.length;e+=1)S(this.t,this.n[e],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(L)}}]),t}();function H(t){G=t}function K(){if(!G)throw new Error("Function called outside component initialization");return G}var V=[],Y=[],z=[],D=[],W=Promise.resolve(),X=!1;function Q(t){z.push(t)}var Z=!1,tt=new Set;function et(){if(!Z){Z=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];H(e),nt(e.$$)}for(H(null),V.length=0;Y.length;)Y.pop()();for(var n=0;n<z.length;n+=1){var r=z[n];tt.has(r)||(tt.add(r),r())}z.length=0}while(V.length);for(;D.length;)D.pop()();X=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),b(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}var rt,ot=new Set;function at(){rt={r:0,c:[],p:rt}}function it(){rt.r||b(rt.c),rt=rt.p}function ct(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((function(){ot.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function st(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ft(e){return"object"===t(e)&&null!==e?e:{}}function lt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function pt(t,e,n,r){var a=t.$$,i=a.fragment,c=a.on_mount,u=a.on_destroy,s=a.after_update;i&&i.m(e,n),r||Q((function(){var e=c.map(g).filter(x);u?u.push.apply(u,o(e)):b(e),t.$$.on_mount=[]})),s.forEach(Q)}function vt(t,e){var n=t.$$;null!==n.fragment&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(V.push(t),X||(X=!0,W.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=G;H(t);var u=t.$$={fragment:null,ctx:null,props:a,update:d,not_equal:o,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:y(),dirty:i,skip_bound:!1},s=!1;if(u.ctx=n?n(t,e.props||{},(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return u.ctx&&o(u.ctx[e],u.ctx[e]=r)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](r),s&&dt(t,e)),n})):[],u.update(),s=!0,b(u.before_update),u.fragment=!!r&&r(u.ctx),e.target){if(e.hydrate){var f=C(e.target);u.fragment&&u.fragment.l(f),f.forEach(L)}else u.fragment&&u.fragment.c();e.intro&&ct(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),et()}H(c)}var gt=function(){function t(){h(this,t)}return v(t,[{key:"$destroy",value:function(){vt(this,1),this.$destroy=d}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),yt=[];function bt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=[];function o(n){if(w(t,n)&&(t=n,e)){for(var o=!yt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),yt.push(i,t)}if(o){for(var c=0;c<yt.length;c+=2)yt[c][0](yt[c+1]);yt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||d),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var xt={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function $t(t){var e,n,o,a,i,c,u,s,f,l,h,p,v,m,g,y,b,x,w,$,E,j,N,U,F,G,M,H,K,V,Y;return{c:function(){e=R("nav"),n=R("ul"),o=R("li"),a=R("a"),i=P("J. E. Pedersen"),c=A(),u=R("li"),s=A(),f=R("li"),l=R("a"),h=P("home"),v=A(),m=R("li"),g=R("a"),y=P("about"),x=A(),w=R("li"),$=R("a"),E=O("svg"),j=O("g"),N=O("path"),U=P("\n\t\t\t@jensegholm"),F=A(),G=R("li"),M=R("a"),H=O("svg"),K=O("g"),V=O("path"),Y=P("\n\t\t\t@jegp"),this.h()},l:function(t){var r=C(e=I(t,"NAV",{class:!0})),p=C(n=I(r,"UL",{class:!0})),d=C(o=I(p,"LI",{class:!0})),b=C(a=I(d,"A",{class:!0,href:!0}));i=T(b,"J. E. Pedersen"),b.forEach(L),d.forEach(L),c=B(p),C(u=I(p,"LI",{class:!0})).forEach(L),s=B(p);var _=C(f=I(p,"LI",{class:!0})),k=C(l=I(_,"A",{class:!0,href:!0}));h=T(k,"home"),k.forEach(L),_.forEach(L),v=B(p);var S=C(m=I(p,"LI",{class:!0})),R=C(g=I(S,"A",{class:!0,href:!0}));y=T(R,"about"),R.forEach(L),S.forEach(L),x=B(p);var O=C(w=I(p,"LI",{class:!0})),P=C($=I(O,"A",{class:!0,href:!0,title:!0})),A=C(E=I(P,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0,class:!0},1)),q=C(j=I(A,"g",{},1));C(N=I(q,"path",{style:!0,d:!0},1)).forEach(L),q.forEach(L),A.forEach(L),U=T(P,"\n\t\t\t@jensegholm"),P.forEach(L),O.forEach(L),F=B(p);var J=C(G=I(p,"LI",{class:!0})),z=C(M=I(J,"A",{class:!0,href:!0,title:!0})),D=C(H=I(z,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0,class:!0},1)),W=C(K=I(D,"g",{},1));C(V=I(W,"path",{d:!0},1)).forEach(L),W.forEach(L),D.forEach(L),Y=T(z,"\n\t\t\t@jegp"),z.forEach(L),J.forEach(L),p.forEach(L),r.forEach(L),this.h()},h:function(){q(a,"class","deselected svelte-1n0qd6t"),q(a,"href","."),q(o,"class","svelte-1n0qd6t"),q(u,"class","fill svelte-1n0qd6t"),q(l,"class",p=_(void 0===t[0]?"selected":"")+" svelte-1n0qd6t"),q(l,"href","."),q(f,"class","svelte-1n0qd6t"),q(g,"class",b=_("about"===t[0]?"selected":"")+" svelte-1n0qd6t"),q(g,"href","about"),q(m,"class","svelte-1n0qd6t"),J(N,"fill","#3FA9F5"),q(N,"d","M4.453,173.33c9.763-1.192,19.663,0.092,29.426-1.512c4.904-0.779,9.396-2.429,13.842-4.171   c-11-7.058-20.901-15.125-30.113-24.796c-3.3-3.438-0.917-9.213,3.896-9.35c3.942,0.183,7.792-0.137,11.55-0.917   c-9.58-12.146-17.005-25.209-22.78-39.876c-1.558-3.942,3.025-7.929,6.738-6.738c2.154,0.871,4.354,1.467,6.6,1.925   c-6.829-16.409-8.25-32.955-4.446-51.106c0.871-4.171,6.371-5.179,9.167-2.429c21.909,21.541,49.593,31.9,79.202,36.85   c-2.613-20.259,11.78-41.801,30.663-48.86c15.676-5.821,36.714-1.833,47.256,11.367c7.059-4.446,16.821-5.913,24.659-7.288   c4.125-0.688,8.113,3.346,5.684,7.425c-2.842,4.767-5.546,9.854-8.525,14.713c6.05-1.788,12.284-2.888,18.517-3.667   c4.492-0.596,7.196,6.325,3.759,9.075c-7.288,5.821-14.53,12.467-22.276,17.784c-0.229,51.472-15.263,94.649-61.235,123.937   c-38.319,24.477-109.546,20.352-142.867-12.97H3.124c-1.467-0.367-2.246-1.467-2.521-2.658c-1.283-1.925-0.367-4.308,1.329-5.225   C2.574,174.063,3.399,173.467,4.453,173.33z"),q(E,"version","1.1"),q(E,"id","Layer_1"),q(E,"xmlns","http://www.w3.org/2000/svg"),q(E,"xmlns:xlink","http://www.w3.org/1999/xlink"),q(E,"x","0px"),q(E,"y","0px"),q(E,"viewBox","0 0 231.104 231.104"),J(E,"enable-background","new 0 0 231.104 231.104"),q(E,"xml:space","preserve"),q(E,"class","svelte-1n0qd6t"),q($,"class","svg svelte-1n0qd6t"),q($,"href","https://twitter.com/jensegholm"),q($,"title","Jens E. Pedersen on Twitter"),q(w,"class","svelte-1n0qd6t"),q(V,"d","M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z"),q(H,"version","1.1"),q(H,"id","Capa_1"),q(H,"xmlns","http://www.w3.org/2000/svg"),q(H,"xmlns:xlink","http://www.w3.org/1999/xlink"),q(H,"x","0px"),q(H,"y","0px"),q(H,"viewBox","0 0 438.549 438.549"),J(H,"enable-background","new 0 0 438.549 438.549"),q(H,"xml:space","preserve"),q(H,"class","svelte-1n0qd6t"),q(M,"class","svg svelte-1n0qd6t"),q(M,"href","https://github.com/jegp"),q(M,"title","Jens E. Pedersen on GitHub"),q(G,"class","svelte-1n0qd6t"),q(n,"class","svelte-1n0qd6t"),q(e,"class","svelte-1n0qd6t")},m:function(t,r){S(t,e,r),k(e,n),k(n,o),k(o,a),k(a,i),k(n,c),k(n,u),k(n,s),k(n,f),k(f,l),k(l,h),k(n,v),k(n,m),k(m,g),k(g,y),k(n,x),k(n,w),k(w,$),k($,E),k(E,j),k(j,N),k($,U),k(n,F),k(n,G),k(G,M),k(M,H),k(H,K),k(K,V),k(M,Y)},p:function(t,e){var n=r(e,1)[0];1&n&&p!==(p=_(void 0===t[0]?"selected":"")+" svelte-1n0qd6t")&&q(l,"class",p),1&n&&b!==(b=_("about"===t[0]?"selected":"")+" svelte-1n0qd6t")&&q(g,"class",b)},i:d,o:d,d:function(t){t&&L(e)}}}function Et(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var _t=function(t){s(n,gt);var e=wt(n);function n(t){var r;return h(this,n),mt(f(r=e.call(this)),t,Et,$t,w,{segment:0}),r}return n}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function St(t){var e,n,o,a,i,c,u,s,f,l,h;e=new _t({props:{segment:t[0]}});var p=t[2].default,v=function(t,e,n,r){if(t){var o=$(t,e,n,r);return t[0](o)}}(p,t,t[1],null);return{c:function(){lt(e.$$.fragment),n=A(),o=R("main"),v&&v.c(),a=A(),i=R("footer"),c=R("p"),u=P("Except where otherwise noted, content on this site is licensed under a \n"),s=R("a"),f=P("Creative Commons Attribution 4.0 International license\n"),l=P("."),this.h()},l:function(t){ht(e.$$.fragment,t),n=B(t);var r=C(o=I(t,"MAIN",{class:!0}));v&&v.l(r),r.forEach(L),a=B(t);var h=C(i=I(t,"FOOTER",{class:!0})),p=C(c=I(h,"P",{}));u=T(p,"Except where otherwise noted, content on this site is licensed under a \n");var d=C(s=I(p,"A",{rel:!0,href:!0,title:!0}));f=T(d,"Creative Commons Attribution 4.0 International license\n"),d.forEach(L),l=T(p,"."),p.forEach(L),h.forEach(L),this.h()},h:function(){q(o,"class","svelte-g22bv1"),q(s,"rel","license"),q(s,"href","https://creativecommons.org/licenses/by/4.0/"),q(s,"title","Creative Commons Attribution 4.0 International license"),q(i,"class","svelte-g22bv1")},m:function(t,r){pt(e,t,r),S(t,n,r),S(t,o,r),v&&v.m(o,null),S(t,a,r),S(t,i,r),k(i,c),k(c,u),k(c,s),k(s,f),k(c,l),h=!0},p:function(t,n){var o=r(n,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),v&&v.p&&2&o&&E(v,p,t,t[1],o,null,null)},i:function(t){h||(ct(e.$$.fragment,t),ct(v,t),h=!0)},o:function(t){ut(e.$$.fragment,t),ut(v,t),h=!1},d:function(t){vt(e,t),t&&L(n),t&&L(o),v&&v.d(t),t&&L(a),t&&L(i)}}}function Lt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var jt=function(t){s(n,gt);var e=kt(n);function n(t){var r;return h(this,n),mt(f(r=e.call(this)),t,Lt,St,w,{segment:0}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Ot(t){var e,n,r=t[0].stack+"";return{c:function(){e=R("pre"),n=P(r)},l:function(t){var o=C(e=I(t,"PRE",{}));n=T(o,r),o.forEach(L)},m:function(t,r){S(t,e,r),k(e,n)},p:function(t,e){1&e&&r!==(r=t[0].stack+"")&&U(n,r)},d:function(t){t&&L(e)}}}function Pt(t){var e,n,o,a,i,c,u,s,f,l=t[0].message+"";document.title=e=t[1];var h=t[2]&&t[0].stack&&Ot(t);return{c:function(){n=A(),o=R("h1"),a=P(t[1]),i=A(),c=R("p"),u=P(l),s=A(),h&&h.c(),f=N(),this.h()},l:function(e){F('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),n=B(e);var r=C(o=I(e,"H1",{class:!0}));a=T(r,t[1]),r.forEach(L),i=B(e);var p=C(c=I(e,"P",{class:!0}));u=T(p,l),p.forEach(L),s=B(e),h&&h.l(e),f=N(),this.h()},h:function(){q(o,"class","svelte-8od9u6"),q(c,"class","svelte-8od9u6")},m:function(t,e){S(t,n,e),S(t,o,e),k(o,a),S(t,i,e),S(t,c,e),k(c,u),S(t,s,e),h&&h.m(t,e),S(t,f,e)},p:function(t,n){var o=r(n,1)[0];2&o&&e!==(e=t[1])&&(document.title=e),2&o&&U(a,t[1]),1&o&&l!==(l=t[0].message+"")&&U(u,l),t[2]&&t[0].stack?h?h.p(t,o):((h=Ot(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:d,o:d,d:function(t){t&&L(n),t&&L(o),t&&L(i),t&&L(c),t&&L(s),h&&h.d(t),t&&L(f)}}}function At(t,e,n){var r=e.error,o=e.status;return t.$$set=function(t){"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o,false]}var Nt=function(t){s(n,gt);var e=Rt(n);function n(t){var r;return h(this,n),mt(f(r=e.call(this)),t,At,Pt,w,{error:0,status:1}),r}return n}();function qt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Ct(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=m(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&lt(e.$$.fragment),n=N()},l:function(t){e&&ht(e.$$.fragment,t),n=N()},m:function(t,o){e&&pt(e,t,o),S(t,n,o),r=!0},p:function(t,r){var c=16&r?st(o,[ft(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){at();var u=e;ut(u.$$.fragment,1,0,(function(){vt(u,1)})),it()}a?(lt((e=new a(i())).$$.fragment),ct(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o:function(t){e&&ut(e.$$.fragment,t),r=!1},d:function(t){t&&L(n),e&&vt(e,t)}}}function It(t){var e,n;return e=new Nt({props:{error:t[0],status:t[1]}}),{c:function(){lt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){pt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Tt(t){var e,n,r,o,a=[It,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){i[e].m(t,n),S(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(at(),ut(i[u],1,1,(function(){i[u]=null})),it(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),ct(n,1),n.m(r.parentNode,r))},i:function(t){o||(ct(n),o=!0)},o:function(t){ut(n),o=!1},d:function(t){i[e].d(t),t&&L(r)}}}function Bt(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Tt]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=m(a,o[i]);return e=new jt({props:a}),{c:function(){lt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){pt(e,t,r),n=!0},p:function(t,n){var a=r(n,1)[0],i=12&a?st(o,[4&a&&{segment:t[2][0]},8&a&&ft(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){vt(e,t)}}}function Ut(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,h=e.notify;return function(t){K().$$.after_update.push(t)}(h),r=xt,o=a,K().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,h=t.notify)},[i,c,u,s,l,a,h]}var Jt,Ft=function(t){s(n,gt);var e=qt(n);function n(t){var r;return h(this,n),mt(f(r=e.call(this)),t,Ut,Bt,w,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Gt=[/^\/index\.json$/,/^\/([^/]+?)\.json$/],Mt=[{js:function(){return Promise.all([import("./index.6bc3e2d3.js"),__inject_styles(["client-d0a8f237.css","index-dfc6bdd8.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.20fa9e09.js"),__inject_styles(["client-d0a8f237.css","about-15370240.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].faf50e45.js"),__inject_styles(["client-d0a8f237.css","[slug]-31ae2761.css"])]).then((function(t){return t[0]}))}}],Ht=(Jt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:function(t){return{slug:Jt(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Kt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Vt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Yt,zt=1;var Dt,Wt,Xt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Qt={};function Zt(e){var n=Object.create(null);return e.length?function(t){return"undefined"!=typeof URLSearchParams?o(new URLSearchParams(t).entries()):t.slice(1).split("&").map((function(t){var e=r(/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," "))),3),n=e[1],o=e[2];return[n,void 0===o?"":o]}))}(e).reduce((function(e,n){var o=r(n,2),a=o[0],i=o[1];return"string"==typeof e[a]&&(e[a]=[e[a]]),"object"===t(e[a])?e[a].push(i):e[a]=i,e}),n):n}function te(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Dt))return null;var e=t.pathname.slice(Dt.length);if(""===e&&(e="/"),!Gt.some((function(t){return t.test(e)})))for(var n=0;n<Ht.length;n+=1){var r=Ht[n],o=r.pattern.exec(e);if(o){var a=Zt(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ee(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Vt(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=te(a);if(i)oe(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Xt.pushState({id:Yt},"",a.href)}}}else location.hash||e.preventDefault()}}}function ne(){return{x:pageXOffset,y:pageYOffset}}function re(t){if(Qt[Yt]=ne(),t.state){var e=te(new URL(location.href));e?oe(e,t.state.id):location.href=location.href}else(function(t){Yt=t})(zt=zt+1),Xt.replaceState({id:Yt},"",location.href)}function oe(t,e,n,r){return Kt(this,void 0,void 0,i.mark((function o(){var a,c,u,s;return i.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(a=!!e)?Yt=e:(c=ne(),Qt[Yt]=c,Yt=e=++zt,Qt[Yt]=n?c:{x:0,y:0}),o.next=4,Wt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Qt[e],r&&(s=document.getElementById(r.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),Qt[Yt]=u,u&&(a||s)?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),o)})))}function ae(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ie,ce=null;function ue(t){return ce&&ce.href===t.href?ce.promise:Oe(t)}function se(t){var e=Vt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){var e=te(new URL(t,ae(document)));if(e)ce&&t===ce.href||(ce={href:t,promise:Oe(e)}),ce.promise}(e.href)}function fe(t){clearTimeout(ie),ie=setTimeout((function(){se(t)}),20)}function le(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=te(new URL(t,ae(document)));if(n){var r=oe(n,null,e.noscroll);return Xt[e.replaceState?"replaceState":"pushState"]({id:Yt},"",t),r}return location.href=t,new Promise((function(){}))}var he,pe,ve,de,me,ge,ye,be,xe,we="undefined"!=typeof __SAPPER__&&__SAPPER__,$e=!1,Ee=[],_e="{}",ke={page:function(t){var e=bt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:bt(null),session:bt(we&&we.session)};function Se(t,e){var n=t.error;return Object.assign({error:n},e)}function Le(t){return Kt(this,void 0,void 0,i.mark((function e(){var n,r,o,a,c,u;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return he&&ke.preloading.set(!0),n=ue(t),r=pe={},e.next=5,n;case 5:if(o=e.sent,a=o.redirect,r===pe){e.next=9;break}return e.abrupt("return");case 9:if(!a){e.next=14;break}return e.next=12,le(a.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=o.props,u=o.branch,e.next=17,je(u,c,Se(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function je(t,e,n){return Kt(this,void 0,void 0,i.mark((function r(){return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(ke.page.set(n),ke.preloading.set(!1),!he){r.next=6;break}he.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:ke.page.subscribe},preloading:{subscribe:ke.preloading.subscribe},session:ke.session},r.next=9,ve;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=ke.page.notify,he=new Ft({target:ge,props:e,hydrate:!0});case 13:Ee=t,_e=JSON.stringify(n.query),$e=!0,me=!1;case 17:case"end":return r.stop()}}),r)})))}function Re(t,e,n,r){if(r!==_e)return!0;var o=Ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function Oe(t){return Kt(this,void 0,void 0,i.mark((function e(){var n,r,o,a,c,u,s,f,l,h,p,v,d=this;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,o=r.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},ve||(s=function(){return{}},ve=we.preloaded[0]||s.call(u,{host:r.host,path:r.path,query:r.query,params:{}},de)),l=1,e.prev=7,h=JSON.stringify(r.query),p=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Kt(d,void 0,void 0,i.mark((function a(){var s,f,d,m,g,y,b;return i.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=o[n],Re(n,s,p,h)&&(v=!0),c.segments[l]=o[n+1],e){a.next=5;break}return a.abrupt("return",{segment:s});case 5:if(f=l++,me||v||!Ee[n]||Ee[n].part!==e.i){a.next=10;break}d=Ee[n],a.next=29;break;case 10:return v=!1,a.next=13,Mt[e.i].js();case 13:if(m=a.sent,g=m.default,y=m.preload,!$e&&we.preloaded[n+1]){a.next=27;break}if(!y){a.next=23;break}return a.next=20,y.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},de);case 20:a.t0=a.sent,a.next=24;break;case 23:a.t0={};case 24:b=a.t0,a.next=28;break;case 27:b=we.preloaded[n+1];case 28:d={component:g,props:b,segment:s,match:p,part:e.i};case 29:return a.abrupt("return",c["level".concat(f)]=d);case 30:case"end":return a.stop()}}),a)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,f=[];case 21:return e.abrupt("return",{redirect:a,props:c,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}ke.session.subscribe((function(t){return Kt(void 0,void 0,void 0,i.mark((function e(){var n,r,o,a,c,u;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de=t,$e){e.next=3;break}return e.abrupt("return");case 3:return me=!0,n=te(new URL(location.href)),r=pe={},e.next=8,Oe(n);case 8:if(o=e.sent,a=o.redirect,c=o.props,u=o.branch,r===pe){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,le(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,je(u,c,Se(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),ye={target:document.querySelector("#sapper")},be=ye.target,ge=be,xe=we.baseUrl,Dt=xe,Wt=Le,"scrollRestoration"in Xt&&(Xt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Xt.scrollRestoration="auto"})),addEventListener("load",(function(){Xt.scrollRestoration="manual"})),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",se),addEventListener("mousemove",fe),we.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=we.session,a=we.preloaded,i=we.status,c=we.error;ve||(ve=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:ve},level1:{props:{status:i,error:c},component:Nt},segments:a},s=Zt(r);je([],u,{host:e,path:n,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Xt.replaceState({id:zt},"",n);var r=te(new URL(location.href));if(r)return oe(r,zt,!0,e)}));export{M as H,gt as S,s as _,c as a,l as b,h as c,f as d,R as e,A as f,I as g,C as h,mt as i,B as j,T as k,L as l,q as m,S as n,k as o,U as p,F as q,i as r,w as s,P as t,J as u,r as v,d as w,j as x};

import __inject_styles from './inject_styles.fe622066.js';