import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import removeConsole from 'vite-plugin-remove-console'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import svgr from 'vite-plugin-svgr'
import { cloudflare } from 'unenv'

export default defineConfig({
	tsr: {
		appDirectory: 'src',
	},
	// if don't want to use cloudflare, use this setting instead
	// server: {
	// 	preset: 'node-server',
	// },
	server: {
		preset: 'cloudflare-pages',
		unenv: cloudflare,
	},
	vite: {
		plugins: [
			removeConsole(),
			svgr(),
			ViteImageOptimizer(),
			tsConfigPaths({
				projects: ['./tsconfig.json'],
			}),
		],
	},
})
