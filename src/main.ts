/*
 * @Author: Lee
 * @Date: 2022-06-11 00:48:26
 * @LastEditors: Lee
 * @LastEditTime: 2022-06-11 01:10:37
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./utils/rem";
import "./index.css";
const app = createApp(App);
app.use(router);
app.mount("#app");