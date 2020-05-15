<template>
  <div class="testArea">
    <div class="instruction i1">
      <img class="img" src="@/images/common/pic_instructions@3x.png" alt="">
    </div>
    <div class="instruction1 i2">
      <p class="p">ssds</p>
      <img src="" alt="">
    </div>
    <div>
      <div class="is3">
        <div class="is33">
          <div>
            <div class="is333">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'instruction',
    data() {
      return {
        isM: "12"
      }
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