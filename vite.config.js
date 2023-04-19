import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode,command })=> {
  console.log( mode,command );
  const prodMock = true
 return defineConfig({
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 8066,
      host: '0.0.0.0',
      open: true
      // proxy: { // 代理配置
      //   '/dev': 'https://www.fastmock.site/mock/48cab8545e64d93ff9ba66a87ad04f6b/',
      //   '/demo/': 'https://api.vxetable.cn/demo/'
      // }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 自定义主题变量
          additionalData: `@use "@/styles/theme-element.scss" as *;` 
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],
      }),
      viteMockServe({
        // mockPath: "mock",
        // logger: true,
        // watchFiles: true,
        // localEnabled: command === 'serve',
        // prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
    ],
   
  })
}