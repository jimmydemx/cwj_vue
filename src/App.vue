<template>
  <div id="app">
     <router-link to='/hellovue'>Hello!</router-link>
     <router-link to='/'>HelloHello!</router-link> 
    <img src="./assets/logo.png">
     
    <router-view/>
    <child1 :p2c1="v1" @child1event="add"/>
    <p>V1={{v1}}</p>
    <child2 ref="hellochild2" msg="some mesg from parent" @click="parentknock"/>
    
    <button @click="checkitout">goodorbad</button>
    <!-- <tester1/> -->

   

  </div>
</template>

<script>
import tester1 from "../src/components/tester1"
import child1 from  "../src/components/Child1"
import child2 from  "../src/components/Child2"

export default {
  provide(){
    return{
      foo:"hello parent again"

    }
  },
  name: 'App',
  components:{tester1,child1,child2},
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
