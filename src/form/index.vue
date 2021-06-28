<template>
    <div>
        <mform :model="userInfo" :rules="rules" ref="loginform">
            <!--User name  -->
            <mformitem label="User Name" prop="username">
            <minput v-model="userInfo.username" placeholder="input your User Name"/>
            </mformitem>
            <!-- <p>{{userInfo.username}}</p> -->

            <!-- Password -->
            <mformitem label="Password" prop="password">
            <minput v-model="userInfo.password" placeholder="input your password" />
            </mformitem>
            <!-- <p>{{userInfo.password}}</p> -->
         </mform>
        <button @click="login">login</button> 
    </div>
</template>

<script>
import minput from './minput'
import mformitem from './mformitem'
import mform from './mform'
export default {
    components:{
        minput,
        mformitem,
        mform 
    },

    data(){
        return{
            userInfo:{
                username:"1232",
                password:'1232'
            },
            rules:{
                username:[{required: true, message:"Please Input ID"}],
                password:[{required:true, message:"password"}]

            }

        }
    },
    methods:{
        login(){

            console.log(this)
            this.$refs["loginform"].validate(valid=>{
                if(valid){
                    alert("submit")

                }else{
                    console.log("error submit!");
                    return false
                }



            })

        }




    }
}
</script>

<style>

</style>