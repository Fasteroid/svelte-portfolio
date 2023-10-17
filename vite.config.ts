import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: "es2022",
		minify: false,
	},
	esbuild: {
		supported: {
			'top-level-await': true
		},
	},
	plugins: [sveltekit()]
});
