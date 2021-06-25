var _Vue
class Router{

    constructor(options){
        this.$options=options
        _Vue.util.defineReactive(this,"current","/")
       
        window.addEventListener('hashchange',()=>{
            console.log(window.location.hash)
            this.current= window.location.hash.slice(1)

        })

 




    }
        
}



Router.install=function(Vue){
    _Vue=Vue
    Vue.mixin({
        beforeCreate(){
            //console.log(this)
        }

    })

    
    Vue.component("router-link",{
        props:{
            to:{
                type:String,
                required:true
            }
        },
        render(h){
            // <router-link :to="/xxx">hello!</router-link>
            // <a href="#/hellovue">hello!</a>
            // h(tag, data, children)
            
            //console.log(this.$slots)
            //console.log(h("a",{attrs:{href: "#"+this.to}},this.$slots.default) )
            return h("a",{attrs:{href: "#"+this.to}},this.$slots.default)    

        }


    })
    Vue.component("router-view",{

        render(h){
            var component=null;
            if(this.$root.$options.router.$options.routes){
                //console.log("a",this.$root.$options.router.$options.routes)
                this.$root.$options.router.$options.routes.forEach(route=>{
                    if(route.path===this.$root.$options.router.current){
                        component=route.component
                    }
                    
                })
                return h(component)
            }

        }

    })

}
    







export default Router