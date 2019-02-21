<template>
    <el-row>
         <el-col>
            <h4 style="color:white;cursor:pointer">正在执行的任务</h4>
            <el-menu
            :default-active="this.$route.path"
            router
            class="el-menu-vertical-demo aside-text-align"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1" >
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>机器管理</span>
                </template>
                <el-menu-item index="1-1">全部主机</el-menu-item>
                <el-submenu index="1-2">
                    <template slot="title">主机分组</template>
                    <el-menu-item v-for="group in host_groups" 
                      :key="group.id" 
                      :index="1-2-1">
                        {{group.group}}
                        
                    </el-menu-item>
                    
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">playbook管理</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>


<script>
export default {
  data() {
    return {
      all_hosts: []
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    host_groups: function(){
      console.log(this.$store.state.all_hosts)
      return this.$store.state.all_hosts
      }
    }
};
</script>


<style scoped>
.aside-text-align {
  text-align: left;
}
</style>
