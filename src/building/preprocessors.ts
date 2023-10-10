import type { PreprocessorGroup } from 'svelte/compiler';
import { wtf } from './treebuilder';

/* 
	This custom preprocessor replaces doublespace.js from the old site.
	It pretty much does the same thing, but now it doesn't burden the client!
*/
const doublespace: PreprocessorGroup = {
	markup({content, filename}) {
		if( filename!.match(/\/routes\/.*?\+.*?\.svelte/) && content.match(/<body>/) ){
			content = content.replaceAll('.  ','.&nbsp; ');
			content = content.replaceAll('!  ','!&nbsp; ');
			content = content.replaceAll('?  ','?&nbsp; ');
			content = content.replaceAll('—','<span class="emdash">—</span>');
			return { code: content }
		}
	}
}

const debug: PreprocessorGroup = {
    script({content, filename}) {
        if(filename?.endsWith("Navbar.svelte")){
            console.log("script: ", filename, content)
        }
    }, 
}

export const preprocessors: PreprocessorGroup[] = [
    doublespace,
    debug
]