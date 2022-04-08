import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [pugPlugin(), viteCompression()],
})