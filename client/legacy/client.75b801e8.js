function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=w(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f={};function l(){}function h(){}function p(){}var v={};v[i]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==n&&r.call(m,i)&&(v=m);var y=p.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,n){var o;this._invoke=function(i,a){function c(){return new n((function(o,c){!function o(i,a,c,u){var f=s(e[i],e,a);if("throw"!==f.type){var l=f.arg,h=l.value;return h&&"object"===t(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=y.constructor=p,p.constructor=h,p[c]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[c]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function i(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?f(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function x(t){return"function"==typeof t}function $(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function S(e,n,r,o,i,a,c){var u=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],c=Math.max(n.dirty.length,i.length),u=0;u<c;u+=1)a[u]=n.dirty[u]|i[u];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(u){var s=E(n,r,o,c);e.p(s,u)}}function _(t){return null==t?"":t}function L(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function q(){return O(" ")}function C(){return O("")}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function T(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,c=[];a<i.attributes.length;){var u=i.attributes[a++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)i.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?P(e):A(e)}function U(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function D(t){return U(t," ")}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}function G(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}var H,J=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;p(this,t),this.a=e,this.e=this.n=null}return d(t,[{key:"m",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=A(e.nodeName),this.t=e,this.h(t)),this.i(n)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var e=0;e<this.n.length;e+=1)k(this.t,this.n[e],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(R)}}]),t}();function M(t){H=t}function V(){if(!H)throw new Error("Function called outside component initialization");return H}var Y=[],z=[],K=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){K.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<Y.length;t+=1){var e=Y[t];M(e),rt(e.$$)}for(Y.length=0;z.length;)z.pop()();for(var n=0;n<K.length;n+=1){var r=K[n];et.has(r)||(et.add(r),r())}K.length=0}while(Y.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,it=new Set;function at(){ot={r:0,c:[],p:ot}}function ct(){ot.r||w(ot.c),ot=ot.p}function ut(t,e){t&&t.i&&(it.delete(t),t.i(e))}function st(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),ot.c.push((function(){it.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ft(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],c=e[i];if(c){for(var u in a)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[i]=c}else for(var f in a)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function lt(e){return"object"===t(e)&&null!==e?e:{}}function ht(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function vt(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,c=r.after_update;o&&o.m(e,n),Z((function(){var e=i.map(g).filter(x);a?a.push.apply(a,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(Z)}function dt(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(Y.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(t,e,n,r,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=H;M(t);var u=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:a},f=!1;if(s.ctx=n?n(t,u,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(s.bound[e]&&s.bound[e](r),f&&mt(t,e)),n})):[],s.update(),f=!0,w(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var l=I(e.target);s.fragment&&s.fragment.l(l),l.forEach(R)}else s.fragment&&s.fragment.c();e.intro&&ut(t.$$.fragment),vt(t,e.target,e.anchor),nt()}M(c)}var gt=function(){function t(){p(this,t)}return d(t,[{key:"$destroy",value:function(){dt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),bt=[];function wt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if($(t,n)&&(t=n,e)){for(var o=!bt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),bt.push(a,t)}if(o){for(var c=0;c<bt.length;c+=2)bt[c][0](bt[c+1]);bt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[i,a];return r.push(c),1===r.length&&(e=n(o)||m),i(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var xt={},$t=function(){return{}};function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function St(t){var e,n,o,i,a,c,u,s,f,l,h,p,v,d,y,g,b,w,x,$,E,S,j,C,F,B,H,J,M,V,Y;return{c:function(){e=A("nav"),n=A("ul"),o=A("li"),i=A("a"),a=O("J. E. Pedersen"),c=q(),u=A("li"),s=q(),f=A("li"),l=A("a"),h=O("home"),v=q(),d=A("li"),y=A("a"),g=O("about"),w=q(),x=A("li"),$=A("a"),E=P("svg"),S=P("g"),j=P("path"),C=O("\n\t\t\t@jensegholm"),F=q(),B=A("li"),H=A("a"),J=P("svg"),M=P("g"),V=P("path"),Y=O("\n\t\t\t@jegp"),this.h()},l:function(t){var r=I(e=T(t,"NAV",{class:!0})),p=I(n=T(r,"UL",{class:!0})),m=I(o=T(p,"LI",{class:!0})),b=I(i=T(m,"A",{class:!0,href:!0}));a=U(b,"J. E. Pedersen"),b.forEach(R),m.forEach(R),c=D(p),I(u=T(p,"LI",{class:!0})).forEach(R),s=D(p);var _=I(f=T(p,"LI",{class:!0})),L=I(l=T(_,"A",{class:!0,href:!0}));h=U(L,"home"),L.forEach(R),_.forEach(R),v=D(p);var k=I(d=T(p,"LI",{class:!0})),A=I(y=T(k,"A",{class:!0,href:!0}));g=U(A,"about"),A.forEach(R),k.forEach(R),w=D(p);var P=I(x=T(p,"LI",{class:!0})),O=I($=T(P,"A",{class:!0,href:!0,title:!0})),q=I(E=T(O,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0,class:!0},1)),N=I(S=T(q,"g",{},1));I(j=T(N,"path",{style:!0,d:!0},1)).forEach(R),N.forEach(R),q.forEach(R),C=U(O,"\n\t\t\t@jensegholm"),O.forEach(R),P.forEach(R),F=D(p);var G=I(B=T(p,"LI",{class:!0})),z=I(H=T(G,"A",{class:!0,href:!0,title:!0})),K=I(J=T(z,"svg",{version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0,class:!0},1)),W=I(M=T(K,"g",{},1));I(V=T(W,"path",{d:!0},1)).forEach(R),W.forEach(R),K.forEach(R),Y=U(z,"\n\t\t\t@jegp"),z.forEach(R),G.forEach(R),p.forEach(R),r.forEach(R),this.h()},h:function(){N(i,"class","deselected svelte-1n0qd6t"),N(i,"href","."),N(o,"class","svelte-1n0qd6t"),N(u,"class","fill svelte-1n0qd6t"),N(l,"class",p=_(void 0===t[0]?"selected":"")+" svelte-1n0qd6t"),N(l,"href","."),N(f,"class","svelte-1n0qd6t"),N(y,"class",b=_("about"===t[0]?"selected":"")+" svelte-1n0qd6t"),N(y,"href","about"),N(d,"class","svelte-1n0qd6t"),G(j,"fill","#3FA9F5"),N(j,"d","M4.453,173.33c9.763-1.192,19.663,0.092,29.426-1.512c4.904-0.779,9.396-2.429,13.842-4.171   c-11-7.058-20.901-15.125-30.113-24.796c-3.3-3.438-0.917-9.213,3.896-9.35c3.942,0.183,7.792-0.137,11.55-0.917   c-9.58-12.146-17.005-25.209-22.78-39.876c-1.558-3.942,3.025-7.929,6.738-6.738c2.154,0.871,4.354,1.467,6.6,1.925   c-6.829-16.409-8.25-32.955-4.446-51.106c0.871-4.171,6.371-5.179,9.167-2.429c21.909,21.541,49.593,31.9,79.202,36.85   c-2.613-20.259,11.78-41.801,30.663-48.86c15.676-5.821,36.714-1.833,47.256,11.367c7.059-4.446,16.821-5.913,24.659-7.288   c4.125-0.688,8.113,3.346,5.684,7.425c-2.842,4.767-5.546,9.854-8.525,14.713c6.05-1.788,12.284-2.888,18.517-3.667   c4.492-0.596,7.196,6.325,3.759,9.075c-7.288,5.821-14.53,12.467-22.276,17.784c-0.229,51.472-15.263,94.649-61.235,123.937   c-38.319,24.477-109.546,20.352-142.867-12.97H3.124c-1.467-0.367-2.246-1.467-2.521-2.658c-1.283-1.925-0.367-4.308,1.329-5.225   C2.574,174.063,3.399,173.467,4.453,173.33z"),N(E,"version","1.1"),N(E,"id","Layer_1"),N(E,"xmlns","http://www.w3.org/2000/svg"),N(E,"xmlns:xlink","http://www.w3.org/1999/xlink"),N(E,"x","0px"),N(E,"y","0px"),N(E,"viewBox","0 0 231.104 231.104"),G(E,"enable-background","new 0 0 231.104 231.104"),N(E,"xml:space","preserve"),N(E,"class","svelte-1n0qd6t"),N($,"class","svg svelte-1n0qd6t"),N($,"href","https://twitter.com/jensegholm"),N($,"title","Jens E. Pedersen on Twitter"),N(x,"class","svelte-1n0qd6t"),N(V,"d","M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z"),N(J,"version","1.1"),N(J,"id","Capa_1"),N(J,"xmlns","http://www.w3.org/2000/svg"),N(J,"xmlns:xlink","http://www.w3.org/1999/xlink"),N(J,"x","0px"),N(J,"y","0px"),N(J,"viewBox","0 0 438.549 438.549"),G(J,"enable-background","new 0 0 438.549 438.549"),N(J,"xml:space","preserve"),N(J,"class","svelte-1n0qd6t"),N(H,"class","svg svelte-1n0qd6t"),N(H,"href","https://github.com/jegp"),N(H,"title","Jens E. Pedersen on GitHub"),N(B,"class","svelte-1n0qd6t"),N(n,"class","svelte-1n0qd6t"),N(e,"class","svelte-1n0qd6t")},m:function(t,r){k(t,e,r),L(e,n),L(n,o),L(o,i),L(i,a),L(n,c),L(n,u),L(n,s),L(n,f),L(f,l),L(l,h),L(n,v),L(n,d),L(d,y),L(y,g),L(n,w),L(n,x),L(x,$),L($,E),L(E,S),L(S,j),L($,C),L(n,F),L(n,B),L(B,H),L(H,J),L(J,M),L(M,V),L(H,Y)},p:function(t,e){var n=r(e,1)[0];1&n&&p!==(p=_(void 0===t[0]?"selected":"")+" svelte-1n0qd6t")&&N(l,"class",p),1&n&&b!==(b=_("about"===t[0]?"selected":"")+" svelte-1n0qd6t")&&N(y,"class",b)},i:m,o:m,d:function(t){t&&R(e)}}}function _t(t,e,n){var r=e.segment;return t.$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var Lt=function(t){s(n,gt);var e=Et(n);function n(t){var r;return p(this,n),yt(f(r=e.call(this)),t,_t,St,$,{segment:0}),r}return n}();function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Rt(t){var e,n,o,i,a,c,u,s,f,l,h;e=new Lt({props:{segment:t[0]}});var p=t[2].default,v=function(t,e,n,r){if(t){var o=E(t,e,n,r);return t[0](o)}}(p,t,t[1],null);return{c:function(){ht(e.$$.fragment),n=q(),o=A("main"),v&&v.c(),i=q(),a=A("footer"),c=A("p"),u=O("Except where otherwise noted, content on this site is licensed under a \n"),s=A("a"),f=O("Creative Commons Attribution 4.0 International license\n"),l=O("."),this.h()},l:function(t){pt(e.$$.fragment,t),n=D(t);var r=I(o=T(t,"MAIN",{class:!0}));v&&v.l(r),r.forEach(R),i=D(t);var h=I(a=T(t,"FOOTER",{class:!0})),p=I(c=T(h,"P",{}));u=U(p,"Except where otherwise noted, content on this site is licensed under a \n");var d=I(s=T(p,"A",{rel:!0,href:!0,title:!0}));f=U(d,"Creative Commons Attribution 4.0 International license\n"),d.forEach(R),l=U(p,"."),p.forEach(R),h.forEach(R),this.h()},h:function(){N(o,"class","svelte-g22bv1"),N(s,"rel","license"),N(s,"href","https://creativecommons.org/licenses/by/4.0/"),N(s,"title","Creative Commons Attribution 4.0 International license"),N(a,"class","svelte-g22bv1")},m:function(t,r){vt(e,t,r),k(t,n,r),k(t,o,r),v&&v.m(o,null),k(t,i,r),k(t,a,r),L(a,c),L(c,u),L(c,s),L(s,f),L(c,l),h=!0},p:function(t,n){var o=r(n,1)[0],i={};1&o&&(i.segment=t[0]),e.$set(i),v&&v.p&&2&o&&S(v,p,t,t[1],o,null,null)},i:function(t){h||(ut(e.$$.fragment,t),ut(v,t),h=!0)},o:function(t){st(e.$$.fragment,t),st(v,t),h=!1},d:function(t){dt(e,t),t&&R(n),t&&R(o),v&&v.d(t),t&&R(i),t&&R(a)}}}function jt(t,e,n){var r=e.segment,o=e.$$slots,i=void 0===o?{}:o,a=e.$$scope;return t.$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[r,a,i]}var At=function(t){s(n,gt);var e=kt(n);function n(t){var r;return p(this,n),yt(f(r=e.call(this)),t,jt,Rt,$,{segment:0}),r}return n}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Ot(t){var e,n,r=t[0].stack+"";return{c:function(){e=A("pre"),n=O(r)},l:function(t){var o=I(e=T(t,"PRE",{}));n=U(o,r),o.forEach(R)},m:function(t,r){k(t,e,r),L(e,n)},p:function(t,e){1&e&&r!==(r=t[0].stack+"")&&F(n,r)},d:function(t){t&&R(e)}}}function qt(t){var e,n,o,i,a,c,u,s,f,l=t[0].message+"";document.title=e=t[1];var h=t[2]&&t[0].stack&&Ot(t);return{c:function(){n=q(),o=A("h1"),i=O(t[1]),a=q(),c=A("p"),u=O(l),s=q(),h&&h.c(),f=C(),this.h()},l:function(e){B('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(R),n=D(e);var r=I(o=T(e,"H1",{class:!0}));i=U(r,t[1]),r.forEach(R),a=D(e);var p=I(c=T(e,"P",{class:!0}));u=U(p,l),p.forEach(R),s=D(e),h&&h.l(e),f=C(),this.h()},h:function(){N(o,"class","svelte-8od9u6"),N(c,"class","svelte-8od9u6")},m:function(t,e){k(t,n,e),k(t,o,e),L(o,i),k(t,a,e),k(t,c,e),L(c,u),k(t,s,e),h&&h.m(t,e),k(t,f,e)},p:function(t,n){var o=r(n,1)[0];2&o&&e!==(e=t[1])&&(document.title=e),2&o&&F(i,t[1]),1&o&&l!==(l=t[0].message+"")&&F(u,l),t[2]&&t[0].stack?h?h.p(t,o):((h=Ot(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:m,o:m,d:function(t){t&&R(n),t&&R(o),t&&R(a),t&&R(c),t&&R(s),h&&h.d(t),t&&R(f)}}}function Ct(t,e,n){var r=e.error,o=e.status;return t.$set=function(t){"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o,!1]}var Nt=function(t){s(n,gt);var e=Pt(n);function n(t){var r;return p(this,n),yt(f(r=e.call(this)),t,Ct,qt,$,{error:0,status:1}),r}return n}();function It(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function Tt(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&ht(e.$$.fragment),n=C()},l:function(t){e&&pt(e.$$.fragment,t),n=C()},m:function(t,o){e&&vt(e,t,o),k(t,n,o),r=!0},p:function(t,r){var c=16&r?ft(o,[lt(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){at();var u=e;st(u.$$.fragment,1,0,(function(){dt(u,1)})),ct()}i?(ht((e=new i(a())).$$.fragment),ut(e.$$.fragment,1),vt(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i:function(t){r||(e&&ut(e.$$.fragment,t),r=!0)},o:function(t){e&&st(e.$$.fragment,t),r=!1},d:function(t){t&&R(n),e&&dt(e,t)}}}function Ut(t){var e,n;return e=new Nt({props:{error:t[0],status:t[1]}}),{c:function(){ht(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function Dt(t){var e,n,r,o,i=[Ut,Tt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=i[e](t),{c:function(){n.c(),r=C()},l:function(t){n.l(t),r=C()},m:function(t,n){a[e].m(t,n),k(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?a[e].p(t,o):(at(),st(a[u],1,1,(function(){a[u]=null})),ct(),(n=a[e])||(n=a[e]=i[e](t)).c(),ut(n,1),n.m(r.parentNode,r))},i:function(t){o||(ut(n),o=!0)},o:function(t){st(n),o=!1},d:function(t){a[e].d(t),t&&R(r)}}}function Ft(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],i={$$slots:{default:[Dt]},$$scope:{ctx:t}},a=0;a<o.length;a+=1)i=y(i,o[a]);return e=new At({props:i}),{c:function(){ht(e.$$.fragment)},l:function(t){pt(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var i=r(n,1)[0],a=12&i?ft(o,[4&i&&{segment:t[2][0]},8&i&&lt(t[3].props)]):{};147&i&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i:function(t){n||(ut(e.$$.fragment,t),n=!0)},o:function(t){st(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function Gt(t,e,n){var r,o,i,a=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,h=void 0===l?null:l,p=e.notify;return r=p,V().$$.after_update.push(r),o=xt,i=a,V().$$.context.set(o,i),t.$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,c=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,s=t.segments),"level0"in t&&n(3,f=t.level0),"level1"in t&&n(4,h=t.level1),"notify"in t&&n(6,p=t.notify)},[c,u,s,f,h,a,p]}var Bt,Ht=function(t){s(n,gt);var e=It(n);function n(t){var r;return p(this,n),yt(f(r=e.call(this)),t,Gt,Ft,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Jt=[/^\/index\.json$/,/^\/([^\/]+?)\.json$/],Mt=[{js:function(){return import("./index.e91e1a55.js")},css:[]},{js:function(){return import("./about.152f78a8.js")},css:[]},{js:function(){return import("./[slug].ed486d48.js")},css:[]}],Vt=(Bt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:2,params:function(t){return{slug:Bt(t[1])}}}]}]);function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=pe(new URL(t,document.baseURI));return n?(fe[e.replaceState?"replaceState":"pushState"]({id:ae},"",t),de(n,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var zt,Kt,Wt,Xt,Qt,Zt="undefined"!=typeof __SAPPER__&&__SAPPER__,te=!1,ee=[],ne="{}",re={page:function(t){var e=wt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:wt(null),session:wt(Zt&&Zt.session)};re.session.subscribe(function(){var t=a(o.mark((function t(e){var n,r,i,a,c,u;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Xt=e,te){t.next=3;break}return t.abrupt("return");case 3:return Qt=!0,n=pe(new URL(location.href)),r=Kt={},t.next=8,we(n);case 8:if(i=t.sent,a=i.redirect,c=i.props,u=i.branch,r===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ye(a,u,c,n.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var oe,ie=null;var ae,ce=1;var ue,se,fe="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},le={};function he(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),i=o[1],a=o[2],c=void 0===a?"":a;"string"==typeof n[i]&&(n[i]=[n[i]]),"object"===t(n[i])?n[i].push(c):n[i]=c})),n}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Zt.baseUrl))return null;var e=t.pathname.slice(Zt.baseUrl.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var n=0;n<Vt.length;n+=1){var r=Vt[n],o=r.pattern.exec(e);if(o){var i=he(t.search),a=r.parts[r.parts.length-1],c=a.params?a.params(o):{},u={host:location.host,path:e,query:i,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ve(){return{x:pageXOffset,y:pageYOffset}}function de(t,e,n,r){return me.apply(this,arguments)}function me(){return(me=a(o.mark((function t(e,n,r,i){var a,c,u,s,f,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n?ae=n:(a=ve(),le[ae]=a,n=ae=++ce,le[ae]=r?a:{x:0,y:0}),ae=n,zt&&re.preloading.set(!0),c=ie&&ie.href===e.href?ie.promise:we(e),ie=null,u=Kt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,h=s.branch,u===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ye(f,h,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=le[n],i&&(v=document.getElementById(i.slice(1)))&&(p={x:0,y:v.getBoundingClientRect().top+scrollY}),le[ae]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ye(t,e,n,r){return ge.apply(this,arguments)}function ge(){return(ge=a(o.mark((function t(e,n,r,i){var a,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Yt(e.location,{replaceState:!0}));case 2:if(re.page.set(i),re.preloading.set(!1),!zt){t.next=8;break}zt.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},t.next=11,Wt;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=re.page.notify,a=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),a&&c){for(;a.nextSibling!==c;)Se(a.nextSibling);Se(a),Se(c)}zt=new Ht({target:oe,props:r,hydrate:!0});case 18:ee=n,ne=JSON.stringify(i.query),te=!0,Qt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function be(t,e,n,r){if(r!==ne)return!0;var o=ee[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function we(t){return xe.apply(this,arguments)}function xe(){return(xe=a(o.mark((function t(e){var n,r,i,c,u,s,f,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,i=r.path.split("/").filter(Boolean),c=null,u={error:null,status:200,segments:[i[0]]},s={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(c&&(c.statusCode!==t||c.location!==e))throw new Error("Conflicting redirects");c={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Wt||(Wt=Zt.preloaded[0]||$t.call(s,{host:r.host,path:r.path,query:r.query,params:{}},Xt)),l=1,t.prev=7,h=JSON.stringify(r.query),p=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=a(o.mark((function t(n,a){var c,f,d,m,y,g;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=i[a],be(a,c,p,h)&&(v=!0),u.segments[l]=i[a+1],n){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Qt||v||!ee[a]||ee[a].part!==n.i){t.next=8;break}return t.abrupt("return",ee[a]);case 8:return v=!1,t.next=11,Ee(Mt[n.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!te&&Zt.preloaded[a+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Xt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Zt.preloaded[a+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:c,match:p,part:n.i});case 27:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:c,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function $e(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function Ee(t){var e="string"==typeof t.css?[]:t.css.map($e);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function Se(t){t.parentNode.removeChild(t)}function _e(t){var e=pe(new URL(t,document.baseURI));if(e)return ie&&t===ie.href||function(t,e){ie={href:t,promise:e}}(t,we(e)),ie.promise}function Le(t){clearTimeout(ue),ue=setTimeout((function(){ke(t)}),20)}function ke(t){var e=je(t.target);e&&"prefetch"===e.rel&&_e(e.href)}function Re(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=je(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=pe(i);if(a)de(a,null,n.hasAttribute("sapper-noscroll"),i.hash),e.preventDefault(),fe.pushState({id:ae},"",i.href)}}}else location.hash||e.preventDefault()}}}function je(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Ae(t){if(le[ae]=ve(),t.state){var e=pe(new URL(location.href));e?de(e,t.state.id):location.href=location.href}else(function(t){ae=t})(ce=ce+1),fe.replaceState({id:ae},"",location.href)}se={target:document.querySelector("#sapper")},"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){fe.scrollRestoration="auto"})),addEventListener("load",(function(){fe.scrollRestoration="manual"})),function(t){oe=t}(se.target),addEventListener("click",Re),addEventListener("popstate",Ae),addEventListener("touchstart",ke),addEventListener("mousemove",Le),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;fe.replaceState({id:ce},"",n);var r,o,i,a,c,u,s,f,l=new URL(location.href);if(Zt.error)return r=location,o=r.host,i=r.pathname,a=r.search,c=Zt.session,u=Zt.preloaded,s=Zt.status,f=Zt.error,Wt||(Wt=u&&u[0]),void ye(null,[],{error:f,status:s,session:c,level0:{props:Wt},level1:{props:{status:s,error:f},component:Nt},segments:u},{host:o,path:i,query:he(a),params:{}});var h=pe(l);return h?de(h,ce,!0,e):void 0}));export{J as H,gt as S,a as _,s as a,c as b,l as c,p as d,f as e,A as f,q as g,T as h,yt as i,I as j,D as k,U as l,R as m,N as n,k as o,L as p,F as q,o as r,$ as s,O as t,B as u,G as v,r as w,m as x,j as y};
