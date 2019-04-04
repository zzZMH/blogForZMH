import axios from './config'
import qs from 'qs'

export const post = (url, data, extend = {
  isJson: true,
  cache: false
}) => {
  let defaultConfig = {
    url,
    method: 'POST',
    data: extend.isJson ? data : qs.stringify(data)
  }
  let config = {
    ...defaultConfig,
    ...extend
  }
  return axios(config).then(res => {
    Promise.resolve(res)
  }, err => {
    Promise.reject(err)
  })
}

export const get = (url, data, extend = {
  cache: false
}) => {
  let defaultConfig = {
    url,
    method: 'GET',
    params: data
  }
  let config = {
    ...defaultConfig,
    ...extend
  }
  return axios(config).then(res => {
    Promise.resolve(res)
  }, err => {
    Promise.reject(err)
  })
}
