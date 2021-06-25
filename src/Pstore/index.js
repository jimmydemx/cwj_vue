import Vue from 'vue'
import Vuex from './vuex'


//fact1: plugin, Vuex.install(Vue)
// fact2: Vuex.store class/constructor
// fact3: recieve state, mutations....
// fact4 : in every component, it has this.$store? minxin beforecreate prototype
// fact 5: commit method in the instance call be in Store.prototype
// fact 6: state is reactive  , everthing in data of new Vue is reactive
Vue.use(Vuex)
//Vuex.install(Vue)

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
    asy_add({commit}){
        setTimeout(()=>{
          
          commit("add")
        },1000)
      
    } 
    
  },
  modules: {
  }
})
