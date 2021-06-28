<template>
  <div id="app">
     <img src="./assets/logo.png"> 

  <!-- 1.Polyfill Vue Router -->
     <!-- <router-link to='/hellovue'>Hello!</router-link>
     <router-link to='/'>HelloHello!</router-link> 
     <router-view/> -->
  <!-- 1.Polyfill Vue Router -->

  <!-- 2.Communications among Components -->
    <!-- <child1 :p2c1="v1" @child1event="add"/>
    <p>V1={{v1}}</p>
    <child2 ref="hellochild2" msg="some mesg from parent" @click="parentknock"/>
    <button @click="checkitout">goodorbad</button> -->
  <!-- 2.Communications among Components -->

    <!-- 3.<tester1/> -->


    <!-- 4.form -->
    <mform/>

    <!-- 4.form -->

  <!-- 5.computed vs watch-->
    <!-- <compvswat/> -->
  <!-- 5.computed vs watch-->
  

  </div>
</template>

<script>
import tester1 from "../src/components/tester1"
import child1 from  "../src/components/Child1"
import child2 from  "../src/components/Child2"
import mform from "../src/form/index"
import compvswat from  "../src/components/CompVsWat"

export default {
  provide(){
    return{
      foo:"hello parent again"

    }
  },
  name: 'App',
  components:{tester1,child1,child2,mform,compvswat},
  data(){
    return{
      v1:123
    }
  },
  methods:{
    add(){

      this.v1++

    },
    checkitout(){

      //this.$children.find(item=>item.good).good()
      console.log(this.$children.find(item=>item.good))
      console.log("hellochild2",this.$refs.hellochild2.good())

    },
    parentknock(){
      console.log("time to sleep, child2")
    }
  }
  
 
    

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
