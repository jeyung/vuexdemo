<template>
  <div id="app">
    <div class="wapper">
      <div class="left">
        <leftlist></leftlist>
      </div>
      <div class="right">
        <rightcontent></rightcontent>
      </div>
    </div>


  </div>
</template>

<script>
  import messagelist from './components/messagelist.vue'
  import messagecontent from './components/messagecontent.vue'

  export default {
    name: 'app',
    components: {
      leftlist: messagelist,
      rightcontent: messagecontent
    }
  }
</script>

<style lang="less">
#app {
  .wapper{
    width: 800px;
    height: 650px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    .left{
      width: 30%;
      height: 90%;
      border: 1px solid #000;
    }
    .right{
      width: 65%;
      height: 90%;
      border: 1px solid #000;
    }
  }
}
</style>
