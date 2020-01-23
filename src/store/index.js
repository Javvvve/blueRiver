import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{ 
        loginImg:['//betacdn.lanhuapp.com/web/33223195f85391606b370e043c690812.png','123']
    },
    getters:{
        getLoginImg(state){
            return state.loginImg
        }
    }
})

export default store