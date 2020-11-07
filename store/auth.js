export const state = () => ({
  accessToken: ''
})

export const mutations = {
  SET_ACCESS_TOKEN(state, accessToken) {
    state.accessToken = accessToken
  }
}

export const actions = {
  async signin({ commit }, user) {
    const res = await this.$repositories.auth.signin(user)
    
    if (res.status === 200 && res.data) {
      commit('SET_ACCESS_TOKEN', res.data.data[0])
    } else {
      // Handle error here
    }
  }
}