import{_ as t,r as a,a as n,b as c,c as e,d as i,i as r,s,e as u,S as o,f,g as l,h as m,j as p,k as d,m as h,n as v,o as g,p as x,t as b,l as y,q as E,u as j,H as k,v as R,w as I}from"./client.a0fa6905.js";function w(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=c(t);if(a){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return e(this,n)}}function N(t){var a,n,c,e,i=t[0].metadata.caption&&S(t);return{c:function(){a=f("figure"),n=f("img"),e=l(),i&&i.c(),this.h()},l:function(t){a=m(t,"FIGURE",{class:!0});var c=p(a);n=m(c,"IMG",{src:!0,alt:!0,class:!0}),e=d(c),i&&i.l(c),c.forEach(h),this.h()},h:function(){n.src!==(c=t[0].metadata.image)&&v(n,"src",c),v(n,"alt",""),v(n,"class","svelte-gxuntl"),v(a,"class","svelte-gxuntl")},m:function(t,c){g(t,a,c),x(a,n),x(a,e),i&&i.m(a,null)},p:function(t,e){1&e&&n.src!==(c=t[0].metadata.image)&&v(n,"src",c),t[0].metadata.caption?i?i.p(t,e):((i=S(t)).c(),i.m(a,null)):i&&(i.d(1),i=null)},d:function(t){t&&h(a),i&&i.d()}}}function S(t){var a,n,c=t[0].metadata.captionlabel&&A(t);function e(t,a){return t[0].metadata.captionlink?P:G}var i=e(t),r=i(t);return{c:function(){a=f("figcaption"),c&&c.c(),n=l(),r.c(),this.h()},l:function(t){a=m(t,"FIGCAPTION",{class:!0});var e=p(a);c&&c.l(e),n=d(e),r.l(e),e.forEach(h),this.h()},h:function(){v(a,"class","svelte-gxuntl")},m:function(t,e){g(t,a,e),c&&c.m(a,null),x(a,n),r.m(a,null)},p:function(t,s){t[0].metadata.captionlabel?c?c.p(t,s):((c=A(t)).c(),c.m(a,n)):c&&(c.d(1),c=null),i===(i=e(t))&&r?r.p(t,s):(r.d(1),(r=i(t))&&(r.c(),r.m(a,null)))},d:function(t){t&&h(a),c&&c.d(),r.d()}}}function A(t){var a,n=t[0].metadata.captionlabel+"";return{c:function(){a=b(n)},l:function(t){a=y(t,n)},m:function(t,n){g(t,a,n)},p:function(t,c){1&c&&n!==(n=t[0].metadata.captionlabel+"")&&E(a,n)},d:function(t){t&&h(a)}}}function G(t){var a,n=t[0].metadata.caption+"";return{c:function(){a=b(n)},l:function(t){a=y(t,n)},m:function(t,n){g(t,a,n)},p:function(t,c){1&c&&n!==(n=t[0].metadata.caption+"")&&E(a,n)},d:function(t){t&&h(a)}}}function P(t){var a,n,c,e=t[0].metadata.caption+"";return{c:function(){a=f("a"),n=b(e),this.h()},l:function(t){a=m(t,"A",{href:!0});var c=p(a);n=y(c,e),c.forEach(h),this.h()},h:function(){v(a,"href",c=t[0].metadata.captionlink)},m:function(t,c){g(t,a,c),x(a,n)},p:function(t,i){1&i&&e!==(e=t[0].metadata.caption+"")&&E(n,e),1&i&&c!==(c=t[0].metadata.captionlink)&&v(a,"href",c)},d:function(t){t&&h(a)}}}function q(t){var a,n,c,e,i,r,s,u,o,w,S,A=t[0].metadata.title+"",G=t[0].metadata.pubdate+"",P=t[0].html+"";document.title=a=t[0].metadata.title;var q=t[0].metadata.image&&N(t);return{c:function(){n=l(),q&&q.c(),c=l(),e=f("section"),i=f("h1"),r=b(A),s=l(),u=f("span"),o=b(G),w=l(),this.h()},l:function(t){j('[data-svelte="svelte-1f4jeuj"]',document.head).forEach(h),n=d(t),q&&q.l(t),c=d(t),e=m(t,"SECTION",{class:!0});var a=p(e);i=m(a,"H1",{});var f=p(i);r=y(f,A),f.forEach(h),s=d(a),u=m(a,"SPAN",{class:!0});var l=p(u);o=y(l,G),l.forEach(h),w=d(a),a.forEach(h),this.h()},h:function(){v(u,"class","date"),S=new k(null),v(e,"class","content svelte-gxuntl")},m:function(t,a){g(t,n,a),q&&q.m(t,a),g(t,c,a),g(t,e,a),x(e,i),x(i,r),x(e,s),x(e,u),x(u,o),x(e,w),S.m(P,e)},p:function(t,n){var e=R(n,1)[0];1&e&&a!==(a=t[0].metadata.title)&&(document.title=a),t[0].metadata.image?q?q.p(t,e):((q=N(t)).c(),q.m(c.parentNode,c)):q&&(q.d(1),q=null),1&e&&A!==(A=t[0].metadata.title+"")&&E(r,A),1&e&&G!==(G=t[0].metadata.pubdate+"")&&E(o,G),1&e&&P!==(P=t[0].html+"")&&S.p(P)},i:I,o:I,d:function(t){t&&h(n),q&&q.d(t),t&&h(c),t&&h(e)}}}function C(t){return D.apply(this,arguments)}function D(){return(D=t(a.mark((function t(n){var c,e,i;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.params,n.query,t.next=3,this.fetch("".concat(c.slug,".json"));case 3:return e=t.sent,t.next=6,e.json();case 6:if(i=t.sent,200!==e.status){t.next=11;break}return t.abrupt("return",{post:i});case 11:this.error(e.status,i.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function F(t,a,n){var c=a.post;return t.$set=function(t){"post"in t&&n(0,c=t.post)},[c]}var H=function(t){n(c,o);var a=w(c);function c(t){var n;return i(this,c),n=a.call(this),r(u(n),t,F,q,s,{post:0}),n}return c}();export default H;export{C as preload};
