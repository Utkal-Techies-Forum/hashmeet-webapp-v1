export const state = () => ({
  users: [],
  user: {}
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.user.all()
    if (res.status === 200 && res.data) {
      commit('SET_USERS', res.data)
    } else {
      // Handle error here
    }
  },

  async get_user({ commit }, user) {
    const res = await this.$repositories.user.show(user)
    
    if (res.status === 200 && res.data) {
      commit('SET_USER', res.data)
    } else {
      // Handle error here
    }
  },

  async create_user({ commit }, id, user) {
    const res = await this.$repositories.user.create(id, user)
    
    if (res.status === 201 && res.data) {
      commit('SET_USER', res.data.data[0])
    } else {
      // Handle error here
    }
  },
}