import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_hosts: [{
      'group': '北京',
      'hosts': ['1.1.1.1']
    }]
  },
  mutations: {
    changeAllHostsData (state, data) {
      console.log(data, 'changeAllHostsData');
      try {
        state.all_hosts = data.all_hosts  // 将接口获取的数据给state
      } catch (error) {
        console.log(error)
        state.all_hosts =  [{
          'group': '北京',
          'hosts': ['1.1.1.1']
        }]
      }
      
    },
  },
  actions: {

  }
})
