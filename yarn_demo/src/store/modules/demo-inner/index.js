import actions from './action'
import mutations from './mutation'

export default {
  namespaced: true,
  state: {
    tableDataView: [1, 2, 3]
  },
  mutations,
  actions
}
