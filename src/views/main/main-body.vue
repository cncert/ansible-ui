<template>
    <div class="flex-style">
        <el-container>
            <el-header>
              <!--使用第三方阿里库图标https://blog.csdn.net/qq_32113629/article/details/79740949-->
              <div class="user-bar align-left">
                <span class="iconfont icon-ansiblefill"></span>
              </div>
              <div class="user-bar align-right">
                <!-- <span class="iconfont icon-user"></span> -->
                <el-menu 
                :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect" 
                background-color="#23262e"
                active-text-color="#409EFF"
                text-color="white"
                show-timeout=100
                menu-trigger=click
                >
                  <el-submenu index="1">
                    <template slot="title"> <span class="iconfont icon-user"></span></template>
                    <el-menu-item index="1-1" >用户信息</el-menu-item>
                    <el-menu-item index="1-2" >登出</el-menu-item>
                  </el-submenu>
                </el-menu>
              </div>
            </el-header>
            <el-container>
                <el-aside>
                  <LeftAside></LeftAside>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import LeftAside from "../../components/left-aside.vue";

export default {
  components: {
    LeftAside
  }
};
</script>

<style scoped>
.flex-style {
  border: 0px solid #eee;
  display: flex; /* 自适应屏幕高度*/
  min-height: 100vh; /* 自适应屏幕高度*/
  flex-direction: column; /* 自适应屏幕高度*/
}

.el-header,
.el-footer {
  padding: 0;
  background-color: #23262e;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #393d49;
  color: #333;
  text-align: center;
  line-height: 100%;
  width: 15% !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.align-right {
  float: right;
}
.user-bar {
  width: 5%;
}
.align-left {
  float: left;
}
</style>
