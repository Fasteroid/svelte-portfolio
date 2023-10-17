import { l as load$1 } from "../chunks/_page.64553d50.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop, f as src_url_equal } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, k as attr, a as insert_hydration, f as detach, r as create_component, s as space, j as children, u as claim_component, c as claim_space, l as set_style, z as append_hydration, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.79817a2c.js";
import { b as base } from "../chunks/paths.d4863820.js";
import { B as BackgroundTitle } from "../chunks/BackgroundTitle.c9afbb16.js";
const load = defineData(load$1, {
  title: "Plate Cutter",
  thumbnail: "platecutter.png"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment$1(ctx) {
  let div;
  let textContent = "lol";
  return {
    c() {
      div = element("div");
      div.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { id: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-3udepr")
        div.textContent = textContent;
      this.h();
    },
    h() {
      attr(div, "id", "balls");
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
function instance($$self) {
  {
    const balls = document.querySelector("#balls");
    balls.innerHTML = "yo wtf";
  }
  return [];
}
class ExpressionBox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let div;
  let section1;
  let backgroundtitle;
  let t0;
  let section0;
  let textContent = `<img src="${base}/assets/expression2/platecutter/usage.jpg" style="float:left; max-height: 306pt; margin-left: 0px;" alt="The TF2 engineer using a comedically large pair of scissors"/>
            For those unfamiliar, hunter plates are a subset of the default construction props in Garry&#39;s Mod.  They are my
            favorite props to build with, and are objectively the most popular within the Garry&#39;s Mod community.<br/> <br/>
            There&#39;s just one problem.  The tiles that make up these plates are impossible to split apart by normal means.  
            This meant that in the past, whenever I wanted to trim off excess, cut out shapes, or split faces, I had to 
            manually reconstruct new and often complicated arrangements of plates.  Doing this was both time intensive
            and wasteful in terms of entity count.<br/> <br/>
            So guess what?  About a year after concieving the idea, I&#39;m proud to present my hunter plate cutter to the world—the hottest new
            thing since Precision Alignment!  Now you can rip hunter plates along their seams like plywood boards on a table saw!<br/> <br/>
            This E2 aims to solve all three of the aforementioned problems in a single group of shared utilities.  These 
            utilities are all powered by one piece of code—a recursive plate building function.  It can take orders
            for any size hunter plate (even those that don&#39;t exist) and spawn it at any location and angle—all without
            requiring prop resizing or custom models! This function not only allows you to summon whatever size 
            plates your build calls for, but also lets you cut them in half and punch out holes of custom dimensions.<br/> <br/>
            Make sure to first grab the <a href="https://github.com/Fasteroid/expression2-public/tree/master/plate_cutter_util">dependencies</a>
            from my Github if you want to try this out.  Cheers!<br/>`;
  let t12;
  let expressionbox;
  let t13;
  let component;
  let component_src_value;
  let current;
  backgroundtitle = new BackgroundTitle({
    props: {
      title: "Gmod Plate Cutting Tool",
      background: base + "/assets/expression2/platecutter/banner.jpg"
    }
  });
  expressionbox = new ExpressionBox({});
  return {
    c() {
      div = element("div");
      section1 = element("section");
      create_component(backgroundtitle.$$.fragment);
      t0 = space();
      section0 = element("section");
      section0.innerHTML = textContent;
      t12 = space();
      create_component(expressionbox.$$.fragment);
      t13 = space();
      component = element("component");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      section1 = claim_element(div_nodes, "SECTION", {});
      var section1_nodes = children(section1);
      claim_component(backgroundtitle.$$.fragment, section1_nodes);
      t0 = claim_space(section1_nodes);
      section0 = claim_element(section1_nodes, "SECTION", {
        class: true,
        style: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(section0) !== "svelte-1753ty3")
        section0.innerHTML = textContent;
      t12 = claim_space(section1_nodes);
      claim_component(expressionbox.$$.fragment, section1_nodes);
      t13 = claim_space(section1_nodes);
      component = claim_element(section1_nodes, "COMPONENT", { class: true, src: true, style: true });
      children(component).forEach(detach);
      section1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section0, "class", "description");
      set_style(section0, "min-height", "306pt");
      attr(component, "class", "e2code");
      if (!src_url_equal(component.src, component_src_value = "https://raw.githubusercontent.com/Fasteroid/expression2-public/master/plate_cutter_util/gmod_plate_cutter.txt"))
        attr(component, "src", component_src_value);
      set_style(component, "height", "50vh");
      attr(div, "class", "margins");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, section1);
      mount_component(backgroundtitle, section1, null);
      append_hydration(section1, t0);
      append_hydration(section1, section0);
      append_hydration(section1, t12);
      mount_component(expressionbox, section1, null);
      append_hydration(section1, t13);
      append_hydration(section1, component);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(backgroundtitle.$$.fragment, local);
      transition_in(expressionbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(backgroundtitle.$$.fragment, local);
      transition_out(expressionbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(backgroundtitle);
      destroy_component(expressionbox);
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
