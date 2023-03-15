import { defineConfig } from 'vite'

const isCI = process.env['CI'] === 'true'

export default defineConfig({
	cacheDir: '../../node_modules/.vite/proxy',

	test: {
		environment: 'miniflare',
		environmentOptions: {
			modules: true,
			scriptPath: './src/index.js',
			mounts: {
				api: {
					rootPath: '../api',
				},
			},
		},
		watch: false,
		cache: {
			dir: '../../node_modules/.vitest',
		},
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		silent: isCI,
		reporters: isCI ? 'tap' : 'default',
		coverage: {
			clean: true,
			enabled: isCI,
			reporter: isCI ? ['lcov', 'json-summary', 'text-summary'] : 'text',
		},
	},
})