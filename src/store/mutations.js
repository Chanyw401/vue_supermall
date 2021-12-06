export default {    //mutations目的就是为了修改state里的数据，每个方法尽可能完成的事件单一一点
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}