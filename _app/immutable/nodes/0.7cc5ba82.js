import{_ as wn}from"../chunks/_layout.24c3be41.js";import{s as H,n as L,c as O,d as J,u as K,g as Q,e as U}from"../chunks/scheduler.2cdf953d.js";import{S as F,i as G,g as v,s as k,x as Y,h as w,y as E,f as g,c as z,j as _,k as b,z as u,a as C,A as q,m as B,n as W,B as I,r as X,u as nn,v as tn,d as S,t as A,w as en}from"../chunks/index.65d7753f.js";import{e as D,p as P}from"../chunks/loader.82554536.js";import{b as V}from"../chunks/paths.9c1f8d51.js";import{p as Z}from"../chunks/stores.53797e5d.js";function N(s,n,r){const o=s.slice();return o[3]=n[r],o}function j(s,n,r){const o=s.slice();return o[6]=n[r],o}function an(s){let n,r,o=D(s[3].getChildren()),a=[];for(let t=0;t<o.length;t+=1)a[t]=M(j(s,o,t));return{c(){n=v("div"),r=v("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){n=w(t,"DIV",{class:!0});var l=_(n);r=w(l,"DIV",{class:!0});var e=_(r);for(let p=0;p<a.length;p+=1)a[p].l(e);e.forEach(g),l.forEach(g),this.h()},h(){b(r,"class","dropdown-onload-wrapper"),b(n,"class","dropdown-content")},m(t,l){C(t,n,l),u(n,r);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(r,null)},p(t,l){if(l&1){o=D(t[3].getChildren());let e;for(e=0;e<o.length;e+=1){const p=j(t,o,e);a[e]?a[e].p(p,l):(a[e]=M(p),a[e].c(),a[e].m(r,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=o.length}},d(t){t&&g(n),q(a,t)}}}function M(s){let n,r,o=s[6].pageData.title+"",a,t;return{c(){n=v("a"),r=v("span"),a=B(o),t=k(),this.h()},l(l){n=w(l,"A",{href:!0});var e=_(n);r=w(e,"SPAN",{});var p=_(r);a=W(p,o),p.forEach(g),t=z(e),e.forEach(g),this.h()},h(){b(n,"href",s[6].webPath),I(n,"active",s[0](`${s[6].webPath}`))},m(l,e){C(l,n,e),u(n,r),u(r,a),u(n,t)},p:L,d(l){l&&g(n)}}}function R(s){let n,r,o,a=s[3].pageData.title+"",t,l,e=s[3].getChildren(),p,d=e&&an(s);return{c(){n=v("div"),r=v("div"),o=v("a"),t=B(a),l=k(),d&&d.c(),p=k(),this.h()},l(i){n=w(i,"DIV",{class:!0});var c=_(n);r=w(c,"DIV",{});var x=_(r);o=w(x,"A",{href:!0});var f=_(o);t=W(f,a),f.forEach(g),x.forEach(g),l=z(c),d&&d.l(c),p=z(c),c.forEach(g),this.h()},h(){b(o,"href",s[3].webPath),I(r,"dropdown-head",!0),I(r,"active",s[0](s[3].webPath)),b(n,"class","dropdown")},m(i,c){C(i,n,c),u(n,r),u(r,o),u(o,t),u(n,l),d&&d.m(n,null),u(n,p)},p(i,c){e&&d.p(i,c)},d(i){i&&g(n),d&&d.d()}}}function on(s){let n,r=`@import url("https://fonts.googleapis.com/css2?family=Recursive:wght@600&display=swap");
@keyframes neon-cyan-flickering {
  0%, 60%, 62%, 98%, 100% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.6666666667)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.6666666667)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.6666666667)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.6666666667)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.6666666667));
  }
  61%, 99% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.5333333333)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.5333333333)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.5333333333)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.5333333333)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.5333333333));
  }
}
@font-face {
  font-family: minecraft;
  src: url("../../assets/fonts/minecraft.woff") format("woff");
}
.minecraftsplash {
  color: #ff0;
  position: absolute;
  z-index: 1;
  left: 100%;
  font-family: "minecraft", "fixedsys";
  font-weight: normal;
  font-style: normal;
  font-size: 11pt;
  text-align: center;
  white-space: pre;
  -webkit-font-smoothing: none;
  animation: minecraftwow 0.5s infinite;
}

