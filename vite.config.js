import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import zipPack from 'vite-plugin-zip-pack';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import devServer from './config/devServer';

function createProxyConfig(origin, mode) {
  const proxyConfig = {};
  Object.entries(origin).forEach(([key, value]) => {
    proxyConfig[key] = {
      target: value[mode],
      changeOrigin: true,
    };
    if (value.rewrite) {
      proxyConfig[key].rewrite = value.rewrite;
    }
  });

  return proxyConfig;
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const envDir = resolve(__dirname, 'config');
  const env = loadEnv(mode, envDir, 'VITE');

  return {
    base: env.VITE_BASE_URL,
    envDir,
    server: {
      open: true,
      host: devServer.host,
      port: devServer.port,
      proxy: createProxyConfig(devServer.proxy, mode),
    },
    resolve: {
      extensions: [
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
      ],
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    build: {
      target: 'es2015',
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      zipPack({
        inDir: 'dist',
        outDir: 'build',
        outFileName: 'viktor.zip',
        pathPrefix: 'viktor/',
      }),
    ],
  };
});
