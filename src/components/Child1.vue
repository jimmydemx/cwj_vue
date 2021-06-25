<template>

<div>

    <h3 @click="c12p" >Child1</h3>
    <h3>{{p2c1}}</h3>
    <h1>{{foo}}</h1>
    
</div>

</template>

<script>
export default {
    inject:["foo"],
    props:{
        p2c1:{
            type:Number,
            required:true

        },
    
    },
    methods:{
        c12p(){
            this.$emit("child1event",[123,12])

        }

    },
    mounted(){
        this.$parent.$on("sendfromchild1",(i)=>{console.log(i*10)})


    }   
}
</script>

<style>

</style>