@keyframes minecraftwow {
  0% {
    transform: translate(calc(-60% + 0.6px), calc(60% - 0.6px)) scale(0.95) rotate(-15deg);
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
  50% {
    transform: translate(calc(-60% + 0.6px), calc(60% - 0.6px)) scale(1) rotate(-15deg);
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
  }
  100% {
    transform: translate(calc(-60% + 0.6px), calc(60% - 0.6px)) scale(0.95) rotate(-15deg);
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
}
nav {
  display: flex;
  background: #000000;
  font-family: "Recursive", sans-serif;
  font-style: italic;
  position: sticky;
  top: 0;
  justify-content: space-between;
  z-index: 999; /* thank god this actually works for once */
  /* This is literal magic, it cancels out the transitions that (incorrectly) trigger on page load. */
  /* Glow animation stuff */
}
nav .pages {
  z-index: 0; /* fixes the minecraft splash */
}
nav .home {
  z-index: 1;
}
nav .home .home-wrapper {
  width: max-content;
  margin: auto;
  padding: 15px;
  font-size: 16pt;
  color: #ffffff;
  background: #000000;
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
}
nav .home .home-wrapper * {
  grid-row-start: 1;
  grid-column-start: 1;
}
nav .home .home-wrapper span {
  animation: neon-cyan-flickering 1s ease-in-out alternate infinite;
}
nav .dropdown {
  position: relative;
  cursor: pointer;
  background: #000000;
}
@keyframes stopTransitionOnLoad {
  from {
    transform: translate(0, -100%);
  }
  to {
    transform: translate(0, 0);
  }
}
nav .dropdown-onload-wrapper {
  animation: stopTransitionOnLoad 0.3s;
}
nav .dropdown-content, nav .dropdown-onload-wrapper {
  z-index: 0;
  display: block;
  left: 0;
  top: 90%;
  width: 100%;
}
nav .dropdown-content {
  box-shadow: 0px 0px 0px black;
  position: absolute;
  transform: translate(0, -100%);
  transition: 0.3s;
}
nav .dropdown-head {
  z-index: 1;
  display: flex;
  background: #000000;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 90%;
  padding: 0 15px;
}
nav .pages > a {
  padding: 0 15px;
}
nav .dropdown-content a {
  background: #000000;
  padding: 15px;
  filter: none;
  mix-blend-mode: screen; /* Needed so the glows from the icons merge additively */
}
nav .dropdown-content a span {
  filter: none;
}
nav .dropdown-content .icon {
  mix-blend-mode: screen; /* Needed so the glows from the icons merge additively */
}
nav .dropdown,
nav .dropdown-content a,
nav .pages > a {
  font-size: 14pt;
}
nav .dropdown,
nav .dropdown-content a,
nav .dropdown-head a,
nav .pages > a {
  display: flex;
  align-items: center;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
}
nav .dropdown-content a {
  font-size: 12pt;
}
nav .active {
  background: rgb(34, 34, 34) !important;
}
nav .icon {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0px 10px 0px 0px;
  display: inline;
  max-height: 24px;
}
nav .dropdown > a {
  text-decoration: none;
}
nav .dropdown:hover .dropdown-content {
  transform: translate(0, 5px) translateZ(-1px);
  box-shadow: 0px 0px 5px black;
}
nav .dropdown:hover > a > span,
nav .dropdown:hover > .dropdown-head > a {
  filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.6666666667)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.6666666667)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.6666666667)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.6666666667)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.6666666667));
}
nav .dropdown a:hover * { /* these looked obnoxious with the full glow */
  filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.5333333333)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.5333333333)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.5333333333)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.5333333333)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.5333333333));
}
nav a span,
nav .dropdown > a > span,
nav .dropdown > .dropdown-head > a,
nav .dropdown a * {
  mix-blend-mode: screen;
  transition: translate, filter 0.1s cubic-bezier(0.69, 0.02, 0.95, 0.6);
  color: #ffffff;
}
nav a:hover span,
nav .dropdown:hover > a > span,
nav .dropdown:hover > .dropdown-head > a,
nav .dropdown a:hover * {
  mix-blend-mode: screen;
  transition: translate, filter 0.2s cubic-bezier(0.05, 0.4, 0.22, 1) !important;
  color: #ffffff;
}
@media screen and (orientation: portrait) {
  nav {
    display: flex;
    flex-flow: column;
  }
  nav .home {
    background-color: #000000;
    text-align: center;
    width: calc(100% - 30px);
  }
  nav .pages {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    width: 100%;
  }
  nav .dropdown-head {
    width: 100%;
    padding: 15px;
    /* 
        in my testing, these looked good when scaled relative to view height on mobile
        we can't let them grow too much though, or they spill out of their containers!
    */
    font-size: min(max(1.3vh, 14pt), 24pt);
  }
  nav .dropdown {
    /* note: must be changed if I add more dropdowns! */
    width: 25%;
  }
  nav .dropdown,
  nav .dropdown-content a,
  nav .pages > a {
    font-size: min(max(1.2vh, 12pt), 24pt);
  }
}
@media screen and (orientation: landscape) {
  nav .pages {
    margin-left: auto;
    margin-right: 0px;
    display: flex;
    align-items: center;
  }
  nav .dropdown-head {
    width: 80pt;
  }
}`,o,a,t,l='<div class="home-wrapper"><span>FAST&#39;S CODE CREATIONS</span> <div class="minecraftsplash">Now with Svelte!</div></div>',e,p,d,i=`<div class="dropdown-head"><span>Links</span></div> <div class="dropdown-content"><div class="dropdown-onload-wrapper"><a href="https://discord.com/users/276913653230469122/" target="_blank"><img src="${V}/assets/icons/discord.svg" class="icon" alt=""/> <span>Discord</span></a> <a href="https://github.com/Fasteroid/" target="_blank"><img src="${V}/assets/icons/github.svg" class="icon" alt=""/> <span>Github</span></a></div></div>`,c,x=D(P.getChildren()),f=[];for(let m=0;m<x.length;m+=1)f[m]=R(N(s,x,m));return{c(){n=v("style"),n.textContent=r,o=k(),a=v("nav"),t=v("div"),t.innerHTML=l,e=k(),p=v("div"),d=v("div"),d.innerHTML=i,c=k();for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){const y=Y("svelte-hld1ku",document.head);n=w(y,"STYLE",{lang:!0,"data-svelte-h":!0}),E(n)!=="svelte-uk9isr"&&(n.textContent=r),y.forEach(g),o=z(m),a=w(m,"NAV",{});var h=_(a);t=w(h,"DIV",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1s6thel"&&(t.innerHTML=l),e=z(h),p=w(h,"DIV",{class:!0});var $=_(p);d=w($,"DIV",{class:!0,"data-svelte-h":!0}),E(d)!=="svelte-1tp0efu"&&(d.innerHTML=i),c=z($);for(let T=0;T<f.length;T+=1)f[T].l($);$.forEach(g),h.forEach(g),this.h()},h(){b(n,"lang","scss"),b(t,"class","home"),b(d,"class","dropdown"),b(p,"class","pages")},m(m,y){u(document.head,n),C(m,o,y),C(m,a,y),u(a,t),u(a,e),u(a,p),u(p,d),u(p,c);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(p,null)},p(m,[y]){if(y&1){x=D(P.getChildren());let h;for(h=0;h<x.length;h+=1){const $=N(m,x,h);f[h]?f[h].p($,y):(f[h]=R($),f[h].c(),f[h].m(p,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=x.length}},i:L,o:L,d(m){m&&(g(o),g(a)),g(n),q(f,m)}}}function rn(s,n,r){let o;O(s,Z,l=>r(1,o=l));const a=o.url.pathname;function t(l){return a.startsWith(l)}return[t]}class sn extends F{constructor(n){super(),G(this,n,rn,on,H,{})}}function ln(s){let n,r=`@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
body, html {
  margin: 0;
  padding: 0;
}

