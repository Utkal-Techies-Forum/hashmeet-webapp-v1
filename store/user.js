export const state = () => ({
  users: [],
  user: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    console.log(user);
    state.user = user
  }
}

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.user.all()
    // const { status, data } = res
    if (res.status === 200 && res.data) {
      //   const { data } = data
      commit('SET_USERS', res.data)
    } else {
      // Handle error here
    }
  },

  async get_user({ commit }, user) {
    const res = await this.$repositories.user.show(user)
    // const { status, data } = res
    if (res.status === 200 && res.data) {
      //   const { data } = data
      commit('SET_USER', res.data)
    } else {
      // Handle error here
    }
  },

  async create_user({ commit }, id, user) {
    const res = await this.$repositories.user.create(id, user)
    // const { status, data } = res
    console.log(res.data[0]);
    if (res.status === 201 && res.data) {
      //   const { data } = data
      commit('SET_USER', res.data[0].id)
    } else {
      // Handle error here
    }
  },
}