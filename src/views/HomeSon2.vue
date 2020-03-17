<template lang="pug">
  div.main 
    p homeSon2
    span 标题: 
    input(v-model='text')
</template>
<script>
export default {
  name: 'HomeSon2',
  data() {
    return {
      text: 't2'
    }
  },
  mounted(){
  },
  
}
</script>
<style lang="scss" scoped>
  
</style>