import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './gettres'
Vue.use(Vuex);


// let getters={
//     title:state=>state.title,
// }
//创建一个store仓库
// const store = new Vuex.Store({
//     //state用来存放数据的对象
//     state:{
//     //初始值、存放的东西
//         title:'商城'
//     },
//     //定义取数据
//     getters:{
//         // title:function(state){
//         //     return state.title;
//         // }
//         title:state=>state.title,
//         }
//     })
//  export default store;

 let store = new Vuex.Store({
    actions,
    mutations,
    getters,
    state
  });
  
  export default store;