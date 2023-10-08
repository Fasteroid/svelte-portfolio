import{s as j,n as T,c as k}from"../chunks/scheduler.2cdf953d.js";import{S as w,i as z,g as c,s as $,m as M,x as N,h as d,y as D,f as s,c as I,j as u,n as R,k as b,z as n,a as L,o as V}from"../chunks/index.65d7753f.js";import{b as Y}from"../chunks/paths.9c1f8d51.js";import{p as q}from"../chunks/stores.53797e5d.js";function A(_){let e,v=`.error-centerer {
  display: flex;
  flex-flow: column;
}
.error-centerer img {
  margin: auto;
  width: 50%;
}`,r,a,h,o,m,p,f=_[0].status+"",g,y,l,E=`<img src="${Y}/assets/404.gif" alt="bikini atoll explosion"/>`;return{c(){e=c("style"),e.textContent=v,r=$(),a=c("body"),h=c("div"),o=c("section"),m=c("hgroup"),p=c("h1"),g=M(f),y=$(),l=c("div"),l.innerHTML=E,this.h()},l(t){const i=N("svelte-13fbs22",document.head);e=d(i,"STYLE",{lang:!0,"data-svelte-h":!0}),D(e)!=="svelte-89vcyo"&&(e.textContent=v),i.forEach(s),r=I(t),a=d(t,"BODY",{});var C=u(a);h=d(C,"DIV",{class:!0});var H=u(h);o=d(H,"SECTION",{});var x=u(o);m=d(x,"HGROUP",{});var O=u(m);p=d(O,"H1",{});var S=u(p);g=R(S,f),S.forEach(s),O.forEach(s),y=I(x),l=d(x,"DIV",{class:!0,"data-svelte-h":!0}),D(l)!=="svelte-hzrjp"&&(l.innerHTML=E),x.forEach(s),H.forEach(s),C.forEach(s),this.h()},h(){document.title="OH NAR",b(e,"lang","scss"),b(l,"class","error-centerer"),b(h,"class","margins")},m(t,i){n(document.head,e),L(t,r,i),L(t,a,i),n(a,h),n(h,o),n(o,m),n(m,p),n(p,g),n(o,y),n(o,l)},p(t,[i]){i&1&&f!==(f=t[0].status+"")&&V(g,f)},i:T,o:T,d(t){t&&(s(r),s(a)),s(e)}}}function B(_,e,v){let r;return k(_,q,a=>v(0,r=a)),[r]}class J extends w{constructor(e){super(),z(this,e,B,A,j,{})}}export{J as component};
