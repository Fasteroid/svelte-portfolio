import{l as o}from"../chunks/_page.b748e252.js";import{d as r}from"../chunks/datacomposer.b3c25c4c.js";import{s as l,n as i}from"../chunks/scheduler.2cdf953d.js";import{S as h,i as c,g as f,h as p,y as u,k as d,a as g,f as m}from"../chunks/index.65d7753f.js";const y=r(o,{title:"Nearby Points",thumbnail:"integralabuse.png"}),T=Object.freeze(Object.defineProperty({__proto__:null,load:y},Symbol.toStringTag,{value:"Module"}));function b(a){let e,n=`<section><hgroup><h2>Nearby Points</h2> <h3>Leveraging integration for profit!</h3></hgroup> <section class="extra-space"><iframe src="https://www.desmos.com/calculator/olyzbiymc0" style="width: 100%; height: 50vh" frameborder="0" title="graph"></iframe></section> <section class="extra-space">This is a technical graph.  It demonstrates a task that is trivially simple to explain but rather difficult
            to actually do.  How does one highlight all points less than a given distance <i>R</i> from
            an arbitrary function <i>f(x)</i>?<br/> <br/>
            The naive approach would be to find the nearest point on <i>f(x)</i> to every pixel on the screen,
            and then check if that distance is less or equal to <i>R</i>.  If so, highlight the 
            pixel, if not, don&#39;t.  The issue with this is that finding the nearest point to another on an arbitrary
            function isn&#39;t particularly easy.  Newton&#39;s method is nice, but doesn&#39;t always converge.<br/> <br/>
            My approach instead involves defining and integrating a special function <i>D(x,y,t)</i>
            with respect to <i>t</i>.  This function is relatively simple: <i>x</i> and <i>y</i> are the
            coordinates of any point on the screen, and <i>t</i> defines another point placed at <i>x=t</i>
            on the arbitrary function <i>f(x)</i> we were given.  It then uses a simple piecewise expression
            to return 1 if the points are closer than <i>R</i> and 0 if they are not.<br/> <br/>
            What&#39;s the result of integrating this bad boy?  Since an integral is really an just an infinite sum, which
            is effectively an infinite for loop, we can use it to evaluate if ANY of the infinite number of points on <i>f(x)</i>
            come within <i>R</i> units of each pixel.  In a world where Desmos could evaluate the integral perfectly,
            it would highlight any points for which <i>D(x,y,t)</i> is 1 at some <i>t</i>.<br/> <br/>
            But unfortunately, it doesn&#39;t, since integration is also a hard problem.<br/>
            You&#39;re better off using a signed distance function if one exists!</section></section>`;return{c(){e=f("div"),e.innerHTML=n,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),u(e)!=="svelte-hn7k0g"&&(e.innerHTML=n),this.h()},h(){d(e,"class","margins")},m(t,s){g(t,e,s)},p:i,i,o:i,d(t){t&&m(e)}}}class D extends h{constructor(e){super(),c(this,e,null,b,l,{})}}export{D as component,T as universal};
