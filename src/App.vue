<template>
  <div id="app">
    <router-view/> <!--自动导入router.js中的component-->
  </div>
</template>

<style lang="scss">
body {
  /* 修改body样式 */
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  /* background: url('assets/homepage.jpg'); */
  
}
.el-menu.el-menu--horizontal {
  border: solid 0px !important
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
