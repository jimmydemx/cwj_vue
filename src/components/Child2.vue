<template>
  <div>
      <h3 v-on="$listeners">child2</h3>
      <button @click="Onclick2">Send M to child1</button>
      <h1>{{this.$attrs.msg}}</h1>
      
      
  </div>
</template>

<script> 
export default {
       

        methods:{

        Onclick2(){
            console.log(this)
            this.$parent.$emit("sendfromchild1",1)
            


        },
        good(){

            console.log("good day")
        },
        

    }
}
</script>

<style>

</style>