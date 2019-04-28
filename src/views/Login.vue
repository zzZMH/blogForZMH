<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text" @click="getNavData">文字按钮</el-button>
    <mark-down @on-save="save"></mark-down>
  </div>
</template>

<script>
import { urlLogin } from '../../api'
import MarkDown from '../components/markdown/index'

export default {
  components: {
    MarkDown
  },
  methods: {
    getNavData () {
      this.$_get(urlLogin).then(res => {
        console.log(res.result)
      })
    },
    save (res) {
      console.log(res)
    }
  }
}
</script>
