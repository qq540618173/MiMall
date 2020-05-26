<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
// import storage from './storage'

export default {
	name: 'App',
	components: {

	},
	data() {
		return{
			res: {}
		}
	},
	mounted(){
		// storage.setItem('avc', {"firstName":'wang'}, 'user')
		// // storage.clear('sex', 'user')

		// this.axios.get('/user/login').then((res) => {
		// 	console.log(res)
		// 	this.res = res
		// })
	}
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
