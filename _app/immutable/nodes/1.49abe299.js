import { s as safe_not_equal, n as noop, c as component_subscribe } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, s as space, m as text, B as head_selector, h as claim_element, x as get_svelte_dataset, f as detach, c as claim_space, j as children, n as claim_text, k as attr, y as append_hydration, a as insert_hydration, o as set_data } from "../chunks/index.050cbb3d.js";
import { b as base } from "../chunks/paths.959862a9.js";
import { p as page } from "../chunks/stores.13bb828a.js";
function create_fragment(ctx) {
  let style;
  let textContent = ".error-centerer {\n  display: flex;\n  flex-flow: column;\n}\n.error-centerer img {\n  margin: auto;\n  width: 50%;\n}";
  let t1;
  let body;
  let div1;
  let section;
  let hgroup;
  let h1;
  let t2_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t2;
  let t3;
  let div0;
  let textContent_1 = `<img src="${base}/assets/404.gif" alt="bikini atoll explosion"/>`;
  return {
    c() {
      style = element("style");
      style.textContent = textContent;
      t1 = space();
      body = element("body");
      div1 = element("div");
      section = element("section");
      hgroup = element("hgroup");
      h1 = element("h1");
      t2 = text(t2_value);
      t3 = space();
      div0 = element("div");
      div0.innerHTML = textContent_1;
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-13fbs22", document.head);
      style = claim_element(head_nodes, "STYLE", { lang: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(style) !== "svelte-89vcyo")
        style.textContent = textContent;
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      body = claim_element(nodes, "BODY", {});
      var body_nodes = children(body);
      div1 = claim_element(body_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      section = claim_element(div1_nodes, "SECTION", {});
      var section_nodes = children(section);
      hgroup = claim_element(section_nodes, "HGROUP", {});
      var hgroup_nodes = children(hgroup);
      h1 = claim_element(hgroup_nodes, "H1", {});
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, t2_value);
      h1_nodes.forEach(detach);
      hgroup_nodes.forEach(detach);
      t3 = claim_space(section_nodes);
      div0 = claim_element(section_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-hzrjp")
        div0.innerHTML = textContent_1;
      section_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      body_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "OH NAR";
      attr(style, "lang", "scss");
      attr(div0, "class", "error-centerer");
      attr(div1, "class", "margins");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, body, anchor);
      append_hydration(body, div1);
      append_hydration(div1, section);
      append_hydration(section, hgroup);
      append_hydration(hgroup, h1);
      append_hydration(h1, t2);
      append_hydration(section, t3);
      append_hydration(section, div0);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(t1);
        detach(body);
      }
      detach(style);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Error as component
};
