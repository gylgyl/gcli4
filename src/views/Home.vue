<template>
  <div class="home">
    <HelloWorld msg="home 传给 helloworld 组件的 string" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
