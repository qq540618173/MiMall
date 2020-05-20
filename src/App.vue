<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import storage from './storage'

export default {
	name: 'App',
	components: {

	},
	data() {
		return{

		}
	},
	mounted(){
		// storage.setItem('avc', {"firstName":'wang'}, 'user')
		storage.clear('sex', 'user')
	}
}
</script>

<style>

</style>
