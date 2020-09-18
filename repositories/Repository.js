import axios from 'axios'

const baseURL = process.env.VUE_APP_UTF_API

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  }
})
