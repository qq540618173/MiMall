import Vue from 'vue'
import VueX from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(VueX)

const state = {
    username: '',
    cartCount: 0
}

export default new VueX.Store({
    state,
    mutations,
    actions
})
