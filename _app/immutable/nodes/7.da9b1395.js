import { l as load$1 } from "../chunks/_page.a9259033.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, k as attr, a as insert_hydration, f as detach } from "../chunks/index.79817a2c.js";
const load = defineData(load$1, {
  title: "Nearby Points",
  thumbnail: "integralabuse.png"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment(ctx) {
  let div;
  let textContent = `<section><hgroup><h2>Nearby Points</h2> <h3>Leveraging integration for profit!</h3></hgroup> <section class="extra-space"><iframe src="https://www.desmos.com/calculator/olyzbiymc0" style="width: 100%; height: 50vh" frameborder="0" title="graph"></iframe></section> <section class="extra-space">This is a technical graph.  It demonstrates a task that is trivially simple to explain but rather difficult
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
            You&#39;re better off using a signed distance function if one exists!</section></section>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-hn7k0g")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "margins");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component,
  _page as universal
};
