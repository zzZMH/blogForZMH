import {
  get,
  post
} from './base'

const install = (Vue) => {
  Vue.prototype.$_get = get
  Vue.prototype.$_post = post
}

export default install
