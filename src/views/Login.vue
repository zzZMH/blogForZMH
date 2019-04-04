<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text" @click="getNavData">文字按钮</el-button>
  </div>
</template>

<script>
import { urlLogin } from '../../api'

export default {
  methods: {
    getNavData () {
      this.$_post(urlLogin, {}, {}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
