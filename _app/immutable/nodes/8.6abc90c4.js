import { l as load$1 } from "../chunks/_page.a9259033.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, k as attr, a as insert_hydration, f as detach } from "../chunks/index.050cbb3d.js";
const load = defineData(load$1, {
  title: "Portals",
  thumbnail: "portals.png"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment(ctx) {
  let div;
  let textContent = `<section><hgroup><h2>Desmos Portals</h2> <h3>DESMOS PORTALS?</h3></hgroup> <section class="extra-space"><iframe src="https://www.desmos.com/calculator/p5cbnjegnh" style="width: 100%; height: 50vh" frameborder="0" title="graph"></iframe></section> <section class="extra-space">This graph is exactly what the title implies.  They&#39;re Desmos portals.  They work exactly like one would expect
            regular portals to behave—the blue one moves anything that enters to the same local position at the orange one.
            You can type in whatever <i>f(x)</i> you want and it&#39;ll mostly work—if not try increasing the resolve resolution
            and that should fix it.<br/> <br/>
            I made this graph at the end of 2019 as yet another coping mechanism for my endless boredom.  It took about three days to
            get it working well enough for me to be proud of. I had to come up with a way to solve for ALL intersections with the portal
            boundaries, a way to perform logical operations on those intersections, and a way to selectively hide things based on where
            the intersections happened.<br/> <br/>
            The final result ended up being a hacky mess of horrors that just barely works.  My intersection solver struggles to detect
            functions that cross the portals with large slopes, and the portals are one-way only for the most part.<br/> <br/>
            Despite these shortcomings, this graph managed to earn me my first reddit gold on <a href="https://www.reddit.com/r/desmos/comments/ea89gc/desmos_portals_desmos_portals/">r/desmos</a>.<br/></section></section>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-pu32tv")
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
