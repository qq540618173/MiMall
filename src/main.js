import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import store from './store'
// import env from './env'

import App from './App.vue'

const mock = false;
if(mock){
	require('./mock/api')
}

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL

// 超时时间
axios.defaults.timeout = 8000

/**
 * 请求拦截
 */
// axios.interceptors.request.use(() => {

// })

/**
 * 响应拦截
 */
axios.interceptors.response.use((response) => {
	let res = response.data
	if(res.status === 0){
		return res.data
	} else if(res.status === 10){
		//未登录
		let path = location.hash;
		if(path != '#/index') {
			window.location.href = '/#/login'
		}
		return Promise.reject(res);
	} else {
		Message.error(res.msg)
		return Promise.reject(res);
	}
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
	loading: require('./assets/imgs/loading-svg/loading-bars.svg')
})
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
