"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(path, key) {
        this.path = path;
        this.key = key;
    }
    getChild(key) {
        if (!this._children)
            this._children = {};
        if (!this._children[key])
            this._children[key] = new TreeNode(`${this.path}/${key}`, key);
        return this._children[key];
    }
    getChildren() {
        return Object.values(this._children || {});
    }
    getChildrenAtPath(path) {
        let chain = path.split("/").slice(1);
        let destination = this;
        for (let link of chain) {
            if (link.length < 1) {
                throw "bad getPathChildren; malformed.";
            }
            if (!destination._children) {
                throw `bad getPathChildren; ${destination.path} has no children.`;
            }
            if (!destination._children[link]) {
                throw `bad getPathChildren; ${destination.path} does not have ${link}.`;
            }
            destination = destination._children[link];
        }
        return destination.getChildren();
    }
}
exports.TreeNode = TreeNode;
