import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    server: {
      host: '0.0.0.0', // 局域网别人也可访问
      port: Number(env.VITE_APP_PORT),
      // 运行时自动打开浏览器
      // open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_SERVICE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
