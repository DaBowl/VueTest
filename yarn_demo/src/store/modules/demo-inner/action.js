import {
  demoService

} from '../../service/demo-service'

export default {
  /**
   * demo
   *
   * @param {*} context
   * @returns
   */
  demo (context, payload) {
    return demoService(payload).then((res) => {
      context.commit('demoUpdata', res)
    })
  }
}
