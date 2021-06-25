<template>
  <div>
     <!-- use mutation can be done only be commit(fun name) -->
   <p @click="$store.commit('add')">output:{{$store.state.counter}}</p>
    <p @click="$store.dispatch('asy_add')">asynchornous output:{{$store.state.counter}} </p>
    <!-- <p>{{$store.dispatch('asy_add')}}</p> -->
    <!-- store.dispatch->counter change->render page->sotre.dispatch -->
  </div>
</template>

<script>
export default {
  

}
</script>

<style>

</style>