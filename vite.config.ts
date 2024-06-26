import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['static']
		}
	},
	assetsInclude: ['**/*.gltf', '**/*.glb'], // Include both .gltf and .glb files
	build: {
		chunkSizeWarningLimit: 1000 // Increase limit if necessary
	}
});