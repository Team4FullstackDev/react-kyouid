import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	const config = {
		plugins: [react()],
		server: {
			port: 5173,
			cors: true,
			proxy: {
				'/v1': {
					target: process.env.VITE_BACKEND_BASE_URL,
					changeOrigin: true,
					secure: false,
					rewrite: (path) => path.replace(/^\/api/, '/v1'),
				},
			},
		},
	};
	return defineConfig(config);
};
