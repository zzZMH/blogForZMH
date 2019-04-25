<template>
  <div id="app">
      <div class="background bgImg"></div>
      <div class="background bgMB"></div>
      <div class="bgCont">
        <el-row type="flex" justify="center">
          <el-col :span="24" align="center" class="head">
            <div class="headImg"></div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="24" align="center">
            <div>Welcom To My Territory</div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="24" align="center">
            <div>I Can Because I Think I Can</div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="17" class="bgColor borderRadius nav">
            <el-col :span="18">
              <div class="navL">
                <router-link to="/">首页</router-link>
                <router-link to="/about">前端开发</router-link>
                <router-link to="/login">后端开发</router-link>
                <router-link to="/aaa">数据库</router-link>
                <router-link to="/bbb">留言</router-link>
              </div>
            </el-col>
            <el-col :span="6" align="center">
              <div class="navR">
                <el-tooltip content="1273540550" placement="bottom" effect="light">
                  <a href="javascript:void(0);">
                    <span class="icon iconfont icon-qq"></span>
                    <span class="icon-txt">QQ</span>
                  </a>
                </el-tooltip>
                <el-tooltip content="zmhaohao" placement="bottom" effect="light">
                  <a href="javascript:void(0);">
                    <span class="icon iconfont icon-wechat"></span>
                    <span class="icon-txt">WeChat</span>
                  </a>
                </el-tooltip>
                <el-tooltip content="https://github.com/zzZMH" placement="bottom" effect="light">
                  <a href="https://github.com/zzZMH" target="_blank">
                    <span class="icon iconfont icon-github"></span>
                    <span class="icon-txt">GitHub</span>
                  </a>
                </el-tooltip>
              </div>
            </el-col>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="17" class="bgColor borderRadius content" align="center">
            <el-col :span="18" align="center">
              <div class="contL">
                <router-view/>
              </div>
            </el-col>
            <el-col :span="6" align="center">
              <div class="contR">
                <div class="typeTag"></div>
              </div>
            </el-col>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="24" align="center" class="foot">
            <div>I Can Because I Think I Can</div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<style lang="less">
/* Common Styles */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
}

.bgColor {
  background: rgba(255, 255, 255, .8);
}

.borderRadius {
  border-radius: 5px;
}

/* User Diy Styles */
.bgImg {
  background-image: url('./assets/img/bg-1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

.bgMB {
  background: url('./assets/img/mengBan.png');
  background-repeat: repeat;
  z-index: 0;
}

.bgCont {
  position: relative;
  padding-top: 20px;
  z-index: 1;
}

.headImg {
  width: 130px;
  height: 130px;
  background-image: url('./assets/img/headIcon.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.nav {
  margin: 20px 0;
  padding: 0 10px;
  min-width: 1100px;

  a {
    display: inline-block;
    padding: 15px 20px;
    text-decoration: none;
    color: #515151;
    outline: 0;
  }

  .navL {
    .router-link-exact-active, a:hover {
      color: red;
      padding-bottom: 12px;
      border-bottom: 3px solid red;
    }
  }

  .navR {
    a {
      color: #515151;
      padding: 15px 10px;
    }

    a:hover {
      color: #41aa7b;
      padding-bottom: 14px;
      border-bottom: 3px solid #41aa7b;
    }

    .icon-qq {
      font-size: 15px;
    }

    .icon-github {
      font-size: 17px;
    }

    .icon-txt {
      margin-left: 3px;
    }
  }
}

.content {
  min-width: 1100px;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  color: #515151;

  .contL {
    border-radius: 5px 0 0 0;
    border-right: 1px dashed #515151;
  }

  .contR {
    border-radius: 0 5px 0 0;

    .typeTag {
      background: rgba(255, 255, 255, .6);
      padding: 10px;
      margin: 10px;
    }
  }
}
</style>
