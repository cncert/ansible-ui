<template>
    <div class="flex-style">
        <el-container>
            <el-header>
              <!--使用第三方阿里库图标https://blog.csdn.net/qq_32113629/article/details/79740949-->
              <div class="user-bar align-left">
                <span class="iconfont icon-ansiblefill"></span>
              </div>
              <div class="user-bar align-right">
                <span class="iconfont icon-user"></span>
              </div>
            </el-header>
            <el-container>
                <el-aside width="15%">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.flex-style{
    border: 0px solid #eee;
    display: flex;  /* 自适应屏幕高度*/
    min-height: 100vh;  /* 自适应屏幕高度*/
    flex-direction: column;  /* 自适应屏幕高度*/
}
 .el-header, .el-footer {
    padding: 0;
    background-color: #23262E;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #393D49;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
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
  .align-right{
    float: right;
  }
  .user-bar{
    width: 5%
  }
  .align-left{
    float: left;
  }
  
</style>
