import{r as t,_ as s,a as n,b as e,c as r,i as a,d as c,S as o,s as l,e as i,f as u,t as f,g as h,h as p,j as v,k as g,l as m,m as d,n as E,o as b,p as R,q as y,u as P,v as x,w,x as I}from"./client.96d360a8.js";import{_ as J}from"./asyncToGenerator.5229e80b.js";function j(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=n(t);if(s){var c=n(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return e(this,r)}}function B(t,s,n){var e=t.slice();return e[1]=s[n],e}function A(t){var s,n,e,r;return{c:function(){s=i("figure"),n=i("span"),e=i("img"),this.h()},l:function(t){s=h(t,"FIGURE",{class:!0});var r=p(s);n=h(r,"SPAN",{class:!0});var a=p(n);e=h(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(m),r.forEach(m),this.h()},h:function(){e.src!==(r=t[1].image)&&d(e,"src",r),d(e,"alt",""),d(e,"class","svelte-m076lg"),d(n,"class","svelte-m076lg"),d(s,"class","svelte-m076lg")},m:function(t,r){E(t,s,r),b(s,n),b(n,e)},p:function(t,s){1&s&&e.src!==(r=t[1].image)&&d(e,"src",r)},d:function(t){t&&m(s)}}}function S(t){var s,n,e,r,a,c,o,l,y,P,x=t[1].title+"",w=t[1].pubdate+"",I=t[1].image&&A(t);return{c:function(){s=i("div"),n=i("a"),I&&I.c(),e=u(),r=i("h3"),a=f(x),c=u(),o=i("span"),l=f(w),P=u(),this.h()},l:function(t){s=h(t,"DIV",{class:!0});var i=p(s);n=h(i,"A",{rel:!0,href:!0,class:!0});var u=p(n);I&&I.l(u),e=v(u),r=h(u,"H3",{class:!0});var f=p(r);a=g(f,x),f.forEach(m),c=v(u),o=h(u,"SPAN",{class:!0});var d=p(o);l=g(d,w),d.forEach(m),u.forEach(m),P=v(i),i.forEach(m),this.h()},h:function(){d(r,"class","svelte-m076lg"),d(o,"class","date svelte-m076lg"),d(n,"rel","prefetch"),d(n,"href",y=t[1].slug),d(n,"class","svelte-m076lg"),d(s,"class","svelte-m076lg")},m:function(t,i){E(t,s,i),b(s,n),I&&I.m(n,null),b(n,e),b(n,r),b(r,a),b(n,c),b(n,o),b(o,l),b(s,P)},p:function(t,s){t[1].image?I?I.p(t,s):((I=A(t)).c(),I.m(n,e)):I&&(I.d(1),I=null),1&s&&x!==(x=t[1].title+"")&&R(a,x),1&s&&w!==(w=t[1].pubdate+"")&&R(l,w),1&s&&y!==(y=t[1].slug)&&d(n,"href",y)},d:function(t){t&&m(s),I&&I.d()}}}function k(t){for(var s,n,e,r,a,c,o,l,R,J,j,A,k,D,G,V,q,F,H,M=t[0],N=[],$=0;$<M.length;$+=1)N[$]=S(B(t,M,$));return{c:function(){s=u(),n=i("div"),e=i("p"),r=f("Research, thoughts, and notes of Jens E. Pedersen."),a=u(),c=i("p"),o=i("iframe"),l=f("\n     "),R=u(),J=i("br"),j=u(),A=i("br"),k=u(),D=i("h1"),G=f("Posts"),V=u(),q=i("br"),F=u(),H=i("div");for(var t=0;t<N.length;t+=1)N[t].c();this.h()},l:function(t){y('[data-svelte="svelte-kowrte"]',document.head).forEach(m),s=v(t),n=h(t,"DIV",{class:!0});var i=p(n);e=h(i,"P",{});var u=p(e);r=g(u,"Research, thoughts, and notes of Jens E. Pedersen."),u.forEach(m),a=v(i),c=h(i,"P",{});var f=p(c);o=h(f,"IFRAME",{src:!0,title:!0,height:!0,width:!0,style:!0}),p(o).forEach(m),l=g(f,"\n     "),f.forEach(m),R=v(i),J=h(i,"BR",{}),j=v(i),A=h(i,"BR",{}),k=v(i),D=h(i,"H1",{class:!0});var d=p(D);G=g(d,"Posts"),d.forEach(m),V=v(i),q=h(i,"BR",{}),F=v(i),H=h(i,"DIV",{class:!0});for(var E=p(H),b=0;b<N.length;b+=1)N[b].l(E);E.forEach(m),i.forEach(m),this.h()},h:function(){document.title="J. E. Pedersen",o.src!=="https://github.com/sponsors/Jegp/button"&&d(o,"src","https://github.com/sponsors/Jegp/button"),d(o,"title","Sponsor Jegp"),d(o,"height","35"),d(o,"width","116"),P(o,"border","0"),d(D,"class","svelte-m076lg"),d(H,"class","flex-container svelte-m076lg"),d(n,"class","container svelte-m076lg")},m:function(t,i){E(t,s,i),E(t,n,i),b(n,e),b(e,r),b(n,a),b(n,c),b(c,o),b(c,l),b(n,R),b(n,J),b(n,j),b(n,A),b(n,k),b(n,D),b(D,G),b(n,V),b(n,q),b(n,F),b(n,H);for(var u=0;u<N.length;u+=1)N[u].m(H,null)},p:function(t,s){var n=x(s,1)[0];if(1&n){var e;for(M=t[0],e=0;e<M.length;e+=1){var r=B(t,M,e);N[e]?N[e].p(r,n):(N[e]=S(r),N[e].c(),N[e].m(H,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=M.length}},i:w,o:w,d:function(t){t&&m(s),t&&m(n),I(N,t)}}}function D(t){return G.apply(this,arguments)}function G(){return(G=J(t.mark((function s(n){return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("index.json").then((function(t){return t.json()})).then((function(t){return{posts:t}})));case 2:case"end":return t.stop()}}),s,this)})))).apply(this,arguments)}function V(t,s,n){var e=s.posts;return t.$$set=function(t){"posts"in t&&n(0,e=t.posts)},[e]}var q=function(t){s(e,o);var n=j(e);function e(t){var s;return r(this,e),s=n.call(this),a(c(s),t,V,k,l,{posts:0}),s}return e}();export default q;export{D as preload};
