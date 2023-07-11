import path from 'path'
import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(() => {
    return {
        base: './',
        plugins: [viteImagemin() /* viteCompression({ deleteOriginFile: true }) */],
        server: {
            open: true,
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            },
        },
    }
})
