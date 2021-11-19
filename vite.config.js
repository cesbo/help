import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
    build: {
        target: 'esnext',
        lib: {
            name: 'App',
            fileName: 'assets/js/app',
            entry: resolve(__dirname, 'src/main.js'),
            formats: ['umd'],
        },
        sourcemap: true,
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[ext]/[name].[ext]',
            },
        },
    },
})
