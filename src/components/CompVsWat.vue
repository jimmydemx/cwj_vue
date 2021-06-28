<template>
 <div>

    <!-- computed -->
        <div>Fullname:{{fullname}}</div>
        <button @click="changefirstname">click</button>
        <div>counter={{counter}}</div>
        <input type="text" v-model="lastname"/>
    <!-- computed -->

    <!-- Watch  -->
    <p>please input age:<input type="text" v-model="age"/></p>
    <!-- deep watch : uncomment below and comment above -->
    <!-- <p>please input age:<input type="text" v-model="age.num"/></p> -->
    <p>BasicInfo:{{BasicInfo}}</p>

    <!-- Watch  -->
</div>
</template>

<script>
export default {
    data(){
        return{
            firstname:"Some",
            lastname:"One",
            counter:"0",
            age:"",
            //deep watch : uncomment below and comment above//
            // age:{
            //     num:""
            // },
            BasicInfo:""
        }
    },

    computed:{
        fullname:{
            get: function(){
            this.counter++
            return this.firstname+" "+ this.lastname
             },
            set: function(fname){
                return console.log("set fullname")

            }
        }

    },
    methods:{
        changefirstname(){
            this.firstname="john"
            // to test set can uncomment below  
            //this.fullname="john mayer"

        }    
    },
    watch:{
        age:{
            handler(newVal,oldVal){

            this.BasicInfo="the age of "+this.fullname+" is: "+newVal 
            
            // deep watch: uncomment below and comment above
            //  this.BasicInfo="the age of "+this.fullname+" is: "+newVal.num
            },
            immediate:true,
            // deep:true
            
        }
    }

}
</script>

<style>

</style>