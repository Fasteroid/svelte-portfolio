import{l as n}from"../chunks/_page.b748e252.js";import{d as i}from"../chunks/datacomposer.b3c25c4c.js";import{s as l,n as o}from"../chunks/scheduler.2cdf953d.js";import{S as h,i as c,g as m,h as p,y as d,k as g,a as u,f}from"../chunks/index.65d7753f.js";const y=i(n,{title:"Portals",thumbnail:"portals.png"}),k=Object.freeze(Object.defineProperty({__proto__:null,load:y},Symbol.toStringTag,{value:"Module"}));function w(a){let e,s=`<section><hgroup><h2>Desmos Portals</h2> <h3>DESMOS PORTALS?</h3></hgroup> <section class="extra-space"><iframe src="https://www.desmos.com/calculator/p5cbnjegnh" style="width: 100%; height: 50vh" frameborder="0" title="graph"></iframe></section> <section class="extra-space">This graph is exactly what the title implies.  They&#39;re Desmos portals.  They work exactly like one would expect
            regular portals to behave—the blue one moves anything that enters to the same local position at the orange one.
            You can type in whatever <i>f(x)</i> you want and it&#39;ll mostly work—if not try increasing the resolve resolution
            and that should fix it.<br/> <br/>
            I made this graph at the end of 2019 as yet another coping mechanism for my endless boredom.  It took about three days to
            get it working well enough for me to be proud of. I had to come up with a way to solve for ALL intersections with the portal
            boundaries, a way to perform logical operations on those intersections, and a way to selectively hide things based on where
            the intersections happened.<br/> <br/>
            The final result ended up being a hacky mess of horrors that just barely works.  My intersection solver struggles to detect
            functions that cross the portals with large slopes, and the portals are one-way only for the most part.<br/> <br/>
            Despite these shortcomings, this graph managed to earn me my first reddit gold on <a href="https://www.reddit.com/r/desmos/comments/ea89gc/desmos_portals_desmos_portals/">r/desmos</a>.<br/></section></section>`;return{c(){e=m("div"),e.innerHTML=s,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),d(e)!=="svelte-pu32tv"&&(e.innerHTML=s),this.h()},h(){g(e,"class","margins")},m(t,r){u(t,e,r)},p:o,i:o,o,d(t){t&&f(e)}}}class T extends h{constructor(e){super(),c(this,e,null,w,l,{})}}export{T as component,k as universal};