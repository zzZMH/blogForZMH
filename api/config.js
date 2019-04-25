import axios from 'axios'

axios.defaults.withCredentials = false
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use((config) => {
  if (config && config.headers) {
    config.headers.token = 'zmh'
  }
  console.log(config)
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, (error) => {
  return Promise.reject(error)
})

export default axios
