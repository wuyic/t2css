<template>
  <div class="instruction i1" :class="{selected: false}">
   <img class="img" src="@/images/common/pic_instructions@3x.png" alt="">
  </div>
  <div class="instruction1 i2">
    <p class="p">ssds</p>
    <img src="" alt="">
  </div>
</template>

<script>

  export default {
    name: 'instruction',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}

  }
</script>

<style lang="less" scoped>
  .instruction {
    height: 100%;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 0;

    img {
      width: 100vw;
      height: auto;
    }
  }
</style>