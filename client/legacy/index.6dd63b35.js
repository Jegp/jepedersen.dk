import{r as t,_ as s,a as n,b as e,c as r,i as c,d as a,S as o,s as u,e as l,f as i,t as f,g as h,h as p,j as v,k as b,l as d,m as g,n as m,o as x,p as E,q as w,u as y,v as R,w as P,x as J}from"./client.34151ac0.js";import{_ as j}from"./asyncToGenerator.5229e80b.js";function A(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=n(t);if(s){var a=n(this).constructor;r=Reflect.construct(c,arguments,a)}else r=c.apply(this,arguments);return e(this,r)}}function B(t,s,n){var e=t.slice();return e[1]=s[n],e}function I(t){var s,n,e,r;return{c:function(){s=l("figure"),n=l("span"),e=l("img"),this.h()},l:function(t){s=h(t,"FIGURE",{class:!0});var r=p(s);n=h(r,"SPAN",{class:!0});var c=p(n);e=h(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(d),r.forEach(d),this.h()},h:function(){e.src!==(r=t[1].image)&&g(e,"src",r),g(e,"alt",""),g(e,"class","svelte-16wcxbb"),g(n,"class","svelte-16wcxbb"),g(s,"class","svelte-16wcxbb")},m:function(t,r){m(t,s,r),x(s,n),x(n,e)},p:function(t,s){1&s&&e.src!==(r=t[1].image)&&g(e,"src",r)},d:function(t){t&&d(s)}}}function S(t){var s,n,e,r,c,a,o,u,w,y=t[1].title+"",R=t[1].pubdate+"",P=t[1].image&&I(t);return{c:function(){s=l("li"),n=l("a"),P&&P.c(),e=i(),r=f(y),a=i(),o=l("span"),u=f(R),w=i(),this.h()},l:function(t){s=h(t,"LI",{class:!0});var c=p(s);n=h(c,"A",{rel:!0,href:!0,class:!0});var l=p(n);P&&P.l(l),e=v(l),r=b(l,y),l.forEach(d),a=v(c),o=h(c,"SPAN",{class:!0});var i=p(o);u=b(i,R),i.forEach(d),w=v(c),c.forEach(d),this.h()},h:function(){g(n,"rel","prefetch"),g(n,"href",c=t[1].slug),g(n,"class","svelte-16wcxbb"),g(o,"class","date svelte-16wcxbb"),g(s,"class","svelte-16wcxbb")},m:function(t,c){m(t,s,c),x(s,n),P&&P.m(n,null),x(n,e),x(n,r),x(s,a),x(s,o),x(o,u),x(s,w)},p:function(t,s){t[1].image?P?P.p(t,s):((P=I(t)).c(),P.m(n,e)):P&&(P.d(1),P=null),1&s&&y!==(y=t[1].title+"")&&E(r,y),1&s&&c!==(c=t[1].slug)&&g(n,"href",c),1&s&&R!==(R=t[1].pubdate+"")&&E(u,R)},d:function(t){t&&d(s),P&&P.d()}}}function q(t){for(var s,n,e,r,c,a,o,u,E,j,A,I,q,G,k,F,L=t[0],M=[],N=0;N<L.length;N+=1)M[N]=S(B(t,L,N));return{c:function(){s=i(),n=l("p"),e=f("Research, thoughts and notes of Jens E. Pedersen."),r=i(),c=l("p"),a=l("iframe"),o=f("\n "),u=i(),E=l("br"),j=i(),A=l("br"),I=i(),q=l("h2"),G=f("Posts"),k=i(),F=l("ul");for(var t=0;t<M.length;t+=1)M[t].c();this.h()},l:function(t){w('[data-svelte="svelte-oqg1x5"]',document.head).forEach(d),s=v(t),n=h(t,"P",{class:!0});var l=p(n);e=b(l,"Research, thoughts and notes of Jens E. Pedersen."),l.forEach(d),r=v(t),c=h(t,"P",{class:!0});var i=p(c);a=h(i,"IFRAME",{src:!0,title:!0,height:!0,width:!0,style:!0}),p(a).forEach(d),o=b(i,"\n "),i.forEach(d),u=v(t),E=h(t,"BR",{}),j=v(t),A=h(t,"BR",{}),I=v(t),q=h(t,"H2",{class:!0});var f=p(q);G=b(f,"Posts"),f.forEach(d),k=v(t),F=h(t,"UL",{class:!0});for(var g=p(F),m=0;m<M.length;m+=1)M[m].l(g);g.forEach(d),this.h()},h:function(){document.title="J. E. Pedersen",g(n,"class","svelte-16wcxbb"),a.src!=="https://github.com/sponsors/Jegp/button"&&g(a,"src","https://github.com/sponsors/Jegp/button"),g(a,"title","Sponsor Jegp"),g(a,"height","35"),g(a,"width","116"),y(a,"border","0"),g(c,"class","svelte-16wcxbb"),g(q,"class","svelte-16wcxbb"),g(F,"class","svelte-16wcxbb")},m:function(t,l){m(t,s,l),m(t,n,l),x(n,e),m(t,r,l),m(t,c,l),x(c,a),x(c,o),m(t,u,l),m(t,E,l),m(t,j,l),m(t,A,l),m(t,I,l),m(t,q,l),x(q,G),m(t,k,l),m(t,F,l);for(var i=0;i<M.length;i+=1)M[i].m(F,null)},p:function(t,s){var n=R(s,1)[0];if(1&n){var e;for(L=t[0],e=0;e<L.length;e+=1){var r=B(t,L,e);M[e]?M[e].p(r,n):(M[e]=S(r),M[e].c(),M[e].m(F,null))}for(;e<M.length;e+=1)M[e].d(1);M.length=L.length}},i:P,o:P,d:function(t){t&&d(s),t&&d(n),t&&d(r),t&&d(c),t&&d(u),t&&d(E),t&&d(j),t&&d(A),t&&d(I),t&&d(q),t&&d(k),t&&d(F),J(M,t)}}}function G(t){return k.apply(this,arguments)}function k(){return(k=j(t.mark((function s(n){return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("index.json").then((function(t){return t.json()})).then((function(t){return{posts:t}})));case 2:case"end":return t.stop()}}),s,this)})))).apply(this,arguments)}function F(t,s,n){var e=s.posts;return t.$$set=function(t){"posts"in t&&n(0,e=t.posts)},[e]}var L=function(t){s(e,o);var n=A(e);function e(t){var s;return r(this,e),s=n.call(this),c(a(s),t,F,q,u,{posts:0}),s}return e}();export default L;export{G as preload};
