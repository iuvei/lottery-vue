import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './component/app.vue'
import store from './store/index'
Vue.config.productionTip = false //生产环境请用true
Vue.use(Vuex)
Vue.use(VueAxios, axios)
new Vue({
    el:'#app',
    router,
    store,
    template:'<App/>',
    components:{App}
})