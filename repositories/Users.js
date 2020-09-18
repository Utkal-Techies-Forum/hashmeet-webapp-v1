import RepositoryV1 from './Repository'

const resourceSignup = '/users'
const resourceSigin = '/users/auth'

export default {
  register (payload) {
    return RepositoryV1.post(`${resourceSignup}`, payload)
  },

  signin (payload) {
    return RepositoryV1.post(`${resourceSigin}`, payload)
  }
}
