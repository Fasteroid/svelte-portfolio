import{s as j,n as $,c as k}from"../chunks/scheduler.2cdf953d.js";import{S as w,i as z,g as c,s as D,m as B,x as M,h as d,y as I,f as s,c as L,j as u,n as N,k as y,z as n,a as O,o as V}from"../chunks/index.65d7753f.js";import{b as Y}from"../chunks/paths.8c21a0fd.js";import{p as q}from"../chunks/stores.4682d875.js";function A(_){let e,v=`.error-centerer {
  display: flex;
  flex-flow: column;
}
.error-centerer img {
  margin: auto;
  width: 50%;
}`,r,a,h,o,m,f,p=_[0].status+"",b,g,l,E=`<img src="${Y}/assets/404.gif" alt="bikini atoll explosion"/>`;return{c(){e=c("style"),e.textContent=v,r=D(),a=c("body"),h=c("div"),o=c("section"),m=c("h1"),f=c("b"),b=B(p),g=D(),l=c("div"),l.innerHTML=E,this.h()},l(t){const i=M("svelte-13fbs22",document.head);e=d(i,"STYLE",{lang:!0,"data-svelte-h":!0}),I(e)!=="svelte-89vcyo"&&(e.textContent=v),i.forEach(s),r=L(t),a=d(t,"BODY",{});var C=u(a);h=d(C,"DIV",{class:!0});var H=u(h);o=d(H,"SECTION",{});var x=u(o);m=d(x,"H1",{});var S=u(m);f=d(S,"B",{});var T=u(f);b=N(T,p),T.forEach(s),S.forEach(s),g=L(x),l=d(x,"DIV",{class:!0,"data-svelte-h":!0}),I(l)!=="svelte-hzrjp"&&(l.innerHTML=E),x.forEach(s),H.forEach(s),C.forEach(s),this.h()},h(){document.title="OH NAR",y(e,"lang","scss"),y(l,"class","error-centerer"),y(h,"class","margins")},m(t,i){n(document.head,e),O(t,r,i),O(t,a,i),n(a,h),n(h,o),n(o,m),n(m,f),n(f,b),n(o,g),n(o,l)},p(t,[i]){i&1&&p!==(p=t[0].status+"")&&V(b,p)},i:$,o:$,d(t){t&&(s(r),s(a)),s(e)}}}function R(_,e,v){let r;return k(_,q,a=>v(0,r=a)),[r]}class P extends w{constructor(e){super(),z(this,e,R,A,j,{})}}export{P as component};
