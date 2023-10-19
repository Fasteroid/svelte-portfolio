import { _ } from "../chunks/_page.64553d50.js";
import { s as safe_not_equal, n as noop } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, r as create_component, u as claim_component, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.050cbb3d.js";
import { P as ProjectCollection } from "../chunks/ProjectCollection.af51f438.js";
function create_fragment(ctx) {
  let projectcollection;
  let current;
  projectcollection = new ProjectCollection({ props: { topic: "expression2" } });
  return {
    c() {
      create_component(projectcollection.$$.fragment);
    },
    l(nodes) {
      claim_component(projectcollection.$$.fragment, nodes);
    },
    m(target, anchor) {
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
