<template lang="pug">
  div.main 
    p id:{{id}}
    span 标题: 
    input(v-model='text')
</template>
<script>
import { login } from '@/api'
export default {
  name: 'HShow',
  data() {
    return {
      text: 't1',
      id: ''
    }
  },
  mounted() {
    // console.log(this,this.$route);
    this.id = this.$route.params.id
    console.log(login);
  },
  beforeRouteEnter(to, from, next) {
    // console.log({to, from, next});
    next((vm) => {
      // console.log({vm});
    })
  }
}
</script>
<style lang="scss" scoped></style>
