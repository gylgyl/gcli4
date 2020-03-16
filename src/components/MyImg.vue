<template lang="pug">
  img(
    v-bind='$attrs'
    v-on='$listeners'
    :src='require(`@assets/images/${name}.png`)'
    :style="{'width': width ? width + 'px' : size + 'px', 'height': height ? height + 'px' : size + 'px' }"
  )
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 16
    }
  }
}
</script>
