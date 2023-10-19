import { s as safe_not_equal, c as component_subscribe, f as src_url_equal } from "./scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, r as create_component, s as space, h as claim_element, j as children, u as claim_component, c as claim_space, f as detach, k as attr, a as insert_hydration, y as append_hydration, v as mount_component, d as transition_in, t as transition_out, w as destroy_component, z as destroy_each, m as text, n as claim_text, o as set_data } from "./index.050cbb3d.js";
import { e as ensure_array_like, p as pagetree } from "./pagetree.f4585da8.js";
import { p as page } from "./stores.866f2904.js";
import { b as base } from "./paths.67dd4984.js";
import { B as BackgroundTitle } from "./BackgroundTitle.347c0d56.js";
const ProjectCollection_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let a;
  let img;
  let img_src_value;
  let t0;
  let div;
  let t1_value = (
    /*node*/
    ctx[4].pageData?.title + ""
  );
  let t1;
  let t2;
  let a_href_value;
  return {
    c() {
      a = element("a");
      img = element("img");
      t0 = space();
      div = element("div");
      t1 = text(t1_value);
      t2 = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(a_nodes);
      div = claim_element(a_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t1 = claim_text(div_nodes, t1_value);
      div_nodes.forEach(detach);
      t2 = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*sanitizeThumbnail*/
      ctx[2](
        /*node*/
        ctx[4].pageData?.thumbnail
      )))
        attr(img, "src", img_src_value);
      attr(img, "alt", "thumbnail");
      attr(img, "class", "svelte-13xsfzz");
      attr(div, "class", "project-title svelte-13xsfzz");
      attr(a, "href", a_href_value = /*node*/
      ctx[4].webPath);
      attr(a, "class", "svelte-13xsfzz");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, img);
      append_hydration(a, t0);
      append_hydration(a, div);
      append_hydration(div, t1);
      append_hydration(a, t2);
    },
    p(ctx2, dirty) {
      if (dirty & /*topic*/
      1 && !src_url_equal(img.src, img_src_value = /*sanitizeThumbnail*/
      ctx2[2](
        /*node*/
        ctx2[4].pageData?.thumbnail
      ))) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*topic*/
      1 && t1_value !== (t1_value = /*node*/
      ctx2[4].pageData?.title + ""))
        set_data(t1, t1_value);
      if (dirty & /*topic*/
      1 && a_href_value !== (a_href_value = /*node*/
      ctx2[4].webPath)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(a);
      }
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let section1;
  let backgroundtitle;
  let t;
  let section0;
  let div0;
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
  let each_value = ensure_array_like(pagetree.getChildrenAtPath(`/${/*topic*/
  ctx[0]}`));
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div1 = element("div");
      section1 = element("section");
      create_component(backgroundtitle.$$.fragment);
      t = space();
      section0 = element("section");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      section1 = claim_element(div1_nodes, "SECTION", {});
      var section1_nodes = children(section1);
      claim_component(backgroundtitle.$$.fragment, section1_nodes);
      t = claim_space(section1_nodes);
      section0 = claim_element(section1_nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      div0 = claim_element(section0_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      section0_nodes.forEach(detach);
      section1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "project-shelf svelte-13xsfzz");
      attr(section0, "class", "no-background");
      attr(div1, "class", "margins");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, section1);
      mount_component(backgroundtitle, section1, null);
      append_hydration(section1, t);
      append_hydration(section1, section0);
      append_hydration(section0, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
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
      if (dirty & /*topic, sanitizeThumbnail*/
      5) {
        each_value = ensure_array_like(pagetree.getChildrenAtPath(`/${/*topic*/
        ctx2[0]}`));
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
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
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let pageData;
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(3, $page = $$value));
  let { topic } = $$props;
  function sanitizeThumbnail(thumb) {
    return `assets/${thumb ? `${topic}/${thumb}` : "placeholder.png"}`;
  }
  $$self.$$set = ($$props2) => {
    if ("topic" in $$props2)
      $$invalidate(0, topic = $$props2.topic);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$page*/
    8) {
      $$invalidate(1, pageData = $page.data);
    }
  };
  return [topic, pageData, sanitizeThumbnail, $page];
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
