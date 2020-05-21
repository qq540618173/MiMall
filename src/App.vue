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
		// storage.clear('sex', 'user')

		this.axios.get('/user/login').then((res) => {
			console.log(res)
			this.res = res
		})
	}
}
</script>

<style>

</style>
