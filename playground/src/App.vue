<script setup lang="ts">
import SvgIcon from './components/SvgIcon.vue'
defineOptions({
  name: 'App',
})
</script>

<template>
  <div>
    app

    <SvgIcon name="gather_buoys" style="font-size: 60px" />
    <SvgIcon name="asset" style="font-size: 60px" />
    <SvgIcon name="copy" style="font-size: 60px; color: red" />
  </div>
</template>

<style scoped lang="scss"></style>
