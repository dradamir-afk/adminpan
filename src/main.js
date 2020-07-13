import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Info from './components/Info.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

//  Favourite = { template: '<div>Favourite</div>' }
//  Main = { template: '<div>Main</div>' }

const routes = [
    { path: '/Info', component: Info },
    { path: '/', component: Main }
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')