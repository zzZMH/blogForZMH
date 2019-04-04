import {
  get,
  post
} from './base'

const install = function (Vue, config = {}) {
  Vue.prototype.$_get = get
  Vue.prototype.$_post = post
  console.log(Vue.prototype)
}

export default install