body {
  background-color: #2f3234;
  color: #eeeeee;
  font-family: "Roboto Mono", monospace;
  font-size: 11pt;
  line-height: 1.25;
  word-spacing: -0.75px;
  line-height: 140%;
}

section, hgroup {
  background-color: rgba(255, 255, 255, 0.0823529412);
  padding: 15px;
  text-align: justify;
  display: block;
}

hgroup {
  text-align: center;
  margin-bottom: 15px;
}
hgroup * {
  margin: 0;
}
hgroup h1 {
  font-size: 24px;
}
hgroup h2 {
  font-size: 16pt;
}
hgroup h3 {
  font-weight: normal;
  font-size: 12pt;
}

img {
  background-color: rgba(255, 255, 255, 0.0823529412);
  padding: 15px 15px;
  margin: 0 15px 15px 15px;
  max-width: 100%;
  box-sizing: border-box;
}

div.p {
  margin: 0 15px 15px 15px;
  width: auto;
}

.margins {
  margin: auto;
  max-width: min(80vw, 1920px);
  padding: 10px;
}

.dubsp {
  white-space: pre;
}

li::marker {
  font-size: 12pt;
}

ul {
  margin: 0px;
}

a {
  color: #b1b1ff;
}
a:visited {
  color: #eca1ff;
}

