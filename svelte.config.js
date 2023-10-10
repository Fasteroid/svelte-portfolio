import adapter from '@sveltejs/adapter-static';
import { load, LoadMode } from 'ts-import'
import preprocess from 'svelte-preprocess';

/** @type {import('svelte/compiler').PreprocessorGroup[]} */
const tsPreprocessors = (await load('./src/building/preprocessors.ts',{
	mode: LoadMode.Compile,
	compiledJsExtension: ".js",
	useCache: false
})).preprocessors

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: tsPreprocessors.concat( preprocess() ),
	kit: {
		adapter: adapter({
			pages:  'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/svelte-portfolio" : "/test",
		}
	},
};

export default config;
