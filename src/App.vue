<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <header class="HEADERS">
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link class="roooo" :to="{name:'home'}">Home11</router-link>
      <router-link to="/contact">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template> 

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  computed: {
    // username() {
    //   // 我们很快就会看到 `params` 是什么
    //   // return this.$route.params.username
    // },
  },
  methods: {
    // goBack() {
    //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    // }
  },
};
</script>

<style> 
.roooo{
  color: red;
  cursor: pointer;
  margin:20px;
  }
</style>
