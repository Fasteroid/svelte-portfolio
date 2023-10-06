import{_ as bn}from"../chunks/_layout.24c3be41.js";import{s as O,n as D,c as q,d as Z,u as J,g as K,e as Q}from"../chunks/scheduler.2cdf953d.js";import{S as F,i as G,g as v,s as k,x as Y,h as w,y as T,f as c,c as $,j as x,k as b,z as u,a as _,A as B,B as M,m as S,n as I,r as U,u as X,v as nn,d as N,t as V,w as en}from"../chunks/index.65d7753f.js";import{e as A}from"../chunks/loader.7007bae2.js";import{b as C}from"../chunks/paths.328adb05.js";import{p as W}from"../chunks/stores.2645bfce.js";function j(i,n,o){const r=i.slice();return r[4]=n[o],r}function P(i,n,o){const r=i.slice();return r[7]=n[o],r}function tn(i){let n,o=i[4].title+"",r;return{c(){n=v("span"),r=S(o)},l(e){n=w(e,"SPAN",{});var t=x(n);r=I(t,o),t.forEach(c)},m(e,t){_(e,n,t),u(n,r)},p:D,d(e){e&&c(n)}}}function an(i){let n,o=i[4].title+"",r;return{c(){n=v("a"),r=S(o),this.h()},l(e){n=w(e,"A",{href:!0});var t=x(n);r=I(t,o),t.forEach(c),this.h()},h(){b(n,"href",C+"/"+i[4].index)},m(e,t){_(e,n,t),u(n,r)},p:D,d(e){e&&c(n)}}}function on(i){let n,o,r=A(i[4].pages),e=[];for(let t=0;t<r.length;t+=1)e[t]=R(P(i,r,t));return{c(){n=v("div"),o=v("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){n=w(t,"DIV",{class:!0});var p=x(n);o=w(p,"DIV",{class:!0});var a=x(o);for(let l=0;l<e.length;l+=1)e[l].l(a);a.forEach(c),p.forEach(c),this.h()},h(){b(o,"class","dropdown-onload-wrapper"),b(n,"class","dropdown-content")},m(t,p){_(t,n,p),u(n,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(o,null)},p(t,p){if(p&3){r=A(t[4].pages);let a;for(a=0;a<r.length;a+=1){const l=P(t,r,a);e[a]?e[a].p(l,p):(e[a]=R(l),e[a].c(),e[a].m(o,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=r.length}},d(t){t&&c(n),B(e,t)}}}function R(i){let n,o,r=i[7].title+"",e,t;return{c(){n=v("a"),o=v("span"),e=S(r),t=k(),this.h()},l(p){n=w(p,"A",{href:!0});var a=x(n);o=w(a,"SPAN",{});var l=x(o);e=I(l,r),l.forEach(c),t=$(a),a.forEach(c),this.h()},h(){b(n,"href",C+"/"+i[4].index+"/"+i[7].index),M(n,"active",i[1](`${C}/${i[4].index}/${i[7].index}`))},m(p,a){_(p,n,a),u(n,o),u(o,e),u(n,t)},p:D,d(p){p&&c(n)}}}function H(i){let n,o,r,e;function t(d,s){return d[4].index?an:tn}let a=t(i)(i),l=i[4].pages&&on(i);return{c(){n=v("div"),o=v("div"),a.c(),r=k(),l&&l.c(),e=k(),this.h()},l(d){n=w(d,"DIV",{class:!0});var s=x(n);o=w(s,"DIV",{});var m=x(o);a.l(m),m.forEach(c),r=$(s),l&&l.l(s),e=$(s),s.forEach(c),this.h()},h(){M(o,"dropdown-head",!0),M(o,"active",i[1](`${C}/${i[4].index}`)),b(n,"class","dropdown")},m(d,s){_(d,n,s),u(n,o),a.m(o,null),u(n,r),l&&l.m(n,null),u(n,e)},p(d,s){a.p(d,s),d[4].pages&&l.p(d,s)},d(d){d&&c(n),a.d(),l&&l.d()}}}function rn(i){let n,o=`@import url("https://fonts.googleapis.com/css2?family=Recursive:wght@600&display=swap");
@keyframes neon-cyan-flickering {
  0%, 60%, 62%, 98%, 100% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.6666666667)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.6666666667)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.6666666667)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.6666666667)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.6666666667));
  }
  61%, 99% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.5333333333)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.5333333333)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.5333333333)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.5333333333)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.5333333333));
  }
}
@font-face {
  font-family: Minecraft;
  src: url("./../../assets/fonts/Minecraft.woff") format("woff");
}
.minecraftsplash {
  color: #ff0;
  position: absolute;
  z-index: 2;
  left: 100%;
  font-family: "Minecraft", "fixedsys";
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  text-align: center;
  white-space: pre;
  font-smooth: never;
  -webkit-font-smoothing: none;
  animation: minecraftwow 0.5s infinite;
}

