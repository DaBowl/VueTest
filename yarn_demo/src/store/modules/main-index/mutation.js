
export default {
  /**
   * 更新
   *
   * @param {*} state
   * @param {*} payload
   */
  demoUpdata (state, payload) {
    const s = state
    s.tableLength = payload
  }
}
