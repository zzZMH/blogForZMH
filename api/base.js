import axios from './config'
import qs from 'qs'

export const get = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params)).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}
