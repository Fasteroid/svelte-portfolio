const prerender = true;
const ssr = true;
let title = "Fast's Code Creations";
function load() {
  return {
    titlePath: [title],
    title
  };
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
export {
  _layout as _,
  load as l
};
