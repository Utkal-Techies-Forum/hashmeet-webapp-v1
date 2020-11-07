//const resource = '/auth/login';
const resourceSigin = 'http://localhost:3000/user/signin';

export default ($axios) => ({
  signin (payload) {
    return $axios.post(`${resourceSigin}`, payload)
  }
})
