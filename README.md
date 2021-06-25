# 1. Introduction

 this project is meant to have an comprensive explanation of the mecanism of Vue.Js

There are some keypoints of Vue.JS

Matering those points guarentee the flying color,

- Components Communication
- Reactivity
- Vuex and Vue Router 
- SSR realization
- Source Code and the Core Mecanism

# 2. A Youtube Project
this is also a Youtube Project, all the steps and key points has been illustrated in Youtube. It is an honor to discuss the Vue.JS with the Author(you can start with Hi！@James XD)

Each video would like to cover a list of key Points. Most important, the Videos tries to provide a clear methodology to cope with code, hence help to improve the overall programming skills.

## 2.1 VueX 
the link of Youtube Video: 

the Key Points/Questions regarding VueX:
- how Vuex is included in Vue? (as plugin, Vue.use(), options,$store)
- why Vuex can be used in any Components? (Vue prototype)
- how Vuex is used in any Components? (dispatch,commit,state, this.$store)
- how does Vue.use(Vuex) work? (install)
- what is default parameter in `actions`?(`this`: point at instance of new Vuex.store)
- Given the parameter in `actions`,can it be changed automatically? (yes, depend on runtime env) How to solve this problem? (hard bind)
- Why the asynchronous code shall be put in `actions`? what type is the return value of `actions`?
- Based on the designed logic of Vuex, How can we optimize the data storage in a Project?


Note: Pstore is the folder for customaized/polyfill  Vuex


## 2.2 Vue Router 
the link of Youtube Video: 
the Key Points/Questions regarding Vue Router:
- Since Vue Router is also a plug in, what are those characteristics in common?(Vue.use, new Vue({router}), new router...)
- Vue router has `<router-link>` and `<vue-view>` that can be used in any Components, how to realized it? (global components)
- how does `<router-link>` work? (read the attribute "to=", then jump to that link)
- how does `<vue-view>` work?  (connect the view component with the link jumped to)
- How to create global components in non-runtime? What is Vnodes? what does render(h) do?
- is there any  `this` bind issue also in Vue Router?



## 2.3 Components Communication

## 2.4 Reactivity

## 2.5 SSR


# 3. Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
