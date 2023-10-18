import { _ } from "../chunks/_page.a9259033.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, s as space, r as create_component, y as head_selector, h as claim_element, x as get_svelte_dataset, f as detach, c as claim_space, u as claim_component, k as attr, z as append_hydration, a as insert_hydration, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.79817a2c.js";
import { P as ProjectCollection } from "../chunks/ProjectCollection.ee8ded2f.js";
function create_fragment(ctx) {
  let style;
  let textContent = ".project-title {\n  color: #000;\n  text-shadow: -1px -1px 5px #fff, 1px -1px 5px #fff, -1px 1px 5px #fff, 1px 1px 5px #fff, -1px -1px 5px #fff, 1px -1px 5px #fff, -1px 1px 5px #fff, 1px 1px 5px #fff, 0 0 0.5px #000, 0 0 0.5px #000;\n}";
  let t1;
  let projectcollection;
  let current;
  projectcollection = new ProjectCollection({ props: { topic: "desmos" } });
  return {
    c() {
      style = element("style");
      style.textContent = textContent;
      t1 = space();
      create_component(projectcollection.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-24vqrq", document.head);
      style = claim_element(head_nodes, "STYLE", { lang: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(style) !== "svelte-lpe6nn")
        style.textContent = textContent;
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(projectcollection.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(style, "lang", "scss");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      insert_hydration(target, t1, anchor);
      mount_component(projectcollection, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(projectcollection.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectcollection.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t1);
      }
      detach(style);
      destroy_component(projectcollection, detaching);
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
  _ as universal
};
