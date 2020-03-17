<template>
  <div class="home">
    <HelloWorld msg="home 传给 helloworld 组件的 string" />
    <input type="text" v-model="text" />
    <p class="mt20 mb20">
      下面是子路由 另外son1子路由是被缓存的
      <router-link to="/son1">Son1</router-link> | 
      <router-link to="/son2">Son2</router-link>
    </p>
    <keep-alive include="HomeSon1"> 
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      text: 'text'
    }
  }
}
</script>
