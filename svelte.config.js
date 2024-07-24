// @ts-check

import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>'],
			},
			platformProxy: {
				persist: {
					path: './.wrangler/platform-proxy/v3',
				},
			},
		}),
		output: {
			preloadStrategy: 'preload-mjs',
		},
	},
};

export default config;
