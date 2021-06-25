import Vue from 'vue'
import Vuex from 'vuex'

// plugin, Vuex.install(Vue)
Vue.use(Vuex)

// Vuex.Store constructor
export default new Vuex.Store({
  state: {
   counter:0
  },

  //q1: state must be the parameter of add(state)?no 
  //q2, how many parameter can be in add(a,b,c,d)? only 2
  //q3, this.state.counter++  yes |   counter++ No.
  mutations: {
    add(state){
      state.counter++
    }
    
  },
  actions: {
    // asynchronous code
    asy_add(store){
      var p
      setTimeout(()=>{
       p=store.commit("add") 
      },1000)
     
      return p

    }
    
  },
  modules: {
  }
})
