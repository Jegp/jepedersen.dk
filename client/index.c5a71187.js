import{S as s,i as t,s as e,e as a,a as l,t as r,c,b as n,d as h,f as o,g as i,h as f,j as u,k as m,l as p,q as g,m as d,n as b,o as v}from"./client.52f83b06.js";function E(s,t,e){const a=s.slice();return a[1]=t[e],a}function x(s){let t,e,l,r;return{c(){t=a("figure"),e=a("span"),l=a("img"),this.h()},l(s){t=c(s,"FIGURE",{class:!0});var a=n(t);e=c(a,"SPAN",{class:!0});var r=n(e);l=c(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(i),a.forEach(i),this.h()},h(){l.src!==(r=s[1].image)&&f(l,"src",r),f(l,"alt",""),f(l,"class","svelte-9mbk9x"),f(e,"class","svelte-9mbk9x"),f(t,"class","svelte-9mbk9x")},m(s,a){u(s,t,a),m(t,e),m(e,l)},p(s,t){1&t&&l.src!==(r=s[1].image)&&f(l,"src",r)},d(s){s&&i(t)}}}function k(s){let t,e,g,d,b,v,E,k,P,R=s[1].title+"",J=s[1].pubdate+"",j=s[1].image&&x(s);return{c(){t=a("li"),e=a("a"),j&&j.c(),g=l(),d=r(R),v=l(),E=a("span"),k=r(J),P=l(),this.h()},l(s){t=c(s,"LI",{class:!0});var a=n(t);e=c(a,"A",{rel:!0,href:!0,class:!0});var l=n(e);j&&j.l(l),g=h(l),d=o(l,R),l.forEach(i),v=h(a),E=c(a,"SPAN",{class:!0});var r=n(E);k=o(r,J),r.forEach(i),P=h(a),a.forEach(i),this.h()},h(){f(e,"rel","prefetch"),f(e,"href",b=s[1].slug),f(e,"class","svelte-9mbk9x"),f(E,"class","date svelte-9mbk9x"),f(t,"class","svelte-9mbk9x")},m(s,a){u(s,t,a),m(t,e),j&&j.m(e,null),m(e,g),m(e,d),m(t,v),m(t,E),m(E,k),m(t,P)},p(s,t){s[1].image?j?j.p(s,t):(j=x(s),j.c(),j.m(e,g)):j&&(j.d(1),j=null),1&t&&R!==(R=s[1].title+"")&&p(d,R),1&t&&b!==(b=s[1].slug)&&f(e,"href",b),1&t&&J!==(J=s[1].pubdate+"")&&p(k,J)},d(s){s&&i(t),j&&j.d()}}}function P(s){let t,e,p,x,P,R,J,j,A,I,S,q,y,B,w,F,G,L,M,N=s[0],U=[];for(let t=0;t<N.length;t+=1)U[t]=k(E(s,N,t));return{c(){t=l(),e=a("p"),p=r("Research, thoughts and notes of Jens E. Pedersen."),x=l(),P=a("p"),R=a("iframe"),j=r("\n "),A=l(),I=a("br"),S=l(),q=a("br"),y=l(),B=a("h2"),w=r("Posts"),F=l(),G=a("br"),L=l(),M=a("ul");for(let s=0;s<U.length;s+=1)U[s].c();this.h()},l(s){g('[data-svelte="svelte-oqg1x5"]',document.head).forEach(i),t=h(s),e=c(s,"P",{class:!0});var a=n(e);p=o(a,"Research, thoughts and notes of Jens E. Pedersen."),a.forEach(i),x=h(s),P=c(s,"P",{class:!0});var l=n(P);R=c(l,"IFRAME",{src:!0,title:!0,height:!0,width:!0,style:!0}),n(R).forEach(i),j=o(l,"\n "),l.forEach(i),A=h(s),I=c(s,"BR",{}),S=h(s),q=c(s,"BR",{}),y=h(s),B=c(s,"H2",{class:!0});var r=n(B);w=o(r,"Posts"),r.forEach(i),F=h(s),G=c(s,"BR",{}),L=h(s),M=c(s,"UL",{class:!0});var f=n(M);for(let s=0;s<U.length;s+=1)U[s].l(f);f.forEach(i),this.h()},h(){document.title="J. E. Pedersen",f(e,"class","svelte-9mbk9x"),R.src!==(J="https://github.com/sponsors/Jegp/button")&&f(R,"src","https://github.com/sponsors/Jegp/button"),f(R,"title","Sponsor Jegp"),f(R,"height","35"),f(R,"width","116"),d(R,"border","0"),f(P,"class","svelte-9mbk9x"),f(B,"class","svelte-9mbk9x"),f(M,"class","svelte-9mbk9x")},m(s,a){u(s,t,a),u(s,e,a),m(e,p),u(s,x,a),u(s,P,a),m(P,R),m(P,j),u(s,A,a),u(s,I,a),u(s,S,a),u(s,q,a),u(s,y,a),u(s,B,a),m(B,w),u(s,F,a),u(s,G,a),u(s,L,a),u(s,M,a);for(let s=0;s<U.length;s+=1)U[s].m(M,null)},p(s,[t]){if(1&t){let e;for(N=s[0],e=0;e<N.length;e+=1){const a=E(s,N,e);U[e]?U[e].p(a,t):(U[e]=k(a),U[e].c(),U[e].m(M,null))}for(;e<U.length;e+=1)U[e].d(1);U.length=N.length}},i:b,o:b,d(s){s&&i(t),s&&i(e),s&&i(x),s&&i(P),s&&i(A),s&&i(I),s&&i(S),s&&i(q),s&&i(y),s&&i(B),s&&i(F),s&&i(G),s&&i(L),s&&i(M),v(U,s)}}}async function R({params:s,query:t}){return this.fetch("index.json").then((s=>s.json())).then((s=>({posts:s})))}function J(s,t,e){let{posts:a}=t;return s.$$set=s=>{"posts"in s&&e(0,a=s.posts)},[a]}export default class extends s{constructor(s){super(),t(this,s,J,P,e,{posts:0})}}export{R as preload};
