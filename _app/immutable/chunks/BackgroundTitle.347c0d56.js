import { s as safe_not_equal, n as noop } from "./scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, m as text, h as claim_element, j as children, n as claim_text, f as detach, k as attr, l as set_style, a as insert_hydration, y as append_hydration, o as set_data } from "./index.050cbb3d.js";
const BackgroundTitle_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let section;
  let div;
  let hgroup;
  let h1;
  let t;
  return {
    c() {
      section = element("section");
      div = element("div");
      hgroup = element("hgroup");
      h1 = element("h1");
      t = text(
        /*title*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div = claim_element(section_nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      hgroup = claim_element(div_nodes, "HGROUP", { class: true });
      var hgroup_nodes = children(hgroup);
      h1 = claim_element(hgroup_nodes, "H1", {});
      var h1_nodes = children(h1);
      t = claim_text(
        h1_nodes,
        /*title*/
        ctx[0]
      );
      h1_nodes.forEach(detach);
      hgroup_nodes.forEach(detach);
      div_nodes.forEach(detach);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(hgroup, "class", "svelte-1te1pz4");
      attr(div, "class", "bg svelte-1te1pz4");
      set_style(div, "background-image", "url('" + /*background*/
      ctx[1] + "')");
      attr(section, "class", "bgtitle svelte-1te1pz4");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, div);
      append_hydration(div, hgroup);
      append_hydration(hgroup, h1);
      append_hydration(h1, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*title*/
      1)
        set_data(
          t,
          /*title*/
          ctx2[0]
        );
      if (dirty & /*background*/
      2) {
        set_style(div, "background-image", "url('" + /*background*/
        ctx2[1] + "')");
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(section);
      }
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { title } = $$props;
  let { background } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("background" in $$props2)
      $$invalidate(1, background = $$props2.background);
  };
  return [title, background];
}
class BackgroundTitle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { title: 0, background: 1 });
  }
}
export {
  BackgroundTitle as B
};
