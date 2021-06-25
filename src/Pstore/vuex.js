var Vue

class Store{
    constructor(options){
        this.$options=options

        this.state=new Vue({
            data:options.state
        })
        this.commit=this.commit.bind(this)
        this.dispatch=this.dispatch.bind(this)
     
    }

    commit(a,payload){
       var type= this.$options.mutations[a]
      
       if(type){
       type(this.state,payload)

       }
    }   

    // dispatch("asy_add"). return value Promise,
    dispatch(a,payload){
       var _actions=this.$options.actions[a]
       if(_actions){
           return Promise.resolve(_actions(this,payload))
       }


    }

    
   
            
     


}




function install(_Vue){
    
    Vue=_Vue
// mixin + hooks
    Vue.mixin({
        beforeCreate(){
            // this in minin refer to each component itself
            if(this.$options.store){
            Vue.prototype.$store=this.$options.store
            }
        }

    })

}



export default {
    install,
    Store

}