import { _ } from "../chunks/_layout.4fab37f4.js";
import { s as safe_not_equal, n as noop, c as component_subscribe, d as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, e as get_slot_changes } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, h as claim_element, x as get_svelte_dataset, k as attr, a as insert_hydration, f as detach, s as space, r as create_component, y as head_selector, c as claim_space, u as claim_component, z as append_hydration, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.79817a2c.js";
import { p as page } from "../chunks/stores.3bc99068.js";
import { b as base } from "../chunks/paths.3a89d34e.js";
const Navbar_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let nav;
  let textContent = `<div class="home svelte-1d95zvm"><div class="home-wrapper svelte-1d95zvm"><span class="svelte-1d95zvm">FAST&#39;S CODE CREATIONS</span> <div class="minecraftsplash svelte-1d95zvm">Now with Svelte!</div></div></div> <div class="pages svelte-1d95zvm"><div class="dropdown svelte-1d95zvm"><div class="dropdown-head svelte-1d95zvm"><span class="svelte-1d95zvm">Links</span></div> <div class="dropdown-content svelte-1d95zvm"><div class="dropdown-onload-wrapper svelte-1d95zvm"><a href="https://discord.com/users/276913653230469122/" target="_blank" class="svelte-1d95zvm"><img src="${base}/assets/icons/discord.svg" class="icon svelte-1d95zvm" alt=""/> <span class="svelte-1d95zvm">Discord</span></a> <a href="https://github.com/Fasteroid/" target="_blank" class="svelte-1d95zvm"><img src="${base}/assets/icons/github.svg" class="icon svelte-1d95zvm" alt=""/> <span class="svelte-1d95zvm">Github</span></a></div></div></div></div>`;
  return {
    c() {
      nav = element("nav");
      nav.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(nav) !== "svelte-dqy8x")
        nav.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(nav, "class", "svelte-1d95zvm");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(nav);
      }
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  $page.url.pathname;
  return [];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_fragment(ctx) {
  let style;
  let textContent = '@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");\nbody, html {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #2f3234;\n  color: #eeeeee;\n  font-family: "Roboto Mono", monospace;\n  font-size: 11pt;\n  line-height: 1.25;\n  word-spacing: -0.75px;\n  line-height: 140%;\n}\n\nsection, hgroup {\n  background-color: rgba(255, 255, 255, 0.0823529412);\n  padding: 15px;\n  text-align: justify;\n  display: block;\n}\n\nhgroup {\n  text-align: center;\n  margin-bottom: 15px;\n}\nhgroup * {\n  margin: 0;\n}\nhgroup h1 {\n  font-size: 24px;\n}\nhgroup h2 {\n  font-size: 16pt;\n}\nhgroup h3 {\n  font-weight: normal;\n  font-size: 12pt;\n}\n\nsection.no-background {\n  background-color: rgba(0, 0, 0, 0);\n}\n\nsection.extra-space {\n  margin: 15px 15px 15px 15px;\n}\n\nimg {\n  background-color: rgba(255, 255, 255, 0.0823529412);\n  padding: 15px 15px;\n  margin: 0 15px 15px 15px;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\ndiv.p {\n  margin: 0 15px 15px 15px;\n  width: auto;\n}\n\n.margins {\n  margin: auto;\n  max-width: min(80vw, 1920px);\n  padding: 10px;\n}\n\n.dubsp {\n  white-space: pre;\n}\n\nli::marker {\n  font-size: 12pt;\n}\n\nul {\n  margin: 0px;\n}\n\na {\n  color: #b1b1ff;\n}\na:visited {\n  color: #eca1ff;\n}\n\n::selection {\n  background: rgba(112, 176, 255, 0.2666666667);\n}\n\nspan.emdash {\n  display: inline-block;\n  text-align: center;\n  width: 13pt;\n  transform: scale(1.7, 1);\n}';
  let title_value;
  let t1;
  let navbar;
  let t2;
  let current;
  document.title = title_value = "\n        " + /*pageData*/
  ctx[0].titlePath.join(" | ") + "\n    ";
  navbar = new Navbar({});
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      style = element("style");
      style.textContent = textContent;
      t1 = space();
      create_component(navbar.$$.fragment);
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1xvmj29", document.head);
      style = claim_element(head_nodes, "STYLE", { lang: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(style) !== "svelte-ptnhna")
        style.textContent = textContent;
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(navbar.$$.fragment, nodes);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(style, "lang", "scss");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      insert_hydration(target, t1, anchor);
      mount_component(navbar, target, anchor);
      insert_hydration(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*pageData*/
      1) && title_value !== (title_value = "\n        " + /*pageData*/
      ctx2[0].titlePath.join(" | ") + "\n    ")) {
        document.title = title_value;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t1);
        detach(t2);
      }
      detach(style);
      destroy_component(navbar, detaching);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let pageData;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(1, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    2) {
      $$invalidate(0, pageData = $page.data);
    }
  };
  return [pageData, $page, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as component,
  _ as universal
};
