 
import  { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import VueRouter from 'vue-router'
const app = createApp(App)
 
console.log('999hr--',router,VueRouter);
app.use(router)
app.mount('#app') 
// app.use(router,{username:'ldks',www:'xxx'}).mount('#app') 

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index'
// // Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')