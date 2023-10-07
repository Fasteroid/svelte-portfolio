import{_ as fe}from"../chunks/_page.b748e252.js";import{s as J,n as V,c as K,f as Q}from"../chunks/scheduler.2cdf953d.js";import{S as W,i as X,g as h,s as I,m as N,x as Z,h as g,y as ee,f as o,c as P,j as m,n as $,k as _,l as te,z as r,a as q,o as ne,A as ae}from"../chunks/index.65d7753f.js";import{e as M,p as R}from"../chunks/loader.6307ed7f.js";import{p as re}from"../chunks/stores.4682d875.js";function U(i,e,p){const c=i.slice();return c[2]=e[p],c}function F(i){let e,p,c,l,s,u=(i[2].pageData?.longTitle||i[2].pageData?.title)+"",b,f;return{c(){e=h("a"),p=h("img"),l=I(),s=h("div"),b=N(u),f=I(),this.h()},l(x){e=g(x,"A",{href:!0});var d=m(e);p=g(d,"IMG",{src:!0,alt:!0}),l=P(d),s=g(d,"DIV",{class:!0});var w=m(s);b=$(w,u),w.forEach(o),f=P(d),d.forEach(o),this.h()},h(){Q(p.src,c="assets/"+A+"/"+(i[2].pageData?.thumbnail??"portals.png"))||_(p,"src",c),_(p,"alt","thumbnail"),_(s,"class","shortcut-title"),_(e,"href",i[2].webPath)},m(x,d){q(x,e,d),r(e,p),r(e,l),r(e,s),r(s,b),r(e,f)},p:V,d(x){x&&o(e)}}}function oe(i){let e,p=`@keyframes neon-cyan-flickering {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.headerimage-border .headerimage hgroup {
  background: rgba(132, 136, 138, 0.5333333333);
  display: block;
  position: relative;
  text-align: center;
  margin-bottom: 0;
  margin-left: -15px;
  margin-right: -15px;
  filter: drop-shadow(0 0 4px #000000);
  font-size: max(24px, 1.8vh);
  margin-block-start: 0;
  margin-block-end: 0;
}

section.no-background {
  background-color: rgba(0, 0, 0, 0);
}

section.extra-space, hgroup {
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
}`,c,l,s,u,b,f,x,d,w=i[0].title+"",C,z,S,y,k,E=M(R.getPathChildren(`/${A}`)),a=[];for(let t=0;t<E.length;t+=1)a[t]=F(U(i,E,t));return{c(){e=h("style"),e.textContent=p,c=I(),l=h("body"),s=h("div"),u=h("section"),b=h("section"),f=h("div"),x=h("hgroup"),d=h("h1"),C=N(w),z=N(" Projects"),S=I(),y=h("section"),k=h("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){const v=Z("svelte-lo8ngf",document.head);e=g(v,"STYLE",{lang:!0,"data-svelte-h":!0}),ee(e)!=="svelte-1t18op6"&&(e.textContent=p),v.forEach(o),c=P(t),l=g(t,"BODY",{});var n=m(l);s=g(n,"DIV",{class:!0});var j=m(s);u=g(j,"SECTION",{});var D=m(u);b=g(D,"SECTION",{class:!0});var G=m(b);f=g(G,"DIV",{class:!0,style:!0});var H=m(f);x=g(H,"HGROUP",{});var Y=m(x);d=g(Y,"H1",{});var O=m(d);C=$(O,w),z=$(O," Projects"),O.forEach(o),Y.forEach(o),H.forEach(o),G.forEach(o),S=P(D),y=g(D,"SECTION",{class:!0});var B=m(y);k=g(B,"DIV",{class:!0});var L=m(k);for(let T=0;T<a.length;T+=1)a[T].l(L);L.forEach(o),B.forEach(o),D.forEach(o),j.forEach(o),n.forEach(o),this.h()},h(){_(e,"lang","scss"),_(f,"class","headerimage"),te(f,"background-image","url('assets/desmos/banner.jpg')"),_(b,"class","headerimage-border"),_(k,"class","project-shelf"),_(y,"class","no-background"),_(s,"class","margins")},m(t,v){r(document.head,e),q(t,c,v),q(t,l,v),r(l,s),r(s,u),r(u,b),r(b,f),r(f,x),r(x,d),r(d,C),r(d,z),r(u,S),r(u,y),r(y,k);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(k,null)},p(t,[v]){if(v&1&&w!==(w=t[0].title+"")&&ne(C,w),v&0){E=M(R.getPathChildren(`/${A}`));let n;for(n=0;n<E.length;n+=1){const j=U(t,E,n);a[n]?a[n].p(j,v):(a[n]=F(j),a[n].c(),a[n].m(k,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=E.length}},i:V,o:V,d(t){t&&(o(c),o(l)),o(e),ae(a,t)}}}let A="desmos";function se(i,e,p){let c,l;return K(i,re,s=>p(1,l=s)),i.$$.update=()=>{i.$$.dirty&2&&p(0,c=l.data)},[c,l]}class ce extends W{constructor(e){super(),X(this,e,se,oe,J,{})}}export{ce as component,fe as universal};
