import{S as s,i as e,s as t,e as a,a as l,t as r,c,b as n,d as o,f as h,g as i,h as f,j as g,k as u,l as m,q as p,m as d,n as v,o as E}from"./client.87aef99e.js";function b(s,e,t){const a=s.slice();return a[1]=e[t],a}function P(s){let e,t,l,r;return{c(){e=a("figure"),t=a("span"),l=a("img"),this.h()},l(s){e=c(s,"FIGURE",{class:!0});var a=n(e);t=c(a,"SPAN",{class:!0});var r=n(t);l=c(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(i),a.forEach(i),this.h()},h(){l.src!==(r=s[1].image)&&f(l,"src",r),f(l,"alt",""),f(l,"class","svelte-m076lg"),f(t,"class","svelte-m076lg"),f(e,"class","svelte-m076lg")},m(s,a){g(s,e,a),u(e,t),u(t,l)},p(s,e){1&e&&l.src!==(r=s[1].image)&&f(l,"src",r)},d(s){s&&i(e)}}}function R(s){let e,t,p,d,v,E,b,R,I,J,x=s[1].title+"",j=s[1].pubdate+"",A=s[1].image&&P(s);return{c(){e=a("div"),t=a("a"),A&&A.c(),p=l(),d=a("h3"),v=r(x),E=l(),b=a("span"),R=r(j),J=l(),this.h()},l(s){e=c(s,"DIV",{class:!0});var a=n(e);t=c(a,"A",{rel:!0,href:!0,class:!0});var l=n(t);A&&A.l(l),p=o(l),d=c(l,"H3",{class:!0});var r=n(d);v=h(r,x),r.forEach(i),E=o(l),b=c(l,"SPAN",{class:!0});var f=n(b);R=h(f,j),f.forEach(i),l.forEach(i),J=o(a),a.forEach(i),this.h()},h(){f(d,"class","svelte-m076lg"),f(b,"class","date svelte-m076lg"),f(t,"rel","prefetch"),f(t,"href",I=s[1].slug),f(t,"class","svelte-m076lg"),f(e,"class","svelte-m076lg")},m(s,a){g(s,e,a),u(e,t),A&&A.m(t,null),u(t,p),u(t,d),u(d,v),u(t,E),u(t,b),u(b,R),u(e,J)},p(s,e){s[1].image?A?A.p(s,e):(A=P(s),A.c(),A.m(t,p)):A&&(A.d(1),A=null),1&e&&x!==(x=s[1].title+"")&&m(v,x),1&e&&j!==(j=s[1].pubdate+"")&&m(R,j),1&e&&I!==(I=s[1].slug)&&f(t,"href",I)},d(s){s&&i(e),A&&A.d()}}}function I(s){let e,t,m,P,I,J,x,j,A,S,w,y,B,D,V,k,q,F,G,H,M=s[0],N=[];for(let e=0;e<M.length;e+=1)N[e]=R(b(s,M,e));return{c(){e=l(),t=a("div"),m=a("p"),P=r("Research, thoughts, and notes of Jens E. Pedersen."),I=l(),J=a("p"),x=a("iframe"),A=r("\n     "),S=l(),w=a("br"),y=l(),B=a("br"),D=l(),V=a("h1"),k=r("Posts"),q=l(),F=a("br"),G=l(),H=a("div");for(let s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){p('[data-svelte="svelte-kowrte"]',document.head).forEach(i),e=o(s),t=c(s,"DIV",{class:!0});var a=n(t);m=c(a,"P",{});var l=n(m);P=h(l,"Research, thoughts, and notes of Jens E. Pedersen."),l.forEach(i),I=o(a),J=c(a,"P",{});var r=n(J);x=c(r,"IFRAME",{src:!0,title:!0,height:!0,width:!0,style:!0}),n(x).forEach(i),A=h(r,"\n     "),r.forEach(i),S=o(a),w=c(a,"BR",{}),y=o(a),B=c(a,"BR",{}),D=o(a),V=c(a,"H1",{class:!0});var f=n(V);k=h(f,"Posts"),f.forEach(i),q=o(a),F=c(a,"BR",{}),G=o(a),H=c(a,"DIV",{class:!0});var g=n(H);for(let s=0;s<N.length;s+=1)N[s].l(g);g.forEach(i),a.forEach(i),this.h()},h(){document.title="J. E. Pedersen",x.src!==(j="https://github.com/sponsors/Jegp/button")&&f(x,"src","https://github.com/sponsors/Jegp/button"),f(x,"title","Sponsor Jegp"),f(x,"height","35"),f(x,"width","116"),d(x,"border","0"),f(V,"class","svelte-m076lg"),f(H,"class","flex-container svelte-m076lg"),f(t,"class","container svelte-m076lg")},m(s,a){g(s,e,a),g(s,t,a),u(t,m),u(m,P),u(t,I),u(t,J),u(J,x),u(J,A),u(t,S),u(t,w),u(t,y),u(t,B),u(t,D),u(t,V),u(V,k),u(t,q),u(t,F),u(t,G),u(t,H);for(let s=0;s<N.length;s+=1)N[s].m(H,null)},p(s,[e]){if(1&e){let t;for(M=s[0],t=0;t<M.length;t+=1){const a=b(s,M,t);N[t]?N[t].p(a,e):(N[t]=R(a),N[t].c(),N[t].m(H,null))}for(;t<N.length;t+=1)N[t].d(1);N.length=M.length}},i:v,o:v,d(s){s&&i(e),s&&i(t),E(N,s)}}}async function J({params:s,query:e}){return this.fetch("index.json").then((s=>s.json())).then((s=>({posts:s})))}function x(s,e,t){let{posts:a}=e;return s.$$set=s=>{"posts"in s&&t(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),e(this,s,x,I,t,{posts:0})}}export{J as preload};