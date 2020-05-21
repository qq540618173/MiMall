import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

import App from './App.vue'

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = env.baseURL
// 超时时间
axios.defaults.timeout = 8000

/**
 * 请求拦截
 */
axios.interceptors.request.use(() => {

})

/**
 * 响应拦截
 */
axios.interceptors.response.use((response) => {
	let res = response.data
	if(res.data === 0){
		return res.data
	} else if(res.status === 10){
		//未登录
		window.location.href = '/#/login'
	} else {
		alert(res.msg)
	}
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
