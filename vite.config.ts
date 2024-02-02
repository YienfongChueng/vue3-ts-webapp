import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      /**
       * 可能碰到的问题：ts找不到全局对象，报错：Cannot find name '__dirname'
       * 解决：
       * 1.在tsconfig.json 文件中添加 "node" 进 compilerOptions.types  "types": ["node"]
       * 2.安装依赖 npm i @types/node -D
       */
      "@": path.resolve(__dirname,'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/style/variable.less";'
      }
    }
  },
  // 配置自动在浏览器打开
  server: {
    open:true,
    port: 8088
  }
})
