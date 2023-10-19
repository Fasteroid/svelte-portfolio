import { s as safe_not_equal, c as component_subscribe } from "./scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, r as create_component, s as space, h as claim_element, j as children, u as claim_component, c as claim_space, x as get_svelte_dataset, f as detach, k as attr, a as insert_hydration, y as append_hydration, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "./index.050cbb3d.js";
import { p as page } from "./stores.13bb828a.js";
import { b as base } from "./paths.959862a9.js";
import { B as BackgroundTitle } from "./BackgroundTitle.347c0d56.js";
const ProjectCollection_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let section1;
  let backgroundtitle;
  let t;
  let section0;
  let textContent = `<div class="project-shelf svelte-13xsfzz"></div>`;
  let current;
  backgroundtitle = new BackgroundTitle({
    props: {
      title: (
        /*pageData*/
        (ctx[1].longTitle || /*pageData*/
        ctx[1].title) + " Projects"
      ),
      background: base + "/assets/" + /*topic*/
      ctx[0] + "/banner.jpg"
    }
  });
  return {
    c() {
      div1 = element("div");
      section1 = element("section");
      create_component(backgroundtitle.$$.fragment);
      t = space();
      section0 = element("section");
      section0.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      section1 = claim_element(div1_nodes, "SECTION", {});
      var section1_nodes = children(section1);
      claim_component(backgroundtitle.$$.fragment, section1_nodes);
      t = claim_space(section1_nodes);
      section0 = claim_element(section1_nodes, "SECTION", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(section0) !== "svelte-13rg1kj")
        section0.innerHTML = textContent;
      section1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section0, "class", "no-background");
      attr(div1, "class", "margins");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, section1);
      mount_component(backgroundtitle, section1, null);
      append_hydration(section1, t);
      append_hydration(section1, section0);
      current = true;
    },
    p(ctx2, [dirty]) {
      const backgroundtitle_changes = {};
      if (dirty & /*pageData*/
      2)
        backgroundtitle_changes.title = /*pageData*/
        (ctx2[1].longTitle || /*pageData*/
        ctx2[1].title) + " Projects";
      if (dirty & /*topic*/
      1)
        backgroundtitle_changes.background = base + "/assets/" + /*topic*/
        ctx2[0] + "/banner.jpg";
      backgroundtitle.$set(backgroundtitle_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(backgroundtitle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(backgroundtitle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_component(backgroundtitle);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let pageData;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(2, $page = $$value));
  let { topic } = $$props;
  $$self.$$set = ($$props2) => {
    if ("topic" in $$props2)
      $$invalidate(0, topic = $$props2.topic);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    4) {
      $$invalidate(1, pageData = $page.data);
    }
  };
  return [topic, pageData, $page];
}
class ProjectCollection extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { topic: 0 });
  }
}
export {
  ProjectCollection as P
};
