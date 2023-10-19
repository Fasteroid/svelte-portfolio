import { b as base } from "./paths.f22af803.js";
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
export {
  ensure_array_like as e,
  pagetree as p
};
