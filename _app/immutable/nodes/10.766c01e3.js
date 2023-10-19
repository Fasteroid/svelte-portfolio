import { l as load$1 } from "../chunks/_page.64553d50.js";
import { d as defineData } from "../chunks/pagedata.f846d81a.js";
import { s as safe_not_equal, n as noop, b as binding_callbacks } from "../chunks/scheduler.e97e8672.js";
import { S as SvelteComponent, i as init, g as element, s as space, B as head_selector, h as claim_element, x as get_svelte_dataset, f as detach, c as claim_space, k as attr, y as append_hydration, a as insert_hydration, r as create_component, j as children, u as claim_component, l as set_style, v as mount_component, d as transition_in, t as transition_out, w as destroy_component } from "../chunks/index.050cbb3d.js";
import { b as base } from "../chunks/paths.67dd4984.js";
import { B as BackgroundTitle } from "../chunks/BackgroundTitle.347c0d56.js";
const load = defineData(load$1, {
  title: "Plate Cutter",
  thumbnail: "platecutter.png"
});
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
const ignoreTagsPreproc = /(\<.*?\>.*?\<.*?\>)/.source;
let replaceIgnoreTags = function replaceIgnoreTags2(text, innerRegex, replace) {
  let matcher = new RegExp(`${ignoreTagsPreproc}|${innerRegex.source}`, "g");
  return text.replace(matcher, function() {
    let shiftedArguments = [...arguments].slice(2, arguments.length - 2);
    if (!arguments[1]) {
      return replace.call(globalThis, ...shiftedArguments);
    } else {
      return arguments[0];
    }
  });
};
const E2SyntaxHighlighter = {
  isLetter(txt) {
    return txt.toUpperCase() != txt.toLowerCase() || txt == "_";
  },
  isUppercase(txt) {
    return txt.toUpperCase() == txt && txt.toLowerCase() != txt;
  },
  isLowercase(txt) {
    return txt.toUpperCase() != txt && txt.toLowerCase() == txt;
  },
  isNumber(txt) {
    return !isNaN(parseInt(txt));
  },
  types: [
    "entity",
    "quaternion",
    "angle",
    "vector2",
    "vector4",
    "number",
    "bone",
    "array",
    "table",
    "ranger",
    "string",
    "vector",
    "matrix"
  ],
  // symbol, highlightWholeLine
  directives: {
    "@name": true,
    "@inputs": false,
    "@outputs": false,
    "@persist": false,
    "@trigger": true,
    "@model": true,
    "@strict": true
  },
  keywords: [
    "for",
    "if",
    "while",
    "else",
    "break",
    "local",
    "function",
    "continue",
    "return",
    "try",
    "throw",
    "catch",
    "event"
  ],
  highlightTypes(txt) {
    for (const type of this.types) {
      let matcher = new RegExp(`([,:])${type}([\\]\\s\\),])`, "gm");
      txt = txt.replace(matcher, `$1<e2type>${type}</e2type>$2`);
      matcher = new RegExp(`(function\\s*?)${type}(\\s)`, "gm");
      txt = txt.replace(matcher, `$1<e2type>${type}</e2type>$2`);
      matcher = new RegExp(`(function\\s*?.*?)${type}(:)`, "gm");
      txt = txt.replace(matcher, `$1<e2type>${type}</e2type>$2`);
    }
    return txt;
  },
  highlightDirectives(txt) {
    for (const [dir, wholeLine] of Object.entries(this.directives)) {
      if (wholeLine) {
        let matcher = new RegExp(`(^|
)(${dir}.*?)(
)`, "gm");
        txt = replaceIgnoreTags(txt, matcher, (a, b, c) => `${a}<e2dir>${b}</e2dir>${c}`);
      } else {
        txt = txt.replaceAll(dir, `<e2dir>${dir}</e2dir>`);
      }
    }
    return txt;
  },
  highlightStringsAndComments(txt) {
    const explodedtext = txt.split("");
    let len = explodedtext.length;
    let comment = false;
    let inside = false;
    let escape = false;
    for (let t = 0; t < len; t++) {
      let entry = explodedtext[t];
      if (!inside && !comment && entry == "#" && txt.substr(t, 8) != "#include" && explodedtext[t + 1] != "[" && explodedtext[t - 1] != "]") {
        comment = true;
        explodedtext[t] = `<e2comment>${entry}`;
      }
      if (comment && entry == "\n") {
        comment = false;
        explodedtext[t] = `</e2comment>${entry}`;
      }
      if (escape) {
        escape = false;
        continue;
      }
      if (entry == "\\") {
        escape = true;
        continue;
      }
      if (entry == '"' && !comment) {
        inside = !inside;
        if (inside) {
          entry = `<e2string>${entry}`;
        } else {
          entry = `${entry}</e2string>`;
        }
        explodedtext[t] = entry;
      }
    }
    txt = explodedtext.join("");
    txt = replaceIgnoreTags(txt, /(#include)/, () => "<e2key>#include</e2key>");
    txt = txt.replaceAll("#[", "<e2comment>#[");
    txt = txt.replaceAll("]#", "]#</e2comment>");
    return txt;
  },
  highlightMulti(txt) {
    const explodedtext = txt.split("");
    let len = explodedtext.length;
    let stage = 0;
    let infunction = 0;
    let ready = false;
    for (let t = 0; t < len; t++) {
      let entry = explodedtext[t];
      if (stage == 0 && entry == "<") {
        stage++;
      }
      if (stage == 1 && entry == ">") {
        stage++;
      }
      if (stage == 2 && entry == "<") {
        stage++;
      }
      if (stage == 3 && entry == ">") {
        stage = 0;
        ready = false;
      }
      if (infunction == 0) {
        if (this.isLowercase(entry) && stage == 0 && ready) {
          infunction = 1;
          entry = "<e2func>" + entry;
        }
        if (this.isNumber(entry) && stage == 0 && ready) {
          infunction = 2;
          entry = "<e2num>" + entry;
        }
      } else if (!this.isLetter(entry) && !this.isNumber(entry)) {
        if (infunction == 1) {
          entry = "</e2func>" + entry;
        } else if (infunction == 2) {
          entry = "</e2num>" + entry;
        }
        infunction = 0;
      }
      explodedtext[t] = entry;
      ready = true;
    }
    return explodedtext.join("");
  },
  highlightVariables(txt) {
    let stage = 0;
    let explodedtext = txt.split("");
    let len = explodedtext.length;
    let insideVariable = false;
    let outsideVariable = false;
    let prevInside = false;
    let ready = false;
    for (let t = 0; t < len; t++) {
      let entry = explodedtext[t];
      if (stage == 0 && entry == "<") {
        ready = true;
        stage++;
      }
      if (stage == 1 && entry == ">") {
        stage++;
      }
      if (stage == 2 && entry == "<") {
        stage++;
      }
      if (stage == 3 && entry == ">") {
        stage = 0;
        ready = false;
      }
      if (stage == 0 && ready) {
        prevInside = insideVariable;
        if (!insideVariable) {
          if (this.isLowercase(entry)) {
            outsideVariable = true;
          }
          if (!this.isLetter(entry)) {
            outsideVariable = false;
          }
        }
        if (!outsideVariable) {
          if (this.isUppercase(entry)) {
            insideVariable = true;
          }
          if (!this.isLetter(entry) && !this.isNumber(entry)) {
            insideVariable = false;
          }
        }
        if (insideVariable != prevInside) {
          if (!prevInside) {
            entry = "<e2var>" + entry;
          }
          if (prevInside) {
            entry = "</e2var>" + entry;
          }
        }
      } else if (stage == 1 && ready) {
        if (insideVariable) {
          entry = "</e2var>" + entry;
        }
        prevInside = false;
        insideVariable = false;
      }
      explodedtext[t] = entry;
      ready = stage == 0;
    }
    txt = explodedtext.join("");
    return txt;
  },
  highlightKeywords(txt) {
    txt = replaceIgnoreTags(txt, /foreach/, () => "___FOREACH");
    for (const keyword of this.keywords) {
      txt = replaceIgnoreTags(txt, new RegExp(keyword), () => `<e2key>${keyword}</e2key>`);
    }
    txt = txt.replaceAll("___FOREACH", "<e2key>foreach</e2key>");
    return txt;
  }
};
function applySyntaxHighlight(elem) {
  let txt = elem.innerText;
  txt = txt.replaceAll("<", "က");
  txt = txt.replaceAll(">", "ခ");
  txt = E2SyntaxHighlighter.highlightDirectives(txt);
  txt = E2SyntaxHighlighter.highlightStringsAndComments(txt);
  txt = E2SyntaxHighlighter.highlightTypes(txt);
  txt = E2SyntaxHighlighter.highlightVariables(txt);
  txt = E2SyntaxHighlighter.highlightKeywords(txt);
  txt = E2SyntaxHighlighter.highlightMulti(txt);
  txt = txt.replaceAll("က", "&lt;");
  txt = txt.replaceAll("ခ", "&gt;");
  elem.innerHTML = txt;
}
function create_fragment$1(ctx) {
  let style;
  let textContent = "e2key {\n  color: #a0f0f0;\n}\n\ne2var {\n  color: #a0f0a0;\n}\n\ne2type {\n  color: #f0a060;\n}\n\ne2dir {\n  color: #f0f0a0;\n}\n\ne2func {\n  color: #a0a0f0;\n}\n\ne2string {\n  color: #a0a0a0;\n}\n\ne2num {\n  color: #f0a0a0;\n}\n\n/* I'm too lazy to fix my syntax highlighter, so we're doing this for now. */\ne2comment {\n  color: #6b6b6b;\n}\n\ne2comment * {\n  color: #6b6b6b !important;\n}\n\nsection.code-container {\n  background-color: black;\n  margin: 15px;\n  line-height: 130%;\n  overflow: scroll;\n  max-height: 70vh;\n  font-size: 10pt;\n  outline: 10px solid black;\n  outline-offset: -10px;\n  word-wrap: break-word;\n  white-space: pre;\n  word-spacing: normal;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\nsection.code-container::-webkit-scrollbar {\n  display: none;\n}";
  let t1;
  let section;
  let textContent_1 = ``;
  return {
    c() {
      style = element("style");
      style.textContent = textContent;
      t1 = space();
      section = element("section");
      section.innerHTML = textContent_1;
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-nrfafs", document.head);
      style = claim_element(head_nodes, "STYLE", { lang: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(style) !== "svelte-1bdex6x")
        style.textContent = textContent;
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(section) !== "svelte-i0dh31")
        section.innerHTML = textContent_1;
      this.h();
    },
    h() {
      attr(style, "lang", "scss");
      attr(section, "class", "code-container");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, section, anchor);
      ctx[2](section);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(t1);
        detach(section);
      }
      detach(style);
      ctx[2](null);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { source } = $$props;
  let box;
  console.log(source);
  async function loadE2Code() {
    let resp = await fetch(source);
    let data = await resp.text();
    $$invalidate(0, box.innerText = data, box);
    applySyntaxHighlight(box);
  }
  {
    loadE2Code();
  }
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      box = $$value;
      $$invalidate(0, box);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("source" in $$props2)
      $$invalidate(1, source = $$props2.source);
  };
  return [box, source, section_binding];
}
class ExpressionBox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { source: 1 });
  }
}
function create_fragment(ctx) {
  let div;
  let section1;
  let backgroundtitle;
  let t0;
  let section0;
  let textContent = `<img src="${base}/assets/expression2/platecutter/usage.jpg" style="float:left; max-height: 306pt; margin-left: 0px;" alt="A player preparing to split a 1x2 plate into two 1x1 plates"/>
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
  let current;
  backgroundtitle = new BackgroundTitle({
    props: {
      title: "Gmod Plate Cutting Tool",
      background: base + "/assets/expression2/platecutter/banner.jpg"
    }
  });
  expressionbox = new ExpressionBox({
    props: {
      source: "https://raw.githubusercontent.com/Fasteroid/expression2-public/master/plate_cutter_util/gmod_plate_cutter.txt"
    }
  });
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
      if (get_svelte_dataset(section0) !== "svelte-d7zfr2")
        section0.innerHTML = textContent;
      t12 = claim_space(section1_nodes);
      claim_component(expressionbox.$$.fragment, section1_nodes);
      section1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section0, "class", "extra-space");
      set_style(section0, "min-height", "306pt");
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
