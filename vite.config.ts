/*
 * @Author: Lee
 * @Date: 2022-06-11 00:48:26
 * @LastEditors: Lee
 * @LastEditTime: 2022-06-11 01:03:22
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [vue()]
})
