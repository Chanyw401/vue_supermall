import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import modules from "@/store/modules";
import getters from "@/store/getters";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations,
  actions,
  modules,
  getters
  // actions:{
  //   addCart(context,payload){
  //     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
  //     if(oldProduct){
  //       context.commit('addCounter',oldProduct)
  //     }else{
  //       payload.count = 1
  //       context.commit('addToCart',payload)
  //     }
  //   }
  // },
  // actions:{
  //   addCart(context,payload){
  //     return new Promise((resolve,reject) =>{
  //       let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
  //       if(oldProduct){
  //         context.commit('addCounter',oldProduct)
  //         resolve('当前的商品数量加1')
  //       }else{
  //         payload.count = 1
  //         context.commit('addToCart',payload)
  //         resolve('添加了心仪商品')
  //       }
  //     })
  //   }
  // },
  // mutations:{
  //   addCounter(state,payload){
  //     payload.count++
  //   },
  //   addToCart(state,payload){
  //     payload.checked = true
  //     state.cartList.push(payload)
  //   }
  // },
})
