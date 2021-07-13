import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    build: {
        polyfillDynamicImport: true,
        minify: false
    }
});