@keyframes minecraftwow {
  0% {
    transform: translate(-50%, 60%) scale(0.95) rotate(-15deg);
    animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
  50% {
    transform: translate(-50%, 60%) scale(1) rotate(-15deg);
    animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
  }
  100% {
    transform: translate(-50%, 60%) scale(0.95) rotate(-15deg);
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
}`,r,e,t,p='<div class="home-wrapper"><div class="minecraftsplash">Now with Svelte!</div> <span>FAST&#39;S CODE CREATIONS</span></div>',a,l,d,s=`<div class="dropdown-head"><span>Links</span></div> <div class="dropdown-content"><div class="dropdown-onload-wrapper"><a href="https://discord.com/users/276913653230469122/" target="_blank"><img src="${C}/assets/icons/discord.svg" class="icon" alt=""/> <span>Discord</span></a> <a href="https://github.com/Fasteroid/" target="_blank"><img src="${C}/assets/icons/github.svg" class="icon" alt=""/> <span>Github</span></a></div></div>`,m,E=A(i[0]),g=[];for(let h=0;h<E.length;h+=1)g[h]=H(j(i,E,h));return{c(){n=v("style"),n.textContent=o,r=k(),e=v("nav"),t=v("div"),t.innerHTML=p,a=k(),l=v("div"),d=v("div"),d.innerHTML=s,m=k();for(let h=0;h<g.length;h+=1)g[h].c();this.h()},l(h){const y=Y("svelte-1vz8yl4",document.head);n=w(y,"STYLE",{lang:!0,"data-svelte-h":!0}),T(n)!=="svelte-1kt3vc9"&&(n.textContent=o),y.forEach(c),r=$(h),e=w(h,"NAV",{});var f=x(e);t=w(f,"DIV",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1voqg75"&&(t.innerHTML=p),a=$(f),l=w(f,"DIV",{class:!0});var z=x(l);d=w(z,"DIV",{class:!0,"data-svelte-h":!0}),T(d)!=="svelte-1tp0efu"&&(d.innerHTML=s),m=$(z);for(let L=0;L<g.length;L+=1)g[L].l(z);z.forEach(c),f.forEach(c),this.h()},h(){b(n,"lang","scss"),b(t,"class","home"),b(d,"class","dropdown"),b(l,"class","pages")},m(h,y){u(document.head,n),_(h,r,y),_(h,e,y),u(e,t),u(e,a),u(e,l),u(l,d),u(l,m);for(let f=0;f<g.length;f+=1)g[f]&&g[f].m(l,null)},p(h,[y]){if(y&3){E=A(h[0]);let f;for(f=0;f<E.length;f+=1){const z=j(h,E,f);g[f]?g[f].p(z,y):(g[f]=H(z),g[f].c(),g[f].m(l,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=E.length}},i:D,o:D,d(h){h&&(c(r),c(e)),c(n),B(g,h)}}}function sn(i,n,o){let r;q(i,W,a=>o(2,r=a));let e=[{title:"About Me",index:"about"},{title:"Desmos",index:"desmos",pages:[{title:"Portals",index:"portals"}]}];const t=r.url.pathname;function p(a){return t.startsWith(a)}return[e,p]}class ln extends F{constructor(n){super(),G(this,n,sn,rn,O,{})}}function dn(i){let n,o=`@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
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
}

section, h1 {
  background-color: rgba(255, 255, 255, 0.0823529412);
  padding: 15px;
  text-align: justify;
  display: block;
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
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
  line-height: 140%;
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
}`,r,e,t,p,a;document.title=r=`
        `+i[0].titlePath.join(" | ")+`
    `,t=new ln({});const l=i[3].default,d=Z(l,i,i[2],null);return{c(){n=v("style"),n.textContent=o,e=k(),U(t.$$.fragment),p=k(),d&&d.c(),this.h()},l(s){const m=Y("svelte-1n5b8u4",document.head);n=w(m,"STYLE",{lang:!0,"data-svelte-h":!0}),T(n)!=="svelte-wp533r"&&(n.textContent=o),m.forEach(c),e=$(s),X(t.$$.fragment,s),p=$(s),d&&d.l(s),this.h()},h(){b(n,"lang","scss")},m(s,m){u(document.head,n),_(s,e,m),nn(t,s,m),_(s,p,m),d&&d.m(s,m),a=!0},p(s,[m]){(!a||m&1)&&r!==(r=`
        `+s[0].titlePath.join(" | ")+`
    `)&&(document.title=r),d&&d.p&&(!a||m&4)&&J(d,l,s,s[2],a?Q(l,s[2],m,null):K(s[2]),null)},i(s){a||(N(t.$$.fragment,s),N(d,s),a=!0)},o(s){V(t.$$.fragment,s),V(d,s),a=!1},d(s){s&&(c(e),c(p)),c(n),en(t,s),d&&d.d(s)}}}function pn(i,n,o){let r,e;q(i,W,a=>o(1,e=a));let{$$slots:t={},$$scope:p}=n;return i.$$set=a=>{"$$scope"in a&&o(2,p=a.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&o(0,r=e.data)},[r,e,p,t]}class un extends F{constructor(n){super(),G(this,n,pn,dn,O,{})}}export{un as component,bn as universal};
