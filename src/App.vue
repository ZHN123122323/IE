<template>
  <div id="app">
    <div style="position:fixed; z-index:999;top:0px; left:0; right:0; background-color:white">
    <img src="../views/pictures/logo2.jpg" alt="logo" style="width:400px; height:100px;">
    <!--菜单样式  style of menu -->
    <el-menu :default-active="this.$router.path" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <span style="font-size:25px; font-family:'Vollkorn', serif;">{{ item.navItem }}</span>
      </el-menu-item>
    </el-menu>
    </div>
    <br><br><br><br><br>

    <!--从页面底部回到顶部 go back to the top of page-->
    <scroll-top></scroll-top>

    <!--显示路由内容 show the contents of pages-->
    <router-view></router-view>
  </div>
</template>

<script>
import toHome from '../views/toHome.vue'
//是否使用从底部快速返回顶部待定
//import ScrollTop from './components/ScrollTop.vue'

export default {
  name: 'App',
  components: {
    toHome
    //是否使用从底部快速返回顶部待定
    //'scroll-top':ScrollTop
  },

  data() {
      return {
        navList:[
          {name:'/',navItem:'Home'},
          {name:'/toFamily',navItem:'Family'},
        ]
      };
  },

  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
