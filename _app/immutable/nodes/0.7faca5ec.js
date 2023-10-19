import { _ } from "../chunks/_layout.4fab37f4.js";
import { s as safe_not_equal, n as noop, c as component_subscribe, d as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, e as get_slot_changes } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, s as space, h as claim_element, j as children$1, x as get_svelte_dataset, c as claim_space, f as detach, k as attr, a as insert_hydration, y as append_hydration, z as destroy_each, m as text, n as claim_text, A as toggle_class, r as create_component, B as head_selector, u as claim_component, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.050cbb3d.js";
import { p as page } from "../chunks/stores.13bb828a.js";
import { b as base } from "../chunks/paths.959862a9.js";
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
const children = {
  about: {
    path: "/routes/about",
    key: "about",
    pageData: {
      titlePath: [
        "Fast's Code Creations",
        "About"
      ],
      title: "About"
    }
  },
  desmos: {
    children: {
      "double-tangents": {
        path: "/routes/desmos/double-tangents",
        key: "double-tangents",
        pageData: {
          titlePath: [
            "Fast's Code Creations",
            "Desmos",
            "Double Tangents"
          ],
          title: "Double Tangents",
          thumbnail: "doubletangents.png"
        }
      },
      "galton-board": {
        path: "/routes/desmos/galton-board",
        key: "galton-board",
        pageData: {
          titlePath: [
            "Fast's Code Creations",
            "Desmos",
            "Galton Board"
          ],
          title: "Galton Board",
          thumbnail: "galtonboard.png"
        }
      },
      "nearby-points": {
        path: "/routes/desmos/nearby-points",
        key: "nearby-points",
        pageData: {
          titlePath: [
            "Fast's Code Creations",
            "Desmos",
            "Nearby Points"
          ],
          title: "Nearby Points",
          thumbnail: "integralabuse.png"
        }
      },
      portals: {
        path: "/routes/desmos/portals",
        key: "portals",
        pageData: {
          titlePath: [
            "Fast's Code Creations",
            "Desmos",
            "Portals"
          ],
          title: "Portals",
          thumbnail: "portals.png"
        }
      }
    },
    path: "/routes/desmos",
    key: "desmos",
    pageData: {
      titlePath: [
        "Fast's Code Creations",
        "Desmos"
      ],
      title: "Desmos"
    }
  },
  expression2: {
    children: {
      "plate-cutter": {
        path: "/routes/expression2/plate-cutter",
        key: "plate-cutter",
        pageData: {
          titlePath: [
            "Fast's Code Creations",
            "E2 Stuff",
            "Plate Cutter"
          ],
          title: "Plate Cutter",
          longTitle: "Expression 2",
          thumbnail: "platecutter.png"
        }
      }
    },
    path: "/routes/expression2",
    key: "expression2",
    pageData: {
      titlePath: [
        "Fast's Code Creations",
        "E2 Stuff"
      ],
      title: "E2 Stuff",
      longTitle: "Expression 2"
    }
  }
};
const path = "/routes";
const key = "";
const data = {
  children,
  path,
  key
};
class TreeNode {
  static webBase = "";
  children;
  path;
  key;
  pageData;
  get webPath() {
    return TreeNode.webBase + this.path.replace("/routes", "");
  }
  constructor(path2, key2) {
    this.path = path2;
    this.key = key2;
  }
  getChild(key2) {
    if (!this.children)
      this.children = {};
    if (!this.children[key2])
      this.children[key2] = new TreeNode(`${this.path}/${key2}`, key2);
    return this.children[key2];
  }
  getChildren() {
    return Object.values(this.children || {});
  }
  getChildrenAtPath(path2) {
    let chain = path2.split("/").slice(1);
    let destination = this;
    for (let link of chain) {
      if (link.length < 1) {
        throw "bad getPathChildren; malformed.";
      }
      if (!destination.children) {
        throw `bad getPathChildren; ${destination.path} has no children.`;
      }
      if (!destination.children[link]) {
        throw `bad getPathChildren; ${destination.path} does not have ${link}.`;
      }
      destination = destination.children[link];
    }
    return destination.getChildren();
  }
  static fromJSON(json) {
    const obj = new TreeNode(json.path, json.key);
    if (json.pageData)
      obj.pageData = json.pageData;
    if (json.children) {
      obj.children = {};
      for (let [key2, node] of Object.entries(json.children)) {
        obj.children[key2] = TreeNode.fromJSON(node);
      }
    }
    return obj;
  }
  static setWebBase(base2) {
    TreeNode.webBase = base2;
  }
}
TreeNode.setWebBase(base);
const pagetree = TreeNode.fromJSON(data);
console.log(pagetree);
const Navbar_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div1;
  let div0;
  let each_value_1 = ensure_array_like(
    /*main*/
    ctx[3].getChildren()
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children$1(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children$1(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "dropdown-onload-wrapper svelte-1d95zvm");
      attr(div1, "class", "dropdown-content svelte-1d95zvm");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*isActive*/
      1) {
        each_value_1 = ensure_array_like(
          /*main*/
          ctx2[3].getChildren()
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let a;
  let span;
  let t0_value = (
    /*sub*/
    ctx[6].pageData.title + ""
  );
  let t0;
  let t1;
  return {
    c() {
      a = element("a");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children$1(a);
      span = claim_element(a_nodes, "SPAN", { class: true });
      var span_nodes = children$1(span);
      t0 = claim_text(span_nodes, t0_value);
      span_nodes.forEach(detach);
      t1 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "svelte-1d95zvm");
      attr(
        a,
        "href",
        /*sub*/
        ctx[6].webPath
      );
      attr(a, "class", "svelte-1d95zvm");
      toggle_class(
        a,
        "active",
        /*isActive*/
        ctx[0](`${/*sub*/
        ctx[6].webPath}`)
      );
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, span);
      append_hydration(span, t0);
      append_hydration(a, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(a);
      }
    }
  };
}
function create_each_block(ctx) {
  let div1;
  let div0;
  let a;
  let t0_value = (
    /*main*/
    ctx[3].pageData.title + ""
  );
  let t0;
  let t1;
  let show_if = (
    /*main*/
    ctx[3].getChildren()
  );
  let t2;
  let if_block = show_if && create_if_block(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children$1(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children$1(div0);
      a = claim_element(div0_nodes, "A", { href: true, class: true });
      var a_nodes = children$1(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block)
        if_block.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*main*/
        ctx[3].webPath
      );
      attr(a, "class", "svelte-1d95zvm");
      attr(div0, "class", "svelte-1d95zvm");
      toggle_class(div0, "dropdown-head", true);
      toggle_class(
        div0,
        "active",
        /*isActive*/
        ctx[0](
          /*main*/
          ctx[3].webPath
        )
      );
      attr(div1, "class", "dropdown svelte-1d95zvm");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, t0);
      append_hydration(div1, t1);
      if (if_block)
        if_block.m(div1, null);
      append_hydration(div1, t2);
    },
    p(ctx2, dirty) {
      if (show_if)
        if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_fragment$1(ctx) {
  let nav;
  let div2;
  let textContent = `<div class="home-wrapper svelte-1d95zvm"><span class="svelte-1d95zvm">FAST&#39;S CODE CREATIONS</span> <div class="minecraftsplash svelte-1d95zvm">Now with Svelte!</div></div>`;
  let t3;
  let div7;
  let div6;
  let textContent_1 = `<div class="dropdown-head svelte-1d95zvm"><span class="svelte-1d95zvm">Links</span></div> <div class="dropdown-content svelte-1d95zvm"><div class="dropdown-onload-wrapper svelte-1d95zvm"><a href="https://discord.com/users/276913653230469122/" target="_blank" class="svelte-1d95zvm"><img src="${base}/assets/icons/discord.svg" class="icon svelte-1d95zvm" alt=""/> <span class="svelte-1d95zvm">Discord</span></a> <a href="https://github.com/Fasteroid/" target="_blank" class="svelte-1d95zvm"><img src="${base}/assets/icons/github.svg" class="icon svelte-1d95zvm" alt=""/> <span class="svelte-1d95zvm">Github</span></a></div></div>`;
  let t11;
  let each_value = ensure_array_like(pagetree.getChildren());
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      nav = element("nav");
      div2 = element("div");
      div2.innerHTML = textContent;
      t3 = space();
      div7 = element("div");
      div6 = element("div");
      div6.innerHTML = textContent_1;
      t11 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children$1(nav);
      div2 = claim_element(nav_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-1s6thel")
        div2.innerHTML = textContent;
      t3 = claim_space(nav_nodes);
      div7 = claim_element(nav_nodes, "DIV", { class: true });
      var div7_nodes = children$1(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div6) !== "svelte-1tp0efu")
        div6.innerHTML = textContent_1;
      t11 = claim_space(div7_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div7_nodes);
      }
      div7_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div2, "class", "home svelte-1d95zvm");
      attr(div6, "class", "dropdown svelte-1d95zvm");
      attr(div7, "class", "pages svelte-1d95zvm");
      attr(nav, "class", "svelte-1d95zvm");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, div2);
      append_hydration(nav, t3);
      append_hydration(nav, div7);
      append_hydration(div7, div6);
      append_hydration(div7, t11);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div7, null);
        }
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*isActive*/
      1) {
        each_value = ensure_array_like(pagetree.getChildren());
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div7, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(nav);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(1, $page = $$value));
  const currentPage = $page.url.pathname;
  function isActive(page2) {
    return currentPage.startsWith(page2);
  }
  return [isActive];
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
