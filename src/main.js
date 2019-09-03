import Vue from 'vue'
import App from './App.vue'
//import Vuex from 'vuex'
//import store from './store.js'

//Vue.use(Vuex)
Vue.config.productionTip = false
//const vueStore = new Vuex.Store(store)

new Vue({
   // store:vueStore,
    render: h => h(App),
}).$mount('#app')

