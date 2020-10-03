//const resource = '/auth/login';
const resource = 'https://run.mocky.io/v3/adb71443-4c69-4610-a984-8aeed1ec92cc';

export default ($axios) => ({
  signin (payload) {
    return RepositoryV1.post(`${resourceSigin}`, payload)
  }
})
