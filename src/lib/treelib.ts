import type { FullPageData } from "./pagedata";

export class TreeNode {
    private _children?:  {[key: string]: TreeNode}
    path:       string;
    key:        string;
    pageData!:  FullPageData;

    constructor(path: string, key: string){
        this.path = path;
        this.key = key;
    }

    getChild(key: string): TreeNode {
        if( !this._children ) this._children = {};
        if( !this._children[key] ) this._children[key] = new TreeNode(`${this.path}/${key}`, key)
        return this._children[key];
    }

    getChildren(): TreeNode[] {
        return Object.values( this._children || {} )
    }

    getChildrenAtPath(path: string): TreeNode[] {
        let chain: string[] = path.split("/").slice(1)
        let destination: TreeNode = this;
        for( let link of chain ){
            if( link.length < 1 ){ throw "bad getPathChildren; malformed." }
            if( !destination._children ){ throw `bad getPathChildren; ${destination.path} has no children.` }
            if( !destination._children[link] ){ throw `bad getPathChildren; ${destination.path} does not have ${link}.` }
            destination = destination._children[link];
        }
        return destination.getChildren()
    }
}