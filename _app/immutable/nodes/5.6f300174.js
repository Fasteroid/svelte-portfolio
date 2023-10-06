import{_ as fe}from"../chunks/_page.b748e252.js";import{s as Q,n as V,c as R,f as U}from"../chunks/scheduler.2cdf953d.js";import{S as W,i as X,g as h,s as I,m as N,x as Z,h as g,y as ee,f as o,c as z,j as m,n as $,k as _,l as te,z as r,a as q,o as ne,A as ae}from"../chunks/index.65d7753f.js";import{e as M,p as F}from"../chunks/loader.7007bae2.js";import{p as re}from"../chunks/stores.2645bfce.js";function J(d,e,i){const c=d.slice();return c[2]=e[i],c}function K(d){let e,i,c,p,s,b=d[2].pageData?.title+"",u,f;return{c(){e=h("a"),i=h("img"),p=I(),s=h("div"),u=N(b),f=I(),this.h()},l(x){e=g(x,"A",{href:!0});var l=m(e);i=g(l,"IMG",{src:!0,alt:!0}),p=z(l),s=g(l,"DIV",{class:!0});var w=m(s);u=$(w,b),w.forEach(o),f=z(l),l.forEach(o),this.h()},h(){U(i.src,c="assets/"+A+"/"+(d[2].pageData?.thumbnail??"portals.png"))||_(i,"src",c),_(i,"alt","thumbnail"),_(s,"class","shortcut-title"),_(e,"href",d[2].webPath)},m(x,l){q(x,e,l),r(e,i),r(e,p),r(e,s),r(s,u),r(e,f)},p:V,d(x){x&&o(e)}}}function oe(d){let e,i=`@keyframes neon-cyan-flickering {
  0%, 60%, 62%, 98%, 100% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.6666666667)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.6666666667)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.6666666667)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.6666666667)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.6666666667));
  }
  61%, 99% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.5333333333)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.5333333333)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.5333333333)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.5333333333)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.5333333333));
  }
}
.headerimage-border {
  margin: 15px 15px;
  padding: 15px 15px;
  max-width: calc(100% - 60px);
}
.headerimage-border .headerimage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  min-height: 200px;
  max-height: 3in;
  height: 20vw;
}
.headerimage-border .headerimage h1 {
  background: rgba(132, 136, 138, 0.5333333333);
  display: block;
  position: relative;
  text-align: center;
  margin-bottom: 0;
  width: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 30px);
  filter: drop-shadow(0 0 4px #000000);
  font-size: max(24px, 1.8vh);
  margin-block-start: 0;
  margin-block-end: 0;
}

section.no-background {
  background-color: rgba(0, 0, 0, 0);
}

section.extra-space, h1 {
  margin: 15px 15px 15px 15px;
}

.project-shelf {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.project-shelf > a {
  color: #eeeeee;
  display: inline-block;
  position: relative;
  max-width: 20vh;
  font-size: max(11pt, 2vw - 60px);
  margin: 2.5px;
  line-height: 130%;
}
.project-shelf > a:hover > img {
  filter: drop-shadow(0 0 6pt rgba(255, 255, 255, 0.3333333333)) drop-shadow(0 0 3pt rgba(255, 255, 255, 0.8)) drop-shadow(0 0 1pt white);
  min-width: calc(100% + min(20px, 10%));
  margin: max(-10px, -5%);
}
.project-shelf img {
  position: relative;
  min-width: 100%;
  border: none;
  background: none;
  box-sizing: border-box;
  margin: 0;
  transition-timing-function: linear;
  transition: 0.4s;
}

@keyframes neon-cyan-flickering {
  0%, 60%, 62%, 98%, 100% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.6666666667)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.6666666667)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.6666666667)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.6666666667)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.6666666667));
  }
  61%, 99% {
    filter: drop-shadow(0 0 1pt rgba(255, 255, 255, 0.5333333333)) drop-shadow(0 0 3pt rgba(102, 255, 255, 0.5333333333)) drop-shadow(0 1px 7pt rgba(0, 153, 255, 0.5333333333)) drop-shadow(0 1px 5pt rgba(0, 0, 255, 0.5333333333)) drop-shadow(0 1px 8pt rgba(0, 0, 255, 0.5333333333));
  }
}
.project-shelf img {
  padding: 10px;
}

.shortcut-title {
  position: absolute;
  bottom: 10%;
  width: 90%;
  text-align: center;
  transform: translate(5%, 0);
  color: #000;
  text-shadow: -1px -1px 5px #fff, 1px -1px 5px #fff, -1px 1px 5px #fff, 1px 1px 5px #fff, -1px -1px 5px #fff, 1px -1px 5px #fff, -1px 1px 5px #fff, 1px 1px 5px #fff, 0 0 0.5px #000, 0 0 0.5px #000;
}`,c,p,s,b,u,f,x,l,w=d[0].title+"",C,P,S,y,k,E=M(F.getPathChildren(`/${A}`)),a=[];for(let t=0;t<E.length;t+=1)a[t]=K(J(d,E,t));return{c(){e=h("style"),e.textContent=i,c=I(),p=h("body"),s=h("div"),b=h("section"),u=h("section"),f=h("div"),x=h("h1"),l=h("b"),C=N(w),P=N(" Projects"),S=I(),y=h("section"),k=h("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){const v=Z("svelte-17mz2mj",document.head);e=g(v,"STYLE",{lang:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1nvcm5a"&&(e.textContent=i),v.forEach(o),c=z(t),p=g(t,"BODY",{});var n=m(p);s=g(n,"DIV",{class:!0});var j=m(s);b=g(j,"SECTION",{});var D=m(b);u=g(D,"SECTION",{class:!0});var B=m(u);f=g(B,"DIV",{class:!0,style:!0});var Y=m(f);x=g(Y,"H1",{});var G=m(x);l=g(G,"B",{});var O=m(l);C=$(O,w),P=$(O," Projects"),O.forEach(o),G.forEach(o),Y.forEach(o),B.forEach(o),S=z(D),y=g(D,"SECTION",{class:!0});var H=m(y);k=g(H,"DIV",{class:!0});var L=m(k);for(let T=0;T<a.length;T+=1)a[T].l(L);L.forEach(o),H.forEach(o),D.forEach(o),j.forEach(o),n.forEach(o),this.h()},h(){_(e,"lang","scss"),_(f,"class","headerimage"),te(f,"background-image","url('assets/desmos/banner.jpg')"),_(u,"class","headerimage-border"),_(k,"class","project-shelf"),_(y,"class","no-background"),_(s,"class","margins")},m(t,v){r(document.head,e),q(t,c,v),q(t,p,v),r(p,s),r(s,b),r(b,u),r(u,f),r(f,x),r(x,l),r(l,C),r(l,P),r(b,S),r(b,y),r(y,k);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(k,null)},p(t,[v]){if(v&1&&w!==(w=t[0].title+"")&&ne(C,w),v&0){E=M(F.getPathChildren(`/${A}`));let n;for(n=0;n<E.length;n+=1){const j=J(t,E,n);a[n]?a[n].p(j,v):(a[n]=K(j),a[n].c(),a[n].m(k,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=E.length}},i:V,o:V,d(t){t&&(o(c),o(p)),o(e),ae(a,t)}}}let A="desmos";function se(d,e,i){let c,p;return R(d,re,s=>i(1,p=s)),d.$$.update=()=>{d.$$.dirty&2&&i(0,c=p.data)},[c,p]}class ce extends W{constructor(e){super(),X(this,e,se,oe,Q,{})}}export{ce as component,fe as universal};
