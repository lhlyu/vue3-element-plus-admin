import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import PluginVueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginVueSetupName from 'vite-plugin-vue-setup-name'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, './config')
    return {
        base: env.VITE_BUILD_BASE,
        plugins: [
            vue(),
            PluginVueJsx(),
            VitePluginVueSetupName({
                dirs: ['./src/views'],
                strategy: 'dir'
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            }),
            ElementPlus()
        ],
        envDir: './config',
        build: {
            target: 'es2015',
            cssTarget: 'chrome61'
        }
    }
})
