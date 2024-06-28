import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
 plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': '#00BEB0', // 修改为绿色，可以根据需要修改颜色值
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'extension',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/[name].js',
        entryFileNames: 'static/[name].js',
        assetFileNames: 'static/[name].[ext]',
      },
    },
  },
  server: {
    port: 3000, // 设置开发服务器端口
    proxy: {
      // 配置代理
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