::selection {
  background: rgba(112, 176, 255, 0.2666666667);
}

span.emdash {
  display: inline-block;
  text-align: center;
  width: 13pt;
  transform: scale(1.7, 1);
}`,o,a,t,l,e;document.title=o=`
        `+s[0].titlePath.join(" | ")+`
    `,t=new sn({});const p=s[3].default,d=J(p,s,s[2],null);return{c(){n=v("style"),n.textContent=r,a=k(),X(t.$$.fragment),l=k(),d&&d.c(),this.h()},l(i){const c=Y("svelte-10yebmf",document.head);n=w(c,"STYLE",{lang:!0,"data-svelte-h":!0}),E(n)!=="svelte-16evmz4"&&(n.textContent=r),c.forEach(g),a=z(i),nn(t.$$.fragment,i),l=z(i),d&&d.l(i),this.h()},h(){b(n,"lang","scss")},m(i,c){u(document.head,n),C(i,a,c),tn(t,i,c),C(i,l,c),d&&d.m(i,c),e=!0},p(i,[c]){(!e||c&1)&&o!==(o=`
        `+i[0].titlePath.join(" | ")+`
    `)&&(document.title=o),d&&d.p&&(!e||c&4)&&K(d,p,i,i[2],e?U(p,i[2],c,null):Q(i[2]),null)},i(i){e||(S(t.$$.fragment,i),S(d,i),e=!0)},o(i){A(t.$$.fragment,i),A(d,i),e=!1},d(i){i&&(g(a),g(l)),g(n),en(t,i),d&&d.d(i)}}}function dn(s,n,r){let o,a;O(s,Z,e=>r(1,a=e));let{$$slots:t={},$$scope:l}=n;return s.$$set=e=>{"$$scope"in e&&r(2,l=e.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&r(0,o=a.data)},[o,a,l,t]}class mn extends F{constructor(n){super(),G(this,n,dn,ln,H,{})}}export{mn as component,wn as universal};
