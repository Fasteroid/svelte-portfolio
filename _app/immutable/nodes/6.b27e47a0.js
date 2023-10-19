import { l as load$1 } from "../chunks/_page.a9259033.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, k as attr, a as insert_hydration, f as detach } from "../chunks/index.050cbb3d.js";
const load = defineData(load$1, {
  title: "Galton Board",
  thumbnail: "galtonboard.png"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment(ctx) {
  let div1;
  let textContent = `<section><hgroup><h2>Galton Board</h2> <h3>Does that curve ring any <i>bells?</i></h3></hgroup> <section class="extra-space"><iframe src="https://www.desmos.com/calculator/q0zasmg9jo" style="width: 100%; height: 50vh" frameborder="0" title="graph"></iframe></section> <section class="extra-space"><iframe style="float:right; max-width: 100%; width: 400px; height: 400px; margin: 0px 0px 15px 15px" src="https://www.youtube-nocookie.com/embed/Kq7e6cj2nDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"></iframe>
            Predictability arising from randomness?  What is this, did I somehow reverse-engineer Desmos&#39;s RNG, or is this real?<br/> <br/>
            While reverse-engineering RNG would have been really cool, no, I didn&#39;t have to do that for this graph—all I needed was statistics.  
            Just like the physical variant shown to the right, this digital Galton board (also called a quincunx or bean-machine) demonstrates 
            two statistical phenomenon: regression to the mean and central limit theorem.<br/> <br/>
            First, I&#39;ll explain regression to the mean—the balls are less likely to bounce towards the outside since there are actually less
            paths that take the balls there.  Consider a 4-tiered pegboard like the default configuration for this graph.  To reach the leftmost slot, the 
            <b>ONLY</b> way to get there is to bounce left four times, which has a <b>1 in 16</b> probability if bouncing left is equally as likely 
            as bouncing right.  By contrast, there are <b>6 unique ways</b> to reach the middle slot (can you count them all?)—a <b>6 in 16</b> probability.  
            As a result, the balls are biased to be closer to the center.<br/> <br/>
            Secondly, central limit theorem.  On average, taking many independent random samplings (most staticians agree on 30+) 
            from any distribution will approximate a normal distribution.  This is applicable to the Galton Board, since the path 
            of each ball is a random sampling of some distribution, and we have a large number of balls to approximate with.  
            Both my digital version (where a ball bouncing off a peg is modeled with a binomial distribution) AND the physical 
            board (where balls collide with pegs and each other) produce similar bell curves.<br/> <br/>
            This graph won me a Reddit platinum award on <a href="https://www.reddit.com/r/desmos/comments/hhv5a3/galton_board_w_physics/">r/desmos</a>.<br/> <div style="clear: both;"></div></section></section>`;
  return {
    c() {
      div1 = element("div");
      div1.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-zxnydz")
        div1.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div1, "class", "margins");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
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
