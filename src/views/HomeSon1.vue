<template lang="pug">
  div.main 
    p homeSon1
    span 标题: 
    input(v-model='text')
</template>
<script>
export default {
  name: 'HomeSon1',
  data() {
    return {
      text: 't1'
    }
  },
  mounted(){
  },
  
}
</script>
<style lang="scss" scoped>
  
</style>