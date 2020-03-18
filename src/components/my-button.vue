<template lang="pug">
  button.s-button(:class='' :style='')
    slot
</template>
<script>
export default {
  name: 'my-button',
  data() {
    return {

    }
  },
  props: {
    theme: {},
    size: {},
    type: {}
  }
}
</script>