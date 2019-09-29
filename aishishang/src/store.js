import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      goodInCart:[],
  },
  mutations: {
    // addtocart(state,good){
    //    var findGood = state.goodInCart.find(function(item){
    //      return good.id==item.id
    //    });
    //    if(!findGood){
    //      Vue.set(good,'count',1);
    //      state.goodInCart.push(good);
    //    }
    //    else{
    //      if(findGood.count<5) findGood.count++;
    //    }
    //  }
  },
  actions: {

  }
})
