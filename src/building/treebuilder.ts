
import * as fs from 'fs'
import { load } from 'ts-import'

import { TreeNode } from '../lib/treelib';
import type { FullPageData } from '../lib/pagedata';

type PageOptions = { load: (() => FullPageData) }
type TreeFileHandler = (file: fs.Dirent, node: TreeNode) => Promise<void>

function toDir(p: string): string {
    return `./src${p}`
}

function toModule(p: string): string {
    return `./src${p}`
}

const fileHandlers: {[key: string]: TreeFileHandler | undefined} = {

    ["+page.ts"]: async (file, node) => {
        const importPath = toModule(`${node.path}/${file.name}`)
        console.log(importPath)
        let options: PageOptions;
        try {
            options = await load( /* @vite-ignore */ importPath);
        }
        catch(e){
            console.warn("bad auto-import: " + importPath + "\n\n" + e)
            return;
        }
        const data: FullPageData = options.load();
        node.pageData = data;
    }

}

async function buildPageTree(node: TreeNode = new TreeNode("","")){
    const dirents = fs.readdirSync(
        toDir(node.path), 
        {withFileTypes: true}
    );
    for( const ent of dirents ){
        if( ent.isFile() ){
            let handler = fileHandlers[ent.name];
            if( handler ) await handler(ent, node);
        }
        else if( ent.isDirectory() ){
            await buildPageTree( node.getChild(ent.name) )
        }
    }
    return node;
}

const tree = await buildPageTree();
const what = JSON.stringify(tree)
//const whar = JSON.parse(what, (k, v) => {console.log(k, v)})

export let wtf = 1;
