const resource = '/auth/login';

export default ($axios) => ({
  signin (payload) {
    return RepositoryV1.post(`${resourceSigin}`, payload)
  }
})
