import{s as O,n as S,c as F,d as G,u as Y,g as P,e as Z}from"../chunks/scheduler.b0c1c2c3.js";import{S as A,i as R,g as f,s as y,x as q,h,y as x,f as p,c as _,j,k as b,z as I,A as d,a as M,r as B,u as J,v as K,d as V,t as N,w as Q}from"../chunks/index.f8c5d532.js";import{b as E}from"../chunks/paths.6dd94aae.js";import{p as U}from"../chunks/stores.39e9296e.js";const W=!0,pn=Object.freeze(Object.defineProperty({__proto__:null,prerender:W},Symbol.toStringTag,{value:"Module"}));function X(i){let t,l=`@import url("https://fonts.googleapis.com/css2?family=Recursive:wght@600&display=swap");
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
nav .cwd {
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
}`,r,a,o,c='<div class="home-wrapper"><div class="minecraftsplash">Now with Svelte!</div> <span>FAST&#39;S CODE CREATIONS</span></div>',v,e,n,s=`<div class="dropdown-head"><span>Links</span></div> <div class="dropdown-content"><div class="dropdown-onload-wrapper"><a href="https://discord.com/users/276913653230469122/" target="_blank"><img src="${E}/assets/icons/discord.svg" class="icon" alt=""/> <span>Discord</span></a> <a href="https://github.com/Fasteroid/" target="_blank"><img src="assets/icons/github.svg" class="icon" alt=""/> <span>Github</span></a></div></div>`,L,m,g,D=`<a href="${E}/about">About Me</a>`,C,w,H='<div class="dropdown-onload-wrapper"><a href="https://fasteroid.github.io/skilltree.html"><span>Skill Tree</span></a></div>';return{c(){t=f("style"),t.textContent=l,r=y(),a=f("nav"),o=f("div"),o.innerHTML=c,v=y(),e=f("div"),n=f("div"),n.innerHTML=s,L=y(),m=f("div"),g=f("div"),g.innerHTML=D,C=y(),w=f("div"),w.innerHTML=H,this.h()},l(u){const k=q("svelte-4wexu",document.head);t=h(k,"STYLE",{lang:!0,"data-svelte-h":!0}),x(t)!=="svelte-1rqiik7"&&(t.textContent=l),k.forEach(p),r=_(u),a=h(u,"NAV",{});var $=j(a);o=h($,"DIV",{class:!0,"data-svelte-h":!0}),x(o)!=="svelte-1voqg75"&&(o.innerHTML=c),v=_($),e=h($,"DIV",{class:!0});var z=j(e);n=h(z,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-96ufve"&&(n.innerHTML=s),L=_(z),m=h(z,"DIV",{class:!0});var T=j(m);g=h(T,"DIV",{"data-svelte-h":!0}),x(g)!=="svelte-lkr1w7"&&(g.innerHTML=D),C=_(T),w=h(T,"DIV",{class:!0,"data-svelte-h":!0}),x(w)!=="svelte-15kjhj6"&&(w.innerHTML=H),T.forEach(p),z.forEach(p),$.forEach(p),this.h()},h(){b(t,"lang","scss"),b(o,"class","home"),b(n,"class","dropdown"),I(g,"dropdown-head",!0),I(g,"cwd",`${E}/about`==i[0]),b(w,"class","dropdown-content"),b(m,"class","dropdown"),b(e,"class","pages")},m(u,k){d(document.head,t),M(u,r,k),M(u,a,k),d(a,o),d(a,v),d(a,e),d(e,n),d(e,L),d(e,m),d(m,g),d(m,C),d(m,w)},p:S,i:S,o:S,d(u){u&&(p(r),p(a)),p(t)}}}function nn(i,t,l){let r;return F(i,U,o=>l(1,r=o)),[r.url.pathname]}class tn extends A{constructor(t){super(),R(this,t,nn,X,O,{})}}function en(i){let t,l=`@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
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

.p {
  margin: 0 15px 15px 15px;
  line-height: 140%;
  width: auto;
  white-space: pre-wrap;
}

.margins {
  margin: auto;
  max-width: min(80vw, 1920px);
  padding: 10px;
}

.dubsp {
  white-space: pre;
}

.emdash {
  display: inline-block;
  text-align: center;
  width: 13pt;
  transform: scale(1.7, 1);
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
}`,r,a,o,c;a=new tn({});const v=i[1].default,e=G(v,i,i[0],null);return{c(){t=f("style"),t.textContent=l,r=y(),B(a.$$.fragment),o=y(),e&&e.c(),this.h()},l(n){const s=q("svelte-1yoiij0",document.head);t=h(s,"STYLE",{lang:!0,"data-svelte-h":!0}),x(t)!=="svelte-kcf4qt"&&(t.textContent=l),s.forEach(p),r=_(n),J(a.$$.fragment,n),o=_(n),e&&e.l(n),this.h()},h(){b(t,"lang","scss")},m(n,s){d(document.head,t),M(n,r,s),K(a,n,s),M(n,o,s),e&&e.m(n,s),c=!0},p(n,[s]){e&&e.p&&(!c||s&1)&&Y(e,v,n,n[0],c?Z(v,n[0],s,null):P(n[0]),null)},i(n){c||(V(a.$$.fragment,n),V(e,n),c=!0)},o(n){N(a.$$.fragment,n),N(e,n),c=!1},d(n){n&&(p(r),p(o)),p(t),Q(a,n),e&&e.d(n)}}}function an(i,t,l){let{$$slots:r={},$$scope:a}=t;return i.$$set=o=>{"$$scope"in o&&l(0,a=o.$$scope)},[a,r]}class ln extends A{constructor(t){super(),R(this,t,an,en,O,{})}}export{ln as component,pn as universal};
