import { createStore } from 'vuex'
export default createStore({
    state: {
        navShow: true
    },
    mutations: {
        setNavShow(state,payload:boolean) {
            state.navShow = payload
        }
    },
    actions: {

    },
    modules: {
        
    }
})