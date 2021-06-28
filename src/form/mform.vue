<template>
  <div>
      <slot></slot>

  </div>
</template>

<script>
export default {
    provide(){
        return {
            form:this
            } 
        },
    props:{
            model:{
                type:Object,
                required:true

            },
            rules:{
                type:Object
            }

    },
    methods:{
        validate(cb){

            const tasks=this.$children.map(item=>item.validate());
            console.log(tasks)
            Promise.all(tasks).then(()=>cb(true)).catch(()=>cb(false))




            
        }



    }
}
</script>

<style>

</style>