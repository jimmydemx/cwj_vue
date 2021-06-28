<template>
  <div>
        <!-- <p>{{form.rules}}</p> -->
      <!-- label -->
      <label v-if="label">{{label}}</label>
      <slot></slot>
    
      <!-- display verification info. -->
        <p v-if="error">{{error}}</p>
        
      
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject:["form"],
    mounted(){

        this.$on("valid",()=>{

            this.validate()


        })

    },
    data(){
        return{
            error:"" //no error means verified.

        }


    },
    props:{
        label:{
            type:String,
            default:""
        },
        prop:{
            type:String
        }

    },
    methods:{
        validate(){

            
            const rules=this.form.rules[this.prop]

            const value=this.form.model[this.prop]

            const desc={
                [this.prop]:rules
            }

            const schema=new Schema(desc)
            return schema.validate({[this.prop]:value},errors=>{
                if(errors){
                    
                    this.error=errors[0].message
                }else{
                    this.error=""
                    
                    }

            })

            
        }


    }

}
</script>

<style>

</style>